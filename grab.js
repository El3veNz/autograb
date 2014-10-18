(function(){
	// Updated for the new plug!
	// Created by Cameron
	// Us /autograb to toggle this on / off. Default on page load is off.
	// It automatically adds any songs played to your currently active playlist.
	// Be wary of full playlists, the script does not currently support them. It will soon though.
	
	// Remember to ask the community staff members if use of this script is allowed. Respect their rules.
	// Feel free to modify this to your liking.
	
	if(typeof API == 'object' && !API.enabled) return;
	else return;
	
	var enabled = false, playlist = -1, timeout = 10E3, playlists, i;
	
	API.on(API.CHAT_COMMAND, function(value){
		value = value.substring(1);
		if(value == 'autograb' || value == 'ag'){
			enabled = !enabled;
			if(enabled){
				API.chatLog("Auto Grab enabled");
				selectPlaylist();
				if(playlist > -1){
					grab();
				}
			}else{
				API.chatLog("Auto Grab disabled");
				playlist = -1;
			}
		}
	});
	
	API.on(API.ADVANCE, function(){
		if(enabled){
			setTimeout(grab, timeout);
		}
	});
	
	function grab(){
		selectPlaylist();
		if(playlist > -1){
			if(API.getDJ().id !== API.getUser().id && !(document.querySelector('div#grab.selected'))){
				$("div#grab").click();
				$($(".grab .menu ul li")[playlist]).mousedown();
			}
		}
	}
	
	function selectPlaylist(){
		playlists = $('#playlist-menu .menu .row');
		for(i = 0; i < playlists.length; i++){
			if(playlists[i].querySelector('.icon-active-active') !== null){
				if(playlist !== i){
					API.chatLog("Active playlist: " + playlists[i].querySelector("span.name").innerText);
				}
				playlist = i;
				break;
			}
		}
		if(playlist == -1){
			API.chatLog("I'm sorry, I wasn't able to find an active playlist. Please create a playlist and activate it.", 1);
			if(enabled){
				API.chatLog("Auto Grab disabled");
				enabled = false;
				playlist = -1;
			}
		}
		
	}
}());
