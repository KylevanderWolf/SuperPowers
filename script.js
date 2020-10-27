const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

//Opdracht 1
let names = superheroes.map(element => element.name)
console.log(names)

//Opdracht 2
let ligthWeighted = superheroes.filter(element => element.weight < 190)
console.log(ligthWeighted)


//Opdracht 3
let heavyWeight = superheroes.filter(element => element.weight == 200).map(element => element.name)
console.log(heavyWeight)

//Opdracht 4
let firstAppearance = superheroes.map(element => element.first_appearance)
console.log(firstAppearance)

//Opdracht 5
let publisherDC = superheroes.filter(element => element.publisher === "DC Comics")
console.log(publisherDC)
let marvelComics = superheroes.filter(element => element.publisher === "Marvel Comics")
console.log(marvelComics)

//Opdracht 6
let weightDCHeroes = publisherDC.map(element => parseInt(element.weight))
let totalWeightDCHeroes = weightDCHeroes.reduce((element, currentTotal) => (element + currentTotal), 0)
console.log(totalWeightDCHeroes)

//Opdracht 7 
let valueToRemove = 'unknown'
let weightMarvelheroes = marvelComics.map(element => element.weight).filter(element => element !== valueToRemove)
let weightMarvelheroesNumbers = weightMarvelheroes.map(element => parseInt(element))
let totalWeightMarvelHeroes = weightMarvelheroesNumbers.reduce((element, currentTotal) => (element + currentTotal), 0)
console.log(totalWeightMarvelHeroes)

//Opdracht 8 (Bonus)
let weightHeroes = superheroes.map(element => element.weight).filter(element => element !== valueToRemove)
var largestNumbers = Math.max(...weightHeroes);
console.log(largestNumbers)