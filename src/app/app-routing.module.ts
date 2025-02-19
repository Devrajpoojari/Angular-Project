import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { UserComponent } from './component/user.component';
import { DevComponent } from './dev/dev.component';

const routes: Routes = [
  {
    path: "table", component:NgForComponent, pathMatch:'full'
  },
  {
    path: "login", component:UserComponent, pathMatch:'full'
  },
  {
    path: "dev-blocks", component:DevComponent, pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
