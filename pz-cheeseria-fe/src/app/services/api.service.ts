
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable()
export class ApiService {

	constructor(private http: HttpClient) { }

	public get(endPoint: string, model?: any): Observable<any> {
		return this.send('GET', endPoint, model);
	}

	public post(endPoint: string, model: any): Observable<any> {
		return this.send('POST', endPoint, model);
	}

	public delete(endPoint: string, model?: any): Observable<any> {
		return this.send('DELETE', endPoint, model);
	}

	public put(endPoint: string, model?: any): Observable<any> {
		return this.send('PUT', endPoint, model);
	}

	public send(httpSendType: string, endPoint: string, model?: any): Observable<any> {
		return this.sendRequest(httpSendType, endPoint, model)
	}

	private sendRequest(httpSendType: string, url: string, model?: any): Observable<any> {
		let headers = new HttpHeaders();

		let options = {
			headers
		};

		let response$;

		if (httpSendType == 'POST') {
			if (model instanceof String || typeof model === 'string') {
				response$ = this.http.post(url, "\"" + model + "\"", { ...options });
			} else {
				response$ = this.http.post(url, model, { ...options });
			}

		} else if (httpSendType == 'PUT') {
			response$ = this.http.put(url, model, { ...options });
		} else if (httpSendType === 'GET') {
			response$ = this.http.get(url + this.toQueryString(model), { ...options });
		} else {
			response$ = this.http.delete(url + this.toQueryString(model), { ...options });
		}

		return response$.pipe(
			timeout(60000), // 60s for most, 10 mins for files
			map(res => {
				try {
					return res;
				} catch (e) { return res; }
			}),
			catchError(err => this.handleError(err))
		);
	}

	private toQueryString(model: any): string {
		if (!model) {
			return '';
		}
		let str = [];
		for (let prop in model) {
			if (model[prop] && model.hasOwnProperty(prop)) {
				str.push(encodeURIComponent(prop) + '=' + encodeURIComponent(model[prop]));
			}
		}
		return '?' + str.join('&');
	}

	private handleError(response: any): Observable<any> {
		console.warn(response.error);
		return throwError(response);
	}
}
