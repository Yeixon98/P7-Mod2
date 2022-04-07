import "mocha";
import { expect } from "chai";
import { PokemonTierraCreator } from "../src/factory/pokemonTierraCreator";
import { FactoryPokemon } from "../src/factory/factory";

describe("Class PokemonTierraCreator", () => {
  const pokemon: PokemonTierraCreator = new PokemonTierraCreator("Digglet",12,24,[45,23,12])
  it("Create PokemonCreator", () => {
    expect(pokemon).to.exist;
    expect(pokemon).to.be.an.instanceOf(FactoryPokemon);
  });

  it("Logic Factory", () => {
    expect(pokemon.logic()).to.eql("Name: Digglet, Altura: 12, Peso: 24, Estadisticas: 45-23-12")
  })
});
