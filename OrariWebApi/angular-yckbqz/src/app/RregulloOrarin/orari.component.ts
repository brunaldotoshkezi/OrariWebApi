import { Component, OnInit, ViewChild } from '@angular/core';
import { IDege, IOrari } from '../dege';
import { DegeService } from '../dege.service';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatListOption, MatSelectionList } from '@angular/material';
@Component({
  selector: 'orari',
  templateUrl: './orari.component.html',
  styleUrls: ['./orari.component.css']
})

export class OrariComponent implements OnInit {
  deget: IDege[];
  oraret: IOrari[];
  errorMessage: string;
  _degetListFilter: string;
  filteredDege: IDege[];
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;
  dega: string;

  @ViewChild(MatSelectionList) selectionList: MatSelectionList;
  constructor(public degeService: DegeService) {}

  current_selected: string;

 

  ngOnInit(): void {

    this.selectionList.selectedOptions = new SelectionModel<MatListOption>(false);
  // this.deget = this.degeService.getDeget(); 
    this.degeService.getDeget().subscribe(
     deget =>{
       this.deget = deget;
       this.filteredDege = this.deget;
       this.filteredOptions = this.myControl.valueChanges
     .pipe(
       startWith(''),
       map(value => this.performFilter(value))
     );
   },
     error => this.errorMessage = <any>error);
     
  }

  onSelection(e, v){
    debugger
     this.current_selected = e.option.value;
  }
  
  performFilter(filterBy: string): IDege[] {
    debugger;
    filterBy = filterBy.toLocaleLowerCase();
    var c =  this.deget.filter((dege: IDege) => dege.Dega.toLocaleLowerCase().indexOf(filterBy) !== -1);
    if(c.length>0){
      this.dega = c[0].Dega;
    }else{
      this.dega="";
    }
    return c;
  }

  onClickDergo()
  {
    this.degeService.getLendet(this.dega).subscribe(
       oraret =>{
         debugger;
      this.oraret = oraret;
    });
  }
}