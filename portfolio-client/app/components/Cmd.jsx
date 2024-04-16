import React, { useEffect, useRef } from 'react';
import { XTerm } from 'xterm-for-react';
import { FitAddon } from '@xterm/addon-fit';
import { io } from 'socket.io-client';

const Cmd = () => {
  const xtermRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    const socketInstance = io('http://localhost:4000');
    socketRef.current = socketInstance;

    socketInstance.on('output', (data) => {
      xtermRef.current.terminal.write(data);
    });

    if (xtermRef.current) {
      xtermRef.current.terminal.onData((data) => {
        socketInstance.emit('input', data);
      });
    }

    return () => {
      socketInstance.disconnect();
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
      <XTerm
        ref={xtermRef}
        options={{
          fontFamily: '"Fira Code", monospace',
          fontSize: 14,
          cursorBlink: true,
          cursorStyle: 'underline',
          theme: {
            background: '#1e1e1e',
            foreground: '#d4d4d4',
            cursor: '#f0f0f0',
            selection: '#264f78',
          },
        }}
        style={{ height: '400px', width: '50%' }}
      />
    </div>
  );
};

export default Cmd;