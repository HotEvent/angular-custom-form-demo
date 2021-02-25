import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MyInputAccessor } from "./my-input-accessor";
import { MyInputComponent } from "./my-input.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, MyInputAccessor, MyInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
