import {
  Component,
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Renderer2
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

//提供MyInputAccessor实例给表单指令
export const MY_INPUT_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MyInputComponent),
  multi: true
};

@Component({
  selector: "app-my-input",
  providers: [MY_INPUT_ACCESSOR],
  // host: {
  //   '(input)': '$any(this)._handleInput($event.target.innerHTML)',
  //   '(blur)': 'onTouched()',
  // },
  templateUrl: "./my-input.component.html"
})
export class MyInputComponent implements ControlValueAccessor {
  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {}

  value = "";
  disabled = false;
  onChange = (_: any) => {};

  onTouched = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  add(value: string) {
    let rs = Number(value) + 1;
    this.value = rs.toString();
    this.onChange(rs);
  }

  minus(value: string) {
    let rs = Number(value) - 1;
    this.value = rs.toString();
    this.onChange(rs);
  }
}
