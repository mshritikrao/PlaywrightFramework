import { APIRequest, APIRequestContext, APIResponse } from "@playwright/test";
import { ReadStream } from "fs";

export class TestRequestImp {

    private request: APIRequestContext
    constructor(request: APIRequestContext) {
        this.request = request;
    }

    post(url: string, options?: {
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
        return this.request.post(url, options);
    }

    get(url: string, options?: {
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
        return this.request.get(url, options);
    }

    put(url: string, options?: {
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
        return this.request.put(url, options);
    }

}