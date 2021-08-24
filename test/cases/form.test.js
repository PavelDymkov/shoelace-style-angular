const { deepStrictEqual: isEqual } = require("assert");

describe("Form Directive", () => {
    it("should check simply form", async () => {
        await io({
            async input() {
                await page.goto(url("/form"));

                await page.waitForSelector(`button[type="submit"]#simply`);
                await delay(100);

                await page.click(`button[type="submit"]#simply`);
            },
            async output({ dataFromMessage }) {
                const formData = await dataFromMessage("sl-form data");

                isEqual(formData, {
                    checkbox: null,
                    checkboxFalse: null,
                    checkboxValue: null,
                    checkboxValueNull: null,
                    input: "initial",
                    native: "initial",
                    radio: null,
                    select: null,
                    switch: null,
                    switchValue: null,
                });
            },
        });

        await io({
            async input() {
                await page.click("#patch-simply");
                await page.click(`button[type="submit"]#simply`);
            },
            async output({ dataFromMessage }) {
                const formData = await dataFromMessage("sl-form data");

                isEqual(formData, {
                    checkbox: true,
                    checkboxFalse: false,
                    checkboxValue: "checkbox-value",
                    checkboxValueNull: null,
                    input: "patched",
                    native: "patched",
                    radio: "option-2",
                    select: "option-2",
                    switch: true,
                    switchValue: "switch-value",
                });
            },
        });
    });

    it("should check dynamic form", async () => {
        await io({
            async input() {
                await page.goto(url("/form"));

                await page.waitForSelector(`button[type="submit"]#dynamic`);
                await delay(100);

                await page.click("#fill-dynamic-form");
                await page.click(`button[type="submit"]#dynamic`);
            },
            async output({ dataFromMessage }) {
                const formData = await dataFromMessage("sl-form data");

                isEqual(formData, [
                    { items: ["foo"], selected: null },
                    { items: ["foo", "bar"], selected: true },
                    { items: ["baz"], selected: true },
                ]);
            },
        });

        await io({
            async input() {
                await page.click("#change-dynamic-form");
                await delay(100);
                await page.click(`button[type="submit"]#dynamic`);
            },
            async output({ dataFromMessage }) {
                const formData = await dataFromMessage("sl-form data");

                isEqual(formData, [
                    { items: ["foo"], selected: null },
                    { items: ["foo", "bar"], selected: true },
                    { items: ["baz"], selected: true },
                ]);
            },
        });
    });
});
