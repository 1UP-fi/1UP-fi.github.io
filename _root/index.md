---
title: "Index"
class: center
styles:
    - href: /css/anim.css
      media: "(prefers-reduced-motion: no-preference)"
---
![Logo](logo.svg){: style="height: 8rem; margin: auto;"}

# Welcome to 1UP.fi

Feel free to look around using the navigation at the top.<br>
If it's your first time here the [About](/about) page may be a good place to start.
{: style="margin-bottom: 0; text-wrap: balance"}

{% for post in site.posts limit:1 %}
## Latest Post: 
{: style="margin-bottom: 0"}
[<time datetime="{{ post.date | date_to_xmlschema }}">
    {{ post.date | date_to_string }}
</time> - {{ post.title }}]({{ post.url }})
{% endfor %}

