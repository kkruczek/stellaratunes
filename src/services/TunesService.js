/* global fetch */
import { API_URL } from '../utils/constants';

class TunesService {
  getSongs(query) {
    return fetch(`${API_URL}?term=${query}`)
      .then(response => response.json())
      .then(data => data.results)
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }
}

export default TunesService;
