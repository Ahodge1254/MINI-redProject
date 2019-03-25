import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DbService } from '../db.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  createGame: FormGroup;
  games = [];

  ageRatings = [
    'EC',
    'E',
    'E10+',
    'T',
    'M'
  ];


  constructor(private fb: FormBuilder, private dbService: DbService) { }

  ngOnInit() {
    this.createGame = this.fb.group({
      name: new FormControl(),
      genre: new FormControl(),
      ageRating: new FormControl(),
      system: new FormControl()
    })

    this.findGames;
  }

  onCreateGame() : void {
    this.games.unshift(this.createGame.value)
    this.dbService.makeGames(this.games[0]).subscribe(Game => this.games[0] = Game);
  }  
  
  findGames() : void {
    console.log("finding Games")
    this.dbService.getGames().subscribe(Games => {
      this.games = Games;
      this.games.reverse();
    })
  }

}
