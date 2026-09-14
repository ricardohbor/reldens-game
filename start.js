/**
 * Reldens - Server start entry point
 *
 * Boots the Reldens MMORPG server (installer if not installed, game server if install.lock exists).
 */
const { ServerManager } = require('./lib/game/server/manager');

(async () => {
    const manager = new ServerManager({
        projectRoot: __dirname,
        projectThemeName: 'default'
    });
    await manager.createServers();
    await manager.start();
})();
