/* global fetch */
import { API_URL } from '../utils/constants';

class TunesService {
  getSongs(query) {
    return fetch(`${API_URL}?term=${query}`)
      .then(response => response.json())
      .then(data => data.results)
      .catch((error) => {
        console.error(error);
      });
  }
}

export default TunesService;
