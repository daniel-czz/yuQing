import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmComponent } from './alarm/alarm.component';
import { DefaultComponent } from './default.component';
import { HomeComponent } from './home/home.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  
  {
    path:'',
    component: DefaultComponent,
    children: [ //这个对应 default html里面的 router-outlet
      {
        path:'home',
        component: HomeComponent
      },
      { 
        path:'alarm',
        component: AlarmComponent
      },
      {
        path:'keywords',
        component: KeywordsComponent
      },
      {
        path:'report',
        component: ReportComponent
      },
      {
        path:'**',
        component: HomeComponent
      },
    ],
    // { //我们也可以把这些component定义在外面，这样定义的话就会对应用app html中的router-outlet
    //     path:'alarm',
    //     component: AlarmComponent
    //   },
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
