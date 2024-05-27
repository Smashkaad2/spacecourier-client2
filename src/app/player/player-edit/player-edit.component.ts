import { Component, Input } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../shared/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrl: './player-edit.component.css'
})
export class PlayerEditComponent {

  player: Player = new Player(1,"placeholder","placehplder","capn");
 

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  @Input()
  set id(id: number) {
    console.log("id", id)
    this.playerService.cargarJugador(id).subscribe(jugador => this.player = jugador);
  }

  actualizarPlayer() {
    this.playerService.editarJugadores(this.player.id, this.player).subscribe(jugador => console.log(this.player));
    this.router.navigate(['player/select/', this.player.id]);
  }

}
