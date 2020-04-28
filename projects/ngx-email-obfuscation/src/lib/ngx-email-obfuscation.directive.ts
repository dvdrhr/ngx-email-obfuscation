import { Directive, ElementRef, Renderer2, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[emailObfuscation]'
})
export class EmailObfuscation implements OnInit {

  @Input() printKeyBold : boolean;

  activated = false;
  emailText: string;

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.activated) {
      this.activated = true;
      this.unobfuscate();
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {
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
      this.renderer.appendChild(boldKey, this.renderer.createText(emailTextSplitByAt[0]))
      this.renderer.appendChild(anchor, boldKey);
    }
    
    if (this.printKeyBold) {
      this.renderer.appendChild(anchor, this.renderer.createText('@' + emailTextSplitByAt[1]));
    } else {
      this.renderer.appendChild(anchor, this.renderer.createText(emailTextSplitByAt[0] + '@' + emailTextSplitByAt[1]));
    }

    this.renderer.setProperty(anchor, 'href', 'mailto:' + this.emailText);
  }
}
