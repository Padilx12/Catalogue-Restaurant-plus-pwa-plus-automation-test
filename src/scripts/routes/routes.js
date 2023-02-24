import Detail from '../views/pages/detail';
import RestaurantList from '../views/pages/restaurant-list';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': RestaurantList, // Default page
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
