---
layout: post
title: "Octopress 發表文章的統計工具"
date: 2012-04-19 10:29
comments: true
categories: [octopress]
tags: [bash, sh]
---

今天心血來潮，想知道自己這幾年到底寫了多少文章，多少字數，於是寫了這麼一個小工具。

![Stats of My Blog Posts](/images/2012/2012-04-19-stats-of-my-blog-posts.png)

這小工具很簡單，按年份分別列出該年寫了幾篇文章，總共多少字數。由於 Octopress 的文章其實就是一個個 markdown 純文字檔，所以要做統計並不困難，我不用想盡辦法連到資料庫或是將網站匯出 XML 來做分析。不過這個工具使用到 *nix shell 環境，Linux 與 Mac OSX 的使用者可以無痛使用，Windows 的話可能就要安裝一下 cygwin 或其他類似套件了。

工具的代碼如下，使用前，請先自行修改代碼中 `SYEAR` 與 `POSTPATH` 這兩個變數，以符合自己的需求：

{%gist 2417859 blogstats.sh %}

附帶一提：字數的統計是直接使用 `wc -m`，也沒有去掉 YAML 檔頭，所以不是很精確，大概參考參考就好。