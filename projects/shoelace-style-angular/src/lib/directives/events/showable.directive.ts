import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-alert,
        sl-details,
        sl-dialog,
        sl-drawer,
        sl-dropdown,
        sl-tooltip,
    `,
})
export class ShowableDirective {
    @Output("sl-show")
    show = new EventEmitter<CustomEvent<{}>>();

    @Output("sl-after-show")
    afterShow = new EventEmitter<CustomEvent<{}>>();

    @Output("sl-hide")
    hide = new EventEmitter<CustomEvent<{}>>();

    @Output("sl-after-hide")
    afterHide = new EventEmitter<CustomEvent<{}>>();
}

@Directive({
    selector: `
        sl-tab-group,
    `,
})
export class ShowableTabsDirective {
    @Output("sl-tab-show")
    show = new EventEmitter<CustomEvent<{}>>();

    @Output("sl-tab-hide")
    hide = new EventEmitter<CustomEvent<{}>>();
}
