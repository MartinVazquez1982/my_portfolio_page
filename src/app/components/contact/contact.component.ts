import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
    selector: 'app-aboutme',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css', '../../../styles.css']
})

export class ContactApp {

    form: FormGroup = this.fb.group({
        from_name: '',
        from_email: '',
        from_subject: '',
        message: ''
    });

    constructor(private fb: FormBuilder){}
  
    async sendEmail(){
        emailjs.init('v6q0CQ4uopWNAmPDw');
        let response = await emailjs.send("service_h67m3hn","template_bso8ral",{
            from_name: this.form.value.from_name,
            from_email: this.form.value.from_email,
            from_subject: this.form.value.from_subject,
            message: this.form.value.message,
        });
    }
}