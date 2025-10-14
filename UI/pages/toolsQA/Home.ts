import { expect, TestInfo } from "@playwright/test";
import { TestPageImp } from "../../Core/TestPageImp";
import { TestLocaterImp } from "../../Core/TestLocaterImp";

export class Home {

    private smartPage: TestPageImp;
    private smartTestInfo: TestInfo;
    private alerts_frame_windows: TestLocaterImp;
    private book_store_application: TestLocaterImp;
    private elements: TestLocaterImp;
    private forms: TestLocaterImp;
    private interactions: TestLocaterImp;
    private widgets: TestLocaterImp;

    private checkElementsTabSelected: TestLocaterImp;

    constructor(smartPage: TestPageImp, smartTestInfo: TestInfo) {
        this.smartPage = smartPage;
        this.smartTestInfo = smartTestInfo;
        this.alerts_frame_windows = this.clickTab(HomePageTabs.ALERTS_FRAME_WINDOWS);
        this.book_store_application = this.clickTab(HomePageTabs.BOOK_STORE_APPLICATION);
        this.elements = this.clickTab(HomePageTabs.ELEMENTS);
        this.forms = this.clickTab(HomePageTabs.FORMS);
        this.interactions = this.clickTab(HomePageTabs.INTERACTIONS);
        this.widgets = this.clickTab(HomePageTabs.WIDGETS);

        this.checkElementsTabSelected = this.checkTabIsSelected(HomePageTabs.ELEMENTS);
    }


    private tabClickPath(selectTab: HomePageTabs): string {
        return `//h5[contains(text(),"${selectTab}")]`;
    }

    private tabSelectPath(selectTab: HomePageTabs): string {
        return `//*[contains(text(),'${selectTab}')]//ancestor::span//parent::*//*[contains(@class,'show')]`;
    }

    private clickTab(selectTab: HomePageTabs): TestLocaterImp {
        return this.smartPage.locater(this.tabClickPath(selectTab));
    }

    private checkTabIsSelected(selectTab: HomePageTabs): TestLocaterImp {
        return this.smartPage.locater(this.tabSelectPath(selectTab));
    }

    async selectElements() {
        await this.elements.click();
    }

    async selectTab(selectTab: HomePageTabs) {
        switch (selectTab) {
            case "Elements":
                await this.elements.click();
                break;
            case "Forms":
                await this.forms.click();
                break;
            case "Alerts, Frame & Windows":
                await this.alerts_frame_windows.click();
                break;
            case "Widgets":
                await this.widgets.click();
                break;
            case "Interactions":
                await this.interactions.click();
                break;
            case "Book Store Application":
                await this.book_store_application.click();
                break;
            default:
                break;
        }
    }
}

export enum HomePageTabs {
    ELEMENTS = "Elements",
    FORMS = "Forms",
    ALERTS_FRAME_WINDOWS = "Alerts, Frame & Windows",
    WIDGETS = "Widgets",
    INTERACTIONS = "Interactions",
    BOOK_STORE_APPLICATION = "Book Store Application"
}
