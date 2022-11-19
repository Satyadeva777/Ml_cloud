import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cloud';
  constructor() {
  }
  ngOnInit(): void{
  }
  Area:any;
  Bedrooms:any;
  Bathrooms:any;
  formValue:any;
  onSubmit(form:any){
    this.formValue=form.value;
    console.log(form.value);
  }
}
