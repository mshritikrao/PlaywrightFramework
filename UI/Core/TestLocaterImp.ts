import { Locator, TestInfo } from "@playwright/test";
import { fillOptions, clearOptions } from "./param";

export class TestLocaterImp {
    private locators: Locator;
    private smartTestInfo: TestInfo;

    constructor(locator: Locator, smartTestInfo: TestInfo) {
        this.locators = locator;
        this.smartTestInfo = smartTestInfo;
    }

    async fill(value: string, options?: fillOptions) {
        await this.locators.clear(options);
        await this.locators.fill(value, options);
    }

    async click(options?: {
        button?: "left" | "right" | "middle" | undefined;
        clickCount?: number | undefined;
        delay?: number | undefined;
        force?: boolean | undefined;
        modifiers?: ("Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift")[] | undefined;
        noWaitAfter?: boolean | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
        timeout?: number | undefined;
        trial?: boolean | undefined;
    } | undefined) {
        await this.locators.click(options);
    }

    async locator(selectorOrLocator: string | Locator, options?: {
        has?: Locator;
        hasNot?: Locator;
        hasNotText?: string | RegExp;
        hasText?: string | RegExp;
    }) {
        return this.locators.locator(selectorOrLocator, options);
    }

    async isVisible(options?: { timeout?: number }): Promise<boolean> {
        try {
            return await this.locators.isVisible(options);
        } catch (error) {
            this.smartTestInfo.status = "failed";
            return false;
        }
    }

}