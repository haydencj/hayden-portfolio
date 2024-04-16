import React, { useEffect, useRef } from 'react';
import { FitAddon } from '@xterm/addon-fit';
import { io } from 'socket.io-client';
import '@xterm/xterm/css/xterm.css';
import XTerm from '@xterm/xterm';

const Cmd = () => {
  const terminalRef = useRef(null);
  const terminalInstanceRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    const createTerminal = async () => {
      if (terminalRef.current && !terminalInstanceRef.current) {
        const socketInstance = io('http://localhost:4000');
        socketRef.current = socketInstance;

        const terminal = new XTerm.Terminal({
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          fontSize: 14,
          lineHeight: 1.5,
          cursorBlink: true,
          cursorStyle: 'bar',
          theme: {
            background: '#282a36',
            foreground: '#f8f8f2',
            cursor: '#f8f8f2',
            selection: '#44475a',
            // ... (rest of the theme configuration)
          },
        });

        const fitAddon = new FitAddon();
        terminal.loadAddon(fitAddon);
        terminal.open(terminalRef.current);
        fitAddon.fit();

        terminalInstanceRef.current = terminal;

        socketInstance.on('output', (data) => {
          terminal.write(data);
        });

        terminal.onData((data) => {
          socketInstance.emit('input', data);
        });

        terminal.focus();
      }
    };

    createTerminal();

    return () => {
      terminalInstanceRef.current?.dispose();
      socketRef.current?.disconnect();
    };
  }, []);

  return (
    <div
      ref={terminalRef}
      onClick={() => terminalInstanceRef.current?.focus()}
      style={{
        width: '100%',
        height: '400px',
        padding: '10px',
        margin: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

export default Cmd;