import { NgModule } from "@angular/core";

import {
    AnimationDirective,
    AutofocusDirective,
    ChangeDirective,
    ClosableDirective,
    FormDirective,
    LoadDirective,
    OpenDirective,
    OverlayDirective,
    RemovableDirective,
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
        ClosableDirective,
        FormDirective,
        LoadDirective,
        OpenDirective,
        OverlayDirective,
        RemovableDirective,
        ResizeDirective,
        SelectDirective,
        ShowHideDirective,
        TabGroupShowHideDirective,
    ],
    exports: [
        AnimationDirective,
        AutofocusDirective,
        ChangeDirective,
        ClosableDirective,
        FormDirective,
        LoadDirective,
        OpenDirective,
        OverlayDirective,
        RemovableDirective,
        ResizeDirective,
        SelectDirective,
        ShowHideDirective,
        TabGroupShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
