import { expect, TestInfo } from "@playwright/test";
import { TestPageImp } from "../../../Core/TestPageImp";
import { HomePageTabs } from "../Home";
import { TestLocaterImp } from "../../../Core/TestLocaterImp";

export class CheckBox {

    private smartPage: TestPageImp;
    private smartTestInfo: TestInfo;
    private elementsTabSelected: TestLocaterImp;
    private elementTabClick: TestLocaterImp;
    private elementTabSelected: TestLocaterImp;
    private expand: TestLocaterImp
    private Notes: TestLocaterImp;
    private Desktop: TestLocaterImp;
    private Commands: TestLocaterImp;
    private WorkSpace: TestLocaterImp;
    private Documents: TestLocaterImp;
    private expandAll: TestLocaterImp;

    constructor(smartPage: TestPageImp, smartTestInfo: TestInfo) {
        this.smartPage = smartPage;
        this.smartTestInfo = smartTestInfo;
        this.elementsTabSelected = this.checkTabIsSelected(HomePageTabs.ELEMENTS);
        this.elementTabClick = this.clickElementTab(elementTabs.Check_Box);
        this.elementTabSelected = this.isElementTabSelected();
        this.expand = this.clickCheckBoxListExpand(checkBoxList.HOME);
        this.expandAll = this.clickCheckBoxListExpandAll();
        this.Notes = this.selectCheckBox(checkBoxList.NOTES);
        this.Desktop = this.selectCheckBox(checkBoxList.DESKTOP);
        this.Commands = this.selectCheckBox(checkBoxList.COMMANDS);
        this.WorkSpace = this.selectCheckBox(checkBoxList.WORKSPACE);
        this.Documents = this.selectCheckBox(checkBoxList.DOCUMENTS);
    }


    private tabSelectPath(selectTab: HomePageTabs): string {
        return `//*[contains(text(),'${selectTab}')]//ancestor::span//parent::*//*[contains(@class,'show')]`;
    }

    private elementTabPath(elementTab: elementTabs): string {
        return this.tabSelectPath(HomePageTabs.ELEMENTS) + `//*[text()='${elementTab}']`;
    }

    private elementTabSelectedPath(): string {
        return this.elementTabPath(elementTabs.Check_Box) + `//parent::*[contains(@class,'active')]`
    }

    private checkBoxListExpandPath(checkBoxList: checkBoxList): string {
        return `//*[text()='${checkBoxList}']//ancestor::li[contains(@class,'expanded')]`
    }

    private checkBoxListExpandAllPath(): string {
        return `//*[@title='Expand all']`
    }

    private clickCheckBoxPath(checkBoxList: checkBoxList): string {
        return `//*[text()='${checkBoxList}']//parent::*//span[contains(@class,'-check') or contains(@class,'-uncheck') ]`
    }

    private checkTabIsSelected(selectTab: HomePageTabs): TestLocaterImp {
        return this.smartPage.locater(this.tabSelectPath(selectTab));
    }
    private clickElementTab(elementTabs: elementTabs): TestLocaterImp {
        return this.smartPage.locater(this.elementTabPath(elementTabs));
    }
    private isElementTabSelected(): TestLocaterImp {
        return this.smartPage.locater(this.elementTabSelectedPath());
    }
    private clickCheckBoxListExpand(checkBoxList: checkBoxList): TestLocaterImp {
        return this.smartPage.locater(this.checkBoxListExpandPath(checkBoxList));
    }
    private clickCheckBoxListExpandAll(): TestLocaterImp {
        return this.smartPage.locater(this.checkBoxListExpandAllPath());
    }
    private selectCheckBox(checkBoxList: checkBoxList): TestLocaterImp {
        return this.smartPage.locater(this.clickCheckBoxPath(checkBoxList));
    }

    //*[text()='Home']//ancestor::li[contains(@class,'expanded')]  -----collapsed
    //*[@title='Expand all']
    //*[text()='Desktop']
    //*[text()='Notes']//parent::*//span[contains(@class,'-check') or contains(@class,'-uncheck') ]
    async clickCheckBox(checkBoxList: checkBoxList) {
        if (await this.elementsTabSelected.isVisible({ timeout: 5000 })) {
            await this.elementTabClick.click();
            await this.expandAll.click();
            switch (checkBoxList) {
                case "Notes":
                    await this.Notes.click();
                    break;
                case "Desktop":
                    await this.Desktop.click();
                    break;
                case "Commands":
                    await this.Commands.click();
                    expect(await this.smartPage.screenshot()).toMatchSnapshot('check.png',
                        {
                            maxDiffPixels: 50, 
                            threshold: 0.2 
                        }
                    );
                    break;
                case "WorkSpace":
                    await this.WorkSpace.click();
                    break;
                case "Documents":
                    await this.Documents.click();
                    break;
                default:
                    break;
            }
        } else {
            throw new Error('Element is not selected')
        }
    }

}


const textBoxData = {
    FullName: 'text',
    Email: 'text@gmail.com',
    contactAddress: 'karimnagar',
    permanentAddress: 'karimnagar payment'
}

enum elementTabs {
    TEST_BOX = 'Text Box',
    Check_Box = 'Check Box'
}

export enum checkBoxList {
    HOME = 'home',
    NOTES = 'Notes',
    DESKTOP = 'Desktop',
    COMMANDS = 'Commands',
    WORKSPACE = 'WorkSpace',
    DOCUMENTS = 'Documents',
}