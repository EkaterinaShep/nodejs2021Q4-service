import { formatDateTime } from '../helpers/general-js';
import { logErrToErrFileSync } from '../logging';

function handleUncaughtExceptions() {
  process.on('uncaughtException', (err) => {
    const formattedDateTime = formatDateTime(new Date());
    const message = `[${formattedDateTime}] ${err.name}: ${err.message}\n`;

    logErrToErrFileSync(message);

    process.exit(1);
  });
}

export { handleUncaughtExceptions };
