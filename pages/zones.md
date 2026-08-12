---
title: "Zones d'intervention"
permalink: /zones/
sous_titre: "Sarlat et alentours, dans un rayon d'environ une heure."
description: >-
  ML Clean Services intervient à Sarlat-la-Canéda et dans les alentours
  (rayon d'environ 1 h) : débarras, nettoyage et désinfection de logement.
  Bergerac, Brive, Périgueux, Gourdon, Cahors et communes du Périgord Noir.
---

Entreprise de proximité ancrée en Périgord Noir, nous intervenons à
Sarlat-la-Canéda et dans les communes situées dans un rayon d'environ une
heure de route. La visite d'évaluation est **gratuite dans toute notre zone**,
et notre implantation locale nous permet d'intervenir vite et d'assurer un
vrai suivi dans le temps.

<div class="grille-situations">
{% for z in site.zones %}
  <a class="carte-situation" href="{{ z.url | relative_url }}">
    {% include visuel.html theme="zone" titre=z.title classe="ratio-16-10" %}
    <div class="carte-corps">
      <h3>{{ z.title | replace: "Débarras et nettoyage à ", "" }}</h3>
      <p>{{ z.accroche }}</p>
      <span class="lien-fleche">Voir cette zone</span>
    </div>
  </a>
{% endfor %}
</div>

## Votre commune n'est pas listée ?

Ces pages couvrent les principales villes de notre secteur, mais nous
intervenons dans **toutes les communes du Périgord Noir et alentours**.
Si vous avez un doute sur notre présence près de chez vous,
[demandez-nous]({{ '/contact/' | relative_url }}) : nous vous répondons
rapidement et la visite d'évaluation reste gratuite.
