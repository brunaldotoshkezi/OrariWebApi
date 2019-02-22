import { Component, OnInit } from '@angular/core';
import { IDege } from '../dege';
import { DegeService } from '../dege.service';


@Component({
  selector: 'orari',
  templateUrl: './orari.component.html',
  styleUrls: ['./orari.component.css']
})

export class OrariComponent implements OnInit {
  deget: IDege[];
  errorMessage: string;
  _degetListFilter: string;
  filteredDege: IDege[];

  // get degetListFilter(): string {
  //   return this._degetListFilter
  // }

  // set degetListFilter(value: string) {
  //   this._degetListFilter = value;
  //   this.filteredDege = this.degetListFilter ? this.performFilter(this.degetListFilter) : this.deget;
  // }

  ngOnInit(): void {
   this.degeService.getDeget().subscribe(
     deget =>{
       this.deget = deget;
       this.filteredDege = this.deget;
   },
     error => this.errorMessage = <any>error);
  //  this.deget = this.degeService.getDeget();
  }
  
  // performFilter(filterBy: string): IDege[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.deget.filter((dege: IDege) => dege.Id.toLocaleLowerCase().indexOf(filterBy) !== -1)
  // }

  constructor(private degeService: DegeService) {}
}