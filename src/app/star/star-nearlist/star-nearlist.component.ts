import { Component, Input } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ship } from '../../model/ship';
import { Star } from '../../model/star';
import { Player } from '../../model/player';

@Component({
  selector: 'app-star-nearlist',
  templateUrl: './star-nearlist.component.html',
  styleUrl: './star-nearlist.component.css'
})
export class StarNearlistComponent {

  ship: Ship = new Ship(0,"No_Ship",10,10,10,10,10,10);
  player: Player = new Player(0," "," "," ");
  stars: Star[] = [];
  distanceToShip: number[] = [];
 

  
  constructor(
    private playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.playerService.listarEstrellas().subscribe(estrellas => {
      this.stars = estrellas;
      this.sortStarsByYCoordinate(); // Llamar a la función para ordenar las estrellas
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = id !== null ? id : ''; // userId se mantiene como una cadena
  }

  private sortStarsByYCoordinate(): void {
    this.stars.sort((a, b) => b.coordenada_y - a.coordenada_y);
  }

  @Input()
  set userId(userId: string) { // userId es una cadena en el @Input
    this.playerService.cargarJugador(parseInt(userId, 10)).subscribe(jugador => this.player = jugador);
    this.playerService.conseguirNave(parseInt(userId, 10)).subscribe(nave => this.ship = nave);
  }
  
}
