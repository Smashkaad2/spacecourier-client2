import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { CommonModule } from '@angular/common';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { FormsModule } from '@angular/forms';
import { PlayerElegirComponent } from './player/player-elegir/player-elegir.component';
import { MenuButtonsComponent } from './menu/menu-buttons/menu-buttons.component';
import { StarNearlistComponent } from './star/star-nearlist/star-nearlist.component';
import { StarViewComponent } from './star/star-view/star-view.component';
import { PlanetViewComponent } from './planet/planet-view/planet-view.component';
import { ProductViewComponent } from './product/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerEditComponent,
    PlayerElegirComponent,
    MenuButtonsComponent,
    StarNearlistComponent,
    StarViewComponent,
    PlanetViewComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
