import { HttpClient } from '@angular/common/http';
// import { Identifiers } from '@angular/compiler';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  dbdata:any
  id:any
  firstname:any
  lastname:any
  email:any
  phone:any

  

  constructor(
    private spinner: NgxSpinnerService,
    private httpclient: HttpClient
  ) { }

  ngOnInit(): void {
   
    this.spinner.show();
        
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
 



  }



  // ******** View all data *************//

  onSubmit(){
    this.httpclient.get('http://localhost:8070/viewdata').subscribe((data:any) =>{
      console.log(data);
      this.dbdata=data.data
      console.log(this.dbdata)
     console.log(this.dbdata[0].first_name)
      },
      err=>{
        console.log(err.error.message)
      })
  }






   // ******** Delete by id *************//


  onDelete(id:any){
    Swal.fire({
      title: 'Are you sure delete your data ?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Delete`,
       //denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.httpclient.delete('http://localhost:8070/delete/'+id).subscribe((data:any) =>{
          console.log(data);
         
    
      })
        Swal.fire('Delete', '', 'success')
        
      } 
    })
}






 // ******** Edit our data  *************//

onEdit(data:any,index:any){

  this.id=index
  this.firstname=data.first_name
  this.lastname=data.last_name
  this.email=data.email
  this.phone=data.phone

}



//********** Show on form ***********//

onSave() {
  this.httpclient.put('http://localhost:8070/update/'+this.id,{firstname:this.firstname,lastname:this.lastname,email:this.email,phone:this.phone}).subscribe((data:any) =>{
    console.log(data);
    console.log(this.id)
})

}





}
