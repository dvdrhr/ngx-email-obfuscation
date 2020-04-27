import { Directive, HostListener } from '@angular/core';
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
    EmailObfuscation.ɵfac = function EmailObfuscation_Factory(t) { return new (t || EmailObfuscation)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    EmailObfuscation.ɵdir = i0.ɵɵdefineDirective({ type: EmailObfuscation, selectors: [["", "emailObfuscation", ""]], hostBindings: function EmailObfuscation_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function EmailObfuscation_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); });
        } } });
    return EmailObfuscation;
}());
export { EmailObfuscation };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmailObfuscation, [{
        type: Directive,
        args: [{
                selector: '[emailObfuscation]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtYWlsLW9iZnVzY2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbWFpbC1vYmZ1c2NhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1haWwtb2JmdXNjYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkY7SUFlRSwwQkFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVZwRSxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBV2xCLENBQUM7SUFSMkIsdUNBQVksR0FBeEM7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBS0QsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBRXZDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV0RCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSw4Q0FBOEMsQ0FBQyxDQUFDO1FBQ3pGLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLGFBQWEsR0FBRyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5GLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV0RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO29GQTdDVSxnQkFBZ0I7eURBQWhCLGdCQUFnQjs7OzJCQUw3QjtDQW9EQyxBQWxERCxJQWtEQztTQS9DWSxnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUg1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7a0JBTUUsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlbWFpbE9iZnVzY2F0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgRW1haWxPYmZ1c2NhdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYWN0aXZhdGVkID0gZmFsc2U7XG4gIGVtYWlsVGV4dDogc3RyaW5nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2YXRlZCkge1xuICAgICAgdGhpcy5hY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy51bm9iZnVzY2F0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9iZnVzY2F0ZSgpO1xuICB9XG5cbiAgb2JmdXNjYXRlKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IG5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICB0aGlzLmVtYWlsVGV4dCA9IHRleHRFbGVtZW50Lm5vZGVWYWx1ZTtcblxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQobmF0aXZlRWxlbWVudCwgdGV4dEVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc3BhbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobmF0aXZlRWxlbWVudCwgc3Bhbik7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShzcGFuLCAnc3R5bGUnLCAndW5pY29kZS1iaWRpOiBiaWRpLW92ZXJyaWRlOyBkaXJlY3Rpb246IHJ0bDsnKTtcbiAgICBjb25zdCByZXZlcnNlVGV4dCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLmVtYWlsVGV4dC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHNwYW4sIHJldmVyc2VUZXh0KTtcbiAgfVxuXG4gIHVub2JmdXNjYXRlKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IG5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICB2YXIgZW1haWxUZXh0U3BsaXRCeUF0ID0gdGhpcy5lbWFpbFRleHQuc3BsaXQoJ0AnKTtcbiAgICB2YXIgZW1haWxUZXh0SHRtbCA9ICc8Yj4nICsgZW1haWxUZXh0U3BsaXRCeUF0WzBdICsgJzwvYj4nICsgZW1haWxUZXh0U3BsaXRCeUF0WzFdO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50LCB0ZXh0RWxlbWVudCk7XG5cbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIGFuY2hvcik7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChhbmNob3IsIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLmVtYWlsVGV4dCkpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoYW5jaG9yLCAnaHJlZicsICdtYWlsdG86JyArIHRoaXMuZW1haWxUZXh0KTtcbiAgfVxuXG59XG4iXX0=