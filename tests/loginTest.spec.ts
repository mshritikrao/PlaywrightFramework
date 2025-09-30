import { smartTest } from "../UI/pages/PageFixtur";

smartTest.describe('login Test', () => {
    smartTest.beforeEach(async ({ smartPage }, smartTestInfo) => {
        smartTestInfo.status = "passed";
        smartTestInfo.expectedStatus = "passed";
        console.log(smartTestInfo.status + " check =")
        console.log(smartTestInfo.expectedStatus + " check --")
    });

    smartTest('Pyramid Core Test', async ({ loginPage }) => {
        await loginPage.loginWith('Mnanda.kishore', 'Welcome@0');
    });

    smartTest.afterEach(
        async ({ smartPage }, smartTestInfo) => {
            if (smartTestInfo.status !== smartTestInfo.expectedStatus) {
                const c = await smartPage.screenshot({ path: `screenshots/'_')}.png`, fullPage: true });
                smartTestInfo.attach('fail test', { body: c, contentType: 'image/png' })

                // Optionally save HTML
                // await smartPage.saveAsPDF?.({ path: `screenshots/${smartTestInfo.title.replace(/\s+/g, '_')}.pdf` });
            }
        }
    )
});