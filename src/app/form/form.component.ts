import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Email: '' = "";
  Password: '' = "";
  inputAddress='';
  inputAddress2='';
  inputCity='';
  inputZip='';
  gridCheck='';
  State='';
  name='';
  
  constructor() { }

  ngOnInit(): void {
  }


  
  saveData(val:NgForm){
    debugger;
    console.log(val);
  }
}
