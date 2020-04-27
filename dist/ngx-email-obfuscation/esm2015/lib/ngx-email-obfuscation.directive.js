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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtYWlsLW9iZnVzY2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbWFpbC1vYmZ1c2NhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1haWwtb2JmdXNjYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFLdkYsTUFBTSxPQUFPLGdCQUFnQjtJQVkzQixZQUFvQixPQUFtQixFQUFVLFFBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVnBFLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFXbEIsQ0FBQztJQVIyQixZQUFZO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFLRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDakQsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFFdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXRELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLDhDQUE4QyxDQUFDLENBQUM7UUFDekYsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDakQsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksYUFBYSxHQUFHLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXRELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dGQTdDVSxnQkFBZ0I7cURBQWhCLGdCQUFnQjs7O2tEQUFoQixnQkFBZ0I7Y0FINUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7O2tCQU1FLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZW1haWxPYmZ1c2NhdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsT2JmdXNjYXRpb24gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFjdGl2YXRlZCA9IGZhbHNlO1xuICBlbWFpbFRleHQ6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZUVudGVyKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmF0ZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudW5vYmZ1c2NhdGUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vYmZ1c2NhdGUoKTtcbiAgfVxuXG4gIG9iZnVzY2F0ZSgpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBuYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgdGhpcy5lbWFpbFRleHQgPSB0ZXh0RWxlbWVudC5ub2RlVmFsdWU7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKG5hdGl2ZUVsZW1lbnQsIHRleHRFbGVtZW50KTtcblxuICAgIGNvbnN0IHNwYW4gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIHNwYW4pO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoc3BhbiwgJ3N0eWxlJywgJ3VuaWNvZGUtYmlkaTogYmlkaS1vdmVycmlkZTsgZGlyZWN0aW9uOiBydGw7Jyk7XG4gICAgY29uc3QgcmV2ZXJzZVRleHQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5lbWFpbFRleHQuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKSk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzcGFuLCByZXZlcnNlVGV4dCk7XG4gIH1cblxuICB1bm9iZnVzY2F0ZSgpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBuYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgdmFyIGVtYWlsVGV4dFNwbGl0QnlBdCA9IHRoaXMuZW1haWxUZXh0LnNwbGl0KCdAJyk7XG4gICAgdmFyIGVtYWlsVGV4dEh0bWwgPSAnPGI+JyArIGVtYWlsVGV4dFNwbGl0QnlBdFswXSArICc8L2I+JyArIGVtYWlsVGV4dFNwbGl0QnlBdFsxXTtcblxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQobmF0aXZlRWxlbWVudCwgdGV4dEVsZW1lbnQpO1xuXG4gICAgY29uc3QgYW5jaG9yID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCBhbmNob3IpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoYW5jaG9yLCB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5lbWFpbFRleHQpKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KGFuY2hvciwgJ2hyZWYnLCAnbWFpbHRvOicgKyB0aGlzLmVtYWlsVGV4dCk7XG4gIH1cblxufVxuIl19