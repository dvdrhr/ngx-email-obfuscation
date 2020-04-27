import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵlistener, ɵsetClassMetadata, Directive, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class EmailObfuscation {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.activated = false;
    }
    onMouseEnter() {
        if (!this.activated) {
            this.activated = true;
            this.unobfuscate();
        }
    }
    ngOnInit() {
        this.obfuscate();
    }
    obfuscate() {
        const nativeElement = this.element.nativeElement;
        const textElement = nativeElement.childNodes[0];
        this.emailText = textElement.nodeValue;
        var emailTextSplitByAt = this.emailText.split('@');
        this.renderer.removeChild(nativeElement, textElement);
        const span = this.renderer.createElement('span');
        this.renderer.appendChild(nativeElement, span);
        var boldKey = this.renderer.createElement('b');
        this.renderer.appendChild(boldKey, this.renderer.createText(emailTextSplitByAt[0].split('').reverse().join('')));
        this.renderer.setProperty(span, 'style', 'unicode-bidi: bidi-override; direction: rtl;');
        const reverseText = this.renderer.createText(('@' + emailTextSplitByAt[1]).split('').reverse().join(''));
        this.renderer.appendChild(span, reverseText);
        this.renderer.appendChild(span, boldKey);
    }
    unobfuscate() {
        const nativeElement = this.element.nativeElement;
        const textElement = nativeElement.childNodes[0];
        var emailTextSplitByAt = this.emailText.split('@');
        var boldKey = this.renderer.createElement('b');
        this.renderer.appendChild(boldKey, this.renderer.createText(emailTextSplitByAt[0]));
        this.renderer.removeChild(nativeElement, textElement);
        const anchor = this.renderer.createElement('a');
        this.renderer.appendChild(nativeElement, anchor);
        this.renderer.appendChild(anchor, boldKey);
        this.renderer.appendChild(anchor, this.renderer.createText('@' + emailTextSplitByAt[1]));
        this.renderer.setProperty(anchor, 'href', 'mailto:' + this.emailText);
    }
}
EmailObfuscation.ɵfac = function EmailObfuscation_Factory(t) { return new (t || EmailObfuscation)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
EmailObfuscation.ɵdir = ɵɵdefineDirective({ type: EmailObfuscation, selectors: [["", "emailObfuscation", ""]], hostBindings: function EmailObfuscation_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function EmailObfuscation_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); });
    } } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EmailObfuscation, [{
        type: Directive,
        args: [{
                selector: '[emailObfuscation]'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }] }); })();

class NgxEmailObfuscationModule {
}
NgxEmailObfuscationModule.ɵmod = ɵɵdefineNgModule({ type: NgxEmailObfuscationModule });
NgxEmailObfuscationModule.ɵinj = ɵɵdefineInjector({ factory: function NgxEmailObfuscationModule_Factory(t) { return new (t || NgxEmailObfuscationModule)(); }, imports: [[]] });
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
