import { Directive, ElementRef, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SlSelect } from "@shoelace-style/shoelace";

@Directive({
    selector: `
        sl-select[formControlName],
        sl-select[formControl],
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormControlSelect),
            multi: true,
        },
    ],
})
export class FormControlSelect implements ControlValueAccessor {
    constructor(private hostRef: ElementRef<SlSelect>) {}

    writeValue(value: any): void {
        const host = this.hostRef.nativeElement;

        if (host.multiple) host.value = Array.isArray(value) ? value : "";
        else host.value = String(value || "");
    }

    registerOnChange(callback: any): void {
        const host = this.hostRef.nativeElement;

        host.addEventListener("sl-change", () => {
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
