import { smartTest } from "../UI/pages/PageFixtur";


smartTest('Pyramid Core Test', async ({ loginPage }) => {
    await loginPage.loginWith('Mnanda.kishore', 'Welcome@01');
})