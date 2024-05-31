import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError, filter, merge, of, range, switchMap, throwError } from 'rxjs';

@Component({
  selector: 'app-ex2',
  standalone: true,
  template: ``
})
export class Ex2Component implements OnInit {
  // TODO : Créer deux observables
  // TODO : Le premier observable émet des valeurs paires de 1 à 10
  // TODO : Le second observable émet des valeurs impaires de 1 à 10
  private evenObservable = range(1, 10).pipe(filter(value => value % 2 === 0));
  private oddObservable = range(1, 10).pipe(filter(value => value % 2 !== 0));
  // TODO : Merger les deux observables pour n'en former qu'un seul
  protected combinedObservable = merge(this.evenObservable, this.oddObservable);
  // TODO : Utiliser un opérateur pour afficher les retours de la méthode getFromId()
  // TODO : Notifier l'utilisateur en cas d'erreur
  protected getFromIdObservable = this.combinedObservable.pipe(
    switchMap(id => getFromId(id).pipe(
      catchError(error => {
        console.log(`Une erreur s'est produite pour l'identifiant`, error);
        return EMPTY;
      }),
    )),
  );

  ngOnInit(): void {
    this.getFromIdObservable.subscribe(console.log);
  }
}

// - Contraintes : Il est interdit de modifier cette méthode
const  getFromId = (id: number): Observable<{id: number, name: string}> => {
  if (id < 7) return of({id, name: `Name ${id}`});
  return throwError(() => id);
}