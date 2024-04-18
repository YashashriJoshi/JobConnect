import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hiring-request',
  templateUrl: './create-hiring-request.component.html',
  styleUrls: ['./create-hiring-request.component.css']
})
export class CreateHiringRequestComponent {
  hiringForm!: FormGroup;
  teamLeadData = [
    { id: 1, name: 'Rachit Jaiswal' },
    { id: 2, name: 'Deepak Kumar' },
  ];
  approverData = [
    { id: 1, name: 'Rachit Jaiswal' },
    { id: 2, name: 'Deepak Kumar' },
  ];
  statusData = [
    { id: 1, name: 'Open' },
    { id: 2, name: 'Closed' },
    { id: 3, name: 'Pending' },
  ];

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.hiringForm = this.formBuilder.group({
      teamLeadName: this.formBuilder.control('', Validators.required),
      position: this.formBuilder.control('', Validators.required),
      jobName: this.formBuilder.control('', Validators.required),
      hiringDays: this.formBuilder.control('', Validators.required),
      jobDesc: this.formBuilder.control('', Validators.required),
      status: this.formBuilder.control('', Validators.required),
    });
  }

  ngOnInit(): void {}
  get f() {
    return this.hiringForm.controls;
  }
  validate() {}
}
