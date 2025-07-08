function zeigeReiter(reiterId) {
      document.querySelectorAll('.tab-content').forEach(div => div.classList.remove('tab-active'));
      document.getElementById(reiterId).classList.add('tab-active');
    }

    function updateUI() {
      document.getElementById('grasGlobal').textContent = gras;
      document.getElementById('goldGlobal').textContent = gold;
      document.getElementById('xp').textContent = xp;
      document.getElementById('level').textContent = level;
      document.getElementById('nextXp').textContent = level * 50;
      document.getElementById('siloFuellstand').textContent = siloFuellstand;
      document.getElementById('siloKapazitaet').textContent = siloKapazitaet;
      document.getElementById('kühe').textContent = kühe;
      document.getElementById('kälber').textContent = kälber;
      document.getElementById('helferCount').textContent = helferListe.length;
      document.getElementById('weideFelder').textContent = weideFelder;
      document.getElementById('genutzteFelder').textContent = genutzteFelder;
      document.getElementById('weideFrei').textContent = weideFelder - genutzteFelder;
      document.getElementById('guelleFuellstand').textContent = guelle;
    }

    function verkaufeGras() {
      if (gras >= 10) {
        gras -= 10;
        siloFuellstand -= 10;
        gold += 1;
        console.log('Init OK'); updateUI(); renderHelferListe();
  // Automatisches Altern der Kälber
  wachseKaelber();
  zeigeZuchtKaelber();

      }

    function verkaufeAllesGras() {
      if (verkaufbareMenge > 0) {
        gras -= verkaufbareMenge * 10;
        siloFuellstand -= verkaufbareMenge * 10;
        gold += verkaufbareMenge;
        console.log('Init OK'); updateUI(); renderHelferListe();
  // Automatisches Altern der Kälber
  wachseKaelber();
  zeigeZuchtKaelber();

      }

    function upgradeSilo() {
      if (gold >= 15) {
        gold -= 15;
        siloKapazitaet += 50;
        console.log('Init OK'); updateUI(); renderHelferListe();
  // Automatisches Altern der Kälber
  wachseKaelber();
  zeigeZuchtKaelber();

      }

    function upgradeWeide() {
      if (gold >= 50) {
        gold -= 50;
        weideFelder += 50;
        console.log('Init OK'); updateUI(); renderHelferListe();
  // Automatisches Altern der Kälber
  wachseKaelber();
  zeigeZuchtKaelber();

      }

    function duengeFeld() {
      if (guelle >= 30) {
        guelle -= 30;
        document.getElementById('duengeStatus').textContent = "✅ Felder wurden erfolgreich gedüngt!";
        console.log('Init OK'); updateUI(); renderHelferListe();
  // Automatisches Altern der Kälber
  wachseKaelber();
  zeigeZuchtKaelber();

      }

    function verkaufeGuelle() {
      if (guelle >= 10) {
        guelle -= 10;
        gold += 5;
        console.log('Init OK'); updateUI(); renderHelferListe();
  // Automatisches Altern der Kälber
  wachseKaelber();
  zeigeZuchtKaelber();

      }

    function forscheGraspressen() {
      if (gold >= 50) {
        gold -= 50;
        document.getElementById("statusGraspressen").textContent = "✅";
        console.log('Init OK'); updateUI(); renderHelferListe();
  // Automatisches Altern der Kälber
  wachseKaelber();
  zeigeZuchtKaelber();

      }

    function forscheGuellefass() {
      if (gold >= 75) {
        gold -= 75;
        document.getElementById("statusGuellefass").textContent = "✅";
        console.log('Init OK'); updateUI(); renderHelferListe();
  // Automatisches Altern der Kälber
  wachseKaelber();
  zeigeZuchtKaelber();

      }

    function levelUpCheck() {
      if (xp >= nextLevelXp) {
        xp -= nextLevelXp;
        level++;
      }

    function ausbauenStall(stufe) {
      if (stufe === 'klein') kosten = 50;
      else if (stufe === 'mittel') kosten = 150;
      else if (stufe === 'gross') kosten = 300;

      if (gold >= kosten) {
        gold -= kosten;
        kühe += 2;
        guelle += 10;
        console.log('Init OK'); updateUI(); renderHelferListe();
  // Automatisches Altern der Kälber
  wachseKaelber();
  zeigeZuchtKaelber();

      }

  gras -= quest.required.pressedGrass;
  kälber += quest.reward.calves;
  quest.isClaimed = true;
  alert(`🎁 Du hast ${quest.reward.calves} Kalb erhalten!`);

function renderQuestTab() {
  container.innerHTML = "";

  if (!erfolgreich) return alert("Besamung fehlgeschlagen ❌");

  zuchtKaelber.push(kalb);
  console.log('Init OK'); updateUI(); renderHelferListe();
  // Automatisches Altern der Kälber
  wachseKaelber();
  zeigeZuchtKaelber();

  alert("🐮 Besamung erfolgreich! Neues Kalb ist unterwegs.");
}

function renderHelferListe() {
  div.innerHTML = "";
  helferListe.forEach((h, i) => {
    div.innerHTML += `
      <p>🔧 Helfer ${i + 1}: Werkzeug-Level ${h.toolLevel}

function upgradeHelfer(index) {
  if (gold >= 20) {
    gold -= 20;
    helferListe[index].toolLevel++;
    console.log('Init OK'); updateUI(); renderHelferListe();
    renderHelferListe();
  } else {

      console.log('Init OK'); updateUI(); renderHelferListe();
    console.log('Init OK'); updateUI(); renderHelferListe();
    console.log('Init OK'); updateUI(); renderHelferListe();
  console.log('Init OK'); updateUI(); renderHelferListe();
setInterval(() => {
  console.log('Init OK'); updateUI(); renderHelferListe();