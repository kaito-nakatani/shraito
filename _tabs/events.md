---
title: Events
layout: tab
---

{% for evt in site.evts %}
<h2>{{ evt.name }}</h2>
{{ evt.date |  date: "%-d %B %Y"}}
@ {{ evt.timerange }}
<a href="{{evt.ical}}"> [ical] </a>

<div class="evt-details">
{{ evt.content }}
</div>
{% endfor %}