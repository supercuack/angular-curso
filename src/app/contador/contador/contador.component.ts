import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
<h3>la base es : <strong>{{base}}</strong></h3>
<button (click)="acumular(base);">+ {{base}}</button>

<span>{{contador}}</span>

<button (click)="acumular(-base);">- {{base}}</button>
    
    
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    contador: number = 0;
    base: number = 5;
    //reemplaza los dos metodos sumar y restar
    acumular(valor: number) {
        this.contador += valor;

    }
    /*  sumar() {
    this.contador += 1;
  }
  restar() {
    this.contador -= 1;
  } */
}