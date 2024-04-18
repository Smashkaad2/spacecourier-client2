import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../shared/player.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  products: Product[] = [];

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.playerService.listarProductos().subscribe(productos => this.products = productos)
  }

}
