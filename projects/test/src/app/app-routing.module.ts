import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClearableComponent } from "./pages/clearable/clearable.component";
import { ClosableComponent } from "./pages/closable/closable.component";

import { FocusableComponent } from "./pages/focusable/focusable.component";
import { FormComponent } from "./pages/form/form.component";
import { LoadComponent } from "./pages/load/load.component";
import { OverlayComponent } from "./pages/overlay/overlay.component";
import { ShowHideComponent } from "./pages/show-hide/show-hide.component";

enum ERoutes {
    Clearable = "clearable",
    Closable = "closable",
    Focusable = "focusable",
    Form = "form",
    Load = "load",
    Overlay = "overlay",
    ShowHide = "show-hide",
}

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: ERoutes.Form,
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
        path: ERoutes.Overlay,
        component: OverlayComponent,
    },
    {
        path: ERoutes.ShowHide,
        component: ShowHideComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
