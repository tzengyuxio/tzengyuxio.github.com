--- 
layout: post
title: "More on Google Authorship"
date: 2011-08-09 01:17:00 +08:00
comments: true
categories: [雜筆, coding]
tags: [google]
---

在[前一篇文章](/blog/2011/08/google-authorship/)中筆者介紹了 Google Authorship，並且也針對 Blogger 的使用者說明該如何設定來替自己的文章與個人檔案建立連結。今天讓我們更進一步來看看 Google Authorship 的運作機制，以及非 Blogger 的使用者應該如何設定 Google Authorship 來幫助自己的文章曝光。

<a href="http://4.bp.blogspot.com/-eY0vKmYBfVo/TkAdC64IdKI/AAAAAAAAAcU/hEdDx2YEYdg/s1600/google_auth.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="184" src="http://4.bp.blogspot.com/-eY0vKmYBfVo/TkAdC64IdKI/AAAAAAAAAcU/hEdDx2YEYdg/s400/google_auth.png" width="400" /></a>

<!-- more -->

目前與 Google Authorship 相關的官方文件有這兩篇，以下的內容均以這兩篇為主：

- [舊版作法](http://www.google.com/support/webmasters/bin/answer.py?answer=1229920)，使用 `<a href="url" rel="author">` 語法
- [新版作法](http://www.google.com/support/webmasters/bin/answer.py?answer=1408986)，使用 `<a href="url?rel=author">` 語法（08/05/2011更新）

----

讓我們先簡單看看舊作法的機制，之後再進入新版作法的實際說明。舊的作法將網站分成兩大類，單一作者（例如個人網誌）或是複數作者（例如新聞網站）。

在單一作者的網站中，只要在每篇文章（Content）裡加入下面形式的連結：

``` html
<a rel=”author” href=”[profile_url]“>About Matt Cutts</a>
<!-- 其中[profile_url] 類似這樣： -->
<!-- https://plus.google.com/109412257237874861202 -->
```

然後在 Google Profile（通常是自己的 Google+ ）的「關於」頁面加入自己網誌的連結即可。關連的形式如下圖：

<a href="http://1.bp.blogspot.com/-8bGcC2QfT5I/TkAT1Oi5lII/AAAAAAAAAcM/mYxc4rjtsOc/s1600/link1.gif" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-8bGcC2QfT5I/TkAT1Oi5lII/AAAAAAAAAcM/mYxc4rjtsOc/s1600/link1.gif" /></a>

在多重作者的網站中，則先要讓自己寫的文章（Content）中有連結以 `rel="author"` 指向自己位於該網站的作者頁面（Author Page）；然後作者頁面有連結以 `rel="me"` 指向自己的 Google Profile。關連的形式如下圖：

<a href="http://2.bp.blogspot.com/-ZEFIg-hDuGc/TkAT1VFwfmI/AAAAAAAAAcQ/kdeLV1bDVec/s1600/link2.gif" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://2.bp.blogspot.com/-ZEFIg-hDuGc/TkAT1VFwfmI/AAAAAAAAAcQ/kdeLV1bDVec/s1600/link2.gif" /></a>

之所以會有這兩種差異，我猜是考慮到多作者平台的環境中，作者本身可能沒有權限對文章頁面做 HTML 的屬性修改，因此先讓文章與作者頁面建立連結，作者頁面再與 Google Profile 建立連結。

----

不過這樣的作法太過麻煩，因此又有了改進過後的新作法。新作法中，要替自己的文章（Content）與 Google Profile 建立關連，首先在每個文章頁面加入以下形式的 Google Profile 的連結：

``` html
<a href=”[profile_url]?rel=author“>Google+</a>
<!-- 官方說明提到，連結文字可以使用任意文字，但必須以 + 號作結尾。 -->
```

接著在 Google Profile 的「關於」頁面加入網站連結，不用針對每一篇文章，只要針對首頁即可。關連的形式如同舊做法的單人網站，不過因為需要修改的僅是 `<a>` 標籤內的網址本身，而非 `rel` 屬性，因此對大多數多重作者的網站也適用。當然，要先以 `rel="author"` 指向作者頁面再與 Google Profile 建立關連也是可以的。

對於 WordPress、痞客邦等其他 Blog 使用者而言，要在每篇文章中加入上述連結，不見得真的要在文章中加入，只要在文章出現的頁面中有該連結即可。有幾個地方適合加入自己的 Google Profile 連結：

- 每篇共通的頁首、頁尾，或是頁面小工具（Widgets）
- 文章結尾處，例如把作者名字加上 Google Profile 連結
- 使用作者頁面（Author Page）的方式

至於[前篇文章](/blog/2011/08/google-authorship/)中的做法，便是利用 Blogger 本身會替每篇文章加上 `rel="author"` 連結到 [Blogger Profile 頁面](http://www.blogger.com/profile/14386691974182836637)的特性，如此一來，只要再替 Google Profile 與 Blogger Profile 兩者建立關連即可。
