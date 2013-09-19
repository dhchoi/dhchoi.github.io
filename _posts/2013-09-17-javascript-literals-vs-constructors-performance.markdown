---
layout: post
title:  "JavaScript: Literals vs. Constructors Performance"
categories: javascript
comments: true
---

You've probably already known that there are two main ways of initializing objects: the literal notation and the constructor notation. The two are definitely used for different types of cases. But when the object is used to simply store data, both seem to do the same job. In this case, which one should we prefer? And is there a reason to do so?

{% highlight javascript %}
// literal notation
var arr = [];
var obj = {};

// constructor notation
var arr = new Array();
var obj = new Object();
{% endhighlight %}

It turns out that the constructor notation is much more slower when considering performance issues. If you don't need to make any instances of the object later on, using the literal notation will save you much more time. You can check the performance differences that I made using jsPerf <a href="http://jsperf.com/literals-vs-constructors-performance">here</a>.