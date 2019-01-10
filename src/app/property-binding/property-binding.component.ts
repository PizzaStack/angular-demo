import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public notes = {
    question: "What is property binding?",
    answer: `Property binding sets a property to the value of a template
    
    Can be used to provide input to child components`
  }

  public styleObject = {
    color: 'red',
    border: '1px solid black'
  }

  public changeBackgroundColor() {
    this.styleObject.color = 'blue';
  }

  constructor() { }

  ngOnInit() {
  }

}
