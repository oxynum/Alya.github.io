webpackJsonp([2,4],{

/***/ 135:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\" (click)=\"changeText(textToSplash)\">\n  <div class=\"alya-animation\" [ngClass]=\"{'accelerateEffect': move, 'stayLeft': stayLeft}\">\n  </div>\n  <p class=\"textSplah\">{{textToSplash}}</p> \n  <ul class=\"answers\" [ngClass]=\"{'hide': hideAnswers}\">\n    <li class=\"advise-card \"> <a href=\"https://www.produitsdebourse.bnpparibas.fr/produits/details/cac-40-turbo-call-infini/frbnpp00cvm8\">Turbo Call Infini CAC 40</a></li>\n    <li class=\"advise-card \"> <a href=\"https://www.produitsdebourse.bnpparibas.fr/produits/details/cac-40-warrant-call/nl0012300859\">WARRANT CALL CAC 40</a></li>\n  </ul>\n\n  <ul class=\"answers\" [ngClass]=\"{'hide': hideAnswers2}\">\n    <li class=\"advise-card highLight\"> <a href=\"https://mabanque.bnpparibas/rsc/contrib/document/docs/conditions-generales/cartes/Conditions-de-fonctionnement-livret-jeune-A-weezbee.pdf\">PDF:  Cartes Épargne bnp paribas</a></li>\n    <li class=\"advise-card \"> <a href=\"https://www.produitsdebourse.bnpparibas.fr/produits/details/cac-40-warrant-call/nl0012300859\">le plafond chez bnp paribas</a></li>\n    <li class=\"advise-card \"> <a href=\"https://www.produitsdebourse.bnpparibas.fr/produits/details/cac-40-warrant-call/nl0012300859\">Les comptes jeunes</a></li>\n  </ul>\n</div>\n\n<!--<button type=\"1\" (click)=\"changeText1()\">Listen</button><button type=\"2\" (click)=\"changeText3()\">Quiet</button><button type=\"3\" (click)=\"changeText2()\">derniers produits</button><button type=\"3\" (click)=\"changeText4()\">Mme Michu</button><button type=\"3\" (click)=\"present()\">Presente toi</button><button type=\"3\" (click)=\"hello()\">Bonjour</button>-->\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(79);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_artyom_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_artyom_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_artyom_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Option A
//import { ArtyomBuilder } from 'artyom.js';  // Option B
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.artyom = __WEBPACK_IMPORTED_MODULE_1_artyom_js__["ArtyomBuilder"].getInstance();
        this.authorize = false;
        this.move = false;
        this.stayLeft = false;
        this.hideAnswers = true;
        this.hideAnswers2 = true;
        this.init = {
            lang: 'fr-FR',
            soundex: true,
            continuous: true,
            debug: false,
            listen: true // Start listening when this function is triggered
        };
        this.artyom.addCommands({
            indexes: ["* présente toi", "Qui es-tu ?", "Peux-tu te présenter ?"],
            action: function (i) {
                _this.artyom.say('Je mappel Alya, ton assistante personnelle.');
            }
        });
        // http://www.marmiton.org/recettes/recherche.aspx?s=tartiflette&type=all
        this.artyom.addCommands({
            indexes: ["Je voudrais manger * ", "J'aimerais manger *"],
            action: function (i) {
                _this.artyom.say('Très bien, je vous donne ce que j\'ai trouvé sur la tartiflette, depuis ma base de connaissance.');
                _this.artyom.say('Je vous fais parvenir la liste des ingrédients sur votre smartphone.');
                _this.artyom.say('Je constate que le casino le plus proche ferme dans moins de 30 minutes.', { onEnd: function () {
                        _this.artyom.say('Rudy, souhaitez-vous que j\'ajoute le Chardonnay à votre liste de courses ?');
                        _this.artyom.addCommands({
                            indexes: ["Oui", "Non"],
                            action: function (i) {
                                if (i == 0) {
                                    _this.artyom.say('Très bien, le Chardonnay a été ajouté à votre liste de courses.', {
                                        onEnd: function () {
                                            _this.artyom.clearGarbageCollection();
                                        }
                                    });
                                }
                                else {
                                    _this.artyom.say('D\'accord.', {
                                        onEnd: function () {
                                            _this.artyom.clearGarbageCollection();
                                        }
                                    });
                                }
                            }
                        });
                    } });
                window.open("http://www.marmiton.org/recettes/recette_tartiflette-facile_15733.aspx", "_blank");
            }
        });
        this.artyom.addCommands({
            indexes: ["As-tu une blague ?"],
            action: function (i) {
                _this.artyom.say('A quoi sert internet Explorer ?');
                _this.artyom.say('A télécharger google chrome.');
                _this.artyom.say('LOL');
            }
        });
        this.artyom.addCommands({
            indexes: ["Pates à la carbonara"],
            action: function (i) {
                _this.artyom.say("Rudy, c'est une bonne idée, je vous fait parvenir la liste des ingrédients pour réaliser ce plat, un instant");
                _this.artyom.say("Cependant je constate que vous diner avec Chloé ce soir, mais elle est allergique au oignons, je vous propose de suivre la recette marmitton hyppoalergenique.");
            }
        });
        // Questions
        this.artyom.addCommands({
            indexes: ["J'ai une question", "J'ai plusieurs questions", "J'ai * questions"],
            action: function (i, wildcard) {
                console.log(wildcard);
                _this.artyom.say("Je suis à votre écoute.");
            }
        });
        // Thanks
        this.artyom.addCommands({
            indexes: ["Merci à tous", "Merci"],
            action: function (i) {
                if (i == 0) {
                    _this.artyom.say("Merci à vous, et maintenant, allons nourir le monde de diversité.");
                }
                else {
                    _this.artyom.say("Tout le plaisir est pour moi.");
                }
            }
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.artyom.initialize({
            lang: 'fr-FR',
            soundex: true,
            continuous: true,
            debug: false,
            listen: true // Start listening when this function is triggered
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'alya-cp',
        template: __webpack_require__(135)
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[162]);
//# sourceMappingURL=main.bundle.js.map