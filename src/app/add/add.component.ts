import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name:any;
  designation:any;
  address:any;
  salary:any;
  joiningdate = new Date();

  constructor(private router: Router, private route: ActivatedRoute, private service:SharedService) { 
    
  }

  ngOnInit(): void {
  }

  addEmployee() {
    var val = 
    { 
      id: 0,
      name: this.name,
      designation: this.designation,
      address: this.address,
      salary: this.salary,
      joiningDate: this.joiningdate
    }

    this.service.addEmployee(val).subscribe(res=> {
      console.log(res);
      this.router.navigateByUrl('');
    })
  }

}
