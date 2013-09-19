---
layout: post
title:  "JavaScript: Literals vs. Constructors Performance"
categories: javascript
comments: true
---

You probably already know that there are two main ways of initializing objects: the literal notation and the constructor notation. 

{% highlight javascript %}
// literal notation
var arr = [];
var obj = {};

// constructor notation
var arr = new Array();
var obj = new Object();
{% endhighlight %}

The two are definitely used for different types of cases. But when the object is used to simply store data, both seem to do the same job.

{% highlight javascript %}
// literal notation
// creates: Object {foo: "fighters", daft: "punk"}
var objWithLiteral = {
	foo: "fighters",
	daft: "punk"
};

// constructor notation
// creates: Object {foo: "fighters", daft: "punk"}
var objWithConstructor = new Object();
objWithConstructor.foo = "fighters";
objWithConstructor.daft = "punk";
{% endhighlight %}
In this case, which one should we prefer? And is there a reason to do so?

It turns out that the constructor notation is much more slower when considering performance issues. If the object is not designed to have any instances of it later on, using the literal notation will crunch the speed of your code better. You can check the performance differences that I made using jsPerf <a href="http://jsperf.com/literals-vs-constructors-performance">here</a>.

However, besides of these types of universal 