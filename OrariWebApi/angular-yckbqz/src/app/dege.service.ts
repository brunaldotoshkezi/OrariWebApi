import{Injectable} from '@angular/core';
import{IDege, IOrari, IDisponibel} from './dege';
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import{Observable} from 'rxjs';
import{catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DegeService{
  private degetUrl = "http://localhost:59179/api/Degets";
  private lendetUrl = "http://localhost:59179/api/Oraris";
  constructor(private http: HttpClient){}

  getDeget(): Observable<IDege[]>{
    return this.http.get<IDege[]>(this.degetUrl).pipe(tap(data => console.log('All : ' + JSON.stringify(data))));
  }
  getLendet(dega:string): Observable<IOrari[]>{
    return this.http.get<IOrari[]>(this.lendetUrl+"?dega="+dega).pipe(tap(data => console.log('All : ' + JSON.stringify(data))));
   }

   getLendetDisponibel(tipi:string, klasaId:number,oraId:number,ditaId:number): Observable<IDisponibel[]>{
    return this.http.get<IDisponibel[]>(this.lendetUrl+"?tipi="+tipi+"&OraId="+oraId+"&KlasaId="+klasaId+"&DitaId="+ditaId).pipe(tap(data => console.log('All : ' + JSON.stringify(data))));
   }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = 'error ${err.error.message}';
    } else {
      errorMessage = 'server ${err.status}, ${err.message}';
    }
    console.error(errorMessage);
    //return throwError(errorMessage);
  }
}

//[
//      { 'Id': 'ID1', "Code": 1.5, "Img": "Hide", "Rating": 5 },
//      { 'Id': 'ID2', "Code": 1, "Img": "Hide", "Rating": 5 }
//    ]