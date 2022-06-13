import { Component, OnInit } from '@angular/core';
import { ClockifyService } from '../services/clockify.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private _service: ClockifyService;
  constructor(service: ClockifyService) {
    this._service = service;
  }

  ngOnInit(): void {}
}
