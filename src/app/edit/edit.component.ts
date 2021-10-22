import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { formatDate, Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  employee: any;
  name:any;
  designation:any;
  address:any;
  salary:any;
  joiningdate = new Date();
  dateplaceholder: any;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private service:SharedService) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    this.refreshEmployee();
    
  }

  updateEmployee() {
    var val = 
    { 
      id: this.id,
      name: this.name,
      designation: this.designation,
      address: this.address,
      salary: this.salary,
      joiningDate: this.joiningdate
    }

    if (this.joiningdate == null) {
      val.joiningDate = this.employee.joiningdate;
    }

    this.service.updateEmployee(val).subscribe(res=> {
      console.log(res);
      this.router.navigateByUrl('');
    })
  }

  refreshEmployee() {
    this.service.getEmployee(this.id).subscribe(data=> {
    this.dateplaceholder = data.joiningdate;
    this.employee = data;
    this.name = this.employee.name;
    this.designation = this.employee.designation;
    this.address = this.employee.address;
    this.salary = this.employee.salary;
     console.log(this.employee);
   });
 }

 Back() {
  this.location.back();
 }
}
