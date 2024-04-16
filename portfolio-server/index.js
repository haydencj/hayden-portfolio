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

// Start a single Docker process when the server starts
const dockerProcess = spawn('docker', ['run', '-i', '--rm', 'msh:latest']);

dockerProcess.stdout.on('data', (data) => {
  console.log('Docker output:', data.toString());
  io.emit('output', data.toString());  // Emit to all clients
});

dockerProcess.stderr.on('data', (data) => {
  console.error('Docker error:', data.toString());
  io.emit('output', data.toString());
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('input', (input) => {
    console.log('Received input:', input);
    dockerProcess.stdin.write(input);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
