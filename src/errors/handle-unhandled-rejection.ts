import fs from 'fs';
import { ERR_FILE_PATH } from '../config/config';
import { formatDateTime } from '../helpers/general-js';

function handleUnhandledRejection() {
  process.on('unhandledRejection', (err: Error) => {
    const formattedDateTime = formatDateTime(new Date());
    const message = `[${formattedDateTime}] ${err.name}: ${err.message}\n`;

    fs.writeFileSync(ERR_FILE_PATH, message, {
      flag: 'a',
    });

    process.exit(1);
  });
}

export { handleUnhandledRejection };
