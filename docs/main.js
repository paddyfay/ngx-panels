(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-panels/src/lib/classes/panel-ref.class.ts":
/*!****************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/classes/panel-ref.class.ts ***!
  \****************************************************************/
/*! exports provided: PanelRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelRef", function() { return PanelRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var PanelRef = /** @class */ (function () {
    function PanelRef() {
        this.closeEnabledSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this.onBeforeClose = function () { return true; };
    }
    PanelRef.prototype.setComponents = function (panelComponentRef, panelContainer) {
        this.panelCmpRef = panelComponentRef;
        this.panelContainer = panelContainer;
    };
    PanelRef.prototype.enableClose = function (canClose) {
        this.closeEnabledSubject.next(canClose);
    };
    PanelRef.prototype.close = function () {
        if (this.closeEnabledSubject.getValue()) {
            var continueClose = this.onBeforeClose();
            if (continueClose) {
                this.panelContainer.startClosingAnimation();
            }
        }
    };
    Object.defineProperty(PanelRef.prototype, "closeEnabled$", {
        get: function () {
            return this.closeEnabledSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PanelRef.prototype.setData = function (data) {
        this.panelData = data;
    };
    Object.defineProperty(PanelRef.prototype, "data", {
        get: function () {
            return this.panelData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelRef.prototype, "panelComponentRef", {
        get: function () {
            return this.panelCmpRef;
        },
        enumerable: true,
        configurable: true
    });
    return PanelRef;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/classes/stack.class.ts":
/*!************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/classes/stack.class.ts ***!
  \************************************************************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    Stack.prototype.pop = function () {
        return this.elements.pop();
    };
    Stack.prototype.peek = function () {
        return this.elements[this.elements.length - 1];
    };
    Stack.prototype.push = function (element) {
        this.elements.push(element);
    };
    Stack.prototype.size = function () {
        return this.elements.length;
    };
    Stack.prototype.empty = function () {
        this.elements = [];
    };
    Stack.prototype.getAll = function () {
        return this.elements.slice();
    };
    return Stack;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.html":
/*!*************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-panel-body__scroller\">\n    <div class=\"ngx-panel-body__content\" [class.ngx-panel-body__content--auto-padding]=\"autoPadding\">\n        <ng-content></ng-content>\n    </div>\n</div>\n"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.scss":
/*!*************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-grow: 1;\n  overflow-y: auto; }\n\n.ngx-panel-body__content--auto-padding {\n  padding: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWJvZHkvQzpcXERldmVsb3BtZW50XFxJTk5PVkFUSU9OXFxuZ3gtcGFuZWxzL3Byb2plY3RzXFxuZ3gtcGFuZWxzXFxzcmNcXGxpYlxcY29tcG9uZW50c1xccGFuZWwtYm9keVxccGFuZWwtYm9keS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQVk7RUFDWixpQkFBZ0IsRUFDbkI7O0FBSU87RUFDSSxjQUFhLEVBQ2hCIiwiZmlsZSI6InByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWJvZHkvcGFuZWwtYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuOmhvc3Qge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm5neC1wYW5lbC1ib2R5IHtcclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAgICYtLWF1dG8tcGFkZGluZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.ts":
/*!***********************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PanelBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBodyComponent", function() { return PanelBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelBodyComponent = /** @class */ (function () {
    function PanelBodyComponent() {
        this.autoPadding = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PanelBodyComponent.prototype, "autoPadding", void 0);
    PanelBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-panel-body',
            template: __webpack_require__(/*! ./panel-body.component.html */ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.html"),
            styles: [__webpack_require__(/*! ./panel-body.component.scss */ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], PanelBodyComponent);
    return PanelBodyComponent;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.html":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-panel-container__main\"><div #panelContainer class=\"ngx-panel-container__panels\"></div></div>\n"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.scss":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-panel-container__main {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 20; }\n\n.ngx-panel-container__panels {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWNvbnRhaW5lci9DOlxcRGV2ZWxvcG1lbnRcXElOTk9WQVRJT05cXG5neC1wYW5lbHMvcHJvamVjdHNcXG5neC1wYW5lbHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxwYW5lbC1jb250YWluZXJcXHBhbmVsLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWNvbnRhaW5lci9DOlxcRGV2ZWxvcG1lbnRcXElOTk9WQVRJT05cXG5neC1wYW5lbHMvcHJvamVjdHNcXG5neC1wYW5lbHNcXHNyY1xcc3R5bGVzXFxfdXRpbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBVyxFQUNkOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixTQUFRO0VBQ1IsVUFBUztFQUNULFFBQU87RUFDUCxvQkNmTztFRGdCUCxjQUFhO0VBQ2IsdUJBQXNCLEVBQ3pCIiwiZmlsZSI6InByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWNvbnRhaW5lci9wYW5lbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy91dGlscyc7XHJcblxyXG4ubmd4LXBhbmVsLWNvbnRhaW5lciB7XHJcbiAgICAmX19tYWluIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgei1pbmRleDogMjA7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcGFuZWxzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbi8vIFZaQyBDT0xPUiBQQUxFVFRFXHJcbi8vIFByaW1hcnkgQ29sb3JzXHJcbiRyZWQ6ICNkNTJiMWU7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kYmx1ZTogIzAwODhjZTtcclxuJG9yYW5nZTogI2VkNzAwMDtcclxuJHllbGxvdzogI2ZmYmMzZDtcclxuJGdyZWVuOiAjMDBhYzNlO1xyXG5cclxuLy8gU2Vjb25kYXJ5IENvbG9yc1xyXG4kY29vbC1ncmF5OiAjZmFmYWZhO1xyXG4kY29vbC1ncmF5LTE6ICNmNmY2ZjY7XHJcbiRjb29sLWdyYXktMjogI2YyZjNmMztcclxuJGNvb2wtZ3JheS0zOiAjZWNlY2VjO1xyXG4kY29vbC1ncmF5LTQ6ICNkOGRhZGE7XHJcbiRjb29sLWdyYXktNTogI2I1YjliOTtcclxuJGNvb2wtZ3JheS02OiAjNzQ3Njc2O1xyXG4kY29vbC1ncmF5LTc6ICM1MjU0NTQ7XHJcbiRjb29sLWdyYXktODogIzMzMzMzMztcclxuJGNvb2wtZ3JheS05OiAjMWExYTFhO1xyXG5cclxuLy8gVGVydGlhcnkgQ29sb3JzXHJcbiRyZWQtaHVlLTE6ICNmZGY1ZjQ7XHJcbiRyZWQtaHVlLTI6ICNlNjViNTE7XHJcbiRyZWQtaHVlLTM6ICRyZWQ7XHJcbiRyZWQtaHVlLTQ6ICNhODIyMTg7XHJcbiRyZWQtaHVlLTU6ICM3YzE5MTE7XHJcblxyXG4kYmx1ZS1odWUtMTogI2YwZmFmZjtcclxuJGJsdWUtaHVlLTI6ICM1N2M2ZmY7XHJcbiRibHVlLWh1ZS0zOiAkYmx1ZTtcclxuJGJsdWUtaHVlLTQ6ICMwMDY2OWI7XHJcbiRibHVlLWh1ZS01OiAjMDA0NTY4O1xyXG5cclxuJG9yYW5nZS1odWUtMTogI2ZmZjVlZDtcclxuJG9yYW5nZS1odWUtMjogI2ZmYjc3NjtcclxuJG9yYW5nZS1odWUtMzogJG9yYW5nZTtcclxuJG9yYW5nZS1odWUtNDogI2NiNjAwMDtcclxuJG9yYW5nZS1odWUtNTogIzk4NDgwMDtcclxuXHJcbiR5ZWxsb3ctaHVlLTE6ICNmZmY3ZTc7XHJcbiR5ZWxsb3ctaHVlLTI6ICNmZmQzODE7XHJcbiR5ZWxsb3ctaHVlLTM6ICR5ZWxsb3c7XHJcbiR5ZWxsb3ctaHVlLTQ6ICNmOGEyMDA7XHJcbiR5ZWxsb3ctaHVlLTU6ICNjNTgxMDA7XHJcblxyXG4kZ3JlZW4taHVlLTE6ICNmMGZmZjU7XHJcbiRncmVlbi1odWUtMjogIzZiZTQ3OTtcclxuJGdyZWVuLWh1ZS0zOiAkZ3JlZW47XHJcbiRncmVlbi1odWUtNDogIzAwOGEzMjtcclxuJGdyZWVuLWh1ZS01OiAjMDA2ODI2O1xyXG5cclxuLy8gdXRpbGl0eSBmdW5jdGlvbnNcclxuQG1peGluIHNlbGVjdGFibGUoKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHJlZ3VsYXJTaGFkb3coKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKCRncmV5LWh1ZS0zLDAuMzYpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cxZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgMnB4IDJweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCAzcHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cyZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzNkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCA0cHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggOHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93NGRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgNHB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCAxMHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93NmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgM3B4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzhkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDEwcHggMXB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCAxNHB4IDNweCByZ2JhKCRibGFjaywwLjEyKSwgMCA0cHggNXB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93OWRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCA5cHggMTJweCAxcHggcmdiYSgkYmxhY2ssMC4xNCksIDAgM3B4IDE2cHggMnB4IHJnYmEoJGJsYWNrLDAuMTIpLCAwIDVweCA2cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cxMmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE3cHggMnB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDVweCAyMnB4IDRweCByZ2JhKCRibGFjaywwLjEyKSwgMCA3cHggOHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MTZkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTZweCAyNHB4IDJweCByZ2JhKCRibGFjaywwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgOHB4IDEwcHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cyNGRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKCRibGFjaywwLjEyKSwgMCAxMXB4IDE1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gZXJyb3JTaGFkb3coKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKCRyZWQsIC4zNSksIDAgMXB4IDRweCAwIHJnYmEoJHJlZCwgLjUyKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PanelContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelContainerComponent", function() { return PanelContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_stack_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/stack.class */ "./projects/ngx-panels/src/lib/classes/stack.class.ts");
/* harmony import */ var _services_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/panel.service */ "./projects/ngx-panels/src/lib/services/panel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PanelContainerComponent = /** @class */ (function () {
    function PanelContainerComponent(panelService) {
        this.panelService = panelService;
        this.panels = new _classes_stack_class__WEBPACK_IMPORTED_MODULE_1__["Stack"]();
    }
    PanelContainerComponent.prototype.ngOnInit = function () {
        this.panelService.setContainer(this);
    };
    PanelContainerComponent.prototype.startClosingAnimation = function () {
        var panelRef = this.panels.peek();
        panelRef.panelComponentRef.instance.startCloseAnimation();
    };
    PanelContainerComponent.prototype.destroyTopPanel = function () {
        var panelRef = this.panels.pop();
        panelRef.panelComponentRef.destroy();
    };
    PanelContainerComponent.prototype.addTopPanel = function (panelRef) {
        this.panels.push(panelRef);
        this.viewContainer.insert(panelRef.panelComponentRef.hostView);
    };
    PanelContainerComponent.prototype.destroyAll = function () {
        this.panels.getAll().forEach(function (panel) {
            panel.panelComponentRef.destroy();
        });
        this.panels.empty();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panelContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], PanelContainerComponent.prototype, "viewContainer", void 0);
    PanelContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-panel-container',
            template: __webpack_require__(/*! ./panel-container.component.html */ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.html"),
            styles: [__webpack_require__(/*! ./panel-container.component.scss */ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_panel_service__WEBPACK_IMPORTED_MODULE_2__["PanelService"]])
    ], PanelContainerComponent);
    return PanelContainerComponent;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-panel-footer__main\" [class.ngx-panel-footer__main--auto-padding]=\"autoPadding\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.scss":
/*!*****************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-shrink: 0; }\n\n.ngx-panel-footer__main {\n  border-top: 1px solid #d8dada; }\n\n.ngx-panel-footer__main--auto-padding {\n    padding: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWZvb3Rlci9DOlxcRGV2ZWxvcG1lbnRcXElOTk9WQVRJT05cXG5neC1wYW5lbHMvcHJvamVjdHNcXG5neC1wYW5lbHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxwYW5lbC1mb290ZXJcXHBhbmVsLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWZvb3Rlci9DOlxcRGV2ZWxvcG1lbnRcXElOTk9WQVRJT05cXG5neC1wYW5lbHMvcHJvamVjdHNcXG5neC1wYW5lbHNcXHNyY1xcc3R5bGVzXFxfdXRpbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGVBQWMsRUFDakI7O0FBR0c7RUFDSSw4QkNNYSxFRERoQjs7QUFIRztJQUNJLGNBQWEsRUFDaEIiLCJmaWxlIjoicHJvamVjdHMvbmd4LXBhbmVscy9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwtZm9vdGVyL3BhbmVsLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQGltcG9ydCAnLi4vLi4vLi4vL3N0eWxlcy91dGlscyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLm5neC1wYW5lbC1mb290ZXIge1xyXG4gICAgJl9fbWFpbiB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRjb29sLWdyYXktNDtcclxuXHJcbiAgICAgICAgJi0tYXV0by1wYWRkaW5nIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbi8vIFZaQyBDT0xPUiBQQUxFVFRFXHJcbi8vIFByaW1hcnkgQ29sb3JzXHJcbiRyZWQ6ICNkNTJiMWU7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kYmx1ZTogIzAwODhjZTtcclxuJG9yYW5nZTogI2VkNzAwMDtcclxuJHllbGxvdzogI2ZmYmMzZDtcclxuJGdyZWVuOiAjMDBhYzNlO1xyXG5cclxuLy8gU2Vjb25kYXJ5IENvbG9yc1xyXG4kY29vbC1ncmF5OiAjZmFmYWZhO1xyXG4kY29vbC1ncmF5LTE6ICNmNmY2ZjY7XHJcbiRjb29sLWdyYXktMjogI2YyZjNmMztcclxuJGNvb2wtZ3JheS0zOiAjZWNlY2VjO1xyXG4kY29vbC1ncmF5LTQ6ICNkOGRhZGE7XHJcbiRjb29sLWdyYXktNTogI2I1YjliOTtcclxuJGNvb2wtZ3JheS02OiAjNzQ3Njc2O1xyXG4kY29vbC1ncmF5LTc6ICM1MjU0NTQ7XHJcbiRjb29sLWdyYXktODogIzMzMzMzMztcclxuJGNvb2wtZ3JheS05OiAjMWExYTFhO1xyXG5cclxuLy8gVGVydGlhcnkgQ29sb3JzXHJcbiRyZWQtaHVlLTE6ICNmZGY1ZjQ7XHJcbiRyZWQtaHVlLTI6ICNlNjViNTE7XHJcbiRyZWQtaHVlLTM6ICRyZWQ7XHJcbiRyZWQtaHVlLTQ6ICNhODIyMTg7XHJcbiRyZWQtaHVlLTU6ICM3YzE5MTE7XHJcblxyXG4kYmx1ZS1odWUtMTogI2YwZmFmZjtcclxuJGJsdWUtaHVlLTI6ICM1N2M2ZmY7XHJcbiRibHVlLWh1ZS0zOiAkYmx1ZTtcclxuJGJsdWUtaHVlLTQ6ICMwMDY2OWI7XHJcbiRibHVlLWh1ZS01OiAjMDA0NTY4O1xyXG5cclxuJG9yYW5nZS1odWUtMTogI2ZmZjVlZDtcclxuJG9yYW5nZS1odWUtMjogI2ZmYjc3NjtcclxuJG9yYW5nZS1odWUtMzogJG9yYW5nZTtcclxuJG9yYW5nZS1odWUtNDogI2NiNjAwMDtcclxuJG9yYW5nZS1odWUtNTogIzk4NDgwMDtcclxuXHJcbiR5ZWxsb3ctaHVlLTE6ICNmZmY3ZTc7XHJcbiR5ZWxsb3ctaHVlLTI6ICNmZmQzODE7XHJcbiR5ZWxsb3ctaHVlLTM6ICR5ZWxsb3c7XHJcbiR5ZWxsb3ctaHVlLTQ6ICNmOGEyMDA7XHJcbiR5ZWxsb3ctaHVlLTU6ICNjNTgxMDA7XHJcblxyXG4kZ3JlZW4taHVlLTE6ICNmMGZmZjU7XHJcbiRncmVlbi1odWUtMjogIzZiZTQ3OTtcclxuJGdyZWVuLWh1ZS0zOiAkZ3JlZW47XHJcbiRncmVlbi1odWUtNDogIzAwOGEzMjtcclxuJGdyZWVuLWh1ZS01OiAjMDA2ODI2O1xyXG5cclxuLy8gdXRpbGl0eSBmdW5jdGlvbnNcclxuQG1peGluIHNlbGVjdGFibGUoKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHJlZ3VsYXJTaGFkb3coKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKCRncmV5LWh1ZS0zLDAuMzYpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cxZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgMnB4IDJweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCAzcHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cyZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzNkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCA0cHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggOHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93NGRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgNHB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCAxMHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93NmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgM3B4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzhkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDEwcHggMXB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCAxNHB4IDNweCByZ2JhKCRibGFjaywwLjEyKSwgMCA0cHggNXB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93OWRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCA5cHggMTJweCAxcHggcmdiYSgkYmxhY2ssMC4xNCksIDAgM3B4IDE2cHggMnB4IHJnYmEoJGJsYWNrLDAuMTIpLCAwIDVweCA2cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cxMmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE3cHggMnB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDVweCAyMnB4IDRweCByZ2JhKCRibGFjaywwLjEyKSwgMCA3cHggOHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MTZkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTZweCAyNHB4IDJweCByZ2JhKCRibGFjaywwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgOHB4IDEwcHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cyNGRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKCRibGFjaywwLjEyKSwgMCAxMXB4IDE1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gZXJyb3JTaGFkb3coKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKCRyZWQsIC4zNSksIDAgMXB4IDRweCAwIHJnYmEoJHJlZCwgLjUyKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.ts":
/*!***************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PanelFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelFooterComponent", function() { return PanelFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelFooterComponent = /** @class */ (function () {
    function PanelFooterComponent() {
        this.autoPadding = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PanelFooterComponent.prototype, "autoPadding", void 0);
    PanelFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-panel-footer',
            template: __webpack_require__(/*! ./panel-footer.component.html */ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.html"),
            styles: [__webpack_require__(/*! ./panel-footer.component.scss */ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], PanelFooterComponent);
    return PanelFooterComponent;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.html":
/*!*****************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-panel-header__main\" [class.ngx-panel-header__main--auto-padding]=\"autoPadding\">\n    <div class=\"ngx-panel-header__content\"><ng-content></ng-content></div>\n    <div\n        class=\"ngx-panel-header__close\"\n        [class.ngx-panel-header__close--disabled]=\"!(closeEnabled$ | async)\"\n        (click)=\"onCloseClick()\">\n        <svg width=\"14px\" height=\"14px\" viewBox=\"0 0 14 14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs>\n                <polygon id=\"path-1\" points=\"15 2.41 13.59 1 8 6.59 2.41 1 1 2.41 6.59 8 1 13.59 2.41 15 8 9.41 13.59 15 15 13.59 9.41 8\"></polygon>\n            </defs>\n            <g id=\"-\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                <g id=\"Panel/Rigth/Job-Preview\" transform=\"translate(-289.000000, -17.000000)\">\n                    <g id=\"Group-11\" transform=\"translate(0.000000, 16.000000)\">\n                        <g id=\"icons/close/16x16\" transform=\"translate(288.000000, 0.000000)\">\n                            <mask id=\"mask-2\" fill=\"white\">\n                                <use xlink:href=\"#path-1\"></use>\n                            </mask>\n                            <use id=\"Mask\" fill=\"#000000\" fill-rule=\"nonzero\" xlink:href=\"#path-1\"></use>\n                            <g id=\"Primary/Black\" mask=\"url(#mask-2)\" fill=\"#000000\" fill-rule=\"evenodd\">\n                                <g transform=\"translate(-17.000000, -17.000000)\" id=\"Colour_Black-#000000\">\n                                    <polygon points=\"0 0 50 0 50 50 0 50\"></polygon>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n    </div>\n</div>\n"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.scss":
/*!*****************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-shrink: 0; }\n\n.ngx-panel-header__main {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  border-bottom: 1px solid #d8dada; }\n\n.ngx-panel-header__main--auto-padding {\n    padding: 16px; }\n\n.ngx-panel-header__header-content {\n  flex-grow: 1; }\n\n.ngx-panel-header__close {\n  margin-left: auto;\n  cursor: pointer;\n  width: 16px;\n  height: 16px; }\n\n.ngx-panel-header__close--disabled {\n    opacity: 0.3;\n    pointer-events: none;\n    cursor: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWhlYWRlci9DOlxcRGV2ZWxvcG1lbnRcXElOTk9WQVRJT05cXG5neC1wYW5lbHMvcHJvamVjdHNcXG5neC1wYW5lbHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxwYW5lbC1oZWFkZXJcXHBhbmVsLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWhlYWRlci9DOlxcRGV2ZWxvcG1lbnRcXElOTk9WQVRJT05cXG5neC1wYW5lbHMvcHJvamVjdHNcXG5neC1wYW5lbHNcXHNyY1xcc3R5bGVzXFxfdXRpbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGVBQWMsRUFDakI7O0FBR0c7RUFDSSxjQUFhO0VBQ2IsMEJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixpQ0NHYSxFREVoQjs7QUFIRztJQUNJLGNBQWEsRUFDaEI7O0FBR0w7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQU9mOztBQUxHO0lBQ0ksYUFBWTtJQUNaLHFCQUFvQjtJQUNwQixhQUFZLEVBQ2YiLCJmaWxlIjoicHJvamVjdHMvbmd4LXBhbmVscy9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwtaGVhZGVyL3BhbmVsLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3V0aWxzJztcclxuXHJcbjpob3N0IHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ubmd4LXBhbmVsLWhlYWRlciB7XHJcbiAgICAmX19tYWluIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvb2wtZ3JheS00O1xyXG5cclxuICAgICAgICAmLS1hdXRvLXBhZGRpbmcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Nsb3NlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG5cclxuICAgICAgICAmLS1kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbi8vIFZaQyBDT0xPUiBQQUxFVFRFXHJcbi8vIFByaW1hcnkgQ29sb3JzXHJcbiRyZWQ6ICNkNTJiMWU7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kYmx1ZTogIzAwODhjZTtcclxuJG9yYW5nZTogI2VkNzAwMDtcclxuJHllbGxvdzogI2ZmYmMzZDtcclxuJGdyZWVuOiAjMDBhYzNlO1xyXG5cclxuLy8gU2Vjb25kYXJ5IENvbG9yc1xyXG4kY29vbC1ncmF5OiAjZmFmYWZhO1xyXG4kY29vbC1ncmF5LTE6ICNmNmY2ZjY7XHJcbiRjb29sLWdyYXktMjogI2YyZjNmMztcclxuJGNvb2wtZ3JheS0zOiAjZWNlY2VjO1xyXG4kY29vbC1ncmF5LTQ6ICNkOGRhZGE7XHJcbiRjb29sLWdyYXktNTogI2I1YjliOTtcclxuJGNvb2wtZ3JheS02OiAjNzQ3Njc2O1xyXG4kY29vbC1ncmF5LTc6ICM1MjU0NTQ7XHJcbiRjb29sLWdyYXktODogIzMzMzMzMztcclxuJGNvb2wtZ3JheS05OiAjMWExYTFhO1xyXG5cclxuLy8gVGVydGlhcnkgQ29sb3JzXHJcbiRyZWQtaHVlLTE6ICNmZGY1ZjQ7XHJcbiRyZWQtaHVlLTI6ICNlNjViNTE7XHJcbiRyZWQtaHVlLTM6ICRyZWQ7XHJcbiRyZWQtaHVlLTQ6ICNhODIyMTg7XHJcbiRyZWQtaHVlLTU6ICM3YzE5MTE7XHJcblxyXG4kYmx1ZS1odWUtMTogI2YwZmFmZjtcclxuJGJsdWUtaHVlLTI6ICM1N2M2ZmY7XHJcbiRibHVlLWh1ZS0zOiAkYmx1ZTtcclxuJGJsdWUtaHVlLTQ6ICMwMDY2OWI7XHJcbiRibHVlLWh1ZS01OiAjMDA0NTY4O1xyXG5cclxuJG9yYW5nZS1odWUtMTogI2ZmZjVlZDtcclxuJG9yYW5nZS1odWUtMjogI2ZmYjc3NjtcclxuJG9yYW5nZS1odWUtMzogJG9yYW5nZTtcclxuJG9yYW5nZS1odWUtNDogI2NiNjAwMDtcclxuJG9yYW5nZS1odWUtNTogIzk4NDgwMDtcclxuXHJcbiR5ZWxsb3ctaHVlLTE6ICNmZmY3ZTc7XHJcbiR5ZWxsb3ctaHVlLTI6ICNmZmQzODE7XHJcbiR5ZWxsb3ctaHVlLTM6ICR5ZWxsb3c7XHJcbiR5ZWxsb3ctaHVlLTQ6ICNmOGEyMDA7XHJcbiR5ZWxsb3ctaHVlLTU6ICNjNTgxMDA7XHJcblxyXG4kZ3JlZW4taHVlLTE6ICNmMGZmZjU7XHJcbiRncmVlbi1odWUtMjogIzZiZTQ3OTtcclxuJGdyZWVuLWh1ZS0zOiAkZ3JlZW47XHJcbiRncmVlbi1odWUtNDogIzAwOGEzMjtcclxuJGdyZWVuLWh1ZS01OiAjMDA2ODI2O1xyXG5cclxuLy8gdXRpbGl0eSBmdW5jdGlvbnNcclxuQG1peGluIHNlbGVjdGFibGUoKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHJlZ3VsYXJTaGFkb3coKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKCRncmV5LWh1ZS0zLDAuMzYpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cxZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgMnB4IDJweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCAzcHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cyZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzNkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCA0cHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggOHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93NGRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgNHB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCAxMHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93NmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgM3B4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzhkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDEwcHggMXB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCAxNHB4IDNweCByZ2JhKCRibGFjaywwLjEyKSwgMCA0cHggNXB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93OWRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCA5cHggMTJweCAxcHggcmdiYSgkYmxhY2ssMC4xNCksIDAgM3B4IDE2cHggMnB4IHJnYmEoJGJsYWNrLDAuMTIpLCAwIDVweCA2cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cxMmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE3cHggMnB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDVweCAyMnB4IDRweCByZ2JhKCRibGFjaywwLjEyKSwgMCA3cHggOHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MTZkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTZweCAyNHB4IDJweCByZ2JhKCRibGFjaywwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgOHB4IDEwcHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cyNGRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKCRibGFjaywwLjEyKSwgMCAxMXB4IDE1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gZXJyb3JTaGFkb3coKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKCRyZWQsIC4zNSksIDAgMXB4IDRweCAwIHJnYmEoJHJlZCwgLjUyKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.ts":
/*!***************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PanelHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHeaderComponent", function() { return PanelHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/panel-ref.class */ "./projects/ngx-panels/src/lib/classes/panel-ref.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelHeaderComponent = /** @class */ (function () {
    function PanelHeaderComponent(panelRef) {
        this.panelRef = panelRef;
        this.autoPadding = true;
    }
    PanelHeaderComponent.prototype.ngOnInit = function () {
        this.closeEnabled$ = this.panelRef.closeEnabled$;
    };
    PanelHeaderComponent.prototype.onCloseClick = function () {
        this.panelRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PanelHeaderComponent.prototype, "autoPadding", void 0);
    PanelHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-panel-header',
            template: __webpack_require__(/*! ./panel-header.component.html */ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.html"),
            styles: [__webpack_require__(/*! ./panel-header.component.scss */ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_1__["PanelRef"]])
    ], PanelHeaderComponent);
    return PanelHeaderComponent;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel/panel.component.html":
/*!***************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel/panel.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-panel__main\" [@panelState]=\"panelState\" (@panelState.done)=\"onAnimationEvent($event)\">\n    <div class=\"ngx-panel__content\" #contentContainer></div>\n</div>\n"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel/panel.component.scss":
/*!***************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel/panel.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-panel__main {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 320px;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 4px 5px 0 rgba(0, 0, 0, 0.12), 0 1px 10px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  background-color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsL0M6XFxEZXZlbG9wbWVudFxcSU5OT1ZBVElPTlxcbmd4LXBhbmVscy9wcm9qZWN0c1xcbmd4LXBhbmVsc1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHBhbmVsXFxwYW5lbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsL0M6XFxEZXZlbG9wbWVudFxcSU5OT1ZBVElPTlxcbmd4LXBhbmVscy9wcm9qZWN0c1xcbmd4LXBhbmVsc1xcc3JjXFxzdHlsZXNcXF91dGlscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0ksbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixVQUFTO0VBQ1QsU0FBUTtFQUNSLGFBQVk7RUFDWixvQ0FBMkI7VUFBM0IsNEJBQTJCO0VDa0UvQiw4R0F6RVc7RURTUCxtQkFBa0I7RUFDbEIsMEJDVE8sRURVViIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtcGFuZWxzL3NyYy9saWIvY29tcG9uZW50cy9wYW5lbC9wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3V0aWxzJztcclxuXHJcbi5uZ3gtcGFuZWwge1xyXG4gICAgJl9fbWFpbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICBAaW5jbHVkZSBob3ZlclNoYWRvdzRkcCgpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbi8vIFZaQyBDT0xPUiBQQUxFVFRFXHJcbi8vIFByaW1hcnkgQ29sb3JzXHJcbiRyZWQ6ICNkNTJiMWU7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kYmx1ZTogIzAwODhjZTtcclxuJG9yYW5nZTogI2VkNzAwMDtcclxuJHllbGxvdzogI2ZmYmMzZDtcclxuJGdyZWVuOiAjMDBhYzNlO1xyXG5cclxuLy8gU2Vjb25kYXJ5IENvbG9yc1xyXG4kY29vbC1ncmF5OiAjZmFmYWZhO1xyXG4kY29vbC1ncmF5LTE6ICNmNmY2ZjY7XHJcbiRjb29sLWdyYXktMjogI2YyZjNmMztcclxuJGNvb2wtZ3JheS0zOiAjZWNlY2VjO1xyXG4kY29vbC1ncmF5LTQ6ICNkOGRhZGE7XHJcbiRjb29sLWdyYXktNTogI2I1YjliOTtcclxuJGNvb2wtZ3JheS02OiAjNzQ3Njc2O1xyXG4kY29vbC1ncmF5LTc6ICM1MjU0NTQ7XHJcbiRjb29sLWdyYXktODogIzMzMzMzMztcclxuJGNvb2wtZ3JheS05OiAjMWExYTFhO1xyXG5cclxuLy8gVGVydGlhcnkgQ29sb3JzXHJcbiRyZWQtaHVlLTE6ICNmZGY1ZjQ7XHJcbiRyZWQtaHVlLTI6ICNlNjViNTE7XHJcbiRyZWQtaHVlLTM6ICRyZWQ7XHJcbiRyZWQtaHVlLTQ6ICNhODIyMTg7XHJcbiRyZWQtaHVlLTU6ICM3YzE5MTE7XHJcblxyXG4kYmx1ZS1odWUtMTogI2YwZmFmZjtcclxuJGJsdWUtaHVlLTI6ICM1N2M2ZmY7XHJcbiRibHVlLWh1ZS0zOiAkYmx1ZTtcclxuJGJsdWUtaHVlLTQ6ICMwMDY2OWI7XHJcbiRibHVlLWh1ZS01OiAjMDA0NTY4O1xyXG5cclxuJG9yYW5nZS1odWUtMTogI2ZmZjVlZDtcclxuJG9yYW5nZS1odWUtMjogI2ZmYjc3NjtcclxuJG9yYW5nZS1odWUtMzogJG9yYW5nZTtcclxuJG9yYW5nZS1odWUtNDogI2NiNjAwMDtcclxuJG9yYW5nZS1odWUtNTogIzk4NDgwMDtcclxuXHJcbiR5ZWxsb3ctaHVlLTE6ICNmZmY3ZTc7XHJcbiR5ZWxsb3ctaHVlLTI6ICNmZmQzODE7XHJcbiR5ZWxsb3ctaHVlLTM6ICR5ZWxsb3c7XHJcbiR5ZWxsb3ctaHVlLTQ6ICNmOGEyMDA7XHJcbiR5ZWxsb3ctaHVlLTU6ICNjNTgxMDA7XHJcblxyXG4kZ3JlZW4taHVlLTE6ICNmMGZmZjU7XHJcbiRncmVlbi1odWUtMjogIzZiZTQ3OTtcclxuJGdyZWVuLWh1ZS0zOiAkZ3JlZW47XHJcbiRncmVlbi1odWUtNDogIzAwOGEzMjtcclxuJGdyZWVuLWh1ZS01OiAjMDA2ODI2O1xyXG5cclxuLy8gdXRpbGl0eSBmdW5jdGlvbnNcclxuQG1peGluIHNlbGVjdGFibGUoKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHJlZ3VsYXJTaGFkb3coKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKCRncmV5LWh1ZS0zLDAuMzYpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cxZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgMnB4IDJweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCAzcHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cyZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzNkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCA0cHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggOHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93NGRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgNHB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCAxMHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93NmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgM3B4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzhkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDEwcHggMXB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCAxNHB4IDNweCByZ2JhKCRibGFjaywwLjEyKSwgMCA0cHggNXB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93OWRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCA5cHggMTJweCAxcHggcmdiYSgkYmxhY2ssMC4xNCksIDAgM3B4IDE2cHggMnB4IHJnYmEoJGJsYWNrLDAuMTIpLCAwIDVweCA2cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cxMmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE3cHggMnB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDVweCAyMnB4IDRweCByZ2JhKCRibGFjaywwLjEyKSwgMCA3cHggOHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MTZkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTZweCAyNHB4IDJweCByZ2JhKCRibGFjaywwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgOHB4IDEwcHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3cyNGRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKCRibGFjaywwLjEyKSwgMCAxMXB4IDE1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gZXJyb3JTaGFkb3coKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKCRyZWQsIC4zNSksIDAgMXB4IDRweCAwIHJnYmEoJHJlZCwgLjUyKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel/panel.component.ts":
/*!*************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel/panel.component.ts ***!
  \*************************************************************************/
/*! exports provided: OPEN, CLOSED, PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN", function() { return OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSED", function() { return CLOSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SLIDE_DURATION = 200;
var OPEN = 'open';
var CLOSED = 'closed';
var ANIMATION_HIDDEN = {
    transform: 'translateX(100%)'
};
var ANIMATION_VISIBLE = {
    transform: 'translateX(0)'
};
var PanelComponent = /** @class */ (function () {
    function PanelComponent(ref) {
        this.ref = ref;
        this.panelCloseAnimationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.panelState = OPEN;
    }
    PanelComponent.prototype.onAnimationEvent = function (evt) {
        if (evt.fromState !== 'void' && evt.toState === CLOSED) {
            this.panelCloseAnimationEnd.emit(true);
        }
    };
    PanelComponent.prototype.startCloseAnimation = function () {
        this.panelState = CLOSED;
        this.ref.markForCheck();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PanelComponent.prototype, "panelCloseAnimationEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], PanelComponent.prototype, "contentContainer", void 0);
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./projects/ngx-panels/src/lib/components/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./projects/ngx-panels/src/lib/components/panel/panel.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('panelState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(CLOSED, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(ANIMATION_HIDDEN)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(OPEN, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(ANIMATION_VISIBLE)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(OPEN + " => " + CLOSED, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(SLIDE_DURATION)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(ANIMATION_HIDDEN), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(SLIDE_DURATION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(ANIMATION_VISIBLE))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/index.ts":
/*!**********************************************!*\
  !*** ./projects/ngx-panels/src/lib/index.ts ***!
  \**********************************************/
/*! exports provided: PanelModule, PanelStatusService, PanelService, PanelRef, PanelHeaderComponent, PanelBodyComponent, PanelFooterComponent, OPEN, CLOSED, PanelComponent, PanelContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panel_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.module */ "./projects/ngx-panels/src/lib/panel.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return _panel_module__WEBPACK_IMPORTED_MODULE_0__["PanelModule"]; });

/* harmony import */ var _services_panel_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/panel-status.service */ "./projects/ngx-panels/src/lib/services/panel-status.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelStatusService", function() { return _services_panel_status_service__WEBPACK_IMPORTED_MODULE_1__["PanelStatusService"]; });

/* harmony import */ var _services_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/panel.service */ "./projects/ngx-panels/src/lib/services/panel.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelService", function() { return _services_panel_service__WEBPACK_IMPORTED_MODULE_2__["PanelService"]; });

/* harmony import */ var _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/panel-ref.class */ "./projects/ngx-panels/src/lib/classes/panel-ref.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelRef", function() { return _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_3__["PanelRef"]; });

/* harmony import */ var _components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/panel-header/panel-header.component */ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelHeaderComponent", function() { return _components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__["PanelHeaderComponent"]; });

/* harmony import */ var _components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/panel-body/panel-body.component */ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelBodyComponent", function() { return _components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_5__["PanelBodyComponent"]; });

/* harmony import */ var _components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/panel-footer/panel-footer.component */ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelFooterComponent", function() { return _components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_6__["PanelFooterComponent"]; });

/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/panel/panel.component */ "./projects/ngx-panels/src/lib/components/panel/panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN", function() { return _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["OPEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSED", function() { return _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["CLOSED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["PanelComponent"]; });

/* harmony import */ var _components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/panel-container/panel-container.component */ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelContainerComponent", function() { return _components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_8__["PanelContainerComponent"]; });












/***/ }),

/***/ "./projects/ngx-panels/src/lib/panel.module.ts":
/*!*****************************************************!*\
  !*** ./projects/ngx-panels/src/lib/panel.module.ts ***!
  \*****************************************************/
/*! exports provided: PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/panel-body/panel-body.component */ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.ts");
/* harmony import */ var _components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/panel-container/panel-container.component */ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.ts");
/* harmony import */ var _components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/panel-footer/panel-footer.component */ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.ts");
/* harmony import */ var _components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/panel-header/panel-header.component */ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/panel/panel.component */ "./projects/ngx-panels/src/lib/components/panel/panel.component.ts");
/* harmony import */ var _services_panel_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/panel-status.service */ "./projects/ngx-panels/src/lib/services/panel-status.service.ts");
/* harmony import */ var _services_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/panel.service */ "./projects/ngx-panels/src/lib/services/panel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PanelModule = /** @class */ (function () {
    function PanelModule() {
    }
    PanelModule_1 = PanelModule;
    PanelModule.forRoot = function () {
        return {
            ngModule: PanelModule_1,
            providers: [_services_panel_status_service__WEBPACK_IMPORTED_MODULE_7__["PanelStatusService"], _services_panel_service__WEBPACK_IMPORTED_MODULE_8__["PanelService"]],
        };
    };
    var PanelModule_1;
    PanelModule = PanelModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            declarations: [
                _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"],
                _components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_3__["PanelContainerComponent"],
                _components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__["PanelHeaderComponent"],
                _components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_2__["PanelBodyComponent"],
                _components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_4__["PanelFooterComponent"]
            ],
            entryComponents: [_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"], _components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_3__["PanelContainerComponent"]],
            providers: [_services_panel_service__WEBPACK_IMPORTED_MODULE_8__["PanelService"], _services_panel_status_service__WEBPACK_IMPORTED_MODULE_7__["PanelStatusService"]],
            exports: [_components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_3__["PanelContainerComponent"], _components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__["PanelHeaderComponent"], _components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_2__["PanelBodyComponent"], _components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_4__["PanelFooterComponent"]]
        })
    ], PanelModule);
    return PanelModule;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/services/panel-status.service.ts":
/*!**********************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/services/panel-status.service.ts ***!
  \**********************************************************************/
/*! exports provided: PanelStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelStatusService", function() { return PanelStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PanelStatusService = /** @class */ (function () {
    function PanelStatusService() {
        this.size = 0;
        this.panelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // this method must not be called manually
    PanelStatusService.prototype.increment = function () {
        this.size += 1;
    };
    // this method must not be called manually
    PanelStatusService.prototype.reset = function () {
        this.size = 0;
    };
    // this method must not be called manually
    PanelStatusService.prototype.notifyOpen = function () {
        this.panelOpenSubject.next();
    };
    Object.defineProperty(PanelStatusService.prototype, "isOpen", {
        get: function () {
            return this.size > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelStatusService.prototype, "panelOpen$", {
        get: function () {
            return this.panelOpenSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PanelStatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PanelStatusService);
    return PanelStatusService;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/services/panel.service.ts":
/*!***************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/services/panel.service.ts ***!
  \***************************************************************/
/*! exports provided: PanelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelService", function() { return PanelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/panel-ref.class */ "./projects/ngx-panels/src/lib/classes/panel-ref.class.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/panel/panel.component */ "./projects/ngx-panels/src/lib/components/panel/panel.component.ts");
/* harmony import */ var _panel_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-status.service */ "./projects/ngx-panels/src/lib/services/panel-status.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PanelService = /** @class */ (function () {
    function PanelService(injector, resolver, panelStatusService) {
        this.injector = injector;
        this.resolver = resolver;
        this.panelStatusService = panelStatusService;
    }
    // this method must not be called manually
    PanelService.prototype.setContainer = function (panelContainer) {
        this.panelContainer = panelContainer;
    };
    PanelService.prototype.openAsRoot = function (content, data) {
        this.closeAll();
        this.panelStatusService.reset();
        this.panelStatusService.increment();
        var panelRef = this.appendPanel(_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"], content, data);
        this.panelStatusService.notifyOpen();
        return panelRef;
    };
    PanelService.prototype.closeAll = function () {
        this.panelStatusService.reset();
        this.panelContainer.destroyAll();
    };
    PanelService.prototype.open = function (content, data) {
        this.panelStatusService.increment();
        var panelRef = this.appendPanel(_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"], content, data);
        if (!this.panelStatusService.isOpen) {
            this.panelStatusService.notifyOpen();
        }
        return panelRef;
    };
    PanelService.prototype.appendPanel = function (panel, content, data) {
        var _this = this;
        // PanelRef is added to the injector so that the Body and the Header can access to it
        // (mainly for calling close action)
        var panelRef = new _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_1__["PanelRef"]();
        var childInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
            providers: [{ provide: _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_1__["PanelRef"], useValue: panelRef }],
            parent: this.injector
        });
        var contentFactory = this.resolver.resolveComponentFactory(content);
        var contentComponentRef = contentFactory.create(childInjector);
        var panelComponentFactory = this.resolver.resolveComponentFactory(panel);
        var panelComponentRef = panelComponentFactory.create(this.injector);
        panelRef.setComponents(panelComponentRef, this.panelContainer);
        panelComponentRef.instance.panelCloseAnimationEnd.subscribe(function () {
            _this.panelContainer.destroyTopPanel();
        });
        if (data) {
            panelRef.setData(data);
        }
        panelComponentRef.instance.contentContainer.insert(contentComponentRef.hostView);
        this.panelContainer.addTopPanel(panelRef);
        return panelRef;
    };
    PanelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _panel_status_service__WEBPACK_IMPORTED_MODULE_3__["PanelStatusService"]])
    ], PanelService);
    return PanelService;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/public_api.ts":
/*!***********************************************!*\
  !*** ./projects/ngx-panels/src/public_api.ts ***!
  \***********************************************/
/*! exports provided: PanelModule, PanelStatusService, PanelService, PanelRef, PanelHeaderComponent, PanelBodyComponent, PanelFooterComponent, OPEN, CLOSED, PanelComponent, PanelContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_panel_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/panel.module */ "./projects/ngx-panels/src/lib/panel.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return _lib_panel_module__WEBPACK_IMPORTED_MODULE_0__["PanelModule"]; });

/* harmony import */ var _lib_services_panel_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/panel-status.service */ "./projects/ngx-panels/src/lib/services/panel-status.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelStatusService", function() { return _lib_services_panel_status_service__WEBPACK_IMPORTED_MODULE_1__["PanelStatusService"]; });

/* harmony import */ var _lib_services_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/panel.service */ "./projects/ngx-panels/src/lib/services/panel.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelService", function() { return _lib_services_panel_service__WEBPACK_IMPORTED_MODULE_2__["PanelService"]; });

/* harmony import */ var _lib_classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/classes/panel-ref.class */ "./projects/ngx-panels/src/lib/classes/panel-ref.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelRef", function() { return _lib_classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_3__["PanelRef"]; });

/* harmony import */ var _lib_components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/components/panel-header/panel-header.component */ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelHeaderComponent", function() { return _lib_components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__["PanelHeaderComponent"]; });

/* harmony import */ var _lib_components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components/panel-body/panel-body.component */ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelBodyComponent", function() { return _lib_components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_5__["PanelBodyComponent"]; });

/* harmony import */ var _lib_components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/components/panel-footer/panel-footer.component */ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelFooterComponent", function() { return _lib_components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_6__["PanelFooterComponent"]; });

/* harmony import */ var _lib_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/components/panel/panel.component */ "./projects/ngx-panels/src/lib/components/panel/panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN", function() { return _lib_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["OPEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSED", function() { return _lib_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["CLOSED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return _lib_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["PanelComponent"]; });

/* harmony import */ var _lib_components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/components/panel-container/panel-container.component */ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelContainerComponent", function() { return _lib_components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_8__["PanelContainerComponent"]; });

/*
 * Public API Surface of ngx-panels
 */











/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-root__container\">\n  <div class=\"app-root__navbar\">\n    <div class=\"app-root__title\">\n      <img class=\"app-root__angular-logo\" src=\"assets/angular.svg\" />\n      <div>ngx-panels: Panel bots to the rescue!</div>\n    </div>\n  </div>\n  <div class=\"app-root__body\">\n    <div class=\"app-root__list-title\">Robots</div>\n    <div class=\"app-root__robot-list\">\n      <div *ngFor=\"let robot of robots\" class=\"app-root__robot\">\n        <div class=\"app-root__robot-name\">\n          <img class=\"app-root__icon\" src=\"assets/robot.svg\" />\n          {{ robot.name }}\n        </div>\n\n        <button class=\"app-root__button\" (click)=\"open(robot)\">\n          Details\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<ngx-panel-container></ngx-panel-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: block;\n  overflow: hidden; }\n\n.app-root__container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%; }\n\n.app-root__body {\n  height: 100%;\n  padding: 30px; }\n\n.app-root__navbar {\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  height: 60px;\n  background-color: #26547C;\n  color: #ffffff;\n  font-size: 1.8rem; }\n\n.app-root__button {\n  padding-top: 20px;\n  cursor: pointer;\n  padding: 5px;\n  background-color: #ffffff;\n  border: 1px solid #26547C; }\n\n.app-root__robot-list {\n  padding: 20px;\n  width: 300px;\n  display: flex;\n  flex-direction: column; }\n\n.app-root__robot-name {\n  font-size: 1.5rem; }\n\n.app-root__robot {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 5px; }\n\n.app-root__footer {\n  height: 25px;\n  background-color: #26547C; }\n\n.app-root__icon {\n  width: 20px; }\n\n.app-root__angular-logo {\n  width: 48px;\n  margin-right: 8px; }\n\n.app-root__title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.app-root__list-title {\n  font-size: 1.8rem;\n  padding: 5px 20px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXERldmVsb3BtZW50XFxJTk5PVkFUSU9OXFxuZ3gtcGFuZWxzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxEZXZlbG9wbWVudFxcSU5OT1ZBVElPTlxcbmd4LXBhbmVscy9zcmNcXHN0eWxlc1xcX3V0aWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixlQUFjO0VBQ2QsaUJBQWdCLEVBQ25COztBQUVDO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QiwrQkFBOEI7RUFDOUIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLGFBQVk7RUFDWiwwQkN6QlU7RUQwQlYsZUN4Qlc7RUR5Qlgsa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0Usa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLDBCQy9CVztFRGdDWCwwQkNsQ1UsRURtQ1g7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGNBQWE7RUFDYix1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5QixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osMEJDckRVLEVEc0RYOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsWUFBVztFQUNYLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc3R5bGVzL3V0aWxzJztcclxuXHJcbjpob3N0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5hcHAtcm9vdCB7XHJcbiAgJl9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAmX19ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG4gICZfX25hdmJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICB9XHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XHJcbiAgfVxyXG4gICZfX3JvYm90LWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAmX19yb2JvdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICAmX19yb2JvdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgJl9fZm9vdGVyIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gIH1cclxuICAmX19pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gIH1cclxuICAmX19hbmd1bGFyLWxvZ28ge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gICZfX2xpc3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG4iLCIkYmx1ZTogIzI2NTQ3QztcclxuJHllbGxvdzogI0UwRkY0RjtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiRncmV5OiAjY2NjY2NjO1xyXG5cclxuQG1peGluIGJ1dHRvbigpIHtcclxuICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ngx_panels_src_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ngx-panels/src/lib */ "./projects/ngx-panels/src/lib/index.ts");
/* harmony import */ var _robot_panel_robot_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./robot-panel/robot-panel.component */ "./src/app/robot-panel/robot-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(panelService) {
        this.panelService = panelService;
        this.robots = [
            { id: 1, name: 'Ufo Robot', avatar: 'https://robohash.org/uforobot', power: 3, statement: '' },
            { id: 2, name: 'Zoran Power', avatar: 'https://robohash.org/zoranpower', power: 4, statement: '' },
            { id: 3, name: 'Zin Jen', avatar: 'https://robohash.org/zinjen', power: 5, statement: '' },
            { id: 4, name: 'Mortadella', avatar: 'https://robohash.org/mortadella', power: 6, statement: '' },
            { id: 5, name: 'Paolo Bot', avatar: 'https://robohash.org/paolobot', power: 9, statement: '' }
        ];
    }
    AppComponent.prototype.open = function (robot) {
        this.panelService.openAsRoot(_robot_panel_robot_panel_component__WEBPACK_IMPORTED_MODULE_2__["RobotPanelComponent"], robot);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [projects_ngx_panels_src_lib__WEBPACK_IMPORTED_MODULE_1__["PanelService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_panels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-panels */ "./projects/ngx-panels/src/public_api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _robot_panel_robot_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./robot-panel/robot-panel.component */ "./src/app/robot-panel/robot-panel.component.ts");
/* harmony import */ var _statement_panel_statement_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statement-panel/statement-panel.component */ "./src/app/statement-panel/statement-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _robot_panel_robot_panel_component__WEBPACK_IMPORTED_MODULE_5__["RobotPanelComponent"], _statement_panel_statement_panel_component__WEBPACK_IMPORTED_MODULE_6__["StatementPanelComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_panels__WEBPACK_IMPORTED_MODULE_3__["PanelModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
            providers: [],
            entryComponents: [_robot_panel_robot_panel_component__WEBPACK_IMPORTED_MODULE_5__["RobotPanelComponent"], _statement_panel_statement_panel_component__WEBPACK_IMPORTED_MODULE_6__["StatementPanelComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/robot-panel/robot-panel.component.html":
/*!********************************************************!*\
  !*** ./src/app/robot-panel/robot-panel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <ngx-panel-header class=\"header\">\n        <div>Robot Details</div>\n    </ngx-panel-header>\n    <ngx-panel-body>\n        <div class=\"holder\">\n            <div class=\"title\">Robot</div>\n            <img class=\"avatar\" [src]=\"avatar\" alt=\"{{name}}\">\n            <div class=\"name\">{{name}}</div>\n            <div class=\"power-bar\">\n                <div class=\"power-title\">Power</div>\n                <svg *ngFor=\"let i of [].constructor(power)\" class=\"power\" style=\"fill: #FF6663\"\n                    xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M8.011 6.215c-1.711-.009-3.86.918-5.499 2.557-.625.625-1.176 1.355-1.601 2.174 1.479-1.119 3.057-1.47 4.903-.434.544-1.437 1.27-2.9 2.197-4.297zm9.785 9.773c-1.516.991-3.007 1.706-4.297 2.21 1.036 1.848.686 3.424-.434 4.902.819-.424 1.549-.975 2.175-1.602 1.644-1.642 2.572-3.796 2.556-5.51zm6.152-15.946c-.412-.028-.816-.042-1.213-.042-8.602 0-13.498 6.558-15.28 11.833l4.728 4.729c5.428-1.946 11.817-6.661 11.817-15.172 0-.439-.017-.888-.052-1.348zm-9.888 9.91c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0 .391 1.023 0 1.414-1.024.39-1.414 0zm2.828-2.828c-.781-.78-.781-2.047 0-2.828s2.048-.781 2.828 0c.781.781.781 2.047 0 2.828s-2.047.781-2.828 0zm-14.919 12.454l-.906-.906 5.208-5.188.906.906-5.208 5.188zm4.979 1.857l-.906-.906 3.636-3.664.906.906-3.636 3.664zm-6.042 2.565l-.906-.906 6.448-6.438.906.906-6.448 6.438z\"/></svg>\n            </div>\n            <button class=\"button\" (click)=\"onSpeak()\">Say something</button>\n        </div>\n    </ngx-panel-body>\n    <ngx-panel-footer class=\"footer\">\n        <div class=\"footer-bar\">\n            <button class=\"button\" (click)=\"onClick()\">Close me!</button>\n        </div>\n    </ngx-panel-footer>\n</div>"

/***/ }),

/***/ "./src/app/robot-panel/robot-panel.component.scss":
/*!********************************************************!*\
  !*** ./src/app/robot-panel/robot-panel.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.holder {\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n\n.header {\n  font-weight: bold;\n  font-size: 1.6rem;\n  background: #E0FF4F; }\n\n.footer {\n  background: #E0FF4F; }\n\n.footer-bar {\n  display: flex;\n  justify-content: center; }\n\n.title {\n  font-size: 1.6rem;\n  margin-bottom: 16px; }\n\n.avatar {\n  border-radius: 50%;\n  border: 1px solid #cccccc;\n  width: 200px;\n  height: 200px; }\n\n.name {\n  padding: 8px 0 32px;\n  font-weight: bold;\n  font-size: 1.6rem; }\n\n.button {\n  background: #26547C;\n  color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  padding: 8px;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.button:hover {\n    cursor: pointer; }\n\n.power-bar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 32px; }\n\n.power-title {\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9ib3QtcGFuZWwvQzpcXERldmVsb3BtZW50XFxJTk5PVkFUSU9OXFxuZ3gtcGFuZWxzL3NyY1xcYXBwXFxyb2JvdC1wYW5lbFxccm9ib3QtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JvYm90LXBhbmVsL0M6XFxEZXZlbG9wbWVudFxcSU5OT1ZBVElPTlxcbmd4LXBhbmVscy9zcmNcXHN0eWxlc1xcX3V0aWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixvQkNoQlksRURpQmY7O0FBRUQ7RUFDSSxvQkNwQlksRURxQmY7O0FBRUQ7RUFDSSxjQUFhO0VBQ2Isd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwwQkNoQ1U7RURpQ1YsYUFBWTtFQUNaLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLGtCQUFpQixFQUNwQjs7QUFFRDtFQ3hDSSxvQkFQVTtFQVFWLGVBTlc7RUFPWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsMEJBQXlCLEVEb0M1Qjs7QUFGRDtJQ2hDUSxnQkFBZSxFQUNsQjs7QURtQ0w7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2JvdC1wYW5lbC9yb2JvdC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy91dGlscyc7XHJcblxyXG4ubWFpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGJhY2tncm91bmQ6ICR5ZWxsb3c7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJHllbGxvdztcclxufVxyXG5cclxuLmZvb3Rlci1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmV5O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgcGFkZGluZzogOHB4IDAgMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uKCk7XHJcbn1cclxuXHJcbi5wb3dlci1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuXHJcbi5wb3dlci10aXRsZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufSIsIiRibHVlOiAjMjY1NDdDO1xyXG4keWVsbG93OiAjRTBGRjRGO1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJGdyZXk6ICNjY2NjY2M7XHJcblxyXG5AbWl4aW4gYnV0dG9uKCkge1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/robot-panel/robot-panel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/robot-panel/robot-panel.component.ts ***!
  \******************************************************/
/*! exports provided: RobotPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RobotPanelComponent", function() { return RobotPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ngx_panels_src_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ngx-panels/src/lib */ "./projects/ngx-panels/src/lib/index.ts");
/* harmony import */ var _statement_panel_statement_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../statement-panel/statement-panel.component */ "./src/app/statement-panel/statement-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RobotPanelComponent = /** @class */ (function () {
    function RobotPanelComponent(panelRef, panelService) {
        this.panelRef = panelRef;
        this.panelService = panelService;
    }
    RobotPanelComponent.prototype.ngOnInit = function () {
        this.name = this.panelRef.data.name;
        this.avatar = this.panelRef.data.avatar;
        this.power = this.panelRef.data.power;
    };
    RobotPanelComponent.prototype.onClick = function () {
        this.panelRef.close();
    };
    RobotPanelComponent.prototype.onSpeak = function () {
        this.panelService.open(_statement_panel_statement_panel_component__WEBPACK_IMPORTED_MODULE_2__["StatementPanelComponent"], this.name);
    };
    RobotPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'robot-panel',
            template: __webpack_require__(/*! ./robot-panel.component.html */ "./src/app/robot-panel/robot-panel.component.html"),
            styles: [__webpack_require__(/*! ./robot-panel.component.scss */ "./src/app/robot-panel/robot-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [projects_ngx_panels_src_lib__WEBPACK_IMPORTED_MODULE_1__["PanelRef"],
            projects_ngx_panels_src_lib__WEBPACK_IMPORTED_MODULE_1__["PanelService"]])
    ], RobotPanelComponent);
    return RobotPanelComponent;
}());



/***/ }),

/***/ "./src/app/statement-panel/statement-panel.component.html":
/*!****************************************************************!*\
  !*** ./src/app/statement-panel/statement-panel.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <ngx-panel-header class=\"header\">\n        <div>{{ name }}</div>\n    </ngx-panel-header>\n    <ngx-panel-body>\n        <div class=\"holder\">\n            <div class=\"title\">Let me say something</div>\n            <div class=\"statement\">{{ statement }}</div>\n        </div>\n    </ngx-panel-body>\n    <ngx-panel-footer class=\"footer\">\n        <div class=\"footer-bar\">\n            <button class=\"button\" (click)=\"onClick()\">Close me!</button>\n        </div>\n    </ngx-panel-footer>\n</div>"

/***/ }),

/***/ "./src/app/statement-panel/statement-panel.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/statement-panel/statement-panel.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.holder {\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n\n.header {\n  font-weight: bold;\n  font-size: 1.6rem;\n  background: #E0FF4F; }\n\n.footer {\n  background: #E0FF4F; }\n\n.footer-bar {\n  display: flex;\n  justify-content: center; }\n\n.title {\n  font-size: 1.6rem;\n  margin-bottom: 16px; }\n\n.statement {\n  font-size: 1.5rem;\n  line-height: 120%;\n  font-weight: bold;\n  text-align: center; }\n\n.button {\n  background: #26547C;\n  color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  padding: 8px;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.button:hover {\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGVtZW50LXBhbmVsL0M6XFxEZXZlbG9wbWVudFxcSU5OT1ZBVElPTlxcbmd4LXBhbmVscy9zcmNcXGFwcFxcc3RhdGVtZW50LXBhbmVsXFxzdGF0ZW1lbnQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0YXRlbWVudC1wYW5lbC9DOlxcRGV2ZWxvcG1lbnRcXElOTk9WQVRJT05cXG5neC1wYW5lbHMvc3JjXFxzdHlsZXNcXF91dGlscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsb0JDaEJZLEVEaUJmOztBQUVEO0VBQ0ksb0JDcEJZLEVEcUJmOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDckI7O0FBRUQ7RUNsQ0ksb0JBUFU7RUFRVixlQU5XO0VBT1gsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLDBCQUF5QixFRDhCNUI7O0FBRkQ7SUMxQlEsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zdGF0ZW1lbnQtcGFuZWwvc3RhdGVtZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3V0aWxzJztcclxuXHJcbi5tYWluIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgYmFja2dyb3VuZDogJHllbGxvdztcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeWVsbG93O1xyXG59XHJcblxyXG4uZm9vdGVyLWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5zdGF0ZW1lbnQge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJ1dHRvbigpO1xyXG59IiwiJGJsdWU6ICMyNjU0N0M7XHJcbiR5ZWxsb3c6ICNFMEZGNEY7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4kZ3JleTogI2NjY2NjYztcclxuXHJcbkBtaXhpbiBidXR0b24oKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/statement-panel/statement-panel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/statement-panel/statement-panel.component.ts ***!
  \**************************************************************/
/*! exports provided: StatementPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementPanelComponent", function() { return StatementPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ngx_panels_src_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ngx-panels/src/lib */ "./projects/ngx-panels/src/lib/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatementPanelComponent = /** @class */ (function () {
    function StatementPanelComponent(panelRef) {
        this.panelRef = panelRef;
    }
    StatementPanelComponent.prototype.ngOnInit = function () {
        this.name = this.panelRef.data;
        this.statement = "Hi! I'm " + this.panelRef.data + ". How can I help you?";
    };
    StatementPanelComponent.prototype.onClick = function () {
        this.panelRef.close();
    };
    StatementPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'statement-panel',
            template: __webpack_require__(/*! ./statement-panel.component.html */ "./src/app/statement-panel/statement-panel.component.html"),
            styles: [__webpack_require__(/*! ./statement-panel.component.scss */ "./src/app/statement-panel/statement-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [projects_ngx_panels_src_lib__WEBPACK_IMPORTED_MODULE_1__["PanelRef"]])
    ], StatementPanelComponent);
    return StatementPanelComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\INNOVATION\ngx-panels\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map