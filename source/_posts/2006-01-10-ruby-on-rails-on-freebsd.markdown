--- 
layout: post
title: "［安裝］Ruby on Rails on FreeBSD"
date: 2006-01-10 12:34:00 +08:00
comments: true
categories: [雜筆, coding]
tags: [ruby, ror, freebsd]
---

### Step 1: Install Ruby

先前不曉得裝什麼軟體就一併裝好了，所以跳過。

<!-- more -->

### Step 2: Install RubyGems

這是等一下用來安裝 Rails 的工具，在 FreeBSD 下用 ports 安裝，輕鬆方便。

    [freebsd] /usr/ports/devel/ruby-gems> make install clean

### Step 3: Install Rails

照[官方網站](http://www.rubyonrails.org/down)上的描述，同樣一行指令搞定。

    [freebsd] ~> gem install rails --include-dependencies

註：我連試了兩次指令都執行到一半失敗，可能是網路 timeout 關係，第三次就順利成功了。

### Step 4: 建立應用程式

基本上這也是照著前一個網頁的指示作。

    [freebsd] ~> rails /path/to/my/new/application
    [freebsd] ~> cd /path/to/my/new/application
    [freebsd] ~> ruby script/server

接下來開啟網址 `http://0.0.0.0:3000` 就能夠看到關於 RoR 的說明了。  
說明頁面的最底下有 Getting Started，可以開始寫 RoR 的程式囉！

----

參考網址：

1. [Download Ruby on Rails](http://www.rubyonrails.org/down)
2. [Rolling with Ruby on Rails](http://www.onlamp.com/pub/a/onlamp/2005/01/20/rails.html?page=1)