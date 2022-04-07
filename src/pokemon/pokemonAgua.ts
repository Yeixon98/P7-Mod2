import {PokemonInterface} from './pokemonInterface';

/**
 * Clase Pokemon que implemanta la interfaz PokemonInterface
 */
export class PokemonAgua implements PokemonInterface {
  constructor(private name: string,
    private height: number,
    private weight: number,
    private stats: number[]) {}

  /**
  * Getter del nombre
  * @return devuelve el atributo name
  */
  getName() {
    return this.name;
  }

  /**
  * Getter de altura
  * @return devuelve el atributo height
  */
  getHeight() {
    return this.height;
  }

  /**
  * Getter del peso
  * @return devuelve el atributo weight
  */
  getWeight() {
    return this.weight;
  }

  /**
  * Getter de los stats
  * @return devuelve el atributo stats que es un array de number
  */
  getStats() {
    return this.stats;
  }
}
