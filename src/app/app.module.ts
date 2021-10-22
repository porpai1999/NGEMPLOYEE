import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';

import {AccordionModule} from 'primeng/accordion';
import { MenuItem } from 'primeng/api'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    ButtonModule,
    TableModule,
    CardModule,
    DividerModule,
    PanelModule,
    CalendarModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputTextModule
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
