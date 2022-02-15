import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadChildren: () =>
            import("./pages/greeter/greeter.module").then(
                m => m.GreeterPageModule,
            ),
    },
    {
        path: "autofocus",
        loadChildren: () =>
            import("./pages/autofocus/autofocus.module").then(
                m => m.AutofocusPageModule,
            ),
    },
    {
        path: "form",
        loadChildren: () =>
            import("./pages/form/form.module").then(m => m.FormPageModule),
    },
    {
        path: "open",
        loadChildren: () =>
            import("./pages/open/open.module").then(m => m.OpenPageModule),
    },
    {
        path: "validation",
        loadChildren: () =>
            import("./pages/validation/validation.module").then(
                m => m.ValidationPageModule,
            ),
    },
];
