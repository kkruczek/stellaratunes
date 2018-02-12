/* eslint-disable */

class FavSongsService {
  fetchFavSongs() {
    const favSongs = JSON.parse(localStorage.getItem('favSongs'));
    if (favSongs) {
      return favSongs;
    } else {
      return null;
    }
  }

  addFavSong(favSongs) {
    localStorage.setItem('favSongs', JSON.stringify(favSongs));
  }
}

export default FavSongsService;
