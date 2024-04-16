import { Server } from 'socket.io';
import type { Socket } from 'socket.io';
import { spawn } from 'child_process';

let io: Server;

export function getSocketIO() {
  return io;
}

export default function setupSocketIO(httpServer: any) {
  io = new Server(httpServer);

  io.on('connection', (socket: Socket) => {
    console.log('Client connected');

    const dockerProcess = spawn('docker', ['run', '-i', 'msh']);

    dockerProcess.stdout.on('data', (data) => {
      socket.emit('output', data.toString());
    });

    dockerProcess.stderr.on('data', (data) => {
      socket.emit('output', data.toString());
    });

    socket.on('input', (input) => {
      dockerProcess.stdin.write(input);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
      dockerProcess.kill();
    });
  });
}