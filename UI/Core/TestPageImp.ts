import { Frame, FrameLocator, Locator, Page, PageScreenshotOptions, Response, TestInfo } from "@playwright/test";
import { roleOptions, roleType } from "./param";
import { TestLocaterImp } from "./TestLocaterImp";
import { BasePage } from "./BasePage";
import { error } from "node:console";
import { Logger } from "../utils/Logger";


export class TestPageImp {
    public page: Page;
    private smartTestInfo: TestInfo
    private Logger:Logger;

    constructor(page: Page, smartTestInfo: TestInfo, Logger: Logger) {
        this.page = page;
        this.smartTestInfo = smartTestInfo;
        this.Logger=Logger;
    }

    goTo(url: string, options?: { timeout?: number | undefined; waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit" | undefined; referer?: string | undefined; }): Promise<Response | null> {
        this.Logger.logger.info(`open URL ${url} and options: ${options}`)
        return this.page.goto(url, options);
    }
    getByRole(roleType: roleType, option?: roleOptions): TestLocaterImp {
        return new TestLocaterImp(this.page.getByRole(roleType, option), this.smartTestInfo);
    }
    getByText(text: string, options?: { exact: boolean | undefined; }): TestLocaterImp {
        return new TestLocaterImp(this.page.getByText(text, options), this.smartTestInfo);
    }
    getByPlaceholder(text: string | RegExp, options?: { exact?: boolean | undefined; } | undefined): TestLocaterImp {
        this.Logger.logger.info(`getByPlaceholder( ${text} and options: ${options})`)
        return new TestLocaterImp(this.page.getByPlaceholder(text, options), this.smartTestInfo);
    }
    getByLabel(label: string, options?: { exact: boolean | undefined; }): TestLocaterImp {
        return new TestLocaterImp(this.page.getByLabel(label, options), this.smartTestInfo);
    }
    getByAltText(altText: string, options?: { exact: boolean | undefined; }): TestLocaterImp {
        return new TestLocaterImp(this.page.getByAltText(altText, options), this.smartTestInfo);
    }
    getByTitle(title: string, options?: { exact: boolean | undefined; }): TestLocaterImp {
        return new TestLocaterImp(this.page.getByTitle(title, options), this.smartTestInfo);
    }
    getByTestId(testId: string): TestLocaterImp {
        return new TestLocaterImp(this.page.getByTestId(testId), this.smartTestInfo);
    }

    locater(selector: string, options?: {
        has?: Locator;
        hasNot?: Locator;
        hasNotText?: string | RegExp;
        hasText?: string | RegExp;
    }) {
        try {
            this.Logger.logger.info(`locater( ${selector} and options: ${options})`)
            return new TestLocaterImp(this.page.locator(selector, options), this.smartTestInfo);
        } catch (error) {
            this.smartTestInfo.status = "failed";
            this.Logger.logger.info(`locater error ${error}`)
            return new TestLocaterImp(this.page.locator(selector, options), this.smartTestInfo);;
        }
    }
    content() {
        return this.page.content();
    }

    async screenshot(options?: PageScreenshotOptions | undefined) {
        try {
            return await this.page.screenshot(options);
        } catch (error) {
            this.smartTestInfo.status = "failed";
            await this.smartTestInfo.attach('Dashbord Info', {
                body: await this.page.screenshot({ fullPage: true })
                , contentType: 'image/png'
            }
            );

        }
        throw new Error(`Test failed:`);
    }

    async waitForLoadState(state?: "load" | "domcontentloaded" | "networkidle" | undefined, options?: {
        timeout?: number | undefined;
    } | undefined): Promise<void> {
        return await this.page.waitForLoadState(state, options);
    }
    // async waitForSelector(selector: keyof HTMLElementTagNameMap, options?: PageWaitForSelectorOptionsNotHidden): Promise<ElementHandleForTag<keyof HTMLElementTagNameMap>> {
    //     return this.page.waitForSelector(selector, options)
    // }
    async waitForTimeout(timeout: number): Promise<void> {
        await this.page.waitForTimeout(timeout);
    }

    async close(options?: { reason?: string; runBeforeUnload?: boolean; }): Promise<void> {
        await this.page.close(options);
    }

    frame(frameSelector: string | { name?: string; url?: string | RegExp | ((url: URL) => boolean); }): Frame | null {
        return this.page.frame(frameSelector);
    }

    frames(): Frame[] {
        return this.page.frames()
    }

    mainFrame(): Frame {
        return this.page.mainFrame()
    }

    frameLocator(selector: string): FrameLocator {
        return this.page.frameLocator(selector)
    }



}