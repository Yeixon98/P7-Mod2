import {FactoryPokemon} from './factory';
import { PokemonInterface } from '../pokemon/pokemonInterface';
import {PokemonTierra} from '../pokemon/pokemonTierra';

/**
 * Clase PokemonCreator que creará el objeto pokemon
 */
export class PokemonTierraCreator extends FactoryPokemon {
  constructor(public nombre: string,
    public altura: number,
    public peso: number,
    public stats: number[]) {
    super();
  }
  public factoryMethod(): PokemonInterface {
    return new PokemonTierra(this.nombre, this.altura, this.peso, this.stats);
  }
}
