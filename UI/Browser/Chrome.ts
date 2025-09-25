import { TestPageImp } from "../Core/TestPageImp";
// import { Browser } from "./Browser";
import { Browser, chromium, Page } from 'playwright'
import { Brow } from "./Browser";

export class Chrome implements Brow {
    async setBrowser(runType: boolean, screenSize: string): Promise<Page> {
        const browser: Browser = await chromium.launch({ headless: runType });
        const context = await browser.newContext(
            screenSize === 'large' ? { viewport: { width: 1920, height: 1080 } } : {}
        );
        const page: Page = await context.newPage();
        page.setDefaultTimeout(60000);
        page.setDefaultNavigationTimeout(60000);
        return page;
    }
}