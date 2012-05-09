--- 
layout: post
title: "Google Authorship (著作者身分)"
date: 2011-08-06 11:04:00 +08:00
comments: true
categories: [雜筆]
tags: [google]
---

<span style="color:red;">更新：關於 Google Authorship 的運作機制與非 Blogger 使用者的使用參考，[請見此篇](/blog/2011/08/09/more-on-google-authorship/)。</span>

Google 搜尋最近新加入了一項功能，就是可以在搜尋結果中顯示作者資訊。這項技術叫做 Google Authorship，實際的呈現結果如下圖（目前只有在 Google English 的搜尋才看得到）：

![](http://4.bp.blogspot.com/-rmPvyuZFFZg/Tjyhffmt8uI/AAAAAAAAAbY/Hya9qlYGtT0/s400/ga_sample.png)

<!-- more -->

透過 Google Authorship，不僅可以讓自己的文章在搜尋結果頁面中顯得更為突出，也可以在轉貼成風的網路汪洋中，更明確的顯示出某篇文章真正的原始出處，除此之外，也有助於搜尋結果排名的提升。可以想見，當越來越多的作者加入 Google Authorship 後，網路搜尋的結構也會呈現出與今日截然不同的樣貌。

不過 Google 還沒那麼聰明，沒辦法直接把文章跟原作者作連結，所以我們還是得作些設定。如果你是用 Google 的 Blogger 在寫網誌，而且也有了一個 Google+ 帳號，那麼很簡單，只要完成下面兩個動作就好：

一、在 Blogger Profile （個人簡介，就是下面那張圖）頁面中，加入自己的 Google+ 連結：

{% caption_img http://4.bp.blogspot.com/-k3wm9QJZSeo/TjyhfDX27ZI/AAAAAAAAAbU/C9A2u8yJ05k/s400/ga_personalprofile.png 點擊左上角按鈕開始編輯 %}

    https://plus.google.com/116861989911994383287?rel=author

請把上面連結的數字部分，替換成自己的 Google+ ID，然後輸入在「一般」資訊區塊的「首頁URL」欄位中。

{% caption_img http://3.bp.blogspot.com/-PF823Cho9vI/TjyhevRaEXI/AAAAAAAAAbQ/zjguQ8f7604/s400/ga_homepageurl.png 輸入自己的 Google+ 頁面，並加上 "?rel=author" %}

二、在自己的 Google+ 頁面中，加入自己的網誌連結，並開放給網路上所有的人。加入連結時，記得要勾選「這個網頁是用專門用來介紹我自己」：

{% caption_img http://1.bp.blogspot.com/-T4iLCkrSjtU/TjykdR1gOuI/AAAAAAAAAbg/TS0_o8Z3EcI/s400/ga_gpluslink.png 編輯自己 Google+ 「關於」頁面中的連結 %}

{% caption_img http://1.bp.blogspot.com/-SFz5dY69eqo/TjymI3oTdnI/AAAAAAAAAbk/6A3NZIIn7zc/s320/ga_editlink.png 除了勾選選項外，也要設定成開放 %}

像筆者有三個網誌，每個都可以勾選「這個網頁是專門用來介紹我自己」。又因為三個網誌都是使用同一份 Blogger Profile，因此三個網站的文章就同時都會與我的 Google+ 建立連結。

到這邊就算大功告成，完成了「文章網頁」與「個人檔案」的雙向連結。接著可以到 [Rich Snippets Testing Tool](http://www.google.com/webmasters/tools/richsnippets) 這個工具，輸入自己網站網址來檢查是否設定成功。成功的話，會顯示如下的訊息：

{% caption_img http://2.bp.blogspot.com/-zh5DI345CCo/TjyokbizBUI/AAAAAAAAAbo/PjMlpJVSGnA/s1600/ga_success.png 綠色文字表示設定成功 %}

不過最後我們還得告訴 Google 請把我們的文章與作者關連加入到搜尋結果中。請前往 [Authorship Request](https://spreadsheets.google.com/a/google.com/spreadsheet/viewform?formkey=dHdCLVRwcTlvOWFKQXhNbEgtbE10QVE6MQ) 這個表單，填寫相關資訊後送出。送出之後通常不會立刻在搜尋結果中看到，想看得到得等上一陣子就是了。

----

參考資訊：

以下介紹所使用的是 `<a href="url" rel="author">` 的方式：

- [Google Authorship 官方說明 (原始作法，英文)](http://www.google.com/support/webmasters/bin/answer.py?answer=1229920)
- [Google搜尋結果出現Google+ profile? 　(如何設定Google Authorship)](http://st-threath.blogspot.com/2011/08/googlegoogle-profile-google-authorship.html)
- [將文章與Google+帳號連結](http://mynotes.org/tech/2011/08/04/5335.htm)

新的作法改採 `<a href="url?rel=author>` 的方式：

- [Google Authorship 官方說明 (新作法，英文)](http://www.google.com/support/webmasters/bin/answer.py?answer=1408986)

新的作法適用在一些只能填入連結，無法自己修改網頁 HTML 的地方。例如你是某新聞網站的作者，新聞網站提供了每個作者的個人頁面，可以編輯文字、加上連結，但卻無法自訂連結的屬性，這時候新的作法就可以派上用場。
