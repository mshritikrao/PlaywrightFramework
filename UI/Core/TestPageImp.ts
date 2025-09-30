import { Locator, Page, PageScreenshotOptions, Response, TestInfo } from "@playwright/test";
import { roleOptions, roleType } from "./param";
import { TestLocaterImp } from "./TestLocaterImp";
import { BasePage } from "./BasePage";
import { error } from "node:console";


export class TestPageImp {
    public page: Page;
    private smartTestInfo: TestInfo

    constructor(page: Page, smartTestInfo: TestInfo) {
        this.page = page;
        this.smartTestInfo = smartTestInfo;
    }

    goTo(url: string, options?: { timeout?: number | undefined; waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit" | undefined; referer?: string | undefined; }): Promise<Response | null> {
        return this.page.goto(url, options);
    }
    getByRole(roleType: roleType, option?: roleOptions): TestLocaterImp {
        return new TestLocaterImp(this.page.getByRole(roleType, option), this.smartTestInfo);
    }
    getByText(text: string, options?: { exact: boolean | undefined; }): TestLocaterImp {
        return new TestLocaterImp(this.page.getByText(text, options), this.smartTestInfo);
    }
    getByPlaceholder(placeholder: string, options?: { exact: boolean | undefined; }): TestLocaterImp {
        return new TestLocaterImp(this.page.getByPlaceholder(placeholder, options), this.smartTestInfo);
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
            return new TestLocaterImp(this.page.locator(selector, options), this.smartTestInfo);
        } catch (error) {
            this.smartTestInfo.status = "failed";
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
            // console.log(this.smartTestInfo.status + " check ===")
            // console.log(this.smartTestInfo.expectedStatus + " check -----")
            await this.smartTestInfo.attach('Dashbord Info'
                , {
                    body: await this.page.screenshot({ fullPage: true })
                    , contentType: 'image/png'
                }
            );

        }
        throw new Error(`Test failed:`);
    }



}