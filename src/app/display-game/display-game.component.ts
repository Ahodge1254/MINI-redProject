import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-display-game',
  templateUrl: './display-game.component.html',
  styleUrls: ['./display-game.component.css']
})
export class DisplayGameComponent implements OnInit {
  public _game = {};

  ngOnInit() {}

  @Input() set game(game: any) {
    console.log("setting")
    this._game = game;
  }

  get game() : any {
    console.log("I'm getting the games")
    return this._game;
  }

}
