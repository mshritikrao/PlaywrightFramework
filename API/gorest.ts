import yaml from 'js-yaml'
import fs from 'fs'
import test, { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { TestRequestImp } from '../UI/Core/TestRequestImp';
import { Logger } from '../UI/utils/Logger';

export class gorest {

    private request: TestRequestImp;
    private Logger: Logger;
    constructor(request: TestRequestImp, Logger: Logger) {
        this.request = request;
        this.Logger = Logger;
    }

    private auth = '';

    

    private url = yaml.load(fs.readFileSync('API/urls.yml', 'utf-8')) as {
        baseURL: string;
        endpoints: {
            createNewUser: string;
            getUserDetails: string;
        }
    }

    async postNewUser(): Promise<APIResponse> {
        const reponce =
            await this.request.post(this.url.baseURL + this.url.endpoints.createNewUser
                , {
                    headers: {
                        Authorization: `Bearer 37fdcb3c80183047d717beb403a551a3abe4ac15e23bb2c587e55915d39ed72d`,
                        'Content-Type': 'application/json'
                    }
                    , data: {
                        "name": "Tenali " + Date.now()
                        , "gender": "male"
                        , "email": "tenali." + Date.now() + "@on3.com"
                        , "status": "active"
                    }
                }
            )
        this.Logger.logger.info(`Status: ${reponce.status()} ${reponce.statusText()}`);
        // const responseBody = await reponce.json();
        // this.Logger.logger.info(JSON.stringify(responseBody, null, 2));
        return reponce;
    }

    async updateUserDetailsByID(body: JSON): Promise<APIResponse> {
        return this.request.put(this.url.baseURL + this.url.endpoints.getUserDetails.replace(`{id}`, `${id}`,
            body)
    }

    async getUserDetailsById(id: string): Promise<APIResponse> {
        return this.request.get(this.url.baseURL + this.url.endpoints.getUserDetails.replace(`{id}`, `${id}`))
    }

}


// const config = yaml.load(fs.readFileSync('config/api.yml', 'utf8')) as {
//     baseURL: string;
//     endpoints: {
//         createNewUser: string;
//         getUserDetails: string;
//     };
// };

// test('Create new user using YAML config', async ({ request }) => {
//     const response = await request.post(`${config.baseURL}${config.endpoints.createNewUser}`, {
//         headers: {
//             Authorization: `Bearer YOUR_TOKEN`,
//             'Content-Type': 'application/json'
//         },
//         data: {
//             name: 'Test User',
//             gender: 'male',
//             email: `testuser${Date.now()}@example.com`,
//             status: 'active'
//         }
//     });

//     expect(response.ok()).toBeTruthy();
// });

// test('Get user details using YAML config', async ({ request }) => {
//     const userId = '1234'; // Replace with actual ID
//     const endpoint = config.endpoints.getUserDetails.replace('{id}', userId);

//     const response = await request.get(`${config.baseURL}${endpoint}`, {
//         headers: {
//             Authorization: `Bearer YOUR_TOKEN`
//         }
//     });

//     expect(response.status()).toBe(200);
// });
