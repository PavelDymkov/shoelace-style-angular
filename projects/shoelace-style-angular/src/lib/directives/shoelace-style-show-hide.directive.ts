import {
    Directive,
    ElementRef,
    OnInit,
    OnDestroy,
    Output,
    EventEmitter,
} from "@angular/core";

@Directive({
    selector: `
        sl-alert,
        sl-color-picker,
        sl-dialog,
        sl-drawer,
        sl-dropdown,
        sl-tooltip,
    `,
})
export class ShoelaceStyleShowHideDirective implements OnInit, OnDestroy {
    @Output()
    onShow = new EventEmitter<void>();

    @Output()
    onAfterShow = new EventEmitter<void>();

    @Output()
    onHide = new EventEmitter<void>();

    @Output()
    onAfterHide = new EventEmitter<void>();

    private readonly element = this.elementRef.nativeElement;

    private readonly onSlShow = () => {
        this.onShow.emit();
    };

    private readonly onSlAfterShow = () => {
        this.onAfterShow.emit();
    };

    private readonly onSlHide = () => {
        this.onHide.emit();
    };

    private readonly onSlAfterHide = () => {
        this.onAfterHide.emit();
    };

    constructor(private elementRef: ElementRef<HTMLElement & { value: any }>) {}

    ngOnInit(): void {
        this.element.addEventListener("slShow", this.onSlShow, false);
        this.element.addEventListener("slHide", this.onSlHide, false);

        this.element.addEventListener("slAfterShow", this.onSlAfterShow, false);
        this.element.addEventListener("slAfterHide", this.onSlAfterHide, false);
    }

    ngOnDestroy(): void {
        this.element.removeEventListener("slShow", this.onSlShow);
        this.element.removeEventListener("slHide", this.onSlHide);

        this.element.removeEventListener("slAfterShow", this.onSlAfterShow);
        this.element.removeEventListener("slAfterHide", this.onSlAfterHide);
    }
}
