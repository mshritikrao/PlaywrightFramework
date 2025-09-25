import { Locator } from "@playwright/test";
import { fillOptions, clearOptions } from "./param";

export class TestLocaterImp {
    private locators: Locator;

    constructor(locator: Locator) {
        this.locators = locator;
    }

    async fill(value: string, options?: fillOptions) {
        await this.locators.clear(options);
        await this.locators.fill(value, options);
    }

    async click(options?: clearOptions) {
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

}