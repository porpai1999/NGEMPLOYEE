import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: any = []
  formattedDate: any;
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshEmployeeList();
    const format = 'dd/MM/yyyy';
    const locale = 'en-US';
    this.formattedDate = formatDate(this.employee.joiningdate, format, locale);
  }

  refreshEmployeeList() {
    this.service.getEmployees().subscribe(data=> {
      this.employee = data;
    });
  }
}
