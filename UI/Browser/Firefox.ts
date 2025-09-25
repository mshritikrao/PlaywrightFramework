import { Browser, firefox, Page } from "playwright";
// import { Browser } from "./Browser";
import { TestPageImp } from "../Core/TestPageImp";
import { Brow } from "./Browser";

export class Firefox implements Brow {

    async setBrowser(runType: boolean, screenSize: string): Promise<Page> {
        const br: Browser = await firefox.launch({ headless: runType });
        const context = await br.newContext();
        const page = await context.newPage();
        if (screenSize === 'large') {
            await page.setViewportSize({ width: 1920, height: 1080 });
        }
        page.setDefaultTimeout(10000);
        page.setDefaultNavigationTimeout(15000);
        return page; // Return the Page object directly
    }

}