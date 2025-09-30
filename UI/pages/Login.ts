import { TestPageImp } from "../Core/TestPageImp";
import { TestLocaterImp } from "../Core/TestLocaterImp";
import { expect, TestInfo } from "@playwright/test";

export class Login {

    private userID!: TestLocaterImp;
    private password!: TestLocaterImp;
    private login!: TestLocaterImp;

    private smartPage: TestPageImp;
    private smartTestInfo: TestInfo;
    constructor(smartPage: TestPageImp, smartTestInfo: TestInfo) {
        this.smartPage = smartPage;
        this.smartTestInfo = smartTestInfo;
        this.userID = this.smartPage.getByPlaceholder('User Id / Official Email Id');
        this.password = this.smartPage.getByPlaceholder('Password');
        this.login = this.smartPage.locater('input[type="image"][id="pydLogin_btnLogin"]');
        //  this.smartPage.locater('input[type="image"][id="pydLogin_btnLogin"]');
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
        expect(await this.smartPage.locater('//*[@class="logout"]').isVisible()).toBe(true);
    }


}