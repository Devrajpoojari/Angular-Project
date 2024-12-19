import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { UserComponent } from './component/user.component';
import { NgForComponent } from './component/ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    UserComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
