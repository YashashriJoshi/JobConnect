import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('passwordField') passwordField!: ElementRef;
  loginForm!: FormGroup;
  username: string = '';
  password: string = '';
  loading: boolean = false;
  submitted = false;
  returnUrl: string = '';
  error = '';
  designatedUrl: string = '/dashboard-card';
  signInLabel: string = 'Sign in';
  passwordVisible: boolean = false;

  constructor(
    private authentication: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  togglePasswordVisibility(): void {
    const passwordInput: HTMLInputElement = this.passwordField.nativeElement;
    this.passwordVisible = !this.passwordVisible;
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.signInLabel = 'Signing in...';

  }

}
