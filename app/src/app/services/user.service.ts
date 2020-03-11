import {Injectable, NgZone, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";


@Injectable()
export class UserService {

  private httpOptions: any;
  public token = null;
  public tokenRefresh = null;
  public errors: any = null;
  public userId: number;
  public code:number;

  public fbUrlLogin = 'https://www.facebook.com/v6.0/dialog/oauth?client_id=2500936673496401&' +
    'redirect_uri=http://localhost:4200/&' +
    'state={st=state123abc,ds=123456789}&' +
    'response_type=token';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
              public _zone: NgZone) {
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

  public openFbLogin() {
    window.location.href = 'https://www.facebook.com/v6.0/dialog/oauth?client_id=2500936673496401&redirect_uri=http://localhost:4200/&state={st=state123abc,ds=123456789}&response_type=code'
  }

  public loginFacebook() {
      let auth = {
        "provider": "facebook",
        "code": `${this.code}`
      };
      this.http.post('http://127.0.0.1:8000/api/login/social/jwt-pair/', JSON.stringify(auth), this.httpOptions).subscribe(
        data => {
          this.updateData(data['token']);
          window.location.href = 'http://localhost:4200/';
        },
        error => console.log(error)
      )
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
