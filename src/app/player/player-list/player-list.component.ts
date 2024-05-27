import { Component } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../shared/player.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent {


  players: Player[] = [];

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.playerService.listarJugadores().subscribe(jugadores => this.players = jugadores)
  }

  defineRol(rol: String, id: any){
    if (rol === "capitan") {
      this.router.navigate(['player/select/', id]);
    }
    else if(rol === "comerciante"){
      this.router.navigate(['menu/buttons/',id]);
    }
  }
}
