import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'spaceCourier-client';
  nombre: string = 'Javier';
  jugadores: string[] = ['Javier','Jp','Gordo','Yoryo'];
}