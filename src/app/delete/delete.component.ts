import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id:any
  employee: any;
  joiningdate = new Date();
  constructor(private router: Router, private route: ActivatedRoute, private service:SharedService) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  deleteEmployee() {
    this.service.deleteEmployee(this.id).subscribe(res=> {
      console.log(res);
      this.router.navigateByUrl('');
    });
  }

  ngOnInit(): void {
    this.refreshEmployee();
  }

  refreshEmployee() {
    this.service.getEmployee(this.id).subscribe(data=> {
     this.employee = data;
     console.log(this.employee);
   });
 }
}
