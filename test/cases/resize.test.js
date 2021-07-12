describe("Resize Directive", () => {
    it("should check sl-resize-observer outputs", async () => {
        await io({
            async input() {
                await page.goto(url("/resize"));
            },
            async output({ message }) {
                // initial event
                await message("SL-RESIZE-OBSERVER dispatch sl-resize");
                // when container change width
                await message("SL-RESIZE-OBSERVER dispatch sl-resize");
            },
        });
    });
});
