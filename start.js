/**
 * Reldens - Server start entry point
 *
 * Boots the Reldens MMORPG server (installer if not installed, game server if install.lock exists).
 * Includes startup diagnostics for cloud deployment troubleshooting.
 */
const t0 = Date.now();
const mark = (m) => {
    console.log(`[DIAG ${((Date.now() - t0) / 1000).toFixed(1)}s] ${m}`);
    process.stdout.write(`[DIAG ${((Date.now() - t0) / 1000).toFixed(1)}s] ${m}\n`);
};
mark('start.js begin');

const { ServerManager } = require('./lib/game/server/manager');
mark('manager required');

(async () => {
    mark('creating ServerManager');
    const manager = new ServerManager({
        projectRoot: __dirname,
        projectThemeName: 'default'
    });
    mark('ServerManager created');
    mark('createServers...');
    await manager.createServers();
    mark('createServers done');
    mark('start...');
    await manager.start();
    mark('start done');
})();

process.on('uncaughtException', (err) => {
    console.error('[DIAG uncaughtException]', err && err.stack ? err.stack : err);
    process.exit(1);
});
process.on('unhandledRejection', (reason) => {
    console.error('[DIAG unhandledRejection]', reason && reason.stack ? reason.stack : reason);
});
