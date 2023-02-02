import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CommonApiClient {
    constructor(private httpClient: HttpClient) {}

    public getCommonContent() {
        const apiUrl = '';
        return this.httpClient.get(apiUrl);
    }
}
