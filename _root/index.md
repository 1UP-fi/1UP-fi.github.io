---
title: "Index"
permalink: /
styles:
    - href: /styles/anim.css
      media: "(prefers-reduced-motion: no-preference)"
    - href: /styles/index.css
---
{% include inline-logo.svg %}

# Welcome to 1UP.fi

Feel free to look around using the navigation at the top.
If it's your first time here the [About](/about) page may be a good place to start.

{% for post in site.posts limit:1 %}
## Latest Post: 
[<time datetime="{{ post.date | date_to_xmlschema }}">
    {{ post.date | date_to_string }}
</time> - {{ post.title }}]({{ post.url }})
{% endfor %}
