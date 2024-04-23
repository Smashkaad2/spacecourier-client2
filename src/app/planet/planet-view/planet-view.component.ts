import { Component, Input } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from '../../model/planet';
import { Star } from '../../model/star';
import { Player } from '../../model/player';
import { ProductoxPlaneta } from '../../model/productoxplaneta';

@Component({
  selector: 'app-planet-view',
  templateUrl: './planet-view.component.html',
  styleUrl: './planet-view.component.css'
})
export class PlanetViewComponent {

  player: Player = new Player(0," "," "," ");
  star: Star = new Star(0," ",0,0,0,0);
  planet: Planet = new Planet(0, " ", " ");
  productsXplanet: ProductoxPlaneta[] = [];
 

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

    const idplanet = this.route.snapshot.paramMap.get('idplanet');
    this.planetId = idplanet !== null ? idplanet : ''; 
  }

  
  @Input()
  set userId(userId: string) {
    this.playerService.cargarJugador(parseInt(userId, 10)).subscribe(jugador => this.player = jugador);
  }

  @Input()
  set starId(starId: string) {
    this.playerService.cargarEstrellas(parseInt(starId, 10)).subscribe(estrella => this.star = estrella);
  }

  
  @Input()
  set planetId(planetId: string) {
    this.playerService.cargaPlaneta(parseInt(planetId, 10)).subscribe(planeta => this.planet = planeta);
    this.playerService.listarProductosPlanetas(parseInt(planetId, 10)).subscribe(productosxplanetas => this.productsXplanet = productosxplanetas);
  }

}
