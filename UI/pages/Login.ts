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
    }

    async loginWith(userId: string, password: string) {
        await this.userID.fill(userId);
        await this.password.fill(password);
        await this.smartTestInfo.attach('Login Info'
            , {
                body: await this.smartPage.screenshot({ path: `Login with UserId: ${userId} and Password: ${password}`, fullPage: true })
                , contentType: 'image/png'
            }
        );
        await this.login.click();
        expect(await this.smartPage.locater('//*[@class="logout"]').isVisible());
        await this.smartTestInfo.attach('Dashbord Info'
            , {
                body: await this.smartPage.screenshot({ fullPage: true })
                , contentType: 'image/png'
            }
        );

        await this.smartTestInfo.attach('Dashbord check'
            , {
                body: await this.smartPage.page.screenshot({ fullPage: true })
                , contentType: 'image/png'
            }
        );
    }


}