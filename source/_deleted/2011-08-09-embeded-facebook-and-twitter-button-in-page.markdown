---
layout: post
title: "在網頁中嵌入 Facebook 與 twitter 社交按鈕"
date: 2011-08-09 19:02
comments: true
categories: html
---

Facebook 常見的社交按鈕有兩種：**Facebook Share** 與 **Facebook Like**，不過前者已經不在 Facebook 官方提供的 Plugin 列表中，連到[舊的 Facebook Share 說明頁面][1]會自動導向 [Facebook Like 的說明頁面][2]，看起來 Facebook 似乎有意以 Like 取代 Share 的地位。雖然如此，兩種功能還是有其不同的定位，目前也都能夠共存並用。關於兩者差異的說明，可以參考[這篇文章（英文）][3]。下面則是 Facebook 與 twitter 各種社交功能與外觀的顯示範例與分享代碼。

[1]: http://developers.facebook.com/docs/share
[2]: http://developers.facebook.com/docs/reference/plugins/like/
[3]: http://daggle.com/facebook-button-facebook-share-keeping-1792

## Facebook Share 的分享代碼

### 按鈕配置

<a href="http://www.facebook.com/sharer.php" name="fb_share" type="button_count">分享</a>

<pre class="prettyprint"><code>&lt;a name="fb_share" type="button_count" href="http://www.facebook.com/sharer.php"&gt;分享&lt;/a&gt;&lt;script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"&gt;&lt;/script&gt;
</code></pre>

### 方塊配置

<a href="http://www.facebook.com/sharer.php" name="fb_share" type="box_count">分享</a>

<pre class="prettyprint"><code>&lt;a name="fb_share" type="box_count" href="http://www.facebook.com/sharer.php"&gt;分享&lt;/a&gt;&lt;script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"&gt;&lt;/script&gt;
</code></pre>

<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript">
</script>

## Facebook Like 的分享代碼

### 標準配置

<iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://www.facebook.com/plugins/like.php?app_id=147491145332691&amp;href=http://coder.aqualuna.me/2011/08/facebook-twitter.html&amp;send=false&amp;layout=standard&amp;width=450&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font&amp;height=20" style="border: none; height: 20px; overflow: hidden; width: 450px;"></iframe>

<pre class="prettyprint"><code>&lt;iframe allowTransparency='true' expr:src='&amp;quot;http://www.facebook.com/plugins/like.php?href=&amp;quot; + data:post.url + &amp;quot;&amp;amp;send=false&amp;amp;layout=standard&amp;amp;width=450&amp;amp;show_faces=false&amp;amp;action=like&amp;amp;colorscheme=light&amp;amp;font=tahoma&amp;amp;height=20&amp;quot;' frameborder='0' scrolling='no' style='border:none; overflow:hidden; width:450px; height:20px;'&gt;&lt;/iframe&gt;
</code></pre>

### 按鈕配置

<iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://www.facebook.com/plugins/like.php?app_id=147491145332691&amp;href=http://coder.aqualuna.me/2011/08/facebook-twitter.html&amp;send=false&amp;layout=button_count&amp;width=90&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font&amp;height=20" style="border: none; height: 20px; overflow: hidden; width: 90px;"></iframe>

<pre class="prettyprint"><code>&lt;iframe allowTransparency='true' expr:src='&amp;quot;http://www.facebook.com/plugins/like.php?href=&amp;quot; + data:post.url + &amp;quot;&amp;amp;send=false&amp;amp;layout=button_count&amp;amp;width=90&amp;amp;show_faces=false&amp;amp;action=like&amp;amp;colorscheme=light&amp;amp;font=tahoma&amp;amp;height=20&amp;quot;' frameborder='0' scrolling='no' style='border:none; overflow:hidden; width:90px; height:20px;'&gt;&lt;/iframe&gt;
</code></pre>

### 方塊配置

<iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://www.facebook.com/plugins/like.php?app_id=147491145332691&amp;href=http://coder.aqualuna.me/2011/08/facebook-twitter.html&amp;send=false&amp;layout=box_count&amp;width=90&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font&amp;height=63" style="border: none; height: 63px; overflow: hidden; width: 90px;"></iframe>

<pre class="prettyprint"><code>&lt;iframe allowTransparency='true' expr:src='&amp;quot;http://www.facebook.com/plugins/like.php?href=&amp;quot; + data:post.url + &amp;quot;&amp;amp;send=false&amp;amp;layout=box_count&amp;amp;width=90&amp;amp;show_faces=false&amp;amp;action=like&amp;amp;colorscheme=light&amp;amp;font=tahoma&amp;amp;height=63&amp;quot;' frameborder='0' scrolling='no' style='border:none; overflow:hidden; width:90px; height:63px;'&gt;&lt;/iframe&gt;
</code></pre>

## twitter 的分享代碼

### 水平按鈕
<a class="twitter-share-button" href="http://twitter.com/share">Tweet</a>

<pre class="prettyprint"><code>&lt;script src='http://platform.twitter.com/widgets.js' type='text/javascript'/&gt;
&lt;a class='twitter-share-button' href='http://twitter.com/share' expr:data-url='data:post.url' expr:data-text='data:post.title'&gt;Tweet&lt;/a&gt;
</code></pre>

### 垂直按鈕

<a class="twitter-share-button" data-count="vertical" href="http://twitter.com/share">Tweet</a>

<pre class="prettyprint"><code>&lt;script src='http://platform.twitter.com/widgets.js' type='text/javascript'/&gt;
&lt;a class='twitter-share-button' href='http://twitter.com/share' expr:data-url='data:post.url' expr:data-text='data:post.title' data-count='vertical'&gt;Tweet&lt;/a&gt;
</code></pre>

## 參考資料

- [Like Button - Facebook Developers][ref1]
- [Tweet Button | Twitter Developers][ref2]
- [Facebook Like Button Vs. Facebook Share: Why I’m Keeping Both][ref3]
- [[Blogger] 臉書的「分享」、「讚」推文按扭語法分享-靖 ● 技場][ref4]
- [在Blogger裝置具有計數功能的Facebook分享按鈕 | 哲生博客 Jason Blog][ref5]
- [在Blogger嵌入Facebook的讚(Like)按鈕 | 哲生博客 Jason Blog][ref6]
- [[教學] Blogger當中加入facebook 讚！ Add facebook like button in Blogger template][ref7]
- [Official Twitter Share Button (Tweet Button) for Blogger ~ Blogger Widgets][ref8]

[ref1]: http://developers.facebook.com/docs/reference/plugins/like/
[ref2]: https://dev.twitter.com/docs/tweet-button
[ref3]: http://daggle.com/facebook-button-facebook-share-keeping-1792
[ref4]: http://jinnsblog.blogspot.com/2010/12/facebook-share-link-button-widget.html
[ref5]: http://jasonblog.tw/2010/05/add-facebook-share-button-on-blogger.html
[ref6]: http://jasonblog.tw/2010/04/add-facebook-like-button-on-your.html
[ref7]: http://clonn.blogspot.com/2011/05/bloggerfacebook-add-facebook-like.html
[ref8]: http://www.bloggerplugins.org/2010/08/twitter-share-buttons-for-blogger-tweet.html