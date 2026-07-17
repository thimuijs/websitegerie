/* Gerie's Visspecialiteiten — script.js
   1. Hamburgermenu
   2. "Vandaag te vinden in…"-blok (op basis van dag van de week)
   3. Lucide-iconen initialiseren
*/
(function () {
  'use strict';

  /* ---- 1. Hamburgermenu ---- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    });
  }

  /* ---- 2. Vandaag-blok ---- */
  // getDay(): 0 = zondag … 6 = zaterdag
  var LOCATIONS = {
    3: {
      day: 'Woensdag',
      place: 'Hattem',
      spot: 'Weekmarkt',
      hours: '10:30 – 17:00',
      url: 'locaties/hattem/index.html'
    },
    4: {
      day: 'Donderdag',
      place: 'Bunschoten-Spakenburg',
      spot: 'Bij Albert Heijn, Tuinfluiter',
      hours: '10:00 – 18:30',
      url: 'locaties/spakenburg-albert-heijn/index.html'
    },
    5: {
      day: 'Vrijdag',
      place: 'Rijsbergen',
      spot: 'Bij PLUS Van Eekelen',
      hours: '10:30 – 17:30',
      url: 'locaties/rijsbergen/index.html'
    },
    6: {
      day: 'Zaterdag',
      place: 'Bunschoten-Spakenburg',
      spot: 'Bij de Vomar',
      hours: '10:00 – 14:00',
      url: 'locaties/spakenburg-vomar/index.html'
    }
  };

  var todayEl = document.getElementById('today-block');
  if (todayEl) {
    var dayIndex = new Date().getDay();
    var loc = LOCATIONS[dayIndex];
    var html;

    if (loc) {
      // Woensdag t/m zaterdag: toon de locatie van vandaag
      html =
        '<span class="eyebrow">Vandaag te vinden in</span>' +
        '<p class="today-day">' + loc.place + '</p>' +
        '<p class="text-muted" style="margin-bottom:0">' + loc.spot + '</p>' +
        '<div class="today-meta">' +
          '<span><i data-lucide="clock" class="icon icon-sm" aria-hidden="true"></i> ' + loc.hours + '</span>' +
          '<span><i data-lucide="map-pin" class="icon icon-sm" aria-hidden="true"></i> ' + loc.day + '</span>' +
        '</div>' +
        '<a class="btn btn-ghost" href="' + loc.url + '">Bekijk deze locatie' +
          ' <i data-lucide="chevron-right" class="icon icon-sm" aria-hidden="true"></i></a>';
    } else {
      // Zondag t/m dinsdag: eerstvolgende locatie is woensdag Hattem
      var next = LOCATIONS[3];
      html =
        '<span class="eyebrow">Vandaag zijn we er niet bij</span>' +
        '<p class="today-day">Woensdag staan we weer in Hattem</p>' +
        '<div class="today-meta">' +
          '<span><i data-lucide="clock" class="icon icon-sm" aria-hidden="true"></i> ' + next.hours + '</span>' +
          '<span><i data-lucide="map-pin" class="icon icon-sm" aria-hidden="true"></i> ' + next.spot + '</span>' +
        '</div>' +
        '<a class="btn btn-ghost" href="' + next.url + '">Bekijk deze locatie' +
          ' <i data-lucide="chevron-right" class="icon icon-sm" aria-hidden="true"></i></a>';
    }

    todayEl.innerHTML = html;
  }

  /* ---- 3. Lucide-iconen ---- */
  function initIcons() {
    if (window.lucide) { window.lucide.createIcons(); }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIcons);
  } else {
    initIcons();
  }
})();
