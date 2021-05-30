import axios from 'axios';
import Coordinates from '../types/Coordinates';

export default async function getLatLong(
  place: string,
): Promise<void | Coordinates> {
  if (place.length < 3) {
    return alert('Must have at least 3 letters');
  }

  let coordinates: Coordinates = {};
  const formattedPlace = place.replaceAll(' ', '+').replaceAll(',', '+');
  try {
    await axios
      .get(
        `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITIONSTACK_KEY}&query=${formattedPlace}`,
      )
      .then((response) => {
        if (
          response.data.data[0]?.latitude &&
          response.data.data[0]?.longitude
        ) {
          coordinates = response.data.data[0];
        } else {
          alert("Sorry. We couldn't find a city, try again.");
        }
      });
  } catch (error) {
    console.error(error);
    alert('Error while collecting coordinates data.');
  }

  return coordinates;
}
