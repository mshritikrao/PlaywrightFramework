import { TestInfo } from "@playwright/test";
import { TestPageImp } from "../../Core/TestPageImp";

export class Element {

    private smartPage: TestPageImp;
    private smartTestInfo: TestInfo;
    constructor(smartPage: TestPageImp, smartTestInfo: TestInfo) {
        this.smartPage = smartPage;
        this.smartTestInfo = smartTestInfo;
    }

    

}