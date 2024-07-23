import moment from 'moment';

export function getFormattedDate(timestamp: number) {
  if (!timestamp) return '';

  const date = moment.unix(Number(timestamp));
  return `${date.format('M')}/${date.format('DD')}, ${date.format('dddd')}`;
}

