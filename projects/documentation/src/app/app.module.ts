import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { RouterModule } from "@angular/router";

import { config } from "../environments/translate";

import { routes } from "./app.routing";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./components/layout/layout.module";

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), LayoutModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule, {
    providers: [{ provide: LOCALE_ID, useValue: config.language }],
});
