import moment from 'moment';

export default function getFormattedDate(timestamp: number): string {
  if (!timestamp) return '';

  const date = moment.unix(Number(timestamp));
  return `${date.format('M')}/${date.format('DD')}, ${date.format('dddd')}`;
}

