import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../shared/player.service';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrl: './menu-buttons.component.css'
})
export class MenuButtonsComponent {

  userId: string = " ";

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = id !== null ? id : ''; 
  }

  okForward() {
    this.router.navigate(['/star/showlist', this.userId]);
  }

}
