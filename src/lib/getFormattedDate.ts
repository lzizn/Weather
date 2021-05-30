import moment from 'moment';

export default function getFormattedDate(timestamp: string | undefined) {
  if (timestamp) {
    const date = moment.unix(Number(timestamp));
    return `${date.format('M')}/${date.format('DD')}, ${date.format('dddd')}`;
  }
}
