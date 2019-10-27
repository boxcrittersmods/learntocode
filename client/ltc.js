const Server = (function(){
    var room = room_data;
    room.roomId = "tavern";
    room.playerlist = [];
    var player = {
        i:0,
        n:"Hamster",
        x:433,
        y:195,
        r:0,
        s:5
    };

    function joinRoom(username) {
        player.n = username
        room.playerlist.push(player);
        return room;
    }

    return {
        joinRoom,
        player
    }
})();

const BoxCritters = (function() {
    var gridSize = 90;
    var critterHeight = 120;
    var start={
        x:5,
        y:2
    };
    function calcAngle(cx, cy, ex, ey) {
        var dy = ey - cy;
        var dx = ex - cx;
        var theta = Math.atan2(dy, dx); // range (-PI, PI)
        theta *= 180 / Math.PI; // rads to degs, range (-180, 180_
        if (theta < 0) theta = 360 + theta; // range (0, 360)
        return theta+90;
      }
      function copy(obj) {
        return Object.assign({}, obj);
    }
    
      function gridPos(gridpos) {
          var pos = copy(gridpos);
          pos.x*=gridSize;
          pos.y*=gridSize;
          pos.x+=gridSize/2
          pos.y+=gridSize/2;
          return pos
      }

      
    function gotoCoord(pos) {
        if(!pos.x||!pos.y) return;
        var r = calcAngle(
            Server.player.x,
            Server.player.y,
            pos.x,
            pos.y
        );
        world.room.movePlayer({
            i:0,
            x:pos.x,
            y:pos.y,
            r:r
        });
    }

    function goto(pos) {
        pos = gridPos(pos);
        gotoCoord(pos);
    }
    function move(x,y) {
        var moveAmount = gridPos({x,y});
        gotoCoord({
            x:Server.player.x+moveAmount.x,
            y:Server.player.y-moveAmount.y
        });
    }

    function say(text) {
        world.room.addBalloon({
            i:0,
            m:text
        });
    }

    return {
        goto,
        move,
        say,
        start,
        gridPos
    }
})();