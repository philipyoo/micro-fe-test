import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyLibService } from './my-lib.service';

@Component({
  selector: 'my-lib',
  templateUrl: './my-lib.component.html',
  styleUrls: ['./my-lib.component.css']
})
export class MyLibComponent implements OnInit {
  @Input() headerText = 'Default';
  @Output() drinkSelection = new EventEmitter<string>();

  drinkData: any;

  constructor(private myLibService: MyLibService) { }

  ngOnInit(): void {
    this.myLibService.getDrinkData().subscribe(drinkData => this.drinkData = drinkData);
  }

  drinkSelected(drink: { name: string }) {
    this.drinkSelection.emit(drink?.name);
  }

}
