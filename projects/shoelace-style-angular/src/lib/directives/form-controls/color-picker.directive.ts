import { Directive, ElementRef, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SlColorPicker } from "@shoelace-style/shoelace";
import { not } from "logical-not";

@Directive({
    selector: `
        sl-color-picker[formControlName],
        sl-color-picker[formControl],
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormControlColorPicker),
            multi: true,
        },
    ],
})
export class FormControlColorPicker implements ControlValueAccessor {
    private inited = false;
    private initialValue: any = null;

    constructor(private hostRef: ElementRef<SlColorPicker>) {
        setTimeout(() => {
            this.inited = true;

            if (this.initialValue !== null) this.writeValue(this.initialValue);
        });
    }

    writeValue(value: any): void {
        if (not(this.inited)) {
            this.initialValue = value;

            return;
        }

        this.hostRef.nativeElement.value = String(value || "");
    }

    registerOnChange(callback: any): void {
        const host = this.hostRef.nativeElement;

        host.addEventListener("sl-change", () => {
            callback(host.value || null);
        });
    }

    registerOnTouched(_: any): void {}

    setDisabledState(disabled: boolean): void {
        this.hostRef.nativeElement.disabled = disabled;
    }
}
