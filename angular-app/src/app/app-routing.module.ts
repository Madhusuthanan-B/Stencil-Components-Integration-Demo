import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonDemoPageComponent } from './button-demo-page/button-demo-page.component';
import { CombinedPlaygroundComponent } from './combined-playground/combined-playground.component';
import { DropDownDemoPageComponent } from './drop-down-demo-page/drop-down-demo-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ListGroupDemoPageComponent } from './list-group-demo-page/list-group-demo-page.component';
import { SpinnerDemoPageComponent } from './spinner-demo-page/spinner-demo-page.component';

const routes: Routes = [
  {
    path: 'introduction',
    component: IntroPageComponent
  },
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
    path: 'play-ground',
    component: CombinedPlaygroundComponent
  },
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
