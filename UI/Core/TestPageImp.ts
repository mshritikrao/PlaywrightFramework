import { Locator, Page, Response } from "@playwright/test";
import { roleOptions, roleType } from "./param";
import { TestLocaterImp } from "./TestLocaterImp";
import { BasePage } from "./BasePage";


export class TestPageImp {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    goTo(url: string, options?: { timeout?: number | undefined; waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit" | undefined; referer?: string | undefined; }): Promise<Response | null> {
        return this.page.goto(url, options);
    }
    getByRole(roleType: roleType, option?: roleOptions): TestLocaterImp {
        return new TestLocaterImp(this.page.getByRole(roleType, option));
    }
    getByText(text: string, options?: { exact: boolean | undefined; }): TestLocaterImp {
        return new TestLocaterImp(this.page.getByText(text, options));
    }
    getByPlaceholder(placeholder: string, options?: { exact: boolean | undefined; }): TestLocaterImp {
        return new TestLocaterImp(this.page.getByPlaceholder(placeholder, options));
    }
    getByLabel(label: string, options?: { exact: boolean | undefined; }): TestLocaterImp {
        return new TestLocaterImp(this.page.getByLabel(label, options));
    }
    getByAltText(altText: string, options?: { exact: boolean | undefined; }): TestLocaterImp {
        return new TestLocaterImp(this.page.getByAltText(altText, options));
    }
    getByTitle(title: string, options?: { exact: boolean | undefined; }): TestLocaterImp {
        return new TestLocaterImp(this.page.getByTitle(title, options));
    }
    getByTestId(testId: string): TestLocaterImp {
        return new TestLocaterImp(this.page.getByTestId(testId));
    }
    locater(selector: string, options?: {
        has?: Locator | undefined;
        hasNot?: Locator;
        hasNotText?: string | RegExp;
        hasText?: string | RegExp;
    }) {
        return new TestLocaterImp(this.page.locator(selector, options));
    }
    content() {
        return this.page.content();
    }



}