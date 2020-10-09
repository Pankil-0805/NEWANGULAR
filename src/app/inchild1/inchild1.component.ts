import { Component, OnInit } from '@angular/core';
import{RoutService} from '../rout.service';

@Component({
  selector: 'app-inchild1',
  templateUrl: './inchild1.component.html',
  styleUrls: ['./inchild1.component.css']
})
export class Inchild1Component implements OnInit {
d1:any;
  constructor(private data:RoutService) { }

  ngOnInit(): void {
    this.data.getdata().subscribe((rout)=>{this.d1=rout
    console.log(rout)})
  }

}
