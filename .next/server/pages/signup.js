(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\my repositories\\Social_Media_App\\components\\Common\\CommonInputs.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CommonInputs({
  user: {
    bio,
    facebook,
    instagram,
    youtube,
    twitter
  },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true,
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handleChange,
    placeholder: "bio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "Add Social Links",
    color: "red",
    icon: "at",
    type: "button",
    onClick: () => setShowSocialLinks(!showSocialLinks),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 10
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "facebook f",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "attention",
    info: true,
    size: "small",
    header: "Social Medial Links Are Optional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\my repositories\\Social_Media_App\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("input", {
    style: {
      display: " none"
    },
    type: "file",
    accept: "image/",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("div", {
    onDragOver: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      console.log(e.dataTransfer.files);
      const droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: highlighted ? "green" : "teal",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline",
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }), "Drag n Drop or Click To Upload Image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: 'pointer'
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

/***/ }),

/***/ "./components/Common/WelcomeMessage.js":
/*!*********************************************!*\
  !*** ./components/Common/WelcomeMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMessage": function() { return /* binding */ HeaderMessage; },
/* harmony export */   "FooterMessage": function() { return /* binding */ FooterMessage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\my repositories\\Social_Media_App\\components\\Common\\WelcomeMessage.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const HeaderMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "./signup";
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    color: "teal",
    attached: true,
    header: signupRoute ? "Get Started" : "Welcome Back",
    icon: signupRoute ? "settings" : "privacy",
    content: signupRoute ? "Create  New Account" : "Login with Email and Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  });
};
const FooterMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "./signup";
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, signupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }), "Existing User? ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 40
    }
  }, "Login Here Insted")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    info: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "lock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, "Forgot Password")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }), "New User?", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 38
    }
  }, "Signup Here"), " Insted", " ")));
};

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
var _jsxFileName = "D:\\my repositories\\Social_Media_App\\pages\\signup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

function signup() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  });
  const {
    name,
    email,
    password,
    bio
  } = user;

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: usernameAvailable,
    1: setUsernameAvailable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      bio
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const checkUsername = async () => {
    setUsernameLoading(true);

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/signup/${username}`);

      if (res.data === "Available") {
        setUsernameAvailable(true);
        setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
          username
        }));
      }
    } catch (error) {
      setErrorMsg('Username not Available');
    }

    setUsernameLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);

  const handleSubmit = e => e.preventDefault();

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_6__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
    error: true,
    header: "Oops!!!",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_2__.default, {
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
    required: true,
    label: "Name",
    placeholder: "Name",
    name: "name",
    value: name,
    onChange: handleChange,
    fluid: true,
    icon: "user",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
    required: true,
    label: "Email",
    placeholder: "Email",
    name: "email",
    value: email,
    onChange: handleChange,
    fluid: true,
    icon: "envelope",
    iconPosition: "left",
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
    label: "Password",
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? 'text' : "password",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
    loading: usernameLoading,
    error: !usernameAvailable,
    required: true,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: e => {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUsernameAvailable(true);
      } else {
        setUsernameAvailable(false);
      }
    },
    fluid: true,
    icon: usernameAvailable ? "check" : "close",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }), __jsx(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_1__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 12
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
    icon: "signup",
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 12
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_6__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (signup);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEQ6XFxteSByZXBvc2l0b3JpZXNcXFNvY2lhbF9NZWRpYV9BcHBcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDb21tb25JbnB1dHMiLCJ1c2VyIiwiYmlvIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ5b3V0dWJlIiwidHdpdHRlciIsImhhbmRsZUNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIiwiSW1hZ2VEcm9wRGl2IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3Iiwic2V0TWVkaWEiLCJkaXNwbGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGFUcmFuc2ZlciIsImZpbGVzIiwiZHJvcHBlZEZpbGUiLCJBcnJheSIsImZyb20iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJzb3IiLCJjdXJyZW50IiwiY2xpY2siLCJIZWFkZXJNZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwic2lnbnVwUm91dGUiLCJwYXRobmFtZSIsIkZvb3Rlck1lc3NhZ2UiLCJyZWdleFVzZXJOYW1lIiwic2lnbnVwIiwic2V0VXNlciIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlsYWJsZSIsIm1lZGlhIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImNoZWNrVXNlcm5hbWUiLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJkYXRhIiwiZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNBLFlBQVQsQ0FBc0I7QUFDbEJDLE1BQUksRUFBRTtBQUFDQyxPQUFEO0FBQU9DLFlBQVA7QUFBa0JDLGFBQWxCO0FBQThCQyxXQUE5QjtBQUF3Q0M7QUFBeEMsR0FEWTtBQUVsQkMsY0FGa0I7QUFHbEJDLGlCQUhrQjtBQUdGQztBQUhFLENBQXRCLEVBSUc7QUFDRCxTQUNJLHFFQUNFLE1BQUMseURBQUQ7QUFDQSxZQUFRLE1BRFI7QUFFQSxXQUFPLEVBQUVDLHVEQUZUO0FBR0EsUUFBSSxFQUFDLEtBSEw7QUFJQSxTQUFLLEVBQUVSLEdBSlA7QUFLQSxZQUFRLEVBQUVLLFlBTFY7QUFNQSxlQUFXLEVBQUMsS0FOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFVRyxNQUFDLHFEQUFEO0FBQ0EsV0FBTyxFQUFDLGtCQURSO0FBRUEsU0FBSyxFQUFDLEtBRk47QUFHQSxRQUFJLEVBQUMsSUFITDtBQUlBLFFBQUksRUFBQyxRQUpMO0FBS0EsV0FBTyxFQUFFLE1BQU1FLGtCQUFrQixDQUFDLENBQUNELGVBQUYsQ0FMakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZILEVBaUJJQSxlQUFlLElBQ1oscUVBQ0csTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREgsRUFFRyxNQUFDLHlEQUFEO0FBQ0EsUUFBSSxFQUFDLFlBREw7QUFFQSxnQkFBWSxFQUFDLE1BRmI7QUFHQSxRQUFJLEVBQUMsVUFITDtBQUlBLFNBQUssRUFBRUwsUUFKUDtBQUtBLFlBQVEsRUFBRUks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Rzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtLEJ1dHRvbixNZXNzYWdlLFNlZ21lbnQsVGV4dEFyZWEsRGl2aWRlcix9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvbW1vbklucHV0cyh7XHJcbiAgICB1c2VyOiB7YmlvICwgZmFjZWJvb2sgLCBpbnN0YWdyYW0gLCB5b3V0dWJlICwgdHdpdHRlciB9LFxyXG4gICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgc2hvd1NvY2lhbExpbmtzLHNldFNob3dTb2NpYWxMaW5rc1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Rm9ybS5GaWVsZCBcclxuICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cclxuICAgICAgICBuYW1lPVwiYmlvXCJcclxuICAgICAgICB2YWx1ZT17YmlvfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJiaW9cIlxyXG4gICAgICAgIFxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgIGNvbnRlbnQ9XCJBZGQgU29jaWFsIExpbmtzXCJcclxuICAgICAgICAgY29sb3I9J3JlZCdcclxuICAgICAgICAgaWNvbj1cImF0XCJcclxuICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTb2NpYWxMaW5rcyghc2hvd1NvY2lhbExpbmtzKX1cclxuICAgICAgICAgLz5cclxuICAgICAgICAge3Nob3dTb2NpYWxMaW5rcyAmJiAoXHJcbiAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICAgICAgaWNvbj1cImZhY2Vib29rIGZcIiBcclxuICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJmYWNlYm9va1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZmFjZWJvb2t9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgICAgIGljb249XCJ0d2l0dGVyXCIgXHJcbiAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dHdpdHRlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgICAgICBpY29uPVwiaW5zdGFncmFtXCIgXHJcbiAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnN0YWdyYW19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICAgICAgaWNvbj1cInlvdXR1YmVcIiBcclxuICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt5b3V0dWJlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICAgICAgICAgIGljb249XCJhdHRlbnRpb25cIiBcclxuICAgICAgICAgICAgICAgIGluZm8gXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIiBcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIlNvY2lhbCBNZWRpYWwgTGlua3MgQXJlIE9wdGlvbmFsXCIgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uSW5wdXRzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtICxTZWdtZW50ICxJbWFnZSwgSWNvbiAsIEhlYWRlcn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcclxuXHJcblxyXG5mdW5jdGlvbiBJbWFnZURyb3BEaXYoe2hpZ2hsaWdodGVkLHNldEhpZ2hsaWdodGVkLGlucHV0UmVmLGhhbmRsZUNoYW5nZSxtZWRpYVByZXZpZXcsc2V0TWVkaWFQcmV2aWV3LHNldE1lZGlhfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxTZWdtZW50IHBsYWNlaG9sZGVyIGJhc2ljIHNlY29uZGFyeT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXkgOiBcIiBub25lXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wcGVkRmlsZSA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGRyb3BwZWRGaWxlWzBdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bWVkaWFQcmV2aWV3ID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9e2hpZ2hsaWdodGVkID8gXCJncmVlblwiIDogXCJ0ZWFsXCJ9IHBsYWNlaG9sZGVyIGJhc2ljPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlIGltYWdlIG91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPXt7IGN1cnNvciA6IFwicG9pbnRlclwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJhZyBuIERyb3Agb3IgQ2xpY2sgVG8gVXBsb2FkIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgKTooXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj1cImdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21lZGlhUHJldmlld31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICBcclxuICAgICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXY7XHJcbiIsImltcG9ydCB7IEljb24gLCBNZXNzYWdlICwgRGl2aWRlcn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyTWVzc2FnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHNpZ251cFJvdXRlID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi4vc2lnbnVwXCI7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxNZXNzYWdlIFxyXG4gICAgICAgIGNvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgYXR0YWNoZWQgXHJcbiAgICAgICAgaGVhZGVyPXtzaWdudXBSb3V0ZSA/IFwiR2V0IFN0YXJ0ZWRcIiA6IFwiV2VsY29tZSBCYWNrXCJ9IFxyXG4gICAgICAgIGljb249e3NpZ251cFJvdXRlID8gXCJzZXR0aW5nc1wiIDogXCJwcml2YWN5XCJ9XHJcbiAgICAgICAgY29udGVudD0ge3NpZ251cFJvdXRlID8gXCJDcmVhdGUgIE5ldyBBY2NvdW50XCIgOiBcIkxvZ2luIHdpdGggRW1haWwgYW5kIFBhc3N3b3JkXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyTWVzc2FnZSA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIuL3NpZ251cFwiO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2lnbnVwUm91dGUgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgd2FybmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImhlbHBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFeGlzdGluZyBVc2VyPyA8TGluayBocmVmPVwiL2xvZ2luXCI+TG9naW4gSGVyZSBJbnN0ZWQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiBpbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNldFwiPkZvcmdvdCBQYXNzd29yZDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiB3YXJuaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImhlbHBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IFVzZXI/PExpbmsgaHJlZj1cIi9zaWdudXBcIj5TaWdudXAgSGVyZTwvTGluaz4gSW5zdGVke1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTsgICBcclxufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb21tb25JbnB1dHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0c1wiO1xyXG5pbXBvcnQgSW1hZ2VEcm9wRGl2IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXZcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge0Zvcm0sQnV0dG9uLE1lc3NhZ2UsU2VnbWVudCxUZXh0QXJlYSxEaXZpZGVyLH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgSGVhZGVyTWVzc2FnZSxcclxuICBGb290ZXJNZXNzYWdlLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZVwiO1xyXG5jb25zdCByZWdleFVzZXJOYW1lID0gL14oPyEuKlxcLlxcLikoPyEuKlxcLiQpW15cXFddW1xcdy5dezAsMjl9JC87XHJcblxyXG5mdW5jdGlvbiBzaWdudXAoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBiaW86IFwiXCIsXHJcbiAgICBmYWNlYm9vazogXCJcIixcclxuICAgIHlvdXR1YmU6IFwiXCIsXHJcbiAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgYmlvIH0gPSB1c2VyO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lICx2YWx1ZSAsIGZpbGVzIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZiAoIG5hbWUgPT09IFwibWVkaWFcIikge1xyXG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XHJcbiAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlcihwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXSA6IHZhbHVlfSkpXHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmb3JtTG9hZGluZyxzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N1Ym1pdERpc2FibGVkLCBzZXRTdWJtaXREaXNhYmxlZF09dXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lTG9hZGluZywgc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsIHNldFVzZXJuYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW21lZGlhLHNldE1lZGlhXT0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lZGlhUHJldmlldyxzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkICwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNVc2VyPU9iamVjdC52YWx1ZXMoe25hbWUsZW1haWwscGFzc3dvcmQsYmlvfSkuZXZlcnkoaXRlbSA9PiBcclxuXHRcdEJvb2xlYW4oaXRlbSlcclxuXHQpO1xyXG4gICAgaXNVc2VyID8gc2V0U3VibWl0RGlzYWJsZWQoZmFsc2UpIDogc2V0U3VibWl0RGlzYWJsZWQodHJ1ZSlcclxuICB9LFt1c2VyXSk7XHJcblxyXG5cclxuICBjb25zdCBjaGVja1VzZXJuYW1lID0gYXN5bmMoKSA9PiB7XHJcbiAgICBzZXRVc2VybmFtZUxvYWRpbmcodHJ1ZSlcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCByZXM9YXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9zaWdudXAvJHt1c2VybmFtZX1gKTtcclxuICAgICAgaWYocmVzLmRhdGEgPT09IFwiQXZhaWxhYmxlXCIpIHtcclxuICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZSh0cnVlKTtcclxuICAgICAgICBzZXRVc2VyKHByZXYgPT4gKHsgLi4ucHJldix1c2VybmFtZSB9KSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3JNc2coJ1VzZXJuYW1lIG5vdCBBdmFpbGFibGUnKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJuYW1lTG9hZGluZyhmYWxzZSlcclxuICB9XHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVzZXJuYW1lPT09XCJcIj8gc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpOmNoZWNrVXNlcm5hbWUoKTtcclxuXHJcbiAgfSwgW3VzZXJuYW1lXSlcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlck1lc3NhZ2UgLz5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBsb2FkaW5nPXtmb3JtTG9hZGluZ31cclxuICAgICAgICBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyEhIVwiXHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvck1zZ31cclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3JNc2cobnVsbCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgIDxJbWFnZURyb3BEaXYgXHJcbiAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld31cclxuICAgICAgICAgIHNldE1lZGlhUHJldmlldz17c2V0TWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfVxyXG4gICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2hpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQ9e3NldEhpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249XCJ1c2VyXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249XCJlbnZlbG9wZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcclxuICAgICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s6KCkgPT4gc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyAndGV4dCcgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgbG9hZGluZz17dXNlcm5hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICBlcnJvcj17IXVzZXJuYW1lQXZhaWxhYmxlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBpZiAocmVnZXhVc2VyTmFtZS50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17dXNlcm5hbWVBdmFpbGFibGUgPyBcImNoZWNrXCIgOiBcImNsb3NlXCJ9XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDb21tb25JbnB1dHNcclxuICAgICAgICAgICB1c2VyPSB7dXNlcn1cclxuICAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3Nob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICBzZXRTaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgaWNvbj1cInNpZ251cFwiXHJcbiAgICAgICAgICAgY29udGVudD1cIlNpZ251cFwiIFxyXG4gICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiIFxyXG4gICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZCB8fCAhdXNlcm5hbWVBdmFpbGFibGV9XHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPEZvb3Rlck1lc3NhZ2UgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ251cDtcclxuIiwiY29uc3QgYmFzZVVybCA9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==