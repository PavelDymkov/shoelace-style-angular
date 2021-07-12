import { Routes } from "@angular/router";

import { AnimationComponent } from "./pages/animation/animation.component";
import { ChangeComponent } from "./pages/change/change.component";
import { ClearableComponent } from "./pages/clearable/clearable.component";
import { ClosableComponent } from "./pages/closable/closable.component";
import { FocusableComponent } from "./pages/focusable/focusable.component";
import { FormComponent } from "./pages/form/form.component";
import { GreeterComponent } from "./pages/greeter/greeter.component";
import { LoadComponent } from "./pages/load/load.component";
import { OpenComponent } from "./pages/open/open.component";
import { OverlayComponent } from "./pages/overlay/overlay.component";
import { ResizeComponent } from "./pages/resize/resize.component";
import { SelectComponent } from "./pages/select/select.component";
import { ShowHideComponent } from "./pages/show-hide/show-hide.component";
import { ValidationComponent } from "./pages/validation/validation.component";

enum Route {
    Animation = "animation",
    Change = "change",
    Clearable = "clearable",
    Closable = "closable",
    Focusable = "focusable",
    Form = "form",
    Greeter = "greeter",
    Load = "load",
    Open = "open",
    Overlay = "overlay",
    Resize = "resize",
    Select = "select",
    ShowHide = "show-hide",
    Validation = "validation",
}

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: Route.Form,
    },
    {
        path: Route.Animation,
        component: AnimationComponent,
    },
    {
        path: Route.Change,
        component: ChangeComponent,
    },
    {
        path: Route.Clearable,
        component: ClearableComponent,
    },
    {
        path: Route.Closable,
        component: ClosableComponent,
    },
    {
        path: Route.Focusable,
        component: FocusableComponent,
    },
    {
        path: Route.Form,
        component: FormComponent,
    },
    {
        path: Route.Greeter,
        component: GreeterComponent,
    },
    {
        path: Route.Load,
        component: LoadComponent,
    },
    {
        path: Route.Open,
        component: OpenComponent,
    },
    {
        path: Route.Overlay,
        component: OverlayComponent,
    },
    {
        path: Route.Resize,
        component: ResizeComponent,
    },
    {
        path: Route.Select,
        component: SelectComponent,
    },
    {
        path: Route.ShowHide,
        component: ShowHideComponent,
    },
    {
        path: Route.Validation,
        component: ValidationComponent,
    },
];
