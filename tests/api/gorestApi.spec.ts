import { smartTest } from "../../API/apiFixture";
import { url } from "../../API/gorest";
import { expect } from "../../UI/Core/TestImp";
// import { expect } from "../../UI/Core/TestImp";

smartTest.describe('Gorest API Tests', () => {
    smartTest.beforeEach(async ({ }, smartTestInfo) => {
        smartTestInfo.status = "passed";
        smartTestInfo.expectedStatus = "passed";
    });

    smartTest('Create user', async ({ gorestApi, Logger }) => {
        Logger.logger.info('Starting Elements text Box Test');
        Logger.logger.info(JSON.stringify(await (await gorestApi.postNewUser()).json(), null, 2));
    });

    smartTest('Update user', async ({ gorestApi, Logger }) => {
        const user = await gorestApi.postNewUser();
        Logger.logger.info(JSON.stringify(await user.json(), null, 2));
        const updated = await gorestApi.updateUserDetailsByID((await user.json()).id);
        Logger.logger.info(JSON.stringify(await updated.json(), null, 2));
        const fetched = await gorestApi.getUserDetailsById((await user.json()).id);
        Logger.logger.info(JSON.stringify(await fetched.json(), null, 2));
        expect(await updated.json()).toMatchObject(await fetched.json())
        await gorestApi.requestDispose();
    });


    smartTest.afterEach(
        async ({ }, smartTestInfo) => {
            if (smartTestInfo.status !== smartTestInfo.expectedStatus) {

            }
            else {
            }
        }
    )
});