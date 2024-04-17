import { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { io } from 'socket.io-client';

const Cmd = () => {
  const terminalRef = useRef(null);
  const socketRef = useRef(null);
  const inputBufferRef = useRef('');

  useEffect(() => {
    const terminal = new Terminal({
      fontFamily: '"Fira Code", monospace',
      fontSize: 14,
      cursorBlink: true,
      theme: {
        background: '#1e1e1e',
        foreground: '#d4d4d4',
        cursor: '#f0f0f0',
        selection: '#264f78',
      },
    });

    terminal.open(terminalRef.current);

    const socketInstance = io('http://localhost:4000');
    socketRef.current = socketInstance;

    socketInstance.on('output', (data) => {
      terminal.write(data);
    });

    terminal.onKey(({ key, domEvent }) => {
        const char = domEvent.key;
        if (char === 'Enter') {
          socketInstance.emit('input', inputBufferRef.current + '\n');
          inputBufferRef.current = '';
        } else if (char === 'Backspace') {
          if (inputBufferRef.current.length > 0) {
            terminal.write('\b \b');  // Move cursor back, print space to delete, and move back again
            inputBufferRef.current = inputBufferRef.current.substring(0, inputBufferRef.current.length - 1);
          }
        } else {
          inputBufferRef.current += char;
          terminal.write(char);
        }
      });
  

    return () => {
      socketInstance.disconnect();
      terminal.dispose();
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        padding: '8px',
      }}
    >
      <div
        ref={terminalRef}
        style={{
          height: '400px',
          width: '50%',
        }}
      />
    </div>
  );
};

export default Cmd;