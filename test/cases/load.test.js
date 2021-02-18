const { Input } = require("@angular/core");

describe("Load Directive", () => {
    it("should check load output", async () => {
        await io({
            async input() {
                await page.goto(url("/load"));
            },
            async output({ message }) {
                await message("sl-icon loaded");
            },
        });
    });
});
