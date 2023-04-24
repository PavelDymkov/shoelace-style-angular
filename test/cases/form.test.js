const { deepStrictEqual: isEqual, ok } = require("assert");

describe("Form Directive", () => {
    it("should check value applied", async () => {
        await page.goto(url("/form"));

        await page.waitForSelector(`form`);
        await delay(100);

        const [checkbox, checkboxWithValue] = await page.$$("sl-checkbox");

        ok(await getAttribute(checkbox, "checked"));
        ok(await getAttribute(checkboxWithValue, "checked"));

        const [slSwitch, slSwitchWithValue] = await page.$$("sl-switch");

        ok(await getAttribute(slSwitch, "checked"));
        ok(await getAttribute(slSwitchWithValue, "checked"));

        isEqual(await getValue("sl-color-picker"), "#aaaaaa");

        isEqual(await getValue("sl-input[type=text]"), "abc");
        isEqual(await getValue("sl-textarea"), "abc");

        isEqual(await getValue("sl-input[type=number]"), "123");
        isEqual(await getValue("sl-range"), "30");
        isEqual(await getValue("sl-rating"), "2");

        const radio = await page.$$("sl-radio");

        isEqual(await getAttribute(radio[0], "checked"), false);
        isEqual(await getAttribute(radio[1], "checked"), true);

        const radioButton = await page.$$("sl-radio-button");

        isEqual(await getAttribute(radioButton[0], "checked"), false);
        isEqual(await getAttribute(radioButton[1], "checked"), true);

        isEqual(await getValue("sl-select:not([multiple])"), "option-1");
        isEqual(await getValue("sl-select[multiple]"), [
            "option-2",
            "option-3",
        ]);

        async function getAttribute(element, attribute) {
            return element
                .getProperty(attribute)
                .then(item => item.jsonValue());
        }

        async function getValue(selector) {
            const element = await page.$(selector);

            return element.getProperty("value").then(item => item.jsonValue());
        }
    });
});
