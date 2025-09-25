import { Login } from "../pages/Login";
import { smartTest as baseTest } from "./TestImp";
// import { test as baseTest } from '@playwright/test';

type myPage = {
    loginPage: Login
}

export const smartTest = baseTest.extend<myPage>({
    loginPage: async ({ smartPage }, use) => {
        await use(new Login(smartPage));
    },
});


// export const smartTest = baseTest.extend<myPage>({
//     loginPage: async ({ smartPage }, use) => {
//         await use(new Login(smartPage));
//     },
// });