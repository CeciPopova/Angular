import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnChanges {
  @Input('title') titleFromApp: string = '';
  @Input('activeUsers') activeUsers: { name: string; age: number }[] = [];
  @Output() onTestOutput = new EventEmitter<boolean>();
  
  isActive = false;

  inputValue = 'Hello!';

  ngOnInit(): void {
    console.log('navigation-> init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }


  handleClick(event: Event): void {
    this.isActive = !this.isActive;
    this.onTestOutput.emit(this.isActive);
  }
}
