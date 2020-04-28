import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵlistener, ɵsetClassMetadata, Directive, Input, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

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
        var emailTextSplitByAt = this.emailText.split('@');
        this.renderer.removeChild(nativeElement, textElement);
        var span = this.renderer.createElement('span');
        this.renderer.appendChild(nativeElement, span);
        this.renderer.setProperty(span, 'style', 'unicode-bidi: bidi-override; direction: rtl;');
        var reverseText = this.printKeyBold ?
            this.renderer.createText(('@' + emailTextSplitByAt[1]).split('').reverse().join('')) :
            this.renderer.createText((emailTextSplitByAt[0] + '@' + emailTextSplitByAt[1]).split('').reverse().join(''));
        this.renderer.appendChild(span, reverseText);
        if (this.printKeyBold) {
            var boldKey = this.renderer.createElement('b');
            this.renderer.appendChild(boldKey, this.renderer.createText(emailTextSplitByAt[0].split('').reverse().join('')));
            this.renderer.appendChild(span, boldKey);
        }
    };
    EmailObfuscation.prototype.unobfuscate = function () {
        var nativeElement = this.element.nativeElement;
        var textElement = nativeElement.childNodes[0];
        var emailTextSplitByAt = this.emailText.split('@');
        this.renderer.removeChild(nativeElement, textElement);
        var anchor = this.renderer.createElement('a');
        this.renderer.appendChild(nativeElement, anchor);
        if (this.printKeyBold) {
            var boldKey = this.renderer.createElement('b');
            this.renderer.appendChild(boldKey, this.renderer.createText(emailTextSplitByAt[0]));
            this.renderer.appendChild(anchor, boldKey);
        }
        if (this.printKeyBold) {
            this.renderer.appendChild(anchor, this.renderer.createText('@' + emailTextSplitByAt[1]));
        }
        else {
            this.renderer.appendChild(anchor, this.renderer.createText(emailTextSplitByAt[0] + '@' + emailTextSplitByAt[1]));
        }
        this.renderer.setProperty(anchor, 'href', 'mailto:' + this.emailText);
    };
    EmailObfuscation.ɵfac = function EmailObfuscation_Factory(t) { return new (t || EmailObfuscation)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    EmailObfuscation.ɵdir = ɵɵdefineDirective({ type: EmailObfuscation, selectors: [["", "emailObfuscation", ""]], hostBindings: function EmailObfuscation_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("mouseenter", function EmailObfuscation_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); });
        } }, inputs: { printKeyBold: "printKeyBold" } });
    return EmailObfuscation;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(EmailObfuscation, [{
        type: Directive,
        args: [{
                selector: '[emailObfuscation]'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { printKeyBold: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }] }); })();

var NgxEmailObfuscationModule = /** @class */ (function () {
    function NgxEmailObfuscationModule() {
    }
    NgxEmailObfuscationModule.ɵmod = ɵɵdefineNgModule({ type: NgxEmailObfuscationModule });
    NgxEmailObfuscationModule.ɵinj = ɵɵdefineInjector({ factory: function NgxEmailObfuscationModule_Factory(t) { return new (t || NgxEmailObfuscationModule)(); }, imports: [[]] });
    return NgxEmailObfuscationModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxEmailObfuscationModule, { declarations: [EmailObfuscation], exports: [EmailObfuscation] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxEmailObfuscationModule, [{
        type: NgModule,
        args: [{
                declarations: [EmailObfuscation],
                imports: [],
                exports: [EmailObfuscation]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-email-obfuscation
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EmailObfuscation, NgxEmailObfuscationModule };
//# sourceMappingURL=ngx-email-obfuscation.js.map
