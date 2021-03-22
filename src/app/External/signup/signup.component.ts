import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
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



  //************ Validation *************//

  initForm(){
    this.StudentForm=this.fb.group({
      first_name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-Z]*')]],
      last_name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-z A-Z]*')]],
      email:['',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone:['', [Validators.required, ]],
      //password:['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm)]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirmpassword:['',[Validators.required,
        //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm)
      ]]},
       {validator: ConfirmedValidator('password', 'confirmpassword')

    })

    console.log(this.StudentForm)




   //************** Confirm Password Validator  *************//

     function ConfirmedValidator(controlName: string, matchingControlName: string){
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
              return;
          }
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ confirmedValidator: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
  }
  }



  //************ Call Api Register ************ // 

  onSubmit(){
    console.log(this.StudentForm);
    // console.log(this.StudentForm.value);
     this.submitted = true;
     this.StudentForm.value.phone = this.StudentForm.controls.phone.value.number;
     var firstname = this.StudentForm.value.first_name;
  //   if(!this.StudentForm.invalid) {
     
  //   Swal.fire({
  //     icon: 'success',
  //     title: "Thank you..." + " " +firstname,
  //     text: 'You have successfully registerd',
  //     footer: '<a href>How can i help you</a>'
  //   })
  //   // alert('fghjk')
  //    // console.log(this.StudentForm.value);
  //     this.httpscx.post('http://localhost:8020/register',this.StudentForm.value).subscribe(res=> {
  //       console.log(res);
  // },err => {
  //   console.log(err)
  // }
      
  //     });
  //   }




    if (this.StudentForm.valid) {


      ///Beehaviour sub
      
      this.httpscx.post('http://localhost:8070/register',this.StudentForm.value).subscribe((res:any) => {
              console.log(res);
              console.log(res.status);
              // alert(res.message);
              // this.StudentForm.router.navigateByUrl['/']
              Swal.fire({
                    icon: 'success',
                    position:'top-end',
                    title: "Welcome..." + " " +firstname,
                    text: 'You have successfully registerd',
                    footer: '<a href>How can i help you</a>'
                  })

               //   if(res.status == 200){
                    this.router.navigateByUrl('/myprofile')
                 // }
              
        },err => {
          console.log(err);
      // alert(err.error.message)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.message,
        footer: '<a href>Why do I have this issue?</a>'
      })
          
        });
      
          
            
          }


  }

    
    
   
  
  

}

