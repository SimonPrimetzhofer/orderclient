import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/api/services';
import { Observable } from 'rxjs';
import { Group } from 'src/api/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  public groups: Observable<Group[]> = null;

  constructor(private groupService: GroupsService, private router: Router) { }

  ngOnInit() {
    this.groups = this.groupService.GroupsGetGroups();
  }

  public openOrders(groupId: number) {
    console.log(groupId);
    this.router.navigate([`/orders/${groupId}`]);
  }

}
