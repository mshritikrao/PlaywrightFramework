import { test, TestInfo } from "@playwright/test"
import { TestPageImp } from "./TestPageImp"
import { BasePage } from "./BasePage"
import { TestLocaterImp } from "./TestLocaterImp"


type myFixturs = {
    basePage: BasePage
    smartPage: TestPageImp
    smartTestInfo: TestInfo
    // smartLocator: TestLocaterImp
}

export const smartTest = test.extend<myFixturs>({
    smartTestInfo: async ({ }, use, testInfo) => {
        await use(testInfo);
    },
    basePage: async ({ }, use) => {
        const basePage = await BasePage.create("edge", false, "large");
        await use(basePage);
    },
    smartPage: async ({ basePage, smartTestInfo }, use) => {
        await use(new TestPageImp(basePage.getPage(), smartTestInfo));

    },
    // smartLocator: async ({ smartPage, smartTestInfo }, use) => {
    //     await use(new TestLocaterImp(smartPage, smartTestInfo));
    // }
});



// type myPage = {
//     loginPage: Login
// }


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
