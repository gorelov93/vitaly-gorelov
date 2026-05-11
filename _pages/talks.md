---
layout: default
title: Talks
permalink: /talks/
---

<h1>Talks &amp; Communications</h1>
<p class="lede">Conference talks and invited contributions since 2022.</p>

{% assign talks = site.data.talks %}
{% assign talk_groups = talks | group_by: "year" | sort: "name" | reverse %}
{% for group in talk_groups %}
<h2>{{ group.name }}</h2>
{% for t in group.items %}
<div class="entry{% if forloop.first %} first{% endif %}">
<p class="pub-title"><span class="kind {{ t.kind }}">{{ t.kind }}</span> {{ t.title }}</p>
<p class="pub-venue">{{ t.venue }}</p>
</div>
{% endfor %}
{% endfor %}
