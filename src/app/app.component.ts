import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  public name: string = 'Oleg';
  
  public ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  public ngOnInit(): void {
    console.log('ngOnInit');
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  
  public ngOnDestroy(): void {
      
  }
}
