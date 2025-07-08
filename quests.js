function claimQuestReward(questId) {
  if (!quest || quest.isClaimed || !quest.isCompleted) return;

function updateQuestProgress() {
  quests.forEach(quest => {
    quest.isCompleted = gras >= quest.required.pressedGrass;
  });

  quests.forEach(quest => {
    div.className = "section";
    div.innerHTML = `
      <h3>${quest.title}</h3>