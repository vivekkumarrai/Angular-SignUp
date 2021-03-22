import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  StudentForm !: FormGroup;
  submitted:Boolean=false;

  constructor(
    private spinner: NgxSpinnerService,
    private fb:FormBuilder,
    private httpscx:HttpClient,
    
    private router:Router
   
    ) { }

  ngOnInit(): void {

    this.spinner.show();
        
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
 

    this.initForm()
  }

  initForm(){
    this.StudentForm=this.fb.group({

      email:['',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm)]]

    })

    console.log(this.StudentForm)
  }

    onSubmit(){
      console.log(this.StudentForm);
      this.submitted = true;
      if(!this.StudentForm.invalid) {
        console.log(this.StudentForm.value);
        
        this.httpscx.post('http://localhost:8070/login',this.StudentForm.value).subscribe((data:any)=> {
          console.log(data);
         // alert(data.message);
         Swal.fire({
          icon: 'success',
          position:'top-end',
          title: "Welcome Back",
          
          
         })
        
        // this.spinner.show();
        
        // setTimeout(() => {
        //   this.spinner.hide();
        // }, 3000);
      
      
          

          this.router.navigateByUrl('/layout')
        },
        err=>{
         // alert(err.error.message);
         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message,
          footer: '<a href>Why do I have this issue?</a>'
        })
        })
      }
    }

  }
