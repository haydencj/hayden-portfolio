import { useEffect, useRef, useMemo } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { io } from 'socket.io-client';

const Cmd = () => {
  const terminalRef = useRef(null);
  const socketRef = useRef(null);

  const terminal = useMemo(() => {
    if (!terminalRef.current) return null;

    const terminal = new Terminal({
      fontFamily: '"Fira Code", monospace',
      fontSize: 14,
      fontWeight: 'normal',
      cursorBlink: true,
      cursorStyle: 'underline',
      theme: {
        background: '#1e1e1e',
        foreground: '#d4d4d4',
        cursor: '#f0f0f0',
        selection: '#264f78',
        black: '#000000',
        red: '#ce9178',
        green: '#b5cea8',
        yellow: '#dcdcaa',
        blue: '#9cdcfe',
        magenta: '#c586c0',
        cyan: '#4ec9b0',
        white: '#dcdcdc',
        brightBlack: '#808080',
        brightRed: '#f14c4c',
        brightGreen: '#16c60c',
        brightYellow: '#f9f1a5',
        brightBlue: '#3b78ff',
        brightMagenta: '#b4009e',
        brightCyan: '#61d6d6',
        brightWhite: '#f2f2f2',
      },
    });

    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(terminalRef.current);
    fitAddon.fit();

    return terminal;
  }, []);

  useEffect(() => {
    if (!terminal) return;

    const socketInstance = io('http://localhost:4000');
    socketRef.current = socketInstance;

    socketInstance.on('output', (data) => {
      terminal.write(data);
    });

    terminal.onData((data) => {
      socketInstance.emit('input', data);
    });

    terminal.focus();

    return () => {
      socketInstance.disconnect();
    };
  }, [terminal]);

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
          background: '#282a36',
        }}
      />
    </div>
  );
};

export default Cmd;
