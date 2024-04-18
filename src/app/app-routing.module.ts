import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerElegirComponent } from './player/player-elegir/player-elegir.component';
import { MenuButtonsComponent } from './menu/menu-buttons/menu-buttons.component';
import { StarNearlistComponent } from './star/star-nearlist/star-nearlist.component';
import { StarViewComponent } from './star/star-view/star-view.component';
import { PlanetViewComponent } from './planet/planet-view/planet-view.component';
import { ProductViewComponent } from './product/product-view/product-view.component';

export const routes: Routes = [
  { path: 'player/list', component: PlayerListComponent },
  { path: 'player/edit/:id', component: PlayerEditComponent},
  { path: 'player/select/:id', component: PlayerElegirComponent},
  { path: 'menu/buttons/:id', component: MenuButtonsComponent},
  { path: 'star/showlist/:id', component: StarNearlistComponent},
  { path: 'star/view/:idplayer/:idstar', component: StarViewComponent},
  { path: 'planet/view/:idplayer/:idstar/:idplanet', component: PlanetViewComponent},
  { path: 'product/list/', component: ProductViewComponent},
  // { path: '', pathMatch: 'full', redirectTo: 'player/list' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      bindToComponentInputs: true, // Para poder usar @Input en rutas https://angular.io/guide/router
      onSameUrlNavigation: 'reload' // https://stackoverflow.com/a/52512361
    })], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
