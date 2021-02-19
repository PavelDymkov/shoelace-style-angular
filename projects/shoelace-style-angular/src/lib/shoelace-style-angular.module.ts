import { NgModule } from "@angular/core";

import {
    ChangeDirective,
    ClearableDirective,
    ClosableDirective,
    FormDirective,
    LoadDirective,
    OverlayDirective,
    SelectDirective,
    ShowHideDirective,
    ShoelaceStyleTabGroupShowHideDirective,
} from "./directives";

@NgModule({
    declarations: [
        ChangeDirective,
        ClearableDirective,
        ClosableDirective,
        FormDirective,
        LoadDirective,
        OverlayDirective,
        SelectDirective,
        ShowHideDirective,
        ShoelaceStyleTabGroupShowHideDirective,
    ],
    exports: [
        ChangeDirective,
        ClearableDirective,
        ClosableDirective,
        FormDirective,
        LoadDirective,
        OverlayDirective,
        SelectDirective,
        ShowHideDirective,
        ShoelaceStyleTabGroupShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
