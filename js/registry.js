const UNITS = [];

function addUnit(unit) {
  UNITS.push({ ...unit, topics: [] });
}

function addTopic(unitId, topic) {
  UNITS.find((u) => u.id === unitId).topics.push(topic);
}
