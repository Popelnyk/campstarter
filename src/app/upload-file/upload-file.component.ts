import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpEvent} from "@angular/common/http";
import {FormGroup, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {

  @Input() campaignId:number;
  @Input() urls: Array<any>;
  @Input() zippedUrls: Array<any>;
  @Input() ownerId:number | string = null;

  form: FormGroup;

  files: any = [];

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private userService: UserService) {
    this.form = this.formBuilder.group({
      profile: [''],
      campaignId: [''],
      position: [''],
    });
  }

  uploadFile(event, id) {
    console.log(this.campaignId);
    console.log(this.urls);

    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element);

      const file = element;
      this.form.get('profile').setValue(file);
      this.form.get('campaignId').setValue(this.campaignId);
      this.form.get('position').setValue(id);

      const formData = new FormData();
      formData.append('file', this.form.get('profile').value);
      formData.append('campaign', this.form.get('campaignId').value);
      formData.append('position', this.form.get('position').value);


      this.http.post('http://chocoretone.pythonanywhere.com/upload-file/', formData).subscribe(
        data => {
          this.updateFiles(data);
          console.log(data);
          this.addFile(data);
          },
        error => console.log(error)
      )
    }


  }

  addFile(data) {
    let imageURL = data.file;
    let id = data.id;
    let position = data.position;
    this.urls[data['position']] = {'url':imageURL, 'id':id, 'position': position};
  }

  removeFile(pos) {
    this.urls[pos] = null;
  }

  updateFiles(data) {
    let imageURL = `${'http://chocoretone.pythonanywhere.com'}${data.file}`;
    console.log(imageURL);
  }

  isOwner() {
    return this.ownerId == this.userService.userId
  }

  deleteFile(id) {
    let options = {
      headers: new HttpHeaders({'Content-Type': 'multipart/form-data'}),
      body: {
        pk: this.urls[id]['id'],
        campaignId: this.campaignId
      },
    };

    this.http.delete(`http://chocoretone.pythonanywhere.com/upload-file/`, options).subscribe(
      data => {
        console.log(data);
        this.removeFile(id);
      },
      error => console.log(error)
    )
  }
}
