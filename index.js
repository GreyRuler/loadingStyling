/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/NewsView.js":
/*!****************************!*\
  !*** ./src/js/NewsView.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewsView; }
/* harmony export */ });
/* harmony import */ var _api_News__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/News */ "./src/js/api/News.js");

class NewsView {
  static get selectorNewsContainer() {
    return '.news-container';
  }
  static get selectorReload() {
    return '#reload';
  }
  static get markup() {
    return `
			<div class="news">
				<header>
					<span>Новости мира кино</span>
					<button type="button" id="reload"
					 		class="btn btn-link text-secondary">Обновить</button>
				</header>
				<div class="news-container"></div>
				<div class="offline d-none">
					<span>Не удалось загрузить данные</span>
					<span>Проверьте подключение</span>
					<span>и обновите страницу</span>
				</div>
			</div>
		`;
  }
  static markupNews() {
    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    const news = document.createElement('div');
    const title = document.createElement('div');
    const contentContainer = document.createElement('div');
    const preview = document.createElement('div');
    const content = document.createElement('div');
    if (data) {
      title.textContent = data.title;
      preview.style.backgroundColor = data.preview;
      content.textContent = data.content;
    } else {
      news.classList.add('slug');
    }
    news.classList.add('new');
    title.classList.add('title');
    contentContainer.classList.add('d-flex');
    preview.classList.add('preview');
    content.classList.add('content');
    news.append(title, contentContainer);
    contentContainer.append(preview, content);
    return news;
  }
  constructor(element) {
    this.element = element;
  }
  render() {
    this.bindToDOM();
    this.registerEvents();
  }
  bindToDOM() {
    this.element.innerHTML = NewsView.markup;
    const newsContainer = this.element.querySelector(NewsView.selectorNewsContainer);
    newsContainer.append(NewsView.markupNews());
    newsContainer.append(NewsView.markupNews());
    newsContainer.append(NewsView.markupNews());
    this.handleNews();
  }
  registerEvents() {
    const reload = this.element.querySelector(NewsView.selectorReload);
    reload.addEventListener('click', () => {
      this.handleNews();
    });
  }
  handleNews() {
    const newsContainer = this.element.querySelector(NewsView.selectorNewsContainer);
    _api_News__WEBPACK_IMPORTED_MODULE_0__["default"].list(data => {
      newsContainer.innerHTML = '';
      data.news.forEach(news => {
        newsContainer.append(NewsView.markupNews(news));
      });
    }, () => {
      this.element.querySelector('.offline').classList.toggle('d-none');
    });
  }
}

/***/ }),

/***/ "./src/js/api/News.js":
/*!****************************!*\
  !*** ./src/js/api/News.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ News; }
/* harmony export */ });
class News {
  static URL = 'http://172.19.101.112:3000';
  static async list(callback, callbackOffline) {
    if (navigator.onLine) {
      const response = await fetch(`${this.URL}/news`);
      const json = response.json();
      const data = await json;
      callback(data);
    } else {
      callbackOffline();
    }
  }
}

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsView */ "./src/js/NewsView.js");

const app = document.querySelector('#app');
const newsView = new _NewsView__WEBPACK_IMPORTED_MODULE_0__["default"](app);
newsView.render();

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/new.css":
/*!*************************!*\
  !*** ./src/css/new.css ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/slug.css":
/*!**************************!*\
  !*** ./src/css/slug.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_slug_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/slug.css */ "./src/css/slug.css");
/* harmony import */ var _css_new_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/new.css */ "./src/css/new.css");





// Точка входа webpack
// Не пишите код в данном файле

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}
}();
/******/ })()
;
//# sourceMappingURL=index.js.map