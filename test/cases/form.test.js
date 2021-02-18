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
                    input: "initial",
                    select: "",
                    native: "initial",
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
                    input: "patched",
                    native: "patched",
                    radio: "option-2",
                    select: "option-2",
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

                isEqual(formData, {
                    "[0][items][0]": "foo",
                    "[1][items][0]": "foo",
                    "[1][items][1]": "bar",
                    "[1][selected]": "selected",
                    "[2][items][0]": "baz",
                    "[2][selected]": "selected",
                });
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

                isEqual(formData, {
                    "[0][items][0]": "foo",
                    "[1][items][0]": "foo",
                    "[1][items][1]": "bar",
                    "[1][selected]": "selected",
                    "[2][items][0]": "baz",
                    "[2][selected]": "selected",
                });
            },
        });
    });
});
