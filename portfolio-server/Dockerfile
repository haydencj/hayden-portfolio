# Use a minimal base image
FROM alpine:latest

# Install dependencies for your C program
RUN apk add --no-cache gcc libc-dev

# Add a new user 'mshuser' with no home directory, no shell, and no password
RUN adduser -D -H -s /sbin/nologin mshuser

# Copy your C program into the container
COPY msh.c /app/msh.c

# Compile your C program
RUN gcc -o /app/msh /app/msh.c

# Change the owner of the app to the new user
RUN chown mshuser:mshuser /app/msh

# Switch to the new user
USER mshuser

# Run your program
CMD ["/app/msh"]
