import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-secure',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  userData: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getUserData().subscribe(userData => {
      console.log('-->', userData)
      this.userData = userData
    });
  }
}
