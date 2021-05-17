import { Component,  ViewChild } from '@angular/core';
import { WellComponent } from '../well/well.component';

@Component({
  selector: 'app-well-known-list',
  templateUrl: './well-known-list.component.html',
  styleUrls: ['./well-known-list.component.scss']
})
export class WellKnownListComponent {
  @ViewChild(WellComponent) wellComponent; 
  
  wellList = [
    {id: 1, name: "TestRLWell001", type: "esp", sourceKey: 10001},
    {id: 2, name: "TestRLWell002", type: "rls", sourceKey: 10002},
    {id: 3, name: "TestRLWell003", type: "rls", sourceKey: 10003},
    {id: 4, name: "TestRLWell004", type: "esp", sourceKey: 10004},
    {id: 5, name: "TestRLWell005", type: "rls", sourceKey: 10005}
  ];

  constructor() { }

  onFormGroupChangeEvent(event){
    this.wellList.push(event)
  }

  updateWell(well){
    this.wellComponent.addWellFrom.controls['sourceKey'].patchValue(well.sourceKey);
  }


}
