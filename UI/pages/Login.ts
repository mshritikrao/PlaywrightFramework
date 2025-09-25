import { TestPageImp } from "../Core/TestPageImp";
import { TestLocaterImp } from "../Core/TestLocaterImp";

export class Login {

    private userID!: TestLocaterImp;
    private password!: TestLocaterImp;
    private login!: TestLocaterImp;

    private smartPage: TestPageImp;

    constructor(smartPage: TestPageImp) {
        this.smartPage = smartPage;
        this.userID = this.smartPage.getByPlaceholder('User Id / Official Email Id');
        this.password = this.smartPage.getByPlaceholder('Password');
        this.login = this.smartPage.locater('input[type="image"][id="pydLogin_btnLogin"]');
    }

    async loginWith(userId: string, password: string) {
        console.log(await this.smartPage.content());

        await this.userID.fill(userId);
        await this.password.fill(password);
        await this.login.click();
    }


}