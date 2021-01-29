const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { url } = require("./tools");

let browser;

describe("Validation", () => {
    before(async () => {
        browser = await puppeteer.launch();
    });

    after(async () => {
        await browser.close();
    });

    it("should check angular validator", async () => {
        const page = await browser.newPage();

        await page.goto(url("/validation?type=ng-required&text=test"));

        await io({
            page,
            async input() {
                await page.click("#log-state");
                await page.click("#text-filler");
                await page.click("#log-state");
            },
            async output({ message }) {
                await message("sl-button[submit][disabled] = true");
                await message("sl-button[submit][disabled] = false");
            },
        });

        await page.close();
    });

    it("should check custom validator", async () => {
        const page = await browser.newPage();

        await page.goto(url("/validation"));

        await io({
            page,
            async input() {
                await page.click("#log-state");
                await page.click("#text-filler");
                await page.click("#log-state");
            },
            async output({ message }) {
                await message("sl-button[submit][disabled] = true");
                await message("sl-button[submit][disabled] = false");
            },
        });

        await page.close();
    });
});
