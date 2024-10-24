---
title: Events
layout: default
---

{% include navbar.html %}

<div class="center">
<h1> {{page.title}} </h1>
</div>

(Feel free to where anything you'd like for all of the events. The attire listed below is just a suggestion in case you are looking for inspiration.)

{% for evt in site.evts %}
<div class="block" style="--accent:{{evt.accent}}">
<div class="sideways"><h1>
    {{ evt.leftblock }}
</h1></div>

<h2> {{ evt.name }}</h2>
<span class="timing">
{{ evt.date |  date: "%-d %B %Y"}}
@ {{ evt.timerange }}
<span class="cal-links">
    <a href="{{ evt.ical }}"> [cal] </a>
</span>
</span>
<div class="attire">Attire: {{ evt.attire }}</div>
<div class="evt-details">
{{ evt.content }}
</div>
</div>
{% endfor %}