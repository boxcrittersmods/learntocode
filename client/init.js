PlayFab.settings.titleId = "5417";
var bWorkspace;

hamster_data.images = ['./media/critters/hamster.png'];

var settings = {
    character: hamster_data,
    roomPath: './media/rooms/'
}
var world = new World(settings, 'stage');


function myUpdateFunction(event) {
    var code = Blockly.JavaScript.workspaceToCode(bWorkspace);
    document.getElementById('textarea').value = code;
}

function loginSession(ticket) {
    var r = Server.joinRoom(ticket);
    world.createRoom(r);
    bWorkspace = Blockly.inject(
        'blocklyDiv',
        {toolbox: document.getElementById('code')}
    );
    bWorkspace.addChangeListener(myUpdateFunction);
}