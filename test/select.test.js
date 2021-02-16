const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { url } = require("./tools");

let browser;

describe("Select Directive", () => {
    before(async () => {
        browser = await puppeteer.launch();
    });

    after(async () => {
        await browser.close();
    });

    it("should check sl-select outputs", async () => {
        const page = await browser.newPage();

        await page.goto(url("/select"));

        // TODO: check puppeteer-io
        // await io({
        //     page,
        //     async input() {
        //         await page.click("#target");
        //     },
        //     async output({ message }) {
        //         await message("success");
        //     },
        // });

        await page.close();
    });
});
