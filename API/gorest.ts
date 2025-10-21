import yaml from 'js-yaml'
import fs from 'fs'
import test, { APIRequestContext, APIResponse, expect, TestInfo, request } from '@playwright/test';
import { TestRequestImp } from '../UI/Core/TestRequestImp';
import { Logger } from '../UI/utils/Logger';

export class gorest {
    static postNewUser() {
        throw new Error("Method not implemented.");
    }

    private Logger: Logger;
    private smartRequest: TestRequestImp;
    private smartTestInfo: TestInfo;
    private requestContext: Promise<APIRequestContext>

    private url = yaml.load(fs.readFileSync('API/urls.yml', 'utf-8')) as {
        baseURL: string;
        endpoints: {
            createNewUser: string;
            getUserDetails: string;
        }
    }

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
        this.smartRequest = new TestRequestImp(this.requestContext);

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

    // async postNewUser(): Promise<APIResponse> {
    //     const response =
    //         await this.smartRequest.post(this.url.endpoints.createNewUser
    //             , {
    //                 headers: headers
    //                 , data: {
    //                     "name": "Ram " + Date.now()
    //                     , "gender": "male"
    //                     , "email": "ram." + Date.now() + "@on3.com"
    //                     , "status": "active"
    //                 }
    //             }
    //         )
    //     if (response.status() !== 201) {
    //         this.smartTestInfo.status = 'failed'
    //     }

    //     this.Logger.logger.info(`Status: ${response.status()} ${response.statusText()}`);
    //     // const responseBody = await reponce.json();
    //     // this.Logger.logger.info(JSON.stringify(responseBody, null, 2));
    //     return response;
    // }

    async updateUserDetailsByID(id: string): Promise<APIResponse> {
        console.log(this.url.endpoints.getUserDetails.replace(`{id}`, `${id}`))
        const response =
            await this.smartRequest.put(this.url.endpoints.getUserDetails.replace(`{id}`, `${id}`)
                , {
                    headers: headers
                    , data: {
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
        const response = await
            this.smartRequest.get(this.url.endpoints.getUserDetails.replace(`{id}`, `${id}`))
        this.Logger.logger.info(`Status: ${response.status()} ${response.statusText()}`);
        return response
    }


}
//change the auth
const auth = 'xxxxx';

const headers = {
    Authorization: `Bearer ${auth}`,
    'Content-Type': 'application/json'
};

export const url = yaml.load(fs.readFileSync('API/urls.yml', 'utf-8')) as {
    baseURL: string;
    endpoints: {
        createNewUser: string;
        getUserDetails: string;
    }
}

// const requestContext = await this.smartApiRequest.newContext({
//     baseURL: 'https://gorest.co.in',
//     extraHTTPHeaders: {
//         Authorization: `Bearer YOUR_TOKEN`,
//         'Content-Type': 'application/json'
//     }
// });





////--------------------------

// import { APIRequestContext, APIResponse, request } from '@playwright/test';

// export class GorestApi {
//   private requestContext: APIRequestContext;
//   private baseURL = 'https://gorest.co.in/public/v2';
//   private token = 'YOUR_ACCESS_TOKEN'; // Replace with your token

//   constructor() {}

//   async init() {
//     this.requestContext = await request.newContext({
//       baseURL: this.baseURL,
//       extraHTTPHeaders: {
//         Authorization: `Bearer ${this.token}`,
//         'Content-Type': 'application/json'
//       }
//     });
//   }

//   async postNewUser(): Promise<any> {
//     const response = await this.requestContext.post('/users', {
//       data: {
//         name: 'Tenali ' + Date.now(),
//         gender: 'male',
//         email: 'tenali.' + Date.now() + '@on3.com',
//         status: 'active'
//       }
//     });
//     return await response.json();
//   }

//   async updateUserDetailsByID(userId: number): Promise<any> {
//     const response = await this.requestContext.put(`/users/${userId}`, {
//       data: {
//         name: 'Updated Tenali',
//         email: 'updated.' + Date.now() + '@on3.com',
//         status: 'inactive'
//       }
//     });
//     return await response.json();
//   }

//   async getUserDetailsById(userId: number): Promise<any> {
//     const response = await this.requestContext.get(`/users/${userId}`);
//     return await response.json();
//   }

//   async disposeRequest() {
//     await this.requestContext.dispose();
//   }

//   // Chain method
//   async chainUserFlow(Logger): Promise<void> {
//     Logger.logger.info('Starting chained user flow');

//     const createdUser = await this.postNewUser();
//     Logger.logger.info(`Created user: ${JSON.stringify(createdUser, null, 2)}`);

//     const updatedUser = await this.updateUserDetailsByID(createdUser.id);
//     Logger.logger.info(`Updated user: ${JSON.stringify(updatedUser, null, 2)}`);

//     const fetchedUser = await this.getUserDetailsById(createdUser.id);
//     Logger.logger.info(`Fetched user: ${JSON.stringify(fetchedUser, null, 2)}`);

//     await this.disposeRequest();
//   }
// }
