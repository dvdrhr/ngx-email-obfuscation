import { ElementRef, Renderer2, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EmailObfuscation implements OnInit {
    private element;
    private renderer;
    activated: boolean;
    emailText: string;
    onMouseEnter(): void;
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    obfuscate(): void;
    unobfuscate(): void;
    static ɵfac: i0.ɵɵFactoryDef<EmailObfuscation, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<EmailObfuscation, "[emailObfuscation]", never, {}, {}, never>;
}
