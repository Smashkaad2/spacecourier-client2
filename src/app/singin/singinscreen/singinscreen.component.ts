import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../shared/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singinscreen',
  templateUrl: './singinscreen.component.html',
  styleUrls: ['./singinscreen.component.css']  // Asegúrate de que sea 'styleUrls' en lugar de 'styleUrl'
})
export class SinginscreenComponent implements OnInit {
  players: Player[] = [];
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.playerService.listarJugadores().subscribe(jugadores => this.players = jugadores);
  }

  onSubmit(): void {
    const player = this.players.find(p => p.username === this.username && p.password === this.password);
    if (player) {
      switch (player.rol) {
        case 'capitan':
          this.router.navigate([`/player/select/${player.id}`]);
          break;
        case 'piloto':
          this.router.navigate([`/menu/buttons/${player.id}`]);
          break;
        case 'comerciante':
          this.router.navigate([`/menu/buttons/${player.id}`]);
          break;
        default:
          this.errorMessage = 'Rol desconocido';
      }
    } else {
      this.errorMessage = 'FAIL';
    }
  }
}
