ModAPI.addMod("CrystalAura", "1.0", "Auto crystal on K", {
    onKeyPressed: function(keyCode) {
        if (keyCode === 75) {
            var players = World.getPlayerList();
            for (var i = 0; i < players.length; i++) {
                var player = players[i];
                if (!player.isMe() && player.getDistanceToSelf() <= 6) {
                    var pos = player.getBlockPos();
                    Player.placeBlock(pos.x, pos.y, pos.z, "minecraft:end_crystal");
                    Player.swingArm();
                    Chat.addMessage("§a[CrystalAura] Placed crystal near " + player.getName());
                    break;
                }
            }
        }
    }
});
