import { Component } from '@angular/core';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})

export class NewUserComponent {
  newUser: {} = {
    name: '',
    username: '',
    email: '',
    adress: {
      street: '',
      city: ''
    },
    zipCode: Number,
    phone: Number,
    website: ''
  };

  submitForm(user: {}): void {
    
  }

}
