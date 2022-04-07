import {FactoryPokemon} from './factory';
import { PokemonInterface } from '../pokemon/pokemonInterface';
import {PokemonAgua} from '../pokemon/pokemonAgua';

/**
 * Clase PokemonCreator que creará el objeto pokemon
 */
export class PokemonAguaCreator extends FactoryPokemon {
  constructor(public nombre: string,
    public altura: number,
    public peso: number,
    public stats: number[]) {
    super();
  }
  public factoryMethod(): PokemonInterface {
    return new PokemonAgua(this.nombre, this.altura, this.peso, this.stats);
  }
}
