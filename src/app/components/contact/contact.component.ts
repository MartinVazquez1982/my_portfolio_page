import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { timeout } from 'rxjs';

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

    showLoader: boolean = false;
    textOfSend: boolean = false;
    textSentResult: string = 'Email sent successfully';

    constructor(private fb: FormBuilder){}
  
    async sendEmail(){
        this.showLoader = true;
        this.textOfSend = false;
        this.textSentResult = 'Email sent successfully';
        try{
            emailjs.init('v6q0CQ4uopWNAmPDw');
            await emailjs.send("service_h67m3hn","template_bso8ral",{
                from_name: this.form.value.from_name,
                from_email: this.form.value.from_email,
                from_subject: this.form.value.from_subject,
                message: this.form.value.message,
            });
        } catch(e){
            this.textSentResult = 'Email sent unsuccessfully';
        }
        this.showLoader = false;
        this.textOfSend = true;
        this.form.reset();
    }
}