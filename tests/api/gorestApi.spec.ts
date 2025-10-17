import { smartTest } from "../../API/apiFixture";

smartTest.describe('Gorest API Tests', () => {
    smartTest.beforeEach(async ({ }, smartTestInfo) => {
        smartTestInfo.status = "passed";
        smartTestInfo.expectedStatus = "passed";
    });

    smartTest('Post Test', async ({ gorestApi, Logger }) => {
        Logger.logger.info('Starting Elements text Box Test');
        Logger.logger.info(JSON.stringify(await (await gorestApi.postNewUser()).json(), null, 2));
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