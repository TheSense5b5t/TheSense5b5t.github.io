---
layout: default
title: Members
permalink: /members
---
<h1>Members</h1>
<table>
    <tr>
        <th>Name</th>
        <th>IGN</th>
        <th>GitHub (If applicable)</th>
    </tr>
    {% for member in site.data.members %}
    <tr>
        <td>{{ member.name }}</td>
        <td>{{ member.ign }}</td>
        {% if member.github %}
        <td>
            <a href="https://github.com/{{ member.github }}">{{ member.github }}</a>
        </td>
        {% endif %}
    </tr>
    {% endfor %}
</table>