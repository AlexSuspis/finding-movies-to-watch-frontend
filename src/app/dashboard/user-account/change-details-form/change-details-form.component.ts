import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-details-form',
  templateUrl: './change-details-form.component.html',
  styleUrls: ['./change-details-form.component.css']
})
export class ChangeDetailsFormComponent implements OnInit {
  name = "Tiago";
  email = "test@test.com";
  password = "testPass";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form.value)
    console.log('submitted!');
  }

}
