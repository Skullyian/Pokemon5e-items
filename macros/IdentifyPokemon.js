// ToggleCondition @target @scene @item <ConditionName>
let mode = args[0];
let targetid = args[1] || '';
let sceneid = args[2] || '';
let item = args[3] || '';

if (item != '' && !item.data.activation) {
	item.data.activation = {
	      "type": "bonus",
	      "cost": 1,
	      "condition": "creature must be concious and within 50 ft."
	};
	item.data.duration = {
	      "value": null,
	      "units": "inst"
    };
}

let targetactor = (targetid == '' || sceneid == '') ? _token.actor : game.actors.get(game.scenes.get(sceneid).data.tokens.filter(t => t._id == targetid)[0].actorId);

if (targetactor) {
	let basesr = targetactor.data.data.details.alignment;
	let description = targetactor.data.data.details.biography.value;
	let chatData = {
	  user: game.user._id,
	  speaker: ChatMessage.getSpeaker({alias:(item.name || 'Pokedex')}),
	  content: `<div class="dnd5e red-full chat-card" data-actor-id="${targetactor.id}" data-critical="false">
	<div><div class="dnd5e chat-card item-card">
	<header class="card-header flexrow red-header">
		<img src="${(item.img || targetactor.img)}" title="${(item.name || 'Pokedex')}" height="38">
		<h3 class="item-name">${targetactor.name}</h3>
	</header>
<div></div>
	<div class="card-content br-text"> 
		<div style="text-align:center">
			<img style="margin:0px auto;" src="${targetactor.img}" title="${targetactor.name}" height="150">
		</div>
		<hr>
		<p><strong>Base SR</strong> ${basesr}</p>
     	<p><strong>Description: </strong>${description}</p>
     </div>
</div></div></div>`
	};
	ChatMessage.create(chatData, {});
}