import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: EmployeeComponent },
  {path: 'add', component: AddComponent },
  {path: 'delete/:id', component: DeleteComponent },
  {path: 'edit/:id', component: EditComponent },
  {path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
