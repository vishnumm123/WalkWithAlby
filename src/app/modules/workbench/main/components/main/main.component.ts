import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  rateForm!: FormGroup;
  billAmount:any;

  ngOnInit(): void {
    this.rateForm = this.formBuilder.group({
      currentRate: ['',Validators.required],
      bookingRate: ['',Validators.required],
      weight: ['',Validators.required]
    })
  }

  calculateAmount() {
    let making = ((this.rateForm.value.currentRate * this.rateForm.value.weight) * 2.5) / 100;
    let totalGoldRate = (this.rateForm.value.bookingRate * this.rateForm.value.weight) + making;
    let gst = (totalGoldRate * 3) / 100;
    let actualBill = totalGoldRate + gst;
    this.billAmount = actualBill;
    console.log(making)
  }

  get rateFormValid(){  
    return this.rateForm.valid;
  }

}
