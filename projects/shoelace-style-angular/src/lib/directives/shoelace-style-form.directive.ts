import {
    Directive,
    Input,
    OnInit,
    OnDestroy,
    ElementRef,
    EventEmitter,
} from "@angular/core";
import { FormGroup } from "@angular/forms";

@Directive({
    selector: "sl-form",
    outputs: ["onSubmit"],
})
export class ShoelaceStyleFormDirective implements OnInit, OnDestroy {
    @Input()
    formGroup: FormGroup;

    onSubmit = new EventEmitter<void>();

    private readonly element = this.elementRef.nativeElement;

    private readonly onSlSubmit = () => {
        this.onSubmit.emit();
    };

    constructor(private elementRef: ElementRef<HTMLElement>) {}

    ngOnInit(): void {
        this.element.addEventListener("slSubmit", this.onSlSubmit, false);
    }

    ngOnDestroy(): void {
        this.element.removeEventListener("slSubmit", this.onSlSubmit);
    }
}
