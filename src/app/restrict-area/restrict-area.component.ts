import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restrict-area',
  templateUrl: './restrict-area.component.html',
  styleUrls: ['./restrict-area.component.css']
})
export class RestrictAreaComponent implements OnInit {

  constructor( private route: Router ) { }

  ngOnInit() {
  }

  onLoginClick() {
    this.route.navigate(['login']);
  }

}
