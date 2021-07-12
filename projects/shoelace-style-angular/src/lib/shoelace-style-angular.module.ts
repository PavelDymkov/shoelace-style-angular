import { NgModule } from "@angular/core";

import {
    AnimationDirective,
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
