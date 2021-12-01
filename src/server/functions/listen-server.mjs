function listenServer({ server, PORT, HOST }) {
  server.listen(PORT, HOST, (err, address) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }

    console.log(`Server running at ${address}`);
  });
}

export { listenServer };
