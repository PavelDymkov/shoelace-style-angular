import {
    Directive,
    ElementRef,
    InjectionToken,
    Inject,
    OnInit,
} from "@angular/core";
import { SlAlert } from "@shoelace-style/shoelace";

export interface ToastOptions {
    duration: number;
    closable?: boolean;
}

export const SL_TOAST_OPTIONS = new InjectionToken<ToastOptions>(
    "SL_TOAST_OPTIONS",
);

@Directive({ selector: "sl-alert[toast]" })
export class ToastDirective implements OnInit {
    constructor(
        private elementRef: ElementRef<SlAlert>,
        @Inject(SL_TOAST_OPTIONS) private options: ToastOptions,
    ) {}

    ngOnInit(): void {
        const alert = this.elementRef.nativeElement;

        alert.duration = this.options.duration;
        alert.closable = Boolean(this.options.closable);
    }
}
