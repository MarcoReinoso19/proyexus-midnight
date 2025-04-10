/*
 * Once upon a time...
 */

enum MonsterType {
  VAMPIRE = 'VAMPIRE'
}

interface Weakness {
  name: string
}

interface VampireProps {
  type: MonsterType
  location: string;
  birthDate: number;
  deathDate: number;
  weaknesses: Weakness;
}


class Vampire {
  type: MonsterType
  location: string;
  birthDate: number;
  deathDate: number;
  weaknesses: Weakness;

  constructor(props: VampireProps) {
    this.type = props.type
    this.location = props.location;
    this.birthDate = props.birthDate;
    this.deathDate = props.deathDate;
    this.weaknesses = props.weaknesses;
  }

  get age(): number {
    return this.calcAge();
  }

  calcAge(): number {
    return this.deathDate - this.birthDate;
  }
}

// ...there was a guy named Vlad

const Dracula: VampireProps = new Vampire({
  type: MonsterType.VAMPIRE,
  location: "Transylvania",
  birthDate: 1428,
  deathDate: 1476,
  // weaknesses: [{ name: "Sunlight" }]
  weaknesses: { name: 'Garlic' }
});

console.log(Dracula.weaknesses.name)
