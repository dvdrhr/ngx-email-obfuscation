(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-email-obfuscation', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ngx-email-obfuscation'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var EmailObfuscation = /** @class */ (function () {
        function EmailObfuscation(element, renderer) {
            this.element = element;
            this.renderer = renderer;
            this.activated = false;
        }
        EmailObfuscation.prototype.onMouseEnter = function () {
            if (!this.activated) {
                this.activated = true;
                this.unobfuscate();
            }
        };
        EmailObfuscation.prototype.ngOnInit = function () {
            this.obfuscate();
        };
        EmailObfuscation.prototype.obfuscate = function () {
            var nativeElement = this.element.nativeElement;
            var textElement = nativeElement.childNodes[0];
            this.emailText = textElement.nodeValue;
            this.renderer.removeChild(nativeElement, textElement);
            var span = this.renderer.createElement('span');
            this.renderer.appendChild(nativeElement, span);
            this.renderer.setProperty(span, 'style', 'unicode-bidi: bidi-override; direction: rtl;');
            var reverseText = this.renderer.createText(this.emailText.split('').reverse().join(''));
            this.renderer.appendChild(span, reverseText);
        };
        EmailObfuscation.prototype.unobfuscate = function () {
            var nativeElement = this.element.nativeElement;
            var textElement = nativeElement.childNodes[0];
            var emailTextSplitByAt = this.emailText.split('@');
            var emailTextHtml = '<b>' + emailTextSplitByAt[0] + '</b>' + emailTextSplitByAt[1];
            this.renderer.removeChild(nativeElement, textElement);
            var anchor = this.renderer.createElement('a');
            this.renderer.appendChild(nativeElement, anchor);
            this.renderer.appendChild(anchor, this.renderer.createText(this.emailText));
            this.renderer.setProperty(anchor, 'href', 'mailto:' + this.emailText);
        };
        EmailObfuscation.ɵfac = function EmailObfuscation_Factory(t) { return new (t || EmailObfuscation)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        EmailObfuscation.ɵdir = core.ɵɵdefineDirective({ type: EmailObfuscation, selectors: [["", "emailObfuscation", ""]], hostBindings: function EmailObfuscation_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("mouseenter", function EmailObfuscation_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); });
            } } });
        return EmailObfuscation;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(EmailObfuscation, [{
            type: core.Directive,
            args: [{
                    selector: '[emailObfuscation]'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, { onMouseEnter: [{
                type: core.HostListener,
                args: ['mouseenter']
            }] }); })();

    var NgxEmailObfuscationModule = /** @class */ (function () {
        function NgxEmailObfuscationModule() {
        }
        NgxEmailObfuscationModule.ɵmod = core.ɵɵdefineNgModule({ type: NgxEmailObfuscationModule });
        NgxEmailObfuscationModule.ɵinj = core.ɵɵdefineInjector({ factory: function NgxEmailObfuscationModule_Factory(t) { return new (t || NgxEmailObfuscationModule)(); }, imports: [[]] });
        return NgxEmailObfuscationModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NgxEmailObfuscationModule, { declarations: [EmailObfuscation], exports: [EmailObfuscation] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NgxEmailObfuscationModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [EmailObfuscation],
                    imports: [],
                    exports: [EmailObfuscation]
                }]
        }], null, null); })();

    exports.EmailObfuscation = EmailObfuscation;
    exports.NgxEmailObfuscationModule = NgxEmailObfuscationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-email-obfuscation.umd.js.map
