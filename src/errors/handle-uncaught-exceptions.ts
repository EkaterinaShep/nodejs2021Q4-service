import fs from 'fs';
import { ERR_FILE_PATH } from '../config/config';
import { formatDateTime } from '../helpers/general-js';

function handleUncaughtExceptions() {
  process.on('uncaughtException', (err) => {
    const formattedDateTime = formatDateTime(new Date());

    const message = `[${formattedDateTime}] ${err.name}: ${err.message}\n`;

    fs.writeFileSync(ERR_FILE_PATH, message, {
      flag: 'a',
    });

    process.exit(1);
  });
}

export { handleUncaughtExceptions };
