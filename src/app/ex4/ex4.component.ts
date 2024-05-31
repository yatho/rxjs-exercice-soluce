import { Component, OnInit } from '@angular/core';
import { interval, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-ex4',
  standalone: true,
  imports: [],
  template: ''
})
export class Ex4Component implements OnInit {
  // TODO : Utiliser un interval pour émettre des valeurs
  // TODO : Utiliser un opérateur pour limiter le nombre de valeurs émises à 10
  // TODO : Utiliser un opérateur pour limiter les valeurs émises en fonction d'une condition
  // TODO : Utiliser un opérateur pour émettre les 5 dernières valeurs
  private obs = interval(1000).pipe(
    take(10),
    takeWhile(value => value < 9),
    takeLast(5)
  );
  
  ngOnInit(): void {
    this.obs.subscribe(console.log);
  }
}
