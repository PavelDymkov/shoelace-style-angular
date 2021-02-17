const { ok, deepStrictEqual: isEqual } = require("assert");

const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { url } = require("./tools");

let browser;

describe("Form Directive", () => {
    before(async () => {
        browser = await puppeteer.launch();
    });

    after(async () => {
        await browser.close();
    });

    it("should check simply form", async () => {
        const page = await browser.newPage();

        await page.goto(url("/form"));

        await page.waitForSelector(`button[type="submit"]#simply`);
        await delay(100);

        await io({
            page,
            async input() {
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
            page,
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

        await page.close();
    });

    it("should check dynamic form", async () => {
        const page = await browser.newPage();

        await page.goto(url("/form"));

        await page.waitForSelector(`button[type="submit"]#dynamic`);
        await delay(100);

        await io({
            page,
            async input() {
                await page.click("#fill-dynamic-form");
                await page.click(`button[type="submit"]#dynamic`);
            },
            async output({ dataFromMessage }) {
                const formData = await dataFromMessage("sl-form data");

                isEqual(formData, {
                    "[0]items[0]": "foo",
                    "[1]items[0]": "foo",
                    "[1]items[1]": "bar",
                    "[1]selected": "selected",
                    "[2]items[0]": "baz",
                    "[2]selected": "selected",
                });
            },
        });

        await io({
            page,
            async input() {
                await page.click("#change-dynamic-form");
                await delay(100);
                await page.click(`button[type="submit"]#dynamic`);
            },
            async output({ dataFromMessage }) {
                const formData = await dataFromMessage("sl-form data");

                isEqual(formData, {
                    "[0]items[0]": "foo",
                    "[1]items[0]": "foo",
                    "[1]items[1]": "bar",
                    "[1]selected": "selected",
                    "[2]items[0]": "baz",
                    "[2]selected": "selected",
                });
            },
        });

        await page.close();
    });
});

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function serialize(source) {
    return createKeyValueArray(source).reduce(
        (object, item) => Object.assign(object, item),
        {},
    );

    function createKeyValueArray(source, name = "") {
        if (Array.isArray(source)) {
            return source.reduce(
                (pairItems, item, i) =>
                    pairItems.concat(
                        createKeyValueArray(item, name + `[${i}]`),
                    ),
                [],
            );
        }

        if (source instanceof Object) {
            return Object.entries(source).reduce(
                (pairItems, [key, value]) =>
                    pairItems.concat(createKeyValueArray(value, name + key)),
                [],
            );
        }

        return source ? { [name]: String(source) } : {};
    }
}
