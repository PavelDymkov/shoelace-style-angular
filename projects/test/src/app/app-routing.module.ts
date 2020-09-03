import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ERoutes } from "./enums/routes";

import { ControlsDirectiveComponent } from "./pages/controls-directive/controls-directive.component";
import { FormComponent } from "./pages/form-directive/form.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: ERoutes.Form,
    },
    {
        path: ERoutes.ControlsDirective,
        component: ControlsDirectiveComponent,
    },
    {
        path: ERoutes.Form,
        component: FormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
