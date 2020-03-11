import { Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent  {

  form: FormGroup;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
  };

  files: any = [];

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      profile: ['']
    });
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element);

      const file = element;
      this.form.get('profile').setValue(file);

      const formData = new FormData();
      formData.append('file', this.form.get('profile').value);

      this.http.post('http://127.0.0.1:8000/upload-file/', formData).subscribe(
        data => this.updateFiles(data),
        error => console.log(error)
      )
    }
  }

  updateFiles(data) {
    let response = data;
    let imageURL = `${'http://127.0.0.1:8000'}${data.file}`;

    console.log(data);
    console.log(imageURL);

    this.files.push({url: imageURL});
  }

  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
}
