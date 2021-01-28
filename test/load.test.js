const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { url } = require("./tools");

let browser;

describe("Load Directive", () => {
    before(async () => {
        browser = await puppeteer.launch();
    });

    after(async () => {
        await browser.close();
    });

    it("should check load output", async () => {
        const page = await browser.newPage();

        await page.goto(url("/load"));

        await io({
            page,
            async output({ message }) {
                await message("sl-icon loaded");
            },
        });

        await page.close();
    });
});
