import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-custom-element',
  templateUrl: './test-custom-element.component.html',
  styleUrls: ['./test-custom-element.component.css']
})
export class TestCustomElementComponent implements OnInit {
  drink = '';

  constructor() { }

  ngOnInit(): void { }

  setDrink(drinkName: string) {
    this.drink = drinkName;
  }

}
