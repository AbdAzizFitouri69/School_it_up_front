import { Component, OnInit } from "@angular/core";
import { ExempleServiceService } from "src/app/services/exemple-service.service";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  constructor(public exemple : ExempleServiceService) {}

  ngOnInit() {}

  students : any[] = [];



  getStudents() : void {
    console.log("GOT STUDENTS!");
    this.exemple.getStudentsFromExample().subscribe((resp: any) => {
      this.students = resp;
      console.log(this.students);
    });
  }



}
