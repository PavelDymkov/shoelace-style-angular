import { NgModule } from "@angular/core";

import {
    AnimationDirective,
    AutofocusDirective,
    ChangeDirective,
    ClearableDirective,
    ClosableDirective,
    FormDirective,
    LoadDirective,
    OpenDirective,
    OverlayDirective,
    ResizeDirective,
    SelectDirective,
    ShowHideDirective,
    TabGroupShowHideDirective,
} from "./directives";

@NgModule({
    declarations: [
        AnimationDirective,
        AutofocusDirective,
        ChangeDirective,
        ClearableDirective,
        ClosableDirective,
        FormDirective,
        LoadDirective,
        OpenDirective,
        OverlayDirective,
        ResizeDirective,
        SelectDirective,
        ShowHideDirective,
        TabGroupShowHideDirective,
    ],
    exports: [
        AnimationDirective,
        AutofocusDirective,
        ChangeDirective,
        ClearableDirective,
        ClosableDirective,
        FormDirective,
        LoadDirective,
        OpenDirective,
        OverlayDirective,
        ResizeDirective,
        SelectDirective,
        ShowHideDirective,
        TabGroupShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
