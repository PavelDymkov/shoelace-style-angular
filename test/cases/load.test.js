const { Input } = require("@angular/core");

describe("Load Directive", () => {
    it("should check sl-icon load output", async () => {
        await io({
            async input() {
                await page.goto(url("/load"));

                await page.click("#test1");
            },
            async output({ message }) {
                await message("SL-ICON dispatch sl-load");
            },
        });
    });

    it("should check sl-icon error output", async () => {
        await io({
            async input() {
                await page.goto(url("/load"));

                await page.click("#test2");
            },
            async output({ message }) {
                await message("SL-ICON dispatch sl-error");
            },
        });
    });

    it("should check sl-include load output", async () => {
        await io({
            async input() {
                await page.goto(url("/load"));

                await page.click("#test3");
            },
            async output({ message }) {
                await message("SL-INCLUDE dispatch sl-load");
            },
        });
    });

    it("should check sl-include error output", async () => {
        await io({
            async input() {
                await page.goto(url("/load"));

                await page.click("#test4");
            },
            async output({ message }) {
                await message("SL-INCLUDE dispatch sl-error");
            },
        });
    });
});
