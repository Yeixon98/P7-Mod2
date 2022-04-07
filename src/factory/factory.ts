import { PokemonInterface } from '../pokemon/pokemonInterface';

/**
 * Clase abstracta que declara el método factorymethod()
 */
export abstract class FactoryPokemon {
  public abstract factoryMethod(): PokemonInterface;

  public logic(): string {
    const pokemon = this.factoryMethod();
    return `Name: ${pokemon.getName()}, ` +
           `Altura: ${pokemon.getHeight()}, ` +
           `Peso: ${pokemon.getWeight()}, ` +
           `Estadisticas: ${pokemon.getStats().join("-")}`;
  }
}
