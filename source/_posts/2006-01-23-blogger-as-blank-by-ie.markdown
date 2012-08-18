--- 
layout: post
title: "［解決］以 IE 瀏覽 Blogger.com 時出現空白網頁的問題"
date: 2006-01-23 01:14:00 +08:00
comments: true
categories: [雜筆, coding]
tags: [ie, blogger, html]
---

<span style="color:gray;">參考自：[Lordcolus’s Blog: 避免以IE瀏覽Blogger.com時出現空白網頁](http://lordcolus.blogspot.com/2005/04/iebloggercom.html)</span>

這篇的用意有二：

1. 紀錄以 IE 開啟 blogspot.com 會出現空白頁這問題的解決方式。簡言之就是將範本中的 `<$BlogMetaData$>` 移到 `<title>` 之前。
2. 測試一下 **BlogThis** 的功能。這篇是由上述網頁下方的 <u>Create a Link</u> 連結直接產生的。