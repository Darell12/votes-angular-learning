import { Component } from '@angular/core';
import { Link } from './link/link.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links: Link[];

  constructor(){
    this.links = [
      new Link('Angular', 'https:/angular.io', 13300),
      new Link('Wordpress', 'https:/angular.io', 332),
      new Link('Lorem', 'https:/angular.io', 122),
      new Link('Ipsum', 'https:/angular.io', 32),
      new Link('Next', 'https:/angular.io', 212)
    ];
    console.log(this.links)
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement) {
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = ''
    return false
  }
}
