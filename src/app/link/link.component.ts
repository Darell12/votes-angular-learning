import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent  implements OnInit{
  @Input()
  link!: Link;
  @HostBinding('attr.class') cssClass = 'row'
  constructor(){
    
  }
  ngOnInit(): void {
    console.log(this.link);
  }
}
