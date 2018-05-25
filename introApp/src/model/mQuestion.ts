export class mQuestion {

private intitule: string;
private reponse: boolean; 

constructor (intitule: string, reponse: boolean ) {
  this.intitule = intitule;
  this.reponse = reponse;
}

public getIntitule (){
  return this.intitule;
}

public setIntitule (intitule: string){
  this.intitule = intitule;
}

public getReponse (){
  return this.reponse;
}

public setReponse (reponse: boolean){
  this.reponse = reponse;
}


}
