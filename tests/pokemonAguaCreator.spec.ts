import "mocha";
import { expect } from "chai";
import { PokemonAguaCreator } from "../src/factory/pokemonAguaCreator";
import { FactoryPokemon } from "../src/factory/factory";

describe("Class PokemonAguaCreator", () => {
  const pokemon: PokemonAguaCreator = new PokemonAguaCreator("Vaporeon",12,24,[45,23,12])
  it("Create PokemonCreator", () => {
    expect(pokemon).to.exist;
    expect(pokemon).to.be.an.instanceOf(FactoryPokemon);
  });

  it("Logic Factory", () => {
    expect(pokemon.logic()).to.eql("Name: Vaporeon, Altura: 12, Peso: 24, Estadisticas: 45-23-12")
  })
});
