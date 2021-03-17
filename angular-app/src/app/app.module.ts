import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonDemoPageComponent } from './button-demo-page/button-demo-page.component';
import { SpinnerDemoPageComponent } from './spinner-demo-page/spinner-demo-page.component';
import { DropDownDemoPageComponent } from './drop-down-demo-page/drop-down-demo-page.component';
import { ListGroupDemoPageComponent } from './list-group-demo-page/list-group-demo-page.component';
import { LazyLoadingDemoPageComponent } from './lazy-loading-demo-page/lazy-loading-demo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDemoPageComponent,
    SpinnerDemoPageComponent,
    DropDownDemoPageComponent,
    ListGroupDemoPageComponent,
    LazyLoadingDemoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
