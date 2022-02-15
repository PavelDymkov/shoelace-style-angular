import { Directive, ElementRef, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SlInput } from "@shoelace-style/shoelace";
import { not } from "logical-not";

@Directive({
    selector: `
        sl-input[type=number][formControlName],
        sl-input[type=number][formControl],
        sl-range[formControlName],
        sl-range[formControl],
        sl-rating[formControlName],
        sl-rating[formControl],
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormControlNumber),
            multi: true,
        },
    ],
})
export class FormControlNumber implements ControlValueAccessor {
    constructor(private hostRef: ElementRef<SlInput>) {}

    writeValue(value: any): void {
        if (not(Number.isNaN(value)) && Number.isFinite(value)) {
            this.hostRef.nativeElement.value = String(value);
        } else {
            this.hostRef.nativeElement.value = "";
        }
    }

    registerOnChange(callback: any): void {
        const host = this.hostRef.nativeElement;
        const event = host.tagName === "SL-INPUT" ? "sl-input" : "sl-change";

        host.addEventListener(event, () => {
            callback(host.value === "" ? null : parseFloat(host.value));
        });
    }

    registerOnTouched(callback: any): void {
        this.hostRef.nativeElement.addEventListener("sl-blur", callback);
    }

    setDisabledState(disabled: boolean): void {
        this.hostRef.nativeElement.disabled = disabled;
    }
}
