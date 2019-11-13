import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
let ConnectionService = class ConnectionService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    watson(data) {
        return this.http.post('/api/watson/message/', JSON.stringify(data), this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
};
ConnectionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ConnectionService);
export { ConnectionService };
//# sourceMappingURL=connection.service.js.map