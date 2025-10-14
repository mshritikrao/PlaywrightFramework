import { smartTest as baseTest } from "../../Core/TestImp";
import { Element } from "./Element";
import { CheckBox } from "./elements/CheckBox";
import { TextBox } from "./elements/TextBox";
import { Home } from "./Home";

type myPage = {
    homePage: Home;
    elementsPage: Element;
    textBoxPage: TextBox;
    checkBoxPage: CheckBox;
}

export const smartTest = baseTest.extend<myPage>({

    homePage: async ({ smartPage, smartTestInfo }, use) => {
        await use(new Home(smartPage, smartTestInfo));
    },

    elementsPage: async ({ smartPage, smartTestInfo }, use) => {
        use(new Element(smartPage, smartTestInfo));
    },

    textBoxPage: async ({ smartPage, smartTestInfo }, use) => {
        use(new TextBox(smartPage, smartTestInfo));
    },

    checkBoxPage: async ({ smartPage, smartTestInfo }, use) => {
        use(new CheckBox(smartPage, smartTestInfo));
    },
})