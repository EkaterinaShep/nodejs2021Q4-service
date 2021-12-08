import { ServerOpts } from '../types';

function listenServer(serverOpts: ServerOpts) {
  serverOpts.server.listen(serverOpts.PORT, serverOpts.HOST, (err, address) => {
    if (err) {
      serverOpts.server.log.error(err);
      process.exit(1);
    }

    console.log(`Server running at ${address}`);
  });
}

export { listenServer };
