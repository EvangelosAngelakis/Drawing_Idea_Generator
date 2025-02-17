const selectedOptions = {
    Animals : ["Lion", "Elephant", "Giraffe", "Dolphin", "Kangaroo", "Penguin", "Panda", "Eagle", "Shark", "Rabbit", "Wolf", "Crocodile", "Octopus", "Chimpanzee", "Flamingo", "Hippopotamus", "Cheetah", "Koala", "Turtle", "Peacock"];
    Beasts : ["Dragon", "Griffin", "Minotaur", "Cerberus", "Hydra", "Chimera", "Kraken", "Manticore", "Phoenix", "Basilisk", "Werewolf", "Vampire", "Sphinx", "Gorgon", "Cyclops", "Yeti", "Leviathan", "Ogre", "Troll", "Wendigo"];
    SuperHeroes : ["Superman", "Batman", "Wonder Woman", "Spider-Man", "Iron Man", "Captain America", "Thor", "Hulk", "Black Panther", "Flash", "Aquaman", "Green Lantern", "Doctor Strange", "Scarlet Witch", "Wolverine", "Deadpool", "Shazam", "Cyborg", "Hawkeye", "Black Widow"];
    Cute : ["Puppies", "Kittens", "Baby Pandas", "Bunnies", "Hedgehogs", "Ducklings", "Penguin Chicks", "Baby Elephants", "Stuffed Animals", "Tiny Hamsters", "Cupcakes", "Miniature Plants", "Cute Stickers", "Marshmallows", "Bubble Tea", "Chubby Birds", "Tiny Shoes", "Cartoon Characters", "Fluffy Clouds", "Smiling Suns"];
    Dinosaurs : ["Tyrannosaurus Rex", "Triceratops", "Stegosaurus", "Velociraptor", "Brachiosaurus", "Spinosaurus", "Ankylosaurus", "Pteranodon", "Allosaurus", "Diplodocus", "Iguanodon", "Pachycephalosaurus", "Parasaurolophus", "Carnotaurus", "Gallimimus", "Compsognathus", "Mosasaurus", "Quetzalcoatlus", "Megalosaurus", "Corythosaurus"];
    Flowers : ["Rose", "Tulip", "Sunflower", "Daisy", "Lily", "Orchid", "Peony", "Lavender", "Cherry Blossom", "Marigold", "Hibiscus", "Jasmine", "Daffodil", "Lotus", "Poppy", "Violet", "Bluebell", "Iris", "Magnolia", "Bougainvillea"];
    Fruits : ["Apple", "Banana", "Orange", "Grape", "Mango", "Pineapple", "Strawberry", "Watermelon", "Blueberry", "Peach", "Cherry", "Pomegranate", "Papaya", "Kiwi", "Lemon", "Lime", "Coconut", "Plum", "Fig", "Dragonfruit"];
    Vegetables : ["Carrot", "Broccoli", "Spinach", "Potato", "Tomato", "Cucumber", "Bell Pepper", "Onion", "Garlic", "Pumpkin", "Lettuce", "Zucchini", "Cauliflower", "Peas", "Asparagus", "Beetroot", "Radish", "Eggplant", "Corn", "Mushroom"];
    Vehicles : ["Car", "Motorcycle", "Bicycle", "Truck", "Bus", "Train", "Airplane", "Helicopter", "Boat", "Ship", "Submarine", "Scooter", "Tractor", "Ambulance", "Fire Truck", "Police Car", "Taxi", "Camper Van", "Jet Ski", "Hot Air Balloon"];
    Weapons : ["Sword", "Bow", "Arrow", "Dagger", "Axe", "Spear", "Mace", "Crossbow", "Gun", "Cannon", "Grenade", "Katana", "Nunchucks", "Flamethrower", "Slingshot", "Boomerang", "Whip", "Shuriken", "Hammer", "Scythe"];
    }


let currentIndex = 0;

document.getElementById('Generate1').addEventListener('click', function() {
    const category = document.getElementById('categorySelect').value;
    const Result1 = document.getElementById('Result1');
    if (Result1 && selectedOptions[category]) {
        Result1.innerText = selectedOptions[category][currentIndex];
        currentIndex = (currentIndex + 1) % selectedOptions[category].length;
    } else {
        console.error('Element with id "Result1" or selected category not found.');
    }
});

function resetPage(){
    location.reload();
}