import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class UserService {

  private httpOptions: any;
  public token = null;
  public errors: any = null;
  public userId: number;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const lastToken = JSON.parse(localStorage.getItem('token'));
    if(lastToken) {
      this.token = lastToken.token;
      this.userId = lastToken.userId;
    }
  }

  public async login(user) {
    await this.http.post('http://127.0.0.1:8000/api/token/', JSON.stringify(user), this.httpOptions).toPromise().then(
      (data) => {
        this.updateData(data['access'])
      },
      (error) => {
        this.errors = error['status'];
      }
    );
  }

  public logout() {
    this.token = null;
    this.userId = null;
    localStorage.removeItem('token');
  }

  public async register(user) {
    await this.http.post('http://127.0.0.1:8000/users/', JSON.stringify(user), this.httpOptions).toPromise().then(
      (data) => {
        if(this.errors) {
          this.errors = null;
        }
      },
      (err) => {
        this.errors = err['status']
      }
    )
  }

  private updateData(token) {
    this.token = token;
    this.errors = [];


    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.userId = token_decoded.user_id;


    const savedDataUser = {
      token: this.token,
      userId: this.userId
    };

    localStorage.setItem('token', JSON.stringify(savedDataUser));
  }

  get isLogin() {
    return this.token !== null;
  }

}
