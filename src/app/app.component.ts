import { Component, OnInit, VERSION } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.name.valueChanges.subscribe(value => {
      console.log(value);
    });
    this.number1.valueChanges.subscribe(value => {
      console.log(value);
    });
  }
  name = new FormControl(
    { disabled: false, value: "fooooo" },
    Validators.required
  );
  user = { name: "ngModel" };

  number1 = new FormControl({ disabled: false, value: "1" });
}
