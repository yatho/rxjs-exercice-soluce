import { Component, model, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-ex5',
  standalone: true,
  imports: [FormsModule],
  template: `,
    <input type="text" [(ngModel)]="val" />
  `
})
export class Ex5Component {
  // TODO : Créer un formulaire avec un input
  // TODO : Afficher dans la console à chaque fois que l'utilisateur change la valeur de l'input
  // TODO : Utiliser un opérateur pour limiter le nombre de valeurs émises si l'input change trop rapidement
  // TODO : Utiliser un opérateur pour émettre que si il y a un changement de valeur
  protected val = model();
  private valObs = toObservable(this.val).pipe(
    debounceTime(500),
    distinctUntilChanged()
  );
  private valSig = toSignal(this.valObs)

  constructor() {
    this.valObs.subscribe(console.log);
    effect(() => {
      console.log(this.valSig());
    })
  }
}