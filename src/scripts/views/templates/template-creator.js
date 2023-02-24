import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
<div class="restaurant-item__header">
<img class="restaurant-item__header__thumbnail lazyload" srcset="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous"/>
  <div class="restaurant-item__header__rating">
    <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
  </div>
<div class="restaurant-item__header__city">
 <p><i class="fa-solid fa-location-dot"></i><span class="restaurant-item__header__city__title">${restaurant.city}</span></p>
</div>
</div>
<div class="restaurant-item__content">
  <h3 class="restaurant__name" id="restaurant__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
  <p>${restaurant.description}</p>
</div>
</div>
`;
const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <img class="lazyload" srcset="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" crossorigin="anonymous"/ />
    <div class="restaurant-detail__info">
    <h2 class="restaurant__name">${restaurant.restaurant.name}</h2>
    <p class="restaurant-detail__rating">${restaurant.restaurant.rating}⭐️</P>
    <p class="restaurant-detail__category">${restaurant.restaurant.categories.map((category) => `${category.name}`).join(',')}</P>
    <p class="restaurant__address"><i class="fa-solid fa-location-dot"></i> ${`${restaurant.restaurant.address}, ${restaurant.restaurant.city}`}</P>
    <p class="restaurant-detail__description">${restaurant.restaurant.description}</p>
    </div>
    
    <div class="restaurant-detail__menulist">
    <p class="restaurant-menu__title">Menu Restaurant</p>
    <p class="restaurant__food"><span>Foods</span> ${restaurant.restaurant.menus.foods.map((food) => `<li class="menu-food">${food.name}</li>`).join('')}</P>
    <p class="restaurant__drink"><span>Drinks</span> ${restaurant.restaurant.menus.drinks.map((drink) => `<li class="menu-drink">${drink.name}</li>`).join('')}</P>
    <p class="restaurant-detail__review"><span>Reviews</span> ${restaurant.restaurant.customerReviews.map(
    (review) => ` 
      <ul class="constumer-review">  
      <li class="reviewer-name"><span><i class="fa-solid fa-user"></i></span>${review.name}</li>
      <li class="review-date"><span><i class="fa-solid fa-calendar-days"></i></span>${review.date}</li>
      <li class="review"><span><i class="fa-regular fa-comment"></i></spa>${review.review}</li>
      </ul>`,
  )
    .join('')}
    </P>
  </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
<i class="fa-regular fa-heart" aria-hidden="true"></i>
</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa-solid fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
