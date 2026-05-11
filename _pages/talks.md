---
layout: default
title: Talks
permalink: /talks/
---

<h1>Talks &amp; Communications</h1>
<p class="lede">Conference talks and invited contributions since 2022.</p>

{% assign talks = site.data.talks %}
{% assign years = talks | map: "year" | uniq %}

{% for year in years %}
  <h2>{{ year }}</h2>
  {% for t in talks %}
    {% if t.year == year %}
      <div class="entry">
        <p class="pub-title">
          <span class="kind {{ t.kind }}">{{ t.kind }}</span>
          {{ t.title }}
        </p>
        <p class="pub-venue">{{ t.venue }}</p>
      </div>
    {% endif %}
  {% endfor %}
{% endfor %}
