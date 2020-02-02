import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";
import _ from "lodash";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  contryInfo: any;
  getCountryInfo(userInput: any) {
    console.log(userInput);
    this.contryInfo = _.filter(this.rawdata, { name: userInput });
    console.log(this.contryInfo[0].currencies[0].name);
    console.log(this.contryInfo);
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
