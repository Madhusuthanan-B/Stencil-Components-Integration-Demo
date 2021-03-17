import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonDemoPageComponent } from './button-demo-page/button-demo-page.component';
import { DropDownDemoPageComponent } from './drop-down-demo-page/drop-down-demo-page.component';
import { LazyLoadingDemoPageComponent } from './lazy-loading-demo-page/lazy-loading-demo-page.component';
import { ListGroupDemoPageComponent } from './list-group-demo-page/list-group-demo-page.component';
import { SpinnerDemoPageComponent } from './spinner-demo-page/spinner-demo-page.component';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonDemoPageComponent
  },
  {
    path: 'spinners',
    component: SpinnerDemoPageComponent
  },
  {
    path: 'drop-downs',
    component: DropDownDemoPageComponent
  },
  {
    path: 'list-group',
    component: ListGroupDemoPageComponent
  },
  {
    path: 'lazy-demo',
    component: LazyLoadingDemoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
