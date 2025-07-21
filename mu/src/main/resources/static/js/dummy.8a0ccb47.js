// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5Eplg":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d663e6e08a0ccb47";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"bNJxx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webSocJs = require("./webSoc.js");
var _webSocJsDefault = parcelHelpers.interopDefault(_webSocJs);
var _rtcJs = require("./rtc.js");
var _rtcJsDefault = parcelHelpers.interopDefault(_rtcJs);
const PLAYER_RADIUS = 16;
class GameScene extends Phaser.Scene {
    constructor(){
        super("scene-game");
        this.cursors;
        this.player;
        this.username = "local";
        this.avatarId;
        this.roomId;
        this.colorsList = [
            0x4ecdc4,
            0xff6b6b,
            0xf7b32b,
            0x1a535c,
            0xb388eb
        ];
        this.remotePlayers = new Map();
    }
    create() {
        console.log("Inside the create method");
        this.physics.world.setBounds(0, 0, 800, 600);
        (0, _webSocJsDefault.default).initialPlayerState = (playerState)=>{
            const currentPlayer = playerState.currentPlayer;
            const players = playerState.allPlayers || []; // Fallback to empty array
            // Iterate over `players`, not `playerState`
            players.forEach((player)=>{
                console.log(`Processing player: ${player.userName}, with room id: ${player.roomId}`);
                const circle = this.add.circle(player.x, player.y, PLAYER_RADIUS, this.colorsList[Math.floor(Math.random() * 5)]);
                if (player.userName === currentPlayer.userName) {
                    console.log("Current player:", player.userName);
                    this.username = player.userName;
                    this.avatarId = player.avatarId;
                    this.roomId = player.roomId;
                    this.player = circle;
                    this.physics.add.existing(this.player);
                    this.player.body.setCollideWorldBounds(true);
                    this.cursors = this.input.keyboard.createCursorKeys();
                    (0, _rtcJsDefault.default).setReady();
                } else {
                    console.log("Remote player:", player.userName);
                    this.remotePlayers.set(player.userName, circle);
                }
            });
        };
        (0, _webSocJsDefault.default).joinedPlayerState = (playerState)=>{
            console.log(`Username of joined player: ${playerState.userName}`);
            console.log(`Username of local player: ${this.username}`);
            if (this.username !== "local" && playerState.userName !== this.username) {
                console.log("Making of the circle");
                const circle = this.add.circle(playerState.x, playerState.y, PLAYER_RADIUS, this.colorsList[Math.floor(Math.random() * 5)]);
                this.remotePlayers.set(playerState.userName, circle);
            }
        };
        (0, _webSocJsDefault.default).playerMovedState = (playerState)=>{
            console.log("updating the state of the moved state");
            let movedUsername = playerState.userName;
            if (this.username !== "local" && this.username !== movedUsername) {
                let remotePlayerCircle = this.remotePlayers.get(movedUsername);
                console.log(`The circle of ${playerState.userName}: ${remotePlayerCircle}`);
                if (remotePlayerCircle) {
                    remotePlayerCircle.x = playerState.x;
                    remotePlayerCircle.y = playerState.y;
                    console.log(`Updated ${movedPlayerName} position to (${playerState.x}, ${playerState.y})`);
                } else console.log("Remote player not found");
            }
        };
        (0, _webSocJsDefault.default).connect();
    }
    update() {
        let moved = false;
        // Check if player exists before trying to move it
        if (!this.player) return;
        let speed = 5;
        if (this.cursors.left.isDown) {
            moved = true;
            this.player.x -= speed;
        }
        if (this.cursors.right.isDown) {
            moved = true;
            this.player.x += speed;
        }
        if (this.cursors.up.isDown) {
            moved = true;
            this.player.y -= speed;
        }
        if (this.cursors.down.isDown) {
            moved = true;
            this.player.y += speed;
        }
        if (moved) {
            let newX = this.player.x;
            let newY = this.player.y;
            const playerState = {
                userName: this.username,
                x: newX,
                y: newY,
                avatarId: this.avatarId,
                roomId: this.roomId
            };
            console.log(`Sending player position: ${playerState.x} & ${playerState.y}, of roomId: ${playerState.roomId}`);
            (0, _webSocJsDefault.default).sendPlayerPosition(playerState);
        }
    }
}
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: 0x000000,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false // Set to true if you want to see physics bodies
        }
    },
    scene: [
        GameScene
    ]
};
new Phaser.Game(config);

},{"./webSoc.js":"abkGa","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./rtc.js":"djbTg"}],"abkGa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sockjsClient = require("sockjs-client");
var _sockjsClientDefault = parcelHelpers.interopDefault(_sockjsClient);
var _stompjs = require("@stomp/stompjs");
const pathParts = window.location.pathname.split('/');
const roomId = pathParts[pathParts.length - 1];
console.log(`room id of this particular room: ${roomId}`);
class GameWebSocket {
    constructor(){
        this.stompClient = null;
        this.roomId = roomId;
    }
    connect() {
        const socket = new (0, _sockjsClientDefault.default)('/game-ws');
        this.stompClient = (0, _stompjs.Stomp).over(socket);
        this.stompClient.connect({}, (frame)=>{
            console.log("Connected: ", frame);
            this.stompClient.subscribe(`/topic/${this.roomId}/player-joined`, (message)=>{
                console.log("player-joined endpoint");
                const joinedPlayer = JSON.parse(message.body);
                this.stompClient.send(`/app/${this.roomId}/join`, {}, JSON.stringify(joinedPlayer));
                if (this.joinedPlayerState) this.joinedPlayerState(joinedPlayer);
            });
            this.stompClient.subscribe(`/topic/${roomId}/position`, (message)=>{
                console.log("Movement suspected");
                const playerMoved = JSON.parse(message.body);
                if (this.playerMovedState) {
                    console.log("true");
                    this.playerMovedState(playerMoved);
                } else console.log("false");
            });
            this.stompClient.subscribe(`/app/${roomId}/initial`, (message)=>{
                const initialPlayers = JSON.parse(message.body);
                if (this.initialPlayerState) this.initialPlayerState(initialPlayers);
            });
        });
    }
    sendPlayerPosition(playerState) {
        if (this.stompClient && this.stompClient.connected) this.stompClient.send(`/app/${this.roomId}/move`, {}, JSON.stringify(playerState));
    }
}
const gameWebSocket = new GameWebSocket();
exports.default = gameWebSocket;

},{"sockjs-client":"8QRAl","@stomp/stompjs":"aU6gZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8QRAl":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var transportList = require("63ebbe5b200a6200");
module.exports = require("6223e275de2cdad3")(transportList);
// TODO can't get rid of this until all servers do
if ('_sockjs_onload' in global) setTimeout(global._sockjs_onload, 1);

},{"63ebbe5b200a6200":"cbmFb","6223e275de2cdad3":"6tHHQ"}],"cbmFb":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = [
    // streaming transports
    require("899a5796043a1eb5"),
    require("903743a2715e2535"),
    require("2b47c752084a343"),
    require("ea092d8f32a5261b"),
    require("b9ac67e893b26b00")(require("ea092d8f32a5261b")),
    require("e42f09a707f5a392"),
    require("b9ac67e893b26b00")(require("e42f09a707f5a392")),
    require("567661142a8fcf1b"),
    require("417a01756230b55d"),
    require("b9ac67e893b26b00")(require("567661142a8fcf1b")),
    require("5bd59b490fbae1c6")
];

},{"899a5796043a1eb5":"1UnZo","903743a2715e2535":"cDcOp","2b47c752084a343":"ikYCk","ea092d8f32a5261b":"762fF","b9ac67e893b26b00":"iNgqC","e42f09a707f5a392":"4QXwI","567661142a8fcf1b":"lBZQU","417a01756230b55d":"4nw6W","5bd59b490fbae1c6":"6lN5Y"}],"1UnZo":[function(require,module,exports,__globalThis) {
'use strict';
var utils = require("1589e24cd82f8aef"), urlUtils = require("dab5ee15eddc4179"), inherits = require("6879b542e719dfe1"), EventEmitter = require("7a5e9a5027c67e99").EventEmitter, WebsocketDriver = require("a13c6750d56f2d5e");
var debug = function() {};
debug = require("574d5bb223a2bb99")('sockjs-client:websocket');
function WebSocketTransport(transUrl, ignore, options) {
    if (!WebSocketTransport.enabled()) throw new Error('Transport created when disabled');
    EventEmitter.call(this);
    debug('constructor', transUrl);
    var self = this;
    var url = urlUtils.addPath(transUrl, '/websocket');
    if (url.slice(0, 5) === 'https') url = 'wss' + url.slice(5);
    else url = 'ws' + url.slice(4);
    this.url = url;
    this.ws = new WebsocketDriver(this.url, [], options);
    this.ws.onmessage = function(e) {
        debug('message event', e.data);
        self.emit('message', e.data);
    };
    // Firefox has an interesting bug. If a websocket connection is
    // created after onunload, it stays alive even when user
    // navigates away from the page. In such situation let's lie -
    // let's not open the ws connection at all. See:
    // https://github.com/sockjs/sockjs-client/issues/28
    // https://bugzilla.mozilla.org/show_bug.cgi?id=696085
    this.unloadRef = utils.unloadAdd(function() {
        debug('unload');
        self.ws.close();
    });
    this.ws.onclose = function(e) {
        debug('close event', e.code, e.reason);
        self.emit('close', e.code, e.reason);
        self._cleanup();
    };
    this.ws.onerror = function(e) {
        debug('error event', e);
        self.emit('close', 1006, 'WebSocket connection broken');
        self._cleanup();
    };
}
inherits(WebSocketTransport, EventEmitter);
WebSocketTransport.prototype.send = function(data) {
    var msg = '[' + data + ']';
    debug('send', msg);
    this.ws.send(msg);
};
WebSocketTransport.prototype.close = function() {
    debug('close');
    var ws = this.ws;
    this._cleanup();
    if (ws) ws.close();
};
WebSocketTransport.prototype._cleanup = function() {
    debug('_cleanup');
    var ws = this.ws;
    if (ws) ws.onmessage = ws.onclose = ws.onerror = null;
    utils.unloadDel(this.unloadRef);
    this.unloadRef = this.ws = null;
    this.removeAllListeners();
};
WebSocketTransport.enabled = function() {
    debug('enabled');
    return !!WebsocketDriver;
};
WebSocketTransport.transportName = 'websocket';
// In theory, ws should require 1 round trip. But in chrome, this is
// not very stable over SSL. Most likely a ws connection requires a
// separate SSL connection, in which case 2 round trips are an
// absolute minumum.
WebSocketTransport.roundTrips = 2;
module.exports = WebSocketTransport;

},{"1589e24cd82f8aef":"iTswP","dab5ee15eddc4179":"dkQWo","6879b542e719dfe1":"9UN53","7a5e9a5027c67e99":"67h6H","a13c6750d56f2d5e":"eFdsy","574d5bb223a2bb99":"aEBf2"}],"iTswP":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var random = require("c176597c610c6612");
var onUnload = {}, afterUnload = false, isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime;
module.exports = {
    attachEvent: function(event, listener) {
        if (typeof global.addEventListener !== 'undefined') global.addEventListener(event, listener, false);
        else if (global.document && global.attachEvent) {
            // IE quirks.
            // According to: http://stevesouders.com/misc/test-postmessage.php
            // the message gets delivered only to 'document', not 'window'.
            global.document.attachEvent('on' + event, listener);
            // I get 'window' for ie8.
            global.attachEvent('on' + event, listener);
        }
    },
    detachEvent: function(event, listener) {
        if (typeof global.addEventListener !== 'undefined') global.removeEventListener(event, listener, false);
        else if (global.document && global.detachEvent) {
            global.document.detachEvent('on' + event, listener);
            global.detachEvent('on' + event, listener);
        }
    },
    unloadAdd: function(listener) {
        if (isChromePackagedApp) return null;
        var ref = random.string(8);
        onUnload[ref] = listener;
        if (afterUnload) setTimeout(this.triggerUnloadCallbacks, 0);
        return ref;
    },
    unloadDel: function(ref) {
        if (ref in onUnload) delete onUnload[ref];
    },
    triggerUnloadCallbacks: function() {
        for(var ref in onUnload){
            onUnload[ref]();
            delete onUnload[ref];
        }
    }
};
var unloadTriggered = function() {
    if (afterUnload) return;
    afterUnload = true;
    module.exports.triggerUnloadCallbacks();
};
// 'unload' alone is not reliable in opera within an iframe, but we
// can't use `beforeunload` as IE fires it on javascript: links.
if (!isChromePackagedApp) module.exports.attachEvent('unload', unloadTriggered);

},{"c176597c610c6612":"jCffp"}],"jCffp":[function(require,module,exports,__globalThis) {
'use strict';
var crypto = require("e9fad90c1b48fc3d");
// This string has length 32, a power of 2, so the modulus doesn't introduce a
// bias.
var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
module.exports = {
    string: function(length) {
        var max = _randomStringChars.length;
        var bytes = crypto.randomBytes(length);
        var ret = [];
        for(var i = 0; i < length; i++)ret.push(_randomStringChars.substr(bytes[i] % max, 1));
        return ret.join('');
    },
    number: function(max) {
        return Math.floor(Math.random() * max);
    },
    numberString: function(max) {
        var t = ('' + (max - 1)).length;
        var p = new Array(t + 1).join('0');
        return (p + this.number(max)).slice(-t);
    }
};

},{"e9fad90c1b48fc3d":"fKIDJ"}],"fKIDJ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
if (global.crypto && global.crypto.getRandomValues) module.exports.randomBytes = function(length) {
    var bytes = new Uint8Array(length);
    global.crypto.getRandomValues(bytes);
    return bytes;
};
else module.exports.randomBytes = function(length) {
    var bytes = new Array(length);
    for(var i = 0; i < length; i++)bytes[i] = Math.floor(Math.random() * 256);
    return bytes;
};

},{}],"dkQWo":[function(require,module,exports,__globalThis) {
'use strict';
var URL = require("35dea0f91f97cf60");
var debug = function() {};
debug = require("59a74f60e18e11bb")('sockjs-client:utils:url');
module.exports = {
    getOrigin: function(url) {
        if (!url) return null;
        var p = new URL(url);
        if (p.protocol === 'file:') return null;
        var port = p.port;
        if (!port) port = p.protocol === 'https:' ? '443' : '80';
        return p.protocol + '//' + p.hostname + ':' + port;
    },
    isOriginEqual: function(a, b) {
        var res = this.getOrigin(a) === this.getOrigin(b);
        debug('same', a, b, res);
        return res;
    },
    isSchemeEqual: function(a, b) {
        return a.split(':')[0] === b.split(':')[0];
    },
    addPath: function(url, path) {
        var qs = url.split('?');
        return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
    },
    addQuery: function(url, q) {
        return url + (url.indexOf('?') === -1 ? '?' + q : '&' + q);
    },
    isLoopbackAddr: function(addr) {
        return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^\[::1\]$/.test(addr);
    }
};

},{"35dea0f91f97cf60":"5MXqT","59a74f60e18e11bb":"aEBf2"}],"5MXqT":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var required = require("c3ee18fa394553c5"), qs = require("b84c748eaf7d2088"), controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, CRHTLF = /[\n\r\t]/g, slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, port = /:\d+$/, protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, windowsDriveLetter = /^[a-zA-Z]:/;
/**
 * Remove control characters and whitespace from the beginning of a string.
 *
 * @param {Object|String} str String to trim.
 * @returns {String} A new string representing `str` stripped of control
 *     characters and whitespace from its beginning.
 * @public
 */ function trimLeft(str) {
    return (str ? str : '').toString().replace(controlOrWhitespace, '');
}
/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */ var rules = [
    [
        '#',
        'hash'
    ],
    [
        '?',
        'query'
    ],
    function sanitize(address, url) {
        return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
    },
    [
        '/',
        'pathname'
    ],
    [
        '@',
        'auth',
        1
    ],
    [
        NaN,
        'host',
        undefined,
        1,
        1
    ],
    [
        /:(\d*)$/,
        'port',
        undefined,
        1
    ],
    [
        NaN,
        'hostname',
        undefined,
        1,
        1
    ] // Set left over.
];
/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */ var ignore = {
    hash: 1,
    query: 1
};
/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */ function lolcation(loc) {
    var globalVar;
    if (typeof window !== 'undefined') globalVar = window;
    else if (typeof global !== 'undefined') globalVar = global;
    else if (typeof self !== 'undefined') globalVar = self;
    else globalVar = {};
    var location = globalVar.location || {};
    loc = loc || location;
    var finaldestination = {}, type = typeof loc, key;
    if ('blob:' === loc.protocol) finaldestination = new Url(unescape(loc.pathname), {});
    else if ('string' === type) {
        finaldestination = new Url(loc, {});
        for(key in ignore)delete finaldestination[key];
    } else if ('object' === type) {
        for(key in loc){
            if (key in ignore) continue;
            finaldestination[key] = loc[key];
        }
        if (finaldestination.slashes === undefined) finaldestination.slashes = slashes.test(loc.href);
    }
    return finaldestination;
}
/**
 * Check whether a protocol scheme is special.
 *
 * @param {String} The protocol scheme of the URL
 * @return {Boolean} `true` if the protocol scheme is special, else `false`
 * @private
 */ function isSpecial(scheme) {
    return scheme === 'file:' || scheme === 'ftp:' || scheme === 'http:' || scheme === 'https:' || scheme === 'ws:' || scheme === 'wss:';
}
/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */ /**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @param {Object} location
 * @return {ProtocolExtract} Extracted information.
 * @private
 */ function extractProtocol(address, location) {
    address = trimLeft(address);
    address = address.replace(CRHTLF, '');
    location = location || {};
    var match = protocolre.exec(address);
    var protocol = match[1] ? match[1].toLowerCase() : '';
    var forwardSlashes = !!match[2];
    var otherSlashes = !!match[3];
    var slashesCount = 0;
    var rest;
    if (forwardSlashes) {
        if (otherSlashes) {
            rest = match[2] + match[3] + match[4];
            slashesCount = match[2].length + match[3].length;
        } else {
            rest = match[2] + match[4];
            slashesCount = match[2].length;
        }
    } else if (otherSlashes) {
        rest = match[3] + match[4];
        slashesCount = match[3].length;
    } else rest = match[4];
    if (protocol === 'file:') {
        if (slashesCount >= 2) rest = rest.slice(2);
    } else if (isSpecial(protocol)) rest = match[4];
    else if (protocol) {
        if (forwardSlashes) rest = rest.slice(2);
    } else if (slashesCount >= 2 && isSpecial(location.protocol)) rest = match[4];
    return {
        protocol: protocol,
        slashes: forwardSlashes || isSpecial(protocol),
        slashesCount: slashesCount,
        rest: rest
    };
}
/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */ function resolve(relative, base) {
    if (relative === '') return base;
    var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')), i = path.length, last = path[i - 1], unshift = false, up = 0;
    while(i--){
        if (path[i] === '.') path.splice(i, 1);
        else if (path[i] === '..') {
            path.splice(i, 1);
            up++;
        } else if (up) {
            if (i === 0) unshift = true;
            path.splice(i, 1);
            up--;
        }
    }
    if (unshift) path.unshift('');
    if (last === '.' || last === '..') path.push('');
    return path.join('/');
}
/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */ function Url(address, location, parser) {
    address = trimLeft(address);
    address = address.replace(CRHTLF, '');
    if (!(this instanceof Url)) return new Url(address, location, parser);
    var relative, extracted, parse, instruction, index, key, instructions = rules.slice(), type = typeof location, url = this, i = 0;
    //
    // The following if statements allows this module two have compatibility with
    // 2 different API:
    //
    // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
    //    where the boolean indicates that the query string should also be parsed.
    //
    // 2. The `URL` interface of the browser which accepts a URL, object as
    //    arguments. The supplied object will be used as default values / fall-back
    //    for relative paths.
    //
    if ('object' !== type && 'string' !== type) {
        parser = location;
        location = null;
    }
    if (parser && 'function' !== typeof parser) parser = qs.parse;
    location = lolcation(location);
    //
    // Extract protocol information before running the instructions.
    //
    extracted = extractProtocol(address || '', location);
    relative = !extracted.protocol && !extracted.slashes;
    url.slashes = extracted.slashes || relative && location.slashes;
    url.protocol = extracted.protocol || location.protocol || '';
    address = extracted.rest;
    //
    // When the authority component is absent the URL starts with a path
    // component.
    //
    if (extracted.protocol === 'file:' && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) instructions[3] = [
        /(.*)/,
        'pathname'
    ];
    for(; i < instructions.length; i++){
        instruction = instructions[i];
        if (typeof instruction === 'function') {
            address = instruction(address, url);
            continue;
        }
        parse = instruction[0];
        key = instruction[1];
        if (parse !== parse) url[key] = address;
        else if ('string' === typeof parse) {
            index = parse === '@' ? address.lastIndexOf(parse) : address.indexOf(parse);
            if (~index) {
                if ('number' === typeof instruction[2]) {
                    url[key] = address.slice(0, index);
                    address = address.slice(index + instruction[2]);
                } else {
                    url[key] = address.slice(index);
                    address = address.slice(0, index);
                }
            }
        } else if (index = parse.exec(address)) {
            url[key] = index[1];
            address = address.slice(0, index.index);
        }
        url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');
        //
        // Hostname, host and protocol should be lowercased so they can be used to
        // create a proper `origin`.
        //
        if (instruction[4]) url[key] = url[key].toLowerCase();
    }
    //
    // Also parse the supplied query string in to an object. If we're supplied
    // with a custom parser as function use that instead of the default build-in
    // parser.
    //
    if (parser) url.query = parser(url.query);
    //
    // If the URL is relative, resolve the pathname against the base URL.
    //
    if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) url.pathname = resolve(url.pathname, location.pathname);
    //
    // Default to a / for pathname if none exists. This normalizes the URL
    // to always have a /
    //
    if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) url.pathname = '/' + url.pathname;
    //
    // We should not add port numbers if they are already the default port number
    // for a given protocol. As the host also contains the port number we're going
    // override it with the hostname which contains no port number.
    //
    if (!required(url.port, url.protocol)) {
        url.host = url.hostname;
        url.port = '';
    }
    //
    // Parse down the `auth` for the username and password.
    //
    url.username = url.password = '';
    if (url.auth) {
        index = url.auth.indexOf(':');
        if (~index) {
            url.username = url.auth.slice(0, index);
            url.username = encodeURIComponent(decodeURIComponent(url.username));
            url.password = url.auth.slice(index + 1);
            url.password = encodeURIComponent(decodeURIComponent(url.password));
        } else url.username = encodeURIComponent(decodeURIComponent(url.auth));
        url.auth = url.password ? url.username + ':' + url.password : url.username;
    }
    url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';
    //
    // The href is just the compiled result.
    //
    url.href = url.toString();
}
/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */ function set(part, value, fn) {
    var url = this;
    switch(part){
        case 'query':
            if ('string' === typeof value && value.length) value = (fn || qs.parse)(value);
            url[part] = value;
            break;
        case 'port':
            url[part] = value;
            if (!required(value, url.protocol)) {
                url.host = url.hostname;
                url[part] = '';
            } else if (value) url.host = url.hostname + ':' + value;
            break;
        case 'hostname':
            url[part] = value;
            if (url.port) value += ':' + url.port;
            url.host = value;
            break;
        case 'host':
            url[part] = value;
            if (port.test(value)) {
                value = value.split(':');
                url.port = value.pop();
                url.hostname = value.join(':');
            } else {
                url.hostname = value;
                url.port = '';
            }
            break;
        case 'protocol':
            url.protocol = value.toLowerCase();
            url.slashes = !fn;
            break;
        case 'pathname':
        case 'hash':
            if (value) {
                var char = part === 'pathname' ? '/' : '#';
                url[part] = value.charAt(0) !== char ? char + value : value;
            } else url[part] = value;
            break;
        case 'username':
        case 'password':
            url[part] = encodeURIComponent(value);
            break;
        case 'auth':
            var index = value.indexOf(':');
            if (~index) {
                url.username = value.slice(0, index);
                url.username = encodeURIComponent(decodeURIComponent(url.username));
                url.password = value.slice(index + 1);
                url.password = encodeURIComponent(decodeURIComponent(url.password));
            } else url.username = encodeURIComponent(decodeURIComponent(value));
    }
    for(var i = 0; i < rules.length; i++){
        var ins = rules[i];
        if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
    }
    url.auth = url.password ? url.username + ':' + url.password : url.username;
    url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';
    url.href = url.toString();
    return url;
}
/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */ function toString(stringify) {
    if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
    var query, url = this, host = url.host, protocol = url.protocol;
    if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
    var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? '//' : '');
    if (url.username) {
        result += url.username;
        if (url.password) result += ':' + url.password;
        result += '@';
    } else if (url.password) {
        result += ':' + url.password;
        result += '@';
    } else if (url.protocol !== 'file:' && isSpecial(url.protocol) && !host && url.pathname !== '/') //
    // Add back the empty userinfo, otherwise the original invalid URL
    // might be transformed into a valid one with `url.pathname` as host.
    //
    result += '@';
    //
    // Trailing colon is removed from `url.host` when it is parsed. If it still
    // ends with a colon, then add back the trailing colon that was removed. This
    // prevents an invalid URL from being transformed into a valid one.
    //
    if (host[host.length - 1] === ':' || port.test(url.hostname) && !url.port) host += ':';
    result += host + url.pathname;
    query = 'object' === typeof url.query ? stringify(url.query) : url.query;
    if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
    if (url.hash) result += url.hash;
    return result;
}
Url.prototype = {
    set: set,
    toString: toString
};
//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;
module.exports = Url;

},{"c3ee18fa394553c5":"2bHcN","b84c748eaf7d2088":"iOmth"}],"2bHcN":[function(require,module,exports,__globalThis) {
'use strict';
/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */ module.exports = function required(port, protocol) {
    protocol = protocol.split(':')[0];
    port = +port;
    if (!port) return false;
    switch(protocol){
        case 'http':
        case 'ws':
            return port !== 80;
        case 'https':
        case 'wss':
            return port !== 443;
        case 'ftp':
            return port !== 21;
        case 'gopher':
            return port !== 70;
        case 'file':
            return false;
    }
    return port !== 0;
};

},{}],"iOmth":[function(require,module,exports,__globalThis) {
'use strict';
var has = Object.prototype.hasOwnProperty, undef;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */ function decode(input) {
    try {
        return decodeURIComponent(input.replace(/\+/g, ' '));
    } catch (e) {
        return null;
    }
}
/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */ function encode(input) {
    try {
        return encodeURIComponent(input);
    } catch (e) {
        return null;
    }
}
/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */ function querystring(query) {
    var parser = /([^=?#&]+)=?([^&]*)/g, result = {}, part;
    while(part = parser.exec(query)){
        var key = decode(part[1]), value = decode(part[2]);
        //
        // Prevent overriding of existing properties. This ensures that build-in
        // methods like `toString` or __proto__ are not overriden by malicious
        // querystrings.
        //
        // In the case if failed decoding, we want to omit the key/value pairs
        // from the result.
        //
        if (key === null || value === null || key in result) continue;
        result[key] = value;
    }
    return result;
}
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */ function querystringify(obj, prefix) {
    prefix = prefix || '';
    var pairs = [], value, key;
    //
    // Optionally prefix with a '?' if needed
    //
    if ('string' !== typeof prefix) prefix = '?';
    for(key in obj)if (has.call(obj, key)) {
        value = obj[key];
        //
        // Edge cases where we actually want to encode the value to an empty
        // string instead of the stringified value.
        //
        if (!value && (value === null || value === undef || isNaN(value))) value = '';
        key = encode(key);
        value = encode(value);
        //
        // If we failed to encode the strings, we should bail out as we don't
        // want to add invalid strings to the query.
        //
        if (key === null || value === null) continue;
        pairs.push(key + '=' + value);
    }
    return pairs.length ? prefix + pairs.join('&') : '';
}
//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

},{}],"aEBf2":[function(require,module,exports,__globalThis) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) return true;
     // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
     // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) return;
    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if (match === '%%') return;
        index++;
        if (match === '%c') // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */ function log() {
    var _console;
    // This hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) exports.storage.setItem('debug', namespaces);
        else exports.storage.removeItem('debug');
    } catch (error) {
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    var r;
    try {
        r = exports.storage.getItem('debug');
    } catch (error) {} // Swallow
    // XXX (@Qix-) should we be logging these?
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    r;
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = require("d9172905aa5ed6c")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};

},{"d9172905aa5ed6c":"b1J32"}],"b1J32":[function(require,module,exports,__globalThis) {
"use strict";
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require("5c5c8c8b1996f88f");
    Object.keys(env).forEach(function(key) {
        createDebug[key] = env[key];
    });
    /**
  * Active `debug` instances.
  */ createDebug.instances = [];
    /**
  * The currently active debug mode names, and names to skip.
  */ createDebug.names = [];
    createDebug.skips = [];
    /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */ createDebug.formatters = {};
    /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */ function selectColor(namespace) {
        var hash = 0;
        for(var i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */ function createDebug(namespace) {
        var prevTime;
        function debug() {
            // Disabled?
            if (!debug.enabled) return;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            var self = debug; // Set `diff` timestamp
            var curr = Number(new Date());
            var ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') // Anything else let's inspect with %O
            args.unshift('%O');
             // Apply any `formatters` transformations
            var index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') return match;
                index++;
                var formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    var val = args[index];
                    match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            }); // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            var logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.enabled = createDebug.enabled(namespace);
        debug.useColors = createDebug.useColors();
        debug.color = selectColor(namespace);
        debug.destroy = destroy;
        debug.extend = extend; // Debug.formatArgs = formatArgs;
        // debug.rawLog = rawLog;
        // env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') createDebug.init(debug);
        createDebug.instances.push(debug);
        return debug;
    }
    function destroy() {
        var index = createDebug.instances.indexOf(this);
        if (index !== -1) {
            createDebug.instances.splice(index, 1);
            return true;
        }
        return false;
    }
    function extend(namespace, delimiter) {
        return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    }
    /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.names = [];
        createDebug.skips = [];
        var i;
        var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        var len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) continue;
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            else createDebug.names.push(new RegExp('^' + namespaces + '$'));
        }
        for(i = 0; i < createDebug.instances.length; i++){
            var instance = createDebug.instances[i];
            instance.enabled = createDebug.enabled(instance.namespace);
        }
    }
    /**
  * Disable debug output.
  *
  * @api public
  */ function disable() {
        createDebug.enable('');
    }
    /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */ function enabled(name) {
        if (name[name.length - 1] === '*') return true;
        var i;
        var len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) return false;
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) return true;
        }
        return false;
    }
    /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */ function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;

},{"5c5c8c8b1996f88f":"6zT1x"}],"6zT1x":[function(require,module,exports,__globalThis) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) return parse(val);
    else if (type === 'number' && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return Math.round(ms / d) + 'd';
    if (msAbs >= h) return Math.round(ms / h) + 'h';
    if (msAbs >= m) return Math.round(ms / m) + 'm';
    if (msAbs >= s) return Math.round(ms / s) + 's';
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return plural(ms, msAbs, d, 'day');
    if (msAbs >= h) return plural(ms, msAbs, h, 'hour');
    if (msAbs >= m) return plural(ms, msAbs, m, 'minute');
    if (msAbs >= s) return plural(ms, msAbs, s, 'second');
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],"9UN53":[function(require,module,exports,__globalThis) {
if (typeof Object.create === 'function') // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"67h6H":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("43c82b6cfce424b5"), EventTarget = require("6ed4a1167e264011");
function EventEmitter() {
    EventTarget.call(this);
}
inherits(EventEmitter, EventTarget);
EventEmitter.prototype.removeAllListeners = function(type) {
    if (type) delete this._listeners[type];
    else this._listeners = {};
};
EventEmitter.prototype.once = function(type, listener) {
    var self = this, fired = false;
    function g() {
        self.removeListener(type, g);
        if (!fired) {
            fired = true;
            listener.apply(this, arguments);
        }
    }
    this.on(type, g);
};
EventEmitter.prototype.emit = function() {
    var type = arguments[0];
    var listeners = this._listeners[type];
    if (!listeners) return;
    // equivalent of Array.prototype.slice.call(arguments, 1);
    var l = arguments.length;
    var args = new Array(l - 1);
    for(var ai = 1; ai < l; ai++)args[ai - 1] = arguments[ai];
    for(var i = 0; i < listeners.length; i++)listeners[i].apply(this, args);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;
module.exports.EventEmitter = EventEmitter;

},{"43c82b6cfce424b5":"9UN53","6ed4a1167e264011":"7HmJu"}],"7HmJu":[function(require,module,exports,__globalThis) {
'use strict';
/* Simplified implementation of DOM2 EventTarget.
 *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
 */ function EventTarget() {
    this._listeners = {};
}
EventTarget.prototype.addEventListener = function(eventType, listener) {
    if (!(eventType in this._listeners)) this._listeners[eventType] = [];
    var arr = this._listeners[eventType];
    // #4
    if (arr.indexOf(listener) === -1) // Make a copy so as not to interfere with a current dispatchEvent.
    arr = arr.concat([
        listener
    ]);
    this._listeners[eventType] = arr;
};
EventTarget.prototype.removeEventListener = function(eventType, listener) {
    var arr = this._listeners[eventType];
    if (!arr) return;
    var idx = arr.indexOf(listener);
    if (idx !== -1) {
        if (arr.length > 1) // Make a copy so as not to interfere with a current dispatchEvent.
        this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
        else delete this._listeners[eventType];
        return;
    }
};
EventTarget.prototype.dispatchEvent = function() {
    var event = arguments[0];
    var t = event.type;
    // equivalent of Array.prototype.slice.call(arguments, 0);
    var args = arguments.length === 1 ? [
        event
    ] : Array.apply(null, arguments);
    // TODO: This doesn't match the real behavior; per spec, onfoo get
    // their place in line from the /first/ time they're set from
    // non-null. Although WebKit bumps it to the end every time it's
    // set.
    if (this['on' + t]) this['on' + t].apply(this, args);
    if (t in this._listeners) {
        // Grab a reference to the listeners list. removeEventListener may alter the list.
        var listeners = this._listeners[t];
        for(var i = 0; i < listeners.length; i++)listeners[i].apply(this, args);
    }
};
module.exports = EventTarget;

},{}],"eFdsy":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var Driver = global.WebSocket || global.MozWebSocket;
if (Driver) module.exports = function WebSocketBrowserDriver(url) {
    return new Driver(url);
};
else module.exports = undefined;

},{}],"cDcOp":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var inherits = require("e946ca8620862e0c"), AjaxBasedTransport = require("2c455590c0ab767b"), XhrReceiver = require("af33c01681528dac"), XHRCorsObject = require("3a9ef50d0eaa757f"), XHRLocalObject = require("d479d8d375b8d0ce"), browser = require("adedea5b88937f4d");
function XhrStreamingTransport(transUrl) {
    if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) throw new Error('Transport created when disabled');
    AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
}
inherits(XhrStreamingTransport, AjaxBasedTransport);
XhrStreamingTransport.enabled = function(info) {
    if (info.nullOrigin) return false;
    // Opera doesn't support xhr-streaming #60
    // But it might be able to #92
    if (browser.isOpera()) return false;
    return XHRCorsObject.enabled;
};
XhrStreamingTransport.transportName = 'xhr-streaming';
XhrStreamingTransport.roundTrips = 2; // preflight, ajax
// Safari gets confused when a streaming ajax request is started
// before onload. This causes the load indicator to spin indefinetely.
// Only require body when used in a browser
XhrStreamingTransport.needBody = !!global.document;
module.exports = XhrStreamingTransport;

},{"e946ca8620862e0c":"9UN53","2c455590c0ab767b":"6Ez0Q","af33c01681528dac":"6kr1x","3a9ef50d0eaa757f":"a27Ev","d479d8d375b8d0ce":"1atz6","adedea5b88937f4d":"f6eB0"}],"6Ez0Q":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("13698dbeebb72d3d"), urlUtils = require("5fe4e274abe368a0"), SenderReceiver = require("df2cf9346ef901a1");
var debug = function() {};
debug = require("d39a99d9152a3767")('sockjs-client:ajax-based');
function createAjaxSender(AjaxObject) {
    return function(url, payload, callback) {
        debug('create ajax sender', url, payload);
        var opt = {};
        if (typeof payload === 'string') opt.headers = {
            'Content-type': 'text/plain'
        };
        var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
        var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
        xo.once('finish', function(status) {
            debug('finish', status);
            xo = null;
            if (status !== 200 && status !== 204) return callback(new Error('http status ' + status));
            callback();
        });
        return function() {
            debug('abort');
            xo.close();
            xo = null;
            var err = new Error('Aborted');
            err.code = 1000;
            callback(err);
        };
    };
}
function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
    SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
}
inherits(AjaxBasedTransport, SenderReceiver);
module.exports = AjaxBasedTransport;

},{"13698dbeebb72d3d":"9UN53","5fe4e274abe368a0":"dkQWo","df2cf9346ef901a1":"6K7xn","d39a99d9152a3767":"aEBf2"}],"6K7xn":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("a39a169c039e3095"), urlUtils = require("7f8e173576390d52"), BufferedSender = require("538e316ff55c96d0"), Polling = require("b81344e1145437d4");
var debug = function() {};
debug = require("449d1bcab1d4a7e")('sockjs-client:sender-receiver');
function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
    var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
    debug(pollUrl);
    var self = this;
    BufferedSender.call(this, transUrl, senderFunc);
    this.poll = new Polling(Receiver, pollUrl, AjaxObject);
    this.poll.on('message', function(msg) {
        debug('poll message', msg);
        self.emit('message', msg);
    });
    this.poll.once('close', function(code, reason) {
        debug('poll close', code, reason);
        self.poll = null;
        self.emit('close', code, reason);
        self.close();
    });
}
inherits(SenderReceiver, BufferedSender);
SenderReceiver.prototype.close = function() {
    BufferedSender.prototype.close.call(this);
    debug('close');
    this.removeAllListeners();
    if (this.poll) {
        this.poll.abort();
        this.poll = null;
    }
};
module.exports = SenderReceiver;

},{"a39a169c039e3095":"9UN53","7f8e173576390d52":"dkQWo","538e316ff55c96d0":"3g5zm","b81344e1145437d4":"lk1fV","449d1bcab1d4a7e":"aEBf2"}],"3g5zm":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("f880effa668edb8b"), EventEmitter = require("48d615eea3bddbd9").EventEmitter;
var debug = function() {};
debug = require("7e57fc53550c14dc")('sockjs-client:buffered-sender');
function BufferedSender(url, sender) {
    debug(url);
    EventEmitter.call(this);
    this.sendBuffer = [];
    this.sender = sender;
    this.url = url;
}
inherits(BufferedSender, EventEmitter);
BufferedSender.prototype.send = function(message) {
    debug('send', message);
    this.sendBuffer.push(message);
    if (!this.sendStop) this.sendSchedule();
};
// For polling transports in a situation when in the message callback,
// new message is being send. If the sending connection was started
// before receiving one, it is possible to saturate the network and
// timeout due to the lack of receiving socket. To avoid that we delay
// sending messages by some small time, in order to let receiving
// connection be started beforehand. This is only a halfmeasure and
// does not fix the big problem, but it does make the tests go more
// stable on slow networks.
BufferedSender.prototype.sendScheduleWait = function() {
    debug('sendScheduleWait');
    var self = this;
    var tref;
    this.sendStop = function() {
        debug('sendStop');
        self.sendStop = null;
        clearTimeout(tref);
    };
    tref = setTimeout(function() {
        debug('timeout');
        self.sendStop = null;
        self.sendSchedule();
    }, 25);
};
BufferedSender.prototype.sendSchedule = function() {
    debug('sendSchedule', this.sendBuffer.length);
    var self = this;
    if (this.sendBuffer.length > 0) {
        var payload = '[' + this.sendBuffer.join(',') + ']';
        this.sendStop = this.sender(this.url, payload, function(err) {
            self.sendStop = null;
            if (err) {
                debug('error', err);
                self.emit('close', err.code || 1006, 'Sending error: ' + err);
                self.close();
            } else self.sendScheduleWait();
        });
        this.sendBuffer = [];
    }
};
BufferedSender.prototype._cleanup = function() {
    debug('_cleanup');
    this.removeAllListeners();
};
BufferedSender.prototype.close = function() {
    debug('close');
    this._cleanup();
    if (this.sendStop) {
        this.sendStop();
        this.sendStop = null;
    }
};
module.exports = BufferedSender;

},{"f880effa668edb8b":"9UN53","48d615eea3bddbd9":"67h6H","7e57fc53550c14dc":"aEBf2"}],"lk1fV":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("2a99229b4eab6391"), EventEmitter = require("9c204ff750d1f30e").EventEmitter;
var debug = function() {};
debug = require("fc6125bc4f8a3144")('sockjs-client:polling');
function Polling(Receiver, receiveUrl, AjaxObject) {
    debug(receiveUrl);
    EventEmitter.call(this);
    this.Receiver = Receiver;
    this.receiveUrl = receiveUrl;
    this.AjaxObject = AjaxObject;
    this._scheduleReceiver();
}
inherits(Polling, EventEmitter);
Polling.prototype._scheduleReceiver = function() {
    debug('_scheduleReceiver');
    var self = this;
    var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
    poll.on('message', function(msg) {
        debug('message', msg);
        self.emit('message', msg);
    });
    poll.once('close', function(code, reason) {
        debug('close', code, reason, self.pollIsClosing);
        self.poll = poll = null;
        if (!self.pollIsClosing) {
            if (reason === 'network') self._scheduleReceiver();
            else {
                self.emit('close', code || 1006, reason);
                self.removeAllListeners();
            }
        }
    });
};
Polling.prototype.abort = function() {
    debug('abort');
    this.removeAllListeners();
    this.pollIsClosing = true;
    if (this.poll) this.poll.abort();
};
module.exports = Polling;

},{"2a99229b4eab6391":"9UN53","9c204ff750d1f30e":"67h6H","fc6125bc4f8a3144":"aEBf2"}],"6kr1x":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("8e6e9786e45ecd4d"), EventEmitter = require("a0e2be0adbb58a27").EventEmitter;
var debug = function() {};
debug = require("39cd958b2acb0161")('sockjs-client:receiver:xhr');
function XhrReceiver(url, AjaxObject) {
    debug(url);
    EventEmitter.call(this);
    var self = this;
    this.bufferPosition = 0;
    this.xo = new AjaxObject('POST', url, null);
    this.xo.on('chunk', this._chunkHandler.bind(this));
    this.xo.once('finish', function(status, text) {
        debug('finish', status, text);
        self._chunkHandler(status, text);
        self.xo = null;
        var reason = status === 200 ? 'network' : 'permanent';
        debug('close', reason);
        self.emit('close', null, reason);
        self._cleanup();
    });
}
inherits(XhrReceiver, EventEmitter);
XhrReceiver.prototype._chunkHandler = function(status, text) {
    debug('_chunkHandler', status);
    if (status !== 200 || !text) return;
    for(var idx = -1;; this.bufferPosition += idx + 1){
        var buf = text.slice(this.bufferPosition);
        idx = buf.indexOf('\n');
        if (idx === -1) break;
        var msg = buf.slice(0, idx);
        if (msg) {
            debug('message', msg);
            this.emit('message', msg);
        }
    }
};
XhrReceiver.prototype._cleanup = function() {
    debug('_cleanup');
    this.removeAllListeners();
};
XhrReceiver.prototype.abort = function() {
    debug('abort');
    if (this.xo) {
        this.xo.close();
        debug('close');
        this.emit('close', null, 'user');
        this.xo = null;
    }
    this._cleanup();
};
module.exports = XhrReceiver;

},{"8e6e9786e45ecd4d":"9UN53","a0e2be0adbb58a27":"67h6H","39cd958b2acb0161":"aEBf2"}],"a27Ev":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("3e9f42fad0bc5376"), XhrDriver = require("71c614dd7db0628d");
function XHRCorsObject(method, url, payload, opts) {
    XhrDriver.call(this, method, url, payload, opts);
}
inherits(XHRCorsObject, XhrDriver);
XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;
module.exports = XHRCorsObject;

},{"3e9f42fad0bc5376":"9UN53","71c614dd7db0628d":"2u8qY"}],"2u8qY":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var EventEmitter = require("edb9565103265ac5").EventEmitter, inherits = require("1d66671eabcfd857"), utils = require("8a3201f0c120736a"), urlUtils = require("bbef9567e1a260f6"), XHR = global.XMLHttpRequest;
var debug = function() {};
debug = require("86400d0edd9feb23")('sockjs-client:browser:xhr');
function AbstractXHRObject(method, url, payload, opts) {
    debug(method, url);
    var self = this;
    EventEmitter.call(this);
    setTimeout(function() {
        self._start(method, url, payload, opts);
    }, 0);
}
inherits(AbstractXHRObject, EventEmitter);
AbstractXHRObject.prototype._start = function(method, url, payload, opts) {
    var self = this;
    try {
        this.xhr = new XHR();
    } catch (x) {
    // intentionally empty
    }
    if (!this.xhr) {
        debug('no xhr');
        this.emit('finish', 0, 'no xhr support');
        this._cleanup();
        return;
    }
    // several browsers cache POSTs
    url = urlUtils.addQuery(url, 't=' + +new Date());
    // Explorer tends to keep connection open, even after the
    // tab gets closed: http://bugs.jquery.com/ticket/5280
    this.unloadRef = utils.unloadAdd(function() {
        debug('unload cleanup');
        self._cleanup(true);
    });
    try {
        this.xhr.open(method, url, true);
        if (this.timeout && 'timeout' in this.xhr) {
            this.xhr.timeout = this.timeout;
            this.xhr.ontimeout = function() {
                debug('xhr timeout');
                self.emit('finish', 0, '');
                self._cleanup(false);
            };
        }
    } catch (e) {
        debug('exception', e);
        // IE raises an exception on wrong port.
        this.emit('finish', 0, '');
        this._cleanup(false);
        return;
    }
    if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
        debug('withCredentials');
        // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
        // "This never affects same-site requests."
        this.xhr.withCredentials = true;
    }
    if (opts && opts.headers) for(var key in opts.headers)this.xhr.setRequestHeader(key, opts.headers[key]);
    this.xhr.onreadystatechange = function() {
        if (self.xhr) {
            var x = self.xhr;
            var text, status;
            debug('readyState', x.readyState);
            switch(x.readyState){
                case 3:
                    // IE doesn't like peeking into responseText or status
                    // on Microsoft.XMLHTTP and readystate=3
                    try {
                        status = x.status;
                        text = x.responseText;
                    } catch (e) {
                    // intentionally empty
                    }
                    debug('status', status);
                    // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
                    if (status === 1223) status = 204;
                    // IE does return readystate == 3 for 404 answers.
                    if (status === 200 && text && text.length > 0) {
                        debug('chunk');
                        self.emit('chunk', status, text);
                    }
                    break;
                case 4:
                    status = x.status;
                    debug('status', status);
                    // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
                    if (status === 1223) status = 204;
                    // IE returns this for a bad port
                    // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx
                    if (status === 12005 || status === 12029) status = 0;
                    debug('finish', status, x.responseText);
                    self.emit('finish', status, x.responseText);
                    self._cleanup(false);
                    break;
            }
        }
    };
    try {
        self.xhr.send(payload);
    } catch (e) {
        self.emit('finish', 0, '');
        self._cleanup(false);
    }
};
AbstractXHRObject.prototype._cleanup = function(abort) {
    debug('cleanup');
    if (!this.xhr) return;
    this.removeAllListeners();
    utils.unloadDel(this.unloadRef);
    // IE needs this field to be a function
    this.xhr.onreadystatechange = function() {};
    if (this.xhr.ontimeout) this.xhr.ontimeout = null;
    if (abort) try {
        this.xhr.abort();
    } catch (x) {
    // intentionally empty
    }
    this.unloadRef = this.xhr = null;
};
AbstractXHRObject.prototype.close = function() {
    debug('close');
    this._cleanup(true);
};
AbstractXHRObject.enabled = !!XHR;
// override XMLHttpRequest for IE6/7
// obfuscate to avoid firewalls
var axo = [
    'Active'
].concat('Object').join('X');
if (!AbstractXHRObject.enabled && axo in global) {
    debug('overriding xmlhttprequest');
    XHR = function() {
        try {
            return new global[axo]('Microsoft.XMLHTTP');
        } catch (e) {
            return null;
        }
    };
    AbstractXHRObject.enabled = (new XHR(), true);
}
var cors = false;
try {
    cors = 'withCredentials' in new XHR();
} catch (ignored) {
// intentionally empty
}
AbstractXHRObject.supportsCORS = cors;
module.exports = AbstractXHRObject;

},{"edb9565103265ac5":"67h6H","1d66671eabcfd857":"9UN53","8a3201f0c120736a":"iTswP","bbef9567e1a260f6":"dkQWo","86400d0edd9feb23":"aEBf2"}],"1atz6":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("ec715a1af48221b3"), XhrDriver = require("b49f09687fa95951");
function XHRLocalObject(method, url, payload /*, opts */ ) {
    XhrDriver.call(this, method, url, payload, {
        noCredentials: true
    });
}
inherits(XHRLocalObject, XhrDriver);
XHRLocalObject.enabled = XhrDriver.enabled;
module.exports = XHRLocalObject;

},{"ec715a1af48221b3":"9UN53","b49f09687fa95951":"2u8qY"}],"f6eB0":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
module.exports = {
    isOpera: function() {
        return global.navigator && /opera/i.test(global.navigator.userAgent);
    },
    isKonqueror: function() {
        return global.navigator && /konqueror/i.test(global.navigator.userAgent);
    },
    hasDomain: function() {
        // non-browser client always has a domain
        if (!global.document) return true;
        try {
            return !!global.document.domain;
        } catch (e) {
            return false;
        }
    }
};

},{}],"ikYCk":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("f486b14efa7a7302"), AjaxBasedTransport = require("7dc9d239d08928be"), XhrReceiver = require("8e0091c1836737a1"), XDRObject = require("ed7eb8ac296a5ca8");
// According to:
//   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
//   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
function XdrStreamingTransport(transUrl) {
    if (!XDRObject.enabled) throw new Error('Transport created when disabled');
    AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
}
inherits(XdrStreamingTransport, AjaxBasedTransport);
XdrStreamingTransport.enabled = function(info) {
    if (info.cookie_needed || info.nullOrigin) return false;
    return XDRObject.enabled && info.sameScheme;
};
XdrStreamingTransport.transportName = 'xdr-streaming';
XdrStreamingTransport.roundTrips = 2; // preflight, ajax
module.exports = XdrStreamingTransport;

},{"f486b14efa7a7302":"9UN53","7dc9d239d08928be":"6Ez0Q","8e0091c1836737a1":"6kr1x","ed7eb8ac296a5ca8":"b2qJB"}],"b2qJB":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var EventEmitter = require("4b04e23d84c559f7").EventEmitter, inherits = require("ce97338107771172"), eventUtils = require("671b321185be565e"), browser = require("8c48fcf67127fcc3"), urlUtils = require("1749ba4aa55b23dd");
var debug = function() {};
debug = require("dc25784d3891ea99")('sockjs-client:sender:xdr');
// References:
//   http://ajaxian.com/archives/100-line-ajax-wrapper
//   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx
function XDRObject(method, url, payload) {
    debug(method, url);
    var self = this;
    EventEmitter.call(this);
    setTimeout(function() {
        self._start(method, url, payload);
    }, 0);
}
inherits(XDRObject, EventEmitter);
XDRObject.prototype._start = function(method, url, payload) {
    debug('_start');
    var self = this;
    var xdr = new global.XDomainRequest();
    // IE caches even POSTs
    url = urlUtils.addQuery(url, 't=' + +new Date());
    xdr.onerror = function() {
        debug('onerror');
        self._error();
    };
    xdr.ontimeout = function() {
        debug('ontimeout');
        self._error();
    };
    xdr.onprogress = function() {
        debug('progress', xdr.responseText);
        self.emit('chunk', 200, xdr.responseText);
    };
    xdr.onload = function() {
        debug('load');
        self.emit('finish', 200, xdr.responseText);
        self._cleanup(false);
    };
    this.xdr = xdr;
    this.unloadRef = eventUtils.unloadAdd(function() {
        self._cleanup(true);
    });
    try {
        // Fails with AccessDenied if port number is bogus
        this.xdr.open(method, url);
        if (this.timeout) this.xdr.timeout = this.timeout;
        this.xdr.send(payload);
    } catch (x) {
        this._error();
    }
};
XDRObject.prototype._error = function() {
    this.emit('finish', 0, '');
    this._cleanup(false);
};
XDRObject.prototype._cleanup = function(abort) {
    debug('cleanup', abort);
    if (!this.xdr) return;
    this.removeAllListeners();
    eventUtils.unloadDel(this.unloadRef);
    this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
    if (abort) try {
        this.xdr.abort();
    } catch (x) {
    // intentionally empty
    }
    this.unloadRef = this.xdr = null;
};
XDRObject.prototype.close = function() {
    debug('close');
    this._cleanup(true);
};
// IE 8/9 if the request target uses the same scheme - #79
XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());
module.exports = XDRObject;

},{"4b04e23d84c559f7":"67h6H","ce97338107771172":"9UN53","671b321185be565e":"iTswP","8c48fcf67127fcc3":"f6eB0","1749ba4aa55b23dd":"dkQWo","dc25784d3891ea99":"aEBf2"}],"762fF":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("7a4bb9d3e6b258bd"), AjaxBasedTransport = require("ef52530d34bf91f1"), EventSourceReceiver = require("be27438fac569c0d"), XHRCorsObject = require("cfd746c9962b10e5"), EventSourceDriver = require("892add6a8d095fb");
function EventSourceTransport(transUrl) {
    if (!EventSourceTransport.enabled()) throw new Error('Transport created when disabled');
    AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
}
inherits(EventSourceTransport, AjaxBasedTransport);
EventSourceTransport.enabled = function() {
    return !!EventSourceDriver;
};
EventSourceTransport.transportName = 'eventsource';
EventSourceTransport.roundTrips = 2;
module.exports = EventSourceTransport;

},{"7a4bb9d3e6b258bd":"9UN53","ef52530d34bf91f1":"6Ez0Q","be27438fac569c0d":"cFQbK","cfd746c9962b10e5":"a27Ev","892add6a8d095fb":"hHvXO"}],"cFQbK":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("6cfe6f940db7cc81"), EventEmitter = require("b158af01f96c6486").EventEmitter, EventSourceDriver = require("9348c93b923af755");
var debug = function() {};
debug = require("63fa3da7f387b26b")('sockjs-client:receiver:eventsource');
function EventSourceReceiver(url) {
    debug(url);
    EventEmitter.call(this);
    var self = this;
    var es = this.es = new EventSourceDriver(url);
    es.onmessage = function(e) {
        debug('message', e.data);
        self.emit('message', decodeURI(e.data));
    };
    es.onerror = function(e) {
        debug('error', es.readyState, e);
        // ES on reconnection has readyState = 0 or 1.
        // on network error it's CLOSED = 2
        var reason = es.readyState !== 2 ? 'network' : 'permanent';
        self._cleanup();
        self._close(reason);
    };
}
inherits(EventSourceReceiver, EventEmitter);
EventSourceReceiver.prototype.abort = function() {
    debug('abort');
    this._cleanup();
    this._close('user');
};
EventSourceReceiver.prototype._cleanup = function() {
    debug('cleanup');
    var es = this.es;
    if (es) {
        es.onmessage = es.onerror = null;
        es.close();
        this.es = null;
    }
};
EventSourceReceiver.prototype._close = function(reason) {
    debug('close', reason);
    var self = this;
    // Safari and chrome < 15 crash if we close window before
    // waiting for ES cleanup. See:
    // https://code.google.com/p/chromium/issues/detail?id=89155
    setTimeout(function() {
        self.emit('close', null, reason);
        self.removeAllListeners();
    }, 200);
};
module.exports = EventSourceReceiver;

},{"6cfe6f940db7cc81":"9UN53","b158af01f96c6486":"67h6H","9348c93b923af755":"hHvXO","63fa3da7f387b26b":"aEBf2"}],"hHvXO":[function(require,module,exports,__globalThis) {
var global = arguments[3];
module.exports = global.EventSource;

},{}],"iNgqC":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var inherits = require("4ecdd0513759fd63"), IframeTransport = require("b6d533b493e5b314"), objectUtils = require("b9a196f98ddfe9c6");
module.exports = function(transport) {
    function IframeWrapTransport(transUrl, baseUrl) {
        IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
    }
    inherits(IframeWrapTransport, IframeTransport);
    IframeWrapTransport.enabled = function(url, info) {
        if (!global.document) return false;
        var iframeInfo = objectUtils.extend({}, info);
        iframeInfo.sameOrigin = true;
        return transport.enabled(iframeInfo) && IframeTransport.enabled();
    };
    IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
    IframeWrapTransport.needBody = true;
    IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)
    IframeWrapTransport.facadeTransport = transport;
    return IframeWrapTransport;
};

},{"4ecdd0513759fd63":"9UN53","b6d533b493e5b314":"dvlhg","b9a196f98ddfe9c6":"BXHgS"}],"dvlhg":[function(require,module,exports,__globalThis) {
'use strict';
// Few cool transports do work only for same-origin. In order to make
// them work cross-domain we shall use iframe, served from the
// remote domain. New browsers have capabilities to communicate with
// cross domain iframe using postMessage(). In IE it was implemented
// from IE 8+, but of course, IE got some details wrong:
//    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
//    http://stevesouders.com/misc/test-postmessage.php
var inherits = require("58b4e324177e7cba"), EventEmitter = require("e6d86856185d4a5c").EventEmitter, version = require("7751ae09553b088c"), urlUtils = require("3d917cf558fdaa60"), iframeUtils = require("11e231a9f162192b"), eventUtils = require("6b311cfb37aec118"), random = require("66695705e5dd26de");
var debug = function() {};
debug = require("903fc0def0b56bce")('sockjs-client:transport:iframe');
function IframeTransport(transport, transUrl, baseUrl) {
    if (!IframeTransport.enabled()) throw new Error('Transport created when disabled');
    EventEmitter.call(this);
    var self = this;
    this.origin = urlUtils.getOrigin(baseUrl);
    this.baseUrl = baseUrl;
    this.transUrl = transUrl;
    this.transport = transport;
    this.windowId = random.string(8);
    var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
    debug(transport, transUrl, iframeUrl);
    this.iframeObj = iframeUtils.createIframe(iframeUrl, function(r) {
        debug('err callback');
        self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
        self.close();
    });
    this.onmessageCallback = this._message.bind(this);
    eventUtils.attachEvent('message', this.onmessageCallback);
}
inherits(IframeTransport, EventEmitter);
IframeTransport.prototype.close = function() {
    debug('close');
    this.removeAllListeners();
    if (this.iframeObj) {
        eventUtils.detachEvent('message', this.onmessageCallback);
        try {
            // When the iframe is not loaded, IE raises an exception
            // on 'contentWindow'.
            this.postMessage('c');
        } catch (x) {
        // intentionally empty
        }
        this.iframeObj.cleanup();
        this.iframeObj = null;
        this.onmessageCallback = this.iframeObj = null;
    }
};
IframeTransport.prototype._message = function(e) {
    debug('message', e.data);
    if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
        debug('not same origin', e.origin, this.origin);
        return;
    }
    var iframeMessage;
    try {
        iframeMessage = JSON.parse(e.data);
    } catch (ignored) {
        debug('bad json', e.data);
        return;
    }
    if (iframeMessage.windowId !== this.windowId) {
        debug('mismatched window id', iframeMessage.windowId, this.windowId);
        return;
    }
    switch(iframeMessage.type){
        case 's':
            this.iframeObj.loaded();
            // window global dependency
            this.postMessage('s', JSON.stringify([
                version,
                this.transport,
                this.transUrl,
                this.baseUrl
            ]));
            break;
        case 't':
            this.emit('message', iframeMessage.data);
            break;
        case 'c':
            var cdata;
            try {
                cdata = JSON.parse(iframeMessage.data);
            } catch (ignored) {
                debug('bad json', iframeMessage.data);
                return;
            }
            this.emit('close', cdata[0], cdata[1]);
            this.close();
            break;
    }
};
IframeTransport.prototype.postMessage = function(type, data) {
    debug('postMessage', type, data);
    this.iframeObj.post(JSON.stringify({
        windowId: this.windowId,
        type: type,
        data: data || ''
    }), this.origin);
};
IframeTransport.prototype.send = function(message) {
    debug('send', message);
    this.postMessage('m', message);
};
IframeTransport.enabled = function() {
    return iframeUtils.iframeEnabled;
};
IframeTransport.transportName = 'iframe';
IframeTransport.roundTrips = 2;
module.exports = IframeTransport;

},{"58b4e324177e7cba":"9UN53","e6d86856185d4a5c":"67h6H","7751ae09553b088c":"1wzqt","3d917cf558fdaa60":"dkQWo","11e231a9f162192b":"gwTJZ","6b311cfb37aec118":"iTswP","66695705e5dd26de":"jCffp","903fc0def0b56bce":"aEBf2"}],"1wzqt":[function(require,module,exports,__globalThis) {
module.exports = '1.6.1';

},{}],"gwTJZ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var eventUtils = require("8249f0183c07e8f9"), browser = require("7e00e6f0ecfb5c3b");
var debug = function() {};
debug = require("886f476d78b88e50")('sockjs-client:utils:iframe');
module.exports = {
    WPrefix: '_jp',
    currentWindowId: null,
    polluteGlobalNamespace: function() {
        if (!(module.exports.WPrefix in global)) global[module.exports.WPrefix] = {};
    },
    postMessage: function(type, data) {
        if (global.parent !== global) global.parent.postMessage(JSON.stringify({
            windowId: module.exports.currentWindowId,
            type: type,
            data: data || ''
        }), '*');
        else debug('Cannot postMessage, no parent window.', type, data);
    },
    createIframe: function(iframeUrl, errorCallback) {
        var iframe = global.document.createElement('iframe');
        var tref, unloadRef;
        var unattach = function() {
            debug('unattach');
            clearTimeout(tref);
            // Explorer had problems with that.
            try {
                iframe.onload = null;
            } catch (x) {
            // intentionally empty
            }
            iframe.onerror = null;
        };
        var cleanup = function() {
            debug('cleanup');
            if (iframe) {
                unattach();
                // This timeout makes chrome fire onbeforeunload event
                // within iframe. Without the timeout it goes straight to
                // onunload.
                setTimeout(function() {
                    if (iframe) iframe.parentNode.removeChild(iframe);
                    iframe = null;
                }, 0);
                eventUtils.unloadDel(unloadRef);
            }
        };
        var onerror = function(err) {
            debug('onerror', err);
            if (iframe) {
                cleanup();
                errorCallback(err);
            }
        };
        var post = function(msg, origin) {
            debug('post', msg, origin);
            setTimeout(function() {
                try {
                    // When the iframe is not loaded, IE raises an exception
                    // on 'contentWindow'.
                    if (iframe && iframe.contentWindow) iframe.contentWindow.postMessage(msg, origin);
                } catch (x) {
                // intentionally empty
                }
            }, 0);
        };
        iframe.src = iframeUrl;
        iframe.style.display = 'none';
        iframe.style.position = 'absolute';
        iframe.onerror = function() {
            onerror('onerror');
        };
        iframe.onload = function() {
            debug('onload');
            // `onload` is triggered before scripts on the iframe are
            // executed. Give it few seconds to actually load stuff.
            clearTimeout(tref);
            tref = setTimeout(function() {
                onerror('onload timeout');
            }, 2000);
        };
        global.document.body.appendChild(iframe);
        tref = setTimeout(function() {
            onerror('timeout');
        }, 15000);
        unloadRef = eventUtils.unloadAdd(cleanup);
        return {
            post: post,
            cleanup: cleanup,
            loaded: unattach
        };
    },
    createHtmlfile: function(iframeUrl, errorCallback) {
        var axo = [
            'Active'
        ].concat('Object').join('X');
        var doc = new global[axo]('htmlfile');
        var tref, unloadRef;
        var iframe;
        var unattach = function() {
            clearTimeout(tref);
            iframe.onerror = null;
        };
        var cleanup = function() {
            if (doc) {
                unattach();
                eventUtils.unloadDel(unloadRef);
                iframe.parentNode.removeChild(iframe);
                iframe = doc = null;
                CollectGarbage();
            }
        };
        var onerror = function(r) {
            debug('onerror', r);
            if (doc) {
                cleanup();
                errorCallback(r);
            }
        };
        var post = function(msg, origin) {
            try {
                // When the iframe is not loaded, IE raises an exception
                // on 'contentWindow'.
                setTimeout(function() {
                    if (iframe && iframe.contentWindow) iframe.contentWindow.postMessage(msg, origin);
                }, 0);
            } catch (x) {
            // intentionally empty
            }
        };
        doc.open();
        doc.write('<html><script>document.domain="' + global.document.domain + '";' + '</s' + 'cript></html>');
        doc.close();
        doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
        var c = doc.createElement('div');
        doc.body.appendChild(c);
        iframe = doc.createElement('iframe');
        c.appendChild(iframe);
        iframe.src = iframeUrl;
        iframe.onerror = function() {
            onerror('onerror');
        };
        tref = setTimeout(function() {
            onerror('timeout');
        }, 15000);
        unloadRef = eventUtils.unloadAdd(cleanup);
        return {
            post: post,
            cleanup: cleanup,
            loaded: unattach
        };
    }
};
module.exports.iframeEnabled = false;
if (global.document) // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
// huge delay, or not at all.
module.exports.iframeEnabled = (typeof global.postMessage === 'function' || typeof global.postMessage === 'object') && !browser.isKonqueror();

},{"8249f0183c07e8f9":"iTswP","7e00e6f0ecfb5c3b":"f6eB0","886f476d78b88e50":"aEBf2"}],"BXHgS":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = {
    isObject: function(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    },
    extend: function(obj) {
        if (!this.isObject(obj)) return obj;
        var source, prop;
        for(var i = 1, length = arguments.length; i < length; i++){
            source = arguments[i];
            for(prop in source)if (Object.prototype.hasOwnProperty.call(source, prop)) obj[prop] = source[prop];
        }
        return obj;
    }
};

},{}],"4QXwI":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("d912968f9f9cbeb0"), HtmlfileReceiver = require("c72b246a1e3ea1ae"), XHRLocalObject = require("5e747e4b3abbaf8b"), AjaxBasedTransport = require("ff282aa2b9d45f8c");
function HtmlFileTransport(transUrl) {
    if (!HtmlfileReceiver.enabled) throw new Error('Transport created when disabled');
    AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
}
inherits(HtmlFileTransport, AjaxBasedTransport);
HtmlFileTransport.enabled = function(info) {
    return HtmlfileReceiver.enabled && info.sameOrigin;
};
HtmlFileTransport.transportName = 'htmlfile';
HtmlFileTransport.roundTrips = 2;
module.exports = HtmlFileTransport;

},{"d912968f9f9cbeb0":"9UN53","c72b246a1e3ea1ae":"9so5r","5e747e4b3abbaf8b":"1atz6","ff282aa2b9d45f8c":"6Ez0Q"}],"9so5r":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var inherits = require("c8b8f823837f8653"), iframeUtils = require("dfe699dffd1aac0d"), urlUtils = require("9166333d7460991e"), EventEmitter = require("1c7fcb7e370d913f").EventEmitter, random = require("18c4a50640d4161");
var debug = function() {};
debug = require("af88d4a17b3f3bd3")('sockjs-client:receiver:htmlfile');
function HtmlfileReceiver(url) {
    debug(url);
    EventEmitter.call(this);
    var self = this;
    iframeUtils.polluteGlobalNamespace();
    this.id = 'a' + random.string(6);
    url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));
    debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
    var constructFunc = HtmlfileReceiver.htmlfileEnabled ? iframeUtils.createHtmlfile : iframeUtils.createIframe;
    global[iframeUtils.WPrefix][this.id] = {
        start: function() {
            debug('start');
            self.iframeObj.loaded();
        },
        message: function(data) {
            debug('message', data);
            self.emit('message', data);
        },
        stop: function() {
            debug('stop');
            self._cleanup();
            self._close('network');
        }
    };
    this.iframeObj = constructFunc(url, function() {
        debug('callback');
        self._cleanup();
        self._close('permanent');
    });
}
inherits(HtmlfileReceiver, EventEmitter);
HtmlfileReceiver.prototype.abort = function() {
    debug('abort');
    this._cleanup();
    this._close('user');
};
HtmlfileReceiver.prototype._cleanup = function() {
    debug('_cleanup');
    if (this.iframeObj) {
        this.iframeObj.cleanup();
        this.iframeObj = null;
    }
    delete global[iframeUtils.WPrefix][this.id];
};
HtmlfileReceiver.prototype._close = function(reason) {
    debug('_close', reason);
    this.emit('close', null, reason);
    this.removeAllListeners();
};
HtmlfileReceiver.htmlfileEnabled = false;
// obfuscate to avoid firewalls
var axo = [
    'Active'
].concat('Object').join('X');
if (axo in global) try {
    HtmlfileReceiver.htmlfileEnabled = (new global[axo]('htmlfile'), true);
} catch (x) {
// intentionally empty
}
HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;
module.exports = HtmlfileReceiver;

},{"c8b8f823837f8653":"9UN53","dfe699dffd1aac0d":"gwTJZ","9166333d7460991e":"dkQWo","1c7fcb7e370d913f":"67h6H","18c4a50640d4161":"jCffp","af88d4a17b3f3bd3":"aEBf2"}],"lBZQU":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("96d315cc5f0b5b51"), AjaxBasedTransport = require("e526a2e6e634d238"), XhrReceiver = require("dbec52ccedbf0e7f"), XHRCorsObject = require("fb0a9531528adea"), XHRLocalObject = require("6a9925a8b0dccccb");
function XhrPollingTransport(transUrl) {
    if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) throw new Error('Transport created when disabled');
    AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
}
inherits(XhrPollingTransport, AjaxBasedTransport);
XhrPollingTransport.enabled = function(info) {
    if (info.nullOrigin) return false;
    if (XHRLocalObject.enabled && info.sameOrigin) return true;
    return XHRCorsObject.enabled;
};
XhrPollingTransport.transportName = 'xhr-polling';
XhrPollingTransport.roundTrips = 2; // preflight, ajax
module.exports = XhrPollingTransport;

},{"96d315cc5f0b5b51":"9UN53","e526a2e6e634d238":"6Ez0Q","dbec52ccedbf0e7f":"6kr1x","fb0a9531528adea":"a27Ev","6a9925a8b0dccccb":"1atz6"}],"4nw6W":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("63db0f0a8bdb2014"), AjaxBasedTransport = require("f6e710b0a2ebaf22"), XdrStreamingTransport = require("d7860d1d3d29cf79"), XhrReceiver = require("c89bb98aeda713ad"), XDRObject = require("61752f50ee9022ac");
function XdrPollingTransport(transUrl) {
    if (!XDRObject.enabled) throw new Error('Transport created when disabled');
    AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
}
inherits(XdrPollingTransport, AjaxBasedTransport);
XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
XdrPollingTransport.transportName = 'xdr-polling';
XdrPollingTransport.roundTrips = 2; // preflight, ajax
module.exports = XdrPollingTransport;

},{"63db0f0a8bdb2014":"9UN53","f6e710b0a2ebaf22":"6Ez0Q","d7860d1d3d29cf79":"ikYCk","c89bb98aeda713ad":"6kr1x","61752f50ee9022ac":"b2qJB"}],"6lN5Y":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
// The simplest and most robust transport, using the well-know cross
// domain hack - JSONP. This transport is quite inefficient - one
// message could use up to one http request. But at least it works almost
// everywhere.
// Known limitations:
//   o you will get a spinning cursor
//   o for Konqueror a dumb timer is needed to detect errors
var inherits = require("b4ed7f9a9c4e1c96"), SenderReceiver = require("eceae7520aae729a"), JsonpReceiver = require("28bb17bace50383e"), jsonpSender = require("696c6de488beb6ba");
function JsonPTransport(transUrl) {
    if (!JsonPTransport.enabled()) throw new Error('Transport created when disabled');
    SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
}
inherits(JsonPTransport, SenderReceiver);
JsonPTransport.enabled = function() {
    return !!global.document;
};
JsonPTransport.transportName = 'jsonp-polling';
JsonPTransport.roundTrips = 1;
JsonPTransport.needBody = true;
module.exports = JsonPTransport;

},{"b4ed7f9a9c4e1c96":"9UN53","eceae7520aae729a":"6K7xn","28bb17bace50383e":"fH7xH","696c6de488beb6ba":"pSj9J"}],"fH7xH":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var utils = require("25783a55e7c268da"), random = require("1f9d4b71f2cd5081"), browser = require("3ad10fc1110bc7d3"), urlUtils = require("d97db7903ddf0b2a"), inherits = require("adc68ef8421e86f1"), EventEmitter = require("7e707cfdfde7f5a7").EventEmitter;
var debug = function() {};
debug = require("fe369bf0251ce0a2")('sockjs-client:receiver:jsonp');
function JsonpReceiver(url) {
    debug(url);
    var self = this;
    EventEmitter.call(this);
    utils.polluteGlobalNamespace();
    this.id = 'a' + random.string(6);
    var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));
    global[utils.WPrefix][this.id] = this._callback.bind(this);
    this._createScript(urlWithId);
    // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.
    this.timeoutId = setTimeout(function() {
        debug('timeout');
        self._abort(new Error('JSONP script loaded abnormally (timeout)'));
    }, JsonpReceiver.timeout);
}
inherits(JsonpReceiver, EventEmitter);
JsonpReceiver.prototype.abort = function() {
    debug('abort');
    if (global[utils.WPrefix][this.id]) {
        var err = new Error('JSONP user aborted read');
        err.code = 1000;
        this._abort(err);
    }
};
JsonpReceiver.timeout = 35000;
JsonpReceiver.scriptErrorTimeout = 1000;
JsonpReceiver.prototype._callback = function(data) {
    debug('_callback', data);
    this._cleanup();
    if (this.aborting) return;
    if (data) {
        debug('message', data);
        this.emit('message', data);
    }
    this.emit('close', null, 'network');
    this.removeAllListeners();
};
JsonpReceiver.prototype._abort = function(err) {
    debug('_abort', err);
    this._cleanup();
    this.aborting = true;
    this.emit('close', err.code, err.message);
    this.removeAllListeners();
};
JsonpReceiver.prototype._cleanup = function() {
    debug('_cleanup');
    clearTimeout(this.timeoutId);
    if (this.script2) {
        this.script2.parentNode.removeChild(this.script2);
        this.script2 = null;
    }
    if (this.script) {
        var script = this.script;
        // Unfortunately, you can't really abort script loading of
        // the script.
        script.parentNode.removeChild(script);
        script.onreadystatechange = script.onerror = script.onload = script.onclick = null;
        this.script = null;
    }
    delete global[utils.WPrefix][this.id];
};
JsonpReceiver.prototype._scriptError = function() {
    debug('_scriptError');
    var self = this;
    if (this.errorTimer) return;
    this.errorTimer = setTimeout(function() {
        if (!self.loadedOkay) self._abort(new Error('JSONP script loaded abnormally (onerror)'));
    }, JsonpReceiver.scriptErrorTimeout);
};
JsonpReceiver.prototype._createScript = function(url) {
    debug('_createScript', url);
    var self = this;
    var script = this.script = global.document.createElement('script');
    var script2; // Opera synchronous load trick.
    script.id = 'a' + random.string(8);
    script.src = url;
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.onerror = this._scriptError.bind(this);
    script.onload = function() {
        debug('onload');
        self._abort(new Error('JSONP script loaded abnormally (onload)'));
    };
    // IE9 fires 'error' event after onreadystatechange or before, in random order.
    // Use loadedOkay to determine if actually errored
    script.onreadystatechange = function() {
        debug('onreadystatechange', script.readyState);
        if (/loaded|closed/.test(script.readyState)) {
            if (script && script.htmlFor && script.onclick) {
                self.loadedOkay = true;
                try {
                    // In IE, actually execute the script.
                    script.onclick();
                } catch (x) {
                // intentionally empty
                }
            }
            if (script) self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
        }
    };
    // IE: event/htmlFor/onclick trick.
    // One can't rely on proper order for onreadystatechange. In order to
    // make sure, set a 'htmlFor' and 'event' properties, so that
    // script code will be installed as 'onclick' handler for the
    // script object. Later, onreadystatechange, manually execute this
    // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
    // set. For reference see:
    //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
    // Also, read on that about script ordering:
    //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
    if (typeof script.async === 'undefined' && global.document.attachEvent) {
        // According to mozilla docs, in recent browsers script.async defaults
        // to 'true', so we may use it to detect a good browser:
        // https://developer.mozilla.org/en/HTML/Element/script
        if (!browser.isOpera()) {
            // Naively assume we're in IE
            try {
                script.htmlFor = script.id;
                script.event = 'onclick';
            } catch (x) {
            // intentionally empty
            }
            script.async = true;
        } else {
            // Opera, second sync script hack
            script2 = this.script2 = global.document.createElement('script');
            script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
            script.async = script2.async = false;
        }
    }
    if (typeof script.async !== 'undefined') script.async = true;
    var head = global.document.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);
    if (script2) head.insertBefore(script2, head.firstChild);
};
module.exports = JsonpReceiver;

},{"25783a55e7c268da":"gwTJZ","1f9d4b71f2cd5081":"jCffp","3ad10fc1110bc7d3":"f6eB0","d97db7903ddf0b2a":"dkQWo","adc68ef8421e86f1":"9UN53","7e707cfdfde7f5a7":"67h6H","fe369bf0251ce0a2":"aEBf2"}],"pSj9J":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var random = require("641a28791803c983"), urlUtils = require("827c4b15ad5f8761");
var debug = function() {};
debug = require("8b3bfaf23d944698")('sockjs-client:sender:jsonp');
var form, area;
function createIframe(id) {
    debug('createIframe', id);
    try {
        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
        return global.document.createElement('<iframe name="' + id + '">');
    } catch (x) {
        var iframe = global.document.createElement('iframe');
        iframe.name = id;
        return iframe;
    }
}
function createForm() {
    debug('createForm');
    form = global.document.createElement('form');
    form.style.display = 'none';
    form.style.position = 'absolute';
    form.method = 'POST';
    form.enctype = 'application/x-www-form-urlencoded';
    form.acceptCharset = 'UTF-8';
    area = global.document.createElement('textarea');
    area.name = 'd';
    form.appendChild(area);
    global.document.body.appendChild(form);
}
module.exports = function(url, payload, callback) {
    debug(url, payload);
    if (!form) createForm();
    var id = 'a' + random.string(8);
    form.target = id;
    form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);
    var iframe = createIframe(id);
    iframe.id = id;
    iframe.style.display = 'none';
    form.appendChild(iframe);
    try {
        area.value = payload;
    } catch (e) {
    // seriously broken browsers get here
    }
    form.submit();
    var completed = function(err) {
        debug('completed', id, err);
        if (!iframe.onerror) return;
        iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
        // Opera mini doesn't like if we GC iframe
        // immediately, thus this timeout.
        setTimeout(function() {
            debug('cleaning up', id);
            iframe.parentNode.removeChild(iframe);
            iframe = null;
        }, 500);
        area.value = '';
        // It is not possible to detect if the iframe succeeded or
        // failed to submit our form.
        callback(err);
    };
    iframe.onerror = function() {
        debug('onerror', id);
        completed();
    };
    iframe.onload = function() {
        debug('onload', id);
        completed();
    };
    iframe.onreadystatechange = function(e) {
        debug('onreadystatechange', id, iframe.readyState, e);
        if (iframe.readyState === 'complete') completed();
    };
    return function() {
        debug('aborted', id);
        completed(new Error('Aborted'));
    };
};

},{"641a28791803c983":"jCffp","827c4b15ad5f8761":"dkQWo","8b3bfaf23d944698":"aEBf2"}],"6tHHQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
require("e601d3836bce3b70");
var URL = require("e6a2d060e873c615"), inherits = require("69ea74861d73c4c2"), random = require("473d9cb0fe4fc5b7"), escape = require("baa26fea8026cee6"), urlUtils = require("317e4661a267a977"), eventUtils = require("fc701dd820deea95"), transport = require("19a28bc2d737df14"), objectUtils = require("cfc38742bb3f3520"), browser = require("7bd8d3120779fd30"), log = require("1597da3c278d799"), Event = require("4df35794146d1050"), EventTarget = require("a519ad7859af2ce8"), loc = require("264a5eff39c86586"), CloseEvent = require("cc8ba61de70e3407"), TransportMessageEvent = require("3e7d5ff5e60d8924"), InfoReceiver = require("18124e65e36f7741");
var debug = function() {};
debug = require("2845eef85e16e5d9")('sockjs-client:main');
var transports;
// follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface
function SockJS(url, protocols, options) {
    if (!(this instanceof SockJS)) return new SockJS(url, protocols, options);
    if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
    EventTarget.call(this);
    this.readyState = SockJS.CONNECTING;
    this.extensions = '';
    this.protocol = '';
    // non-standard extension
    options = options || {};
    if (options.protocols_whitelist) log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
    this._transportsWhitelist = options.transports;
    this._transportOptions = options.transportOptions || {};
    this._timeout = options.timeout || 0;
    var sessionId = options.sessionId || 8;
    if (typeof sessionId === 'function') this._generateSessionId = sessionId;
    else if (typeof sessionId === 'number') this._generateSessionId = function() {
        return random.string(sessionId);
    };
    else throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
    this._server = options.server || random.numberString(1000);
    // Step 1 of WS spec - parse and validate the url. Issue #8
    var parsedUrl = new URL(url);
    if (!parsedUrl.host || !parsedUrl.protocol) throw new SyntaxError("The URL '" + url + "' is invalid");
    else if (parsedUrl.hash) throw new SyntaxError('The URL must not contain a fragment');
    else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
    var secure = parsedUrl.protocol === 'https:';
    // Step 2 - don't allow secure origin with an insecure protocol
    if (loc.protocol === 'https:' && !secure) {
        // exception is 127.0.0.0/8 and ::1 urls
        if (!urlUtils.isLoopbackAddr(parsedUrl.hostname)) throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
    }
    // Step 3 - check port access - no need here
    // Step 4 - parse protocols argument
    if (!protocols) protocols = [];
    else if (!Array.isArray(protocols)) protocols = [
        protocols
    ];
    // Step 5 - check protocols argument
    var sortedProtocols = protocols.sort();
    sortedProtocols.forEach(function(proto, i) {
        if (!proto) throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
        if (i < sortedProtocols.length - 1 && proto === sortedProtocols[i + 1]) throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
    });
    // Step 6 - convert origin
    var o = urlUtils.getOrigin(loc.href);
    this._origin = o ? o.toLowerCase() : null;
    // remove the trailing slash
    parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));
    // store the sanitized url
    this.url = parsedUrl.href;
    debug('using url', this.url);
    // Step 7 - start connection in background
    // obtain server info
    // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26
    this._urlInfo = {
        nullOrigin: !browser.hasDomain(),
        sameOrigin: urlUtils.isOriginEqual(this.url, loc.href),
        sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
    };
    this._ir = new InfoReceiver(this.url, this._urlInfo);
    this._ir.once('finish', this._receiveInfo.bind(this));
}
inherits(SockJS, EventTarget);
function userSetCode(code) {
    return code === 1000 || code >= 3000 && code <= 4999;
}
SockJS.prototype.close = function(code, reason) {
    // Step 1
    if (code && !userSetCode(code)) throw new Error('InvalidAccessError: Invalid code');
    // Step 2.4 states the max is 123 bytes, but we are just checking length
    if (reason && reason.length > 123) throw new SyntaxError('reason argument has an invalid length');
    // Step 3.1
    if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) return;
    // TODO look at docs to determine how to set this
    var wasClean = true;
    this._close(code || 1000, reason || 'Normal closure', wasClean);
};
SockJS.prototype.send = function(data) {
    // #13 - convert anything non-string to string
    // TODO this currently turns objects into [object Object]
    if (typeof data !== 'string') data = '' + data;
    if (this.readyState === SockJS.CONNECTING) throw new Error('InvalidStateError: The connection has not been established yet');
    if (this.readyState !== SockJS.OPEN) return;
    this._transport.send(escape.quote(data));
};
SockJS.version = require("f4d8517c58f91726");
SockJS.CONNECTING = 0;
SockJS.OPEN = 1;
SockJS.CLOSING = 2;
SockJS.CLOSED = 3;
SockJS.prototype._receiveInfo = function(info, rtt) {
    debug('_receiveInfo', rtt);
    this._ir = null;
    if (!info) {
        this._close(1002, 'Cannot connect to server');
        return;
    }
    // establish a round-trip timeout (RTO) based on the
    // round-trip time (RTT)
    this._rto = this.countRTO(rtt);
    // allow server to override url used for the actual transport
    this._transUrl = info.base_url ? info.base_url : this.url;
    info = objectUtils.extend(info, this._urlInfo);
    debug('info', info);
    // determine list of desired and supported transports
    var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
    this._transports = enabledTransports.main;
    debug(this._transports.length + ' enabled transports');
    this._connect();
};
SockJS.prototype._connect = function() {
    for(var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()){
        debug('attempt', Transport.transportName);
        if (Transport.needBody) {
            if (!global.document.body || typeof global.document.readyState !== 'undefined' && global.document.readyState !== 'complete' && global.document.readyState !== 'interactive') {
                debug('waiting for body');
                this._transports.unshift(Transport);
                eventUtils.attachEvent('load', this._connect.bind(this));
                return;
            }
        }
        // calculate timeout based on RTO and round trips. Default to 5s
        var timeoutMs = Math.max(this._timeout, this._rto * Transport.roundTrips || 5000);
        this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
        debug('using timeout', timeoutMs);
        var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
        var options = this._transportOptions[Transport.transportName];
        debug('transport url', transportUrl);
        var transportObj = new Transport(transportUrl, this._transUrl, options);
        transportObj.on('message', this._transportMessage.bind(this));
        transportObj.once('close', this._transportClose.bind(this));
        transportObj.transportName = Transport.transportName;
        this._transport = transportObj;
        return;
    }
    this._close(2000, 'All transports failed', false);
};
SockJS.prototype._transportTimeout = function() {
    debug('_transportTimeout');
    if (this.readyState === SockJS.CONNECTING) {
        if (this._transport) this._transport.close();
        this._transportClose(2007, 'Transport timed out');
    }
};
SockJS.prototype._transportMessage = function(msg) {
    debug('_transportMessage', msg);
    var self = this, type = msg.slice(0, 1), content = msg.slice(1), payload;
    // first check for messages that don't need a payload
    switch(type){
        case 'o':
            this._open();
            return;
        case 'h':
            this.dispatchEvent(new Event('heartbeat'));
            debug('heartbeat', this.transport);
            return;
    }
    if (content) try {
        payload = JSON.parse(content);
    } catch (e) {
        debug('bad json', content);
    }
    if (typeof payload === 'undefined') {
        debug('empty payload', content);
        return;
    }
    switch(type){
        case 'a':
            if (Array.isArray(payload)) payload.forEach(function(p) {
                debug('message', self.transport, p);
                self.dispatchEvent(new TransportMessageEvent(p));
            });
            break;
        case 'm':
            debug('message', this.transport, payload);
            this.dispatchEvent(new TransportMessageEvent(payload));
            break;
        case 'c':
            if (Array.isArray(payload) && payload.length === 2) this._close(payload[0], payload[1], true);
            break;
    }
};
SockJS.prototype._transportClose = function(code, reason) {
    debug('_transportClose', this.transport, code, reason);
    if (this._transport) {
        this._transport.removeAllListeners();
        this._transport = null;
        this.transport = null;
    }
    if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
        this._connect();
        return;
    }
    this._close(code, reason);
};
SockJS.prototype._open = function() {
    debug('_open', this._transport && this._transport.transportName, this.readyState);
    if (this.readyState === SockJS.CONNECTING) {
        if (this._transportTimeoutId) {
            clearTimeout(this._transportTimeoutId);
            this._transportTimeoutId = null;
        }
        this.readyState = SockJS.OPEN;
        this.transport = this._transport.transportName;
        this.dispatchEvent(new Event('open'));
        debug('connected', this.transport);
    } else // The server might have been restarted, and lost track of our
    // connection.
    this._close(1006, 'Server lost session');
};
SockJS.prototype._close = function(code, reason, wasClean) {
    debug('_close', this.transport, code, reason, wasClean, this.readyState);
    var forceFail = false;
    if (this._ir) {
        forceFail = true;
        this._ir.close();
        this._ir = null;
    }
    if (this._transport) {
        this._transport.close();
        this._transport = null;
        this.transport = null;
    }
    if (this.readyState === SockJS.CLOSED) throw new Error('InvalidStateError: SockJS has already been closed');
    this.readyState = SockJS.CLOSING;
    setTimeout((function() {
        this.readyState = SockJS.CLOSED;
        if (forceFail) this.dispatchEvent(new Event('error'));
        var e = new CloseEvent('close');
        e.wasClean = wasClean || false;
        e.code = code || 1000;
        e.reason = reason;
        this.dispatchEvent(e);
        this.onmessage = this.onclose = this.onerror = null;
        debug('disconnected');
    }).bind(this), 0);
};
// See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
// and RFC 2988.
SockJS.prototype.countRTO = function(rtt) {
    // In a local environment, when using IE8/9 and the `jsonp-polling`
    // transport the time needed to establish a connection (the time that pass
    // from the opening of the transport to the call of `_dispatchOpen`) is
    // around 200msec (the lower bound used in the article above) and this
    // causes spurious timeouts. For this reason we calculate a value slightly
    // larger than that used in the article.
    if (rtt > 100) return 4 * rtt; // rto > 400msec
    return 300 + rtt; // 300msec < rto <= 400msec
};
module.exports = function(availableTransports) {
    transports = transport(availableTransports);
    require("9a19d31b4579a586")(SockJS, availableTransports);
    return SockJS;
};

},{"e601d3836bce3b70":"jVOna","e6a2d060e873c615":"5MXqT","69ea74861d73c4c2":"9UN53","473d9cb0fe4fc5b7":"jCffp","baa26fea8026cee6":"37RQ3","317e4661a267a977":"dkQWo","fc701dd820deea95":"iTswP","19a28bc2d737df14":"gs4Wz","cfc38742bb3f3520":"BXHgS","7bd8d3120779fd30":"f6eB0","1597da3c278d799":"8X7hZ","4df35794146d1050":"4rum7","a519ad7859af2ce8":"7HmJu","264a5eff39c86586":"gVVJ8","cc8ba61de70e3407":"5zYEL","3e7d5ff5e60d8924":"irELb","18124e65e36f7741":"dChQ6","2845eef85e16e5d9":"aEBf2","f4d8517c58f91726":"1wzqt","9a19d31b4579a586":"d3ffZ"}],"jVOna":[function(require,module,exports,__globalThis) {
/* eslint-disable */ /* jscs: disable */ 'use strict';
// pulled specific shims from https://github.com/es-shims/es5-shim
var ArrayPrototype = Array.prototype;
var ObjectPrototype = Object.prototype;
var FunctionPrototype = Function.prototype;
var StringPrototype = String.prototype;
var array_slice = ArrayPrototype.slice;
var _toString = ObjectPrototype.toString;
var isFunction = function(val) {
    return ObjectPrototype.toString.call(val) === '[object Function]';
};
var isArray = function isArray(obj) {
    return _toString.call(obj) === '[object Array]';
};
var isString = function isString(obj) {
    return _toString.call(obj) === '[object String]';
};
var supportsDescriptors = Object.defineProperty && function() {
    try {
        Object.defineProperty({}, 'x', {});
        return true;
    } catch (e) {
        return false;
    }
}();
// Define configurable, writable and non-enumerable props
// if they don't exist.
var defineProperty;
if (supportsDescriptors) defineProperty = function(object, name, method, forceAssign) {
    if (!forceAssign && name in object) return;
    Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: method
    });
};
else defineProperty = function(object, name, method, forceAssign) {
    if (!forceAssign && name in object) return;
    object[name] = method;
};
var defineProperties = function(object, map, forceAssign) {
    for(var name in map)if (ObjectPrototype.hasOwnProperty.call(map, name)) defineProperty(object, name, map[name], forceAssign);
};
var toObject = function(o) {
    if (o == null) throw new TypeError("can't convert " + o + ' to object');
    return Object(o);
};
//
// Util
// ======
//
// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer
function toInteger(num) {
    var n = +num;
    if (n !== n) n = 0;
    else if (n !== 0 && n !== 1 / 0 && n !== -1 / 0) n = (n > 0 || -1) * Math.floor(Math.abs(n));
    return n;
}
function ToUint32(x) {
    return x >>> 0;
}
//
// Function
// ========
//
// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5
function Empty() {}
defineProperties(FunctionPrototype, {
    bind: function bind(that) {
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isFunction(target)) throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var binder = function() {
            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.
                var result = target.apply(this, args.concat(array_slice.call(arguments)));
                if (Object(result) === result) return result;
                return this;
            } else // 15.3.4.5.1 [[Call]]
            // When the [[Call]] internal method of a function object, F,
            // which was created using the bind function is called with a
            // this value and a list of arguments ExtraArgs, the following
            // steps are taken:
            // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
            //   property.
            // 2. Let boundThis be the value of F's [[BoundThis]] internal
            //   property.
            // 3. Let target be the value of F's [[TargetFunction]] internal
            //   property.
            // 4. Let args be a new list containing the same values as the
            //   list boundArgs in the same order followed by the same
            //   values as the list ExtraArgs in the same order.
            // 5. Return the result of calling the [[Call]] internal method
            //   of target providing boundThis as the this value and
            //   providing args as the arguments.
            // equiv: target.call(this, ...boundArgs, ...args)
            return target.apply(that, args.concat(array_slice.call(arguments)));
        };
        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.
        var boundLength = Math.max(0, target.length - args.length);
        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for(var i = 0; i < boundLength; i++)boundArgs.push('$' + i);
        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);
        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }
        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.
        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.
        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.
        // 22. Return F.
        return bound;
    }
});
//
// Array
// =====
//
// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties(Array, {
    isArray: isArray
});
var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);
var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
        method.call('foo', function(_, __, context) {
            if (typeof context !== 'object') properlyBoxesNonStrict = false;
        });
        method.call([
            1
        ], function() {
            'use strict';
            properlyBoxesStrict = typeof this === 'string';
        }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};
defineProperties(ArrayPrototype, {
    forEach: function forEach(fun /*, thisp*/ ) {
        var object = toObject(this), self = splitString && isString(this) ? this.split('') : object, thisp = arguments[1], i = -1, length = self.length >>> 0;
        // If no callback function or if callback is not a callable function
        if (!isFunction(fun)) throw new TypeError(); // TODO message
        while(++i < length)if (i in self) // Invoke the callback function with call, passing arguments:
        // context, property value, property key, thisArg object
        // context
        fun.call(thisp, self[i], i, object);
    }
}, !properlyBoxesContext(ArrayPrototype.forEach));
// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = Array.prototype.indexOf && [
    0,
    1
].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
    indexOf: function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && isString(this) ? this.split('') : toObject(this), length = self.length >>> 0;
        if (!length) return -1;
        var i = 0;
        if (arguments.length > 1) i = toInteger(arguments[1]);
        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for(; i < length; i++){
            if (i in self && self[i] === sought) return i;
        }
        return -1;
    }
}, hasFirefox2IndexOfBug);
//
// String
// ======
//
// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14
// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]
var string_split = StringPrototype.split;
if ('ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 || 'tesst'.split(/(s)*/)[1] === 't' || 'test'.split(/(?:)/, -1).length !== 4 || ''.split(/.?/).length || '.'.split(/()()/).length > 1) (function() {
    var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group
    StringPrototype.split = function(separator, limit) {
        var string = this;
        if (separator === void 0 && limit === 0) return [];
        // If `separator` is not a regex, use native split
        if (_toString.call(separator) !== '[object RegExp]') return string_split.call(this, separator, limit);
        var output = [], flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.extended ? 'x' : '') + // Proposed for ES6
        (separator.sticky ? 'y' : ''), lastLastIndex = 0, // Make `global` and avoid `lastIndex` issues by working with a copy
        separator2, match, lastIndex, lastLength;
        separator = new RegExp(separator.source, flags + 'g');
        string += ''; // Type-convert
        if (!compliantExecNpcg) // Doesn't need flags gy, but they don't hurt
        separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
        /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */ limit = limit === void 0 ? 4294967295 : ToUint32(limit);
        while(match = separator.exec(string)){
            // `separator.lastIndex` is not reliable cross-browser
            lastIndex = match.index + match[0].length;
            if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                // Fix browsers whose `exec` methods don't consistently return `undefined` for
                // nonparticipating capturing groups
                if (!compliantExecNpcg && match.length > 1) match[0].replace(separator2, function() {
                    for(var i = 1; i < arguments.length - 2; i++)if (arguments[i] === void 0) match[i] = void 0;
                });
                if (match.length > 1 && match.index < string.length) ArrayPrototype.push.apply(output, match.slice(1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= limit) break;
            }
            if (separator.lastIndex === match.index) separator.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
            if (lastLength || !separator.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > limit ? output.slice(0, limit) : output;
    };
})();
else if ('0'.split(void 0, 0).length) StringPrototype.split = function split(separator, limit) {
    if (separator === void 0 && limit === 0) return [];
    return string_split.call(this, separator, limit);
};
// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
    substr: function substr(start, length) {
        return string_substr.call(this, start < 0 ? (start = this.length + start) < 0 ? 0 : start : start, length);
    }
}, hasNegativeSubstrBug);

},{}],"37RQ3":[function(require,module,exports,__globalThis) {
'use strict';
// Some extra characters that Chrome gets wrong, and substitutes with
// something else on the wire.
// eslint-disable-next-line no-control-regex, no-misleading-character-class
var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g, extraLookup;
// This may be quite slow, so let's delay until user actually uses bad
// characters.
var unrollLookup = function(escapable) {
    var i;
    var unrolled = {};
    var c = [];
    for(i = 0; i < 65536; i++)c.push(String.fromCharCode(i));
    escapable.lastIndex = 0;
    c.join('').replace(escapable, function(a) {
        unrolled[a] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        return '';
    });
    escapable.lastIndex = 0;
    return unrolled;
};
// Quote string, also taking care of unicode characters that browsers
// often break. Especially, take care of unicode surrogates:
// http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
module.exports = {
    quote: function(string) {
        var quoted = JSON.stringify(string);
        // In most cases this should be very fast and good enough.
        extraEscapable.lastIndex = 0;
        if (!extraEscapable.test(quoted)) return quoted;
        if (!extraLookup) extraLookup = unrollLookup(extraEscapable);
        return quoted.replace(extraEscapable, function(a) {
            return extraLookup[a];
        });
    }
};

},{}],"gs4Wz":[function(require,module,exports,__globalThis) {
'use strict';
var debug = function() {};
debug = require("952ec3f3178a0a1f")('sockjs-client:utils:transport');
module.exports = function(availableTransports) {
    return {
        filterToEnabled: function(transportsWhitelist, info) {
            var transports = {
                main: [],
                facade: []
            };
            if (!transportsWhitelist) transportsWhitelist = [];
            else if (typeof transportsWhitelist === 'string') transportsWhitelist = [
                transportsWhitelist
            ];
            availableTransports.forEach(function(trans) {
                if (!trans) return;
                if (trans.transportName === 'websocket' && info.websocket === false) {
                    debug('disabled from server', 'websocket');
                    return;
                }
                if (transportsWhitelist.length && transportsWhitelist.indexOf(trans.transportName) === -1) {
                    debug('not in whitelist', trans.transportName);
                    return;
                }
                if (trans.enabled(info)) {
                    debug('enabled', trans.transportName);
                    transports.main.push(trans);
                    if (trans.facadeTransport) transports.facade.push(trans.facadeTransport);
                } else debug('disabled', trans.transportName);
            });
            return transports;
        }
    };
};

},{"952ec3f3178a0a1f":"aEBf2"}],"8X7hZ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var logObject = {};
[
    'log',
    'debug',
    'warn'
].forEach(function(level) {
    var levelExists;
    try {
        levelExists = global.console && global.console[level] && global.console[level].apply;
    } catch (e) {
    // do nothing
    }
    logObject[level] = levelExists ? function() {
        return global.console[level].apply(global.console, arguments);
    } : level === 'log' ? function() {} : logObject.log;
});
module.exports = logObject;

},{}],"4rum7":[function(require,module,exports,__globalThis) {
'use strict';
function Event(eventType) {
    this.type = eventType;
}
Event.prototype.initEvent = function(eventType, canBubble, cancelable) {
    this.type = eventType;
    this.bubbles = canBubble;
    this.cancelable = cancelable;
    this.timeStamp = +new Date();
    return this;
};
Event.prototype.stopPropagation = function() {};
Event.prototype.preventDefault = function() {};
Event.CAPTURING_PHASE = 1;
Event.AT_TARGET = 2;
Event.BUBBLING_PHASE = 3;
module.exports = Event;

},{}],"gVVJ8":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
module.exports = global.location || {
    origin: 'http://localhost:80',
    protocol: 'http:',
    host: 'localhost',
    port: 80,
    href: 'http://localhost/',
    hash: ''
};

},{}],"5zYEL":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("2aed3bd1a9c43bf9"), Event = require("8281769081fbb2cc");
function CloseEvent() {
    Event.call(this);
    this.initEvent('close', false, false);
    this.wasClean = false;
    this.code = 0;
    this.reason = '';
}
inherits(CloseEvent, Event);
module.exports = CloseEvent;

},{"2aed3bd1a9c43bf9":"9UN53","8281769081fbb2cc":"4rum7"}],"irELb":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("1f6123f95ef9836a"), Event = require("c4593156d99bf953");
function TransportMessageEvent(data) {
    Event.call(this);
    this.initEvent('message', false, false);
    this.data = data;
}
inherits(TransportMessageEvent, Event);
module.exports = TransportMessageEvent;

},{"1f6123f95ef9836a":"9UN53","c4593156d99bf953":"4rum7"}],"dChQ6":[function(require,module,exports,__globalThis) {
'use strict';
var EventEmitter = require("2eb94020cd5d15a2").EventEmitter, inherits = require("127eb81a49d3e1ff"), urlUtils = require("2af01859b2f8fad5"), XDR = require("6795726a0124ce9f"), XHRCors = require("e527b67ccfe7502a"), XHRLocal = require("d9d50e8c176bb27"), XHRFake = require("3fd7508a504c632d"), InfoIframe = require("148ede0608344498"), InfoAjax = require("e0e41f0c7be18f71");
var debug = function() {};
debug = require("cb35411b59c1c572")('sockjs-client:info-receiver');
function InfoReceiver(baseUrl, urlInfo) {
    debug(baseUrl);
    var self = this;
    EventEmitter.call(this);
    setTimeout(function() {
        self.doXhr(baseUrl, urlInfo);
    }, 0);
}
inherits(InfoReceiver, EventEmitter);
// TODO this is currently ignoring the list of available transports and the whitelist
InfoReceiver._getReceiver = function(baseUrl, url, urlInfo) {
    // determine method of CORS support (if needed)
    if (urlInfo.sameOrigin) return new InfoAjax(url, XHRLocal);
    if (XHRCors.enabled) return new InfoAjax(url, XHRCors);
    if (XDR.enabled && urlInfo.sameScheme) return new InfoAjax(url, XDR);
    if (InfoIframe.enabled()) return new InfoIframe(baseUrl, url);
    return new InfoAjax(url, XHRFake);
};
InfoReceiver.prototype.doXhr = function(baseUrl, urlInfo) {
    var self = this, url = urlUtils.addPath(baseUrl, '/info');
    debug('doXhr', url);
    this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);
    this.timeoutRef = setTimeout(function() {
        debug('timeout');
        self._cleanup(false);
        self.emit('finish');
    }, InfoReceiver.timeout);
    this.xo.once('finish', function(info, rtt) {
        debug('finish', info, rtt);
        self._cleanup(true);
        self.emit('finish', info, rtt);
    });
};
InfoReceiver.prototype._cleanup = function(wasClean) {
    debug('_cleanup');
    clearTimeout(this.timeoutRef);
    this.timeoutRef = null;
    if (!wasClean && this.xo) this.xo.close();
    this.xo = null;
};
InfoReceiver.prototype.close = function() {
    debug('close');
    this.removeAllListeners();
    this._cleanup(false);
};
InfoReceiver.timeout = 8000;
module.exports = InfoReceiver;

},{"2eb94020cd5d15a2":"67h6H","127eb81a49d3e1ff":"9UN53","2af01859b2f8fad5":"dkQWo","6795726a0124ce9f":"b2qJB","e527b67ccfe7502a":"a27Ev","d9d50e8c176bb27":"1atz6","3fd7508a504c632d":"cD56k","148ede0608344498":"2sNoz","e0e41f0c7be18f71":"5HyPl","cb35411b59c1c572":"aEBf2"}],"cD56k":[function(require,module,exports,__globalThis) {
'use strict';
var EventEmitter = require("a1a351d824c7764e").EventEmitter, inherits = require("b57fb4ec3437fd21");
function XHRFake() {
    var self = this;
    EventEmitter.call(this);
    this.to = setTimeout(function() {
        self.emit('finish', 200, '{}');
    }, XHRFake.timeout);
}
inherits(XHRFake, EventEmitter);
XHRFake.prototype.close = function() {
    clearTimeout(this.to);
};
XHRFake.timeout = 2000;
module.exports = XHRFake;

},{"a1a351d824c7764e":"67h6H","b57fb4ec3437fd21":"9UN53"}],"2sNoz":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var EventEmitter = require("781ea8cc5b00117e").EventEmitter, inherits = require("65c2d2ae36d11f0e"), utils = require("bee822e8cf2648cb"), IframeTransport = require("45d66a7d5ad7cafc"), InfoReceiverIframe = require("30ae90292a1b47c6");
var debug = function() {};
debug = require("6d3388e47a4197d1")('sockjs-client:info-iframe');
function InfoIframe(baseUrl, url) {
    var self = this;
    EventEmitter.call(this);
    var go = function() {
        var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);
        ifr.once('message', function(msg) {
            if (msg) {
                var d;
                try {
                    d = JSON.parse(msg);
                } catch (e) {
                    debug('bad json', msg);
                    self.emit('finish');
                    self.close();
                    return;
                }
                var info = d[0], rtt = d[1];
                self.emit('finish', info, rtt);
            }
            self.close();
        });
        ifr.once('close', function() {
            self.emit('finish');
            self.close();
        });
    };
    // TODO this seems the same as the 'needBody' from transports
    if (!global.document.body) utils.attachEvent('load', go);
    else go();
}
inherits(InfoIframe, EventEmitter);
InfoIframe.enabled = function() {
    return IframeTransport.enabled();
};
InfoIframe.prototype.close = function() {
    if (this.ifr) this.ifr.close();
    this.removeAllListeners();
    this.ifr = null;
};
module.exports = InfoIframe;

},{"781ea8cc5b00117e":"67h6H","65c2d2ae36d11f0e":"9UN53","bee822e8cf2648cb":"iTswP","45d66a7d5ad7cafc":"dvlhg","30ae90292a1b47c6":"kpn8X","6d3388e47a4197d1":"aEBf2"}],"kpn8X":[function(require,module,exports,__globalThis) {
'use strict';
var inherits = require("c402efdfc50f6230"), EventEmitter = require("7262b0ba0fe6651a").EventEmitter, XHRLocalObject = require("d490c9eea6907723"), InfoAjax = require("9f54ffe3e11c1264");
function InfoReceiverIframe(transUrl) {
    var self = this;
    EventEmitter.call(this);
    this.ir = new InfoAjax(transUrl, XHRLocalObject);
    this.ir.once('finish', function(info, rtt) {
        self.ir = null;
        self.emit('message', JSON.stringify([
            info,
            rtt
        ]));
    });
}
inherits(InfoReceiverIframe, EventEmitter);
InfoReceiverIframe.transportName = 'iframe-info-receiver';
InfoReceiverIframe.prototype.close = function() {
    if (this.ir) {
        this.ir.close();
        this.ir = null;
    }
    this.removeAllListeners();
};
module.exports = InfoReceiverIframe;

},{"c402efdfc50f6230":"9UN53","7262b0ba0fe6651a":"67h6H","d490c9eea6907723":"1atz6","9f54ffe3e11c1264":"5HyPl"}],"5HyPl":[function(require,module,exports,__globalThis) {
'use strict';
var EventEmitter = require("e44e323923270f16").EventEmitter, inherits = require("594f6a3d34863375"), objectUtils = require("26eb7e46f5b76b51");
var debug = function() {};
debug = require("2a10087cf1e21f15")('sockjs-client:info-ajax');
function InfoAjax(url, AjaxObject) {
    EventEmitter.call(this);
    var self = this;
    var t0 = +new Date();
    this.xo = new AjaxObject('GET', url);
    this.xo.once('finish', function(status, text) {
        var info, rtt;
        if (status === 200) {
            rtt = +new Date() - t0;
            if (text) try {
                info = JSON.parse(text);
            } catch (e) {
                debug('bad json', text);
            }
            if (!objectUtils.isObject(info)) info = {};
        }
        self.emit('finish', info, rtt);
        self.removeAllListeners();
    });
}
inherits(InfoAjax, EventEmitter);
InfoAjax.prototype.close = function() {
    this.removeAllListeners();
    this.xo.close();
};
module.exports = InfoAjax;

},{"e44e323923270f16":"67h6H","594f6a3d34863375":"9UN53","26eb7e46f5b76b51":"BXHgS","2a10087cf1e21f15":"aEBf2"}],"d3ffZ":[function(require,module,exports,__globalThis) {
'use strict';
var urlUtils = require("2cbc386ded137af3"), eventUtils = require("c693be4905356f9"), FacadeJS = require("654366614d8e170d"), InfoIframeReceiver = require("a163bda432749e13"), iframeUtils = require("40b32b9fe061507a"), loc = require("8dfdf68c53320445");
var debug = function() {};
debug = require("5523115ceeaa9709")('sockjs-client:iframe-bootstrap');
module.exports = function(SockJS, availableTransports) {
    var transportMap = {};
    availableTransports.forEach(function(at) {
        if (at.facadeTransport) transportMap[at.facadeTransport.transportName] = at.facadeTransport;
    });
    // hard-coded for the info iframe
    // TODO see if we can make this more dynamic
    transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
    var parentOrigin;
    /* eslint-disable camelcase */ SockJS.bootstrap_iframe = function() {
        /* eslint-enable camelcase */ var facade;
        iframeUtils.currentWindowId = loc.hash.slice(1);
        var onMessage = function(e) {
            if (e.source !== parent) return;
            if (typeof parentOrigin === 'undefined') parentOrigin = e.origin;
            if (e.origin !== parentOrigin) return;
            var iframeMessage;
            try {
                iframeMessage = JSON.parse(e.data);
            } catch (ignored) {
                debug('bad json', e.data);
                return;
            }
            if (iframeMessage.windowId !== iframeUtils.currentWindowId) return;
            switch(iframeMessage.type){
                case 's':
                    var p;
                    try {
                        p = JSON.parse(iframeMessage.data);
                    } catch (ignored) {
                        debug('bad json', iframeMessage.data);
                        break;
                    }
                    var version = p[0];
                    var transport = p[1];
                    var transUrl = p[2];
                    var baseUrl = p[3];
                    debug(version, transport, transUrl, baseUrl);
                    // change this to semver logic
                    if (version !== SockJS.version) throw new Error('Incompatible SockJS! Main site uses: "' + version + '", the iframe:' + ' "' + SockJS.version + '".');
                    if (!urlUtils.isOriginEqual(transUrl, loc.href) || !urlUtils.isOriginEqual(baseUrl, loc.href)) throw new Error("Can't connect to different domain from within an iframe. (" + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
                    facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
                    break;
                case 'm':
                    facade._send(iframeMessage.data);
                    break;
                case 'c':
                    if (facade) facade._close();
                    facade = null;
                    break;
            }
        };
        eventUtils.attachEvent('message', onMessage);
        // Start
        iframeUtils.postMessage('s');
    };
};

},{"2cbc386ded137af3":"dkQWo","c693be4905356f9":"iTswP","654366614d8e170d":"eiyU0","a163bda432749e13":"kpn8X","40b32b9fe061507a":"gwTJZ","8dfdf68c53320445":"gVVJ8","5523115ceeaa9709":"aEBf2"}],"eiyU0":[function(require,module,exports,__globalThis) {
'use strict';
var iframeUtils = require("35b2a55cc9df7b63");
function FacadeJS(transport) {
    this._transport = transport;
    transport.on('message', this._transportMessage.bind(this));
    transport.on('close', this._transportClose.bind(this));
}
FacadeJS.prototype._transportClose = function(code, reason) {
    iframeUtils.postMessage('c', JSON.stringify([
        code,
        reason
    ]));
};
FacadeJS.prototype._transportMessage = function(frame) {
    iframeUtils.postMessage('t', frame);
};
FacadeJS.prototype._send = function(data) {
    this._transport.send(data);
};
FacadeJS.prototype._close = function() {
    this._transport.close();
    this._transport.removeAllListeners();
};
module.exports = FacadeJS;

},{"35b2a55cc9df7b63":"gwTJZ"}],"aU6gZ":[function(require,module,exports,__globalThis) {
(function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    'use strict';
    /**
     * @internal
     */ function augmentWebsocket(webSocket, debug) {
        webSocket.terminate = function() {
            const noOp = ()=>{};
            // set all callbacks to no op
            this.onerror = noOp;
            this.onmessage = noOp;
            this.onopen = noOp;
            const ts = new Date();
            const id = Math.random().toString().substring(2, 8); // A simulated id
            const origOnClose = this.onclose;
            // Track delay in actual closure of the socket
            this.onclose = (closeEvent)=>{
                const delay = new Date().getTime() - ts.getTime();
                debug(`Discarded socket (#${id})  closed after ${delay}ms, with code/reason: ${closeEvent.code}/${closeEvent.reason}`);
            };
            this.close();
            origOnClose?.call(webSocket, {
                code: 4001,
                reason: `Quick discarding socket (#${id}) without waiting for the shutdown sequence.`,
                wasClean: false
            });
        };
    }
    /**
     * Some byte values, used as per STOMP specifications.
     *
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */ const BYTE = {
        // LINEFEED byte (octet 10)
        LF: '\x0A',
        // NULL byte (octet 0)
        NULL: '\x00'
    };
    /**
     * Frame class represents a STOMP frame.
     *
     * @internal
     */ class FrameImpl {
        /**
         * body of the frame
         */ get body() {
            if (!this._body && this.isBinaryBody) this._body = new TextDecoder().decode(this._binaryBody);
            return this._body || '';
        }
        /**
         * body as Uint8Array
         */ get binaryBody() {
            if (!this._binaryBody && !this.isBinaryBody) this._binaryBody = new TextEncoder().encode(this._body);
            // At this stage it will definitely have a valid value
            return this._binaryBody;
        }
        /**
         * Frame constructor. `command`, `headers` and `body` are available as properties.
         *
         * @internal
         */ constructor(params){
            const { command, headers, body, binaryBody, escapeHeaderValues, skipContentLengthHeader } = params;
            this.command = command;
            this.headers = Object.assign({}, headers || {});
            if (binaryBody) {
                this._binaryBody = binaryBody;
                this.isBinaryBody = true;
            } else {
                this._body = body || '';
                this.isBinaryBody = false;
            }
            this.escapeHeaderValues = escapeHeaderValues || false;
            this.skipContentLengthHeader = skipContentLengthHeader || false;
        }
        /**
         * deserialize a STOMP Frame from raw data.
         *
         * @internal
         */ static fromRawFrame(rawFrame, escapeHeaderValues) {
            const headers = {};
            const trim = (str)=>str.replace(/^\s+|\s+$/g, '');
            // In case of repeated headers, as per standards, first value need to be used
            for (const header of rawFrame.headers.reverse()){
                header.indexOf(':');
                const key = trim(header[0]);
                let value = trim(header[1]);
                if (escapeHeaderValues && rawFrame.command !== 'CONNECT' && rawFrame.command !== 'CONNECTED') value = FrameImpl.hdrValueUnEscape(value);
                headers[key] = value;
            }
            return new FrameImpl({
                command: rawFrame.command,
                headers,
                binaryBody: rawFrame.binaryBody,
                escapeHeaderValues
            });
        }
        /**
         * @internal
         */ toString() {
            return this.serializeCmdAndHeaders();
        }
        /**
         * serialize this Frame in a format suitable to be passed to WebSocket.
         * If the body is string the output will be string.
         * If the body is binary (i.e. of type Unit8Array) it will be serialized to ArrayBuffer.
         *
         * @internal
         */ serialize() {
            const cmdAndHeaders = this.serializeCmdAndHeaders();
            if (this.isBinaryBody) return FrameImpl.toUnit8Array(cmdAndHeaders, this._binaryBody).buffer;
            else return cmdAndHeaders + this._body + BYTE.NULL;
        }
        serializeCmdAndHeaders() {
            const lines = [
                this.command
            ];
            if (this.skipContentLengthHeader) delete this.headers['content-length'];
            for (const name of Object.keys(this.headers || {})){
                const value = this.headers[name];
                if (this.escapeHeaderValues && this.command !== 'CONNECT' && this.command !== 'CONNECTED') lines.push(`${name}:${FrameImpl.hdrValueEscape(`${value}`)}`);
                else lines.push(`${name}:${value}`);
            }
            if (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) lines.push(`content-length:${this.bodyLength()}`);
            return lines.join(BYTE.LF) + BYTE.LF + BYTE.LF;
        }
        isBodyEmpty() {
            return this.bodyLength() === 0;
        }
        bodyLength() {
            const binaryBody = this.binaryBody;
            return binaryBody ? binaryBody.length : 0;
        }
        /**
         * Compute the size of a UTF-8 string by counting its number of bytes
         * (and not the number of characters composing the string)
         */ static sizeOfUTF8(s) {
            return s ? new TextEncoder().encode(s).length : 0;
        }
        static toUnit8Array(cmdAndHeaders, binaryBody) {
            const uint8CmdAndHeaders = new TextEncoder().encode(cmdAndHeaders);
            const nullTerminator = new Uint8Array([
                0
            ]);
            const uint8Frame = new Uint8Array(uint8CmdAndHeaders.length + binaryBody.length + nullTerminator.length);
            uint8Frame.set(uint8CmdAndHeaders);
            uint8Frame.set(binaryBody, uint8CmdAndHeaders.length);
            uint8Frame.set(nullTerminator, uint8CmdAndHeaders.length + binaryBody.length);
            return uint8Frame;
        }
        /**
         * Serialize a STOMP frame as per STOMP standards, suitable to be sent to the STOMP broker.
         *
         * @internal
         */ static marshall(params) {
            const frame = new FrameImpl(params);
            return frame.serialize();
        }
        /**
         *  Escape header values
         */ static hdrValueEscape(str) {
            return str.replace(/\\/g, '\\\\').replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/:/g, '\\c');
        }
        /**
         * UnEscape header values
         */ static hdrValueUnEscape(str) {
            return str.replace(/\\r/g, '\r').replace(/\\n/g, '\n').replace(/\\c/g, ':').replace(/\\\\/g, '\\');
        }
    }
    /**
     * @internal
     */ const NULL = 0;
    /**
     * @internal
     */ const LF = 10;
    /**
     * @internal
     */ const CR = 13;
    /**
     * @internal
     */ const COLON = 58;
    /**
     * This is an evented, rec descent parser.
     * A stream of Octets can be passed and whenever it recognizes
     * a complete Frame or an incoming ping it will invoke the registered callbacks.
     *
     * All incoming Octets are fed into _onByte function.
     * Depending on current state the _onByte function keeps changing.
     * Depending on the state it keeps accumulating into _token and _results.
     * State is indicated by current value of _onByte, all states are named as _collect.
     *
     * STOMP standards https://stomp.github.io/stomp-specification-1.2.html
     * imply that all lengths are considered in bytes (instead of string lengths).
     * So, before actual parsing, if the incoming data is String it is converted to Octets.
     * This allows faithful implementation of the protocol and allows NULL Octets to be present in the body.
     *
     * There is no peek function on the incoming data.
     * When a state change occurs based on an Octet without consuming the Octet,
     * the Octet, after state change, is fed again (_reinjectByte).
     * This became possible as the state change can be determined by inspecting just one Octet.
     *
     * There are two modes to collect the body, if content-length header is there then it by counting Octets
     * otherwise it is determined by NULL terminator.
     *
     * Following the standards, the command and headers are converted to Strings
     * and the body is returned as Octets.
     * Headers are returned as an array and not as Hash - to allow multiple occurrence of an header.
     *
     * This parser does not use Regular Expressions as that can only operate on Strings.
     *
     * It handles if multiple STOMP frames are given as one chunk, a frame is split into multiple chunks, or
     * any combination there of. The parser remembers its state (any partial frame) and continues when a new chunk
     * is pushed.
     *
     * Typically the higher level function will convert headers to Hash, handle unescaping of header values
     * (which is protocol version specific), and convert body to text.
     *
     * Check the parser.spec.js to understand cases that this parser is supposed to handle.
     *
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */ class Parser {
        constructor(onFrame, onIncomingPing){
            this.onFrame = onFrame;
            this.onIncomingPing = onIncomingPing;
            this._encoder = new TextEncoder();
            this._decoder = new TextDecoder();
            this._token = [];
            this._initState();
        }
        parseChunk(segment, appendMissingNULLonIncoming = false) {
            let chunk;
            if (typeof segment === 'string') chunk = this._encoder.encode(segment);
            else chunk = new Uint8Array(segment);
            // See https://github.com/stomp-js/stompjs/issues/89
            // Remove when underlying issue is fixed.
            //
            // Send a NULL byte, if the last byte of a Text frame was not NULL.F
            if (appendMissingNULLonIncoming && chunk[chunk.length - 1] !== 0) {
                const chunkWithNull = new Uint8Array(chunk.length + 1);
                chunkWithNull.set(chunk, 0);
                chunkWithNull[chunk.length] = 0;
                chunk = chunkWithNull;
            }
            // tslint:disable-next-line:prefer-for-of
            for(let i = 0; i < chunk.length; i++){
                const byte = chunk[i];
                this._onByte(byte);
            }
        }
        // The following implements a simple Rec Descent Parser.
        // The grammar is simple and just one byte tells what should be the next state
        _collectFrame(byte) {
            if (byte === NULL) // Ignore
            return;
            if (byte === CR) // Ignore CR
            return;
            if (byte === LF) {
                // Incoming Ping
                this.onIncomingPing();
                return;
            }
            this._onByte = this._collectCommand;
            this._reinjectByte(byte);
        }
        _collectCommand(byte) {
            if (byte === CR) // Ignore CR
            return;
            if (byte === LF) {
                this._results.command = this._consumeTokenAsUTF8();
                this._onByte = this._collectHeaders;
                return;
            }
            this._consumeByte(byte);
        }
        _collectHeaders(byte) {
            if (byte === CR) // Ignore CR
            return;
            if (byte === LF) {
                this._setupCollectBody();
                return;
            }
            this._onByte = this._collectHeaderKey;
            this._reinjectByte(byte);
        }
        _reinjectByte(byte) {
            this._onByte(byte);
        }
        _collectHeaderKey(byte) {
            if (byte === COLON) {
                this._headerKey = this._consumeTokenAsUTF8();
                this._onByte = this._collectHeaderValue;
                return;
            }
            this._consumeByte(byte);
        }
        _collectHeaderValue(byte) {
            if (byte === CR) // Ignore CR
            return;
            if (byte === LF) {
                this._results.headers.push([
                    this._headerKey,
                    this._consumeTokenAsUTF8()
                ]);
                this._headerKey = undefined;
                this._onByte = this._collectHeaders;
                return;
            }
            this._consumeByte(byte);
        }
        _setupCollectBody() {
            const contentLengthHeader = this._results.headers.filter((header)=>{
                return header[0] === 'content-length';
            })[0];
            if (contentLengthHeader) {
                this._bodyBytesRemaining = parseInt(contentLengthHeader[1], 10);
                this._onByte = this._collectBodyFixedSize;
            } else this._onByte = this._collectBodyNullTerminated;
        }
        _collectBodyNullTerminated(byte) {
            if (byte === NULL) {
                this._retrievedBody();
                return;
            }
            this._consumeByte(byte);
        }
        _collectBodyFixedSize(byte) {
            // It is post decrement, so that we discard the trailing NULL octet
            if (this._bodyBytesRemaining-- === 0) {
                this._retrievedBody();
                return;
            }
            this._consumeByte(byte);
        }
        _retrievedBody() {
            this._results.binaryBody = this._consumeTokenAsRaw();
            try {
                this.onFrame(this._results);
            } catch (e) {
                console.log(`Ignoring an exception thrown by a frame handler. Original exception: `, e);
            }
            this._initState();
        }
        // Rec Descent Parser helpers
        _consumeByte(byte) {
            this._token.push(byte);
        }
        _consumeTokenAsUTF8() {
            return this._decoder.decode(this._consumeTokenAsRaw());
        }
        _consumeTokenAsRaw() {
            const rawResult = new Uint8Array(this._token);
            this._token = [];
            return rawResult;
        }
        _initState() {
            this._results = {
                command: undefined,
                headers: [],
                binaryBody: undefined
            };
            this._token = [];
            this._headerKey = undefined;
            this._onByte = this._collectFrame;
        }
    }
    /**
     * Possible states for the IStompSocket
     */ exports1.StompSocketState = void 0;
    (function(StompSocketState) {
        StompSocketState[StompSocketState["CONNECTING"] = 0] = "CONNECTING";
        StompSocketState[StompSocketState["OPEN"] = 1] = "OPEN";
        StompSocketState[StompSocketState["CLOSING"] = 2] = "CLOSING";
        StompSocketState[StompSocketState["CLOSED"] = 3] = "CLOSED";
    })(exports1.StompSocketState || (exports1.StompSocketState = {}));
    /**
     * Possible activation state
     */ exports1.ActivationState = void 0;
    (function(ActivationState) {
        ActivationState[ActivationState["ACTIVE"] = 0] = "ACTIVE";
        ActivationState[ActivationState["DEACTIVATING"] = 1] = "DEACTIVATING";
        ActivationState[ActivationState["INACTIVE"] = 2] = "INACTIVE";
    })(exports1.ActivationState || (exports1.ActivationState = {}));
    /**
     * Possible reconnection wait time modes
     */ exports1.ReconnectionTimeMode = void 0;
    (function(ReconnectionTimeMode) {
        ReconnectionTimeMode[ReconnectionTimeMode["LINEAR"] = 0] = "LINEAR";
        ReconnectionTimeMode[ReconnectionTimeMode["EXPONENTIAL"] = 1] = "EXPONENTIAL";
    })(exports1.ReconnectionTimeMode || (exports1.ReconnectionTimeMode = {}));
    /**
     * Possible ticker strategies for outgoing heartbeat ping
     */ exports1.TickerStrategy = void 0;
    (function(TickerStrategy) {
        TickerStrategy["Interval"] = "interval";
        TickerStrategy["Worker"] = "worker";
    })(exports1.TickerStrategy || (exports1.TickerStrategy = {}));
    class Ticker {
        constructor(_interval, _strategy = exports1.TickerStrategy.Interval, _debug){
            this._interval = _interval;
            this._strategy = _strategy;
            this._debug = _debug;
            this._workerScript = `
    var startTime = Date.now();
    setInterval(function() {
        self.postMessage(Date.now() - startTime);
    }, ${this._interval});
  `;
        }
        start(tick) {
            this.stop();
            if (this.shouldUseWorker()) this.runWorker(tick);
            else this.runInterval(tick);
        }
        stop() {
            this.disposeWorker();
            this.disposeInterval();
        }
        shouldUseWorker() {
            return typeof Worker !== 'undefined' && this._strategy === exports1.TickerStrategy.Worker;
        }
        runWorker(tick) {
            this._debug('Using runWorker for outgoing pings');
            if (!this._worker) {
                this._worker = new Worker(URL.createObjectURL(new Blob([
                    this._workerScript
                ], {
                    type: 'text/javascript'
                })));
                this._worker.onmessage = (message)=>tick(message.data);
            }
        }
        runInterval(tick) {
            this._debug('Using runInterval for outgoing pings');
            if (!this._timer) {
                const startTime = Date.now();
                this._timer = setInterval(()=>{
                    tick(Date.now() - startTime);
                }, this._interval);
            }
        }
        disposeWorker() {
            if (this._worker) {
                this._worker.terminate();
                delete this._worker;
                this._debug('Outgoing ping disposeWorker');
            }
        }
        disposeInterval() {
            if (this._timer) {
                clearInterval(this._timer);
                delete this._timer;
                this._debug('Outgoing ping disposeInterval');
            }
        }
    }
    /**
     * Supported STOMP versions
     *
     * Part of `@stomp/stompjs`.
     */ class Versions {
        /**
         * Takes an array of versions, typical elements '1.2', '1.1', or '1.0'
         *
         * You will be creating an instance of this class if you want to override
         * supported versions to be declared during STOMP handshake.
         */ constructor(versions){
            this.versions = versions;
        }
        /**
         * Used as part of CONNECT STOMP Frame
         */ supportedVersions() {
            return this.versions.join(',');
        }
        /**
         * Used while creating a WebSocket
         */ protocolVersions() {
            return this.versions.map((x)=>`v${x.replace('.', '')}.stomp`);
        }
    }
    /**
     * Indicates protocol version 1.0
     */ Versions.V1_0 = '1.0';
    /**
     * Indicates protocol version 1.1
     */ Versions.V1_1 = '1.1';
    /**
     * Indicates protocol version 1.2
     */ Versions.V1_2 = '1.2';
    /**
     * @internal
     */ Versions.default = new Versions([
        Versions.V1_2,
        Versions.V1_1,
        Versions.V1_0
    ]);
    /**
     * The STOMP protocol handler
     *
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */ class StompHandler {
        get connectedVersion() {
            return this._connectedVersion;
        }
        get connected() {
            return this._connected;
        }
        constructor(_client, _webSocket, config){
            this._client = _client;
            this._webSocket = _webSocket;
            this._connected = false;
            this._serverFrameHandlers = {
                // [CONNECTED Frame](https://stomp.github.com/stomp-specification-1.2.html#CONNECTED_Frame)
                CONNECTED: (frame)=>{
                    this.debug(`connected to server ${frame.headers.server}`);
                    this._connected = true;
                    this._connectedVersion = frame.headers.version;
                    // STOMP version 1.2 needs header values to be escaped
                    if (this._connectedVersion === Versions.V1_2) this._escapeHeaderValues = true;
                    this._setupHeartbeat(frame.headers);
                    this.onConnect(frame);
                },
                // [MESSAGE Frame](https://stomp.github.com/stomp-specification-1.2.html#MESSAGE)
                MESSAGE: (frame)=>{
                    // the callback is registered when the client calls
                    // `subscribe()`.
                    // If there is no registered subscription for the received message,
                    // the default `onUnhandledMessage` callback is used that the client can set.
                    // This is useful for subscriptions that are automatically created
                    // on the browser side (e.g. [RabbitMQ's temporary
                    // queues](https://www.rabbitmq.com/stomp.html)).
                    const subscription = frame.headers.subscription;
                    const onReceive = this._subscriptions[subscription] || this.onUnhandledMessage;
                    // bless the frame to be a Message
                    const message = frame;
                    const client = this;
                    const messageId = this._connectedVersion === Versions.V1_2 ? message.headers.ack : message.headers['message-id'];
                    // add `ack()` and `nack()` methods directly to the returned frame
                    // so that a simple call to `message.ack()` can acknowledge the message.
                    message.ack = (headers = {})=>{
                        return client.ack(messageId, subscription, headers);
                    };
                    message.nack = (headers = {})=>{
                        return client.nack(messageId, subscription, headers);
                    };
                    onReceive(message);
                },
                // [RECEIPT Frame](https://stomp.github.com/stomp-specification-1.2.html#RECEIPT)
                RECEIPT: (frame)=>{
                    const callback = this._receiptWatchers[frame.headers['receipt-id']];
                    if (callback) {
                        callback(frame);
                        // Server will acknowledge only once, remove the callback
                        delete this._receiptWatchers[frame.headers['receipt-id']];
                    } else this.onUnhandledReceipt(frame);
                },
                // [ERROR Frame](https://stomp.github.com/stomp-specification-1.2.html#ERROR)
                ERROR: (frame)=>{
                    this.onStompError(frame);
                }
            };
            // used to index subscribers
            this._counter = 0;
            // subscription callbacks indexed by subscriber's ID
            this._subscriptions = {};
            // receipt-watchers indexed by receipts-ids
            this._receiptWatchers = {};
            this._partialData = '';
            this._escapeHeaderValues = false;
            this._lastServerActivityTS = Date.now();
            this.debug = config.debug;
            this.stompVersions = config.stompVersions;
            this.connectHeaders = config.connectHeaders;
            this.disconnectHeaders = config.disconnectHeaders;
            this.heartbeatIncoming = config.heartbeatIncoming;
            this.heartbeatOutgoing = config.heartbeatOutgoing;
            this.splitLargeFrames = config.splitLargeFrames;
            this.maxWebSocketChunkSize = config.maxWebSocketChunkSize;
            this.forceBinaryWSFrames = config.forceBinaryWSFrames;
            this.logRawCommunication = config.logRawCommunication;
            this.appendMissingNULLonIncoming = config.appendMissingNULLonIncoming;
            this.discardWebsocketOnCommFailure = config.discardWebsocketOnCommFailure;
            this.onConnect = config.onConnect;
            this.onDisconnect = config.onDisconnect;
            this.onStompError = config.onStompError;
            this.onWebSocketClose = config.onWebSocketClose;
            this.onWebSocketError = config.onWebSocketError;
            this.onUnhandledMessage = config.onUnhandledMessage;
            this.onUnhandledReceipt = config.onUnhandledReceipt;
            this.onUnhandledFrame = config.onUnhandledFrame;
        }
        start() {
            const parser = new Parser(// On Frame
            (rawFrame)=>{
                const frame = FrameImpl.fromRawFrame(rawFrame, this._escapeHeaderValues);
                // if this.logRawCommunication is set, the rawChunk is logged at this._webSocket.onmessage
                if (!this.logRawCommunication) this.debug(`<<< ${frame}`);
                const serverFrameHandler = this._serverFrameHandlers[frame.command] || this.onUnhandledFrame;
                serverFrameHandler(frame);
            }, // On Incoming Ping
            ()=>{
                this.debug('<<< PONG');
            });
            this._webSocket.onmessage = (evt)=>{
                this.debug('Received data');
                this._lastServerActivityTS = Date.now();
                if (this.logRawCommunication) {
                    const rawChunkAsString = evt.data instanceof ArrayBuffer ? new TextDecoder().decode(evt.data) : evt.data;
                    this.debug(`<<< ${rawChunkAsString}`);
                }
                parser.parseChunk(evt.data, this.appendMissingNULLonIncoming);
            };
            this._webSocket.onclose = (closeEvent)=>{
                this.debug(`Connection closed to ${this._webSocket.url}`);
                this._cleanUp();
                this.onWebSocketClose(closeEvent);
            };
            this._webSocket.onerror = (errorEvent)=>{
                this.onWebSocketError(errorEvent);
            };
            this._webSocket.onopen = ()=>{
                // Clone before updating
                const connectHeaders = Object.assign({}, this.connectHeaders);
                this.debug('Web Socket Opened...');
                connectHeaders['accept-version'] = this.stompVersions.supportedVersions();
                connectHeaders['heart-beat'] = [
                    this.heartbeatOutgoing,
                    this.heartbeatIncoming
                ].join(',');
                this._transmit({
                    command: 'CONNECT',
                    headers: connectHeaders
                });
            };
        }
        _setupHeartbeat(headers) {
            if (headers.version !== Versions.V1_1 && headers.version !== Versions.V1_2) return;
            // It is valid for the server to not send this header
            // https://stomp.github.io/stomp-specification-1.2.html#Heart-beating
            if (!headers['heart-beat']) return;
            // heart-beat header received from the server looks like:
            //
            //     heart-beat: sx, sy
            const [serverOutgoing, serverIncoming] = headers['heart-beat'].split(',').map((v)=>parseInt(v, 10));
            if (this.heartbeatOutgoing !== 0 && serverIncoming !== 0) {
                const ttl = Math.max(this.heartbeatOutgoing, serverIncoming);
                this.debug(`send PING every ${ttl}ms`);
                this._pinger = new Ticker(ttl, this._client.heartbeatStrategy, this.debug);
                this._pinger.start(()=>{
                    if (this._webSocket.readyState === exports1.StompSocketState.OPEN) {
                        this._webSocket.send(BYTE.LF);
                        this.debug('>>> PING');
                    }
                });
            }
            if (this.heartbeatIncoming !== 0 && serverOutgoing !== 0) {
                const ttl = Math.max(this.heartbeatIncoming, serverOutgoing);
                this.debug(`check PONG every ${ttl}ms`);
                this._ponger = setInterval(()=>{
                    const delta = Date.now() - this._lastServerActivityTS;
                    // We wait twice the TTL to be flexible on window's setInterval calls
                    if (delta > ttl * 2) {
                        this.debug(`did not receive server activity for the last ${delta}ms`);
                        this._closeOrDiscardWebsocket();
                    }
                }, ttl);
            }
        }
        _closeOrDiscardWebsocket() {
            if (this.discardWebsocketOnCommFailure) {
                this.debug('Discarding websocket, the underlying socket may linger for a while');
                this.discardWebsocket();
            } else {
                this.debug('Issuing close on the websocket');
                this._closeWebsocket();
            }
        }
        forceDisconnect() {
            if (this._webSocket) {
                if (this._webSocket.readyState === exports1.StompSocketState.CONNECTING || this._webSocket.readyState === exports1.StompSocketState.OPEN) this._closeOrDiscardWebsocket();
            }
        }
        _closeWebsocket() {
            this._webSocket.onmessage = ()=>{}; // ignore messages
            this._webSocket.close();
        }
        discardWebsocket() {
            if (typeof this._webSocket.terminate !== 'function') augmentWebsocket(this._webSocket, (msg)=>this.debug(msg));
            // @ts-ignore - this method will be there at this stage
            this._webSocket.terminate();
        }
        _transmit(params) {
            const { command, headers, body, binaryBody, skipContentLengthHeader } = params;
            const frame = new FrameImpl({
                command,
                headers,
                body,
                binaryBody,
                escapeHeaderValues: this._escapeHeaderValues,
                skipContentLengthHeader
            });
            let rawChunk = frame.serialize();
            if (this.logRawCommunication) this.debug(`>>> ${rawChunk}`);
            else this.debug(`>>> ${frame}`);
            if (this.forceBinaryWSFrames && typeof rawChunk === 'string') rawChunk = new TextEncoder().encode(rawChunk);
            if (typeof rawChunk !== 'string' || !this.splitLargeFrames) this._webSocket.send(rawChunk);
            else {
                let out = rawChunk;
                while(out.length > 0){
                    const chunk = out.substring(0, this.maxWebSocketChunkSize);
                    out = out.substring(this.maxWebSocketChunkSize);
                    this._webSocket.send(chunk);
                    this.debug(`chunk sent = ${chunk.length}, remaining = ${out.length}`);
                }
            }
        }
        dispose() {
            if (this.connected) try {
                // clone before updating
                const disconnectHeaders = Object.assign({}, this.disconnectHeaders);
                if (!disconnectHeaders.receipt) disconnectHeaders.receipt = `close-${this._counter++}`;
                this.watchForReceipt(disconnectHeaders.receipt, (frame)=>{
                    this._closeWebsocket();
                    this._cleanUp();
                    this.onDisconnect(frame);
                });
                this._transmit({
                    command: 'DISCONNECT',
                    headers: disconnectHeaders
                });
            } catch (error) {
                this.debug(`Ignoring error during disconnect ${error}`);
            }
            else if (this._webSocket.readyState === exports1.StompSocketState.CONNECTING || this._webSocket.readyState === exports1.StompSocketState.OPEN) this._closeWebsocket();
        }
        _cleanUp() {
            this._connected = false;
            if (this._pinger) {
                this._pinger.stop();
                this._pinger = undefined;
            }
            if (this._ponger) {
                clearInterval(this._ponger);
                this._ponger = undefined;
            }
        }
        publish(params) {
            const { destination, headers, body, binaryBody, skipContentLengthHeader } = params;
            const hdrs = Object.assign({
                destination
            }, headers);
            this._transmit({
                command: 'SEND',
                headers: hdrs,
                body,
                binaryBody,
                skipContentLengthHeader
            });
        }
        watchForReceipt(receiptId, callback) {
            this._receiptWatchers[receiptId] = callback;
        }
        subscribe(destination, callback, headers = {}) {
            headers = Object.assign({}, headers);
            if (!headers.id) headers.id = `sub-${this._counter++}`;
            headers.destination = destination;
            this._subscriptions[headers.id] = callback;
            this._transmit({
                command: 'SUBSCRIBE',
                headers
            });
            const client = this;
            return {
                id: headers.id,
                unsubscribe (hdrs) {
                    return client.unsubscribe(headers.id, hdrs);
                }
            };
        }
        unsubscribe(id, headers = {}) {
            headers = Object.assign({}, headers);
            delete this._subscriptions[id];
            headers.id = id;
            this._transmit({
                command: 'UNSUBSCRIBE',
                headers
            });
        }
        begin(transactionId) {
            const txId = transactionId || `tx-${this._counter++}`;
            this._transmit({
                command: 'BEGIN',
                headers: {
                    transaction: txId
                }
            });
            const client = this;
            return {
                id: txId,
                commit () {
                    client.commit(txId);
                },
                abort () {
                    client.abort(txId);
                }
            };
        }
        commit(transactionId) {
            this._transmit({
                command: 'COMMIT',
                headers: {
                    transaction: transactionId
                }
            });
        }
        abort(transactionId) {
            this._transmit({
                command: 'ABORT',
                headers: {
                    transaction: transactionId
                }
            });
        }
        ack(messageId, subscriptionId, headers = {}) {
            headers = Object.assign({}, headers);
            if (this._connectedVersion === Versions.V1_2) headers.id = messageId;
            else headers['message-id'] = messageId;
            headers.subscription = subscriptionId;
            this._transmit({
                command: 'ACK',
                headers
            });
        }
        nack(messageId, subscriptionId, headers = {}) {
            headers = Object.assign({}, headers);
            if (this._connectedVersion === Versions.V1_2) headers.id = messageId;
            else headers['message-id'] = messageId;
            headers.subscription = subscriptionId;
            return this._transmit({
                command: 'NACK',
                headers
            });
        }
    }
    /**
     * STOMP Client Class.
     *
     * Part of `@stomp/stompjs`.
     */ class Client {
        /**
         * Underlying WebSocket instance, READONLY.
         */ get webSocket() {
            return this._stompHandler?._webSocket;
        }
        /**
         * Disconnection headers.
         */ get disconnectHeaders() {
            return this._disconnectHeaders;
        }
        set disconnectHeaders(value) {
            this._disconnectHeaders = value;
            if (this._stompHandler) this._stompHandler.disconnectHeaders = this._disconnectHeaders;
        }
        /**
         * `true` if there is an active connection to STOMP Broker
         */ get connected() {
            return !!this._stompHandler && this._stompHandler.connected;
        }
        /**
         * version of STOMP protocol negotiated with the server, READONLY
         */ get connectedVersion() {
            return this._stompHandler ? this._stompHandler.connectedVersion : undefined;
        }
        /**
         * if the client is active (connected or going to reconnect)
         */ get active() {
            return this.state === exports1.ActivationState.ACTIVE;
        }
        _changeState(state) {
            this.state = state;
            this.onChangeState(state);
        }
        /**
         * Create an instance.
         */ constructor(conf = {}){
            /**
             * STOMP versions to attempt during STOMP handshake. By default, versions `1.2`, `1.1`, and `1.0` are attempted.
             *
             * Example:
             * ```javascript
             *        // Try only versions 1.1 and 1.0
             *        client.stompVersions = new Versions(['1.1', '1.0'])
             * ```
             */ this.stompVersions = Versions.default;
            /**
             * Will retry if Stomp connection is not established in specified milliseconds.
             * Default 0, which switches off automatic reconnection.
             */ this.connectionTimeout = 0;
            /**
             *  automatically reconnect with delay in milliseconds, set to 0 to disable.
             */ this.reconnectDelay = 5000;
            /**
             * tracking the time to the next reconnection. Initialized to [Client#reconnectDelay]{@link Client#reconnectDelay}'s value and it may
             * change depending on the [Client#reconnectTimeMode]{@link Client#reconnectTimeMode} setting
             */ this._nextReconnectDelay = 0;
            /**
             * Maximum time to wait between reconnects, in milliseconds. Defaults to 15 minutes.
             * Only relevant when [Client#reconnectTimeMode]{@link Client#reconnectTimeMode} not LINEAR (e.g., EXPONENTIAL).
             * Set to 0 for no limit on wait time.
             */ this.maxReconnectDelay = 900000; // 15 minutes in ms
            /**
             * Reconnection wait time mode, either linear (default) or exponential.
             * Note: See [Client#maxReconnectDelay]{@link Client#maxReconnectDelay} for setting the maximum delay when exponential
             *
             * ```javascript
             * client.configure({
             *   reconnectTimeMode: ReconnectionTimeMode.EXPONENTIAL,
             *   reconnectDelay: 200, // It will wait 200, 400, 800 ms...
             *   maxReconnectDelay: 10000, // Optional, when provided, it will not wait more that these ms
             * })
             * ```
             */ this.reconnectTimeMode = exports1.ReconnectionTimeMode.LINEAR;
            /**
             * Incoming heartbeat interval in milliseconds. Set to 0 to disable.
             */ this.heartbeatIncoming = 10000;
            /**
             * Outgoing heartbeat interval in milliseconds. Set to 0 to disable.
             */ this.heartbeatOutgoing = 10000;
            /**
             * Outgoing heartbeat strategy.
             * See https://github.com/stomp-js/stompjs/pull/579
             *
             * Can be worker or interval strategy, but will always use `interval`
             * if web workers are unavailable, for example, in a non-browser environment.
             *
             * Using Web Workers may work better on long-running pages
             * and mobile apps, as the browser may suspend Timers in the main page.
             * Try the `Worker` mode if you discover disconnects when the browser tab is in the background.
             *
             * When used in a JS environment, use 'worker' or 'interval' as valid values.
             *
             * Defaults to `interval` strategy.
             */ this.heartbeatStrategy = exports1.TickerStrategy.Interval;
            /**
             * This switches on a non-standard behavior while sending WebSocket packets.
             * It splits larger (text) packets into chunks of [maxWebSocketChunkSize]{@link Client#maxWebSocketChunkSize}.
             * Only Java Spring brokers seem to support this mode.
             *
             * WebSockets, by itself, split large (text) packets,
             * so it is not needed with a truly compliant STOMP/WebSocket broker.
             * Setting it for such a broker will cause large messages to fail.
             *
             * `false` by default.
             *
             * Binary frames are never split.
             */ this.splitLargeFrames = false;
            /**
             * See [splitLargeFrames]{@link Client#splitLargeFrames}.
             * This has no effect if [splitLargeFrames]{@link Client#splitLargeFrames} is `false`.
             */ this.maxWebSocketChunkSize = 8192;
            /**
             * Usually the
             * [type of WebSocket frame]{@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send#Parameters}
             * is automatically decided by type of the payload.
             * Default is `false`, which should work with all compliant brokers.
             *
             * Set this flag to force binary frames.
             */ this.forceBinaryWSFrames = false;
            /**
             * A bug in ReactNative chops a string on occurrence of a NULL.
             * See issue [https://github.com/stomp-js/stompjs/issues/89]{@link https://github.com/stomp-js/stompjs/issues/89}.
             * This makes incoming WebSocket messages invalid STOMP packets.
             * Setting this flag attempts to reverse the damage by appending a NULL.
             * If the broker splits a large message into multiple WebSocket messages,
             * this flag will cause data loss and abnormal termination of connection.
             *
             * This is not an ideal solution, but a stop gap until the underlying issue is fixed at ReactNative library.
             */ this.appendMissingNULLonIncoming = false;
            /**
             * Browsers do not immediately close WebSockets when `.close` is issued.
             * This may cause reconnection to take a significantly long time in case
             *  of some types of failures.
             * In case of incoming heartbeat failure, this experimental flag instructs
             * the library to discard the socket immediately
             * (even before it is actually closed).
             */ this.discardWebsocketOnCommFailure = false;
            /**
             * Activation state.
             *
             * It will usually be ACTIVE or INACTIVE.
             * When deactivating, it may go from ACTIVE to INACTIVE without entering DEACTIVATING.
             */ this.state = exports1.ActivationState.INACTIVE;
            // No op callbacks
            const noOp = ()=>{};
            this.debug = noOp;
            this.beforeConnect = noOp;
            this.onConnect = noOp;
            this.onDisconnect = noOp;
            this.onUnhandledMessage = noOp;
            this.onUnhandledReceipt = noOp;
            this.onUnhandledFrame = noOp;
            this.onStompError = noOp;
            this.onWebSocketClose = noOp;
            this.onWebSocketError = noOp;
            this.logRawCommunication = false;
            this.onChangeState = noOp;
            // These parameters would typically get proper values before connect is called
            this.connectHeaders = {};
            this._disconnectHeaders = {};
            // Apply configuration
            this.configure(conf);
        }
        /**
         * Update configuration.
         */ configure(conf) {
            // bulk assign all properties to this
            Object.assign(this, conf);
            // Warn on incorrect maxReconnectDelay settings
            if (this.maxReconnectDelay > 0 && this.maxReconnectDelay < this.reconnectDelay) {
                this.debug(`Warning: maxReconnectDelay (${this.maxReconnectDelay}ms) is less than reconnectDelay (${this.reconnectDelay}ms). Using reconnectDelay as the maxReconnectDelay delay.`);
                this.maxReconnectDelay = this.reconnectDelay;
            }
        }
        /**
         * Initiate the connection with the broker.
         * If the connection breaks, as per [Client#reconnectDelay]{@link Client#reconnectDelay},
         * it will keep trying to reconnect. If the [Client#reconnectTimeMode]{@link Client#reconnectTimeMode}
         * is set to EXPONENTIAL it will increase the wait time exponentially
         *
         * Call [Client#deactivate]{@link Client#deactivate} to disconnect and stop reconnection attempts.
         */ activate() {
            const _activate = ()=>{
                if (this.active) {
                    this.debug('Already ACTIVE, ignoring request to activate');
                    return;
                }
                this._changeState(exports1.ActivationState.ACTIVE);
                this._nextReconnectDelay = this.reconnectDelay;
                this._connect();
            };
            // if it is deactivating, wait for it to complete before activating.
            if (this.state === exports1.ActivationState.DEACTIVATING) {
                this.debug('Waiting for deactivation to finish before activating');
                this.deactivate().then(()=>{
                    _activate();
                });
            } else _activate();
        }
        async _connect() {
            await this.beforeConnect(this);
            if (this._stompHandler) {
                this.debug('There is already a stompHandler, skipping the call to connect');
                return;
            }
            if (!this.active) {
                this.debug('Client has been marked inactive, will not attempt to connect');
                return;
            }
            // setup connection watcher
            if (this.connectionTimeout > 0) {
                // clear first
                if (this._connectionWatcher) clearTimeout(this._connectionWatcher);
                this._connectionWatcher = setTimeout(()=>{
                    if (this.connected) return;
                    // Connection not established, close the underlying socket
                    // a reconnection will be attempted
                    this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`);
                    this.forceDisconnect();
                }, this.connectionTimeout);
            }
            this.debug('Opening Web Socket...');
            // Get the actual WebSocket (or a similar object)
            const webSocket = this._createWebSocket();
            this._stompHandler = new StompHandler(this, webSocket, {
                debug: this.debug,
                stompVersions: this.stompVersions,
                connectHeaders: this.connectHeaders,
                disconnectHeaders: this._disconnectHeaders,
                heartbeatIncoming: this.heartbeatIncoming,
                heartbeatOutgoing: this.heartbeatOutgoing,
                heartbeatStrategy: this.heartbeatStrategy,
                splitLargeFrames: this.splitLargeFrames,
                maxWebSocketChunkSize: this.maxWebSocketChunkSize,
                forceBinaryWSFrames: this.forceBinaryWSFrames,
                logRawCommunication: this.logRawCommunication,
                appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
                discardWebsocketOnCommFailure: this.discardWebsocketOnCommFailure,
                onConnect: (frame)=>{
                    // Successfully connected, stop the connection watcher
                    if (this._connectionWatcher) {
                        clearTimeout(this._connectionWatcher);
                        this._connectionWatcher = undefined;
                    }
                    if (!this.active) {
                        this.debug('STOMP got connected while deactivate was issued, will disconnect now');
                        this._disposeStompHandler();
                        return;
                    }
                    this.onConnect(frame);
                },
                onDisconnect: (frame)=>{
                    this.onDisconnect(frame);
                },
                onStompError: (frame)=>{
                    this.onStompError(frame);
                },
                onWebSocketClose: (evt)=>{
                    this._stompHandler = undefined; // a new one will be created in case of a reconnect
                    if (this.state === exports1.ActivationState.DEACTIVATING) // Mark deactivation complete
                    this._changeState(exports1.ActivationState.INACTIVE);
                    // The callback is called before attempting to reconnect, this would allow the client
                    // to be `deactivated` in the callback.
                    this.onWebSocketClose(evt);
                    if (this.active) this._schedule_reconnect();
                },
                onWebSocketError: (evt)=>{
                    this.onWebSocketError(evt);
                },
                onUnhandledMessage: (message)=>{
                    this.onUnhandledMessage(message);
                },
                onUnhandledReceipt: (frame)=>{
                    this.onUnhandledReceipt(frame);
                },
                onUnhandledFrame: (frame)=>{
                    this.onUnhandledFrame(frame);
                }
            });
            this._stompHandler.start();
        }
        _createWebSocket() {
            let webSocket;
            if (this.webSocketFactory) webSocket = this.webSocketFactory();
            else if (this.brokerURL) webSocket = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions());
            else throw new Error('Either brokerURL or webSocketFactory must be provided');
            webSocket.binaryType = 'arraybuffer';
            return webSocket;
        }
        _schedule_reconnect() {
            if (this._nextReconnectDelay > 0) {
                this.debug(`STOMP: scheduling reconnection in ${this._nextReconnectDelay}ms`);
                this._reconnector = setTimeout(()=>{
                    if (this.reconnectTimeMode === exports1.ReconnectionTimeMode.EXPONENTIAL) {
                        this._nextReconnectDelay = this._nextReconnectDelay * 2;
                        // Truncated exponential backoff with a set limit unless disabled
                        if (this.maxReconnectDelay !== 0) this._nextReconnectDelay = Math.min(this._nextReconnectDelay, this.maxReconnectDelay);
                    }
                    this._connect();
                }, this._nextReconnectDelay);
            }
        }
        /**
         * Disconnect if connected and stop auto reconnect loop.
         * Appropriate callbacks will be invoked if there is an underlying STOMP connection.
         *
         * This call is async. It will resolve immediately if there is no underlying active websocket,
         * otherwise, it will resolve after the underlying websocket is properly disposed of.
         *
         * It is not an error to invoke this method more than once.
         * Each of those would resolve on completion of deactivation.
         *
         * To reactivate, you can call [Client#activate]{@link Client#activate}.
         *
         * Experimental: pass `force: true` to immediately discard the underlying connection.
         * This mode will skip both the STOMP and the Websocket shutdown sequences.
         * In some cases, browsers take a long time in the Websocket shutdown
         * if the underlying connection had gone stale.
         * Using this mode can speed up.
         * When this mode is used, the actual Websocket may linger for a while
         * and the broker may not realize that the connection is no longer in use.
         *
         * It is possible to invoke this method initially without the `force` option
         * and subsequently, say after a wait, with the `force` option.
         */ async deactivate(options = {}) {
            const force = options.force || false;
            const needToDispose = this.active;
            let retPromise;
            if (this.state === exports1.ActivationState.INACTIVE) {
                this.debug(`Already INACTIVE, nothing more to do`);
                return Promise.resolve();
            }
            this._changeState(exports1.ActivationState.DEACTIVATING);
            // Reset reconnection timer just to be safe
            this._nextReconnectDelay = 0;
            // Clear if a reconnection was scheduled
            if (this._reconnector) {
                clearTimeout(this._reconnector);
                this._reconnector = undefined;
            }
            if (this._stompHandler && // @ts-ignore - if there is a _stompHandler, there is the webSocket
            this.webSocket.readyState !== exports1.StompSocketState.CLOSED) {
                const origOnWebSocketClose = this._stompHandler.onWebSocketClose;
                // we need to wait for the underlying websocket to close
                retPromise = new Promise((resolve, reject)=>{
                    // @ts-ignore - there is a _stompHandler
                    this._stompHandler.onWebSocketClose = (evt)=>{
                        origOnWebSocketClose(evt);
                        resolve();
                    };
                });
            } else {
                // indicate that auto reconnect loop should terminate
                this._changeState(exports1.ActivationState.INACTIVE);
                return Promise.resolve();
            }
            if (force) this._stompHandler?.discardWebsocket();
            else if (needToDispose) this._disposeStompHandler();
            return retPromise;
        }
        /**
         * Force disconnect if there is an active connection by directly closing the underlying WebSocket.
         * This is different from a normal disconnect where a DISCONNECT sequence is carried out with the broker.
         * After forcing disconnect, automatic reconnect will be attempted.
         * To stop further reconnects call [Client#deactivate]{@link Client#deactivate} as well.
         */ forceDisconnect() {
            if (this._stompHandler) this._stompHandler.forceDisconnect();
        }
        _disposeStompHandler() {
            // Dispose STOMP Handler
            if (this._stompHandler) this._stompHandler.dispose();
        }
        /**
         * Send a message to a named destination. Refer to your STOMP broker documentation for types
         * and naming of destinations.
         *
         * STOMP protocol specifies and suggests some headers and also allows broker-specific headers.
         *
         * `body` must be String.
         * You will need to covert the payload to string in case it is not string (e.g. JSON).
         *
         * To send a binary message body, use `binaryBody` parameter. It should be a
         * [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
         * Sometimes brokers may not support binary frames out of the box.
         * Please check your broker documentation.
         *
         * `content-length` header is automatically added to the STOMP Frame sent to the broker.
         * Set `skipContentLengthHeader` to indicate that `content-length` header should not be added.
         * For binary messages, `content-length` header is always added.
         *
         * Caution: The broker will, most likely, report an error and disconnect
         * if the message body has NULL octet(s) and `content-length` header is missing.
         *
         * ```javascript
         *        client.publish({destination: "/queue/test", headers: {priority: 9}, body: "Hello, STOMP"});
         *
         *        // Only destination is mandatory parameter
         *        client.publish({destination: "/queue/test", body: "Hello, STOMP"});
         *
         *        // Skip content-length header in the frame to the broker
         *        client.publish({"/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true});
         *
         *        var binaryData = generateBinaryData(); // This need to be of type Uint8Array
         *        // setting content-type header is not mandatory, however a good practice
         *        client.publish({destination: '/topic/special', binaryBody: binaryData,
         *                         headers: {'content-type': 'application/octet-stream'}});
         * ```
         */ publish(params) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.publish(params);
        }
        _checkConnection() {
            if (!this.connected) throw new TypeError('There is no underlying STOMP connection');
        }
        /**
         * STOMP brokers may carry out operation asynchronously and allow requesting for acknowledgement.
         * To request an acknowledgement, a `receipt` header needs to be sent with the actual request.
         * The value (say receipt-id) for this header needs to be unique for each use.
         * Typically, a sequence, a UUID, a random number or a combination may be used.
         *
         * A complaint broker will send a RECEIPT frame when an operation has actually been completed.
         * The operation needs to be matched based on the value of the receipt-id.
         *
         * This method allows watching for a receipt and invoking the callback
         *  when the corresponding receipt has been received.
         *
         * The actual {@link IFrame} will be passed as parameter to the callback.
         *
         * Example:
         * ```javascript
         *        // Subscribing with acknowledgement
         *        let receiptId = randomText();
         *
         *        client.watchForReceipt(receiptId, function() {
         *          // Will be called after server acknowledges
         *        });
         *
         *        client.subscribe(TEST.destination, onMessage, {receipt: receiptId});
         *
         *
         *        // Publishing with acknowledgement
         *        receiptId = randomText();
         *
         *        client.watchForReceipt(receiptId, function() {
         *          // Will be called after server acknowledges
         *        });
         *        client.publish({destination: TEST.destination, headers: {receipt: receiptId}, body: msg});
         * ```
         */ watchForReceipt(receiptId, callback) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.watchForReceipt(receiptId, callback);
        }
        /**
         * Subscribe to a STOMP Broker location. The callback will be invoked for each
         * received message with the {@link IMessage} as argument.
         *
         * Note: The library will generate a unique ID if there is none provided in the headers.
         *       To use your own ID, pass it using the `headers` argument.
         *
         * ```javascript
         *        callback = function(message) {
         *        // called when the client receives a STOMP message from the server
         *          if (message.body) {
         *            alert("got message with body " + message.body)
         *          } else {
         *            alert("got empty message");
         *          }
         *        });
         *
         *        var subscription = client.subscribe("/queue/test", callback);
         *
         *        // Explicit subscription id
         *        var mySubId = 'my-subscription-id-001';
         *        var subscription = client.subscribe(destination, callback, { id: mySubId });
         * ```
         */ subscribe(destination, callback, headers = {}) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            return this._stompHandler.subscribe(destination, callback, headers);
        }
        /**
         * It is preferable to unsubscribe from a subscription by calling
         * `unsubscribe()` directly on {@link StompSubscription} returned by `client.subscribe()`:
         *
         * ```javascript
         *        var subscription = client.subscribe(destination, onmessage);
         *        // ...
         *        subscription.unsubscribe();
         * ```
         *
         * See: https://stomp.github.com/stomp-specification-1.2.html#UNSUBSCRIBE UNSUBSCRIBE Frame
         */ unsubscribe(id, headers = {}) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.unsubscribe(id, headers);
        }
        /**
         * Start a transaction, the returned {@link ITransaction} has methods - [commit]{@link ITransaction#commit}
         * and [abort]{@link ITransaction#abort}.
         *
         * `transactionId` is optional, if not passed the library will generate it internally.
         */ begin(transactionId) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            return this._stompHandler.begin(transactionId);
        }
        /**
         * Commit a transaction.
         *
         * It is preferable to commit a transaction by calling [commit]{@link ITransaction#commit} directly on
         * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
         *
         * ```javascript
         *        var tx = client.begin(txId);
         *        //...
         *        tx.commit();
         * ```
         */ commit(transactionId) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.commit(transactionId);
        }
        /**
         * Abort a transaction.
         * It is preferable to abort a transaction by calling [abort]{@link ITransaction#abort} directly on
         * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
         *
         * ```javascript
         *        var tx = client.begin(txId);
         *        //...
         *        tx.abort();
         * ```
         */ abort(transactionId) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.abort(transactionId);
        }
        /**
         * ACK a message. It is preferable to acknowledge a message by calling [ack]{@link IMessage#ack} directly
         * on the {@link IMessage} handled by a subscription callback:
         *
         * ```javascript
         *        var callback = function (message) {
         *          // process the message
         *          // acknowledge it
         *          message.ack();
         *        };
         *        client.subscribe(destination, callback, {'ack': 'client'});
         * ```
         */ ack(messageId, subscriptionId, headers = {}) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.ack(messageId, subscriptionId, headers);
        }
        /**
         * NACK a message. It is preferable to acknowledge a message by calling [nack]{@link IMessage#nack} directly
         * on the {@link IMessage} handled by a subscription callback:
         *
         * ```javascript
         *        var callback = function (message) {
         *          // process the message
         *          // an error occurs, nack it
         *          message.nack();
         *        };
         *        client.subscribe(destination, callback, {'ack': 'client'});
         * ```
         */ nack(messageId, subscriptionId, headers = {}) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.nack(messageId, subscriptionId, headers);
        }
    }
    /**
     * Configuration options for STOMP Client, each key corresponds to
     * field by the same name in {@link Client}. This can be passed to
     * the constructor of {@link Client} or to [Client#configure]{@link Client#configure}.
     *
     * Part of `@stomp/stompjs`.
     */ class StompConfig {
    }
    /**
     * STOMP headers. Many functions calls will accept headers as parameters.
     * The headers sent by Broker will be available as [IFrame#headers]{@link IFrame#headers}.
     *
     * `key` and `value` must be valid strings.
     * In addition, `key` must not contain `CR`, `LF`, or `:`.
     *
     * Part of `@stomp/stompjs`.
     */ class StompHeaders {
    }
    /**
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */ class HeartbeatInfo {
        constructor(client){
            this.client = client;
        }
        get outgoing() {
            return this.client.heartbeatOutgoing;
        }
        set outgoing(value) {
            this.client.heartbeatOutgoing = value;
        }
        get incoming() {
            return this.client.heartbeatIncoming;
        }
        set incoming(value) {
            this.client.heartbeatIncoming = value;
        }
    }
    /**
     * Available for backward compatibility, please shift to using {@link Client}.
     *
     * **Deprecated**
     *
     * Part of `@stomp/stompjs`.
     *
     * To upgrade, please follow the [Upgrade Guide](https://stomp-js.github.io/guide/stompjs/upgrading-stompjs.html)
     */ class CompatClient extends Client {
        /**
         * Available for backward compatibility, please shift to using {@link Client}
         * and [Client#webSocketFactory]{@link Client#webSocketFactory}.
         *
         * **Deprecated**
         *
         * @internal
         */ constructor(webSocketFactory){
            super();
            /**
             * It is no op now. No longer needed. Large packets work out of the box.
             */ this.maxWebSocketFrameSize = 16384;
            this._heartbeatInfo = new HeartbeatInfo(this);
            this.reconnect_delay = 0;
            this.webSocketFactory = webSocketFactory;
            // Default from previous version
            this.debug = (...message)=>{
                console.log(...message);
            };
        }
        _parseConnect(...args) {
            let closeEventCallback;
            let connectCallback;
            let errorCallback;
            let headers = {};
            if (args.length < 2) throw new Error('Connect requires at least 2 arguments');
            if (typeof args[1] === 'function') [headers, connectCallback, errorCallback, closeEventCallback] = args;
            else switch(args.length){
                case 6:
                    [headers.login, headers.passcode, connectCallback, errorCallback, closeEventCallback, headers.host] = args;
                    break;
                default:
                    [headers.login, headers.passcode, connectCallback, errorCallback, closeEventCallback] = args;
            }
            return [
                headers,
                connectCallback,
                errorCallback,
                closeEventCallback
            ];
        }
        /**
         * Available for backward compatibility, please shift to using [Client#activate]{@link Client#activate}.
         *
         * **Deprecated**
         *
         * The `connect` method accepts different number of arguments and types. See the Overloads list. Use the
         * version with headers to pass your broker specific options.
         *
         * overloads:
         * - connect(headers, connectCallback)
         * - connect(headers, connectCallback, errorCallback)
         * - connect(login, passcode, connectCallback)
         * - connect(login, passcode, connectCallback, errorCallback)
         * - connect(login, passcode, connectCallback, errorCallback, closeEventCallback)
         * - connect(login, passcode, connectCallback, errorCallback, closeEventCallback, host)
         *
         * params:
         * - headers, see [Client#connectHeaders]{@link Client#connectHeaders}
         * - connectCallback, see [Client#onConnect]{@link Client#onConnect}
         * - errorCallback, see [Client#onStompError]{@link Client#onStompError}
         * - closeEventCallback, see [Client#onWebSocketClose]{@link Client#onWebSocketClose}
         * - login [String], see [Client#connectHeaders](../classes/Client.html#connectHeaders)
         * - passcode [String], [Client#connectHeaders](../classes/Client.html#connectHeaders)
         * - host [String], see [Client#connectHeaders](../classes/Client.html#connectHeaders)
         *
         * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
         */ connect(...args) {
            const out = this._parseConnect(...args);
            if (out[0]) this.connectHeaders = out[0];
            if (out[1]) this.onConnect = out[1];
            if (out[2]) this.onStompError = out[2];
            if (out[3]) this.onWebSocketClose = out[3];
            super.activate();
        }
        /**
         * Available for backward compatibility, please shift to using [Client#deactivate]{@link Client#deactivate}.
         *
         * **Deprecated**
         *
         * See:
         * [Client#onDisconnect]{@link Client#onDisconnect}, and
         * [Client#disconnectHeaders]{@link Client#disconnectHeaders}
         *
         * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
         */ disconnect(disconnectCallback, headers = {}) {
            if (disconnectCallback) this.onDisconnect = disconnectCallback;
            this.disconnectHeaders = headers;
            super.deactivate();
        }
        /**
         * Available for backward compatibility, use [Client#publish]{@link Client#publish}.
         *
         * Send a message to a named destination. Refer to your STOMP broker documentation for types
         * and naming of destinations. The headers will, typically, be available to the subscriber.
         * However, there may be special purpose headers corresponding to your STOMP broker.
         *
         *  **Deprecated**, use [Client#publish]{@link Client#publish}
         *
         * Note: Body must be String. You will need to covert the payload to string in case it is not string (e.g. JSON)
         *
         * ```javascript
         *        client.send("/queue/test", {priority: 9}, "Hello, STOMP");
         *
         *        // If you want to send a message with a body, you must also pass the headers argument.
         *        client.send("/queue/test", {}, "Hello, STOMP");
         * ```
         *
         * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
         */ send(destination, headers = {}, body = '') {
            headers = Object.assign({}, headers);
            const skipContentLengthHeader = headers['content-length'] === false;
            if (skipContentLengthHeader) delete headers['content-length'];
            this.publish({
                destination,
                headers: headers,
                body,
                skipContentLengthHeader
            });
        }
        /**
         * Available for backward compatibility, renamed to [Client#reconnectDelay]{@link Client#reconnectDelay}.
         *
         * **Deprecated**
         */ set reconnect_delay(value) {
            this.reconnectDelay = value;
        }
        /**
         * Available for backward compatibility, renamed to [Client#webSocket]{@link Client#webSocket}.
         *
         * **Deprecated**
         */ get ws() {
            return this.webSocket;
        }
        /**
         * Available for backward compatibility, renamed to [Client#connectedVersion]{@link Client#connectedVersion}.
         *
         * **Deprecated**
         */ get version() {
            return this.connectedVersion;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledMessage]{@link Client#onUnhandledMessage}.
         *
         * **Deprecated**
         */ get onreceive() {
            return this.onUnhandledMessage;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledMessage]{@link Client#onUnhandledMessage}.
         *
         * **Deprecated**
         */ set onreceive(value) {
            this.onUnhandledMessage = value;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledReceipt]{@link Client#onUnhandledReceipt}.
         * Prefer using [Client#watchForReceipt]{@link Client#watchForReceipt}.
         *
         * **Deprecated**
         */ get onreceipt() {
            return this.onUnhandledReceipt;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledReceipt]{@link Client#onUnhandledReceipt}.
         *
         * **Deprecated**
         */ set onreceipt(value) {
            this.onUnhandledReceipt = value;
        }
        /**
         * Available for backward compatibility, renamed to [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
         * [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}.
         *
         * **Deprecated**
         */ get heartbeat() {
            return this._heartbeatInfo;
        }
        /**
         * Available for backward compatibility, renamed to [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
         * [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}.
         *
         * **Deprecated**
         */ set heartbeat(value) {
            this.heartbeatIncoming = value.incoming;
            this.heartbeatOutgoing = value.outgoing;
        }
    }
    /**
     * STOMP Class, acts like a factory to create {@link Client}.
     *
     * Part of `@stomp/stompjs`.
     *
     * **Deprecated**
     *
     * It will be removed in next major version. Please switch to {@link Client}.
     */ class Stomp {
        /**
         * This method creates a WebSocket client that is connected to
         * the STOMP server located at the url.
         *
         * ```javascript
         *        var url = "ws://localhost:61614/stomp";
         *        var client = Stomp.client(url);
         * ```
         *
         * **Deprecated**
         *
         * It will be removed in next major version. Please switch to {@link Client}
         * using [Client#brokerURL]{@link Client#brokerURL}.
         */ static client(url, protocols) {
            // This is a hack to allow another implementation than the standard
            // HTML5 WebSocket class.
            //
            // It is possible to use another class by calling
            //
            //     Stomp.WebSocketClass = MozWebSocket
            //
            // *prior* to call `Stomp.client()`.
            //
            // This hack is deprecated and `Stomp.over()` method should be used
            // instead.
            // See remarks on the function Stomp.over
            if (protocols == null) protocols = Versions.default.protocolVersions();
            const wsFn = ()=>{
                const klass = Stomp.WebSocketClass || WebSocket;
                return new klass(url, protocols);
            };
            return new CompatClient(wsFn);
        }
        /**
         * This method is an alternative to [Stomp#client]{@link Stomp#client} to let the user
         * specify the WebSocket to use (either a standard HTML5 WebSocket or
         * a similar object).
         *
         * In order to support reconnection, the function Client._connect should be callable more than once.
         * While reconnecting
         * a new instance of underlying transport (TCP Socket, WebSocket or SockJS) will be needed. So, this function
         * alternatively allows passing a function that should return a new instance of the underlying socket.
         *
         * ```javascript
         *        var client = Stomp.over(function(){
         *          return new WebSocket('ws://localhost:15674/ws')
         *        });
         * ```
         *
         * **Deprecated**
         *
         * It will be removed in next major version. Please switch to {@link Client}
         * using [Client#webSocketFactory]{@link Client#webSocketFactory}.
         */ static over(ws) {
            let wsFn;
            if (typeof ws === 'function') wsFn = ws;
            else {
                console.warn("Stomp.over did not receive a factory, auto reconnect will not work. Please see https://stomp-js.github.io/api-docs/latest/classes/Stomp.html#over");
                wsFn = ()=>ws;
            }
            return new CompatClient(wsFn);
        }
    }
    /**
     * In case you need to use a non standard class for WebSocket.
     *
     * For example when using within NodeJS environment:
     *
     * ```javascript
     *        StompJs = require('../../esm5/');
     *        Stomp = StompJs.Stomp;
     *        Stomp.WebSocketClass = require('websocket').w3cwebsocket;
     * ```
     *
     * **Deprecated**
     *
     *
     * It will be removed in next major version. Please switch to {@link Client}
     * using [Client#webSocketFactory]{@link Client#webSocketFactory}.
     */ // tslint:disable-next-line:variable-name
    Stomp.WebSocketClass = null;
    exports1.Client = Client;
    exports1.CompatClient = CompatClient;
    exports1.FrameImpl = FrameImpl;
    exports1.Parser = Parser;
    exports1.Stomp = Stomp;
    exports1.StompConfig = StompConfig;
    exports1.StompHeaders = StompHeaders;
    exports1.Versions = Versions;
});

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"djbTg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class GameRTC {
    async setReady() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            });
            console.log(`Access granted: ${stream}`);
        } catch (err) {
            console.error(`Access denied: ${err}`);
        }
    }
}
const gameRTC = new GameRTC();
exports.default = gameRTC;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["5Eplg","bNJxx"], "bNJxx", "parcelRequirebeba", {})

//# sourceMappingURL=dummy.8a0ccb47.js.map
