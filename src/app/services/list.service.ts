import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


@Injectable()
export class ListService {

  private API_URL = environment.apiUrl + '/lists';

  constructor(private httpClient: HttpClient) { }


  create(list: any): Promise<any>{
    const options = {
      withCredentials: true
    };
    
    return this.httpClient.post(`${this.API_URL}`, { list }, options)
      .toPromise()
  }

  // delete()

  // update()

}
