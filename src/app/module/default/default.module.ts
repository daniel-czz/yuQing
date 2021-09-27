import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { AlarmComponent } from './alarm/alarm.component';


//antd组件--------------------------------------------------
import { NZ_I18N } from 'ng-zorro-antd/i18n';
// import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { zh_CN } from 'ng-zorro-antd/i18n';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';//日期模块
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';

//highchart表格模块
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ReportComponent,
    KeywordsComponent,
    AlarmComponent
  ],
  imports: [
    
    CommonModule,
    DefaultRoutingModule,
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzFormModule,
    NzIconModule,
    HighchartsChartModule,
    NzDatePickerModule,
    NzInputModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  // providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class DefaultModule { }
