import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { filter, map, range } from 'rxjs';

@Component({
  selector: 'app-ex1',
  standalone: true,
  imports: [AsyncPipe],
  template: `{{observable | async}}`,
})
export class Ex1Component implements OnInit {
  // TODO : Créer un observable qui émet une séquence de nombre de 1 à 10
  // TODO : Affiche le résultat dans la console et dans le template
  // TODO : Multiplier chaque valeur de l'observable par 2
  // TODO : Emettre uniquement les valeurs pairs
  // Naive method
  // protected observable = new Observable<number>(observer => {
  //   for (let i = 1; i <= 10; i++) {
  //     observer.next(i);
  //   }
  //   observer.complete();
  // };
  protected observable = range(1, 10).pipe(
    map(value => value * 2),
    filter(value => value % 2 === 0),
  );

  ngOnInit(): void {
    this.observable.subscribe(console.log);
  }

}
