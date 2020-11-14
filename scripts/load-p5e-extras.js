
Hooks.once('setup', () => {

    console.log('Pokemon5e Items | Initializing');

    // already standard damage types
	//CONFIG.DND5E.damageTypes['poison'] = 'P5EEXTRA.DamagePoison';
	//CONFIG.DND5E.damageTypes['fire'] = 'P5EEXTRA.DamageFire';
	//CONFIG.DND5E.damageTypes['psychic'] = 'P5EEXTRA.DamagePsychic';
	CONFIG.DND5E.damageTypes['bug'] = 'P5EEXTRA.DamageBug';
	CONFIG.DND5E.damageTypes['dark'] = 'P5EEXTRA.DamageDark';
	CONFIG.DND5E.damageTypes['dragon'] = 'P5EEXTRA.DamageDragon';
	CONFIG.DND5E.damageTypes['electric'] = 'P5EEXTRA.DamageElectric';
	CONFIG.DND5E.damageTypes['fairy'] = 'P5EEXTRA.DamageFairy';
	CONFIG.DND5E.damageTypes['fighting'] = 'P5EEXTRA.DamageFighting';
	CONFIG.DND5E.damageTypes['flying'] = 'P5EEXTRA.DamageFlying';
	CONFIG.DND5E.damageTypes['ghost'] = 'P5EEXTRA.DamageGhost';
	CONFIG.DND5E.damageTypes['grass'] = 'P5EEXTRA.DamageGrass';
	CONFIG.DND5E.damageTypes['ground'] = 'P5EEXTRA.DamageGround';
	CONFIG.DND5E.damageTypes['ice'] = 'P5EEXTRA.DamageIce';
	CONFIG.DND5E.damageTypes['normal'] = 'P5EEXTRA.DamageNormal';
	CONFIG.DND5E.damageTypes['rock'] = 'P5EEXTRA.DamageRock';
	CONFIG.DND5E.damageTypes['steel'] = 'P5EEXTRA.DamageSteel';
	CONFIG.DND5E.damageTypes['water'] = 'P5EEXTRA.DamageWater';

	CONFIG.DND5E.hitDieTypes.push('d20');

	CONFIG.DND5E.currencies['pd'] = 'P5EEXTRA.CurrencyPD';

	CONFIG.DND5E.conditionTypes['asleep'] = "P5EEXTRA.ConAsleep";
	CONFIG.DND5E.conditionTypes['burned'] = "P5EEXTRA.ConBurned";
	CONFIG.DND5E.conditionTypes['confused'] = "P5EEXTRA.ConConfused";
	CONFIG.DND5E.conditionTypes['flinched'] = "P5EEXTRA.ConFlinched";
	CONFIG.DND5E.conditionTypes['frozen'] = "P5EEXTRA.ConFrozen";

	// Character Level XP Requirements
	// original values
	//CONFIG.DND5E.CHARACTER_EXP_LEVELS = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];
	// p5e PHB values
	CONFIG.DND5E.CHARACTER_EXP_LEVELS = [0, 200, 800, 2000, 6000, 12000, 20000, 30000, 44000, 62000, 82000, 104000, 128000, 158000, 194000, 234000, 278000, 326000, 382000, 450000];

});