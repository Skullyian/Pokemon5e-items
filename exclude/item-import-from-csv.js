fetch('modules/Pokemon5e-items/exclude/tms.csv').then(response => response.text()).then(data => createItemsFromData(data));

async function createItemsFromData(rawData) {

  console.log(rawData);

  if (!rawData || rawData == null || rawData.length < 1) return;

  const lines = rawData.split("\n");

  if (!lines || lines.length < 1) return;

  function createBadge() {
    return `
    {
      "name": "{{Name}} Badge",
      "type": "equipment",
      "data": {
        "description": {
          "value": "<p><strong>Region</strong>&nbsp;{{Region}}</p>\\n<p><strong>Gym</strong>&nbsp;{{Gym Name}}</p>\\n<p><strong>Gym Leader</strong>&nbsp;{{Gym Leader}}</p>",
          "chat": "",
          "unidentified": ""
        },
        "source": "Pokemon5e",
        "quantity": 1,
        "weight": 0,
        "price": 0,
        "attuned": false,
        "equipped": false,
        "rarity": "{{League}} League",
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
          "value": null,
          "type": "trinket",
          "dex": null
        },
        "hp": {
          "value": 0,
          "max": 0,
          "dt": null,
          "conditions": ""
        },
        "speed": {
          "value": null,
          "conditions": ""
        },
        "strength": null,
        "stealth": false,
        "proficient": true,
        "attributes": {
          "spelldc": 10
        }
      },
      "sort": 100001,
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
      "img": "modules/Pokemon5e-items/images/badges/{{Folder}}/{{Img}}.png"
    }`;
  }


  function createTM() {
    return `
    {
      "name": "TM{{TM}} - {{Name}}",
      "type": "consumable",
      "data": {
        "description": {
          "value": "<p><strong>Type</strong> Technical Machine</p>\\n<p><strong>Move </strong>@Compendium[Pokemon5e.moves.{{MoveID}}]{ {{Name}} }</p><hr>\\n<p><strong>Description:</strong> This TM can be used to teach one creature a new move.</p>\\n<p>&nbsp;</p>",
          "chat": "",
          "unidentified": ""
        },
        "source": "Pokemon5e",
        "quantity": 1,
        "weight": 0,
        "price": {{Cost}},
        "attuned": false,
        "equipped": false,
        "rarity": "{{Rarity}}",
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
          "value": 1,
          "max": 1,
          "per": "charges",
          "autoDestroy": false
        },
        "consume": {
          "type": "",
          "target": "",
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
        "consumableType": "trinket",
        "attributes": {
          "spelldc": 10
        }
      },
      "sort": 300001,
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
            "altValue": false
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
      "img": "modules/Pokemon5e-items/images/tm/{{Type}}.png"
    }`;
  }

  let searchKeys = [];
  const saveFolder = await game.folders.filter(f => f.name === 'TMs' && f.parent && f.parent.name == "Pokemon5e")[0];

  for (let i = 0; i < lines.length; i++) {

    //if (i >= 3) return; //test cutoff

    let line = lines[i];
    if (!line || line == null || line.length < 1) continue;

    let lineData = lines[i].replace('é','e').split("\t");
    if (!lineData || lineData == null || lineData.length < 1) continue;

    if (i == 0) {
      for (let j = 0; j < lineData.length; j++) {
        searchKeys.push(lineData[j].trim());
      }
      //console.log('searchKeys', searchKeys);
      continue;
    }

    let templateitem = createTM();

    for (var k = 0; k < searchKeys.length; k++) {
      //console.log("{{" + searchKeys[k] + "}}", ' -> ', lineData[k].trim());
      templateitem = templateitem.split("{{" + searchKeys[k] + "}}").join(lineData[k].trim());
    }

    //console.log('templateitem', templateitem);

    let itemData = JSON.parse(templateitem);
    itemData.folder = saveFolder;

    console.log('Entry: ', i+'/'+lines.length, 'itemData', itemData);
    Item.create(itemData, itemData);
  }

}