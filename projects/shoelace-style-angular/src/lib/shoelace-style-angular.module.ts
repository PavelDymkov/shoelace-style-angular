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
    ToastDirective,
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
        ToastDirective,
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
        ToastDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
