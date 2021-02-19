import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-example",
    templateUrl: "./example.component.html",
    styles: [
        `
            code {
                white-space: pre;
            }
        `,
    ],
})
export class ExampleComponent implements OnInit {
    @Input()
    fileName: string;

    code: string;

    constructor(private readonly httpClient: HttpClient) {}

    ngOnInit(): void {
        this.httpClient
            .get(`assets/examples/${this.fileName}.ts`, {
                responseType: "text",
            })
            .subscribe(code => (this.code = code.trim()));
    }
}
