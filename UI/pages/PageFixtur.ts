import { Login } from "./Login";
import { smartTest as baseTest } from "../Core/TestImp";

type myPage = {
    loginPage: Login
}

export const smartTest = baseTest.extend<myPage>({
    loginPage: async ({ smartPage, smartTestInfo }, use) => {
        await use(new Login(smartPage, smartTestInfo));
    },
});


// export const smartTest = baseTest.extend<myPage>({
//     loginPage: async ({ smartPage }, use) => {
//         await use(new Login(smartPage));
//     },
// });