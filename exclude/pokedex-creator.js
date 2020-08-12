
async function createItemsFromData(rawData) {

  function PokedexTemplate() {
    return {
      "name": "Pokedex",
      "type": "backpack",
      "data": {
        "description": {
          "value": "<p><strong>Type</strong> Special</p>\n\n      <hr>\n\n      <p><strong>Description: </strong>A hand-held computer with an advanced camera and image recognition software given to trainers at the start of their journey. A trainer can use a bonus action to register a Pokémon (that hasn't fainted) within 50 feet using the Pokédex's scanner. Doing so registers the Pokémon on the Pokédex, and reveals the base SR and some brief facts about the species.</p>",
          "chat": "",
          "unidentified": ""
        },
        "source": "Pokemon5e",
        "quantity": 1,
        "weight": 0,
        "price": 10000,
        "attuned": false,
        "equipped": true,
        "rarity": "Common",
        "identified": true,
        "capacity": {
          "type": "items",
          "value": 1000,
          "weightless": true
        },
        "currency": {
          "cp": 0,
          "sp": 0,
          "ep": 0,
          "gp": 0,
          "pp": 0
        },
        "attributes": {
          "spelldc": 10
        },
        "damage": {
          "parts": []
        },
        "activation": {
          "type": "bonus",
          "cost": 1,
          "condition": "creature must be concious and within 50 ft."
        },
        "duration": {
          "value": null,
          "units": "inst"
        }
      },
      "sort": 100001,
      "flags": {
        "betterRolls5e": {
          "quickDesc": {
            "type": "Boolean",
            "value": false,
            "altValue": true
          }
        },
        "dynamiceffects": {
          "equipActive": false,
          "alwaysActive": false,
          "effects": [
            {
              "modSpecKey": "macro.execute",
              "value": "IdentifyPokemon @target @scene @item",
              "mode": "+",
              "targetSpecific": false,
              "id": 1,
              "itemId": "95lBfI4nBtOtJ6MI",
              "active": true,
              "_targets": [],
              "label": "Macro Execute"
            }
          ]
        },
        "core": {
          "sheetClass": "dnd5e.ItemSheet5eWithBags"
        },
        "itemcollection": {
          "itemWeight": 0,
          "fixedWeight": 0,
          "goldValue": 0,
          "contents": [],
          "importSpells": false
        },
        "favtab": {
          "isFavorite": true
        }
      },
      "img": "modules/Pokemon5e-items/images/pokedex/pokedex-red.png"
    };
  }

  const saveFolder = game.folders.filter(f => f.name === 'Pokedex Types')[0];

  for (let gamename in rawData) {

    let newdex = PokedexTemplate();

    newdex.name = newdex.name + ' - '+gamename;
    newdex.img = rawData[gamename];
    newdex.folder = saveFolder;

    let newitem = Item.create(newdex, newdex);
    console.log(gamename, newitem);
  }

}

createItemsFromData({
  'Alpha Sapphire' : 'modules/Pokemon5e-items/images/pokedex/pokedex-alphasapphire.png',
  'Black' : 'modules/Pokemon5e-items/images/pokedex/pokedex-black.png',
  'Black 2' : 'modules/Pokemon5e-items/images/pokedex/pokedex-black2.png',
  'Blue' : 'modules/Pokemon5e-items/images/pokedex/pokedex-blue.png',
  'Crystal' : 'modules/Pokemon5e-items/images/pokedex/pokedex-crystal.png',
  'Diamond' : 'modules/Pokemon5e-items/images/pokedex/pokedex-diamond.png',
  'Emerald' : 'modules/Pokemon5e-items/images/pokedex/pokedex-emerald.png',
  'FireRed' : 'modules/Pokemon5e-items/images/pokedex/pokedex-firered.png',
  'Gold' : 'modules/Pokemon5e-items/images/pokedex/pokedex-gold.png',
  'Green' : 'modules/Pokemon5e-items/images/pokedex/pokedex-green.png',
  'HeartGold' : 'modules/Pokemon5e-items/images/pokedex/pokedex-heartgold.png',
  'LeafGreen' : 'modules/Pokemon5e-items/images/pokedex/pokedex-leafgreen.png',
  'Let\'s go, Eevee!' : 'modules/Pokemon5e-items/images/pokedex/pokedex-letsgoeevee.png',
  'Let\'s go, Pikachu' : 'modules/Pokemon5e-items/images/pokedex/pokedex-letsgopikachu.png',
  'Moon' : 'modules/Pokemon5e-items/images/pokedex/pokedex-moon.png',
  'Omega Ruby' : 'modules/Pokemon5e-items/images/pokedex/pokedex-omegaruby.png',
  'Pearl' : 'modules/Pokemon5e-items/images/pokedex/pokedex-pearl.png',
  'Platinum' : 'modules/Pokemon5e-items/images/pokedex/pokedex-platinum.png',
  'Red' : 'modules/Pokemon5e-items/images/pokedex/pokedex-red.png',
  'Ruby' : 'modules/Pokemon5e-items/images/pokedex/pokedex-ruby.png',
  'Sapphire' : 'modules/Pokemon5e-items/images/pokedex/pokedex-sapphire.png',
  'Shield' : 'modules/Pokemon5e-items/images/pokedex/pokedex-shield.png',
  'Silver' : 'modules/Pokemon5e-items/images/pokedex/pokedex-silver.png',
  'SoulSilver' : 'modules/Pokemon5e-items/images/pokedex/pokedex-soulsilver.png',
  'Sun' : 'modules/Pokemon5e-items/images/pokedex/pokedex-sun.png',
  'Sword' : 'modules/Pokemon5e-items/images/pokedex/pokedex-sword.png',
  'Ultra Moon' : 'modules/Pokemon5e-items/images/pokedex/pokedex-ultramoon.png',
  'Ultra Sun' : 'modules/Pokemon5e-items/images/pokedex/pokedex-ultrasun.png',
  'White' : 'modules/Pokemon5e-items/images/pokedex/pokedex-white.png',
  'White 2' : 'modules/Pokemon5e-items/images/pokedex/pokedex-white2.png',
  'X' : 'modules/Pokemon5e-items/images/pokedex/pokedex-x.png',
  'Y' : 'modules/Pokemon5e-items/images/pokedex/pokedex-y.png',
  'Yellow' : 'modules/Pokemon5e-items/images/pokedex/pokedex-yellow.png'
});
