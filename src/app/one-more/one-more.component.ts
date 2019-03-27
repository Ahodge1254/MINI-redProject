// import { Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';
// import { DbService } from '../db.service';
// import { Game } from '../models/game.model'
// import { Input } from '@angular/core'
// import { ActivatedRoute } from '@angular/router'

// @Component({
//   selector: 'app-one-more',
//   templateUrl: './one-more.component.html',
//   styleUrls: ['./one-more.component.css']
// })
// export class OneMoreComponent implements OnInit {
//   private games = []
//   public _game = {};
//   constructor(private dbService: DbService, 
//     private location: Location,
//     private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.getGame();
//   }

//   getGame(): void {
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.dbService.getGames().subscribe(game => this.games = game);
//   }

//   @Input() set game(game: any) {
//     this._game = game;
//   }

//   save(): void {
//     this.dbService.updateGames(this.game.id, this.game).subscribe(
//       () => this.goBack()
//     )
//   }

//   goBack() {
//     this.location.back()
//   }


// }
