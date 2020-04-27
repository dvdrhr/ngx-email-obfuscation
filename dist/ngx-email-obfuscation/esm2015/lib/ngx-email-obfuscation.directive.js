import { Directive, HostListener } from '@angular/core';
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
        this.renderer.removeChild(nativeElement, textElement);
        const span = this.renderer.createElement('span');
        this.renderer.appendChild(nativeElement, span);
        this.renderer.setProperty(span, 'style', 'unicode-bidi: bidi-override; direction: rtl;');
        const reverseText = this.renderer.createText(this.emailText.split('').reverse().join(''));
        this.renderer.appendChild(span, reverseText);
    }
    unobfuscate() {
        const nativeElement = this.element.nativeElement;
        const textElement = nativeElement.childNodes[0];
        var emailTextSplitByAt = this.emailText.split('@');
        var emailTextHtml = '<b>' + emailTextSplitByAt[0] + '</b>' + emailTextSplitByAt[1];
        this.renderer.removeChild(nativeElement, textElement);
        const anchor = this.renderer.createElement('a');
        this.renderer.appendChild(nativeElement, anchor);
        this.renderer.appendChild(anchor, this.renderer.createText(this.emailText));
        this.renderer.setProperty(anchor, 'href', 'mailto:' + this.emailText);
    }
}
EmailObfuscation.ɵfac = function EmailObfuscation_Factory(t) { return new (t || EmailObfuscation)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
EmailObfuscation.ɵdir = i0.ɵɵdefineDirective({ type: EmailObfuscation, selectors: [["", "emailObfuscation", ""]], hostBindings: function EmailObfuscation_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function EmailObfuscation_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); });
    } } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmailObfuscation, [{
        type: Directive,
        args: [{
                selector: '[emailObfuscation]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtYWlsLW9iZnVzY2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbWFpbC1vYmZ1c2NhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1haWwtb2JmdXNjYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFLdkYsTUFBTSxPQUFPLGdCQUFnQjtJQVkzQixZQUFvQixPQUFtQixFQUFVLFFBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVnBFLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFXbEIsQ0FBQztJQVIyQixZQUFZO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFLRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDakQsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFFdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXRELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLDhDQUE4QyxDQUFDLENBQUM7UUFDekYsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDakQsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksYUFBYSxHQUFHLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXRELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dGQTdDVSxnQkFBZ0I7cURBQWhCLGdCQUFnQjt1R0FBaEIsa0JBQWM7O2tEQUFkLGdCQUFnQjtjQUg1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7a0JBTUUsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlbWFpbE9iZnVzY2F0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgRW1haWxPYmZ1c2NhdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYWN0aXZhdGVkID0gZmFsc2U7XG4gIGVtYWlsVGV4dDogc3RyaW5nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2YXRlZCkge1xuICAgICAgdGhpcy5hY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy51bm9iZnVzY2F0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9iZnVzY2F0ZSgpO1xuICB9XG5cbiAgb2JmdXNjYXRlKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IG5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICB0aGlzLmVtYWlsVGV4dCA9IHRleHRFbGVtZW50Lm5vZGVWYWx1ZTtcblxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQobmF0aXZlRWxlbWVudCwgdGV4dEVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc3BhbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobmF0aXZlRWxlbWVudCwgc3Bhbik7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShzcGFuLCAnc3R5bGUnLCAndW5pY29kZS1iaWRpOiBiaWRpLW92ZXJyaWRlOyBkaXJlY3Rpb246IHJ0bDsnKTtcbiAgICBjb25zdCByZXZlcnNlVGV4dCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLmVtYWlsVGV4dC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHNwYW4sIHJldmVyc2VUZXh0KTtcbiAgfVxuXG4gIHVub2JmdXNjYXRlKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IG5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICB2YXIgZW1haWxUZXh0U3BsaXRCeUF0ID0gdGhpcy5lbWFpbFRleHQuc3BsaXQoJ0AnKTtcbiAgICB2YXIgZW1haWxUZXh0SHRtbCA9ICc8Yj4nICsgZW1haWxUZXh0U3BsaXRCeUF0WzBdICsgJzwvYj4nICsgZW1haWxUZXh0U3BsaXRCeUF0WzFdO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50LCB0ZXh0RWxlbWVudCk7XG5cbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIGFuY2hvcik7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChhbmNob3IsIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLmVtYWlsVGV4dCkpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoYW5jaG9yLCAnaHJlZicsICdtYWlsdG86JyArIHRoaXMuZW1haWxUZXh0KTtcbiAgfVxuXG59XG4iXX0=