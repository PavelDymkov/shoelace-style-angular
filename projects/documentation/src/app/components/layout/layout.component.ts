import {
    Component,
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    ElementRef,
    ViewChild,
    ViewChildren,
    QueryList,
} from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { SlMenu, SlMenuItem } from "@shoelace-style/shoelace";

import { AppRoute } from "../../app.routing";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.css"],
})
export class LayoutComponent implements AfterViewInit, AfterViewChecked {
    readonly AppRoute = AppRoute;

    @ViewChild("menu", { static: true })
    menu: ElementRef<SlMenu>;
    menuItems: SlMenuItem[];

    @ViewChildren(RouterLink)
    routerLinks: QueryList<RouterLink>;

    constructor(private readonly router: Router) {}

    ngAfterViewInit(): void {
        this.menuItems = Array.from(
            this.menu.nativeElement.querySelectorAll<SlMenuItem>(
                "sl-menu-item",
            ),
        );
    }

    ngAfterViewChecked(): void {
        this.routerLinks.forEach((routerLink, i) => {
            const isCurrent =
                getRoot(routerLink.urlTree.toString()) ===
                getRoot(this.router.url);

            if (isCurrent) {
                this.menuItems[i]?.classList.add("_active");
            } else {
                this.menuItems[i]?.classList.remove("_active");
            }
        });
    }
}

function getRoot(url: string): string {
    return url.split("/")[1] || "";
}
