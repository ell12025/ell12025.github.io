(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documents/documents.component */ "./src/app/documents/documents.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _documents_document_edit_document_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documents/document-edit/document-edit.component */ "./src/app/documents/document-edit/document-edit.component.ts");
/* harmony import */ var _documents_document_detail_document_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documents/document-detail/document-detail.component */ "./src/app/documents/document-detail/document-detail.component.ts");
/* harmony import */ var _contacts_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacts/contact-edit/contact-edit.component */ "./src/app/contacts/contact-edit/contact-edit.component.ts");
/* harmony import */ var _contacts_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contact-detail/contact-detail.component */ "./src/app/contacts/contact-detail/contact-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', redirectTo: '/documents', pathMatch: 'full' },
    { path: 'documents', component: _documents_documents_component__WEBPACK_IMPORTED_MODULE_2__["DocumentsComponent"], children: [
            { path: 'new', component: _documents_document_edit_document_edit_component__WEBPACK_IMPORTED_MODULE_5__["DocumentEditComponent"] },
            { path: ':id', component: _documents_document_detail_document_detail_component__WEBPACK_IMPORTED_MODULE_6__["DocumentDetailComponent"] },
            { path: ':id/edit', component: _documents_document_edit_document_edit_component__WEBPACK_IMPORTED_MODULE_5__["DocumentEditComponent"] }
        ] },
    { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"] },
    { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"], children: [
            { path: 'new', component: _contacts_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_7__["ContactEditComponent"] },
            { path: ':id', component: _contacts_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailComponent"] },
            { path: ':id/edit', component: _contacts_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_7__["ContactEditComponent"] }
        ] },
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n  <div class=\"container pull-left\">\n    <router-outlet></router-outlet>\n  </div>\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _contacts_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts/contact-detail/contact-detail.component */ "./src/app/contacts/contact-detail/contact-detail.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _contacts_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contact-item/contact-item.component */ "./src/app/contacts/contact-item/contact-item.component.ts");
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./documents/documents.component */ "./src/app/documents/documents.component.ts");
/* harmony import */ var _documents_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./documents/document-list/document-list.component */ "./src/app/documents/document-list/document-list.component.ts");
/* harmony import */ var _documents_document_item_document_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./documents/document-item/document-item.component */ "./src/app/documents/document-item/document-item.component.ts");
/* harmony import */ var _documents_document_detail_document_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./documents/document-detail/document-detail.component */ "./src/app/documents/document-detail/document-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _messages_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages/message-item/message-item.component */ "./src/app/messages/message-item/message-item.component.ts");
/* harmony import */ var _messages_message_edit_message_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messages/message-edit/message-edit.component */ "./src/app/messages/message-edit/message-edit.component.ts");
/* harmony import */ var _messages_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./messages/message-list/message-list.component */ "./src/app/messages/message-list/message-list.component.ts");
/* harmony import */ var _dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dropdown/dropdown.directive */ "./src/app/dropdown/dropdown.directive.ts");
/* harmony import */ var _contacts_contact_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contacts/contact.service */ "./src/app/contacts/contact.service.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _documents_document_view_document_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./documents/document-view/document-view.component */ "./src/app/documents/document-view/document-view.component.ts");
/* harmony import */ var _documents_document_edit_document_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./documents/document-edit/document-edit.component */ "./src/app/documents/document-edit/document-edit.component.ts");
/* harmony import */ var _wind_ref_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./wind-ref.service */ "./src/app/wind-ref.service.ts");
/* harmony import */ var _contacts_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contacts/contact-edit/contact-edit.component */ "./src/app/contacts/contact-edit/contact-edit.component.ts");
/* harmony import */ var ng2_dnd__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-dnd */ "./node_modules/ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var _contacts_contacts_filter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./contacts/contacts-filter.pipe */ "./src/app/contacts/contacts-filter.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"],
                _contacts_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailComponent"],
                _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_6__["ContactListComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _contacts_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_8__["ContactItemComponent"],
                _documents_documents_component__WEBPACK_IMPORTED_MODULE_9__["DocumentsComponent"],
                _documents_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_10__["DocumentListComponent"],
                _documents_document_item_document_item_component__WEBPACK_IMPORTED_MODULE_11__["DocumentItemComponent"],
                _documents_document_detail_document_detail_component__WEBPACK_IMPORTED_MODULE_12__["DocumentDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__["MessagesComponent"],
                _messages_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_14__["MessageItemComponent"],
                _messages_message_edit_message_edit_component__WEBPACK_IMPORTED_MODULE_15__["MessageEditComponent"],
                _messages_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_16__["MessageListComponent"],
                _dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["DropdownDirective"],
                _documents_document_view_document_view_component__WEBPACK_IMPORTED_MODULE_20__["DocumentViewComponent"],
                _documents_document_edit_document_edit_component__WEBPACK_IMPORTED_MODULE_21__["DocumentEditComponent"],
                _contacts_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_23__["ContactEditComponent"],
                _contacts_contacts_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["ContactsFilterPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_19__["AppRouting"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                ng2_dnd__WEBPACK_IMPORTED_MODULE_24__["DndModule"].forRoot(),
            ],
            providers: [_contacts_contact_service__WEBPACK_IMPORTED_MODULE_18__["ContactService"], _wind_ref_service__WEBPACK_IMPORTED_MODULE_22__["WindRefService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contact-detail/contact-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/contacts/contact-detail/contact-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contact-detail/contact-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/contacts/contact-detail/contact-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"panel-title pull-left\" style=\"padding-top:8px;\">{{ contact.name }}</h1>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <img src=\"{{ contact.imageUrl }}\" alt=\"\"\r\n                 class=\"img-responsive pull-left\" style=\"max-height: 80px;\">\r\n            <div class=\"pull-right\">\r\n              <button class=\"btn btn-primary pad-left-right\" (click)=\"onEditContact()\">Edit</button>\r\n              <button class=\"btn btn-danger pad-left-right\" type=\"button\" (click)=\"onDelete()\">Delete</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <p><b>Email:  </b>{{ contact.email }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <p><b>Phone:  </b>{{ contact.phone }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"groupList\">Group contacts</label>\r\n\r\n          <div class=\"row\" id=\"groupList\" style=\"min-height: 3rem;\">\r\n\r\n            <div *ngFor=\"let contactEl of contact.group; let i = index\">\r\n              <div>\r\n                <app-contact-item class=\"col-sm-11\" [contact]=\"contactEl\"></app-contact-item>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/contacts/contact-detail/contact-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/contacts/contact-detail/contact-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contacts/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent(contactService, route, router) {
        this.contactService = contactService;
        this.route = route;
        this.router = router;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.contact = _this.contactService.getContact(_this.id);
        });
    };
    ContactDetailComponent.prototype.onEditContact = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    ContactDetailComponent.prototype.onDelete = function () {
        this.contactService.deleteContact(this.contact);
        this.router.navigate(['/contacts']);
    };
    ContactDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-detail',
            template: __webpack_require__(/*! ./contact-detail.component.html */ "./src/app/contacts/contact-detail/contact-detail.component.html"),
            styles: [__webpack_require__(/*! ./contact-detail.component.css */ "./src/app/contacts/contact-detail/contact-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-edit/contact-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/contact-edit/contact-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.required.ng-invalid {\r\n  border: 1px solid red;\r\n}\r\n\r\n.invalid.ng-invalid.ng-dirty {\r\n  border: 1px solid red;\r\n}\r\n\r\n.pad-left-right{\r\n  padding-left:.1rem;\r\n}\r\n\r\n.deleteButton {\r\n  margin-top: 1.5rem;\r\n  margin-left: -1.2rem;\r\n  width: 3.4rem;\r\n}\r\n\r\n.buttonDiv {\r\n  margin-top: 1.5rem;\r\n}\r\n\r\n.groupDiv {\r\n  min-height: 6rem;\r\n  border: solid thin lightgrey;\r\n}\r\n\r\n.dragMsg {\r\n  font-size: 2rem;\r\n  color: darkgrey;\r\n  margin-left: 3rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contacts/contact-edit/contact-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/contacts/contact-edit/contact-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n\r\n    <form id=\"contact-edit\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-sm-12 form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"name\"\r\n            class=\"form-control required\"\r\n            size=\"120\"\r\n            max=\"120\"\r\n            [ngModel]=\"contact?.name\"\r\n            name=\"name\"\r\n            required\r\n            #name=\"ngModel\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"email\"\r\n            class=\"form-control required\"\r\n            size=\"120\"\r\n            max=\"255\"\r\n            [ngModel]=\"contact?.email\"\r\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\r\n            name=\"email\"\r\n            required\r\n            #email=\"ngModel\">\r\n          <div class=\"alert alert-danger\" *ngIf=\"!email.valid && email.dirty\">Please enter a valid Email address</div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 form-group\">\r\n          <label for=\"phone\">Phone</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"phone\"\r\n            class=\"form-control invalid\"\r\n            size=\"150\"\r\n            max=\"255\"\r\n            [ngModel]=\"contact?.phone\"\r\n            pattern=\"\\D*([2-9]\\d{2})(\\D*)([2-9]\\d{2})(\\D*)(\\d{4})\\D*\"\r\n            name=\"phone\"\r\n            #phone=\"ngModel\">\r\n          <div class=\"alert alert-danger\" *ngIf=\"!phone.valid && phone.dirty\">Please enter  a valid Phone Number</div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 form-group\">\r\n          <label for=\"imageUrl\">Image URL</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"imageUrl\"\r\n            class=\"form-control\"\r\n            size=\"150\"\r\n            max=\"255\"\r\n            [ngModel]=\"contact?.imageUrl\"\r\n            name=\"imageUrl\">\r\n          <br><div class=\"alert alert-danger\" *ngIf=\"!name.valid && name.touched || !email.valid && email.touched\">The Name and Email are required fields</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"groupList\">Group contacts</label>\r\n\r\n        <div class=\"row\" id=\"groupList\" style=\"min-height: 3rem;\"\r\n             dnd-droppable dropzones=\"contactGroup\" (onDropSuccess)=\"addToGroup($event)\">\r\n\r\n          <div *ngFor=\"let contact of groupContacts; let i = index\">\r\n            <div>\r\n              <app-contact-item class=\"col-sm-11\" [contact]=\"contact\"></app-contact-item>\r\n              <button class=\"btn btn-danger col-sm-2 deleteButton\" (click)=\"onRemoveItem(i)\">X</button>\r\n            </div>\r\n          </div>\r\n          <span class=\"dragMsg\" *ngIf=\"groupContacts?.length < 1\">Drag contacts in group here</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <button class=\"btn btn-success document-button-padding\" type=\"submit\" [disabled]=\"!f.valid\">Save</button>\r\n          <button class=\"btn btn-primary document-button-padding\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contacts/contact-edit/contact-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-edit/contact-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contacts/contact.service.ts");
/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact.model */ "./src/app/contacts/contact.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactEditComponent = /** @class */ (function () {
    function ContactEditComponent(route, router, contactService) {
        this.route = route;
        this.router = router;
        this.contactService = contactService;
        this.contact = null;
        this.groupContacts = [];
        this.editMode = false;
        this.hasGroup = false;
    }
    // From Submit button to submit contacts form
    ContactEditComponent.prototype.onSubmit = function (form) {
        this.newContact = new _contact_model__WEBPACK_IMPORTED_MODULE_3__["Contact"]('', this.contactsForm.value.name, this.contactsForm.value.email, this.contactsForm.value.phone, this.contactsForm.value.imageUrl, this.groupContacts.slice());
        console.log(this.newContact);
        if (this.editMode == true) {
            this.contactService.updateContact(this.originalContact, this.newContact);
        }
        else {
            this.contactService.addContact(this.newContact);
        }
        this.router.navigate(['contacts']);
    };
    // Cancel form button clicked send view back to contacts page
    ContactEditComponent.prototype.onCancel = function () {
        this.router.navigate(['contacts']);
    };
    // This function determines if the newContact to be added
    // to the group is already in the current contact's group array.
    ContactEditComponent.prototype.isInvalidContact = function (newContact) {
        if (!newContact) {
            console.log(newContact, "!this.newcontact returing true");
            return true;
        }
        if (this.editMode && newContact.id === this.contact.id) {
            console.log("!this.newcontact.id returing true");
            return true;
        }
        for (var i = 0; i < this.groupContacts.length; i++) {
            if (newContact.id === this.groupContacts[i].id) {
                return true;
            }
        }
        return false;
    };
    ContactEditComponent.prototype.addToGroup = function ($event) {
        var selectedContact = $event.dragData;
        console.log(selectedContact, "addToGroupFunction WORKS!");
        this.invalidGroupContact = this.isInvalidContact(selectedContact);
        console.log(this.invalidGroupContact, "INVALIDGROUP");
        if (this.invalidGroupContact) {
            return;
        }
        this.groupContacts.push(selectedContact);
        console.log(this.groupContacts, "HERE IS THE GROUP LIST");
        this.invalidGroupContact = false;
    };
    ContactEditComponent.prototype.onRemoveItem = function (idx) {
        // If contact is outside the bounds of the array
        if (idx < 0 || idx >= this.groupContacts.length) {
            return;
        }
        this.groupContacts.splice(idx, 1);
        this.invalidGroupContact = false;
    };
    ContactEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id === undefined || _this.id === null) {
                _this.editMode = false;
                return;
            }
            _this.originalContact = _this.contactService.getContact(_this.id);
            console.log(_this.originalContact, "ORIGINAL");
            if (_this.originalContact === undefined || _this.originalContact === null) {
                return;
            }
            _this.editMode = true;
            _this.contact = JSON.parse(JSON.stringify(_this.originalContact));
            if (_this.contact.group && _this.contact.group.length > 0) {
                _this.groupContacts = JSON.parse(JSON.stringify(_this.contact.group));
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ContactEditComponent.prototype, "contactsForm", void 0);
    ContactEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-edit',
            template: __webpack_require__(/*! ./contact-edit.component.html */ "./src/app/contacts/contact-edit/contact-edit.component.html"),
            styles: [__webpack_require__(/*! ./contact-edit.component.css */ "./src/app/contacts/contact-edit/contact-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], ContactEditComponent);
    return ContactEditComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-item/contact-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/contact-item/contact-item.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contact-item/contact-item.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/contacts/contact-item/contact-item.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"[contact.id]\" routerLinkActive=\"active\" class=\"list-group-item clearfix\">\r\n  <div class=\"pull-left\">\r\n    <h4 class=\"list-group-item-heading\">{{contact.name}}</h4>\r\n  </div>\r\n  <span class=\"pull-right\">\r\n        <img *ngIf=\"contact.imageUrl && contact.imageUrl.trim().length > 1\" [src]=\"contact.imageUrl\" alt=\"{{contact.name}}\" class=\"img-responsive\" style=\"max-height: 80px;\">\r\n      </span>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/contacts/contact-item/contact-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-item/contact-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactItemComponent", function() { return ContactItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact.model */ "./src/app/contacts/contact.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactItemComponent = /** @class */ (function () {
    function ContactItemComponent() {
    }
    ContactItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _contact_model__WEBPACK_IMPORTED_MODULE_1__["Contact"])
    ], ContactItemComponent.prototype, "contact", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContactItemComponent.prototype, "id", void 0);
    ContactItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-item',
            template: __webpack_require__(/*! ./contact-item.component.html */ "./src/app/contacts/contact-item/contact-item.component.html"),
            styles: [__webpack_require__(/*! ./contact-item.component.css */ "./src/app/contacts/contact-item/contact-item.component.css")]
        })
    ], ContactItemComponent);
    return ContactItemComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"row\">\r\n          <span class=\"panel-title pull-left\" style=\"padding-top:8px;\">Contacts</span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"input-group pull-left pad-left-right col-xs-7\">\r\n\r\n            <!-- Add the search box input field here -->\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter search value\"\r\n                   #searchBox (keyup)=\"onKeyPress(searchBox.value)\">\r\n\r\n\r\n          </div>\r\n          <div class=\"pull-right pad-left-right\">\r\n            <a class=\"btn btn-success\" [routerLink]=\"['new']\" >New Contact</a >\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <app-contact-item\r\n              *ngFor=\"let contact of contacts| contactsFilter:[term]\" [contact]=\"contact\" [id]=\"i\" dnd-draggable\r\n              [dragEnabled]=\"true\" [dragData]=\"contact\" dropzones=\"contactGroup\">\r\n            </app-contact-item>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact.service */ "./src/app/contacts/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactService, router, route) {
        this.contactService = contactService;
        this.router = router;
        this.route = route;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts();
        this.subscription = this.contactService.contactListChangedEvent.subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    ContactListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ContactListComponent.prototype.onKeyPress = function (value) {
        this.term = value;
    };
    ContactListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.css */ "./src/app/contacts/contact-list/contact-list.component.css")]
        }),
        __metadata("design:paramtypes", [_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact.model.ts":
/*!*******************************************!*\
  !*** ./src/app/contacts/contact.model.ts ***!
  \*******************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact(id, name, email, phone, imageUrl, group) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.group = group;
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/contacts/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = /** @class */ (function () {
    // Class constructor
    function ContactService(http) {
        this.http = http;
        this.contactSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contactListChangedEvent = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.contacts = [];
        this.getContacts();
    }
    // Get all contacts
    ContactService.prototype.getContacts = function () {
        // if(this.contacts) {
        //   return this.contacts.slice();
        // }
        var _this = this;
        this.http.get('https://cit366-c75e2.firebaseio.com/contacts.json').subscribe(function (contacts) {
            _this.contacts = contacts;
            _this.maxContactId = _this.getMaxId();
            _this.contacts = _this.contacts.sort(_this.compare);
            _this.contactListChangedEvent.next(_this.contacts.slice());
            return _this.contacts.slice();
        }, function (error) {
            console.log("HTTP error: " + error.msgText);
        });
    };
    // Compare function that is called by the getContacts()
    ContactService.prototype.compare = function (contactA, contactB) {
        var conA = contactA.name.toUpperCase();
        var conB = contactB.name.toUpperCase();
        if (conA < conB) {
            return -1;
        }
        if (conA > conB) {
            return 1;
        }
        return 0;
    };
    // Store added contacts in database
    ContactService.prototype.storeContacts = function () {
        var _this = this;
        var strContacts = JSON.stringify(this.contacts);
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://cit366-c75e2.firebaseio.com/contacts.json', strContacts, { headers: header }).subscribe(function () { return _this.contactListChangedEvent.next(_this.contacts.slice()); });
    };
    // Get a single contact based on ID
    ContactService.prototype.getContact = function (id) {
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id == id) {
                return this.contacts[i];
            }
        }
        return null;
    };
    // Get contact max ID
    ContactService.prototype.getMaxId = function () {
        var maxId = 0;
        for (var i = 0; i < this.contacts.length; i++) {
            var currentId = parseInt(this.contacts[i].id);
            if (currentId > maxId) {
                maxId = currentId;
            }
        }
        return maxId;
    };
    // Add a new contact
    ContactService.prototype.addContact = function (newContact) {
        if (newContact === null || newContact === undefined) {
            return;
        }
        this.maxContactId++;
        newContact.id = String(this.maxContactId);
        this.contacts.push(newContact);
        this.contactsListClone = this.contacts.slice();
        // this.contactListChangedEvent.next(this.contactsListClone);
        this.storeContacts();
    };
    // Update a contact
    ContactService.prototype.updateContact = function (originalContact, newContact) {
        if (originalContact === null || originalContact === undefined
            || newContact === null || newContact === undefined) {
            return;
        }
        var pos = this.contacts.indexOf(originalContact);
        if (pos < 0) {
            return;
        }
        newContact.id = originalContact.id;
        this.contacts[pos] = newContact;
        this.contactsListClone = this.contacts.slice();
        // this.contactListChangedEvent.next(this.contactsListClone);
        this.storeContacts();
    };
    // Delete a contact when 'delete' is clicked
    ContactService.prototype.deleteContact = function (contact) {
        if (contact === null) {
            return;
        }
        var pos = this.contacts.indexOf(contact);
        if (pos < 0) {
            return;
        }
        this.contacts.splice(pos, 1);
        this.contactsListClone = this.contacts.slice();
        // this.contactListChangedEvent.next(this.contactsListClone);
        this.storeContacts();
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/contacts/contacts-filter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts-filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: ContactsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsFilterPipe", function() { return ContactsFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactsFilterPipe = /** @class */ (function () {
    function ContactsFilterPipe() {
    }
    ContactsFilterPipe.prototype.transform = function (contacts, _a, propName) {
        var term = _a[0];
        var filteredArray = [];
        // Longer implementation of the transform function
        for (var i = 0; i < contacts.length; i++) {
            var contact = contacts[i];
            if (contact.name.toLocaleLowerCase().includes(term)) {
                filteredArray.push(contact);
            }
        }
        if (filteredArray.length < 1) {
            return contacts.slice();
        }
        return filteredArray;
    };
    ContactsFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'contactsFilter'
        })
    ], ContactsFilterPipe);
    return ContactsFilterPipe;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-contact-list></app-contact-list>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n   <router-outlet></router-outlet>\r\n    <ng-template>\r\n      <p>Please select a Contact!</p>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.service */ "./src/app/contacts/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(contactService) {
        this.contactService = contactService;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.contactSelectedEvent.subscribe(function (contacts) {
            _this.selectedContact = contacts;
        });
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")],
            providers: [_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]]
        }),
        __metadata("design:paramtypes", [_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/documents/document-detail/document-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/documents/document-detail/document-detail.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n  font-weight: bold;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.margin-left-right{\r\n  margin-left:1rem;\r\n  margin-right:1rem;\r\n}\r\n\r\n.pad-left-right{\r\n  margin-left:1rem;\r\n  margin-right:1rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/documents/document-detail/document-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/documents/document-detail/document-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" xmlns=\"http://www.w3.org/1999/html\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row pad-all\">\r\n      <h4 class=\"title margin-left-right\">{{document.name}}{{document.description}}</h4>\r\n      <div class=\"row pull-right margin-left-right\" >\r\n        <a class=\"btn btn-primary document-button-padding\" (click)=\"onView()\">View</a>\r\n        <a class=\"btn btn-info document-button-padding\" (click)=\"onEditDocument()\">Edit</a>\r\n        <a class=\"btn btn-danger document-button-padding\" (click)=\"onDelete()\">Delete</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"pad-left-right\">\r\n      <div class=\"row\">\r\n        <label>Description:</label>\r\n        <br>\r\n        <span class=\"label-value\">{{document.description}}</span>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <label>URL:</label>\r\n        <br>\r\n        <span class=\"label-value\">{{document.url}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/documents/document-detail/document-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/documents/document-detail/document-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: DocumentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDetailComponent", function() { return DocumentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../document.service */ "./src/app/documents/document.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wind_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../wind-ref.service */ "./src/app/wind-ref.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentDetailComponent = /** @class */ (function () {
    function DocumentDetailComponent(documentService, route, router, windRefService) {
        this.documentService = documentService;
        this.route = route;
        this.router = router;
        this.windRefService = windRefService;
        this.nativeWindow = windRefService.getNativeWindow();
    }
    DocumentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.document = _this.documentService.getDocument(_this.id);
        });
    };
    DocumentDetailComponent.prototype.onEditDocument = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    DocumentDetailComponent.prototype.onView = function () {
        if (this.document.url) {
            this.nativeWindow.open(this.document.url);
        }
    };
    DocumentDetailComponent.prototype.onDelete = function () {
        this.documentService.deleteDocument(this.document);
        this.router.navigate(['/documents']);
    };
    DocumentDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document-detail',
            template: __webpack_require__(/*! ./document-detail.component.html */ "./src/app/documents/document-detail/document-detail.component.html"),
            styles: [__webpack_require__(/*! ./document-detail.component.css */ "./src/app/documents/document-detail/document-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _wind_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindRefService"]])
    ], DocumentDetailComponent);
    return DocumentDetailComponent;
}());



/***/ }),

/***/ "./src/app/documents/document-edit/document-edit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/documents/document-edit/document-edit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid {\r\n  border: 1px solid red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/documents/document-edit/document-edit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/documents/document-edit/document-edit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n\r\n    <form id=\"document-edit\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-sm-12 form-group\">\r\n          <label for=\"name\">Document title</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"name\"\r\n            class=\"form-control\"\r\n            size=\"120\"\r\n            max=\"120\"\r\n            ngModel\r\n            name=\"name\"\r\n            required\r\n            #name=\"ngModel\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 form-group\">\r\n          <label for=\"description\">Document description</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"description\"\r\n            class=\"form-control\"\r\n            size=\"120\"\r\n            max=\"255\"\r\n            ngModel\r\n            name=\"description\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 form-group\">\r\n          <label for=\"url\">Document URL</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"url\"\r\n            class=\"form-control\"\r\n            size=\"150\"\r\n            max=\"255\"\r\n            ngModel\r\n            name=\"url\"\r\n            required\r\n            url\r\n            #url=\"ngModel\">\r\n          <br><div class=\"alert alert-danger\" *ngIf=\"!name.valid || !url.valid\">The Document title and URL are required fields</div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <button class=\"btn btn-success document-button-padding\" type=\"submit\"\r\n                  [disabled]=\"!f.valid\">Save</button>\r\n          <button class=\"btn btn-primary document-button-padding\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/documents/document-edit/document-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/documents/document-edit/document-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: DocumentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentEditComponent", function() { return DocumentEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../document.service */ "./src/app/documents/document.service.ts");
/* harmony import */ var _document_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../document.model */ "./src/app/documents/document.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentEditComponent = /** @class */ (function () {
    function DocumentEditComponent(route, router, documentService) {
        this.route = route;
        this.router = router;
        this.documentService = documentService;
        this.editMode = false;
    }
    // Form Submit button to submit form
    DocumentEditComponent.prototype.onSubmit = function (form) {
        console.log(this.documentsForm.value);
        // THIS IS ANOTHER, LONGER, WAY OF GETTING AND STORING VALUES
        // const name = this.documentsForm.value.name;
        // const description = this.documentsForm.value.description;
        // const url = this.documentsForm.value.url;
        // this.newDocument = new Document('', name, description, url, []);
        this.newDocument = new _document_model__WEBPACK_IMPORTED_MODULE_3__["Document"]('', this.documentsForm.value.name, this.documentsForm.value.description, this.documentsForm.value.url, []);
        console.log(this.newDocument);
        if (this.editMode == true) {
            this.documentService.updateDocument(this.originalDocument, this.newDocument);
        }
        else {
            this.documentService.addDocument(this.newDocument);
        }
        this.router.navigate(['documents']);
    };
    // Cancel form button clicked send view back to documents page
    DocumentEditComponent.prototype.onCancel = function () {
        this.router.navigate(['documents']);
    };
    DocumentEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id === undefined || _this.id === null) {
                _this.editMode = false;
                return;
            }
            _this.originalDocument = _this.documentService.getDocument(_this.id);
            if (_this.originalDocument === undefined || _this.originalDocument === null) {
                return;
            }
            _this.editMode = true;
            _this.document = JSON.parse(JSON.stringify(_this.originalDocument));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], DocumentEditComponent.prototype, "documentsForm", void 0);
    DocumentEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document-edit',
            template: __webpack_require__(/*! ./document-edit.component.html */ "./src/app/documents/document-edit/document-edit.component.html"),
            styles: [__webpack_require__(/*! ./document-edit.component.css */ "./src/app/documents/document-edit/document-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]])
    ], DocumentEditComponent);
    return DocumentEditComponent;
}());



/***/ }),

/***/ "./src/app/documents/document-item/document-item.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/documents/document-item/document-item.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".documentDiv {\r\n  width: 9rem;\r\n  height: 11rem;\r\n  margin: 2px;\r\n  font-size: 1.3rem;\r\n  border: solid thin darkgrey;\r\n  float: left;\r\n  padding: .25rem\r\n}\r\n"

/***/ }),

/***/ "./src/app/documents/document-item/document-item.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/documents/document-item/document-item.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"[document.id]\" routerLinkActive=\"active\" class=\"list-group-item clearfix documentDiv\">\r\n  {{document.name}}{{document.description}}\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/documents/document-item/document-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/documents/document-item/document-item.component.ts ***!
  \********************************************************************/
/*! exports provided: DocumentItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentItemComponent", function() { return DocumentItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _document_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../document.model */ "./src/app/documents/document.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentItemComponent = /** @class */ (function () {
    function DocumentItemComponent() {
    }
    DocumentItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _document_model__WEBPACK_IMPORTED_MODULE_1__["Document"])
    ], DocumentItemComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DocumentItemComponent.prototype, "id", void 0);
    DocumentItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document-item',
            template: __webpack_require__(/*! ./document-item.component.html */ "./src/app/documents/document-item/document-item.component.html"),
            styles: [__webpack_require__(/*! ./document-item.component.css */ "./src/app/documents/document-item/document-item.component.css")]
        })
    ], DocumentItemComponent);
    return DocumentItemComponent;
}());



/***/ }),

/***/ "./src/app/documents/document-list/document-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/documents/document-list/document-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-panel {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 38rem;\r\n}\r\n\r\n.title {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.pad-left-right{\r\n  padding-left:1rem;\r\n  padding-right:1rem;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/documents/document-list/document-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/documents/document-list/document-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row pad-left-right\">\r\n      <span class=\"pull-left title\">Documents</span>\r\n      <a routerLink=\"new\" class=\"btn btn-success pull-right\" (click)=\"onNewDocument()\">Add Document</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"center-panel\">\r\n      <app-document-item *ngFor=\"let documentEl of documents; let i = id\"\r\n        [document]=\"documentEl\"\r\n        [id]=\"i\">\r\n      </app-document-item>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/documents/document-list/document-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/documents/document-list/document-list.component.ts ***!
  \********************************************************************/
/*! exports provided: DocumentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function() { return DocumentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../document.service */ "./src/app/documents/document.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(documentService, router, route) {
        this.documentService = documentService;
        this.router = router;
        this.route = route;
        this.documents = [];
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentService.getDocuments();
        this.subscription = this.documentService.documentListChangedEvent.subscribe(function (documents) {
            _this.documents = documents;
        });
    };
    DocumentListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DocumentListComponent.prototype.onNewDocument = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    DocumentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document-list',
            template: __webpack_require__(/*! ./document-list.component.html */ "./src/app/documents/document-list/document-list.component.html"),
            styles: [__webpack_require__(/*! ./document-list.component.css */ "./src/app/documents/document-list/document-list.component.css")]
        }),
        __metadata("design:paramtypes", [_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DocumentListComponent);
    return DocumentListComponent;
}());



/***/ }),

/***/ "./src/app/documents/document-view/document-view.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/documents/document-view/document-view.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documents/document-view/document-view.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/documents/document-view/document-view.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documents/document-view/document-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/documents/document-view/document-view.component.ts ***!
  \********************************************************************/
/*! exports provided: DocumentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentViewComponent", function() { return DocumentViewComponent; });
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

var DocumentViewComponent = /** @class */ (function () {
    function DocumentViewComponent() {
    }
    DocumentViewComponent.prototype.ngOnInit = function () {
    };
    DocumentViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document-view',
            template: __webpack_require__(/*! ./document-view.component.html */ "./src/app/documents/document-view/document-view.component.html"),
            styles: [__webpack_require__(/*! ./document-view.component.css */ "./src/app/documents/document-view/document-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentViewComponent);
    return DocumentViewComponent;
}());



/***/ }),

/***/ "./src/app/documents/document.model.ts":
/*!*********************************************!*\
  !*** ./src/app/documents/document.model.ts ***!
  \*********************************************/
/*! exports provided: Document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
var Document = /** @class */ (function () {
    function Document(id, name, description, url, children) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.children = children;
    }
    return Document;
}());



/***/ }),

/***/ "./src/app/documents/document.service.ts":
/*!***********************************************!*\
  !*** ./src/app/documents/document.service.ts ***!
  \***********************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentService = /** @class */ (function () {
    // Class constructor
    function DocumentService(http) {
        this.http = http;
        this.documentSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.documentListChangedEvent = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.documents = [];
        this.maxDocumentId = this.getMaxId();
    }
    // Get documents
    DocumentService.prototype.getDocuments = function () {
        var _this = this;
        // if(this.documents) {
        //   return this.documents.slice();
        // }
        this.http.get('https://cit366-c75e2.firebaseio.com/documents.json').subscribe(function (documents) {
            _this.documents = documents;
            _this.maxDocumentId = _this.getMaxId();
            _this.documents = _this.documents.sort(_this.compare);
            _this.documentListChangedEvent.next(_this.documents.slice());
        }, function (error) {
            console.log("HTTP error: " + error.msgText);
        });
    };
    // compare function that gets called in getDocuments()
    DocumentService.prototype.compare = function (documentA, documentB) {
        var docA = documentA.name.toUpperCase();
        var docB = documentB.name.toUpperCase();
        if (docA < docB) {
            return -1;
        }
        if (docA > docB) {
            return 1;
        }
        return 0;
    };
    // Store the new documents that get added to the database
    DocumentService.prototype.storeDocuments = function () {
        var _this = this;
        var strDocuments = JSON.stringify(this.documents);
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://cit366-c75e2.firebaseio.com/documents.json', strDocuments, { headers: header }).subscribe(function () { return _this.documentListChangedEvent.next(_this.documents.slice()); });
    };
    // Get a single document based on ID
    DocumentService.prototype.getDocument = function (id) {
        for (var i = 0; i < this.documents.length; i++) {
            if (this.documents[i].id == id) {
                return this.documents[i];
            }
        }
        return null;
    };
    // Get max ID
    DocumentService.prototype.getMaxId = function () {
        var maxId = 0;
        for (var i = 0; i < this.documents.length; i++) {
            var currentId = parseInt(this.documents[i].id);
            if (currentId > maxId) {
                maxId = currentId;
            }
        }
        return maxId;
    };
    // Add a document
    DocumentService.prototype.addDocument = function (newDocument) {
        if (newDocument === undefined || newDocument === null) {
            return;
        }
        this.maxDocumentId++;
        newDocument.id = String(this.maxDocumentId);
        this.documents.push(newDocument);
        this.documentsListClone = this.documents.slice();
        // this.documentListChangedEvent.next(this.documentsListClone);
        this.storeDocuments();
    };
    // Update a document
    DocumentService.prototype.updateDocument = function (originalDocument, newDocument) {
        if (originalDocument === null || originalDocument === undefined
            || newDocument === null || newDocument === undefined) {
            return;
        }
        var pos = this.documents.indexOf(originalDocument);
        if (pos < 0) {
            return;
        }
        newDocument.id = originalDocument.id;
        this.documents[pos] = newDocument;
        this.documentsListClone = this.documents.slice();
        // this.documentListChangedEvent.next(this.documentsListClone);
        this.storeDocuments();
    };
    // Delete a Document
    DocumentService.prototype.deleteDocument = function (document) {
        if (document === null || document === undefined) {
            return;
        }
        var pos = this.documents.indexOf(document);
        if (pos < 0) {
            return;
        }
        this.documents.splice(pos, 1);
        this.documentsListClone = this.documents.slice();
        //this.documentListChangedEvent.next(this.documents.slice());
        this.storeDocuments();
    };
    DocumentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/documents/documents.component.css":
/*!***************************************************!*\
  !*** ./src/app/documents/documents.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documents/documents.component.html":
/*!****************************************************!*\
  !*** ./src/app/documents/documents.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-document-list></app-document-list>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n   <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/documents/documents.component.ts":
/*!**************************************************!*\
  !*** ./src/app/documents/documents.component.ts ***!
  \**************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document.service */ "./src/app/documents/document.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent(documentService) {
        this.documentService = documentService;
    }
    DocumentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentService.documentSelectedEvent.subscribe(function (documents) {
            _this.selectedDocument = documents;
        });
    };
    DocumentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__(/*! ./documents.component.html */ "./src/app/documents/documents.component.html"),
            styles: [__webpack_require__(/*! ./documents.component.css */ "./src/app/documents/documents.component.css")],
            providers: [_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"]]
        }),
        __metadata("design:paramtypes", [_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"]])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "./src/app/dropdown/dropdown.directive.ts":
/*!************************************************!*\
  !*** ./src/app/dropdown/dropdown.directive.ts ***!
  \************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
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

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    DropdownDirective.prototype.toggleClose = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleClose", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a routerLink=\"/\" class=\"navbar-brand\">WeLearn CMS</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/documents\">Documents</a></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/messages\">Messages</a></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/contacts\">Contacts</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"dropdown\" appDropdown>\r\n          <a href=\"#\" class=\"dropdown-toggle\" role=\"button\">User <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\">Login</a></li>\r\n            <li><a href=\"#\">Other</a></li>\r\n            <li><a href=\"#\">Logout</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/messages/message-edit/message-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/messages/message-edit/message-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/message-edit/message-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/messages/message-edit/message-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n\r\n    <form id=\"document-edit\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-sm-12 form-group\">\r\n          <label for=\"subject\">Subject</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"subject\"\r\n            class=\"form-control\"\r\n            size=\"120\"\r\n            max=\"120\"\r\n            #subjectInput>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 form-group\">\r\n          <label for=\"message\">Message</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"message\"\r\n            class=\"form-control\"\r\n            size=\"120\"\r\n            max=\"255\"\r\n            #messageInput>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <button class=\"btn btn-success pad-left-right\" type=\"submit\" (click)=\"onSendMessage()\">Send</button>\r\n          <button class=\"btn btn-danger pad-left-right\" type=\"reset\" (click)=\"onClear()\">Clear</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messages/message-edit/message-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/messages/message-edit/message-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEditComponent", function() { return MessageEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.model */ "./src/app/messages/message.model.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/messages/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageEditComponent = /** @class */ (function () {
    function MessageEditComponent(messageService) {
        this.messageService = messageService;
        this.currentSender = "20";
    }
    MessageEditComponent.prototype.ngOnInit = function () {
    };
    MessageEditComponent.prototype.onSendMessage = function () {
        var subject = this.subjectInputRef.nativeElement.value;
        var message = this.messageInputRef.nativeElement.value;
        var newMessage = new _message_model__WEBPACK_IMPORTED_MODULE_1__["Message"]('', subject, message, this.currentSender);
        this.messageService.addMessage(newMessage);
    };
    MessageEditComponent.prototype.onClear = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('subjectInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessageEditComponent.prototype, "subjectInputRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('messageInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessageEditComponent.prototype, "messageInputRef", void 0);
    MessageEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-edit',
            template: __webpack_require__(/*! ./message-edit.component.html */ "./src/app/messages/message-edit/message-edit.component.html"),
            styles: [__webpack_require__(/*! ./message-edit.component.css */ "./src/app/messages/message-edit/message-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessageEditComponent);
    return MessageEditComponent;
}());



/***/ }),

/***/ "./src/app/messages/message-item/message-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/messages/message-item/message-item.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageHeader {\r\n  background-color: azure;\r\n  border: solid thin black;\r\n  border-radius: 10px;\r\n  padding: 0.4rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.messageText {\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  margin-top: .25rem;\r\n  margin-left: 1rem;\r\n  font-size: 1.5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/messages/message-item/message-item.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/messages/message-item/message-item.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"list-group-item clearfix\">\r\n  <div class=''>\r\n    <span class='messageHeader'>{{ messageSender }}</span>\r\n    <div class='messageText'>{{ message?.msgText }}</div>\r\n  </div>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/messages/message-item/message-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/messages/message-item/message-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItemComponent", function() { return MessageItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.model */ "./src/app/messages/message.model.ts");
/* harmony import */ var _contacts_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contacts/contact.service */ "./src/app/contacts/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageItemComponent = /** @class */ (function () {
    function MessageItemComponent(contactService) {
        this.contactService = contactService;
        this.messageSender = "";
        this.canEdit = false;
    }
    MessageItemComponent.prototype.ngOnInit = function () {
        var contact = this.contactService.getContact(this.message.sender);
        this.messageSender = contact.name;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _message_model__WEBPACK_IMPORTED_MODULE_1__["Message"])
    ], MessageItemComponent.prototype, "message", void 0);
    MessageItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-item',
            template: __webpack_require__(/*! ./message-item.component.html */ "./src/app/messages/message-item/message-item.component.html"),
            styles: [__webpack_require__(/*! ./message-item.component.css */ "./src/app/messages/message-item/message-item.component.css")],
        }),
        __metadata("design:paramtypes", [_contacts_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], MessageItemComponent);
    return MessageItemComponent;
}());



/***/ }),

/***/ "./src/app/messages/message-list/message-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/messages/message-list/message-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.pad-left-right {\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/messages/message-list/message-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/messages/message-list/message-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"row pad-left-right\">\r\n          <span class=\"title pull-left\">Messages</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <app-message-item *ngFor=\"let messageEl of messages\"\r\n              [message]=\"messageEl\"></app-message-item>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"panel-footer\">\r\n        <app-message-edit></app-message-edit>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messages/message-list/message-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/messages/message-list/message-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/messages/message.service.ts");
/* harmony import */ var _contacts_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contacts/contact.service */ "./src/app/contacts/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageListComponent = /** @class */ (function () {
    function MessageListComponent(messageService, contactService) {
        this.messageService = messageService;
        this.contactService = contactService;
        this.messages = [];
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages();
        this.contactService.getContacts();
        this.messageSubscription = this.messageService.messageChangeEvent.subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    MessageListComponent.prototype.ngOnDestroy = function () {
        this.messageSubscription.unsubscribe();
    };
    MessageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/messages/message-list/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message-list.component.css */ "./src/app/messages/message-list/message-list.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"], _contacts_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "./src/app/messages/message.model.ts":
/*!*******************************************!*\
  !*** ./src/app/messages/message.model.ts ***!
  \*******************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(id, subject, msgText, sender) {
        this.id = id;
        this.subject = subject;
        this.msgText = msgText;
        this.sender = sender;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/messages/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    // Class constructor
    function MessageService(http) {
        this.http = http;
        this.messageChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.messages = [];
        this.getMessages();
    }
    // Get messages
    MessageService.prototype.getMessages = function () {
        // return this.messages.slice();
        var _this = this;
        this.http.get('https://cit366-c75e2.firebaseio.com/messages.json').subscribe(function (messages) {
            _this.messages = messages;
            _this.maxMessageId = _this.getMaxId();
            _this.messageChangeEvent.emit(_this.messages.slice());
            console.log(_this.messages);
        }, function (error) {
            console.log("HTTP error: " + error.msgText);
        });
    };
    // Save messages
    MessageService.prototype.storeMessages = function () {
        var _this = this;
        var strMessages = JSON.stringify(this.messages);
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://cit366-c75e2.firebaseio.com/messages.json', strMessages, { headers: header }).subscribe(function () { return _this.messageChangeEvent.emit(_this.messages.slice()); });
    };
    // getMessage(id: string) {
    //   for(var i = 0; i < this.messages.length; i++)
    //   {
    //     if(this.messages[i].id == id)
    //     {
    //       return this.messages[i];
    //     }
    //   }
    //   return null;
    // }
    // Get max ID
    MessageService.prototype.getMaxId = function () {
        var maxId = 0;
        for (var i = 0; i < this.messages.length; i++) {
            var currentId = parseInt(this.messages[i].id);
            if (currentId > maxId) {
                maxId = currentId;
            }
        }
        return maxId;
    };
    // Add a message
    MessageService.prototype.addMessage = function (message) {
        this.maxMessageId++;
        message.id = String(this.maxMessageId);
        this.messages.push(message);
        // this.messageChangeEvent.emit(this.messages.slice());
        this.storeMessages();
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-message-list></app-message-list>\r\n\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ "./src/app/messages/message.service.ts");
/* harmony import */ var _contacts_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contacts/contact.service */ "./src/app/contacts/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(contactService, messageService) {
        this.contactService = contactService;
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")],
            providers: [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_contacts_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"], _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/wind-ref.service.ts":
/*!*************************************!*\
  !*** ./src/app/wind-ref.service.ts ***!
  \*************************************/
/*! exports provided: WindRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindRefService", function() { return WindRefService; });
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

var WindRefService = /** @class */ (function () {
    function WindRefService() {
    }
    WindRefService.prototype.getNativeWindow = function () {
        return window;
    };
    WindRefService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WindRefService);
    return WindRefService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lim\WebstormProjects\Marvel\CMS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map