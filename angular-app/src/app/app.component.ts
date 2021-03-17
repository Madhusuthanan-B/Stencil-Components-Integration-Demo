import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INavBarOption } from '@foo/core-library/dist/types/components/nav-bar/nav-bar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  isCardVisible = false;
  navBarOptions: INavBarOption[] = [
    {
      name: 'Introduction',
      value: 'intro',
      isActive: true,
      isDisabled: false
    },
    {
      name: 'Buttons',
      value: 'buttons',
      isActive: false,
      isDisabled: false
    },
    {
      name: 'Spinners',
      value: 'spinners',
      isActive: false,
      isDisabled: false
    },
    {
      name: 'Drop Downs',
      value: 'drop-downs',
      isActive: false,
      isDisabled: false
    },
    {
      name: 'List Group',
      value: 'list-group',
      isActive: false,
      isDisabled: false
    },
    {
      name: 'Lazy loading demo',
      value: 'lazy-demo',
      isActive: false,
      isDisabled: false
    },
    {
      name: 'Modal',
      value: 'modal',
      isActive: false,
      isDisabled: true
    }
  ];

  constructor(private router: Router) { }

  onNavigationSelect(event: CustomEvent<INavBarOption>) {
    console.log('event', event.detail);
    this.router.navigate([event.detail.value]);
  }

  onClick(event: any) {
    console.log('click event working: ', event);
  }
}
