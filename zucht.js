let gras = 0, gold = 0, xp = 0, level = 1;
    let grasProKlick = 5, siloKapazitaet = 100, siloFuellstand = 0;
let kühe = 0, kälber = 0;
    let helferListe = [], weideFelder = 100, genutzteFelder = 0;
    let guelle = 0;
      const verkaufbareMenge = Math.floor(gras / 10);
      const nextLevelXp = level * 50;
      let kosten = 0;
const quests = [
  const quest = quests.find(q => q.id === questId);
  const container = document.getElementById("questContainer");
    const div = document.createElement("div");
let zuchtKaelber = [];
let kuhListe = []; // Beispielstruktur für erwachsene weibliche Tiere
let bullenListe = []; // Männliche Bullen
const samenTypen = {
  const zufallswert = () => Math.round(50 + Math.random() * 50);
  const attribute = {
  const kuh = kuhListe.find(k => k.id === kuhId);
  const vater = bullenListe[Math.floor(Math.random() * bullenListe.length)] || {};
  const erfolgreich = Math.random() < samenTypen[samensorte].erfolg;
  const kalb = generiereKalb(kuh, vater, samensorte);
  const div = document.getElementById("zuchtKälberListe");
  const div = document.getElementById("helferListeUI");
  let passiv = helferListe.reduce((sum, h) => sum + h.toolLevel, 0);

function generiereKalb(mutter, vater, samenart) {
    milchleistung: Math.round((mutter.milchleistung + (vater.milchleistung || 0)) / 2 + Math.random() * 10),
    futterverwertung: Math.round((mutter.futterverwertung + (vater.futterverwertung || 0)) / 2),
    fleischqualitaet: Math.round((mutter.fleischqualitaet + (vater.fleischqualitaet || 0)) / 2 + Math.random() * 5),
    geburtenrate: mutter.geburtenrate || 0,
    zwillinge: Math.random() < 0.1,
    drillinge: Math.random() < 0.02,
    geschlecht: Math.random() < 0.5 ? 'm' : 'w',
    alter: 0,
    gesundheit: 100,
    rasse: mutter.rasse,
    genetik: String.fromCharCode(65 + Math.floor(Math.random() * 6)),
    fruchtbarkeit: zufallswert(),
    name: "Kalb #" + (zuchtKaelber.length + 1),
    farbe: "braun",
    markierung: Math.random() < 0.05 ? "weiße Stirn" : null,
    sichtbar: false
  };

function besameKuh(kuhId, samensorte = "standard") {
  if (!kuh || gold < samenTypen[samensorte].kosten) return alert("Nicht genug Gold oder Kuh nicht gefunden.");
  gold -= samenTypen[samensorte].kosten;

function wachseKaelber() {
  zuchtKaelber.forEach(kalb => {
    kalb.alter += 1;
    if (kalb.alter >= 15) {
      if (kalb.geschlecht === "w") kuhListe.push(kalb);
      else bullenListe.push(kalb);
    }

function zeigeZuchtKaelber() {
  div.innerHTML = "";
  zuchtKaelber.forEach((k, i) => {
    div.innerHTML += `
      <div class='section'>
        <p><strong>${k.name}</strong> (${k.alter} Monate, ${k.geschlecht === 'w' ? '🐮' : '🐂'})</p>