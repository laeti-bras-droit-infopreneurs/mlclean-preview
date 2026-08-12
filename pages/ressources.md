---
title: "Ressources & conseils"
permalink: /ressources/
sous_titre: "Comprendre les situations, connaître les aides, savoir comment agir : nos conseils pratiques."
description: >-
  Conseils pratiques de ML Clean Services : aider un proche atteint du
  syndrome de Diogène, comprendre les aides financières, savoir comment se
  déroule un débarras. Guides gratuits.
---

Familles, proches, professionnels : ces guides pratiques rassemblent ce que
notre expérience de terrain nous a appris. Ils sont là pour vous aider à
comprendre, à agir — et à savoir quand passer le relais à des professionnels.

<div class="grille-situations">
{% for article in site.ressources %}
  <a class="carte-situation" href="{{ article.url | relative_url }}">
    <h3>{{ article.title }}</h3>
    <p>{{ article.accroche }}</p>
    <span class="lien-fleche">Lire le guide</span>
  </a>
{% endfor %}
</div>

## Une question qui n'est pas traitée ici ?

Consultez notre [FAQ]({{ '/faq/' | relative_url }}) ou
[posez-nous directement votre question]({{ '/contact/' | relative_url }}) :
nous répondons volontiers, même quand il ne s'agit pas (encore) d'un devis.
