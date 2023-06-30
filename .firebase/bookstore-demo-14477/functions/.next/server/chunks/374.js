exports.id = 374;
exports.ids = [374];
exports.modules = {

/***/ 225:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "book-detail_detail__U_Hi0",
	"popup": "book-detail_popup__ZMvR6"
};


/***/ }),

/***/ 7097:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "book-list_list__McLtZ"
};


/***/ }),

/***/ 6486:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "book_item__DoHyg",
	"content": "book_content__qMx1K",
	"actions": "book_actions__IE2et"
};


/***/ }),

/***/ 5486:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "card_card__X6XEc"
};


/***/ }),

/***/ 3652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ BookDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7519);
/* harmony import */ var _css_books_book_detail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(225);
/* harmony import */ var _css_books_book_detail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_books_book_detail_module_css__WEBPACK_IMPORTED_MODULE_3__);




const BookDetail = (props)=>{
    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("");
    const authorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("");
    const categoryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("");
    const priceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("");
    const descriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("");
    const editBookHandler = (event)=>{
        event.preventDefault();
        const updatedBook = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            category: categoryRef.current.value,
            price: priceRef.current.value,
            description: descriptionRef.current.value
        };
        props.onEditBook(props.props.id, updatedBook);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_card__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: (_css_books_book_detail_module_css__WEBPACK_IMPORTED_MODULE_3___default().detail),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_css_books_book_detail_module_css__WEBPACK_IMPORTED_MODULE_3___default().popup),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: editBookHandler,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_css_books_book_detail_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "title",
                                    children: "Book Title"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    required: true,
                                    id: "title",
                                    defaultValue: props.props.title,
                                    ref: titleRef
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_css_books_book_detail_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "author",
                                    children: "Author"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    required: true,
                                    id: "author",
                                    defaultValue: props.props.author,
                                    ref: authorRef
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_css_books_book_detail_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "category",
                                    children: "Category"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    required: true,
                                    id: "category",
                                    defaultValue: props.props.category,
                                    ref: categoryRef
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_css_books_book_detail_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "price",
                                    children: "Price"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    required: true,
                                    id: "price",
                                    step: "0.01",
                                    defaultValue: props.props.price,
                                    ref: priceRef
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_css_books_book_detail_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "description",
                                    children: "Description"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    id: "description",
                                    required: true,
                                    rows: "5",
                                    defaultValue: props.props.description,
                                    ref: descriptionRef
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_css_books_book_detail_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: props.onClose,
                                    children: "Close"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    children: "Save"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};


/***/ }),

/***/ 1374:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1307);
/* harmony import */ var _css_books_book_list_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7097);
/* harmony import */ var _css_books_book_list_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_books_book_list_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_book__WEBPACK_IMPORTED_MODULE_1__]);
_book__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const BookList = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: (_css_books_book_list_module_css__WEBPACK_IMPORTED_MODULE_2___default().list),
        children: props.books.map((book)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_book__WEBPACK_IMPORTED_MODULE_1__/* .Book */ .f, {
                id: book.id,
                title: book.title,
                author: book.author,
                category: book.category,
                price: book.price,
                description: book.description
            }, book.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ Book)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7519);
/* harmony import */ var _book_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3652);
/* harmony import */ var _redux_app_book_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4082);
/* harmony import */ var _css_books_book_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6486);
/* harmony import */ var _css_books_book_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_books_book_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_app_book_actions__WEBPACK_IMPORTED_MODULE_6__]);
_redux_app_book_actions__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Book = (props)=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [showDetails, setShowDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const closePopup = ()=>{
        setShowDetails(false);
    };
    const clickHandler = ()=>{
        setShowDetails(true);
    };
    // editing book
    const editBookHandler = (id, updatedBook)=>{
        // can add validation or alert message here.
        dispatch((0,_redux_app_book_actions__WEBPACK_IMPORTED_MODULE_6__/* .editBookData */ .iy)(id, updatedBook));
        router.reload();
    };
    // deleting book
    const deleteBookHandler = (id)=>{
        // can add validation or alert message here.
        dispatch((0,_redux_app_book_actions__WEBPACK_IMPORTED_MODULE_6__/* .deleteBookData */ .Y5)(id));
        router.reload();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: (_css_books_book_module_css__WEBPACK_IMPORTED_MODULE_7___default().item),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_css_books_book_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),
                    onClick: clickHandler,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: props.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                "by ",
                                props.author
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Category: ",
                                props.category
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "$",
                                props.price
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: props.description
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_css_books_book_module_css__WEBPACK_IMPORTED_MODULE_7___default().actions),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>deleteBookHandler(props.id),
                            children: "Delete Book"
                        }),
                        showDetails && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_book_detail__WEBPACK_IMPORTED_MODULE_5__/* .BookDetail */ .K, {
                            props: props,
                            onClose: closePopup,
                            onEditBook: editBookHandler
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _css_layout_card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5486);
/* harmony import */ var _css_layout_card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_layout_card_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Card = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_css_layout_card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: props.children
    });
};


/***/ })

};
;