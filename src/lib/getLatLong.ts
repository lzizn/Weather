import axios from 'axios';
import Coordinates from '../types/Coordinates';

export default async function getLatLong(place: string) {
  if (place.length < 3) {
    return alert('Must have at least 3 letters');
  }

  let coordinates: Coordinates = {};

  try {
    await axios
      .get(
        `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITIONSTACK_KEY}&query=${place}`,
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
  }

  return coordinates;
}
