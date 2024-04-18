import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Ship } from '../model/ship';
import { Star } from '../model/star';
import { Planet } from '../model/planet';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private http: HttpClient
  ) {
  }

  private headers = new HttpHeaders(
    { "Content-Type": "application/json" }
  )

  listarJugadores(): Observable<Player[]> {
    return this.http.get<Player[]>(`${environment.serverUrl}/api/player/list`)
  }

  cargarJugador(id: number): Observable<Player> {
    return this.http.get<Player>(`${environment.serverUrl}/api/player/${id}`)
  }

  conseguirNave(id: number): Observable<Ship> {
    return this.http.get<Ship>(`${environment.serverUrl}/api/player/nave/${id}`)
  }

  editarJugadores(id:number, jugador:Player): Observable<Player> {
    return this.http.put<Player>(`${environment.serverUrl}/api/player/${id}`, jugador,{ headers: this.headers });
  }

  listarEstrellas(): Observable<Star[]> {
    return this.http.get<Star[]>(`${environment.serverUrl}/api/star/list`)
  }

  cargarEstrellas(id: number): Observable<Star> {
    return this.http.get<Star>(`${environment.serverUrl}/api/star/view/${id}`)
  }

  listarPlanetasEstrellas(id:number): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${environment.serverUrl}/api/star/list/planet/${id}`)
  }

  cargaPlaneta(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${environment.serverUrl}/api/planet/view/${id}`)
  }

  listarProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.serverUrl}/api/product/list`)
  }

}
