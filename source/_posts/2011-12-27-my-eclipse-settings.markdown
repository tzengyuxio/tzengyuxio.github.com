--- 
layout: post
title: "我的 Eclipse 初始設定調教"
date: 2011-12-27 07:30:00 +08:00
categories: [coding]
tags: [eclipse, zenburn, colorscheme]
---

- <span style="color:red;">12/30 更新：追加了行號、跳格字元等相關項目</span>

這篇文章是[〈Eclipse 安裝筆記〉](/blog/2011/12/26/eclipse-setup-note/)系列之一，算是個人的安裝過程紀錄。以下是安裝時的環境參考：

- 作業系統：Mac OS X 10.7.2
- 程式版本：Eclipse Indigo 3.7.1,IDE for Java Developers

<!-- more -->

雖說初始設定調教，不過其實要改的地方也不多。現在對於工具的想法我是抱持著盡量不要改太多，以免花太多時間在調整工具上。

以前在不同的軟體間，可能還會改些快速鍵，希望跨不同的軟體時有一致的快速鍵操作，現在都直接讓自己適應。畢竟最常用的快速鍵：剪下、複製、貼上、存檔，所佔用的使用比率高達八成，而這些操作的快速鍵幾乎各軟體平台適用，這就夠了。剩下的[查查 cheat sheet 吧](/blog/2011/07/30/eclipse-common-keyboard-shortcuts/)，反正真的常用的一定會讓身體記起來的。

所以要做的設定調整很簡單，就是**配色**、**編碼**、**行號**、**字型**和**跳格字元**。就這樣。

## 配色 ##

關於配色我習慣用 [Zenburn](http://slinky.imukuppi.org/zenburn/)，這組配色採用低對比色，看上去很舒服，以暗色為背景，看久了眼睛也比較不會累。基本上，只要支援 Color Syntax 的編輯器，幾乎都可以找到 zenburn 的配色腳本。

要使用 zenburn, 只要安裝 [Eclipse Color Theme](http://marketplace.eclipse.org/content/eclipse-color-theme)，之後就可以在「偏好設定」中指定 zenburn 的配色了。

<a href="http://4.bp.blogspot.com/-NiL2SO1-6fk/TvkACwIt5nI/AAAAAAAAJGY/L9UowM5D3IY/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-12-26+%25E4%25B8%258B%25E5%258D%25889.35.15.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="226" src="http://4.bp.blogspot.com/-NiL2SO1-6fk/TvkACwIt5nI/AAAAAAAAJGY/L9UowM5D3IY/s320/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-12-26+%25E4%25B8%258B%25E5%258D%25889.35.15.png" width="320" /></a>

## 編碼 ##

小地方可是卻很容易忘記的步驟。將 Text file encoding 指定為 UTF-8, 可以省下之後關於文字編碼上的許多麻煩，特別是程式碼中不小心塞了些中文在註解或字串中－－雖然這是不好的作法，但有時候你就是避不了。

<a href="http://4.bp.blogspot.com/-MpDUemc3nJk/TvkApe5KSQI/AAAAAAAAJGk/N77filTQSo0/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-12-26+%25E4%25B8%258B%25E5%258D%25889.36.41.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="260" src="http://4.bp.blogspot.com/-MpDUemc3nJk/TvkApe5KSQI/AAAAAAAAJGk/N77filTQSo0/s320/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-12-26+%25E4%25B8%258B%25E5%258D%25889.36.41.png" width="320" /></a>

## 行號 ##

我寫程式喜歡有行號，有時候 Compiler 或 Log 告訴你哪一行出錯了，有行號的話便立刻能在畫面上定位。除了行號顯示的設定（Show line numbers）之外，在同個設定頁面中的顯示列印邊界（Show print margin）最好也一起勾上，有了這個提示，可以督促自己不要寫出一行太長的代碼。

<a href="http://2.bp.blogspot.com/-DkSNa3h45Hg/TvzZmcDu9kI/AAAAAAAAJHM/JBq5gPfho7w/s1600/line_and_colmargin.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="290" src="http://2.bp.blogspot.com/-DkSNa3h45Hg/TvzZmcDu9kI/AAAAAAAAJHM/JBq5gPfho7w/s320/line_and_colmargin.png" width="320" /></a>

## 跳格字元（Tab） ##

Tab 用來對齊程式代碼很好用，可是隨著每台電腦設定的不同，在自己電腦上看起來整整齊齊的 Code, 到了別人電腦上一看可能歪七扭八。所以我偏好用空白來取代 Tab 字元（Insert spaces for tabs），雖然有時候 backspace 時要多按個幾下，不過至少可以確定這邊看到的跟其他電腦上看到的是一致的。 設定「空白取代跳格字元」的地方跟設定「行號顯示」是同一個頁面，就在上面而已。

## 字型 ##

這部份算是個補充。寫程式的字型我偏好使用 [Dina Programming Font](http://www.donationcoder.com/Software/Jibz/Dina/), 這是個有 8pt, 9pt, 10pt 三種大小的點陣字型。這個字型的「數字1, 小寫l, 大寫I」以及「字母O, 數字0」均有相當清楚的分別。它曾在 Visual Studio 跟 Vim 上陪伴了我好幾年的歲月。不過這一兩年以來，我也漸漸可以接受 Microsoft 的 Consolas 與 Apple 的 Monaco/Menlo 等向量字作為 Coding 字型，所以也逐漸放棄將預設字型改成自己偏好的 Dina 了。謹以此處一小段文章紀念一下 Dina Programming Font。
