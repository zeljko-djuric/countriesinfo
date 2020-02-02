import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  getCountryInfo(userInput: any) {
    console.log(userInput);
  }
  constructor(private apiService: ApiService) {}

  rawdata: any;
  ngOnInit() {
    this.apiService.getData().subscribe(data => {
      this.rawdata = data;
      console.log(this.rawdata);
    });
  }
}
