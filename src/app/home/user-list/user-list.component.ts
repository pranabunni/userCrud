import { Component, OnInit, Input } from "@angular/core";
import { fromEvent } from "rxjs";
import { map, debounceTime } from "rxjs/operators";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  @Input("userList") userList: [];
  filterString: string;
  constructor() {}

  ngOnInit(): void {
    this.userList;
  }

  ngAfterViewInit() {
    fromEvent(document.getElementById("searchInput"), "input")
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(500)
      )
      .subscribe((res) => {
        this.filterString = res;
      });
  }

  get filterList() {
    if (this.filterString) {
      const list = this.userList.filter((item: any) => {
        if (item && item.name.includes(this.filterString)) {
          return true;
        } else {
          return false;
        }
      });
      return list;
    } else {
      return this.userList;
    }
  }
}
