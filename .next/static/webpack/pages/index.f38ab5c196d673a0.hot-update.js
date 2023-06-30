"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/redux/app/book-actions.js":
/*!***************************************!*\
  !*** ./src/redux/app/book-actions.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBookData: function() { return /* binding */ addBookData; },\n/* harmony export */   deleteBookData: function() { return /* binding */ deleteBookData; },\n/* harmony export */   editBookData: function() { return /* binding */ editBookData; },\n/* harmony export */   fetchBookData: function() { return /* binding */ fetchBookData; }\n/* harmony export */ });\n/* harmony import */ var _components_firebase_init_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/firebase/init-firebase */ \"./src/components/firebase/init-firebase.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _book_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-slice */ \"./src/redux/app/book-slice.js\");\n\n\n\nconst fetchBookData = ()=>{\n    return async (dispatch)=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"https://bookstore-demo-14477-default-rtdb.firebaseio.com/books.json\");\n            if (!response.ok) {\n                throw new Error(\"Could not fetch book data.\");\n            }\n            const data = await response.json();\n            return data;\n        };\n        try {\n            let booksList = [];\n            const data = await fetchData();\n            for(const key in data){\n                booksList.push({\n                    id: key,\n                    title: data[key].title,\n                    author: data[key].author,\n                    category: data[key].category,\n                    price: data[key].price,\n                    description: data[key].description\n                });\n            }\n            dispatch(_book_slice__WEBPACK_IMPORTED_MODULE_2__.bookActions.loadBooks({\n                books: booksList || []\n            }));\n        } catch (error) {\n            console.error(\"Your request failed: \", error);\n        }\n    };\n};\nconst addBookData = (book)=>{\n    return async (dispatch)=>{\n        const addBook = async ()=>{\n            const response = await fetch(\"https://bookstore-demo-14477-default-rtdb.firebaseio.com/books.json\", {\n                method: \"POST\",\n                body: JSON.stringify(book),\n                headers: {\n                    \"Content-Type\": \"Application/json\"\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Could not add book data.\");\n            }\n            const data = await response.json();\n            return data;\n        };\n        try {\n            await addBook();\n            dispatch(_book_slice__WEBPACK_IMPORTED_MODULE_2__.bookActions.addBook());\n        } catch (error) {\n            console.error(\"Your request failed: \", error);\n        }\n    };\n};\nconst deleteBookData = (id)=>{\n    return async (dispatch)=>{\n        try {\n            await (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.remove)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(_components_firebase_init_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"books/\" + id));\n            dispatch(_book_slice__WEBPACK_IMPORTED_MODULE_2__.bookActions.deleteBook());\n        } catch (error) {\n            console.error(\"Your request failed: \", error);\n        }\n    };\n};\nconst editBookData = (id, book)=>{\n    return async (dispatch)=>{\n        try {\n            const { title, author, category, price, description } = book;\n            console.log(book);\n            await (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.update)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(_components_firebase_init_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"books/\" + id), {\n                title,\n                author,\n                category,\n                price,\n                description\n            });\n            dispatch(_book_slice__WEBPACK_IMPORTED_MODULE_2__.bookActions.editBook());\n        } catch (error) {\n            console.error(\"Your request failed: \", error);\n        }\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYXBwL2Jvb2stYWN0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdEO0FBQ0E7QUFFYjtBQUVwQyxNQUFNSyxnQkFBZ0I7SUFDNUIsT0FBTyxPQUFPQztRQUNiLE1BQU1DLFlBQVk7WUFDakIsTUFBTUMsV0FBVyxNQUFNQyxNQUN0QjtZQUdELElBQUksQ0FBQ0QsU0FBU0UsSUFBSTtnQkFDakIsTUFBTSxJQUFJQyxNQUFNO1lBQ2pCO1lBRUEsTUFBTUMsT0FBTyxNQUFNSixTQUFTSztZQUU1QixPQUFPRDtRQUNSO1FBRUEsSUFBSTtZQUNILElBQUlFLFlBQVksRUFBRTtZQUNsQixNQUFNRixPQUFPLE1BQU1MO1lBRW5CLElBQUssTUFBTVEsT0FBT0gsS0FBTTtnQkFDdkJFLFVBQVVFLEtBQUs7b0JBQ2RDLElBQUlGO29CQUNKRyxPQUFPTixJQUFJLENBQUNHLElBQUksQ0FBQ0c7b0JBQ2pCQyxRQUFRUCxJQUFJLENBQUNHLElBQUksQ0FBQ0k7b0JBQ2xCQyxVQUFVUixJQUFJLENBQUNHLElBQUksQ0FBQ0s7b0JBQ3BCQyxPQUFPVCxJQUFJLENBQUNHLElBQUksQ0FBQ007b0JBQ2pCQyxhQUFhVixJQUFJLENBQUNHLElBQUksQ0FBQ087Z0JBQ3hCO1lBQ0Q7WUFFQWhCLFNBQ0NGLG9EQUFXQSxDQUFDbUIsVUFBVTtnQkFDckJDLE9BQU9WLGFBQWEsRUFBRTtZQUN2QjtRQUVGLEVBQUUsT0FBT1csT0FBTztZQUNmQyxRQUFRRCxNQUFNLHlCQUF5QkE7UUFDeEM7SUFDRDtBQUNELEVBQUU7QUFFSyxNQUFNRSxjQUFjLENBQUNDO0lBQzNCLE9BQU8sT0FBT3RCO1FBQ2IsTUFBTXVCLFVBQVU7WUFDZixNQUFNckIsV0FBVyxNQUFNQyxNQUN0Qix1RUFDQTtnQkFDQ3FCLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFVBQVVMO2dCQUNyQk0sU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW1CO1lBQy9DO1lBR0QsSUFBSSxDQUFDMUIsU0FBU0UsSUFBSTtnQkFDakIsTUFBTSxJQUFJQyxNQUFNO1lBQ2pCO1lBRUEsTUFBTUMsT0FBTyxNQUFNSixTQUFTSztZQUU1QixPQUFPRDtRQUNSO1FBRUEsSUFBSTtZQUNILE1BQU1pQjtZQUNOdkIsU0FBU0Ysb0RBQVdBLENBQUN5QjtRQUN0QixFQUFFLE9BQU9KLE9BQU87WUFDZkMsUUFBUUQsTUFBTSx5QkFBeUJBO1FBQ3hDO0lBQ0Q7QUFDRCxFQUFFO0FBRUssTUFBTVUsaUJBQWlCLENBQUNsQjtJQUM5QixPQUFPLE9BQU9YO1FBQ2IsSUFBSTtZQUNILE1BQU1KLHlEQUFNQSxDQUFDRCxzREFBR0EsQ0FBQ0Qsa0VBQUVBLEVBQUUsV0FBV2lCO1lBQ2hDWCxTQUFTRixvREFBV0EsQ0FBQ2dDO1FBQ3RCLEVBQUUsT0FBT1gsT0FBTztZQUNmQyxRQUFRRCxNQUFNLHlCQUF5QkE7UUFDeEM7SUFDRDtBQUNELEVBQUU7QUFFSyxNQUFNWSxlQUFlLENBQUNwQixJQUFJVztJQUNoQyxPQUFPLE9BQU90QjtRQUNiLElBQUk7WUFDSCxNQUFNLEVBQUVZLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFLEdBQUdNO1lBQ3hERixRQUFRWSxJQUFJVjtZQUNaLE1BQU16Qix5REFBTUEsQ0FBQ0Ysc0RBQUdBLENBQUNELGtFQUFFQSxFQUFFLFdBQVdpQixLQUFLO2dCQUNwQ0M7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO1lBQ0Q7WUFDQWhCLFNBQVNGLG9EQUFXQSxDQUFDbUM7UUFDdEIsRUFBRSxPQUFPZCxPQUFPO1lBQ2ZDLFFBQVFELE1BQU0seUJBQXlCQTtRQUN4QztJQUNEO0FBQ0QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvYXBwL2Jvb2stYWN0aW9ucy5qcz81NTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnQGNvbXBvbmVudHMvZmlyZWJhc2UvaW5pdC1maXJlYmFzZSc7XG5pbXBvcnQgeyByZWYsIHJlbW92ZSwgdXBkYXRlIH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnO1xuXG5pbXBvcnQgeyBib29rQWN0aW9ucyB9IGZyb20gJy4vYm9vay1zbGljZSc7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJvb2tEYXRhID0gKCkgPT4ge1xuXHRyZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRcdFx0J2h0dHBzOi8vYm9va3N0b3JlLWRlbW8tMTQ0NzctZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2Jvb2tzLmpzb24nXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZldGNoIGJvb2sgZGF0YS4nKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fTtcblxuXHRcdHRyeSB7XG5cdFx0XHRsZXQgYm9va3NMaXN0ID0gW107XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG5cblx0XHRcdGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcblx0XHRcdFx0Ym9va3NMaXN0LnB1c2goe1xuXHRcdFx0XHRcdGlkOiBrZXksXG5cdFx0XHRcdFx0dGl0bGU6IGRhdGFba2V5XS50aXRsZSxcblx0XHRcdFx0XHRhdXRob3I6IGRhdGFba2V5XS5hdXRob3IsXG5cdFx0XHRcdFx0Y2F0ZWdvcnk6IGRhdGFba2V5XS5jYXRlZ29yeSxcblx0XHRcdFx0XHRwcmljZTogZGF0YVtrZXldLnByaWNlLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBkYXRhW2tleV0uZGVzY3JpcHRpb24sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRkaXNwYXRjaChcblx0XHRcdFx0Ym9va0FjdGlvbnMubG9hZEJvb2tzKHtcblx0XHRcdFx0XHRib29rczogYm9va3NMaXN0IHx8IFtdLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignWW91ciByZXF1ZXN0IGZhaWxlZDogJywgZXJyb3IpO1xuXHRcdH1cblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRCb29rRGF0YSA9IChib29rKSA9PiB7XG5cdHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCBhZGRCb29rID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRcdFx0J2h0dHBzOi8vYm9va3N0b3JlLWRlbW8tMTQ0NzctZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2Jvb2tzLmpzb24nLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoYm9vayksXG5cdFx0XHRcdFx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ0FwcGxpY2F0aW9uL2pzb24nIH0sXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRcdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgYWRkIGJvb2sgZGF0YS4nKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fTtcblxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBhZGRCb29rKCk7XG5cdFx0XHRkaXNwYXRjaChib29rQWN0aW9ucy5hZGRCb29rKCkpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdZb3VyIHJlcXVlc3QgZmFpbGVkOiAnLCBlcnJvcik7XG5cdFx0fVxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUJvb2tEYXRhID0gKGlkKSA9PiB7XG5cdHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgcmVtb3ZlKHJlZihkYiwgJ2Jvb2tzLycgKyBpZCkpO1xuXHRcdFx0ZGlzcGF0Y2goYm9va0FjdGlvbnMuZGVsZXRlQm9vaygpKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignWW91ciByZXF1ZXN0IGZhaWxlZDogJywgZXJyb3IpO1xuXHRcdH1cblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0Qm9va0RhdGEgPSAoaWQsIGJvb2spID0+IHtcblx0cmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB7IHRpdGxlLCBhdXRob3IsIGNhdGVnb3J5LCBwcmljZSwgZGVzY3JpcHRpb24gfSA9IGJvb2s7XG5cdFx0XHRjb25zb2xlLmxvZyhib29rKTtcblx0XHRcdGF3YWl0IHVwZGF0ZShyZWYoZGIsICdib29rcy8nICsgaWQpLCB7XG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRhdXRob3IsXG5cdFx0XHRcdGNhdGVnb3J5LFxuXHRcdFx0XHRwcmljZSxcblx0XHRcdFx0ZGVzY3JpcHRpb24sXG5cdFx0XHR9KTtcblx0XHRcdGRpc3BhdGNoKGJvb2tBY3Rpb25zLmVkaXRCb29rKCkpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdZb3VyIHJlcXVlc3QgZmFpbGVkOiAnLCBlcnJvcik7XG5cdFx0fVxuXHR9O1xufTtcbiJdLCJuYW1lcyI6WyJkYiIsInJlZiIsInJlbW92ZSIsInVwZGF0ZSIsImJvb2tBY3Rpb25zIiwiZmV0Y2hCb29rRGF0YSIsImRpc3BhdGNoIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImJvb2tzTGlzdCIsImtleSIsInB1c2giLCJpZCIsInRpdGxlIiwiYXV0aG9yIiwiY2F0ZWdvcnkiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwibG9hZEJvb2tzIiwiYm9va3MiLCJlcnJvciIsImNvbnNvbGUiLCJhZGRCb29rRGF0YSIsImJvb2siLCJhZGRCb29rIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGVsZXRlQm9va0RhdGEiLCJkZWxldGVCb29rIiwiZWRpdEJvb2tEYXRhIiwibG9nIiwiZWRpdEJvb2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/app/book-actions.js\n"));

/***/ })

});