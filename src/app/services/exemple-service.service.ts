import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExempleServiceService {

  constructor(private http: HttpClient) { }


  private prefix : string = "http://127.0.0.1:8000/exemple";



  //GET METHODS

  getStudentsFromExample() : any{
    return this.http.get(this.prefix+"/student");
  }

  getComptesAdminFromExemple() : any{
    return this.http.get(this.prefix+"/comptesAdmin");
  }

  getFormations() : any{
    return this.http.get(this.prefix+"/Formations");
  }

  getDemandes() : any{
    return this.http.get(this.prefix+"/Demande")
  }

  getTrainers() : any{
    return this.http.get(this.prefix+"/Trainer")
  }

  getSupervisors() : any{
    return this.http.get(this.prefix+"/Superviseur")
  }

  getCategoreis() : any{
    return this.http.get(this.prefix+"/Categories")
  }

  getSessions() : any{
    return this.http.get(this.prefix+"/Sessions")
  }

  getSuggestions() : any{
    return this.http.get(this.prefix+"/suggestion")
  }

  getInscriptions() : any{
    return this.http.get(this.prefix+"/inscription")
  }

  getColors() : any{
    return this.http.get(this.prefix+"/colors")
  }

  getMatieres() : any{
    return this.http.get(this.prefix+"/matiere")
  }

  


}
