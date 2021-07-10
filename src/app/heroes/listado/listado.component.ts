import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {

 heroes:string[]=['spuderman','thor'];
 heroeBorradol:string='';

 borrarHeroe(){
   this.heroeBorradol =this.heroes.pop()||'';
  
 }

}
