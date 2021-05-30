import moment from 'moment';

export default function getFormattedDate(
  timestamp: string | undefined,
): string {
  let formattedDate = '';
  if (timestamp) {
    const date = moment.unix(Number(formattedDate));
    formattedDate = `${date.format('M')}/${date.format('DD')}, ${date.format(
      'dddd',
    )}`;
  }
  return formattedDate;
}
