import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class NlpService {
  private BASE_URL = 'http://localhost';
  private BASE_PORT = 3000;
  private SERVICE_URL = this.BASE_URL + ':' + this.BASE_PORT + '/nlp';
  private SERVICE_URL_ALL = this.BASE_URL + ':' + this.BASE_PORT + '/all';

  constructor(private http: Http) {}

  getAisles(sentence: string): Observable<string[]> {
    return this.http.get(this.SERVICE_URL + '/' + sentence)
      .map(res => res.json());
  }

  getAllAisles(): Observable<string[]> {
    return this.http.get(this.SERVICE_URL_ALL).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);  // log to console instead
    return Observable.throw(errMsg);
  }
}
