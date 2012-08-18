--- 
layout: post
title: "Ruby on Rails 與 MySQL 的 Unicode 編碼"
date: 2006-01-21 13:19:00 +08:00
comments: true
categories: [雜筆, coding]
tags: [ruby, ror, mysql, unicode, utf8]
---

Ruby on Rails 是預設使用 Unicode 的；MySQL 對於 Unicode 的支援也相當完整－－照理說兩者合作起來應該琴瑟和鳴才是。

<!-- more -->

然而我把 RoR 與 MyQL 兜在一起之後，即便已將 MySQL 文字編碼設為 `UTF-8 Unicode (utf8)`，MySQL 連線校對設為 `utf8_general_ci`，編碼的問題還是讓人傷透腦筋－－那些在 phpMyAdmin 中所 INSERT 進去的資料，在 RoR 的頁面中總是亂碼一串；而經由 RoR 頁面所輸入的資料，不僅無法透過 phpMyAdmin 看到正確編碼，甚至不能將資料正確地存入資料庫中。

這樣子的問題會出現在 MySQL 4.1 （及以後）的版本，因為 MySQL 在 4.1 版之後大幅強化了對各種編碼的支援。如果安裝的 Rails 是 1.0 之後的版本，解決問題的方法只要在 `config/database.yml` 中加入一行設定即可：

    development:
      adapter: mysql
      database: example_development
      encoding: utf8    # add this line
      username: root
      password:

如果 Rails 是 1.0 之前或者用的資料庫是 PostgreSQL 的話呢？懶得寫了，直接上 [Rails 的 Wiki](http://wiki.rubyonrails.com/rails/pages/HowToUseUnicodeStrings) 上看說明吧。

----

<span style="color:gray;">參考自：[HowToUseUnicodeString in Ruby on Rails](http://wiki.rubyonrails.com/rails/pages/HowToUseUnicodeStrings)</span>