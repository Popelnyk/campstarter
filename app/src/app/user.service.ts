import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {
 
  private httpOptions: any;
  public token: string = '';
  public errors: any;
  public userId: number;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
 
  public async login(user) {
    await this.http.post('http://127.0.0.1:8000/api/token/', JSON.stringify(user), this.httpOptions).toPromise().then(
      (data) => this.updateData(data['access']),
      (err) => {
         this.errors = err['status']
      }
    );

  }
 
  public logout() {
    this.token = null;
  } 

  private updateData(token) {
    this.token = token;
    this.errors = [];


    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.userId = token_decoded.user_id;
    console.log(this.userId)
    console.log(token_decoded)
    //this.username = token_decoded.username;
  }

}