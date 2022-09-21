import { Directive, ElementRef, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SlInput, SlTextarea } from "@shoelace-style/shoelace";

@Directive({
    selector: `
        sl-input:not([type=number])[formControlName],
        sl-input:not([type=number])[formControl],
        sl-textarea[formControlName],
        sl-textarea[formControl],
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormControlInput),
            multi: true,
        },
    ],
})
export class FormControlInput implements ControlValueAccessor {
    constructor(private hostRef: ElementRef<SlInput | SlTextarea>) {}

    writeValue(value: any): void {
        this.hostRef.nativeElement.value = String(value || "");
    }

    registerOnChange(callback: any): void {
        const host = this.hostRef.nativeElement;

        host.addEventListener("sl-input", () => {
            callback(host.value || null);
        });
    }

    registerOnTouched(callback: any): void {
        this.hostRef.nativeElement.addEventListener("sl-blur", callback);
    }

    setDisabledState(disabled: boolean): void {
        this.hostRef.nativeElement.disabled = disabled;
    }
}
