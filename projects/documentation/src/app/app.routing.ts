import { Routes } from "@angular/router";

export enum AppRoute {
    Overview = "",
    Installation = "installation",
    Forms = "forms",
    Example = "example",
}

export const routes: Routes = [
    {
        path: AppRoute.Overview,
        pathMatch: "full",
        loadChildren: () =>
            import("./pages/overview/overview.module").then(
                m => m.OverviewModule,
            ),
    },
    {
        path: AppRoute.Installation,
        loadChildren: () =>
            import("./pages/installation/installation.module").then(
                m => m.InstallationModule,
            ),
    },
    {
        path: AppRoute.Forms,
        loadChildren: () =>
            import("./pages/forms/forms.module").then(m => m.FormsModule),
    },
    {
        path: AppRoute.Example,
        loadChildren: () =>
            import("./pages/example/example.module").then(m => m.ExampleModule),
    },
];
