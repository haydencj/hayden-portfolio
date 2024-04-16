import { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import 'xterm/css/xterm.css';

const Cmd: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminal = useRef<Terminal>();

  useEffect(() => {
    if (terminalRef.current) {
      terminal.current = new Terminal();
      terminal.current.open(terminalRef.current);
      // Add any necessary terminal configurations or event listeners
    }

    return () => {
      if (terminal.current) {
        terminal.current.dispose();
      }
    };
  }, []);

  return <div ref={terminalRef} />;
};

export default Cmd;