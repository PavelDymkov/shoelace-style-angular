import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ERoutes } from "./enums/routes";

import { ControlsDirectiveComponent } from "./pages/controls-directive/controls-directive.component";
import { FormComponent } from "./pages/form-directive/form.component";
import { ShowHideComponent } from "./pages/show-hide/show-hide.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: ERoutes.ShowHide,
    },
    {
        path: ERoutes.ControlsDirective,
        component: ControlsDirectiveComponent,
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
