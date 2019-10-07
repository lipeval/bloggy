
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  userForm: FormGroup
  submitted = false
  title = 'bloggy';


  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone)
    {}

	ngOnInit(){
    this.userForm = this.fb.group({
      email: ['', Validators.required ],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required]
    });

    
  }
 
  get f() {return this.userForm.controls}
  
  onSubmit(){
    this.submitted = true;
    if(this.userForm.valid){
      this.http.post('http://18.221.11.198:3000/users', this.userForm.value)
        .subscribe((res) => {
        })
        this.ngZone.run(() => this.router.navigate(['/posts']))
    }

    
    console.log(this.userForm.value)
    console.log(this.userForm.valueChanges)

  }

}
