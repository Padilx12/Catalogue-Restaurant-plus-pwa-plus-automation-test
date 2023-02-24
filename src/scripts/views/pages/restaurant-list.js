import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `   
    <div class="hero">
      <div class="hero__inner">
      <p class="hero__tagline">Let's Explore Indonesia Culinary...</p>
      </div>
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#eeee"
        fill-opacity="1"
        d="M0,192L8.6,181.3C17.1,171,34,149,51,133.3C68.6,117,86,107,103,96C120,85,137,75,154,101.3C171.4,128,189,192,206,218.7C222.9,245,240,235,257,213.3C274.3,192,291,160,309,165.3C325.7,171,343,213,360,218.7C377.1,224,394,192,411,181.3C428.6,171,446,181,463,165.3C480,149,497,107,514,101.3C531.4,96,549,128,566,144C582.9,160,600,160,617,170.7C634.3,181,651,203,669,224C685.7,245,703,267,720,245.3C737.1,224,754,160,771,138.7C788.6,117,806,139,823,154.7C840,171,857,181,874,202.7C891.4,224,909,256,926,224C942.9,192,960,96,977,48C994.3,0,1011,0,1029,16C1045.7,32,1063,64,1080,106.7C1097.1,149,1114,203,1131,213.3C1148.6,224,1166,192,1183,154.7C1200,117,1217,75,1234,64C1251.4,53,1269,75,1286,101.3C1302.9,128,1320,160,1337,176C1354.3,192,1371,192,1389,165.3C1405.7,139,1423,85,1431,58.7L1440,32L1440,0L1431.4,0C1422.9,0,1406,0,1389,0C1371.4,0,1354,0,1337,0C1320,0,1303,0,1286,0C1268.6,0,1251,0,1234,0C1217.1,0,1200,0,1183,0C1165.7,0,1149,0,1131,0C1114.3,0,1097,0,1080,0C1062.9,0,1046,0,1029,0C1011.4,0,994,0,977,0C960,0,943,0,926,0C908.6,0,891,0,874,0C857.1,0,840,0,823,0C805.7,0,789,0,771,0C754.3,0,737,0,720,0C702.9,0,686,0,669,0C651.4,0,634,0,617,0C600,0,583,0,566,0C548.6,0,531,0,514,0C497.1,0,480,0,463,0C445.7,0,429,0,411,0C394.3,0,377,0,360,0C342.9,0,326,0,309,0C291.4,0,274,0,257,0C240,0,223,0,206,0C188.6,0,171,0,154,0C137.1,0,120,0,103,0C85.7,0,69,0,51,0C34.3,0,17,0,9,0L0,0Z"
      ></path>
    </svg>

    <main id="mainContent">
    <div class="content">
   <h2 class="content__heading" id="content__heading" tabindex="0">Explore Restaurant</h2>
    <div class="restaurants" id="restaurants">
    </div>
    </div>
    </main>`;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('.restaurants');
    restaurants.forEach((restaurant) => {
    restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
