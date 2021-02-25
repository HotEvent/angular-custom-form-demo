import {
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
    useExisting: forwardRef(() => MyInputAccessor),
    multi: true
  };
  
  @Directive({
    selector: "[myInput]",
    providers: [MY_INPUT_ACCESSOR],
    host: {
      "(input)": "$any(this)._handleInput($event.target.innerHTML)",
      "(blur)": "onTouched()"
    }
  })
  export class MyInputAccessor implements ControlValueAccessor {
    constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {}
  
    onChange = (_: any) => {};
  
    onTouched = () => {};
  
    writeValue(obj: any): void {
      this._renderer.setProperty(
        this._elementRef.nativeElement,
        "innerHTML",
        obj
      );
    }
  
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
  
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
  
    setDisabledState(isDisabled: boolean): void {
      const value = isDisabled ? "false" : "true";
      this._renderer.setAttribute(
        this._elementRef.nativeElement,
        "contenteditable",
        value
      );
    }
  
    _handleInput(value: any): void {
      this.onChange(value);
    }
  }
  