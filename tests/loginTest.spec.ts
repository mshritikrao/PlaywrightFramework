import { smartTest } from "../UI/pages/PageFixtur";

smartTest.describe('login Test', () => {
    smartTest.beforeEach(async ({ smartPage }, smartTestInfo) => {
        smartTestInfo.status = "passed";
        smartTestInfo.expectedStatus = "passed";
    });

    smartTest('Pyramid Core Test', async ({ smartPage, loginPage,Logger }) => {
        Logger.logger.info('Starting example test');
        await smartPage.goTo("https://pyramidcore.pyramidci.com/");
        await loginPage.loginWith('Mnanda.kishore', 'Welcome@01');
    });

    smartTest.afterEach(
        async ({ smartPage }, smartTestInfo) => {
            const ss = await smartPage.screenshot({ path: `Screenshots/afterEach.png`, fullPage: true });
            if (smartTestInfo.status !== smartTestInfo.expectedStatus) {
                smartTestInfo.attach('fail test', { body: ss, contentType: 'image/png' })
                // Optionally save HTML
                // await smartPage.saveAsPDF?.({ path: `screenshots/${smartTestInfo.title.replace(/\s+/g, '_')}.pdf` });
            } else {
                smartTestInfo.attach('pass test', { body: ss, contentType: 'image/png' })

            }

        }
    )
});