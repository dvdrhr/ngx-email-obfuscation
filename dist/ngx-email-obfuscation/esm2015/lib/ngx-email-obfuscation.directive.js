import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class EmailObfuscation {
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
        this.renderer.setProperty(span, 'style', 'unicode-bidi: bidi-override; direction: rtl;');
        const reverseText = this.printKeyBold ?
            this.renderer.createText('@' + emailTextSplitByAt[1]).split('').reverse().join('') :
            this.renderer.createText(emailTextSplitByAt[0] + '@' + emailTextSplitByAt[1]).split('').reverse().join('');
        this.renderer.appendChild(span, reverseText);
        if (this.printKeyBold) {
            var boldKey = this.renderer.createElement('b');
            this.renderer.appendChild(boldKey, this.renderer.createText(emailTextSplitByAt[0].split('').reverse().join('')));
            this.renderer.appendChild(span, boldKey);
        }
    }
    unobfuscate() {
        const nativeElement = this.element.nativeElement;
        const textElement = nativeElement.childNodes[0];
        var emailTextSplitByAt = this.emailText.split('@');
        this.renderer.removeChild(nativeElement, textElement);
        const anchor = this.renderer.createElement('a');
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
    }
}
EmailObfuscation.ɵfac = function EmailObfuscation_Factory(t) { return new (t || EmailObfuscation)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
EmailObfuscation.ɵdir = i0.ɵɵdefineDirective({ type: EmailObfuscation, selectors: [["", "emailObfuscation", ""]], hostBindings: function EmailObfuscation_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function EmailObfuscation_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); });
    } }, inputs: { printKeyBold: "printKeyBold" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmailObfuscation, [{
        type: Directive,
        args: [{
                selector: '[emailObfuscation]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { printKeyBold: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtYWlsLW9iZnVzY2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbWFpbC1vYmZ1c2NhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1haWwtb2JmdXNjYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLFlBQVksRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzlGLE1BQU0sT0FBTyxnQkFBZ0I7SUFjM0IsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVZwRSxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBV2xCLENBQUM7SUFSMkIsWUFBWTtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ2pELE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXRELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFD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Q0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsSDtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnRkFsRVUsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7dUdBQWhCLGtCQUFjOztrREFBZCxnQkFBZ0I7Y0FINUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7O2tCQUdFLEtBQUs7O2tCQUtMLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2VtYWlsT2JmdXNjYXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBFbWFpbE9iZnVzY2F0aW9uIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwcmludEtleUJvbGQgOiBib29sZWFuO1xuXG4gIGFjdGl2YXRlZCA9IGZhbHNlO1xuICBlbWFpbFRleHQ6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZUVudGVyKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmF0ZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudW5vYmZ1c2NhdGUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vYmZ1c2NhdGUoKTtcbiAgfVxuXG4gIG9iZnVzY2F0ZSgpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBuYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgdGhpcy5lbWFpbFRleHQgPSB0ZXh0RWxlbWVudC5ub2RlVmFsdWU7XG4gICAgdmFyIGVtYWlsVGV4dFNwbGl0QnlBdCA9IHRoaXMuZW1haWxUZXh0LnNwbGl0KCdAJyk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50LCB0ZXh0RWxlbWVudCk7XG5cbiAgICBjb25zdCBzcGFuID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCBzcGFuKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoc3BhbiwgJ3N0eWxlJywgJ3VuaWNvZGUtYmlkaTogYmlkaS1vdmVycmlkZTsgZGlyZWN0aW9uOiBydGw7Jyk7XG4gICAgY29uc3QgcmV2ZXJzZVRleHQgPSB0aGlzLnByaW50S2V5Qm9sZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoJ0AnICsgZW1haWxUZXh0U3BsaXRCeUF0WzFdKS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChlbWFpbFRleHRTcGxpdEJ5QXRbMF0gKyAnQCcgKyBlbWFpbFRleHRTcGxpdEJ5QXRbMV0pLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzcGFuLCByZXZlcnNlVGV4dCk7XG5cbiAgICBpZiAodGhpcy5wcmludEtleUJvbGQpIHtcbiAgICAgIHZhciBib2xkS2V5ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdiJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGJvbGRLZXksIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChlbWFpbFRleHRTcGxpdEJ5QXRbMF0uc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKSkpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzcGFuLCBib2xkS2V5KTtcbiAgICB9XG4gIH1cblxuICB1bm9iZnVzY2F0ZSgpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBuYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgdmFyIGVtYWlsVGV4dFNwbGl0QnlBdCA9IHRoaXMuZW1haWxUZXh0LnNwbGl0KCdAJyk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKG5hdGl2ZUVsZW1lbnQsIHRleHRFbGVtZW50KTtcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIGFuY2hvcik7XG5cbiAgICBpZiAodGhpcy5wcmludEtleUJvbGQpIHtcbiAgICAgIHZhciBib2xkS2V5ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdiJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGJvbGRLZXksIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChlbWFpbFRleHRTcGxpdEJ5QXRbMF0pKVxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChhbmNob3IsIGJvbGRLZXkpO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5wcmludEtleUJvbGQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoYW5jaG9yLCB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoJ0AnICsgZW1haWxUZXh0U3BsaXRCeUF0WzFdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoYW5jaG9yLCB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoZW1haWxUZXh0U3BsaXRCeUF0WzBdICsgJ0AnICsgZW1haWxUZXh0U3BsaXRCeUF0WzFdKSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShhbmNob3IsICdocmVmJywgJ21haWx0bzonICsgdGhpcy5lbWFpbFRleHQpO1xuICB9XG59XG4iXX0=