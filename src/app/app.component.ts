import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ping-single-column-coming-soon-page-challenge-hub';
  submitted = false;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  onSubmit() {
    this.submitted = true;
  }

  isEmailInvalid() {
    return this.form.get('email')?.invalid && (this.form.get('email')?.touched || this.submitted);
  }
}
