import { test, Page } from "@playwright/test"
// import { Page } from "@playwright/test"
import { TestPageImp } from "./TestPageImp"
import { BasePage } from "./BasePage"
import { Login } from "../pages/Login"


type myFixturs = {
    smartPage: TestPageImp
    basePage: BasePage
    // smartLocator: TestLocaterImp
}


// type myPage = {
//     loginPage: Login
// }

export const smartTest = test.extend<myFixturs>({
    basePage: async ({ }, use) => {
        const basePage = await BasePage.create("edge", false, "max");
        await use(basePage);
    },
    smartPage: async ({ basePage }, use) => {
        await use(new TestPageImp(basePage.getPage()));

    }
});


// export const smartTest = baseTest.extend<myPage>({
//     loginPage: async ({ smartPage }, use) => {
//         await use(new Login(smartPage));
//     },
// });

// export const baseTest = test.extend<myFixturs>({
//     smartPage: async ({ }, use: (page: TestPageImp) => Promise<void>) => {
//         const basePage = await BasePage.create("edge", false, "max");
//         await use(new TestPageImp(basePage));
//     },
// }); 
