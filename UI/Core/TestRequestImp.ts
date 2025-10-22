import { APIRequest, APIRequestContext, APIResponse, TestInfo } from "@playwright/test";
import { ReadStream } from "fs";
import { Logger } from "../utils/Logger";

export class TestRequestImp {

    // private smartRequest: APIRequest
    // private smartApiRequest!: APIRequestContext;
    // constructor(smartRequest: APIRequest) {
    //     this.smartRequest = smartRequest;
    // }

    private smartRequest: Promise<APIRequestContext>
    // private smartApiRequest: APIRequest
    private smartTestInfo: TestInfo
    private Logger: Logger;

    constructor(smartRequest: Promise<APIRequestContext>, Logger: Logger, smartTestInfo: TestInfo) {
        this.smartRequest = smartRequest;
        // this.smartApiRequest = smartApiRequest
        this.smartTestInfo = smartTestInfo;
        this.Logger = Logger;
    }

    // async newContexts(options?: {
    //     baseURL?: string;
    //     clientCertificates?: Array<{
    //         origin: string;
    //         certPath?: string;
    //         cert?: Buffer;
    //         keyPath?: string;
    //         key?: Buffer;
    //         pfxPath?: string;
    //         pfx?: Buffer;
    //         passphrase?: string;
    //     }>;
    //     extraHTTPHeaders?: {
    //         [key: string]: string;
    //     };
    //     failOnStatusCode?: boolean;
    //     httpCredentials?: {
    //         username: string;
    //         password: string;
    //         origin?: string;
    //         send?: "unauthorized" | "always";
    //     };
    //     ignoreHTTPSErrors?: boolean;
    //     maxRedirects?: number;
    //     proxy?: {
    //         server: string;
    //         bypass?: string;
    //         username?: string;
    //         password?: string;
    //     };
    //     storageState?: string | {
    //         cookies: Array<{
    //             name: string;
    //             value: string;
    //             domain: string;
    //             path: string;
    //             expires: number;
    //             httpOnly: boolean;
    //             secure: boolean;
    //             sameSite: "Strict" | "Lax" | "None";
    //         }>;
    //         origins: Array<{
    //             origin: string;
    //             localStorage: Array<{
    //                 name: string;
    //                 value: string;
    //             }>;
    //         }>;
    //     };
    //     timeout?: number;
    //     userAgent?: string;
    // }): Promise<TestRequestImp> {
    //     this.smartApiRequest = await this.smartRequest.newContext(options);
    //     return this;
    // }

    async post(url: string, options?: {
        data?: any;
        failOnStatusCode?: boolean | undefined;
        form?: FormData | {
            [key: string]: string | number | boolean;
        } | undefined;
        headers?: {
            [key: string]: string;
        } | undefined;
        ignoreHTTPSErrors?: boolean | undefined;
        maxRedirects?: number | undefined;
        maxRetries?: number | undefined;
        multipart?: FormData | {
            [key: string]: string | number | boolean | ReadStream | {
                name: string;
                mimeType: string;
                buffer: Buffer;
            };
        } | undefined;
        params?: {
            [key: string]: string | number | boolean;
        } | URLSearchParams | string;
        timeout?: number;
    } | undefined): Promise<APIResponse> {
        return (await this.smartRequest).post(url, options);
    }

    async get(url: string, options?: {
        data?: any;
        failOnStatusCode?: boolean | undefined;
        form?: FormData | {
            [key: string]: string | number | boolean;
        } | undefined;
        headers?: {
            [key: string]: string;
        } | undefined;
        ignoreHTTPSErrors?: boolean | undefined;
        maxRedirects?: number | undefined;
        maxRetries?: number | undefined;
        multipart?: FormData | {
            [key: string]: string | number | boolean | ReadStream | {
                name: string;
                mimeType: string;
                buffer: Buffer;
            };
        } | undefined;
        params?: {
            [key: string]: string | number | boolean;
        } | URLSearchParams | string;
        timeout?: number;
    } | undefined): Promise<APIResponse> {
        return (await this.smartRequest).get(url, options);
    }

    async put(url: string, options?: {
        data?: any;
        failOnStatusCode?: boolean | undefined;
        form?: FormData | {
            [key: string]: string | number | boolean;
        } | undefined;
        headers?: {
            [key: string]: string;
        } | undefined;
        ignoreHTTPSErrors?: boolean | undefined;
        maxRedirects?: number | undefined;
        maxRetries?: number | undefined;
        multipart?: FormData | {
            [key: string]: string | number | boolean | ReadStream | {
                name: string;
                mimeType: string;
                buffer: Buffer;
            };
        } | undefined;
        params?: {
            [key: string]: string | number | boolean;
        } | URLSearchParams | string;
        timeout?: number;
    } | undefined): Promise<APIResponse> {
        return (await this.smartRequest).put(url, options);
    }

    async dispose(options?: {
        reason?: string | undefined;
    } | undefined): Promise<void> {
        return (await this.smartRequest).dispose();
    }

    // async newContext(options?: {
    //     baseURL?: string;
    //     clientCertificates?: Array<{
    //         origin: string;
    //         certPath?: string; cert?: Buffer;
    //         keyPath?: string; key?: Buffer; pfxPath?: string;
    //         pfx?: Buffer; passphrase?: string;
    //     }>;
    //     extraHTTPHeaders?: { [key: string]: string; };
    //     failOnStatusCode?: boolean; httpCredentials?:
    //     {
    //         username: string; password: string; origin?: string;
    //         send?: "unauthorized" | "always";
    //     }; ignoreHTTPSErrors?: boolean;
    //     maxRedirects?: number; proxy?: {
    //         server: string; bypass?: string;
    //         username?: string; password?: string;
    //     };
    //     storageState?: string | {
    //         cookies: Array<{
    //             name: string;
    //             value: string; domain: string; path: string; expires: number;
    //             httpOnly: boolean; secure: boolean; sameSite: "Strict" | "Lax" | "None";
    //         }>;
    //         origins: Array<{
    //             origin: string;
    //             localStorage: Array<{
    //                 name: string;
    //                 value: string;
    //             }>;
    //         }>;
    //     }; timeout?: number; userAgent?: string;
    // }): Promise<TestRequestImp> {
    //     const ctx = await this.smartApiRequest.newContext(options);
    //     return new TestRequestImp(ctx, this.smartApiRequest);
    // }

}