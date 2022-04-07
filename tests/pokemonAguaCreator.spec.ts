import "mocha";
import { expect } from "chai";
import { PokemonAguaCreator } from "../src/factory/pokemonAguaCreator";
import { FactoryPokemon } from "../src/factory/factory";

describe("Class PokemonAguaCreator Instance 1", () => {
  const squirtle: PokemonAguaCreator = new PokemonAguaCreator("Squirtle",24,15,[12,23,12])
  it("Create Squirtle", () => {
    expect(squirtle).to.exist;
    expect(squirtle).to.be.an.instanceOf(FactoryPokemon);
  });

  it("Logic Factory", () => {
    expect(squirtle.logic()).to.eql("Name: Squirtle, Altura: 24, Peso: 15, Estadisticas: 12-23-12")
  })
});

describe("Class PokemonAguaCreator Instance 2", () => {
  const tentacool: PokemonAguaCreator = new PokemonAguaCreator("Tentacool",14,18,[45,28,12])
  it("Create Tentacool", () => {
    expect(tentacool).to.exist;
    expect(tentacool).to.be.an.instanceOf(FactoryPokemon);
  });

  it("Logic Factory", () => {
    expect(tentacool.logic()).to.eql("Name: Tentacool, Altura: 14, Peso: 18, Estadisticas: 45-28-12")
  })
});

describe("Class PokemonAguaCreator Instance 3", () => {
  const seel: PokemonAguaCreator = new PokemonAguaCreator("Seel",12,50,[15,23,9])
  it("Create Seel", () => {
    expect(seel).to.exist;
    expect(seel).to.be.an.instanceOf(FactoryPokemon);
  });

  it("Logic Factory", () => {
    expect(seel.logic()).to.eql("Name: Seel, Altura: 12, Peso: 50, Estadisticas: 15-23-9")
  })
});