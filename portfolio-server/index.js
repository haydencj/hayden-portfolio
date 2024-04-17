const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { spawn } = require('child_process');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

const clientToDockerProcessMap = new Map();

io.on('connection', (socket) => {
  console.log('Client connected');

  const dockerProcess = spawn('docker', ['run', '-i', '--rm', '--network', 'none', 'mavshell']);
  clientToDockerProcessMap.set(socket.id, dockerProcess);

  dockerProcess.stdout.on('data', (data) => {
    console.log('Docker output:', data.toString());
    io.emit('output', data.toString());  // Emit to all clients
  });

  dockerProcess.stderr.on('data', (data) => {
    console.error('Docker error:', data.toString());
    io.emit('output', data.toString());
  });

  socket.on('input', (input) => {
    console.log('Received input:', input);
    dockerProcess.stdin.write(input);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    const dockerProcess = clientToDockerProcessMap.get(socket.id);
    if (dockerProcess) {
      dockerProcess.kill();  // This will terminate the Docker process
      clientToDockerProcessMap.delete(socket.id);
    }
  });
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
