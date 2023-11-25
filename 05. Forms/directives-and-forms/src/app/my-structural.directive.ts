import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(this.appMyStructural);
    //console.log(changes);
    if (this.appMyStructural) {
      this.vcRef.createEmbeddedView(this.templateRef, {
        value: 'value From NgOnChanges 123',
        
      });
    } else {
      this.vcRef.clear();
    }
  }
}
