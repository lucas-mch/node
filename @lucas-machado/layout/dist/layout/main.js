"use strict";
(self["webpackChunklayout"] = self["webpackChunklayout"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);



class AppComponent {
    constructor() {
        this.title = 'layout';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [[1, "document"], [1, "app"], [1, "app-nav-bar-left"], [1, "main-action-placeholder", "centeralized-items"], [1, "fa-solid", "fa-coins"], [1, "content-holder"], [1, "content"], [1, "app-nav-bar-right"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: [".document[_ngcontent-%COMP%], .appbody[_ngcontent-%COMP%] {\r\n        height: 890px;\r\n        width: 100%;\r\n        caret-color: transparent;\r\n    }\r\n\r\n    .centeralized-items[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    \r\n\r\n    .header-placeholder[_ngcontent-%COMP%] {\r\n        background: var(--primary-color);\r\n        min-height: 64px;\r\n    }\r\n\r\n    .header-container[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        box-sizing: border-box;\r\n        min-height: 64px;\r\n    }\r\n\r\n    .header-primary-bar[_ngcontent-%COMP%] {\r\n        min-width: 238px;\r\n        height: 48px;\r\n        vertical-align: middle;\r\n        white-space: nowrap;\r\n        align-items: center;\r\n        display: flex;\r\n    }\r\n\r\n    .hamburguer-placeholder[_ngcontent-%COMP%]:hover {\r\n        background-color: rgba(60, 64, 67, .08);\r\n    }\r\n\r\n    .hamburguer-placeholder[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        margin: 0 4px;\r\n        padding: 12px;\r\n        overflow: hidden;\r\n        vertical-align: middle;\r\n        cursor: pointer;\r\n        flex: 0 0 auto;\r\n        border-radius: 50%;\r\n    }\r\n\r\n    .logo-placeholder[_ngcontent-%COMP%] {}\r\n\r\n    \r\n\r\n    .app[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        display: flex;\r\n    }\r\n\r\n    .app-nav-bar-left[_ngcontent-%COMP%] {\r\n        background: var(--primary-color);\r\n        width: 80px;\r\n    }\r\n\r\n    .main-action-placeholder[_ngcontent-%COMP%] {\r\n        height: 56px;\r\n        margin: 8px 0 16px 0;\r\n        border-radius: 15px;\r\n        margin: 5px 10px 1px 7px;\r\n        background-color: #c2e7ff;\r\n    }\r\n\r\n    .main-action-placeholder[_ngcontent-%COMP%]:hover {\r\n        box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);\r\n        background-color: #c2e7ff;\r\n    }\r\n\r\n    .app-nav-bar-left[_ngcontent-%COMP%]:hover {\r\n        width: 200px;\r\n        transition: width 1s;\r\n    }\r\n\r\n    .app-nav-bar-right[_ngcontent-%COMP%] {\r\n        background: var(--primary-color);\r\n        width: 56px;\r\n    }\r\n\r\n    .content-holder[_ngcontent-%COMP%] {\r\n        background: var(--primary-color);\r\n        width: 100%;\r\n        display: flex;\r\n    }\r\n\r\n    .content[_ngcontent-%COMP%] {\r\n        background-color: rgba(255, 255, 255, 1);\r\n        width: 100%;\r\n        border-radius: 16px;\r\n    }\r\n\r\n    \r\n\r\n    .footer[_ngcontent-%COMP%] {\r\n        background: var(--primary-color);\r\n        min-height: 20px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztRQUVRLGFBQWE7UUFDYixXQUFXO1FBQ1gsd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7SUFDdkI7O0lBRUEsV0FBVzs7SUFFWDtRQUNJLGdDQUFnQztRQUNoQyxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUduQixtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHVDQUF1QztJQUMzQzs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsZUFBZTtRQUVmLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7O0lBRUEsbUJBQW1COztJQUVuQixnQkFBZ0I7O0lBRWhCO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxnQ0FBZ0M7UUFDaEMsV0FBVztJQUNmOztJQUdBO1FBQ0ksWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLDhFQUE4RTtRQUM5RSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxZQUFZO1FBQ1osb0JBQW9CO0lBQ3hCOztJQUdBO1FBQ0ksZ0NBQWdDO1FBQ2hDLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGdDQUFnQztRQUNoQyxXQUFXO1FBQ1gsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHdDQUF3QztRQUN4QyxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCOztJQUdBLFdBQVc7O0lBRVg7UUFDSSxnQ0FBZ0M7UUFDaEMsZ0JBQWdCO0lBQ3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50LFxyXG4gICAgLmFwcGJvZHkge1xyXG4gICAgICAgIGhlaWdodDogODkwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY2FyZXQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jZW50ZXJhbGl6ZWQtaXRlbXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBIZWFkZXIgKi9cclxuXHJcbiAgICAuaGVhZGVyLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjRweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLXByaW1hcnktYmFyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIzOHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oYW1idXJndWVyLXBsYWNlaG9sZGVyOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYwLCA2NCwgNjcsIC4wOCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmhhbWJ1cmd1ZXItcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAtd2Via2l0LWZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nby1wbGFjZWhvbGRlciB7fVxyXG5cclxuICAgIC8qIEFwcGxpY2F0aW9uICovXHJcblxyXG4gICAgLmFwcCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1uYXYtYmFyLWxlZnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubWFpbi1hY3Rpb24tcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICBtYXJnaW46IDhweCAwIDE2cHggMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHggMXB4IDdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJlN2ZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWFjdGlvbi1wbGFjZWhvbGRlcjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiKDYwIDY0IDY3IC8gMzAlKSwgMCA0cHggOHB4IDNweCByZ2IoNjAgNjQgNjcgLyAxNSUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmU3ZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1uYXYtYmFyLWxlZnQ6aG92ZXIge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmFwcC1uYXYtYmFyLXJpZ2h0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB3aWR0aDogNTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1ob2xkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogRm9vdGVyICovXHJcblxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIH0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeaderComponent {
    constructor() {
        this.title = 'layout';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 0, consts: [[1, "header-placeholder"], [1, "header-container", 2, "padding", "8px"], [1, "header-primary-bar"], ["role", "button", 1, "hamburguer-placeholder"], [1, "fa-solid", "fa-bars", "fa-xl"], [1, "logo-placeholder"], ["src", "googlecontent.png", "alt", "", "srcset", ""], [1, "", 2, "padding", "12px", "margin", "4px"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".document[_ngcontent-%COMP%], .appbody[_ngcontent-%COMP%] {\r\n        height: 890px;\r\n        width: 100%;\r\n        caret-color: transparent;\r\n    }\r\n\r\n    .centeralized-items[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    \r\n\r\n    .header-placeholder[_ngcontent-%COMP%] {\r\n        background: var(--primary-color);\r\n        min-height: 64px;\r\n    }\r\n\r\n    .header-container[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        box-sizing: border-box;\r\n        min-height: 64px;\r\n    }\r\n\r\n    .header-primary-bar[_ngcontent-%COMP%] {\r\n        min-width: 238px;\r\n        height: 48px;\r\n        vertical-align: middle;\r\n        white-space: nowrap;\r\n        align-items: center;\r\n        display: flex;\r\n    }\r\n\r\n    .hamburguer-placeholder[_ngcontent-%COMP%]:hover {\r\n        background-color: rgba(60, 64, 67, .08);\r\n    }\r\n\r\n    .hamburguer-placeholder[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        margin: 0 4px;\r\n        padding: 12px;\r\n        overflow: hidden;\r\n        vertical-align: middle;\r\n        cursor: pointer;\r\n        flex: 0 0 auto;\r\n        border-radius: 50%;\r\n    }\r\n\r\n    .logo-placeholder[_ngcontent-%COMP%] {}\r\n\r\n    \r\n\r\n    .app[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        display: flex;\r\n    }\r\n\r\n    .app-nav-bar-left[_ngcontent-%COMP%] {\r\n        background: var(--primary-color);\r\n        width: 80px;\r\n    }\r\n\r\n    .main-action-placeholder[_ngcontent-%COMP%] {\r\n        height: 56px;\r\n        margin: 8px 0 16px 0;\r\n        border-radius: 15px;\r\n        margin: 5px 10px 1px 7px;\r\n        background-color: #c2e7ff;\r\n    }\r\n\r\n    .main-action-placeholder[_ngcontent-%COMP%]:hover {\r\n        box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);\r\n        background-color: #c2e7ff;\r\n    }\r\n\r\n    .app-nav-bar-left[_ngcontent-%COMP%]:hover {\r\n        width: 200px;\r\n        transition: width 1s;\r\n    }\r\n\r\n    .app-nav-bar-right[_ngcontent-%COMP%] {\r\n        background: var(--primary-color);\r\n        width: 56px;\r\n    }\r\n\r\n    .content-holder[_ngcontent-%COMP%] {\r\n        background: var(--primary-color);\r\n        width: 100%;\r\n        display: flex;\r\n    }\r\n\r\n    .content[_ngcontent-%COMP%] {\r\n        background-color: rgba(255, 255, 255, 1);\r\n        width: 100%;\r\n        border-radius: 16px;\r\n    }\r\n\r\n    \r\n\r\n    .footer[_ngcontent-%COMP%] {\r\n        background: var(--primary-color);\r\n        min-height: 20px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztRQUVRLGFBQWE7UUFDYixXQUFXO1FBQ1gsd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7SUFDdkI7O0lBRUEsV0FBVzs7SUFFWDtRQUNJLGdDQUFnQztRQUNoQyxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUduQixtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHVDQUF1QztJQUMzQzs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsZUFBZTtRQUVmLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7O0lBRUEsbUJBQW1COztJQUVuQixnQkFBZ0I7O0lBRWhCO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxnQ0FBZ0M7UUFDaEMsV0FBVztJQUNmOztJQUdBO1FBQ0ksWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLDhFQUE4RTtRQUM5RSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxZQUFZO1FBQ1osb0JBQW9CO0lBQ3hCOztJQUdBO1FBQ0ksZ0NBQWdDO1FBQ2hDLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGdDQUFnQztRQUNoQyxXQUFXO1FBQ1gsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHdDQUF3QztRQUN4QyxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCOztJQUdBLFdBQVc7O0lBRVg7UUFDSSxnQ0FBZ0M7UUFDaEMsZ0JBQWdCO0lBQ3BCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50LFxyXG4gICAgLmFwcGJvZHkge1xyXG4gICAgICAgIGhlaWdodDogODkwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY2FyZXQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jZW50ZXJhbGl6ZWQtaXRlbXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBIZWFkZXIgKi9cclxuXHJcbiAgICAuaGVhZGVyLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjRweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLXByaW1hcnktYmFyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIzOHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oYW1idXJndWVyLXBsYWNlaG9sZGVyOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYwLCA2NCwgNjcsIC4wOCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmhhbWJ1cmd1ZXItcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAtd2Via2l0LWZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nby1wbGFjZWhvbGRlciB7fVxyXG5cclxuICAgIC8qIEFwcGxpY2F0aW9uICovXHJcblxyXG4gICAgLmFwcCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1uYXYtYmFyLWxlZnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubWFpbi1hY3Rpb24tcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICBtYXJnaW46IDhweCAwIDE2cHggMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHggMXB4IDdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJlN2ZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWFjdGlvbi1wbGFjZWhvbGRlcjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiKDYwIDY0IDY3IC8gMzAlKSwgMCA0cHggOHB4IDNweCByZ2IoNjAgNjQgNjcgLyAxNSUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmU3ZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1uYXYtYmFyLWxlZnQ6aG92ZXIge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmFwcC1uYXYtYmFyLXJpZ2h0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB3aWR0aDogNTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1ob2xkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogRm9vdGVyICovXHJcblxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIH0iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map