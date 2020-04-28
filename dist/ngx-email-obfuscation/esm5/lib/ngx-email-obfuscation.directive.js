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
            this.renderer.createText('@' + emailTextSplitByAt[1]).split('').reverse().join('') :
            this.renderer.createText(emailTextSplitByAt[0] + '@' + emailTextSplitByAt[1]).split('').reverse().join('');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtYWlsLW9iZnVzY2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbWFpbC1vYmZ1c2NhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1haWwtb2JmdXNjYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLFlBQVksRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTlGO0lBaUJFLDBCQUFvQixPQUFtQixFQUFVLFFBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVnBFLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFXbEIsQ0FBQztJQVIyQix1Q0FBWSxHQUF4QztRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFLRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0UsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDakQsSUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDdkMsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFdEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENB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QUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xIO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7b0ZBbEVVLGdCQUFnQjt5REFBaEIsZ0JBQWdCOzJHQUFoQixrQkFBYzs7MkJBTDNCO0NBd0VDLEFBdEVELElBc0VDO1NBbkVZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBSDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COztrQkFHRSxLQUFLOztrQkFLTCxZQUFZO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyLCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlbWFpbE9iZnVzY2F0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgRW1haWxPYmZ1c2NhdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcHJpbnRLZXlCb2xkIDogYm9vbGVhbjtcblxuICBhY3RpdmF0ZWQgPSBmYWxzZTtcbiAgZW1haWxUZXh0OiBzdHJpbmc7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIG9uTW91c2VFbnRlcigpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZhdGVkKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZCA9IHRydWU7XG4gICAgICB0aGlzLnVub2JmdXNjYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub2JmdXNjYXRlKCk7XG4gIH1cblxuICBvYmZ1c2NhdGUoKSB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gbmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgIHRoaXMuZW1haWxUZXh0ID0gdGV4dEVsZW1lbnQubm9kZVZhbHVlO1xuICAgIHZhciBlbWFpbFRleHRTcGxpdEJ5QXQgPSB0aGlzLmVtYWlsVGV4dC5zcGxpdCgnQCcpO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQobmF0aXZlRWxlbWVudCwgdGV4dEVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc3BhbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobmF0aXZlRWxlbWVudCwgc3Bhbik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHNwYW4sICdzdHlsZScsICd1bmljb2RlLWJpZGk6IGJpZGktb3ZlcnJpZGU7IGRpcmVjdGlvbjogcnRsOycpO1xuICAgIGNvbnN0IHJldmVyc2VUZXh0ID0gdGhpcy5wcmludEtleUJvbGQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KCdAJyArIGVtYWlsVGV4dFNwbGl0QnlBdFsxXSkuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoZW1haWxUZXh0U3BsaXRCeUF0WzBdICsgJ0AnICsgZW1haWxUZXh0U3BsaXRCeUF0WzFdKS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3BhbiwgcmV2ZXJzZVRleHQpO1xuXG4gICAgaWYgKHRoaXMucHJpbnRLZXlCb2xkKSB7XG4gICAgICB2YXIgYm9sZEtleSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnYicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChib2xkS2V5LCB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoZW1haWxUZXh0U3BsaXRCeUF0WzBdLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykpKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3BhbiwgYm9sZEtleSk7XG4gICAgfVxuICB9XG5cbiAgdW5vYmZ1c2NhdGUoKSB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gbmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgIHZhciBlbWFpbFRleHRTcGxpdEJ5QXQgPSB0aGlzLmVtYWlsVGV4dC5zcGxpdCgnQCcpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50LCB0ZXh0RWxlbWVudCk7XG4gICAgY29uc3QgYW5jaG9yID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCBhbmNob3IpO1xuXG4gICAgaWYgKHRoaXMucHJpbnRLZXlCb2xkKSB7XG4gICAgICB2YXIgYm9sZEtleSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnYicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChib2xkS2V5LCB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoZW1haWxUZXh0U3BsaXRCeUF0WzBdKSlcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoYW5jaG9yLCBib2xkS2V5KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucHJpbnRLZXlCb2xkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGFuY2hvciwgdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KCdAJyArIGVtYWlsVGV4dFNwbGl0QnlBdFsxXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGFuY2hvciwgdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KGVtYWlsVGV4dFNwbGl0QnlBdFswXSArICdAJyArIGVtYWlsVGV4dFNwbGl0QnlBdFsxXSkpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoYW5jaG9yLCAnaHJlZicsICdtYWlsdG86JyArIHRoaXMuZW1haWxUZXh0KTtcbiAgfVxufVxuIl19