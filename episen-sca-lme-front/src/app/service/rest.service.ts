import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class RestService {

  protected baseUrl: string = "";
  protected headers = new HttpHeaders({'content-type': 'application/json'});

  constructor(protected endpoint: string, protected http: HttpClient) {
    // this.baseUrl = `http://172.31.249.226:8080`;
    this.baseUrl = `http://localhost:8080`;

  }

}
