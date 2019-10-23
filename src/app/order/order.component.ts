import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public groupId: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.groupId = this.route.paramMap.map(param => param.get('id'));
  }

}
