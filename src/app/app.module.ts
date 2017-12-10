import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MastersComponent } from './modules/masters/masters.component';
import { StudentsComponent } from './modules/students/students.component';
import { StaffsComponent } from './modules/staffs/staffs.component';
import { AttendanceComponent } from './modules/attendance/attendance.component';
import { ExaminataionComponent } from './modules/examinataion/examinataion.component';
import { AccountsComponent } from './modules/accounts/accounts.component';
import { LibraryComponent } from './modules/library/library.component';
import { HostelComponent } from './modules/hostel/hostel.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MastersComponent,
    StudentsComponent,
    StaffsComponent,
    AttendanceComponent,
    ExaminataionComponent,
    AccountsComponent,
    LibraryComponent,
    HostelComponent,
    AppSidebarComponent,
    AppHeaderComponent,
    AppFooterComponent,
    FullLayoutComponent,
    SimpleLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
