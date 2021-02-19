import { Routes } from "@angular/router";

import { ChangeComponent } from "./pages/change/change.component";
import { ClearableComponent } from "./pages/clearable/clearable.component";
import { ClosableComponent } from "./pages/closable/closable.component";
import { FocusableComponent } from "./pages/focusable/focusable.component";
import { FormComponent } from "./pages/form/form.component";
import { LoadComponent } from "./pages/load/load.component";
import { OpenComponent } from "./pages/open/open.component";
import { OverlayComponent } from "./pages/overlay/overlay.component";
import { SelectComponent } from "./pages/select/select.component";
import { ShowHideComponent } from "./pages/show-hide/show-hide.component";
import { ValidationComponent } from "./pages/validation/validation.component";

enum ERoutes {
    Change = "change",
    Clearable = "clearable",
    Closable = "closable",
    Focusable = "focusable",
    Form = "form",
    Load = "load",
    Open = "open",
    Overlay = "overlay",
    Select = "select",
    ShowHide = "show-hide",
    Validation = "validation",
}

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: ERoutes.Form,
    },
    {
        path: ERoutes.Change,
        component: ChangeComponent,
    },
    {
        path: ERoutes.Clearable,
        component: ClearableComponent,
    },
    {
        path: ERoutes.Closable,
        component: ClosableComponent,
    },
    {
        path: ERoutes.Focusable,
        component: FocusableComponent,
    },
    {
        path: ERoutes.Form,
        component: FormComponent,
    },
    {
        path: ERoutes.Load,
        component: LoadComponent,
    },
    {
        path: ERoutes.Open,
        component: OpenComponent,
    },
    {
        path: ERoutes.Overlay,
        component: OverlayComponent,
    },
    {
        path: ERoutes.Select,
        component: SelectComponent,
    },
    {
        path: ERoutes.ShowHide,
        component: ShowHideComponent,
    },
    {
        path: ERoutes.Validation,
        component: ValidationComponent,
    },
];
