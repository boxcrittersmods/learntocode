PlayFab.settings.titleId = "5417";
var blocklyWorkspace;

hamster_data.images = ['./media/critters/hamster.png'];

var settings = {
    character: hamster_data,
    roomPath: './media/rooms/'
}
var world = new World(settings, 'stage');

var blocklyToolbox = document.getElementById("toolbox");

var blocklyOptions = { 
	toolbox : blocklyToolbox, 
	collapse : true, 
	comments : true, 
	disable : true, 
	maxBlocks : Infinity, 
	trashcan : true, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : true, 
	sounds : true, 
	oneBasedIndex : true, 
	grid : {
		spacing : 20, 
		length : 1, 
		colour : '#888', 
		snap : true
	}, 
	zoom : {
		controls : true, 
		wheel : true, 
		startScale : 1, 
		maxScale : 3, 
		minScale : 0.3, 
		scaleSpeed : 1.2
	}
};


function blocklyUpdateFunction(event) {
    var code = Blockly.JavaScript.workspaceToCode(blocklyWorkspace);
    document.getElementById('code').value = code;
}

function loginSession(ticket) {
    var r = Server.joinRoom(ticket);
    world.createRoom(r);
    blocklyWorkspace = Blockly.inject('blocklyDiv',blocklyOptions);
    blocklyWorkspace.addChangeListener(blocklyUpdateFunction);
    var workspaceBlocks = document.getElementById("workspaceBlocks"); 
    Blockly.Xml.domToWorkspace(workspaceBlocks, blocklyWorkspace);
}

function ltcRun() {
	Blockly.JavaScript.addReservedWords('code');
	var code = Blockly.JavaScript.workspaceToCode(blocklyWorkspace);
	try {
		eval(code);
	  } catch (e) {
		alert(e);
	  }
}