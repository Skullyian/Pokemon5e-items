fetch('modules/Pokemon5e-items/exclude/badges.csv').then(response => response.text()).then(data => createItemsFromData(data));

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

  let searchKeys = [];
  const saveFolder = await game.folders.filter(f => f.name === 'Badges' && f.parent && f.parent.name == "Pokemon5e")[0];

  for (let i = 0; i < lines.length; i++) {

    if (i >= 3) return; //test cutoff

    let line = lines[i];
    if (!line || line == null || line.length < 1) continue;

    let lineData = lines[i].replace('é','e').split("\t");
    if (!lineData || lineData == null || lineData.length < 1) continue;

    if (i == 0) {
      for (let j = 0; j < lineData.length; j++) {
        searchKeys.push(lineData[j].trim());
      }
      console.log('searchKeys', searchKeys);
      continue;
    }

    let templateitem = createBadge();

    for (var k = 0; k < searchKeys.length; k++) {
      console.log("{{" + searchKeys[k] + "}}", ' -> ', lineData[k].trim());
      templateitem = templateitem.replace("{{" + searchKeys[k] + "}}", lineData[k].trim());
    }

    console.log('templateitem', templateitem);

    let itemData = JSON.parse(templateitem);
    itemData.folder = saveFolder;

    console.log('itemData', itemData);
    //Item.create(itemData, itemData);
  }

}