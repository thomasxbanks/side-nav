/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(2);
	(function() {
	    "use strict"
	    document.addEventListener("DOMContentLoaded", function(e) {
	        // Declare your variables
	        const body = document.getElementsByTagName('body')[0]
	        const navToggle = document.getElementById('primary-nav-toggle')
	        const nav = document.getElementById('primary-nav')
	        const masthead = document.getElementById('masthead')
	        let mastheadHeight = document.getElementById('masthead').clientHeight
	        const html = document.getElementsByTagName('html')[0]

	        // Set padding bassed on height of the masthead
	        html.style.paddingTop = ~~(mastheadHeight)
	        nav.style.paddingTop = ~~(mastheadHeight)

	        let ToggleNav = () => {
	            (navToggle.innerText == 'menu') ? navToggle.innerText = 'close': navToggle.innerText = 'menu'
	            nav.classList.toggle('is-active')
	            navToggle.classList.toggle('is-active')
	            body.classList.toggle('is-active')
	        }

	        // Toggle side nav on select of toggle button
	        navToggle.addEventListener("click", () => {;
	            ToggleNav()
	        })

	        // Touch/swipe event to close navigation
	        let startX, newX
	        let WhichSwipe = (newX, startX) => {
	            if (newX > startX) {;
	                (body.classList.contains('is-active')) ? ToggleNav(): null
	            } else {
	                return false
	            }
	        }
	        let handleTouchStart = (e) => {
	            startX = e.changedTouches[0].clientX
	        }

	        let handleTouchMove = (e) => {
	            newX = e.changedTouches[0].clientX
	        }

	        let handleTouchEnd = (e) => {
	            WhichSwipe(newX, startX)
	        }

	        document.addEventListener('touchstart', handleTouchStart, false)
	        document.addEventListener('touchmove', handleTouchMove, false)
	        document.addEventListener('touchend', handleTouchEnd, false)
	            // END onload
	    })

	    // END IIFE
	})()


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "<html lang=\"en\">\n\n<head>\n    <title>Starter</title>\n    <meta charset=\"utf-8\">\n    <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0'>\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n</head>\n\n<body>\n    <header id=\"masthead\">\n        <h1>company<span>name</span></h1>\n        <button id=\"primary-nav-toggle\" class=\"material-icons\" aria-label=\"toggle navigation\">menu</button>\n        <div class=\"treatment\"></div>\n        <nav id=\"primary-nav\">\n            <ul>\n                <li><i class=\"material-icons\">home</i>Home</li>\n                <li><i class=\"material-icons\">add</i>Add</li>\n                <li><i class=\"material-icons\">bubble_chart</i>Ideas</li>\n                <li><i class=\"material-icons\">insert_photo</i>Insert a Photo</li>\n                <li><i class=\"material-icons\">settings</i>Settings</li>\n            </ul>\n        </nav>\n    </header>\n    <main class=\"inner\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates molestias asperiores temporibus laboriosam, fugit facere! Dolores magni ab neque quibusdam.</p>\n        <p>Natus omnis labore cumque saepe consectetur ad, aspernatur blanditiis possimus libero molestiae enim alias incidunt vitae. Officia cum sit fuga?</p>\n        <p>Et ab explicabo eligendi doloremque corporis, error commodi, odit repudiandae omnis aut impedit assumenda voluptatum pariatur sequi ea delectus eveniet!</p>\n        <p>Illo officiis ratione provident atque doloremque laborum velit, ex, eius perspiciatis ipsam modi nemo expedita, vero, at sequi libero excepturi.</p>\n        <p>Placeat inventore minima modi, soluta magni, eligendi beatae commodi, ratione, nemo laboriosam consequatur voluptatem animi? Optio nesciunt quis suscipit et!</p>\n        <p>Veritatis optio, quibusdam vero ducimus nobis consectetur adipisci repellendus sit aperiam sequi voluptatem ut omnis, fugit, alias aliquam animi culpa!</p>\n        <p>Impedit repudiandae quisquam aperiam debitis, ullam suscipit molestias et. Quaerat soluta consequatur distinctio. Ipsam sunt pariatur porro, deleniti laudantium laborum!</p>\n        <p>Quos temporibus, labore voluptates veritatis. Dignissimos id, alias laudantium dolorem esse voluptates doloremque consequatur autem non nesciunt, libero cumque sapiente.</p>\n        <p>Voluptate nihil quam soluta ratione consequuntur totam commodi, optio, distinctio. Quo placeat accusamus dolorem laboriosam quisquam modi velit! Vero, nisi.</p>\n        <p>Accusantium, nulla. Facilis, laborum? Cupiditate, nisi architecto, ab, optio quia, harum asperiores officiis reprehenderit quaerat et eos doloribus rerum quod.</p>\n        <p>Cumque obcaecati animi provident beatae iure, incidunt veniam! Enim, magnam totam. Quidem veniam consequatur tempore vero voluptate maxime, quae dolor!</p>\n        <p>Necessitatibus facere, sint officia laborum enim accusamus nostrum a reiciendis. Sit nobis enim deserunt, non dolore similique molestiae voluptas minima.</p>\n        <p>Magni dolor, rem perferendis commodi pariatur, enim quam ex odit sint quia alias, dolores. Vel id itaque, eaque ipsum consequuntur!</p>\n        <p>Doloremque magnam voluptatibus totam quos molestiae neque! Ipsa tempore beatae aspernatur fuga vel esse ut voluptas qui eaque. Aperiam, sed.</p>\n        <p>Eligendi sed molestias ad reprehenderit iste nostrum autem aliquid in, ut totam incidunt dicta consequuntur. Quod excepturi similique eaque aperiam.</p>\n        <p>Vero ipsam voluptatem dolorem quaerat eaque sint ratione maxime laborum dolor aspernatur consectetur, velit, omnis expedita doloribus dolorum mollitia. Facilis.</p>\n        <p>Repellendus aliquam quaerat minima voluptatum exercitationem architecto, ducimus rem at dolore aut, consequuntur consectetur! Eius deserunt accusamus veniam obcaecati dolorum?</p>\n        <p>Odio quisquam non voluptates blanditiis expedita eius possimus nemo. Culpa sunt iusto nam optio, facilis facere. Molestias ut nobis culpa!</p>\n        <p>Neque mollitia doloribus ducimus. Error eaque quisquam odio magni illo ipsum id nam vel perferendis aliquam unde excepturi, modi ducimus.</p>\n        <p>Consequuntur nemo illum laboriosam distinctio, quos temporibus eius eos vero, dicta ratione, animi voluptate expedita. Expedita numquam consectetur, non explicabo!</p>\n    </main>\n    <footer id=\"colophon\"></footer>\n    <script type=\"text/javascript\" src=\"bundle.js\" charset=\"utf-8\"></script>\n</body>\n\n</html>\n"

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:300,700);", ""]);

	// module
	exports.push([module.id, "@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  25% {\n    transform: rotate(45deg); }\n  100% {\n    transform: rotate(-360deg); } }\n\n/* Standard syntax */\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  25% {\n    transform: rotate(45deg); }\n  100% {\n    transform: rotate(-360deg); } }\n\nbutton {\n  -webkit-appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-tap-highlight-color: transparent;\n  border: none;\n  background: none;\n  color: #fff;\n  cursor: pointer; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner,\nselect::-moz-focus-inner,\ntextarea::-moz-focus-inner {\n  border: 0; }\n\nbutton:focus,\ninput:focus,\nselect:focus,\ntextarea:focus {\n  outline: 0; }\n\nhtml {\n  font-size: 15px; }\n  html * {\n    box-sizing: border-box !important; }\n\nbody {\n  margin: 0;\n  background: #e9e9e9;\n  font-family: \"Roboto Condensed\", Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  color: #454545; }\n  body.is-active {\n    overflow: hidden !important; }\n    body.is-active .treatment {\n      transform: translate(0, 0);\n      opacity: 1; }\n    body.is-active #masthead h1,\n    body.is-active main {\n      -webkit-filter: blur(5px);\n      -ms-filter: blur(5px);\n      filter: blur(5px); }\n\n.treatment {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 800;\n  background: rgba(0, 0, 0, 0.4);\n  opacity: 0;\n  transform: translate(0, -100%);\n  transition: opacity ease-in 100ms; }\n\n#masthead {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 1rem 2rem;\n  margin: 0;\n  background: #1039a9;\n  color: #eef2fd;\n  line-height: 1.6rem;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);\n  transition: ease-in 300ms; }\n  #masthead h1 {\n    font-size: 1.6rem;\n    float: left;\n    margin: 0;\n    padding: 0;\n    line-height: 1.6rem;\n    font-weight: 300; }\n    #masthead h1 span {\n      font-weight: 700;\n      color: #90abf5; }\n  #masthead button {\n    float: right;\n    line-height: 1.6rem;\n    position: relative;\n    z-index: 1000; }\n    #masthead button.is-active {\n      animation: spin 800ms 1; }\n\nnav#primary-nav {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 900;\n  background: #0c297a;\n  width: 300px;\n  height: 100vh;\n  transform: translate(100%, 0);\n  transition: transform ease-in 250ms;\n  overflow-y: auto; }\n  nav#primary-nav.is-active {\n    transform: translate(0, 0); }\n  nav#primary-nav ul {\n    display: block;\n    width: 100%;\n    height: 100%;\n    list-style-type: none;\n    padding: 0 1rem;\n    margin: 0; }\n    nav#primary-nav ul li {\n      padding: 1rem;\n      transition: background ease-out 200ms;\n      font-size: 1rem;\n      line-height: 1rem; }\n      nav#primary-nav ul li i {\n        vertical-align: middle;\n        margin-right: 0.5rem; }\n      nav#primary-nav ul li:hover {\n        background: rgba(255, 255, 255, 0.1); }\n\nmain {\n  padding: 2rem; }\n\n.inner {\n  max-width: 960px;\n  margin-left: auto;\n  margin-right: auto; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);