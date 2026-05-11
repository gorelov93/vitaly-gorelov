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
{% assign years = pubs | map: "year" | uniq %}

{% for year in years %}
  <h2>{{ year }}</h2>
  {% for pub in pubs %}
    {% if pub.year == year %}
      <div class="entry">
        <p class="pub-title">{{ pub.title }}</p>
        <p class="pub-authors">{{ pub.authors | markdownify | remove: '<p>' | remove: '</p>' }}</p>
        <p class="pub-venue">{{ pub.venue }}</p>
        {% if pub.summary %}
          <p class="pub-summary">{{ pub.summary }}</p>
        {% endif %}
        {% if pub.image %}
          <div class="pub-figure">
            <img src="{{ '/assets/img/' | append: pub.image | relative_url }}" alt="{{ pub.title }}" loading="lazy">
          </div>
        {% endif %}
        <div class="pub-links">
          {% if pub.link %}<a href="{{ pub.link }}" target="_blank" rel="noopener">Journal</a>{% endif %}
          {% if pub.arxiv %}<a href="{{ pub.arxiv }}" target="_blank" rel="noopener">arXiv</a>{% endif %}
          {% if pub.pdf %}<a href="{{ pub.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>{% endif %}
        </div>
      </div>
    {% endif %}
  {% endfor %}
{% endfor %}
