import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';

class App {
  constructor({
    button, closeMenu, drawer, content,
  }) {
    this._button = button;
    this._closeMenu = closeMenu;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    /*
    * function skip-content @dicoding
    */
    const skipLinkElem = document.querySelector('.skip-content');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
