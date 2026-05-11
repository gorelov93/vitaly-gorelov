---
layout: default
title: Students
permalink: /students/
---

<h1>Students</h1>
<p class="lede">PhD students and Master interns I'm currently supervising, or have supervised.</p>

{% for s in site.data.students %}
  <div class="card">
    <h3>{{ s.name }}</h3>
    <p class="meta">{{ s.role }} · {{ s.period }}</p>
    <p>{{ s.project }}</p>
    {% if s.funding %}<span class="funding">{{ s.funding }}</span>{% endif %}
  </div>
{% endfor %}

<h2>Open positions</h2>
<p>
  I'm happy to hear from motivated Master students looking for internships, and
  from prospective PhD candidates interested in many-body methods for materials.
  Get in touch by email.
</p>
