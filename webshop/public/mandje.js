// Functies om het mandje aan te passen.
//
// Deze functies staan in een apart bestand, los van app.js. app.js gebruikt
// document (de webpagina), en dat bestaat niet in Node. Dit bestand gebruikt
// geen document, dus de tests kunnen het gewoon importeren (zie test/mandje.test.js).
// De browser laadt het via import in app.js.

/**
 * Haalt één stuk van een product uit het mandje.
 * Zit er nog maar één stuk in, dan verdwijnt het product helemaal uit het mandje,
 * want de server weigert een regel met aantal 0 ("Ongeldig aantal").
 * Zit het product niet in het mandje, dan verandert er niets.
 *
 * @param {Map<string, number>} mandje  product-id -> aantal
 * @param {string} id                   het product waarvan je één stuk weghaalt
 */
function haalEenWeg(mandje, id) {
  const aantal = mandje.get(id) || 0;
  if (aantal === 0) return;
  if (aantal === 1) {
    mandje.delete(id);
  } else {
    mandje.set(id, aantal - 1);
  }
}

export { haalEenWeg };
