import { Component, OnInit } from '@angular/core';

export class Ticket {
  public deptname: string;
  public arrivename: string;
  public regdate: Date;
  public numpassage: number;
}
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent implements OnInit {
  constructor() { }

  model = new Ticket();
  Airport: string[] = [
    'SFO',
    'LAX',
    'WA',
    'SEA',
    'ORD',
    'MLA',
    'BOS'
  ];
  isClicked = false;
  ngOnInit(): void {
  }

  onSubmit(form): void {
    console.log(form.value);
    this.isClicked = true;
  }
}
