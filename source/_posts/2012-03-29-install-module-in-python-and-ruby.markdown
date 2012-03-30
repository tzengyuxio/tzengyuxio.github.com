---
layout: post
title: "Python 與 Ruby 的模組安裝"
date: 2012-03-29 08:39
comments: true
categories: [python, ruby]
---

其實這兩個語言的模組安裝都很簡單。不過我不是個成天都在安裝新玩意兒的人，偶爾因為業務需求或是心血來潮想要裝個模組，卻又忘了指令怎下，免不了得又得上網搜尋。

雖說資料不難找，但每次都問 google 也是折騰，索性自己記個筆記，將來若有需要時，翻自己筆記總比上網搜尋來得快速。

更重要的是，才不會因為上網問 google 然後**開一堆網頁邊看又繼續邊開連結搞到最後開了一大堆自己好像有興趣但其實跟原本問題一點也不相干的文章**。我真是太容易*分心*了。

## Python 的 easy_install

Python 的 easy_install 人如其名，真的很 easy。比方說我看到 [Markdown 2.1.1 : Python Package Index](http://pypi.python.org/pypi/Markdown) 這個套件想要安裝，我只要到終端機輸入下面指令就行了：

    $ easy_install markdown
    
要刪除模組的話則是輸入：

    $ easy_install -m markdown

easy_install 主要的功能就是安裝，如果需要進一步說明，可以參考

    $ easy_install --help

## Ruby 的 gem

相比之下，Ruby 的 gem 就不僅僅只是個安裝工具，它是個完整的**套件管理工具**。例如我想安裝一個叫 [toodledo](http://toodledo.rubyforge.org/toodledo/) 的套件，可以這麼輸入：

    $ gem install toodledo

或是指定版本號：

    $ gem install toodledo --version 1.3.8

移除的話是：

    $ gem uninstall toodledo

我想知道有沒有跟 markdown 相關的套件，我可以用如下方式尋找：

    $ gem list markdown --remote

如果沒有加上 `--remote`, 則會列出本機已經安裝的套件。

    $ gem list

更詳細的說明可以參考線上說明。

    $ gem help

## 在 Mac 上

上面這兩個工具程式在 Mac OS X 中都是預設已經安裝在系統中的，省了不少麻煩。安裝的過程如果有遇到權限問題，那麼就在上面所列的指令最前面加上 `sudo` 再執行就好了。