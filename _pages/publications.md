---
layout: default
title: Publications
permalink: /publications/
---

<h1>Publications</h1>
<p class="lede">
  Selected publications since 2022. A complete list is on
  <a href="https://scholar.google.com/citations?user={{ site.social.scholar }}">Google Scholar</a>.
</p>

{% assign pubs = site.data.publications %}
{% assign pub_groups = pubs | group_by: "year" | sort: "name" | reverse %}
{% for group in pub_groups %}
<h2>{{ group.name }}</h2>
{% for pub in group.items %}
<div class="entry{% if forloop.first %} first{% endif %}">
<p class="pub-title">{{ pub.title }}</p>
<p class="pub-authors">{{ pub.authors | markdownify | remove: '<p>' | remove: '</p>' | strip }}</p>
<p class="pub-venue">{{ pub.venue }}</p>
{% if pub.summary %}<p class="pub-summary">{{ pub.summary }}</p>{% endif %}
{% if pub.image %}<div class="pub-figure"><img src="{{ '/assets/img/' | append: pub.image | relative_url }}" alt="{{ pub.title }}" loading="lazy"></div>{% endif %}
<div class="pub-links">{% if pub.link %}<a href="{{ pub.link }}" target="_blank" rel="noopener">Journal</a>{% endif %}{% if pub.arxiv %}<a href="{{ pub.arxiv }}" target="_blank" rel="noopener">arXiv</a>{% endif %}{% if pub.pdf %}<a href="{{ pub.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>{% endif %}</div>
</div>
{% endfor %}
{% endfor %}
