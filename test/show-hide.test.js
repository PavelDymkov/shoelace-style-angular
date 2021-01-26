const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { url } = require("./tools");

let browser;

describe("ShowHide Directive", () => {
    before(async () => {
        browser = await puppeteer.launch();
    });

    after(async () => {
        await browser.close();
    });

    it("should check show/hide outputs", async () => {
        const page = await browser.newPage();

        await page.goto(url("/show-hide"));

        await io({
            page,
            async input() {
                await page.click("#toggle");
            },
            async output({ message }) {
                await message("show sl-alert");
                await message("after show sl-alert");
            },
        });

        await io({
            page,
            async input() {
                await page.click("#toggle");
            },
            async output({ message }) {
                await message("hide sl-alert");
                await message("atfer hide sl-alert");
            },
        });

        await page.close();
    });
});
