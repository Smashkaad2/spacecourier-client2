import { Component, Input } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { Router } from '@angular/router';
import { Player } from '../../model/player';
import { Ship } from '../../model/ship';

@Component({
  selector: 'app-player-elegir',
  templateUrl: './player-elegir.component.html',
  styleUrl: './player-elegir.component.css'
})
export class PlayerElegirComponent {

  player: Player = new Player(1,"placeholder","placehplder","capn");
  ship: Ship = new Ship(1,"No_Ship",10,10,10,10,10,10);

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }


  @Input()
  set id(id: number) {
    console.log("id", id)
    this.playerService.cargarJugador(id).subscribe(jugador => this.player = jugador);
    this.playerService.conseguirNave(id).subscribe(nave => this.ship = nave);
  }

  okForward() {
    this.router.navigate(['/menu/buttons', this.player.id]);
  }

  
  editPlayer() {
    this.router.navigate([`/player/edit/${this.player.id}`]);
  }
  

}
