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

io.on('connection', (socket) => {
  console.log('Client connected');

  const dockerProcess = spawn('docker', ['run', '-i', '--rm', 'msh']);

  dockerProcess.stdout.on('data', (data) => {
    console.log('Docker output:', data.toString());
    socket.emit('output', data.toString());
  });

  dockerProcess.stderr.on('data', (data) => {
    console.error('Docker error output:', data.toString());
    socket.emit('output', data.toString());
  });

  socket.on('input', (input) => {
    console.log('Received input:', input);  // Log the input received from the client
    dockerProcess.stdin.write(input);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    dockerProcess.kill();
  });
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});