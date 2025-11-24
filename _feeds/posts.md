---
description: "This page lists all the posts that have been written for 1UP.fi."
---
# Posts

Here you can find all the posts that have been written thus far;<br>
Alternatively, you can [subscribe](feed:{{ '/feed.xml' | absolute_url }})
with your aggregator of choice.

{% for post in site.posts %}
- ## [{{ post.title }}]({{ post.url }})
  <p>{{ post.date | date_to_string }} - <a href="{{site.data.authors[post.author].url}}">{{post.author}}</a></p>
  {{post.excerpt | strip_html}}
{% endfor %}
{% if site.posts == empty %}
Nothing here yet!
{% endif %}
