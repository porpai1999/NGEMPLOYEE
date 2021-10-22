import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  employee:any;
  id:any;
  constructor(private route: ActivatedRoute, private service:SharedService) { this.id = this.route.snapshot.paramMap.get('id'); }

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
