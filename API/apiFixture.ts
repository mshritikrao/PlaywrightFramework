import { gorest } from "./gorest";
import { smartTest as baseTest } from "../UI/Core/TestImp";
import { TestRequestImp } from "../UI/Core/TestRequestImp";

type myApi = {
    smartRequest: TestRequestImp
    gorestApi: gorest
}

export const smartTest = baseTest.extend<myApi>({

    smartRequest: async ({ request }, use) => {
        await use(new TestRequestImp(request));
    },

    gorestApi: async ({ smartRequest, Logger }, use) => {
        await use(new gorest(smartRequest, Logger))
    }

})