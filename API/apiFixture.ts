import { gorest } from "./gorest";
import { smartTest as baseTest } from "../UI/Core/TestImp";
import { TestRequestImp } from "../UI/Core/TestRequestImp";

type myApi = {
    smartRequest: TestRequestImp
    gorestApi: gorest

}

export const smartTest = baseTest.extend<myApi>({

    smartRequest: async ({ request, smartTestInfo, Logger }, use) => {
        // await use(new TestRequestImp(Promise.resolve(request)))
        const imp = new TestRequestImp(Promise.resolve(request), Logger, smartTestInfo,)
        await use(imp);
        // await imp.dispose();
    },

    // smartAPIRequest: async ({ smartRequest, request }, use) => {
    //     const imp = new TestRequestImp(smartRequest, request)
    //     await use(imp);
    //     await imp.dispose();
    // },

    gorestApi:  ({ smartRequest, Logger, smartTestInfo }, use) => {
        use(new gorest(smartRequest, Logger, smartTestInfo))
    }

})


// private smartRequest: APIRequestContext
// private smartApiRequest: APIRequest
// constructor(smartRequest: APIRequestContext, smartApiRequest: APIRequest) {
// type Fixtures = {
//     api: TestRequestImp;
// };

// export const test = base.extend<Fixtures>({
//     api: async ({ request }, use) => {
//         // `request` is Playwright's APIRequestContext fixture.
//         // Pass it into your wrapper; the second arg is the top-level request object,
//         // here we reuse `request` and cast where necessary.
//         const impl = new TestRequestImp(request as APIRequestContext, request as any);
//         await use(impl);
//         await impl.dispose();
//     },
// });

// export { expect };
// this.smartApiRequest = smartApiRequest;
//     }
