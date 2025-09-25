
import { Page } from "@playwright/test";

export interface Brow {
    setBrowser(runType: boolean, screenSize: string): Promise<Page>;
}
