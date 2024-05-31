import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, take } from 'rxjs';

@Component({
  selector: 'app-ex3',
  standalone: true,
  imports: [],
  template: ``
})
export class Ex3Component implements OnInit {
  // TODO : Créer deux observables qui emettent des valeurs à interval régulier mais un interval différent
  private obs1 = interval(1000);
  private obs2 = interval(2000);
  // TODO : Combiner les deux observables pour former un qui émet des tuples des valeurs émises par chacun des deux observables
  // TODO : Afficher uniquement les 10 premières valeurs émises par le nouvel observable
  protected combinedObservable = combineLatest([this.obs1, this.obs2]).pipe(
    take(10),
  );


  ngOnInit(): void {
      this.combinedObservable.subscribe(console.log);
  }
}
