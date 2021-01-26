import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ERoutes } from "./enums/routes";

import { FocusableComponent } from "./pages/focusable/focusable.component";
import { FormComponent } from "./pages/form/form.component";
import { ShowHideComponent } from "./pages/show-hide/show-hide.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: ERoutes.ShowHide,
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
        path: ERoutes.ShowHide,
        component: ShowHideComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
