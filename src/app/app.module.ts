import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllAboutComponent } from './core/components/all-about/about-component.component';
import { BasicFormComponent } from './core/forms/basic-form/basic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './core/utilityComponents/spinner/spinner.component';
import { LoaderService } from './core/utilityComponents/loader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengFormComponent } from './core/forms/primeng-form/primeng-form.component';
import { BasicTableComponent } from './core/table/basic-table/basic-table.component';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { CarRepository, LazyTableComponent } from './core/table/lazy-table/lazy-table.component';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PersonComponent } from './core/forms/wizard/person/person.component';
import { SeatComponent } from './core/forms/wizard/seat/seat.component';
import { SubmitComponent } from './core/forms/wizard/submit/submit.component';
import { StudentsManagementComponent } from './typescript/student_management_system/view/students-management/students-management.component';
import { StudentsManagementListComponent } from './typescript/student_management_system/view/students-management-list/students-management-list.component';
import { ParentEventComponent } from './core/events/parent-event/parent-event.component';
import { Child1EventComponent } from './core/events/child1-event/child1-event.component';
import { Child2EventComponent } from './core/events/child2-event/child2-event.component';

import { ParentDataComponent } from './core/dataPassing/parent/parent.component';
import { Child1DataComponent } from './core/dataPassing/child1/child1.component';
import { Child2DataComponent } from './core/dataPassing/child2/child2.component';

import { RouterTestingModule } from './core/routing/routing.testing.module';
import { ParentRouterPageComponent } from './core/routing/parent-router-page/parent-router-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentService } from './typescript/student_management_system/service/student.service';
import { RepositoryService } from './typescript/student_management_system/infrastructure/repository.service';
import { DateTimeFormattingComponent } from './core/date-time-formatting/date-time-formatting.component';
import { PipesComponent } from './core/pipes/pipes.component'; 
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  declarations: [
    AppComponent,
    AllAboutComponent,
    BasicFormComponent,
    SpinnerComponent,
    BasicTableComponent,
    LazyTableComponent,
    PrimengFormComponent,
    PersonComponent,
    SeatComponent,
    SubmitComponent,
    StudentsManagementComponent,
    StudentsManagementListComponent,
    ParentEventComponent,
    Child1EventComponent,
    Child2EventComponent,
    ParentDataComponent,
    Child1DataComponent,
    Child2DataComponent,
    ParentRouterPageComponent,
    DateTimeFormattingComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    CheckboxModule,
    InputMaskModule,
    InputNumberModule,
    MultiSelectModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    ToastModule,
    RouterTestingModule,
    HttpClientModule,
    DataViewModule,
  ],
  providers: [LoaderService, ConfirmationService, CarRepository, MessageService, StudentService, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
