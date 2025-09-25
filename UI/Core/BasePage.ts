
import { Page } from "@playwright/test";
import { BrowserFactory } from "../Browser/BrowserFactory";

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    static async create(browserType: string, runType: boolean, screenSize: string): Promise<BasePage> {
        const browser = await BrowserFactory.getBrowser(browserType);
        const page = await browser.setBrowser(runType, screenSize);
        // console.log(page.content())
        await page.goto("https://pyramidcore.pyramidci.com/");
        return new BasePage(page);
    }

    getPage(): Page {
        return this.page;
    }
}
