exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 3178:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "layout_main___m7vl"
};


/***/ }),

/***/ 9823:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "main-navigation_header__DV_3N",
	"logo": "main-navigation_logo__EWdiJ",
	"active": "main-navigation_active__M_4oO"
};


/***/ }),

/***/ 659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const clientCredentials = {
    apiKey: "\"AIzaSyB_EvHBsePdqQccxgQ8KaObqLha3Azpn8w\",",
    authDomain: "\"bookstore-demo-14477.firebaseapp.com\",",
    databaseURL: "https://bookstore-demo-14477-default-rtdb.firebaseio.com",
    projectId: "\"bookstore-demo-14477\",",
    storageBucket: "\"bookstore-demo-14477.appspot.com\",",
    messagingSenderId: "\"185731773455\",",
    appId: "1:185731773455:web:f036c3eceb13242e19df7a",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(clientCredentials);
const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./static/css/layout/main-navigation.module.css
var main_navigation_module = __webpack_require__(9823);
var main_navigation_module_default = /*#__PURE__*/__webpack_require__.n(main_navigation_module);
;// CONCATENATED MODULE: ./src/components/layout/main-navigation.js



function MainNavigation() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: (main_navigation_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (main_navigation_module_default()).logo,
                children: "Bookstore"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: "All Books"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/new-book",
                                children: "Add New Book"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const main_navigation = (MainNavigation);

// EXTERNAL MODULE: ./static/css/layout/layout.module.css
var layout_module = __webpack_require__(3178);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./src/components/layout/layout.js



function Layout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(main_navigation, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: (layout_module_default()).main,
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 4082:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y5: () => (/* binding */ deleteBookData),
/* harmony export */   iy: () => (/* binding */ editBookData),
/* harmony export */   j6: () => (/* binding */ addBookData),
/* harmony export */   qT: () => (/* binding */ fetchBookData)
/* harmony export */ });
/* harmony import */ var _components_firebase_init_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(659);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1208);
/* harmony import */ var _book_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3290);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_firebase_init_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__]);
([_components_firebase_init_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const fetchBookData = ()=>{
    return async (dispatch)=>{
        const fetchData = async ()=>{
            const response = await fetch("https://bookstore-demo-14477-default-rtdb.firebaseio.com/books.json");
            if (!response.ok) {
                throw new Error("Could not fetch book data.");
            }
            const data = await response.json();
            return data;
        };
        try {
            let booksList = [];
            const data = await fetchData();
            for(const key in data){
                booksList.push({
                    id: key,
                    title: data[key].title,
                    author: data[key].author,
                    category: data[key].category,
                    price: data[key].price,
                    description: data[key].description
                });
            }
            dispatch(_book_slice__WEBPACK_IMPORTED_MODULE_2__/* .bookActions */ .y.loadBooks({
                books: booksList || []
            }));
        } catch (error) {
            console.error("Your request failed: ", error);
        }
    };
};
const addBookData = (book)=>{
    return async (dispatch)=>{
        const addBook = async ()=>{
            const response = await fetch("https://bookstore-demo-14477-default-rtdb.firebaseio.com/books.json", {
                method: "POST",
                body: JSON.stringify(book),
                headers: {
                    "Content-Type": "Application/json"
                }
            });
            if (!response.ok) {
                throw new Error("Could not add book data.");
            }
            const data = await response.json();
            return data;
        };
        try {
            await addBook();
            dispatch(_book_slice__WEBPACK_IMPORTED_MODULE_2__/* .bookActions */ .y.addBook());
        } catch (error) {
            console.error("Your request failed: ", error);
        }
    };
};
const deleteBookData = (id)=>{
    return async (dispatch)=>{
        try {
            await (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.remove)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(_components_firebase_init_firebase__WEBPACK_IMPORTED_MODULE_0__.db, "books/" + id));
            dispatch(_book_slice__WEBPACK_IMPORTED_MODULE_2__/* .bookActions */ .y.deleteBook());
        } catch (error) {
            console.error("Your request failed: ", error);
        }
    };
};
const editBookData = (id, book)=>{
    return async (dispatch)=>{
        try {
            const { title, author, category, price, description } = book;
            await (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.update)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(_components_firebase_init_firebase__WEBPACK_IMPORTED_MODULE_0__.db, "books/" + id), {
                title,
                author,
                category,
                price,
                description
            });
            dispatch(_book_slice__WEBPACK_IMPORTED_MODULE_2__/* .bookActions */ .y.editBook());
        } catch (error) {
            console.error("Your request failed: ", error);
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ bookSlice),
/* harmony export */   y: () => (/* binding */ bookActions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const bookSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "book",
    initialState: {
        books: [],
        changed: false
    },
    reducers: {
        loadBooks (state, action) {
            state.books = action.payload.books;
        },
        addBook (state, action) {
            const newBook = action.payload;
        },
        deleteBook (state, action) {
            const id = action.payload;
            state.books = state.books.filter((book)=>book.id !== id);
        },
        editBook (state, action) {
            const id = action.payload;
            console.log(id);
        }
    }
});
const bookActions = bookSlice.actions;


/***/ })

};
;