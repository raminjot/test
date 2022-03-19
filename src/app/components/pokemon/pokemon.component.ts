import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './../../services/poke-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: any = '';
  pokemonImg = '';
  pokemonType = [];

  constructor(private activatedRouter: ActivatedRoute,
    private pokemonService: PokeApiService) {
      this.activatedRouter.params.subscribe(
        params => {
          this.getPokemon(params['id']);
        }
      )
    }

  ngOnInit(): void {
  }

  getPokemon(id:any) {
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      },
      error => {
        console.log(error);
      }
    )
  }

}
