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

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss',
})
export class ChildComponentComponent
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
  @Input() message: string = '';

  constructor() {
    console.log('ChildComponent:Constructor');
  }

  ngOnChanges() {
    console.log('ChildComponent:OnChanges');
  }

  ngOnInit() {
    console.log('ChildComponent:OnInit');
  }

  ngDoCheck() {
    console.log('ChildComponent:DoCheck');
  }

  ngAfterContentInit() {
    console.log('ChildComponent:AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ChildComponent:AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ChildComponent:AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ChildComponent:AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ChildComponent:OnDestroy');
  }
}
