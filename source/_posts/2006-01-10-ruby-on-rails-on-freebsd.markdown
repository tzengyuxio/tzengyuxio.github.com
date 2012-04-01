--- 
layout: post
title: "［安裝］Ruby on Rails on FreeBSD"
date: 2006-01-10 12:34:00 +08:00
comments: true
categories: [ruby, freebsd]
---

<span style="font-weight: bold;">Step 1: Install Ruby</span><br /><br />先前不曉得裝什麼軟體就一併裝好了，所以跳過。<br /><br /><span style="font-weight: bold;">Step 2: Install RubyGems</span><br /><br />這是等一下用來安裝 Rails 的工具，在 FreeBSD 下用 ports 安裝，輕鬆方便。<br /><code><br />[freebsd] /usr/ports/devel/ruby-gems> make install clean</code><br /><br /><span style="font-weight: bold;">Step 3: Install Rails</span><br /><br />照<a href="http://www.rubyonrails.org/down">官方網站</a>上的描述，同樣一行指令搞定。<br /><code><br />[freebsd] ~> gem install rails --include-dependencies</code><br /><br />註：我連試了兩次指令都執行到一半失敗，可能是網路 timeout 關係，第三次就順利成功了。<br /><br /><span style="font-weight: bold;">Step 4: 建立應用程式</span><br /><br />基本上這也是照著前一個網頁的指示作。^_^<br /><code><br />[freebsd] ~> rails /path/to/my/new/application<br />[freebsd] ~> cd /path/to/my/new/application<br />[freebsd] ~> ruby script/server<br /></code><br />接下來開啟網址 <span style="color: rgb(51, 51, 255);">http://0.0.0.0:3000</span> 就能夠看到關於 RoR 的說明了。<br />說明頁面的最底下有 Getting Started，可以開始寫 RoR 的程式囉！<br /><br /><hr />參考網址：<br />[1] <a href="http://www.rubyonrails.org/down">Download Ruby on Rails</a><br />[2] <a href="http://www.onlamp.com/pub/a/onlamp/2005/01/20/rails.html?page=1">Rolling with Ruby on Rails</a>
