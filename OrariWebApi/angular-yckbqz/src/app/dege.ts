export interface IDege{
  Id: number;
  Dega : string;
}

export interface IOrari
{Id: number;
 Dega: string;
 Viti:number;
 Paraleli:string;
 Lenda:string;
 Tipi:string;
 Pedagog:string;
 Dita:number;
 Klasa: number;
 Ora:number;
 Zgjedhje:number;
 Final:boolean;

}

export interface IDisponibel
{ 
 DitaId : number;
 OraId : number;
 KlasaId : number;
 Perdorur : boolean;
 Tipi : string;
 Dita : string;
 Klasa : string;
 Ora : string;
}