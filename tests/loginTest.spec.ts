import { smartTest } from "../UI/Core/TestType";



// smartTest.describe('Pyramid Core Test', () => { 
    smartTest('Pyramid Core Test', async ({ loginPage }) => {
        await loginPage.loginWith('Mnanda.kishore', 'Welcome@01');
    });
// });
