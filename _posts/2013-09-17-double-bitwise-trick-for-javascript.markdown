---
layout: post
title:  "Double Bitwise Trick for JavaScript"
categories: javascript
comments: true
---

We already know that the bitwise NOT (~) operator will convert the 32 bit integer and flip each bit.

{% highlight javascript %}
var num = 00000000000000000000000000001001;
var flippedNum = ~num; // 11111111111111111111111111110110
{% endhighlight %}

