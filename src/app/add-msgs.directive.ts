import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[add-host]'
})
export class AddMsgsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}