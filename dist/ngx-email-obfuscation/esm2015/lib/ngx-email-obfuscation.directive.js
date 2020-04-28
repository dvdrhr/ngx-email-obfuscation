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
            this.renderer.createText(('@' + emailTextSplitByAt[1]).split('').reverse().join('')) :
            this.renderer.createText((emailTextSplitByAt[0] + '@' + emailTextSplitByAt[1]).split('').reverse().join(''));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtYWlsLW9iZnVzY2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbWFpbC1vYmZ1c2NhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1haWwtb2JmdXNjYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLFlBQVksRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzlGLE1BQU0sT0FBTyxnQkFBZ0I7SUFjM0IsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVZwRSxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBV2xCLENBQUM7SUFSMkIsWUFBWTtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ2pELE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXRELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFD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RUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xIO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dGQWxFVSxnQkFBZ0I7cURBQWhCLGdCQUFnQjt1R0FBaEIsa0JBQWM7O2tEQUFkLGdCQUFnQjtjQUg1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7a0JBR0UsS0FBSzs7a0JBS0wsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZW1haWxPYmZ1c2NhdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsT2JmdXNjYXRpb24gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHByaW50S2V5Qm9sZCA6IGJvb2xlYW47XG5cbiAgYWN0aXZhdGVkID0gZmFsc2U7XG4gIGVtYWlsVGV4dDogc3RyaW5nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2YXRlZCkge1xuICAgICAgdGhpcy5hY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy51bm9iZnVzY2F0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9iZnVzY2F0ZSgpO1xuICB9XG5cbiAgb2JmdXNjYXRlKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IG5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICB0aGlzLmVtYWlsVGV4dCA9IHRleHRFbGVtZW50Lm5vZGVWYWx1ZTtcbiAgICB2YXIgZW1haWxUZXh0U3BsaXRCeUF0ID0gdGhpcy5lbWFpbFRleHQuc3BsaXQoJ0AnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKG5hdGl2ZUVsZW1lbnQsIHRleHRFbGVtZW50KTtcblxuICAgIGNvbnN0IHNwYW4gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIHNwYW4pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShzcGFuLCAnc3R5bGUnLCAndW5pY29kZS1iaWRpOiBiaWRpLW92ZXJyaWRlOyBkaXJlY3Rpb246IHJ0bDsnKTtcbiAgICBjb25zdCByZXZlcnNlVGV4dCA9IHRoaXMucHJpbnRLZXlCb2xkID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCgoJ0AnICsgZW1haWxUZXh0U3BsaXRCeUF0WzFdKS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoKGVtYWlsVGV4dFNwbGl0QnlBdFswXSArICdAJyArIGVtYWlsVGV4dFNwbGl0QnlBdFsxXSkuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKSk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzcGFuLCByZXZlcnNlVGV4dCk7XG5cbiAgICBpZiAodGhpcy5wcmludEtleUJvbGQpIHtcbiAgICAgIHZhciBib2xkS2V5ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdiJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGJvbGRLZXksIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChlbWFpbFRleHRTcGxpdEJ5QXRbMF0uc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKSkpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzcGFuLCBib2xkS2V5KTtcbiAgICB9XG4gIH1cblxuICB1bm9iZnVzY2F0ZSgpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBuYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgdmFyIGVtYWlsVGV4dFNwbGl0QnlBdCA9IHRoaXMuZW1haWxUZXh0LnNwbGl0KCdAJyk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKG5hdGl2ZUVsZW1lbnQsIHRleHRFbGVtZW50KTtcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIGFuY2hvcik7XG5cbiAgICBpZiAodGhpcy5wcmludEtleUJvbGQpIHtcbiAgICAgIHZhciBib2xkS2V5ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdiJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGJvbGRLZXksIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChlbWFpbFRleHRTcGxpdEJ5QXRbMF0pKVxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChhbmNob3IsIGJvbGRLZXkpO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5wcmludEtleUJvbGQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoYW5jaG9yLCB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoJ0AnICsgZW1haWxUZXh0U3BsaXRCeUF0WzFdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoYW5jaG9yLCB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoZW1haWxUZXh0U3BsaXRCeUF0WzBdICsgJ0AnICsgZW1haWxUZXh0U3BsaXRCeUF0WzFdKSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShhbmNob3IsICdocmVmJywgJ21haWx0bzonICsgdGhpcy5lbWFpbFRleHQpO1xuICB9XG59XG4iXX0=