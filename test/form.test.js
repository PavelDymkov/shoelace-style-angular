const { ok } = require("assert");

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

    it("should check angular forms and sl-form interaction", async () => {
        const page = await browser.newPage();

        await page.goto(url("/form"));

        await io({
            page,
            async input() {
                await page.click("#submit");
            },
            async output({ dataFromMessage }) {
                const formData = await dataFromMessage("sl-form data");

                ok(formData.inputByFormData === "formControl text");
                ok(formData.inputBySlValue === "Sl text");
                ok(formData.select === null);
            },
        });

        await io({
            page,
            async input() {
                await page.click("#patch");
                await page.click("#submit");
            },
            async output({ dataFromMessage }) {
                const formData = await dataFromMessage("sl-form data");

                ok(formData.inputByFormData === "patched value");
                ok(formData.inputBySlValue === "patched value");
                ok(formData.select === "option-2");
            },
        });

        await page.close();
    });
});
