import { TestPageImp } from "../Core/TestPageImp";
import { TestLocaterImp } from "../Core/TestLocaterImp";
import { expect, Frame, FrameLocator, Page, TestInfo } from "@playwright/test";

export class Login {

    private userID!: TestLocaterImp;
    private password!: TestLocaterImp;
    private login!: TestLocaterImp;
    private smartPage: TestPageImp;
    private smartTestInfo: TestInfo;
    private dashbord: TestLocaterImp | undefined;

    constructor(smartPage: TestPageImp, smartTestInfo: TestInfo) {
        this.smartPage = smartPage;
        this.smartTestInfo = smartTestInfo;
        this.userID = this.smartPage.getByPlaceholder('User Id / Official Email Id');
        this.password = this.smartPage.getByPlaceholder('Password');
        this.login = this.smartPage.locater('input[type="image"][id="pydLogin_btnLogin"]');

    }

    async loginWith(userId: string, password: string) {
        await this.userID.fill(userId);
        await this.password.fill(password);
        const loginPageSS = await this.smartPage.screenshot({ fullPage: true });
        await this.login.click();
        await this.smartTestInfo.attach('Login Info'
            , {
                body: loginPageSS
                , contentType: 'image/png'
            }
        );
        const contentsFrame = await waitForFrameByName(this.smartPage, 'contents');
        const dashboard = contentsFrame.locator('//a[contains(text(),"Dashboard") and not(contains(text(),"Exit Dashboard"))]');
        await expect(dashboard).toBeVisible({ timeout: 10000 });


        // await this.smartPage.waitForLoadState("domcontentloaded");
        // await this.smartPage.waitForTimeout(5000);
        // const dd = this.smartPage.frameLocator("//frame[@name='contents']"); //'#PCIMenut0'
        // const ddd = dd.locator('//a[contains(text(),"Dashboard") and not(contains(text(),"Exit Dashboard"))]');
        // expect(await ddd.isVisible()).toBe(true);
    }


}


async function waitForFrameByName(smartPage: TestPageImp, frameName: string, timeout = 10000): Promise<Frame> {
    await smartPage.waitForLoadState("domcontentloaded");
    const start = Date.now();
    let frame: Frame | null = null;

    while (Date.now() - start < timeout) {
        frame = smartPage.frame({ name: frameName });
        if (frame) return frame;
        await smartPage.waitForTimeout(500); // wait and retry
    }

    throw new Error(`Frame "${frameName}" not found within ${timeout}ms`);
}

/*

        const contentsFrame = await waitForFrameByName(this.smartPage, "//frame[@name='contents']");
        const dashboard = contentsFrame.locator('//a[contains(text(),"Dashboard") and not(contains(text(),"Exit Dashboard"))]');
        await expect(dashboard).toBeVisible({ timeout: 10000 });


        // await this.smartPage.waitForLoadState("domcontentloaded");
        // await this.smartPage.waitForTimeout(5000);
        // const dd = this.smartPage.frameLocator("//frame[@name='contents']"); //'#PCIMenut0'
        // const ddd = dd.locator('//a[contains(text(),"Dashboard") and not(contains(text(),"Exit Dashboard"))]');
        // expect(await ddd.isVisible()).toBe(true);
    }


}


async function waitForFrameByName(smartPage: TestPageImp, frameName: string, timeout = 10000): Promise<FrameLocator> {
    await smartPage.waitForLoadState("domcontentloaded");
    const start = Date.now();
    let frame: FrameLocator;

    while (Date.now() - start < timeout) {
        // frame = smartPage.frame({ name: frameName });
        frame = smartPage.frameLocator(frameName);
        if (frame) return frame;
        await smartPage.waitForTimeout(500); // wait and retry
    }

    throw new Error(`Frame "${frameName}" not found within ${timeout}ms`);
}


*/
