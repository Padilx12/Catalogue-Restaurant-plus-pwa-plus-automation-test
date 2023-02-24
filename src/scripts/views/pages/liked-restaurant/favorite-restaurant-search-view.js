import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <main id="mainContent" tabindex="0">
          <div class="content">
            <input id="query" type="text"  class="search-box" type="search" placeholder="Search for a restaurant" aria-label="Search for a restaurant">
            <h2 class="content__heading">Favorites Restaurant</h2>
              <div id="restaurant" class="restaurant">
              </div>
            </div>
          </div>
          </main>
        `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurant(restaurant = []) {
    this.showFavoriteRestaurant(restaurant);
  }

  showFavoriteRestaurant(restaurant = []) {
    let html;
    if (restaurant.length) {
      html = restaurant.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurant').innerHTML = html;
   
    document.getElementById('restaurant').dispatchEvent(new Event('restaurant:updated'));
  }

  _getEmptyRestaurantTemplate() {

    return '<div class="restaurant-item__not__found ">Tidak ada restaurant untuk ditampilkan</div>';
  }
}
export default FavoriteRestaurantSearchView;
