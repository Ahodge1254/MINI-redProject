import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DbService} from '../db.service'
import { Game } from '../models/game.model'
// import { Location } from '@angular/common'

@Component({
  selector: 'app-display-game',
  templateUrl: './display-game.component.html',
  styleUrls: ['./display-game.component.css']
})
export class DisplayGameComponent implements OnInit {
  public _game = {};
  private games = []
  selectedGame: Game;

  constructor(private dbService: DbService){}

  ngOnInit() {}

  @Input() set game(game: any) {
    this._game = game;
  }

  get game() : any {
    return this._game;
  }

  findGames() : void {
    this.dbService.getGames().subscribe(Games => {
      this.games = Games;
      this.games.reverse();
    })
  }


  onDeleteGame(id) {
    this.dbService.deleteGames(id).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.findGames();
  }

  onUpdateGame(game: Game){
    this.selectedGame = game
  }

  save(): void {
    console.log(this.game)
    this.dbService.updateGames(this.game.id, this.game ).subscribe(
      res => console.log(res)
      // () => this.goBack()
    )
  }

  // goBack() {
  //   this.location.back()
  // }

}
