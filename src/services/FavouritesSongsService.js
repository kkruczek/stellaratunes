/* global localStorage */

class FavouritesSongsService {
  getFavouritesSongs() {
    let songs = JSON.parse(localStorage.getItem('favourites'));
    if (!songs) {
      songs = [];
    }
    return songs;
  }

  saveFavouritesSongs(favourites) {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }
}

export default FavouritesSongsService;
