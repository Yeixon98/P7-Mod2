/**
 * Interfaz genérica de Pokémon
 */
 export interface PokemonInterface {
  getName(): string;
  getHeight(): number;
  getWeight(): number;
  getStats(): number[];
}
