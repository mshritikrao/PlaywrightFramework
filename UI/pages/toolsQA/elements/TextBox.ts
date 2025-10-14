import { expect, TestInfo } from "@playwright/test";
import { TestPageImp } from "../../../Core/TestPageImp";
import { HomePageTabs } from "../Home";
import { TestLocaterImp } from "../../../Core/TestLocaterImp";

export class TextBox {

    private smartPage: TestPageImp;
    private smartTestInfo: TestInfo;
    private fullName: TestLocaterImp;
    private email: TestLocaterImp;
    private currentAddr: TestLocaterImp;
    private permenentAddr: TestLocaterImp;
    private submit: TestLocaterImp;
    private checkElementsTabSelected: TestLocaterImp;
    private textBox: TestLocaterImp;
    constructor(smartPage: TestPageImp, smartTestInfo: TestInfo) {
        this.smartPage = smartPage;
        this.smartTestInfo = smartTestInfo;
        this.fullName = this.smartPage.getByPlaceholder('Full Name');
        this.email = this.smartPage.getByPlaceholder('name@example.com');
        this.currentAddr = this.smartPage.getByPlaceholder('Current Address');
        this.permenentAddr = this.smartPage.locater('//*[@id="permanentAddress"]');
        this.submit = this.smartPage.getByRole("button", { name: 'Submit' })
        this.checkElementsTabSelected = this.checkTabIsSelected(HomePageTabs.ELEMENTS);
        this.textBox = this.clickElementTab(elementTabs.TEST_BOX);
    }


    private tabSelectPath(selectTab: HomePageTabs): string {
        return `//*[contains(text(),'${selectTab}')]//ancestor::span//parent::*//*[contains(@class,'show')]`;
    }

    private elementTabPath(electTab: elementTabs): string {
        return this.tabSelectPath(HomePageTabs.ELEMENTS) + `//*[text()='${electTab}']`;
    }

    private checkTabIsSelected(selectTab: HomePageTabs): TestLocaterImp {
        return this.smartPage.locater(this.tabSelectPath(selectTab));
    }
    private clickElementTab(elementTabs: elementTabs): TestLocaterImp {
        return this.smartPage.locater(this.elementTabPath(elementTabs));
    }


    async fillTextBox() {
        if (await this.checkElementsTabSelected.isVisible({ timeout: 5000 })) {
            await this.textBox.click();
            await this.fullName.fill(textBoxData.FullName);
            await this.email.fill(textBoxData.Email);
            await this.currentAddr.fill(textBoxData.contactAddress);
            await this.permenentAddr.fill(textBoxData.permanentAddress);
            await this.submit.click();
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