import { Component, Input, ViewChild } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from '../../model/planet';
import { Star } from '../../model/star';
import { Player } from '../../model/player';
import { ProductoxPlaneta } from '../../model/productoxplaneta';
import { Ship } from '../../model/ship';

@Component({
  selector: 'app-planet-view',
  templateUrl: './planet-view.component.html',
  styleUrl: './planet-view.component.css'
})
export class PlanetViewComponent {

  player: Player = new Player(0, " ", " ", " ");
  star: Star = new Star(0, " ", 0, 0, 0, 0);
  planet: Planet = new Planet(0, " ", " ");
  productsXplanet: ProductoxPlaneta[] = [];
  ship: Ship = new Ship(0, "", 0, 0, 0, 0, 0, 0);


  constructor(
    private playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  @ViewChild('buyButton') buyButton: any;

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

  isPilot(): boolean {
    return this.player.rol === 'piloto';
  }

  comprarObjetos(productActual: ProductoxPlaneta, playerActual: Player) {

    alert("El factor oferta del " + productActual.productoNombre + " es: " + productActual.factorOferta);
    this.playerService.conseguirNave(playerActual.id).subscribe(nave => {
      this.ship = nave
      //alert(this.ship.creditos)
      const precioProducto: number = productActual.factorOferta / (1 + productActual.stock);
      alert("La cantidad de creditos que tiene la nave " + this.ship.ship_name + " es: " + this.ship.creditos);
      if (precioProducto < this.ship.creditos) {
        const cantidad = prompt(`¿Cuántas unidades de ${productActual.productoNombre} deseas comprar?`);
        if (cantidad !== null) {
          const cantidadComprada = parseInt(cantidad, 10);
          this.playerService.addProductoANave(this.ship.id, productActual.productoid, cantidadComprada).subscribe(_ => alert("El producto " + productActual.productoNombre + " se añadio de manera correcta a la nave " + this.ship.ship_name));
          productActual.stock = productActual.stock - cantidadComprada;
          this.ship.capacidadCarga = this.ship.capacidadCarga - cantidadComprada;
          alert("La capacidad de la nave " + this.ship.ship_name + " luego de la compra es: " + this.ship.capacidadCarga);
        }

      }

    });

  }

}
