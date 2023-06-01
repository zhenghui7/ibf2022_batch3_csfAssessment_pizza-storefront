import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { orderData, returnData } from '../models';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';

const SIZES: string[] = [
  "Personal - 6 inches",
  "Regular - 9 inches",
  "Large - 12 inches",
  "Extra Large - 15 inches"
]

const PIZZA_TOPPINGS: string[] = [
    'chicken', 'seafood', 'beef', 'vegetables',
    'cheese', 'arugula', 'pineapple'
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  form!: FormGroup
  fb = inject(FormBuilder)
  
  pizzaSvc = inject(PizzaService)
  router = inject(Router)
  
  pizzaSize = SIZES[0]

  constructor() { }

  ngOnInit(): void {
    this.createForm();
 
  }

  createForm() {
    this.form = this.fb.group({
      name: this.fb.control<string>('', [ Validators.required, Validators.minLength(3)] ),
      email: this.fb.control<string>('', [ Validators.required, Validators.email] ),
      size: this.fb.control<string>('0' ),
      base: this.fb.control<string>('', [ Validators.required] ),
      sauce: this.fb.control<string>('', [ Validators.required] ),
      toppings: this.fb.control<string[]>(PIZZA_TOPPINGS, [ Validators.required] ),
      comments: this.fb.control<string>('')
    })
  }

  updateSize(size: string) {
    this.pizzaSize = SIZES[parseInt(size)]
  }

  submit() {
    const data: orderData = this.form.value
    console.info(data)
    
    this.pizzaSvc.placeOrder(data)
    .then( (r: returnData) => {
      alert('uploaded')
      console.info(r)
      this.router.navigate(['/orders',r.email])
    })
    .catch(err => {
      alert(JSON.stringify(err))
    })
  }

}
