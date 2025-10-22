import yaml from 'js-yaml'
import fs from 'fs'
import test, { APIRequestContext, APIResponse, expect, TestInfo, request } from '@playwright/test';
import { TestRequestImp } from '../UI/Core/TestRequestImp';
import { Logger } from '../UI/utils/Logger';

export class gorest {

    private Logger: Logger;
    private smartRequest: TestRequestImp;
    private smartTestInfo: TestInfo;
    private requestContext: Promise<APIRequestContext>
    // private requestContext!: Promise<Tes/tRequestImp>;

    private url = yaml.load(fs.readFileSync('API/urls.yml', 'utf-8')) as {
        baseURL: string;
        endpoints: {
            createNewUser: string;
            getUserDetails: string;
        }
    }
    //     constructor(smartRequest: TestRequestImp, Logger: Logger, smartTestInfo: TestInfo) {
    //         this.Logger = Logger;
    //         this.smartTestInfo = smartTestInfo;
    //         this.smartRequest = smartRequest;
    //     }

    //     // contexts(auth: string) {
    //     //     this.requestContext = this.smartRequest.newContexts({
    //     //         baseURL: this.url.baseURL,
    //     //         extraHTTPHeaders: {
    //     //             Authorization: `Bearer ${auth}`,
    //     //             'Content-Type': 'application/json'
    //     //         }
    //     //     })
    //     // }

    //     async postNewUser(): Promise<APIResponse> {
    //         const response =
    //             await this.smartRequest.post(this.url.baseURL + this.url.endpoints.createNewUser
    //                 , {
    //                     headers: headers
    //                     , data: {
    //                         "name": "Ram " + Date.now()
    //                         , "gender": "male"
    //                         , "email": "ram." + Date.now() + "@on3.com"
    //                         , "status": "active"
    //                     }
    //                 }
    //             )
    //         if (response.status() !== 201) {
    //             this.smartTestInfo.status = 'failed'
    //         }

    //         this.Logger.logger.info(`Status: ${response.status()} ${response.statusText()}`);
    //         return response;
    //     }

    //     async updateUserDetailsByID(id: string): Promise<APIResponse> {
    //         const response =
    //             await this.smartRequest.put(this.url.baseURL + this.url.endpoints.getUserDetails.replace(`{id}`, `${id}`)
    //                 , {
    //                     headers: headers
    //                     , data: {
    //                         "name": "Sitha " + Date.now()
    //                         , "gender": "female"
    //                         , "email": "sitha." + Date.now() + "@on3.com"
    //                         , "status": "active"
    //                     }
    //                 })
    //         this.Logger.logger.info(`Status: ${response.status()} ${response.statusText()}`);
    //         return response
    //     }

    //     async getUserDetailsById(id: string): Promise<APIResponse> {
    //         const response = await
    //             this.smartRequest.get(this.url.baseURL + this.url.endpoints.getUserDetails.replace(`{id}`, `${id}`)
    //                 , {
    //                     headers: headers
    //                 })
    //         this.Logger.logger.info(`Status: ${response.status()} ${response.statusText()}`);
    //         return response
    //     }

    //     async requestDispose() {
    //         await this.smartRequest.dispose();
    //     }


    // }



    constructor(smartRequest: TestRequestImp, Logger: Logger, smartTestInfo: TestInfo) {
        this.Logger = Logger;
        this.smartTestInfo = smartTestInfo;
        // this.smartRequest=smartRequest;

        this.requestContext = request.newContext({
            baseURL: this.url.baseURL,
            extraHTTPHeaders: {
                Authorization: `Bearer ${auth}`,
                'Content-Type': 'application/json'
            }
        })
        this.smartRequest = new TestRequestImp(this.requestContext, Logger, smartTestInfo);
    }

    async requestDispose() {
        await this.smartRequest.dispose();
    }

    async postNewUser(): Promise<APIResponse> {
        const response =
            await (await this.requestContext).post(this.url.endpoints.createNewUser
                , {
                    data: {
                        "name": "Ram " + Date.now()
                        , "gender": "male"
                        , "email": "ram." + Date.now() + "@on3.com"
                        , "status": "active"
                    }
                }
            )
        if (response.status() !== 201) {
            this.smartTestInfo.status = 'failed'
        }

        this.Logger.logger.info(`Status: ${response.status()} ${response.statusText()}`);
        // const responseBody = await reponce.json();
        // this.Logger.logger.info(JSON.stringify(responseBody, null, 2));
        return response;
    }

    async updateUserDetailsByID(id: string): Promise<APIResponse> {
        // console.log(this.url.endpoints.getUserDetails.replace(`{id}`, `${id}`))
        const response =
            await (await this.requestContext).put(this.url.endpoints.getUserDetails.replace(`{id}`, `${id}`)
                , {
                    data: {
                        "name": "Sitha " + Date.now()
                        , "gender": "female"
                        , "email": "sitha." + Date.now() + "@on3.com"
                        , "status": "active"
                    }
                })
        this.Logger.logger.info(`Status: ${response.status()} ${response.statusText()}`);
        return response
    }

    async getUserDetailsById(id: string): Promise<APIResponse> {
        const response =
            await (await this.requestContext).get(this.url.endpoints.getUserDetails.replace(`{id}`, `${id}`))
        this.Logger.logger.info(`Status: ${response.status()} ${response.statusText()}`);
        return response
    }


}

// //change the auth
const auth = 'xxxx';

const headers = {
    Authorization: `Bearer ${auth}`,
    'Content-Type': 'application/json'
};
