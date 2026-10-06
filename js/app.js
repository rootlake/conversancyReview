const LEVELS = ["Supported", "Developing", "Skillful", "Excelling"];

const store = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

const $ = (sel) => document.querySelector(sel);
const els = {
  unit: $("#unit"),
  topics: $("#topics"),
  left: $("#left"),
  board: $("#board"),
  wires: document.querySelectorAll("#wires path"),
  card: $("#card"),
  topicLabel: $("#topic-label"),
  prompt: $("#prompt"),
  followup: $("#followup"),
  ratings: $("#ratings"),
  keyToggle: $("#key-toggle"),
  next: $("#next"),
  key: $("#key"),
};

const RANDOM = "all";
const threads = UNITS.flatMap((u) =>
  u.topics.flatMap((t) =>
    t.threads.map((thread, i) => ({ ...thread, id: `${u.id}/${t.id}/${i}`, unit: u.id, topic: t.id, topicName: t.name }))
  )
);
const unitById = (id) => UNITS.find((u) => u.id === id);
const hasTopic = (unitId, topicId) => unitById(unitId).topics.some((t) => t.id === topicId);

const savedUnit = store.get("unit", null);
const state = {
  unit: unitById(savedUnit) ? savedUnit : UNITS.at(-1).id,
  topic: store.get("topic", RANDOM),
  used: new Set(store.get("used", [])),
  current: null,
  shown: null,
  pick: null,
  showKey: false,
};
if (!hasTopic(state.unit, state.topic)) state.topic = RANDOM;

const pool = () =>
  threads.filter((t) => t.unit === state.unit && (state.topic === RANDOM || t.topic === state.topic));
const unused = () => pool().filter((t) => !state.used.has(t.id));

function draw() {
  let open = unused().filter((t) => t !== state.current);
  if (!open.length) {
    pool().forEach((t) => state.used.delete(t.id));
    open = pool().filter((t) => t !== state.current);
  }
  state.current = open[Math.floor(Math.random() * open.length)] ?? state.current;
  state.used.add(state.current.id);
  store.set("used", [...state.used]);
  state.shown = null;
  state.pick = null;
  state.showKey = false;
  render();
}

function next() {
  if (state.pick && state.pick !== state.shown) {
    state.shown = state.pick;
    state.pick = null;
    render();
  } else {
    draw();
  }
}

function pick(level) {
  state.pick = state.pick === level ? null : level;
  render();
}

function toggleKey() {
  state.showKey = !state.showKey;
  render();
}

function setTopic(id) {
  if (state.topic === id) return;
  state.topic = id;
  store.set("topic", id);
  draw();
}

function setUnit(id) {
  state.unit = id;
  state.topic = RANDOM;
  store.set("unit", id);
  store.set("topic", RANDOM);
  buildTopics();
  draw();
}

function render() {
  const c = state.current;
  const lit = state.pick ?? state.shown;

  els.topics.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("on", b.dataset.id === state.topic);
  });
  els.left.textContent = `${unused().length} left`;

  els.board.classList.toggle("followup", Boolean(state.shown));
  els.board.classList.toggle("branched", Boolean(lit));
  els.wires.forEach((p) => p.classList.toggle("on", Number(p.dataset.level) === lit));
  els.ratings.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("on", Number(b.dataset.level) === lit);
  });

  els.card.dataset.level = state.shown ?? "";
  els.topicLabel.textContent = c.topicName;
  els.prompt.textContent = c.q;
  els.followup.hidden = !state.shown;
  els.followup.dataset.level = state.shown ?? "";
  els.followup.textContent = state.shown ? c.f[state.shown - 1] : "";

  els.keyToggle.classList.toggle("on", state.showKey);
  els.key.hidden = !state.showKey;
  els.key.replaceChildren(
    ...(state.showKey ? c.key : []).map((text) => Object.assign(document.createElement("li"), { textContent: text }))
  );
}

function button(html, data, onClick) {
  const b = Object.assign(document.createElement("button"), { type: "button", innerHTML: html });
  Object.assign(b.dataset, data);
  b.addEventListener("click", onClick);
  return b;
}

function buildTopics() {
  const topics = [{ id: RANDOM, name: "Random" }, ...unitById(state.unit).topics];
  els.topics.replaceChildren(...topics.map((t) => button(t.name, { id: t.id }, () => setTopic(t.id))));
}

els.unit.hidden = UNITS.length < 2;
els.unit.append(...UNITS.map((u) => new Option(u.name, u.id)));
els.unit.value = state.unit;
els.unit.addEventListener("change", () => setUnit(els.unit.value));

buildTopics();
els.ratings.append(
  ...LEVELS.map((label, i) =>
    button(`<span class="num">${i + 1}</span><span class="label">${label}</span>`, { level: i + 1 }, () => pick(i + 1))
  ).reverse()
);

els.next.addEventListener("click", next);
els.keyToggle.addEventListener("click", toggleKey);

document.addEventListener("keydown", (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key === " " || e.key === "ArrowRight" || e.key === "n") {
    e.preventDefault();
    next();
  } else if (/^[1-4]$/.test(e.key)) pick(Number(e.key));
  else if (e.key === "k") toggleKey();
});

draw();
