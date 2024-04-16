import { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import { io, Socket } from 'socket.io-client';
import 'xterm/css/xterm.css';

const Cmd: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminal = useRef<Terminal>();
  const socket = useRef<Socket>();

  useEffect(() => {
    if (terminalRef.current) {
      terminal.current = new Terminal();
      terminal.current.open(terminalRef.current);

      socket.current = io('http://localhost:3000');

      socket.current.on('output', (data: string) => {
        terminal.current?.write(data);
      });

      terminal.current.onData((input) => {
        socket.current?.emit('input', input);
      });
    }

    return () => {
      if (terminal.current) {
        terminal.current.dispose();
      }
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  return <div ref={terminalRef} />;
};

export default Cmd;