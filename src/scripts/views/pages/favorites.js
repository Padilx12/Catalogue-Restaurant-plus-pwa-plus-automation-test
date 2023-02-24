import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
  },
};

export default Favorite;


// import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';

// const Favorites = {
//   async render() {
//     return `
//     <main id="mainContent" tabindex="0">
//     <div class="content">
//     <h2 class="content__heading">Favorites Restaurant</h2>
//     <div class="restaurants" id="restaurants">
//     </div>
//     </div>
//   </main>`;
//   },

//   async afterRender() {
//   // Fungsi ini akan dipanggil setelah render()
//     const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
//     const restaurantsContainer = document.querySelector('.restaurants');
//     restaurants.forEach((restaurant) => {
//       restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
//     });
//   },
// };

// export default Favorites;
