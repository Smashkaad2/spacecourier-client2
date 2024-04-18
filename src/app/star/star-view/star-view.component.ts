import { Component, Input } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../model/player';
import { Star } from '../../model/star';
import { Planet } from '../../model/planet';

@Component({
  selector: 'app-star-view',
  templateUrl: './star-view.component.html',
  styleUrl: './star-view.component.css'
})
export class StarViewComponent {

  player: Player = new Player(0," "," "," ");
  star: Star = new Star(0," ",0,0,0,0);
  planets: Planet[] = []
 

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {

    const idplayer = this.route.snapshot.paramMap.get('idplayer');
    this.userId = idplayer !== null ? idplayer : ''; 

    const idstar = this.route.snapshot.paramMap.get('idstar');
    this.starId = idstar !== null ? idstar : ''; 
  }


  @Input()
  set userId(userId: string) {
    this.playerService.cargarJugador(parseInt(userId, 10)).subscribe(jugador => this.player = jugador);
  }

  @Input()
  set starId(starId: string) {
    this.playerService.cargarEstrellas(parseInt(starId, 10)).subscribe(estrella => this.star = estrella);
    this.playerService.listarPlanetasEstrellas(parseInt(starId, 10)).subscribe(planetas => this.planets = planetas);
  }

  
}
