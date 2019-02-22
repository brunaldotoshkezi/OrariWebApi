import{Injectable} from '@angular/core';
import{IDege} from './dege';
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import{Observable} from 'rxjs';
import{catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DegeService{
  private degetUrl = "www.service.com/deget";

  constructor(private http: HttpClient){}

  getDeget(): Observable<IDege[]>{
    return this.http.get<IDege[]>(this.degetUrl).pipe(tap(data => console.log('All : ' + JSON.stringify(data))));
  }

  // private handleError(err: HttpErrorResponse){
  //   let errorMessage = '';
  //   if(err.error instanceof ErrorEvent){
  //     errorMessage = 'error ${err.error.message}';
  //   } else {
  //     errorMessage = 'server ${err.status}, ${err.message}';
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }
}

//[
//      { 'Id': 'ID1', "Code": 1.5, "Img": "Hide", "Rating": 5 },
//      { 'Id': 'ID2', "Code": 1, "Img": "Hide", "Rating": 5 }
//    ]