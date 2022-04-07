import "mocha";
import { expect } from "chai";
import { PokemonTierraCreator } from "../src/factory/pokemonTierraCreator";
import { FactoryPokemon } from "../src/factory/factory";

describe("Class PokemonTierraCreator Instance 1", () => {
  const digglet: PokemonTierraCreator = new PokemonTierraCreator("Digglet",12,15,[10,23,12])
  it("Create Digglet", () => {
    expect(digglet).to.exist;
    expect(digglet).to.be.an.instanceOf(FactoryPokemon);
  });

  it("Logic Factory", () => {
    expect(digglet.logic()).to.eql("Name: Digglet, Altura: 12, Peso: 15, Estadisticas: 10-23-12")
  })
});

describe("Class PokemonTierraCreator Instance 2", () => {
  const sandshrew: PokemonTierraCreator = new PokemonTierraCreator("Sandshrew",12,15,[12,23,12])
  it("Create Sandshrew", () => {
    expect(sandshrew).to.exist;
    expect(sandshrew).to.be.an.instanceOf(FactoryPokemon);
  });

  it("Logic Factory", () => {
    expect(sandshrew.logic()).to.eql("Name: Sandshrew, Altura: 12, Peso: 15, Estadisticas: 12-23-12")
  })
});

describe("Class PokemonTierraCreator Instance 3", () => {
  const cubone: PokemonTierraCreator = new PokemonTierraCreator("Cubone",12,9,[10,12,12])
  it("Create Cubone", () => {
    expect(cubone).to.exist;
    expect(cubone).to.be.an.instanceOf(FactoryPokemon);
  });

  it("Logic Factory", () => {
    expect(cubone.logic()).to.eql("Name: Cubone, Altura: 12, Peso: 9, Estadisticas: 10-12-12")
  })
});
