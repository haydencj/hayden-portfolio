import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const Cmd = () => {
  console.log('Rendering CMD component');
  const terminalRef = useRef(null);
  const terminalInstanceRef = useRef(null); // Reference to store the Terminal instance
  const socketRef = useRef(null);

  useEffect(() => {
    console.log('useEffect in CMD component');

    const loadXterm = async () => {
      if (!terminalInstanceRef.current && terminalRef.current) {
        console.log("Creating a new terminal instance"); // Log when a new instance is created

        // Check if a Terminal instance already exists
        const { Terminal } = await import('@xterm/xterm');
        const { FitAddon } = await import('@xterm/addon-fit');
        await import('@xterm/xterm/css/xterm.css');

        const terminal = new Terminal({
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
            black: '#000000',
            red: '#ff5555',
            green: '#50fa7b',
            yellow: '#f1fa8c',
            blue: '#6272a4',
            magenta: '#ff79c6',
            cyan: '#8be9fd',
            white: '#bfbfbf',
            brightBlack: '#4d4d4d',
            brightRed: '#ff6e67',
            brightGreen: '#5af78e',
            brightYellow: '#f4f99d',
            brightBlue: '#caa9fa',
            brightMagenta: '#ff92d0',
            brightCyan: '#9aedfe',
            brightWhite: '#e6e6e6',
          },
        });

        terminalInstanceRef.current = terminal; // Store the Terminal instance in the ref

        const fitAddon = new FitAddon();
        terminal.loadAddon(fitAddon);
        terminal.open(terminalRef.current);
        fitAddon.fit();

        socketRef.current = io('http://localhost:4000');
        socketRef.current.on('output', (data) => {
          terminal.write(data);
        });

        terminal.onData((data) => {
          socketRef.current.emit('input', data);
        });

        terminal.focus();
      }
    };

    loadXterm();

    return () => {
      if (terminalInstanceRef.current) {
        terminalInstanceRef.current.dispose(); // Dispose the Terminal instance
        terminalInstanceRef.current = null; // Clear the ref after disposing
      }
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  return <section ref={terminalRef} />;
};

export default Cmd;
