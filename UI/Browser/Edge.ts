
import { Browser, chromium, Page } from "@playwright/test";
import { Brow } from "./Browser";

export class Edge implements Brow {
    async setBrowser(runType: boolean, screenSize: string): Promise<Page> {
        const browser: Browser = await chromium.launch({ channel: 'msedge', headless: runType });
        const context = await browser.newContext(
            screenSize === 'large' ? { viewport: { width: 1920, height: 1080 } } : {}
        );
        const page: Page = await context.newPage();
        return page;
    }
}
