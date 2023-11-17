import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyRouterLinkDirective implements OnInit {
  @Input() appMyRouterLink: string = '';

  constructor(private elRaf: ElementRef, private renderer: Renderer2, private router: Router ) { }
  ngOnInit(): void {
    this.renderer.listen(
      this.elRaf.nativeElement,
      'click',
      this.clickHandler.bind(this)
    )
  }

  clickHandler(e: MouseEvent){
    console.log(this.appMyRouterLink);
    this.router.navigate([this.appMyRouterLink]);
  }
}
