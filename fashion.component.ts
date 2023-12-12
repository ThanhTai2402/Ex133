import { Component} from '@angular/core';
import { from } from 'rxjs';
import { FashionAPIService } from '../fashion-api.service';
import { Fashion } from '../Fashion';


@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})

export class FashionComponent {
  fashions:any;
  fashion= new Fashion();
  errMessage:string=''
  showDetails: boolean = false;
  showEdit: boolean = false;
  showCreate: boolean = false;
  constructor(public _service: FashionAPIService){
    alert("Welcome Admin LQTT")
    this._service.getFashions().subscribe({
      next:(data)=>{this.fashions=data},
      error:(err)=>{this.errMessage=err}
    })
  }

  searchFashion(Id:string)
  {
    this._service.getFashion(Id).subscribe({
      next:(data)=>{this.fashion=data},
      error:(err)=>{this.errMessage=err}
    })
    this.showDetails = true
  }

  closeDetails() {
    this.showDetails = false
  }

  New() {
    this.showEdit = false
    this.showCreate = true;
  }

  public setFashion(f:Fashion)
  {
    this.fashion=f
  }
  
  onFileSelected(event:any,fashion:Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.thumbnail=reader.result!.toString() 
    };

    reader.onerror = function (error) {
      console.log('Error: ', error);
    }; 
  }

  postFashion()
  {
    this._service.postFashion(this.fashion).subscribe({
      next:(data)=>{this.fashion=data},
      error:(err)=>{this.errMessage=err}
    })
  }

  deleteFashion(Id:string) {
    alert(Id)
    this._service.deleteFashion(Id).subscribe({
      next:(data)=>{this.fashions=data},
      error:(err)=>{this.errMessage=err}
      })
  }




}
