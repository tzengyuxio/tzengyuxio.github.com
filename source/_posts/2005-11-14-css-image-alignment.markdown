--- 
layout: post
title: "［CSS］圖文對齊排列"
date: 2005-11-14 01:34:00 +08:00
comments: true
categories: css
---

當圖文並列時，若要讓圖片能夠對齊排列，而不是呈現出梯狀的分佈。<br />可以使用下列語法：<br /><code><br />&lt;img src="http://where.image.is/picture-01.jpg" style="float:left"&gt;<br />文字段落一&lt;br&gt;<br /><br />&lt;img src="http://where.image.is/picture-02.jpg" style="float:left; clear:left"&gt;<br />文字段落二&lt;br&gt;<br /></code><br />重點在於第二個 img 內的 "clear:left"<br />這個屬性的意思是<span style="font-weight: bold; color: rgb(255, 102, 102);">如果左邊有浮動元件的話，此元件便移到該浮動元件下方</span>。<br /><br />而 "float:left" 則是將所屬元件指定為浮動性質。<br /><br />下一篇便是應用範例。
