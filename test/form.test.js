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
                const formData = await dataFromMessage("formData");

                ok(formData.inputByFormData === "invalid");
                ok(formData.inputBySlValue === "Sl value text");
            },
        });

        await io({
            page,
            async input() {
                await page.click("#patch");
                await page.click("#submit");
            },
            async output({ dataFromMessage }) {
                const formData = await dataFromMessage("formData");

                ok(formData.inputByFormData === "valid");
            },
        });

        await page.close();
    });
});
