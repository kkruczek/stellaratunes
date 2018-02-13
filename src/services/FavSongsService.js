/* global localStorage */

class FavSongsService {
  fetchFavSongs() {
    const favSongs = JSON.parse(localStorage.getItem('favSongs'));
    if (favSongs) {
      return favSongs;
    }
  }

  setFavSongs(favSongs) {
    localStorage.setItem('favSongs', JSON.stringify(favSongs));
  }
}

export default FavSongsService;
