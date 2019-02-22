import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
 @Input() name: string;
 constructor(private router: Router) { }

 redirect() {
  this.router.navigate(['/orari']);
}
}


//<li><a [routerLink]= "['/home']"> </a></li>--!