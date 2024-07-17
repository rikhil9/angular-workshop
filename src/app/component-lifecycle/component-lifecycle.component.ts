import {
  Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
} from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-component-lifecycle',
  standalone: true,
  imports: [ChildComponentComponent],
  templateUrl: './component-lifecycle.component.html',
  styleUrl: './component-lifecycle.component.scss',
})
export class LifecycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  displayChild: boolean = false;
  constructor() {
    console.log('Parent Component: Constructor');
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log('Parent Component: OnChanges');
  }

  ngOnInit() {
    console.log('Parent Component: OnInit');
  }

  ngDoCheck() {
    console.log('Parent Component: DoCheck');
  }

  ngAfterContentInit() {
    console.log('Parent Component: AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Parent Component:AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Parent Component:AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Parent Component:AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Parent Component:OnDestroy');
  }
}
