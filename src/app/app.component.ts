import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-15-template-driven-registration-forms';
  userName:string ='';
  emailId:string = '';
  password:any ='';
  confirmPassword:any = '';
  gender:string = '';
  qualification:string = '';

  onSubmit(form:NgForm) {
    if( form.valid) {
       console.log("Form property  ",form);
       this.userName = form.value.username;
       this.emailId = form.value.emailid;
       this.password= form.value.password;
       this.confirmPassword = form.value.confirmpassword;
       this.gender = form.value.gender;
       this.qualification = form.value.degree;
       console.log("final values==>",this.userName,",",
       this.emailId,",",
       this.password,",",
       this.confirmPassword,",",
       this.gender,",",
       this.qualification );
    }
  }
}
