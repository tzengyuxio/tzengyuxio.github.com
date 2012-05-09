---
layout: post
title: "Octopress 調教筆記"
date: 2012-04-20 08:52
comments: true
categories: [雜筆, coding]
tags: [linkwithin, tag, ruby, octopress]
---

花了一個晚上沒睡覺，調整了一下這個 Octopress 的一些功能與設定。現在還懶得記詳細步驟，就先簡單寫個筆記吧，以防將來自己看 Source Repository 也看不出到底為什麼要這麼改。

<!-- more -->

### 一、加入 LinkWithin 功能

原本以為 Octopress 沒辦法加，不過實際嘗試後發現並不難。要修改的地方主要有 `source/_layouts/default.html` 和 `source/_layouts/post.html` 這兩個檔案。

### 二、文章下方分享功能的版面調整

Octopress 內建的 twitter, google plus, facebook 三項文章分享功能如果全部打開，會佔掉約 680px 左右的畫面寬度。當文章區塊的寬度小於這個數值時，facebook 的按鈕會跳到下一行。這邊可以透過修改 `source/_includes/post/sharing.html` 的方式來稍微縮減 facebook 區塊的寬度，以符合需求。

同區塊另外一個問題則是在預設版面中， twitter, google plus, facebook 三者按鈕的高度不同，尤其 facebook 的位置比較偏下。這邊我參考 [StackSocial][stacksocial] 頁面最下方區塊的作法，將三個按鈕改成 `ul → li` 格式。

### 三、加入標籤 (tag) 功能

這是花最多時間與腦力的一部分，尤其是我沒有 Ruby 基礎，好在 Ruby 的程式碼不難看懂，我雖然寫不出來，但是我看現有的 code 依樣畫葫蘆，一樣生出功能。這邊主要參考了 Octopress 內建的 Category Plugin，稍作修改，便得到了標籤功能。

透過這次修改，同時也對 [Jekyll][github] 所使用的 [Liquid Template System][github 2] 有更深入的了解。想想要整一個 Octopress 網站也真折騰，除了要懂 HTML, CSS, JavaScript 這些基本的之外，還得會摸 Ruby, Sass, Liquid Template，滿滿都是術語與新東西，真不是件簡單任務。

話說既然加入了標籤功能，接下來就是找個時間好好整理每篇文章的「分類」和「標籤」了……嗯，這讓我想到一句老話：

> 要改的東西太多，那就改天吧。

[github]: https://github.com/mojombo/jekyll
[github 2]: http://wiki.github.com/shopify/liquid/liquid-for-designers
[stacksocial]: https://stacksocial.com/