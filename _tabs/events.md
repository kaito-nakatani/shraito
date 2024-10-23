---
title: Events
layout: tab
leftblock: Schedule
---
(Feel free to where anything you'd like for all of the events. The attire listed below is just a suggestion in case you are looking for inspiration.)

{% for evt in site.evts %}
<h2> {{ evt.name }}</h2>
{{ evt.date |  date: "%-d %B %Y"}}
@ {{ evt.timerange }}
<a href="{{ evt.ical }}"> [ical] </a>
<div class="evt-details">
{{ evt.content }}
</div>
{% endfor %}