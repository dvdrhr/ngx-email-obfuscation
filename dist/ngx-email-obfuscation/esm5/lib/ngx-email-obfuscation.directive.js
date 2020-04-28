import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
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
    EmailObfuscation.ɵfac = function EmailObfuscation_Factory(t) { return new (t || EmailObfuscation)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    EmailObfuscation.ɵdir = i0.ɵɵdefineDirective({ type: EmailObfuscation, selectors: [["", "emailObfuscation", ""]], hostBindings: function EmailObfuscation_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function EmailObfuscation_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); });
        } }, inputs: { printKeyBold: "printKeyBold" } });
    return EmailObfuscation;
}());
export { EmailObfuscation };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtYWlsLW9iZnVzY2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbWFpbC1vYmZ1c2NhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1haWwtb2JmdXNjYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLFlBQVksRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTlGO0lBaUJFLDBCQUFvQixPQUFtQixFQUFVLFFBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVnBFLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFXbEIsQ0FBQztJQVIyQix1Q0FBWSxHQUF4QztRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFLRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0UsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDakQsSUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDdkMsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFdEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENB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QUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEg7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztvRkFsRVUsZ0JBQWdCO3lEQUFoQixnQkFBZ0I7MkdBQWhCLGtCQUFjOzsyQkFMM0I7Q0F3RUMsQUF0RUQsSUFzRUM7U0FuRVksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FINUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7O2tCQUdFLEtBQUs7O2tCQUtMLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2VtYWlsT2JmdXNjYXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBFbWFpbE9iZnVzY2F0aW9uIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwcmludEtleUJvbGQgOiBib29sZWFuO1xuXG4gIGFjdGl2YXRlZCA9IGZhbHNlO1xuICBlbWFpbFRleHQ6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZUVudGVyKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmF0ZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudW5vYmZ1c2NhdGUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vYmZ1c2NhdGUoKTtcbiAgfVxuXG4gIG9iZnVzY2F0ZSgpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBuYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgdGhpcy5lbWFpbFRleHQgPSB0ZXh0RWxlbWVudC5ub2RlVmFsdWU7XG4gICAgdmFyIGVtYWlsVGV4dFNwbGl0QnlBdCA9IHRoaXMuZW1haWxUZXh0LnNwbGl0KCdAJyk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50LCB0ZXh0RWxlbWVudCk7XG5cbiAgICBjb25zdCBzcGFuID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCBzcGFuKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoc3BhbiwgJ3N0eWxlJywgJ3VuaWNvZGUtYmlkaTogYmlkaS1vdmVycmlkZTsgZGlyZWN0aW9uOiBydGw7Jyk7XG4gICAgY29uc3QgcmV2ZXJzZVRleHQgPSB0aGlzLnByaW50S2V5Qm9sZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoKCdAJyArIGVtYWlsVGV4dFNwbGl0QnlBdFsxXSkuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KChlbWFpbFRleHRTcGxpdEJ5QXRbMF0gKyAnQCcgKyBlbWFpbFRleHRTcGxpdEJ5QXRbMV0pLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3BhbiwgcmV2ZXJzZVRleHQpO1xuXG4gICAgaWYgKHRoaXMucHJpbnRLZXlCb2xkKSB7XG4gICAgICB2YXIgYm9sZEtleSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnYicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChib2xkS2V5LCB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoZW1haWxUZXh0U3BsaXRCeUF0WzBdLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykpKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3BhbiwgYm9sZEtleSk7XG4gICAgfVxuICB9XG5cbiAgdW5vYmZ1c2NhdGUoKSB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gbmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgIHZhciBlbWFpbFRleHRTcGxpdEJ5QXQgPSB0aGlzLmVtYWlsVGV4dC5zcGxpdCgnQCcpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50LCB0ZXh0RWxlbWVudCk7XG4gICAgY29uc3QgYW5jaG9yID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCBhbmNob3IpO1xuXG4gICAgaWYgKHRoaXMucHJpbnRLZXlCb2xkKSB7XG4gICAgICB2YXIgYm9sZEtleSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnYicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChib2xkS2V5LCB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoZW1haWxUZXh0U3BsaXRCeUF0WzBdKSlcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoYW5jaG9yLCBib2xkS2V5KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucHJpbnRLZXlCb2xkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGFuY2hvciwgdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KCdAJyArIGVtYWlsVGV4dFNwbGl0QnlBdFsxXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGFuY2hvciwgdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KGVtYWlsVGV4dFNwbGl0QnlBdFswXSArICdAJyArIGVtYWlsVGV4dFNwbGl0QnlBdFsxXSkpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoYW5jaG9yLCAnaHJlZicsICdtYWlsdG86JyArIHRoaXMuZW1haWxUZXh0KTtcbiAgfVxufVxuIl19