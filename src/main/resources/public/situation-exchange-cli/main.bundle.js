webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/actions/lines-discovery-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AllAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AllSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AllFailureAction; });
var ActionTypes = {
    ALL: 'LINES_DISCOVERY_ALL',
    ALL_SUCCESS: 'LINES_DISCOVERY_ALL_SUCCESS',
    ALL_FAILURE: 'LINES_DISCOVERY_ALL_FAILURE',
};
var AllAction = (function () {
    function AllAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ALL;
    }
    return AllAction;
}());

var AllSuccessAction = (function () {
    function AllSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ALL_SUCCESS;
    }
    return AllSuccessAction;
}());

var AllFailureAction = (function () {
    function AllFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ALL_FAILURE;
    }
    return AllFailureAction;
}());



/***/ }),

/***/ "../../../../../src/app/actions/situation-exchange-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AllAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AllSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AllFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CreateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CreateSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CreateFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ReadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ReadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ReadFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return UpdateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return UpdateSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UpdateFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DeleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DeleteSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DeleteFailureAction; });
var ActionTypes = {
    ALL: 'SITUATION_EXCHANGE_ALL',
    ALL_SUCCESS: 'SITUATION_EXCHANGE_ALL_SUCCESS',
    ALL_FAILURE: 'SITUATION_EXCHANGE_ALL_FAILURE',
    CREATE: 'SITUATION_EXCHANGE_CREATE',
    CREATE_SUCCESS: 'SITUATION_EXCHANGE_CREATE_SUCCESS',
    CREATE_FAILURE: 'SITUATION_EXCHANGE_CREATE_FAILURE',
    READ: 'SITUATION_EXCHANGE_READ',
    READ_SUCCESS: 'SITUATION_EXCHANGE_READ_SUCCESS',
    READ_FAILURE: 'SITUATION_EXCHANGE_READ_FAILURE',
    UPDATE: 'SITUATION_EXCHANGE_UPDATE',
    UPDATE_SUCCESS: 'SITUATION_EXCHANGE_UPDATE_SUCCESS',
    UPDATE_FAILURE: 'SITUATION_EXCHANGE_UPDATE_FAILURE',
    DELETE: 'SITUATION_EXCHANGE_DELETE',
    DELETE_SUCCESS: 'SITUATION_EXCHANGE_DELETE_SUCCESS',
    DELETE_FAILURE: 'SITUATION_EXCHANGE_DELETE_FAILURE',
};
var AllAction = (function () {
    function AllAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ALL;
    }
    return AllAction;
}());

var AllSuccessAction = (function () {
    function AllSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ALL_SUCCESS;
    }
    return AllSuccessAction;
}());

var AllFailureAction = (function () {
    function AllFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ALL_FAILURE;
    }
    return AllFailureAction;
}());

var CreateAction = (function () {
    function CreateAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE;
    }
    return CreateAction;
}());

var CreateSuccessAction = (function () {
    function CreateSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_SUCCESS;
    }
    return CreateSuccessAction;
}());

var CreateFailureAction = (function () {
    function CreateFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_FAILURE;
    }
    return CreateFailureAction;
}());

var ReadAction = (function () {
    function ReadAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.READ;
    }
    return ReadAction;
}());

var ReadSuccessAction = (function () {
    function ReadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.READ_SUCCESS;
    }
    return ReadSuccessAction;
}());

var ReadFailureAction = (function () {
    function ReadFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.READ_FAILURE;
    }
    return ReadFailureAction;
}());

var UpdateAction = (function () {
    function UpdateAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE;
    }
    return UpdateAction;
}());

var UpdateSuccessAction = (function () {
    function UpdateSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_SUCCESS;
    }
    return UpdateSuccessAction;
}());

var UpdateFailureAction = (function () {
    function UpdateFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_FAILURE;
    }
    return UpdateFailureAction;
}());

var DeleteAction = (function () {
    function DeleteAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE;
    }
    return DeleteAction;
}());

var DeleteSuccessAction = (function () {
    function DeleteSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_SUCCESS;
    }
    return DeleteSuccessAction;
}());

var DeleteFailureAction = (function () {
    function DeleteFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_SUCCESS;
    }
    return DeleteFailureAction;
}());



/***/ }),

/***/ "../../../../../src/app/actions/stoppoints-discovery-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AllAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AllSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AllFailureAction; });
var ActionTypes = {
    ALL: 'STOPPOINTS_DISCOVERY_ALL',
    ALL_SUCCESS: 'STOPPOINTS_DISCOVERY_ALL_SUCCESS',
    ALL_FAILURE: 'STOPPOINTS_DISCOVERY_ALL_FAILURE',
};
var AllAction = (function () {
    function AllAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ALL;
    }
    return AllAction;
}());

var AllSuccessAction = (function () {
    function AllSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ALL_SUCCESS;
    }
    return AllSuccessAction;
}());

var AllFailureAction = (function () {
    function AllFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ALL_FAILURE;
    }
    return AllFailureAction;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_lines_discovery_lines_discovery_component__ = __webpack_require__("../../../../../src/app/components/lines-discovery/lines-discovery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_stoppoints_discovery_stoppoints_discovery_component__ = __webpack_require__("../../../../../src/app/components/stoppoints-discovery/stoppoints-discovery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_situation_exchange_situation_exchange_component__ = __webpack_require__("../../../../../src/app/components/situation-exchange/situation-exchange.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/lines-discovery', pathMatch: 'full' },
    { path: 'lines-discovery', component: __WEBPACK_IMPORTED_MODULE_2__components_lines_discovery_lines_discovery_component__["a" /* LinesDiscoveryComponent */] },
    { path: 'stoppoints-discovery', component: __WEBPACK_IMPORTED_MODULE_3__components_stoppoints_discovery_stoppoints_discovery_component__["a" /* StoppointsDiscoveryComponent */] },
    { path: 'situation-exchange', component: __WEBPACK_IMPORTED_MODULE_4__components_situation_exchange_situation_exchange_component__["a" /* SituationExchangeComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"/\" class=\"navbar-brand\">Situation Exchange</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li>\n        <a routerLink=\"/lines-discovery\">Lines Discovery</a>\n      </li>\n      <li>\n        <a routerLink=\"/stoppoints-discovery\">StopPoints Discovery</a>\n      </li>\n      <li>\n        <a routerLink=\"/situation-exchange\">Situation Exchange</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__effects_lines_discovery_effects__ = __webpack_require__("../../../../../src/app/effects/lines-discovery-effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__effects_stoppoints_discovery_effects__ = __webpack_require__("../../../../../src/app/effects/stoppoints-discovery-effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__effects_situation_exchange_effects__ = __webpack_require__("../../../../../src/app/effects/situation-exchange-effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_datatables_directive__ = __webpack_require__("../../../../../src/app/directives/datatables.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_datatables_service__ = __webpack_require__("../../../../../src/app/services/datatables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_situation_exchange_service__ = __webpack_require__("../../../../../src/app/services/situation-exchange.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_lines_discovery_lines_discovery_component__ = __webpack_require__("../../../../../src/app/components/lines-discovery/lines-discovery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_stoppoints_discovery_stoppoints_discovery_component__ = __webpack_require__("../../../../../src/app/components/stoppoints-discovery/stoppoints-discovery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_situation_exchange_situation_exchange_component__ = __webpack_require__("../../../../../src/app/components/situation-exchange/situation-exchange.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_situation_exchange_form_situation_exchange_form_component__ = __webpack_require__("../../../../../src/app/components/situation-exchange-form/situation-exchange-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_dialog_anchor_directive__ = __webpack_require__("../../../../../src/app/directives/dialog-anchor.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__directives_datatables_directive__["a" /* DataTablesDirective */],
                __WEBPACK_IMPORTED_MODULE_19__directives_dialog_anchor_directive__["a" /* DialogAnchorDirective */],
                __WEBPACK_IMPORTED_MODULE_15__components_lines_discovery_lines_discovery_component__["a" /* LinesDiscoveryComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_stoppoints_discovery_stoppoints_discovery_component__["a" /* StoppointsDiscoveryComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_situation_exchange_situation_exchange_component__["a" /* SituationExchangeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_situation_exchange_form_situation_exchange_form_component__["a" /* SituationExchangeFormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["c" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__reducers__["a" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_9__effects_lines_discovery_effects__["a" /* LinesDiscoveryEffects */], __WEBPACK_IMPORTED_MODULE_10__effects_stoppoints_discovery_effects__["a" /* StoppointsDiscoveryEffects */], __WEBPACK_IMPORTED_MODULE_11__effects_situation_exchange_effects__["a" /* SituationExchangeEffects */]]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_datatables_service__["a" /* DataTablesService */], __WEBPACK_IMPORTED_MODULE_14__services_situation_exchange_service__["a" /* SituationExchangeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/lines-discovery/lines-discovery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lines-discovery/lines-discovery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table datatable [settings]=settings class=\"table table-condensed table-striped table-bordered nowrap table-hover\" cellspacing=\"0\" width=\"100%\">\n    <thead>\n      <tr>\n        <th>LineRef</th>\n        <th>LineName</th>\n      </tr>\n    </thead>\n    <tfoot>\n      <tr>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search LineRef\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search LineName\" />\n        </th>\n      </tr>\n    </tfoot>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/lines-discovery/lines-discovery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinesDiscoveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_lines_discovery_actions__ = __webpack_require__("../../../../../src/app/actions/lines-discovery-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_datatables_service__ = __webpack_require__("../../../../../src/app/services/datatables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_datatables_directive__ = __webpack_require__("../../../../../src/app/directives/datatables.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LinesDiscoveryComponent = (function () {
    function LinesDiscoveryComponent(service, store) {
        this.service = service;
        this.store = store;
    }
    LinesDiscoveryComponent.prototype.ngOnInit = function () {
        this.settings = {
            serverSide: true,
            ajax: this.update.bind(this),
            scrollY: "70vh",
            deferRender: true,
            scroller: true,
            columns: [
                { data: "LineRef.value" },
                { data: "LineName.0.value" },
            ]
        };
        this.all$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["b" /* selectLinesDiscoveryState */]);
    };
    LinesDiscoveryComponent.prototype.ngAfterViewInit = function () {
        this.datatables.instance.columns().every(function () {
            var self = this;
            $('input', this.footer()).on('keyup change', function () {
                if (self.search() !== this['value']) {
                    self.search(this['value']).draw();
                }
            });
        });
    };
    LinesDiscoveryComponent.prototype.update = function (data, callback, settings) {
        this.all$.first(function (t) { return t.draw == data.draw; }).subscribe(function (t) {
            var array = Object.keys(t.entities).map(function (u) { return t.entities[u]; });
            var result = Object.assign({}, {
                data: array,
                recordsFiltered: t.recordsFiltered,
                recordsTotal: t.recordsTotal,
                draw: data.draw,
            });
            console.log(result);
            callback(result);
        });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_lines_discovery_actions__["b" /* AllAction */](data));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__directives_datatables_directive__["a" /* DataTablesDirective */]),
        __metadata("design:type", Object)
    ], LinesDiscoveryComponent.prototype, "datatables", void 0);
    LinesDiscoveryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lines-discovery',
            template: __webpack_require__("../../../../../src/app/components/lines-discovery/lines-discovery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/lines-discovery/lines-discovery.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_datatables_service__["a" /* DataTablesService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], LinesDiscoveryComponent);
    return LinesDiscoveryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/situation-exchange-form/situation-exchange-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vertival-scroll\n{\n    max-height: 500px;\n    overflow-y: scroll;\n}\n\ninput[readonly] {\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n}\n\n.panel-borderless {\n    border: 0;\n    box-shadow: none;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/situation-exchange-form/situation-exchange-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" role=\"dialog\" #dialog>\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Situation Exchange {{ (current$ | async)?.SituationNumber.value }} </h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <!-- <h5></h5> -->\n          </div>\n          <div class=\"card-body vertival-scroll\">\n\n            <form [formGroup]=\"formGroup\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n\n              <!-- Identity Group -->\n              <div class=\"panel panel-default panel-borderless\">\n                <div class=\"panel-body\">\n\n                  <div class=\"form-group row\">\n                    <label for=\"creationTime\" class=\"col-sm-2\">creationTime</label>\n                    <div class=\"col-sm-4\">\n                      <input readonly type=\"text\" class=\"form-control\" id=\"creationTime\" formControlName=\"creationTime\">\n                    </div>\n                    <label for=\"version\" class=\"col-sm-2\">version</label>\n                    <div class=\"col-sm-4\">\n                      <input readonly type=\"text\" class=\"form-control\" id=\"version\" formControlName=\"version\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label for=\"participantRef\" class=\"col-sm-2\">participantRef</label>\n                    <div class=\"col-sm-4\">\n                      <input readonly type=\"text\" class=\"form-control\" id=\"participantRef\" formControlName=\"participantRef\">\n                    </div>\n                    <label for=\"situationNumber\" class=\"col-sm-2\">situationNumber</label>\n                    <div class=\"col-sm-4\">\n                      <input readonly type=\"text\" class=\"form-control\" id=\"situationNumber\" formControlName=\"situationNumber\">\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n              <!-- Status Group -->\n              <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n\n                  <div class=\"form-group row\">\n                    <label for=\"sourceType\" class=\"col-sm-2\">sourceType</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"sourceType\" formControlName=\"sourceType\">\n                        <option *ngFor=\"let option of data.sourceType\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                    <label for=\"progress\" class=\"col-sm-2\">progress</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"progress\" formControlName=\"progress\">\n                        <option *ngFor=\"let option of data.progress\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label for=\"qualityIndex\" class=\"col-sm-2\">qualityIndex</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"qualityIndex\" formControlName=\"qualityIndex\">\n                        <option *ngFor=\"let option of data.qualityIndex\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                    <label for=\"reality\" class=\"col-sm-2\">reality</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"reality\" formControlName=\"reality\">\n                        <option *ngFor=\"let option of data.reality\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n              <!-- Temporal Group -->\n              <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                </div>\n              </div>\n\n              <!-- Classifier Group -->\n              <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n\n                  <div class=\"form-group row\">\n                    <label for=\"severity\" class=\"col-sm-2\">severity</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"severity\" formControlName=\"severity\">\n                        <option *ngFor=\"let option of data.severity\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                    <label for=\"sensitivity\" class=\"col-sm-2\">sensitivity</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"sensitivity\" formControlName=\"sensitivity\">\n                        <option *ngFor=\"let option of data.sensitivity\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label for=\"audience\" class=\"col-sm-2\">audience</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"audience\" formControlName=\"audience\">\n                        <option *ngFor=\"let option of data.audience\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                    <label for=\"scopeType\" class=\"col-sm-2\">scopeType</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"scopeType\" formControlName=\"scopeType\">\n                        <option *ngFor=\"let option of data.scopeType\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label for=\"keywords\" class=\"col-sm-2\">keywords</label>\n                    <div class=\"col-sm-10\">\n                      <input type=\"text\" class=\"form-control\" id=\"keywords\" formControlName=\"keywords\">\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n              <!-- Reason Group -->\n              <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n\n                  <div class=\"form-group row\">\n                    <label for=\"publicEventReason\" class=\"col-sm-2\">publicEventReason</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"publicEventReason\" formControlName=\"publicEventReason\">\n                        <option *ngFor=\"let option of data.publicEventReason\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                    <label for=\"unknownReason\" class=\"col-sm-2\">unknownReason</label>\n                    <div class=\"col-sm-4\">\n                      <input type=\"text\" class=\"form-control\" id=\"unknownReason\" formControlName=\"unknownReason\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n\n                    <label for=\"miscellaneousReason\" class=\"col-sm-2\">miscellaneousReason</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"miscellaneousReason\" formControlName=\"miscellaneousReason\">\n                        <option *ngFor=\"let option of data.miscellaneousReason\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                    <label for=\"personnelReason\" class=\"col-sm-2\">personnelReason</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"personnelReason\" formControlName=\"personnelReason\">\n                        <option *ngFor=\"let option of data.personnelReason\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label for=\"equipmentReason\" class=\"col-sm-2\">equipmentReason</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"equipmentReason\" formControlName=\"equipmentReason\">\n                        <option *ngFor=\"let option of data.equipmentReason\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                    <label for=\"environmentReason\" class=\"col-sm-2\">environmentReason</label>\n                    <div class=\"col-sm-4\">\n                      <select class=\"form-control\" id=\"environmentReason\" formControlName=\"environmentReason\">\n                        <option *ngFor=\"let option of data.environmentReason\" [value]=\"option\">{{option}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label for=\"undefinedReason\" class=\"col-sm-2\">undefinedReason</label>\n                    <div class=\"col-sm-4\">\n                      <input type=\"text\" class=\"form-control\" id=\"undefinedReason\" formControlName=\"undefinedReason\">\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n              <!-- Description Group -->\n              <div class=\"panel panel-default\">\n\n                <div class=\"panel-body\">\n\n                  <div class=\"form-group\">\n                    <label for=\"summary\">summary</label>\n                    <textarea class=\"form-control\" rows=\"1\" id=\"summary\"></textarea>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"description\">description</label>\n                    <textarea class=\"form-control\" rows=\"5\" id=\"description\"></textarea>\n                  </div>\n\n                </div>\n              </div>\n\n              <!-- Consequences Group -->\n              <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                </div>\n              </div>\n\n              <!-- Actions Group -->\n              <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                </div>\n              </div>\n            </form>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer \">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"f.ngSubmit.emit()\" [disabled]=\"!formGroup.valid\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/situation-exchange-form/situation-exchange-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SituationExchangeFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_dialog_anchor_directive__ = __webpack_require__("../../../../../src/app/directives/dialog-anchor.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__situation_exchange_type__ = __webpack_require__("../../../../../src/app/components/situation-exchange-form/situation-exchange-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_situation_exchange_actions__ = __webpack_require__("../../../../../src/app/actions/situation-exchange-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_situation_exchange__ = __webpack_require__("../../../../../src/app/models/situation-exchange.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SituationExchangeFormComponent = (function (_super) {
    __extends(SituationExchangeFormComponent, _super);
    function SituationExchangeFormComponent(fb, store) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.store = store;
        _this.data = __WEBPACK_IMPORTED_MODULE_4__situation_exchange_type__["a" /* SituationExchangeType */];
        return _this;
    }
    SituationExchangeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var now = new Date();
        this.formGroup = this.fb.group({
            creationTime: [now, []],
            participantRef: ["", []],
            situationNumber: ["", []],
            version: [now.getTime(), []],
            sourceType: ["directReport", []],
            progress: ["draft", []],
            qualityIndex: ["certain", []],
            reality: ["real", []],
            unknownReason: ["", []],
            miscellaneousReason: ["pti19_0", []],
            personnelReason: ["pti20_0", []],
            equipmentReason: ["pti21_0", []],
            environmentReason: ["pti22_0", []],
            undefinedReason: ["", []],
            publicEventReason: ["agriculturalShow", []],
            severity: ["pti26_0", []],
            sensitivity: ["veryHigh", []],
            audience: ["public", []],
            scopeType: ["general", []],
            keywords: ["", []],
            summary: ["", []],
            description: ["", []],
        });
        this.current$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__reducers__["e" /* situationEchangeCurrent */]);
        this.current$.filter(function (t) { return t !== undefined; }).subscribe(function (t) { return _this.initialize(t); });
        var situation = this.action.data;
        if (situation) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_situation_exchange_actions__["k" /* ReadAction */](situation.SituationNumber.value));
        }
    };
    SituationExchangeFormComponent.prototype.onSubmit = function (value) {
        var payload = this.create(value);
        if (this.action.id === "create") {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_situation_exchange_actions__["e" /* CreateAction */](payload));
        }
        else {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_situation_exchange_actions__["n" /* UpdateAction */](payload));
        }
    };
    SituationExchangeFormComponent.prototype.modal = function (options) {
        _super.prototype.modal.call(this, this.dialog, options);
    };
    SituationExchangeFormComponent.prototype.initialize = function (entity) {
        var controls = this.formGroup.controls;
        controls["creationTime"].setValue(entity.CreationTime);
        controls["participantRef"].setValue(entity.ParticipantRef.value);
        controls["situationNumber"].setValue(entity.SituationNumber.value);
        controls["version"].setValue(entity.Version.value);
        controls["sourceType"].setValue(entity.Source.SourceType);
        controls["progress"].setValue(entity.Progress);
        controls["qualityIndex"].setValue(entity.QualityIndex);
        controls["reality"].setValue(entity.Reality);
        controls["unknownReason"].setValue(entity.UnknownReason);
        controls["miscellaneousReason"].setValue(entity.MiscellaneousReason);
        controls["personnelReason"].setValue(entity.PersonnelReason);
        controls["equipmentReason"].setValue(entity.EquipmentReason);
        controls["environmentReason"].setValue(entity.EnvironmentReason);
        controls["undefinedReason"].setValue(entity.UndefinedReason);
        controls["publicEventReason"].setValue(entity.PublicEventReason);
        controls["severity"].setValue(entity.Severity);
        controls["sensitivity"].setValue(entity.Sensitivity);
        controls["audience"].setValue(entity.Audience);
        controls["scopeType"].setValue(entity.ScopeType);
        controls["keywords"].setValue(entity.Keywords);
        controls["summary"].setValue(entity.Summary[0].value);
        controls["description"].setValue(entity.Description[0].value);
    };
    SituationExchangeFormComponent.prototype.create = function (form) {
        var entity = new __WEBPACK_IMPORTED_MODULE_7__models_situation_exchange__["a" /* SituationExchange */]();
        entity.CreationTime = form.creationTime;
        entity.ParticipantRef.value = form.participantRef;
        entity.SituationNumber.value = form.situationNumber;
        entity.Version.value = form.version;
        entity.Source.SourceType = form.sourceType;
        entity.Progress = form.progress;
        entity.QualityIndex = form.qualityIndex;
        entity.Reality = form.reality;
        entity.UnknownReason = form.unknownReason;
        entity.MiscellaneousReason = form.miscellaneousReason;
        entity.PersonnelReason = form.personnelReason;
        entity.EquipmentReason = form.equipmentReason;
        entity.EnvironmentReason = form.environmentReason;
        entity.UndefinedReason = form.undefinedReason;
        entity.PublicEventReason = form.publicEventReason;
        entity.Severity = form.severity;
        entity.Sensitivity = form.sensitivity;
        entity.Audience = form.audience;
        entity.ScopeType = form.scopeType;
        entity.Keywords = form.keywords;
        entity.Summary = [{ value: form.summary }];
        entity.Description = [{ value: form.description }];
        return entity;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('dialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SituationExchangeFormComponent.prototype, "dialog", void 0);
    SituationExchangeFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'situation-exchange-form',
            template: __webpack_require__("../../../../../src/app/components/situation-exchange-form/situation-exchange-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/situation-exchange-form/situation-exchange-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]])
    ], SituationExchangeFormComponent);
    return SituationExchangeFormComponent;
}(__WEBPACK_IMPORTED_MODULE_3__directives_dialog_anchor_directive__["b" /* Modal */]));



/***/ }),

/***/ "../../../../../src/app/components/situation-exchange-form/situation-exchange-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SituationExchangeType; });
var SituationExchangeType = {
    sourceType: [
        "directReport",
        "email",
        "phone",
        "fax",
        "post",
        "feed",
        "radio",
        "tv",
        "web",
        "pager",
        "text",
        "other"
    ],
    progress: [
        "draft",
        "open",
        "published",
        "closing",
        "closed"
    ],
    qualityIndex: [
        "certain",
        "veryReliable",
        "reliable",
        "probablyReliable",
        "unconfirmed"
    ],
    reality: [
        "real",
        "securityExercise",
        "technicalExercise",
        "test"
    ],
    severity: [
        "pti26_0",
        "unknown",
        "pti26_1",
        "verySlight",
        "pti26_2",
        "slight",
        "pti26_3",
        "normal",
        "pti26_4",
        "severe",
        "pti26_5",
        "verySevere",
        "pti26_6",
        "noImpact",
        "pti26_255",
        "undefined"
    ],
    sensitivity: [
        "veryHigh",
        "high",
        "medium",
        "low",
        "veryLow"
    ],
    audience: [
        "public",
        "emergencyServices",
        "staff",
        "stationStaff",
        "management",
        "infoServices"
    ],
    scopeType: [
        "general",
        "operator",
        "network",
        "route",
        "line",
        "stopPoint",
        "vehicleJourney",
        "connectionLink",
        "allPT",
        "road"
    ],
    personnelReason: [
        "pti20_0",
        "unknown",
        "pti20_1",
        "staffSickness",
        "pti20_1_Alias_1",
        "staffInjury",
        "pti20_1_Alias_2",
        "contractorStaffInjury",
        "pti20_2",
        "staffAbsence",
        "pti20_3",
        "staffInWrongPlace",
        "pti20_4",
        "staffShortage",
        "pti20_5",
        "industrialAction",
        "pti20_5_Alias_1",
        "unofficialIndustrialAction",
        "pti20_6",
        "workToRule",
        "pti20_255",
        "undefinedPersonnelProblem"
    ],
    miscellaneousReason: [
        "pti19_0",
        "unknown",
        "pti19_0_1",
        "previousDisturbances",
        "pti19_1",
        "incident",
        "pti19_1_Alias_1",
        "nearMiss",
        "pti19_1_Alias_2",
        "safetyViolation",
        "pti19_1_Alias_3",
        "signalPassedAtDanger",
        "pti19_1_Alias_4",
        "stationOverrun",
        "pti19_1_Alias_5",
        "trainDoor",
        "pti19_1_Alias_6",
        "emergencyServicesCall",
        "pti19_2",
        "bombExplosion",
        "pti19_3",
        "securityAlert",
        "pti19_3_Alias_1",
        "policeRequest",
        "pti19_3_Alias_2",
        "fireBrigadeSafetyChecks",
        "pti19_3_Alias_3",
        "unattendedBag",
        "pti19_3_Alias_4",
        "telephonedThreat",
        "pti19_3_Alias_5",
        "suspectVehicle",
        "pti19_3_Alias_6",
        "civilEmergency",
        "pti19_3_Alias_7",
        "airRaid",
        "pti19_3_Alias_8",
        "sabotage",
        "pti19_3_Alias_9",
        "bombAlert",
        "pti19_3_Alias_10",
        "attack",
        "pti19_3_Alias_11",
        "evacuation",
        "pti19_3_Alias_12",
        "terroristIncident",
        "pti19_3_Alias_13",
        "gunfireOnRoadway",
        "pti19_3_Alias_14",
        "explosion",
        "pti19_3_Alias_15",
        "explosionHazard",
        "pti19_3_Alias_16",
        "securityIncident",
        "pti19_3_Alias_17",
        "fireBrigadeOrder",
        "pti19_3_Alias_18",
        "policeActivity",
        "pti19_4",
        "fire",
        "pti19_4_Alias_1",
        "linesideFire",
        "pti19_5",
        "vandalism",
        "pti19_5_Alias_1",
        "passengerAction",
        "pti19_5_Alias_2",
        "staffAssault",
        "pti19_5_Alias_3",
        "railwayCrime",
        "pti19_5_Alias_4",
        "assault",
        "pti19_5_Alias_5",
        "theft",
        "pti19_1_Alias_6",
        "altercation ",
        "pti19_1_Alias_7",
        "illVehicleOccupants ",
        "pti19_6",
        "accident",
        "pti19_6_Alias_1",
        "fatality",
        "pti19_6_Alias_2",
        "personUnderTrain",
        "pti19_6_Alias_3",
        "personHitByTrain",
        "pti19_6_Alias_4",
        "personIllOnVehicle",
        "pti19_6_Alias_5",
        "emergencyServices",
        "pti19_6_Alias_6",
        "collision",
        "pti19_7",
        "overcrowded",
        "pti19_8",
        "insufficientDemand",
        "pti19_9",
        "lightingFailure",
        "pti19_10",
        "leaderBoardFailure",
        "pti19_11",
        "serviceIndicatorFailure",
        "pti19_12",
        "serviceFailure",
        "pti19_13",
        "operatorCeasedTrading",
        "pti19_14",
        "operatorSuspended",
        "pti19_15",
        "congestion",
        "pti19_16",
        "routeBlockage",
        "pti19_17",
        "personOnTheLine",
        "pti19_18",
        "vehicleOnTheLine",
        "pti19_18_Alias_1",
        "levelCrossingIncident",
        "pti19_19",
        "objectOnTheLine",
        "pti19_19_Alias_1",
        "fallenTreeOnTheLine",
        "pti19_19_Alias_2",
        "vegetation",
        "pti19_19_Alias_3",
        "trainStruckAnimal",
        "pti19_19_Alias_4",
        "trainStruckObject",
        "pti19_20",
        "animalOnTheLine",
        "pti19_21",
        "routeDiversion",
        "pti19_22",
        "roadClosed",
        "pti19_23",
        "roadworks",
        "pti19_23_Alias_1",
        "sewerageMaintenance",
        "pti19_23_Alias_2",
        "roadMaintenance",
        "pti19_23_Alias_3",
        "asphalting",
        "pti19_23_Alias_4",
        "paving",
        "pti19_24",
        "specialEvent",
        "pti19_24_Alias_1",
        "march",
        "pti19_24_Alias_2",
        "procession",
        "pti19_24_Alias_3",
        "demonstration",
        "pti19_24_Alias_4",
        "publicDisturbance",
        "pti19_24_Alias_5",
        "filterBlockade",
        "pti19_24_Alias_6",
        "sightseersObstructingAccess",
        "pti19_24_Alias_7",
        "holiday",
        "pti19_25",
        "bridgeStrike",
        "pti19_25_Alias_1",
        "viaductFailure",
        "pti19_26",
        "overheadObstruction",
        "pti19_27",
        "undefinedProblem",
        "pti19_15_Alias_1",
        "problemsAtBorderPost",
        "pti19_15_Alias_2",
        "problemsAtCustomsPost",
        "pti19_15_Alias_3",
        "speedRestrictions",
        "pti19_255_Alias_1",
        "logisticProblems",
        "pti19_255_Alias_2",
        "problemsOnLocalRoad"
    ],
    equipmentReason: [
        "pti21_0",
        "unknown",
        "pti21_1",
        "pointsProblem",
        "pti21_2",
        "pointsFailure",
        "pti21_3",
        "signalProblem",
        "pti21_3_Alias_1",
        "trainWarningSystemProblem",
        "pti21_3_Alias_2",
        "trackCircuitProblem",
        "pti21_4",
        "signalFailure",
        "pti21_4_Alias_1",
        "signalAndSwitchFailure",
        "pti21_5",
        "derailment",
        "pti21_6",
        "engineFailure",
        "pti21_6_Alias_1",
        "tractionFailure",
        "pti21_7",
        "breakDown",
        "pti21_8",
        "technicalProblem",
        "pti21_8_Alias_1",
        "brokenRail",
        "pti21_8_Alias_2",
        "poorRailConditions",
        "pti21_8_Alias_3",
        "wheelImpactLoad",
        "pti21_8_Alias_4",
        "lackOfOperationalStock",
        "pti21_8_Alias_5",
        "defectiveFireAlarmEquipment",
        "pti21_8_Alias_6",
        "defectivePlatformEdgeDoors",
        "pti21_8_Alias_7",
        "defectiveCctv",
        "pti21_8_Alias_8",
        "defectivePublicAnnouncementSystem",
        "pti21_8_Alias_9",
        "ticketingSystemNotAvailable",
        "pti21_8_Alias_10",
        "leveCrossingFailure",
        "pti21_9",
        "repairWork",
        "pti21_10",
        "constructionWork",
        "pti21_11",
        "maintenanceWork",
        "pti21_11_Alias_1",
        "emergencyEngineeringWork",
        "pti21_11_Alias_2",
        "lateFinishToEngineeringWork",
        "pti21_12",
        "powerProblem",
        "pti21_12_Alias_1",
        "oveheadWireFailure",
        "pti21_13",
        "fuelProblem",
        "pti21_14",
        "swingBridgeFailure",
        "pti21_15",
        "escalatorFailure",
        "pti21_16",
        "liftFailure",
        "pti21_17",
        "gangwayProblem",
        "pti21_18",
        "closedForMaintenance",
        "pti21_19",
        "fuelShortage",
        "pti21_20",
        "deicingWork",
        "pti21_21",
        "wheelProblem",
        "pti21_21_Alias_1",
        "slipperyTrack",
        "pti21_22",
        "luggageCarouselProblem",
        "pti21_255",
        "undefinedEquipmentProblem"
    ],
    environmentReason: [
        "pti22_0",
        "unknown",
        "pti22_1",
        "fog",
        "pti22_2",
        "roughSea",
        "pti22_3",
        "heavySnowFall",
        "pti22_3_Alias_1",
        "driftingSnow",
        "pti22_3_Alias_2",
        "blizzardConditions",
        "pti22_4",
        "heavyRain",
        "pti22_5",
        "strongWinds",
        "pti22_5_Alias_1",
        "stormConditions",
        "pti22_5_Alias_2",
        "stormDamage",
        "pti22_6",
        "tidalRestrictions",
        "pti22_7",
        "highTide",
        "pti22_8",
        "lowTide",
        "pti22_9",
        "ice",
        "pti22_9_Alias_1",
        "slipperiness",
        "pti22_9_Alias_2",
        "iceDrift",
        "pti22_9_Alias_3",
        "glazedFrost",
        "pti22_10",
        "frozen",
        "pti22_11",
        "hail",
        "pti22_11_Alias_1",
        "sleet",
        "pti22_12",
        "highTemperatures",
        "pti22_13",
        "flooding",
        "pti22_14",
        "waterlogged",
        "pti22_15",
        "lowWaterLevel",
        "pti22_16",
        "highWaterLevel",
        "pti22_17",
        "fallenLeaves",
        "pti22_18",
        "fallenTree",
        "pti22_19",
        "landslide",
        "pti22_255",
        "undefinedEnvironmentalProblem",
        "pti22_255_Alias_1",
        "lightningStrike",
        "pti22_255_Alias_2",
        "sewerOverflow",
        "pti22_255_Alias_3",
        "grassFire"
    ],
    publicEventReason: [
        "agriculturalShow",
        "airShow",
        "athleticsMeeting",
        "commercialEvent",
        "culturalEvent",
        "ballGame",
        "baseballGame",
        "basketballGame",
        "bicycleRace",
        "boatRace",
        "boatShow",
        "boxingTournament",
        "bullFight",
        "ceremonialEvent",
        "concert",
        "cricketMatch",
        "exhibition",
        "fair",
        "festival",
        "filmTVMaking",
        "footballMatch",
        "funfair",
        "gardeningOrFlowerShow",
        "golfTournament",
        "hockeyGame",
        "horseRaceMeeting",
        "internationalSportsMeeting",
        "majorEvent",
        "marathon",
        "market",
        "match",
        "motorShow",
        "motorSportRaceMeeting",
        "parade",
        "procession",
        "raceMeeting",
        "rugbyMatch",
        "severalMajorEvents",
        "show",
        "showJumping",
        "sportsMeeting",
        "stateOccasion",
        "tennisTournament",
        "tournament",
        "tradeFair",
        "waterSportsMeeting",
        "winterSportsMeeting",
        "other"
    ],
};


/***/ }),

/***/ "../../../../../src/app/components/situation-exchange/situation-exchange.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/situation-exchange/situation-exchange.component.html":
/***/ (function(module, exports) {

module.exports = "<div dialog-anchor class=\"container\">\n  <button (click)=\"onClick({ id: 'create'})\" id=\"add\" type=\"button\" class=\"btn btn-default btn-default\" aria-label=\"Left Align\">\n    <span class=\"glyphicon glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span> Add Situation Exchange\n  </button>\n  <table (change)=\"onClick($event)\" datatable [settings]=settings class=\"table table-condensed table-striped table-bordered nowrap table-hover\" cellspacing=\"0\"\n    width=\"100%\">\n    <thead>\n      <tr>\n        <th>Actions</th>\n\n        <th>SituationNumber</th>\n        <th>Source</th>\n        <th>Progress</th>\n        <th>QualityIndex</th>\n        <th>Reality</th>\n        <th>UnknownReason</th>\n        <th>MiscellaneousReason</th>\n        <th>PersonnelReason</th>\n        <th>EquipmentReason</th>\n        <th>EnvironmentReason</th>\n        <th>UndefinedReason</th>\n        <th>PublicEventReason</th>\n        <th>Severity</th>\n        <th>Sensitivity</th>\n        <th>Audience</th>\n        <th>ScopeType</th>\n        <th>Keywords</th>\n        <th>Summary</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tfoot>\n      <tr>\n        <th>\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search SituationNumber\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Source\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Progress\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search QualityIndex\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Reality\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search UnknownReason\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search MiscellaneousReason\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search PersonnelReason\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search EquipmentReason\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search EnvironmentReason\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search UndefinedReason\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search PublicEventReason\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Severity\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Sensitivity\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Audience\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search ScopeType\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Keywords\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Summary\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Description\" />\n        </th>\n      </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/situation-exchange/situation-exchange.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SituationExchangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__ = __webpack_require__("../../../../../src/app/actions/situation-exchange-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_datatables_service__ = __webpack_require__("../../../../../src/app/services/datatables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__situation_exchange_form_situation_exchange_form_component__ = __webpack_require__("../../../../../src/app/components/situation-exchange-form/situation-exchange-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_dialog_anchor_directive__ = __webpack_require__("../../../../../src/app/directives/dialog-anchor.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_datatables_directive__ = __webpack_require__("../../../../../src/app/directives/datatables.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SituationExchangeComponent = (function () {
    function SituationExchangeComponent(service, store) {
        this.service = service;
        this.store = store;
    }
    SituationExchangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = {
            serverSide: true,
            ajax: this.update.bind(this),
            scrollX: true,
            scrollY: "70vh",
            deferRender: true,
            scroller: true,
            scrollCollapse: true,
            columnDefs: [
                { orderable: false, targets: 0 }
            ],
            columns: [
                {
                    orderable: false,
                    searchable: false,
                    defaultContent: "<button id=\"update\" type=\"button\" class=\"btn btn-primary btn-sm\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n                          </button>\n                          <button id=\"delete\" type=\"button\" class=\"btn btn-danger btn-sm\" aria-label.data[\"0\"].Source.SourceType=\"Left Align\">\n                            <span class=\"glyphicon glyphicon glyphicon-remove-sign\" aria-hidden=\"true\"></span>\n                          </button>"
                },
                { data: "SituationNumber.value" },
                { data: "Source.SourceType" },
                { data: "Progress" },
                { data: "QualityIndex" },
                { data: "Reality" },
                { data: "UnknownReason" },
                { data: "MiscellaneousReason" },
                { data: "PersonnelReason" },
                { data: "EquipmentReason" },
                { data: "EnvironmentReason" },
                { data: "UndefinedReason" },
                { data: "PublicEventReason" },
                { data: "Severity" },
                { data: "Sensitivity" },
                { data: "Audience" },
                { data: "ScopeType" },
                { data: "Keywords" },
                { data: "Summary.0.value" },
                { data: "Description.0.value" },
            ]
        };
        this.all$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["c" /* selectSituationEchangeState */]);
        this.all$.filter(function (t) { return t.draw == _this.draw; }).subscribe(function (t) {
            _this.datatables.instance.ajax.reload();
        });
    };
    SituationExchangeComponent.prototype.ngAfterViewInit = function () {
        this.datatables.instance.columns().every(function () {
            var self = this;
            $('input', this.footer()).on('keyup change', function () {
                if (self.search() !== this['value']) {
                    self.search(this['value']).draw();
                }
            });
        });
    };
    SituationExchangeComponent.prototype.onClick = function (e) {
        switch (e.id) {
            case "create":
            case "update":
                var dialog = this.dialogAnchor.create(__WEBPACK_IMPORTED_MODULE_5__situation_exchange_form_situation_exchange_form_component__["a" /* SituationExchangeFormComponent */], e);
                dialog.instance.modal();
                break;
            case "delete":
                var situation = e.data;
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["h" /* DeleteAction */](situation.SituationNumber.value));
                break;
            default:
                break;
        }
    };
    SituationExchangeComponent.prototype.update = function (data, callback, settings) {
        var _this = this;
        this.all$.first(function (t) { return t.draw == data.draw; }).subscribe(function (t) {
            _this.draw = t.draw;
            var array = Object.keys(t.entities).map(function (u) { return t.entities[u]; });
            var result = Object.assign({}, {
                data: array,
                recordsFiltered: t.recordsFiltered,
                recordsTotal: t.recordsTotal,
                draw: data.draw,
            });
            callback(result);
        });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["b" /* AllAction */](data));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__directives_dialog_anchor_directive__["a" /* DialogAnchorDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__directives_dialog_anchor_directive__["a" /* DialogAnchorDirective */])
    ], SituationExchangeComponent.prototype, "dialogAnchor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7__directives_datatables_directive__["a" /* DataTablesDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__directives_datatables_directive__["a" /* DataTablesDirective */])
    ], SituationExchangeComponent.prototype, "datatables", void 0);
    SituationExchangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'situation-exchange',
            template: __webpack_require__("../../../../../src/app/components/situation-exchange/situation-exchange.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/situation-exchange/situation-exchange.component.css")],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__situation_exchange_form_situation_exchange_form_component__["a" /* SituationExchangeFormComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_datatables_service__["a" /* DataTablesService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], SituationExchangeComponent);
    return SituationExchangeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/stoppoints-discovery/stoppoints-discovery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stoppoints-discovery/stoppoints-discovery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table datatable [settings]=settings class=\"table table-condensed table-striped table-bordered nowrap table-hover\" cellspacing=\"0\" width=\"100%\">\n    <thead>\n      <tr>\n        <th>StopPointRef</th>\n        <th>StopName</th>\n        <th>Longitude</th>\n        <th>Latitude</th>\n      </tr>\n    </thead>\n    <tfoot>\n      <tr>\n        <th>\n          <input type=\"text\" class=\"form-control\"  placeholder=\"Search StopPointRef\" />\n        </th>\n        <th>\n          <input type=\"text\" class=\"form-control\"  placeholder=\"Search StopName\"  />\n        </th>\n        <th>\n        </th>\n        <th>\n        </th>\n      </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/stoppoints-discovery/stoppoints-discovery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoppointsDiscoveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_stoppoints_discovery_actions__ = __webpack_require__("../../../../../src/app/actions/stoppoints-discovery-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_datatables_service__ = __webpack_require__("../../../../../src/app/services/datatables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_datatables_directive__ = __webpack_require__("../../../../../src/app/directives/datatables.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StoppointsDiscoveryComponent = (function () {
    function StoppointsDiscoveryComponent(service, store) {
        this.service = service;
        this.store = store;
    }
    StoppointsDiscoveryComponent.prototype.ngOnInit = function () {
        this.settings = {
            serverSide: true,
            ajax: this.update.bind(this),
            scrollY: '70vh',
            deferRender: true,
            scroller: true,
            columns: [
                { data: "StopPointRef.value" },
                { data: "StopName.0.value" },
                { data: "Location.Longitude", orderable: false, searchable: false },
                { data: "Location.Latitude", orderable: false, searchable: false },
            ]
        };
        this.all$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["d" /* selectStoppointsDiscoveryState */]);
    };
    StoppointsDiscoveryComponent.prototype.ngAfterViewInit = function () {
        this.datatables.instance.columns().every(function () {
            var self = this;
            $('input', this.footer()).on('keyup change', function () {
                if (self.search() !== this['value']) {
                    self.search(this['value']).draw();
                }
            });
        });
    };
    StoppointsDiscoveryComponent.prototype.update = function (data, callback, settings) {
        this.all$.first(function (t) { return t.draw == data.draw; }).subscribe(function (t) {
            var array = Object.keys(t.entities).map(function (u) { return t.entities[u]; });
            var result = Object.assign({}, {
                data: array,
                recordsFiltered: t.recordsFiltered,
                recordsTotal: t.recordsTotal,
                draw: data.draw,
            });
            callback(result);
        });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_stoppoints_discovery_actions__["b" /* AllAction */](data));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__directives_datatables_directive__["a" /* DataTablesDirective */]),
        __metadata("design:type", Object)
    ], StoppointsDiscoveryComponent.prototype, "datatables", void 0);
    StoppointsDiscoveryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'stoppoints-discovery',
            template: __webpack_require__("../../../../../src/app/components/stoppoints-discovery/stoppoints-discovery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/stoppoints-discovery/stoppoints-discovery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_datatables_service__["a" /* DataTablesService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], StoppointsDiscoveryComponent);
    return StoppointsDiscoveryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/datatables.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTablesDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTablesDirective = (function () {
    function DataTablesDirective(element) {
        this.element = element;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    DataTablesDirective.prototype.ngOnInit = function () {
        this.initialize();
    };
    DataTablesDirective.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    DataTablesDirective.prototype.initialize = function () {
        var _this = this;
        var self = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].of(this.settings).subscribe(function (t) {
            _this.instance = $(_this.element.nativeElement).DataTable(t);
            _this.instance.columns().every(function () {
                $("#input", this.footer()).on('keyup change', function () {
                    if (self.instance.search() !== this['value']) {
                        self.instance.search(this['value']).draw();
                    }
                });
            });
            $(self.element.nativeElement).on('click', 'button', function (e) {
                var data = self.instance.row($(this).parents('tr')).data();
                var value = Object.assign({}, {
                    id: e.currentTarget.id,
                    data: data
                });
                self.change.emit(value);
            });
        });
    };
    DataTablesDirective.prototype.dispose = function () {
        this.instance.destroy(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DataTablesDirective.prototype, "settings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], DataTablesDirective.prototype, "change", void 0);
    DataTablesDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[datatable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], DataTablesDirective);
    return DataTablesDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/dialog-anchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogAnchorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Modal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogAnchorDirective = (function () {
    function DialogAnchorDirective(container, resolver) {
        this.container = container;
        this.resolver = resolver;
    }
    DialogAnchorDirective.prototype.create = function (view, data) {
        this.container.clear();
        var factory = this.resolver.resolveComponentFactory(view);
        var component = this.container.createComponent(factory);
        component.instance.action = data;
        component.instance.close.subscribe(function () {
            component.destroy();
        });
        return component;
    };
    DialogAnchorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[dialog-anchor]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], DialogAnchorDirective);
    return DialogAnchorDirective;
}());

var Modal = (function () {
    function Modal() {
        this._close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(Modal.prototype, "close", {
        get: function () {
            return this._close;
        },
        enumerable: true,
        configurable: true
    });
    Modal.prototype.modal = function (child, options) {
        var element = $(child.nativeElement);
        element.modal(options);
        var self = this;
        element.on('hidden.bs.modal', function (e) {
            self.close.emit('event');
        });
    };
    return Modal;
}());



/***/ }),

/***/ "../../../../../src/app/effects/lines-discovery-effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinesDiscoveryEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_lines_discovery_actions__ = __webpack_require__("../../../../../src/app/actions/lines-discovery-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_datatables_service__ = __webpack_require__("../../../../../src/app/services/datatables.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LinesDiscoveryEffects = (function () {
    function LinesDiscoveryEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.all$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_lines_discovery_actions__["a" /* ActionTypes */].ALL)
            .debounceTime(300)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            if (payload == undefined) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].empty();
            }
            var next$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_lines_discovery_actions__["a" /* ActionTypes */].ALL).skip(1);
            var url = "http://localhost:8080/services/siri-lite/lines-discovery/datatables";
            return _this.service.all(url, payload)
                .takeUntil(next$)
                .map(function (data) { return new __WEBPACK_IMPORTED_MODULE_3__actions_lines_discovery_actions__["d" /* AllSuccessAction */](data); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_3__actions_lines_discovery_actions__["c" /* AllFailureAction */](error)); });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */])
    ], LinesDiscoveryEffects.prototype, "all$", void 0);
    LinesDiscoveryEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_4__services_datatables_service__["a" /* DataTablesService */]])
    ], LinesDiscoveryEffects);
    return LinesDiscoveryEffects;
}());



/***/ }),

/***/ "../../../../../src/app/effects/situation-exchange-effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SituationExchangeEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__ = __webpack_require__("../../../../../src/app/actions/situation-exchange-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_situation_exchange_service__ = __webpack_require__("../../../../../src/app/services/situation-exchange.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_datatables_service__ = __webpack_require__("../../../../../src/app/services/datatables.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SituationExchangeEffects = (function () {
    function SituationExchangeEffects(actions$, datatables, service) {
        var _this = this;
        this.actions$ = actions$;
        this.datatables = datatables;
        this.service = service;
        this.all$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["a" /* ActionTypes */].ALL)
            .debounceTime(300)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            if (payload == undefined) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].empty();
            }
            var next$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["a" /* ActionTypes */].ALL).skip(1);
            var url = "http://localhost:8080/services/siri-lite/situation-exchange/datatables";
            return _this.datatables.all(url, payload)
                .takeUntil(next$)
                .map(function (data) { return new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["d" /* AllSuccessAction */](data); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["c" /* AllFailureAction */](error)); });
        });
        this.create$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["a" /* ActionTypes */].CREATE)
            .debounceTime(300)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            if (payload == undefined) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].empty();
            }
            var url = SituationExchangeEffects_1.URL;
            var next$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["a" /* ActionTypes */].CREATE).skip(1);
            return _this.service.create(url, payload)
                .takeUntil(next$)
                .map(function (data) { return new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["g" /* CreateSuccessAction */](data); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["f" /* CreateFailureAction */](error)); });
        });
        this.read$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["a" /* ActionTypes */].READ)
            .debounceTime(300)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            if (payload == undefined) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].empty();
            }
            var url = SituationExchangeEffects_1.URL + "?id=" + payload;
            var next$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["a" /* ActionTypes */].READ).skip(1);
            return _this.service.read(url)
                .takeUntil(next$)
                .map(function (data) { return new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["m" /* ReadSuccessAction */](data[0]); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["l" /* ReadFailureAction */](error)); });
        });
        this.update$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["a" /* ActionTypes */].UPDATE)
            .debounceTime(300)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            if (payload == undefined) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].empty();
            }
            console.log(payload);
            var url = SituationExchangeEffects_1.URL + "?id=" + payload.SituationNumber.value;
            var next$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["a" /* ActionTypes */].UPDATE).skip(1);
            return _this.service.update(url, payload)
                .takeUntil(next$)
                .map(function (data) { return new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["p" /* UpdateSuccessAction */](data); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["o" /* UpdateFailureAction */](error)); });
        });
        this.delete$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["a" /* ActionTypes */].DELETE)
            .debounceTime(300)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            if (payload == undefined) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].empty();
            }
            var url = SituationExchangeEffects_1.URL + "?id=" + payload;
            var next$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["a" /* ActionTypes */].DELETE).skip(1);
            return _this.service.delete(url)
                .takeUntil(next$)
                .map(function (data) { return new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["j" /* DeleteSuccessAction */](payload); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_3__actions_situation_exchange_actions__["i" /* DeleteFailureAction */](error)); });
        });
    }
    SituationExchangeEffects_1 = SituationExchangeEffects;
    SituationExchangeEffects.URL = "http://localhost:8080/services/siri-lite/situation-exchange/ext";
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */])
    ], SituationExchangeEffects.prototype, "all$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */])
    ], SituationExchangeEffects.prototype, "create$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */])
    ], SituationExchangeEffects.prototype, "read$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */])
    ], SituationExchangeEffects.prototype, "update$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */])
    ], SituationExchangeEffects.prototype, "delete$", void 0);
    SituationExchangeEffects = SituationExchangeEffects_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_5__services_datatables_service__["a" /* DataTablesService */],
            __WEBPACK_IMPORTED_MODULE_4__services_situation_exchange_service__["a" /* SituationExchangeService */]])
    ], SituationExchangeEffects);
    return SituationExchangeEffects;
    var SituationExchangeEffects_1;
}());



/***/ }),

/***/ "../../../../../src/app/effects/stoppoints-discovery-effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoppointsDiscoveryEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_stoppoints_discovery_actions__ = __webpack_require__("../../../../../src/app/actions/stoppoints-discovery-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_datatables_service__ = __webpack_require__("../../../../../src/app/services/datatables.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StoppointsDiscoveryEffects = (function () {
    function StoppointsDiscoveryEffects(actions$, service, store) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.store = store;
        this.all$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_stoppoints_discovery_actions__["a" /* ActionTypes */].ALL)
            .debounceTime(300)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            if (payload == undefined) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].empty();
            }
            var next$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_stoppoints_discovery_actions__["a" /* ActionTypes */].ALL).skip(1);
            var url = "http://localhost:8080/services/siri-lite/stoppoints-discovery/datatables";
            return _this.service.all(url, payload)
                .takeUntil(next$)
                .map(function (data) { return new __WEBPACK_IMPORTED_MODULE_4__actions_stoppoints_discovery_actions__["d" /* AllSuccessAction */](data); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_4__actions_stoppoints_discovery_actions__["c" /* AllFailureAction */](error)); });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */])
    ], StoppointsDiscoveryEffects.prototype, "all$", void 0);
    StoppointsDiscoveryEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_5__services_datatables_service__["a" /* DataTablesService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], StoppointsDiscoveryEffects);
    return StoppointsDiscoveryEffects;
}());



/***/ }),

/***/ "../../../../../src/app/models/situation-exchange.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SituationExchange; });
/* unused harmony export Value */
/* unused harmony export SituationSource */
var SituationExchange = (function () {
    function SituationExchange() {
        this.ParticipantRef = new Value();
        this.SituationNumber = new Value();
        this.Version = new Value(); // BigInteger
        this.Source = new SituationSource();
        // InfoLinks: string;
        // Affects: string;
        // Consequences: string;
        // PublishingActions: string;
    }
    return SituationExchange;
}());

var Value = (function () {
    function Value(value) {
        this.value = value;
    }
    return Value;
}());

var SituationSource = (function () {
    function SituationSource() {
    }
    return SituationSource;
}());



/***/ }),

/***/ "../../../../../src/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectLinesDiscoveryState; });
/* unused harmony export linesDiscoveryIds */
/* unused harmony export linesDiscoveryEntities */
/* unused harmony export linesDiscoveryAll */
/* unused harmony export linesDiscoveryTotal */
/* unused harmony export linesDiscoveryCurrentId */
/* unused harmony export linesDiscoveryCurrent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return selectStoppointsDiscoveryState; });
/* unused harmony export stoppointsDiscoveryIds */
/* unused harmony export stoppointsDiscoveryEntities */
/* unused harmony export stoppointsDiscoveryAll */
/* unused harmony export stoppointsDiscoveryTotal */
/* unused harmony export stoppointsDiscoveryCurrentId */
/* unused harmony export stoppointsDiscoveryCurrent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selectSituationEchangeState; });
/* unused harmony export situationEchangeIds */
/* unused harmony export situationEchangeEntities */
/* unused harmony export situationEchangeAll */
/* unused harmony export situationEchangeTotal */
/* unused harmony export situationEchangeCurrentId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return situationEchangeCurrent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lines_discovery_reducers__ = __webpack_require__("../../../../../src/app/reducers/lines-discovery-reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stoppoints_discovery_reducers__ = __webpack_require__("../../../../../src/app/reducers/stoppoints-discovery-reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__situation_exchange_reducers__ = __webpack_require__("../../../../../src/app/reducers/situation-exchange-reducers.ts");




var reducers = {
    lines_discovery: __WEBPACK_IMPORTED_MODULE_1__lines_discovery_reducers__["b" /* reducer */],
    stoppoints_discovery: __WEBPACK_IMPORTED_MODULE_2__stoppoints_discovery_reducers__["b" /* reducer */],
    situation_exchange: __WEBPACK_IMPORTED_MODULE_3__situation_exchange_reducers__["b" /* reducer */]
};
var selectLinesDiscoveryState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createFeatureSelector */])("lines_discovery");
var linesDiscoveryIds = (_a = __WEBPACK_IMPORTED_MODULE_1__lines_discovery_reducers__["a" /* adapter */].getSelectors(selectLinesDiscoveryState), _a.selectIds), linesDiscoveryEntities = _a.selectEntities, linesDiscoveryAll = _a.selectAll, linesDiscoveryTotal = _a.selectTotal;
var linesDiscoveryCurrentId = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(selectLinesDiscoveryState, __WEBPACK_IMPORTED_MODULE_1__lines_discovery_reducers__["c" /* selected */]);
var linesDiscoveryCurrent = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(linesDiscoveryEntities, linesDiscoveryCurrentId, function (list, id) { return list[id]; });
var selectStoppointsDiscoveryState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createFeatureSelector */])("stoppoints_discovery");
var stoppointsDiscoveryIds = (_b = __WEBPACK_IMPORTED_MODULE_2__stoppoints_discovery_reducers__["a" /* adapter */].getSelectors(selectStoppointsDiscoveryState), _b.selectIds), stoppointsDiscoveryEntities = _b.selectEntities, stoppointsDiscoveryAll = _b.selectAll, stoppointsDiscoveryTotal = _b.selectTotal;
var stoppointsDiscoveryCurrentId = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(selectStoppointsDiscoveryState, __WEBPACK_IMPORTED_MODULE_2__stoppoints_discovery_reducers__["c" /* selected */]);
var stoppointsDiscoveryCurrent = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(stoppointsDiscoveryEntities, stoppointsDiscoveryCurrentId, function (list, id) { return list[id]; });
var selectSituationEchangeState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createFeatureSelector */])("situation_exchange");
var situationEchangeIds = (_c = __WEBPACK_IMPORTED_MODULE_3__situation_exchange_reducers__["a" /* adapter */].getSelectors(selectSituationEchangeState), _c.selectIds), situationEchangeEntities = _c.selectEntities, situationEchangeAll = _c.selectAll, situationEchangeTotal = _c.selectTotal;
var situationEchangeCurrentId = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(selectSituationEchangeState, __WEBPACK_IMPORTED_MODULE_3__situation_exchange_reducers__["c" /* selected */]);
var situationEchangeCurrent = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(situationEchangeEntities, situationEchangeCurrentId, function (list, id) { return list[id]; });
var _a, _b, _c;


/***/ }),

/***/ "../../../../../src/app/reducers/lines-discovery-reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adapter; });
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selected; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_entity__ = __webpack_require__("../../../../@ngrx/entity/@ngrx/entity.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_lines_discovery_actions__ = __webpack_require__("../../../../../src/app/actions/lines-discovery-actions.ts");


var adapter = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_entity__["a" /* createEntityAdapter */])({
    selectId: function (t) { return t.LineRef.value; }
});
var initialState = adapter.getInitialState({
    selected: null,
    recordsFiltered: 0,
    recordsTotal: 0,
    draw: 0
});
function reducer(state, actions) {
    if (state === void 0) { state = initialState; }
    switch (actions.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_lines_discovery_actions__["a" /* ActionTypes */].ALL_SUCCESS: {
            var entities_1 = [];
            actions.payload.data.map(function (t) { return entities_1.push(t); });
            var result = adapter.addAll(entities_1, state);
            result.recordsFiltered = actions.payload.recordsFiltered;
            result.recordsTotal = actions.payload.recordsTotal;
            result.draw = actions.payload.draw;
            result.selected = null;
            return result;
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_lines_discovery_actions__["a" /* ActionTypes */].ALL_FAILURE: {
            return state;
        }
        default: {
            return state;
        }
    }
}
var selected = function (state) { return state.selected; };


/***/ }),

/***/ "../../../../../src/app/reducers/situation-exchange-reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adapter; });
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selected; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_entity__ = __webpack_require__("../../../../@ngrx/entity/@ngrx/entity.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_situation_exchange_actions__ = __webpack_require__("../../../../../src/app/actions/situation-exchange-actions.ts");


var adapter = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_entity__["a" /* createEntityAdapter */])({
    selectId: function (t) { return t.SituationNumber.value; }
});
var initialState = adapter.getInitialState({
    selected: null,
    recordsFiltered: 0,
    recordsTotal: 0,
    draw: 0
});
function reducer(state, actions) {
    if (state === void 0) { state = initialState; }
    switch (actions.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_situation_exchange_actions__["a" /* ActionTypes */].ALL_SUCCESS: {
            var entities_1 = [];
            actions.payload.data.map(function (t) { return entities_1.push(t); });
            var result = adapter.addAll(entities_1, state);
            result.recordsFiltered = actions.payload.recordsFiltered;
            result.recordsTotal = actions.payload.recordsTotal;
            result.draw = actions.payload.draw;
            result.selected = null;
            return result;
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_situation_exchange_actions__["a" /* ActionTypes */].ALL_FAILURE: {
            return state;
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_situation_exchange_actions__["a" /* ActionTypes */].CREATE_SUCCESS: {
            var entity = actions.payload;
            var result = adapter.addOne(entity, state);
            result.selected = null;
            return result;
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_situation_exchange_actions__["a" /* ActionTypes */].CREATE_FAILURE: {
            return state;
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_situation_exchange_actions__["a" /* ActionTypes */].READ_SUCCESS: {
            var payload = actions.payload;
            var result = adapter.updateOne({
                id: payload.SituationNumber.value,
                changes: payload
            }, state);
            result.selected = payload.SituationNumber.value;
            return result;
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_situation_exchange_actions__["a" /* ActionTypes */].READ_FAILURE: {
            return state;
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_situation_exchange_actions__["a" /* ActionTypes */].UPDATE_SUCCESS: {
            var payload = actions.payload;
            var result = adapter.updateOne({
                id: payload.SituationNumber.value,
                changes: (_a = {}, _a[payload.SituationNumber.value] = payload, _a)
            }, state);
            result.selected = null;
            return result;
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_situation_exchange_actions__["a" /* ActionTypes */].UPDATE_FAILURE: {
            return state;
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_situation_exchange_actions__["a" /* ActionTypes */].DELETE_SUCCESS: {
            var payload = actions.payload;
            var result = adapter.removeOne(payload, state);
            result.selected = null;
            return result;
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_situation_exchange_actions__["a" /* ActionTypes */].DELETE_FAILURE: {
            return state;
        }
        default: {
            return state;
        }
    }
    var _a;
}
var selected = function (state) { return state.selected; };


/***/ }),

/***/ "../../../../../src/app/reducers/stoppoints-discovery-reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adapter; });
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selected; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_entity__ = __webpack_require__("../../../../@ngrx/entity/@ngrx/entity.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_stoppoints_discovery_actions__ = __webpack_require__("../../../../../src/app/actions/stoppoints-discovery-actions.ts");


var adapter = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_entity__["a" /* createEntityAdapter */])({
    selectId: function (t) { return t.StopPointRef.value; }
});
var initialState = adapter.getInitialState({
    selected: null,
    recordsFiltered: 0,
    recordsTotal: 0,
    draw: 0
});
function reducer(state, actions) {
    if (state === void 0) { state = initialState; }
    switch (actions.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_stoppoints_discovery_actions__["a" /* ActionTypes */].ALL_SUCCESS: {
            var entities_1 = [];
            actions.payload.data.map(function (t) { return entities_1.push(t); });
            var result = adapter.addAll(entities_1, state);
            result.recordsFiltered = actions.payload.recordsFiltered;
            result.recordsTotal = actions.payload.recordsTotal;
            result.draw = actions.payload.draw;
            result.selected = null;
            return result;
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_stoppoints_discovery_actions__["a" /* ActionTypes */].ALL_FAILURE: {
            return state;
        }
        default: {
            return state;
        }
    }
}
var selected = function (state) { return state.selected; };


/***/ }),

/***/ "../../../../../src/app/services/datatables.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTablesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs__ = __webpack_require__("../../../../qs/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataTablesService = (function () {
    function DataTablesService(http) {
        this.http = http;
    }
    DataTablesService_1 = DataTablesService;
    DataTablesService.prototype.all = function (url, data) {
        var size = DataTablesService_1.DATATABLES_SIZE;
        var begin = Math.floor(data.start / size);
        var end = Math.floor((data.start + data.length - 1) / size);
        var array = [];
        for (var page = begin; page <= end; page++) {
            var body = Object.assign({}, data, {
                start: page * size,
                length: size,
            });
            var value = url + '?' + __WEBPACK_IMPORTED_MODULE_3_qs__["stringify"](body, { allowDots: true });
            array.push(this.http.get(value, { observe: 'response' }));
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].forkJoin(array).map(this.reduce.bind(this, data)).catch(this.onError);
    };
    DataTablesService.prototype.reduce = function (data, response) {
        var result;
        var size = DataTablesService_1.DATATABLES_SIZE;
        for (var i = 0; i < response.length; i++) {
            var body = response[i].body;
            if (i == 0) {
                result = Object.assign({}, body, { data: [], draw: data.draw });
                var begin = data.start % size;
                var end = Math.min(size, data.start + data.length);
                result.data = body.data.slice(begin, end);
            }
            else if (i == response.length - 1) {
                var end = (data.start + data.length) % size;
                result.data = result.data.concat(body.data.slice(0, end));
            }
            else {
                result.data = result.data.concat(body.data.slice(0, size));
            }
        }
        return result;
    };
    DataTablesService.prototype.onError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw('failure');
    };
    DataTablesService.DATATABLES_SIZE = 1000;
    DataTablesService = DataTablesService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataTablesService);
    return DataTablesService;
    var DataTablesService_1;
}());



/***/ }),

/***/ "../../../../../src/app/services/situation-exchange.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SituationExchangeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SituationExchangeService = (function () {
    function SituationExchangeService(http) {
        this.http = http;
    }
    SituationExchangeService.prototype.create = function (url, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post(url, body, { observe: 'response', headers: headers })
            .map(function (response) { return response.body; })
            .catch(this.onError);
    };
    SituationExchangeService.prototype.read = function (url) {
        return this.http.get(url, { observe: 'response' })
            .map(function (response) { return response.body; })
            .catch(this.onError);
    };
    SituationExchangeService.prototype.update = function (url, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.put(url, body, { observe: 'response', headers: headers })
            .map(function (response) { return response.body; })
            .catch(this.onError);
    };
    SituationExchangeService.prototype.delete = function (url) {
        return this.http.delete(url, { observe: 'response', responseType: 'text', })
            .map(function (response) { return ""; })
            .catch(this.onError);
    };
    SituationExchangeService.prototype.onError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw('failure');
    };
    SituationExchangeService.DATATABLES_SIZE = 1000;
    SituationExchangeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SituationExchangeService);
    return SituationExchangeService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map