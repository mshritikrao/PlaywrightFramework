import { TestPageImp } from "../Core/TestPageImp";
// import { Browser } from "./Browser";
import { Browser, chromium, Page } from 'playwright'
import { Brow } from "./Browser";

export class Chrome implements Brow{
    async setBrowser(runType: boolean, screenSize: string): Promise<Page> {
        const browser: Browser = await chromium.launch({ headless: runType });
        const context = await browser.newContext();
        const page: Page = await context.newPage();
        return page;
    }
}