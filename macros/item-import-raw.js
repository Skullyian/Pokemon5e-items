
fetch('modules/Pokemon5e-items-mv/items.csv').then(response => response.text()).then(data => createItemsFromData(data));

async function createItemsFromData(rawData) {

  console.log(rawData);

  if (!rawData || rawData == null || rawData.length < 1) return;

  const lines = rawData.split("\n");


  function createPokeball() {
    return {
      'name': '',
      'folder': null,
      'type': 'consumable',
      'data': {
        'source': 'Pokemon5e',
        'rarity': '',
        'description': {
          'value': ''
        },
        'range': {
          'value': 20,
          'long': 60,
          'units': 'ft'
        },
        'activation': {
          'type': 'action',
          'cost': 1,
          'condition': ''
        },
        'damage': {
          'parts': [
            [
              '1d20 + @skills.ani.total + 5',
              ''
            ],
            [
              '1d20 + @skills.ani.total + 5',
              ''
            ]
          ],
          'versatile': ''
        },
        'consumableType': 'ammo',
      },
      "flags": {
        "betterRolls5e": {
          "critRange": {
            "type": "String",
            "value": ""
          },
          "critDamage": {
            "type": "String",
            "value": ""
          },
          "quickDesc": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickAttack": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickSave": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickDamage": {
            "type": "Array",
            "value": {
              "0": true,
              "1": true
            },
            "altValue": {
              "0": true,
              "1": true
            },
            "context": {
              "0": "Capture Attempt",
              "1": "Capture Attempt"
            }
          },
        },
      },
      'img': ''
    };
  }

  function createMedicine() {
    return {
      'name': '',
      'folder': null,
      'type': 'consumable',
      "data": {
        "description": {
          "value": "",
          "chat": "",
          "unidentified": ""
        },
        "source": "Pokemon5e",
        "quantity": 1,
        "weight": 0,
        "price": 0,
        "attuned": false,
        "equipped": false,
        "rarity": "Uncommon",
        "identified": true,
        "activation": {
          "type": "action",
          "cost": 1,
          "condition": ""
        },
        "duration": {
          "value": null,
          "units": ""
        },
        "target": {
          "value": null,
          "units": "",
          "type": ""
        },
        "range": {
          "value": null,
          "long": null,
          "units": ""
        },
        "uses": {
          "value": 0,
          "max": 0,
          "per": "",
          "autoDestroy": false
        },
        "consume": {
          "type": "",
          "target": "",
          "amount": null
        },
        "ability": "",
        "actionType": "heal",
        "attackBonus": 0,
        "chatFlavor": "",
        "critical": null,
        "damage": {
          "parts": [],
          "versatile": ""
        },
        "formula": "",
        "save": {
          "ability": "",
          "dc": null,
          "scaling": "spell"
        },
        "consumableType": "potion",
        "attributes": {
          "spelldc": 10
        }
      },
      'img': ''
    };
  }

  function createConsumable() {
    return {
      'name': '',
      'folder': null,
      'type': 'consumable',
      "data": {
        "description": {
          "value": "",
          "chat": "",
          "unidentified": ""
        },
        "source": "Pokemon5e",
        "quantity": 1,
        "weight": 0,
        "price": 0,
        "attuned": false,
        "equipped": false,
        "rarity": "Uncommon",
        "identified": true,
        "activation": {
          "type": "",
          "cost": 0,
          "condition": ""
        },
        "duration": {
          "value": null,
          "units": ""
        },
        "target": {
          "value": null,
          "units": "",
          "type": ""
        },
        "range": {
          "value": null,
          "long": null,
          "units": ""
        },
        "uses": {
          "value": 0,
          "max": 0,
          "per": "",
          "autoDestroy": false
        },
        "consume": {
          "type": "",
          "target": "",
          "amount": null
        },
        "ability": "",
        "actionType": "heal",
        "attackBonus": 0,
        "chatFlavor": "",
        "critical": null,
        "damage": {
          "parts": [],
          "versatile": ""
        },
        "formula": "",
        "save": {
          "ability": "",
          "dc": null,
          "scaling": "spell"
        },
        "consumableType": "potion",
        "attributes": {
          "spelldc": 10
        }
      },
      'img': ''
    };
  }

  function createBackpack() {
    return {
      "name": "backpack template",
      "type": "backpack",
      "data": {
        "description": {
          "value": "",
          "chat": "",
          "unidentified": ""
        },
        "source": "",
        "quantity": 1,
        "weight": 0,
        "price": 0,
        "attuned": false,
        "equipped": false,
        "rarity": "",
        "identified": true,
        "capacity": {
          "type": "items",
          "value": 800,
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
        }
      },
      "flags": {
        "dynamiceffects": {
          "equipActive": false,
          "alwaysActive": false,
          "effects": []
        }
      },
      "img": ""
    };
  }

  function createLoot() {
    return {
      "name": "loot template",
      "type": "loot",
      "data": {
        "description": {
          "value": "",
          "chat": "",
          "unidentified": ""
        },
        "source": "",
        "quantity": 1,
        "weight": 0,
        "price": 0,
        "attuned": false,
        "equipped": false,
        "rarity": "",
        "identified": true,
        "attributes": {
          "spelldc": 10
        },
        "damage": {
          "parts": []
        }
      },
      "img": ""
    };
  }

  function createTool() {
    return {
      "name": "tool template",
      "type": "tool",
      "data": {
        "description": {
          "value": "",
          "chat": "",
          "unidentified": ""
        },
        "source": "",
        "quantity": 1,
        "weight": 0,
        "price": 0,
        "attuned": false,
        "equipped": false,
        "rarity": "",
        "identified": true,
        "ability": "int",
        "chatFlavor": "",
        "proficient": 0,
        "attributes": {
          "spelldc": 10
        },
        "damage": {
          "parts": []
        }
      },
      "flags": {
        "betterRolls5e": {
          "critRange": {
            "type": "String",
            "value": ""
          },
          "quickDesc": {
            "type": "Boolean",
            "value": false,
            "altValue": false
          },
          "quickCheck": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickProperties": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickFlavor": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          }
        },
        "dynamiceffects": {
          "equipActive": false,
          "alwaysActive": false,
          "effects": []
        }
      },
      "img": ""
    };
  }

  function createAmmo() {
    return {
      "name": "ammo template",
      "type": "consumable",
      "data": {
        "description": {
          "value": "",
          "chat": "",
          "unidentified": ""
        },
        "source": "",
        "quantity": 1,
        "weight": 0,
        "price": 0,
        "attuned": false,
        "equipped": false,
        "rarity": "",
        "identified": true,
        "activation": {
          "type": "",
          "cost": 0,
          "condition": ""
        },
        "duration": {
          "value": null,
          "units": ""
        },
        "target": {
          "value": null,
          "units": "",
          "type": ""
        },
        "range": {
          "value": null,
          "long": null,
          "units": ""
        },
        "uses": {
          "value": 0,
          "max": 0,
          "per": null,
          "autoDestroy": false
        },
        "consume": {
          "type": "",
          "target": null,
          "amount": null
        },
        "ability": null,
        "actionType": "",
        "attackBonus": 0,
        "chatFlavor": "",
        "critical": null,
        "damage": {
          "parts": [],
          "versatile": ""
        },
        "formula": "",
        "save": {
          "ability": "",
          "dc": null,
          "scaling": "spell"
        },
        "consumableType": "ammo",
        "attributes": {
          "spelldc": 10
        }
      },
      "flags": {
        "betterRolls5e": {
          "critRange": {
            "type": "String",
            "value": ""
          },
          "critDamage": {
            "type": "String",
            "value": ""
          },
          "quickDesc": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickAttack": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickSave": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickDamage": {
            "type": "Array",
            "value": [],
            "altValue": [],
            "context": []
          },
          "quickProperties": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickCharges": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickTemplate": {
            "type": "Boolean",
            "value": false,
            "altValue": false
          },
          "quickOther": {
            "type": "Boolean",
            "value": true,
            "altValue": true,
            "context": ""
          },
          "quickFlavor": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          }
        },
        "dynamiceffects": {
          "equipActive": false,
          "alwaysActive": false,
          "effects": []
        }
      },
      "img": ""
    };
  }

  function createEquipment() {
    return {
      "name": "equipment template",
      "type": "equipment",
      "data": {
        "description": {
          "value": "",
          "chat": "",
          "unidentified": ""
        },
        "source": "",
        "quantity": 1,
        "weight": 0,
        "price": 0,
        "attuned": false,
        "equipped": false,
        "rarity": "",
        "identified": true,
        "activation": {
          "type": "",
          "cost": 0,
          "condition": ""
        },
        "duration": {
          "value": null,
          "units": ""
        },
        "target": {
          "value": null,
          "units": "",
          "type": ""
        },
        "range": {
          "value": null,
          "long": null,
          "units": ""
        },
        "uses": {
          "value": 0,
          "max": 0,
          "per": null
        },
        "consume": {
          "type": "",
          "target": null,
          "amount": null
        },
        "ability": null,
        "actionType": "",
        "attackBonus": 0,
        "chatFlavor": "",
        "critical": null,
        "damage": {
          "parts": [],
          "versatile": ""
        },
        "formula": "",
        "save": {
          "ability": "",
          "dc": null,
          "scaling": "spell"
        },
        "armor": {
          "type": "light",
          "value": 10,
          "dex": null
        },
        "strength": 0,
        "stealth": false,
        "proficient": true,
        "attributes": {
          "spelldc": 10
        }
      },
      "flags": {
        "betterRolls5e": {
          "critRange": {
            "type": "String",
            "value": ""
          },
          "critDamage": {
            "type": "String",
            "value": ""
          },
          "quickDesc": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickAttack": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickSave": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickDamage": {
            "type": "Array",
            "value": [],
            "altValue": [],
            "context": []
          },
          "quickProperties": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickCharges": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickOther": {
            "type": "Boolean",
            "value": true,
            "altValue": true,
            "context": ""
          },
          "quickFlavor": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          }
        },
        "dynamiceffects": {
          "equipActive": false,
          "alwaysActive": false,
          "effects": []
        }
      },
      "img": ""
    };
  }

  function createTrinket() {
    return {
      "name": "trinket template",
      "type": "equipment",
      "data": {
        "description": {
          "value": "",
          "chat": "",
          "unidentified": ""
        },
        "source": "",
        "quantity": 1,
        "weight": 0,
        "price": 0,
        "attuned": false,
        "equipped": false,
        "rarity": "",
        "identified": true,
        "activation": {
          "type": "",
          "cost": 0,
          "condition": ""
        },
        "duration": {
          "value": null,
          "units": ""
        },
        "target": {
          "value": null,
          "units": "",
          "type": ""
        },
        "range": {
          "value": null,
          "long": null,
          "units": ""
        },
        "uses": {
          "value": 0,
          "max": 0,
          "per": null
        },
        "consume": {
          "type": "",
          "target": null,
          "amount": null
        },
        "ability": null,
        "actionType": "",
        "attackBonus": 0,
        "chatFlavor": "",
        "critical": null,
        "damage": {
          "parts": [],
          "versatile": ""
        },
        "formula": "",
        "save": {
          "ability": "",
          "dc": null,
          "scaling": "spell"
        },
        "armor": {
          "type": "trinket",
          "value": 10,
          "dex": null
        },
        "strength": 0,
        "stealth": false,
        "proficient": true,
        "attributes": {
          "spelldc": 10
        }
      },
      "flags": {
        "betterRolls5e": {
          "critRange": {
            "type": "String",
            "value": ""
          },
          "critDamage": {
            "type": "String",
            "value": ""
          },
          "quickDesc": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickAttack": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickSave": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickDamage": {
            "type": "Array",
            "value": [],
            "altValue": [],
            "context": []
          },
          "quickProperties": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickCharges": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          },
          "quickOther": {
            "type": "Boolean",
            "value": true,
            "altValue": true,
            "context": ""
          },
          "quickFlavor": {
            "type": "Boolean",
            "value": true,
            "altValue": true
          }
        },
        "dynamiceffects": {
          "equipActive": false,
          "alwaysActive": false,
          "effects": []
        }
      },
      "img": ""
    };
  }

  //intentionally skip first line, as first line is 'header'
  for (var i = 1; i < lines.length; i++) {

    let line = lines[i];

    if (!line || line == null || line.length < 1) continue;

    let lineData = lines[i].split("\t");

    if (!lineData || lineData == null || lineData.length < 9) continue;

    let name = lineData[0].trim();
    let desc = lineData[1].trim();
    let pricepoke = lineData[2].trim();
    let pricegp = lineData[3].trim();
    let itemtype = lineData[4].trim();
    let rarity = lineData[5].trim();
    let iconfolder = lineData[6].trim();
    let foundrytype = lineData[7].trim();
    let foldername = lineData[8].trim();

    //select folder for finished item
    const saveFolder = game.folders.filter(f => f.name === foldername && f.parent && f.parent.name == "Pokemon5e")[0];
    console.log('foldername', foldername);
    console.log('folder', saveFolder);

    let iconname = name.replace(/ /g,'-').replace(/,/g,'').toLowerCase();
    let iconpath = 'modules/Pokemon5e-items-mv/images/'+iconfolder+'/'+iconname+'.png';

    if (itemtype == 'Pokeball') {

      let templateitem = createPokeball();

      let cleanedesc = desc.replace(' to Capture Rolls', '');
      cleanedesc = cleanedesc.replace(' on Capture Roll', '');

      iconpath = iconpath.replace('-ball.png', '.png');

      templateitem.name = name;
      templateitem.data.rarity = rarity;
      templateitem.data.price = pricepoke;
      templateitem.img = iconpath;
      templateitem.folder = saveFolder;
      templateitem.data.description.value = `<p><strong>Type</strong> Pokeball</p>\n
      <p><strong>Capture Bonus:</strong> ${cleanedesc}</p>\n
      <hr>\n
      <p><strong>Description: </strong>As an action, you may throw this item at a creature and attempt to capture it.</p>\n
      <p>You have advantage on the throw if the creature is poisoned, restrained, asleep, burning, confused, paralyzed, or frozen.</p>\n
      <p>When thrown, you gain ${desc}</p>`;


      Item.create(templateitem, templateitem);
      console.log(itemtype, templateitem);
      continue;
    }

    if (itemtype == 'Medicine') {
      let templateitem = createMedicine();

      templateitem.name = name;
      templateitem.data.rarity = rarity;
      templateitem.data.price = pricepoke;
      templateitem.img = iconpath;
      templateitem.folder = saveFolder;
      templateitem.data.description.value = `<p><strong>Type</strong> Medicine</p>\n
      <hr>\n
      <p><strong>Description: </strong>${desc}</p>`;

      //Item.create(templateitem, templateitem);
      //console.log(itemtype, templateitem);
      continue;
    }

    if (itemtype == 'X-Item' 
      || itemtype == 'Berry' 
      || itemtype == 'Evolution' 
      || itemtype == 'Vitamin'
      || (itemtype == 'Special' && name == 'Honey')) {

      let templateitem = createConsumable();

      if (itemtype == 'Berry') iconpath = iconpath.replace('-berry.png', '.png');

      templateitem.name = name;
      templateitem.data.rarity = rarity;
      templateitem.data.price = pricepoke;
      templateitem.img = iconpath;
      templateitem.folder = saveFolder;
      templateitem.data.description.value = `<p><strong>Type</strong> ${itemtype}</p>\n
      <hr>\n
      <p><strong>Description: </strong>${desc}</p>`;

      //Item.create(templateitem, templateitem);
      //console.log(itemtype, templateitem);
      continue;
    }

    //if (itemtype == 'Special' || itemtype == 'Mundane Item' || itemtype == 'Held Item' || itemtype == 'Specific Held Item') {
    if (itemtype == 'Held Item' || itemtype == 'Specific Held Item') {

      let templateitem = null;

      switch (foundrytype) {
        case 'backpack': templateitem = createBackpack(); break;
        case 'loot': templateitem = createLoot(); break;
        case 'tool': templateitem = createTool(); break;
        case 'ammunition': templateitem = createAmmo(); break;
        case 'trinket': templateitem = createTrinket(); break;
        case 'equipment': templateitem = createEquipment(); break;
      }

      if (templateitem == null) continue;

      templateitem.name = name;
      templateitem.data.rarity = rarity;
      templateitem.data.price = pricepoke;
      templateitem.img = iconpath;
      templateitem.folder = saveFolder;
      templateitem.data.description.value = `<p><strong>Type</strong> ${itemtype}</p>\n
      <hr>\n
      <p><strong>Description: </strong>${desc}</p>`;

      Item.create(templateitem, templateitem);
      console.log(itemtype, templateitem);
      continue;
    }

  }

}
