function sammleGras() {
      if (siloFuellstand + grasProKlick <= siloKapazitaet) {
        gras += grasProKlick;
        siloFuellstand += grasProKlick;
        xp += 5;
        levelUpCheck();
      }

    function kaufeHelfer() {
  if (gold >= 20 && genutzteFelder + 10 <= weideFelder) {
    gold -= 20;
    helferListe.push({ toolLevel: 1 });