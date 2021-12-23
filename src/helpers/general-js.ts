/* ------------------------ Date and time formatting ------------------------ */
function formatDateTime(dateTime: Date) {
  const dateParts = getDateTimeParts(dateTime);
  const date = getDate(dateParts);
  const time = getTime(dateParts, dateTime);
  const timeZoneOffset = getTimezoneOffset(dateTime);

  return `${date} ${time} ${timeZoneOffset}`;
}

function getDateTimeParts(dateTime: Date) {
  return new Intl.DateTimeFormat('en', {
    dateStyle: 'short',
    timeStyle: 'full',
    hour12: false,
  }).formatToParts(dateTime);
}

function getDate(dateParts: Intl.DateTimeFormatPart[]) {
  const year = dateParts.find((part) => part.type === 'year')?.value || '';
  const month = dateParts.find((part) => part.type === 'month')?.value || '';
  const day = dateParts.find((part) => part.type === 'day')?.value || '';

  return `${year}-${month}-${day}`;
}

function getTime(dateParts: Intl.DateTimeFormatPart[], dateTime: Date) {
  const hour = dateParts.find((part) => part.type === 'hour')?.value || '';
  const minute = dateParts.find((part) => part.type === 'minute')?.value || '';
  const second = dateParts.find((part) => part.type === 'second')?.value || '';
  const millisecond = dateTime.getMilliseconds();

  return `${hour}:${minute}:${second}.${millisecond}`;
}

function getTimezoneOffset(dateTime: Date) {
  const timeZoneOffset = dateTime.getTimezoneOffset() / 60;
  const sign = timeZoneOffset < 0 ? '+' : '-';

  return `${sign}${timeZoneOffset < 10 ? '0' : ''}${Math.abs(
    timeZoneOffset
  )}`.padEnd(5, '0');
}

export { formatDateTime };
