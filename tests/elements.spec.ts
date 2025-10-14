import { checkBoxList } from "../UI/pages/toolsQA/elements/CheckBox";
import { HomePageTabs } from "../UI/pages/toolsQA/Home";
import { smartTest } from "../UI/pages/toolsQA/pageFixtureToolsQA";

smartTest.describe('Elements Test', () => {
    smartTest.beforeEach(async ({ smartPage }, smartTestInfo) => {
        smartTestInfo.status = "passed";
        smartTestInfo.expectedStatus = "passed";
        await smartPage.goTo("https://demoqa.com/");
    });

    smartTest('Elements text Box Test', async ({ homePage, textBoxPage, Logger}) => {
        Logger.logger.info('Starting Elements text Box Test');
        await homePage.selectTab(HomePageTabs.ELEMENTS);
        await textBoxPage.fillTextBox();
    });
    
    smartTest('Elements Check Box Test', async ({ homePage, checkBoxPage,Logger }) => {
        Logger.logger.info('Starting Check Box Test');
        await homePage.selectTab(HomePageTabs.ELEMENTS);
        await checkBoxPage.clickCheckBox(checkBoxList.COMMANDS);
    });

    smartTest.afterEach(
        async ({ smartPage }, smartTestInfo) => {
            const ss = await smartPage.screenshot({ path: `Screenshots/afterEach.png`, fullPage: true });
            if (smartTestInfo.status !== smartTestInfo.expectedStatus) {
                smartTestInfo.attach('fail test', { body: ss, contentType: 'image/png' })

                // Optionally save HTML
                // await smartPage.saveAsPDF?.({ path: `screenshots/${smartTestInfo.title.replace(/\s+/g, '_')}.pdf` });
            }
            else {
                //  await smartPage.waitForTimeout(3000);
                // const c = await smartPage.screenshot({ path: `Screenshots/pass.png`, fullPage: true, timeout: 30000 });
                smartTestInfo.attach('pass test', { body: ss, contentType: 'image/png' })
            }
            smartPage.close();
        }
    )
});