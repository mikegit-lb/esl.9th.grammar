const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Runs flashcards.js in a stub page and drives the real click handler through one batch:
// start -> show the word -> knew it -> still learning -> end summary.
// "Show the word" used to throw (listenButton was undefined), leaving the card stuck.
function loadFlashcards() {
  const root = path.join(__dirname, "..");
  const store = {};
  let clickHandler = null;
  const context = {
    console,
    Date,
    document: { addEventListener(type, fn) { if (type === "click") clickHandler = fn; } },
    progress: {
      get: (key, fallback) => (key in store ? store[key] : fallback),
      set: (key, value) => { store[key] = value; },
      remove: (key) => { delete store[key]; }
    },
    escapeHtml: (value) => String(value),
    viewPanel: (id, title, body) => body
  };
  context.window = context;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, "core.js"), "utf8"), context);
  vm.runInContext(fs.readFileSync(path.join(root, "flashcards.js"), "utf8"), context);
  return { flashcards: context.Flashcards, press: (rootEl, attr) => {
    const button = { hasAttribute: (name) => name === attr, closest: () => rootEl };
    clickHandler({ target: { closest: () => button } });
  } };
}

function fakeRoot(unit) {
  return {
    attrs: { "data-unit": String(unit) },
    innerHTML: "",
    fcSession: undefined,
    getAttribute(name) { return this.attrs[name]; },
    querySelector() { return null; },
    focus() {}
  };
}

test("a batch runs from start to summary without throwing", () => {
  const { flashcards, press } = loadFlashcards();
  const items = [
    { term: "castle", meaning: "a large old building on a hill", example: "The castle is on a hill." },
    { term: "bridge", meaning: "a structure over a river", example: "The bridge is old.", audio: false }
  ];
  const root = fakeRoot(0);
  root.innerHTML = flashcards.html(0, items).match(/<div data-flashcards[^>]*>([\s\S]*)<\/div>/)[1];
  press(root, "data-fc-start");
  assert.match(root.innerHTML, /Word 1 of 2/);
  press(root, "data-fc-show");
  assert.match(root.innerHTML, /castle/, "the revealed word appears on the card");
  press(root, "data-fc-knew");
  press(root, "data-fc-show");
  press(root, "data-fc-again");
  assert.match(root.innerHTML, /You knew 1 of 2 words\. The rest come back sooner\./);
});

test("a clean batch gets the clean-sweep summary", () => {
  const { flashcards, press } = loadFlashcards();
  const root = fakeRoot(0);
  flashcards.html(0, [{ term: "museum", meaning: "a place for old objects", example: "The museum is free." }]);
  root.innerHTML = "";
  press(root, "data-fc-start");
  press(root, "data-fc-show");
  press(root, "data-fc-knew");
  assert.match(root.innerHTML, /Clean sweep:<\/strong> you knew all 1 word\./);
});
