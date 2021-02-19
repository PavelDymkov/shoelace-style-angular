import { NgModule } from "@angular/core";

import {
    ChangeDirective,
    ClearableDirective,
    ClosableDirective,
    FormDirective,
    LoadDirective,
    OpenDirective,
    OverlayDirective,
    SelectDirective,
    ShowHideDirective,
    TabGroupShowHideDirective,
} from "./directives";

@NgModule({
    declarations: [
        ChangeDirective,
        ClearableDirective,
        ClosableDirective,
        FormDirective,
        LoadDirective,
        OpenDirective,
        OverlayDirective,
        SelectDirective,
        ShowHideDirective,
        TabGroupShowHideDirective,
    ],
    exports: [
        ChangeDirective,
        ClearableDirective,
        ClosableDirective,
        FormDirective,
        LoadDirective,
        OpenDirective,
        OverlayDirective,
        SelectDirective,
        ShowHideDirective,
        TabGroupShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
