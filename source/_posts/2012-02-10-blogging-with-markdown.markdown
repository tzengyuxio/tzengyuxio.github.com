--- 
layout: post
title: "用 Markdown 寫部落格"
date: 2012-02-10 13:24:00 +08:00
categories: [雜筆]
tags: [blogger, dayone, markdown, iawriter]
---

前陣子[比較了一些輕量級標記語言](/blog/2011/10/lightweight-markup-language/)，想作為之後自己撰寫文件的格式依據。其中 reStructuredText 太過複雜，就不考慮了；剩下的 AsciiDoc 與 Markdown 兩者中，剛開始我比較喜歡 AsciiDoc 多一些。因為 AsciiDoc 有支援表格的語法，而 Markdown 則必須透過 Inline HTML 的方式，這麼一來如果文章中想包含表格，免不了還是得塞入一堆礙眼的 HTML 語法。

<!-- more -->

不過比起 AsciiDoc, Markdown 的應用支援顯然要來得廣泛得多，除了 GitHub 與 BitBucket 等網站外，有相當多的工具或編輯器支援 Markdown 語法，例如 Day One, iA Writer 或是 Byword，這方面壓倒性勝過 AsciiDoc。於是乎 Markdown 便逐漸成為我的首選，至於不能製作表格的問題嘛，反正作表格的機會也不是那麼多，大部分時候也可以用清單方式來呈現資料，所以倒不是太大問題。

決定用 Markdown 作為主要規範後，第一個想到的就是用 Markdown 來寫 blog。不過 blogger 本身沒有支援 Markdown 語法，也沒有外掛或工具支援直接將 Markdown 寫好的文章發佈。大部分用 Markdown 在 blogger 寫文章的方式，都與 [Notely: How to use Markdown in Blogspot posts](http://notely.blogspot.com/2011/08/how-to-use-markdown-in-blogspot-posts.html) 這篇文章的作業流程大同小異：

1. 在你的電腦中用文字編輯器撰寫文章並儲存成檔案（原作者 Joel 使用 yyyy-mm-dd post title.txt 的檔案命名方式）
2. 開啟 [Daring Fireball: Markdown Web Dingus](http://daringfireball.net/projects/markdown/dingus) 網站，複製貼上文章內容，進行轉換。
3. 最後，將轉換完成的 HTML 碼貼到 blogspot 的新文章中。

另外，貼上時要注意以下兩點：

1. 在貼上新文章時，確定文字輸入區上方的模式是在「HTML」下而非「撰寫」。
2. 開啟右側「文章設定」最下方的選項，
    1. 「撰寫模式」勾選**解譯輸入的 HTML**。
    2. 「換行符號」勾選**使用 `<br>` 標記**。

我目前也是採用類似的流程。比較特別要提的有以下幾點：

1. 標題除了作為檔名外，檔案內的第一行也會放上一級標題；最後一行則是列出這篇文章的標籤。所以在轉換為 HTML 時，要去首尾行。
2. 檔案存放在 dropbox 空間中。這樣可以確保文章有多份備份。
3. 文章是[用 iA Writer 寫](/blog/2012/02/markdown-editor/)的。寫完之後用[〈在 OS X 中隨時隨地將 Markdown 轉為 HTML〉](/blog/2012/02/10/markdown-to-html-in-osx/)這一篇提到的方法轉換為 HTML 碼，這樣就不用再開啟線上轉換的網頁了。

* * *

這篇文章就是用上述流程所寫的，原始檔案可以到[這邊](http://dl.dropbox.com/u/1324456/2012-02-10%20%E7%94%A8%20Markdown%20%E5%AF%AB%20blogger%20%E6%96%87%E7%AB%A0.md)參考。
