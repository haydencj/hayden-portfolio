FROM gcc:latest

WORKDIR /app

COPY . .

RUN gcc msh.c -o msh

CMD ["./msh"]
