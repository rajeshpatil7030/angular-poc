import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms'
import { validate } from 'json-schema';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements AfterViewInit {

  @Output() onFormGroupChange = new EventEmitter<any>();
    addWellFrom = this.formBuilder.group({
    'name' : new FormControl('',Validators.required),
    'type': new FormControl('', Validators.required),
    'sourceKey':new FormControl('', Validators.required)
  })

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

  }

  onSubmit(){
    if(this.addWellFrom.valid){
      this.onFormGroupChange.emit(this.addWellFrom.value)
      this.addWellFrom.reset()
    }
  }

}
