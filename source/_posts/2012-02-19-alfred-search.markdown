--- 
layout: post
title: "幾個我常用的 Alfred 自定搜尋"
date: 2012-02-19 23:45:00 +08:00
categories: [productivity]
tags: [flickr, pchome, alfred]
---

雖然用了 [Alfred][lnk-label_alfred] 一段時間，但是直到最近才開始認真挖掘裡面的設定。其實 Alfred 安裝好不用特別設定，就已經很好用了，像是程式本身預設許多網頁搜尋，從常見的 Google、Yahoo!、Amazon 與維基百科，到比較少人知道但很好用的 [wolfram][lnk-wolfram] 等，都是現成裝好就可以用的。

![Alfred Custom Search][img-alfred_custom_search]

<!-- more -->

不過每個人常用網站不同，在軟體的預設網站之外一定有遺珠之憾。好在 Alfred 也有提供自定搜尋選項的功能，以下就來分享我自己設定的 Alfred Custom Search。

這些 Custom Search 的安裝方式很簡單，只要將底下以 alfredapp 開頭的一串文字複製起來，叫出 Alfred 的指令視窗（預設是使用 ⌥Space），貼上剛才複製的文字，按下 Enter 就好了。

### 奇摩字典搜尋

* Keyword: `dict`
* 說明：就是查字典。dict 後面可以接中文詞或是英文單字。

```
alfredapp://customsearch/Yahoo%21%E5%A5%87%E6%91%A9%E5%AD%97%E5%85%B8%E6%9F%A5%E8%A9%A2/dict/utf8/url=http://tw.dictionary.yahoo.com/dictionary?p={query}
```

### flickr Creative Common 搜尋

* Keyword: `fcc`
* 說明：Alfred 已經有內建 flickr 搜尋了，不過並不是任何找到的圖片都可以隨意使用。如果你有在寫 blog 並且會上 flickr 找圖片來點綴文章的話，這個搜尋可以幫助你找到合適的圖片。

```
alfredapp://customsearch/Search%20Flickr%20CC%20for/fcc/ascii/url=http://www.flickr.com/search/?q={query}&l=commderiv&ss=0&ct=0&mt=all&w=all&adv=1
```

### 世界時間查詢

* Keyword: `time`
* 說明：Time.is 是個簡單但方便的網站，可以以城市名稱查詢該地目前時間。安裝好此 Custom Search 後，就能用 `time tokyo` 或 `time 東京` 的語法來查詢當地時間。

```
alfredapp://customsearch/%E7%9B%AE%E5%89%8D%E7%9A%84%E6%99%82%E9%96%93%EF%BC%8C%E5%9C%A8/time/ascii/url=http://time.is/{query}
```

### 線上音樂搜尋

* Keyword: `gs`
* 說明：Grooveshark 是很大的線上音樂網站，找到就可以直接串流播放了，中英文搜尋都 OK。

```
alfredapp://customsearch/Search%20Grooveshark%20for/gs/ascii/url=http://grooveshark.com/#/search?q={query}
```

### Stack Overflow 搜尋

* Keyword: `so`
* 說明：寫程式的人幾乎都得拜訪的聖地。google 程式問題時幾乎都會找到這邊來，乾脆就直接在 Stack Overflow 上搜尋吧。

```
alfredapp://customsearch/Search%20Stack%20Overflow%20for/so/ascii/url=http://stackoverflow.com/search?q={query}
```

### Apple Developer Connection 搜尋

* Keyword: `adc`
* 說明：對 Apple 開發者很方便的搜尋。

```
alfredapp://customsearch/Search%20ADC%20for/adc/ascii/url=http://developer.apple.com/library/mac/search/?q={query}
```

### PChome 線上購物 搜尋

* Keyword: `pchome`
* 說明：台灣最大的購物網站......吧？我沒有數據，單純只是自己蠻常用的。

```
alfredapp://customsearch/Search%20PChome%20for/pchome/ascii/url=http://ecshweb.pchome.com.tw/search/v1/{query}
```

### Mac App Store 搜尋

* Keyword: `mas`
* 說明：尋找 Mac App Store 裡面的應用程式，也是我相當常用到的功能。

```
alfredapp://customsearch/%10Search%20Mac%20App%20Store%20for/mas/ascii/url=macappstore://ax.search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?q={query}
```

### 博客來搜尋（僅書籍）

* Keyword: `books`
* 說明：博客來相信我就不用介紹了吧。以下的語法專門用來查詢書籍，如果要查包含書籍以外的物品，可以用下面的語法來查詢。

```
alfredapp://customsearch/Search%20%E5%8D%9A%E5%AE%A2%E4%BE%86%E6%9B%B8%E7%B1%8D%20for/books/ascii/url=http://search.books.com.tw/exep/prod_search.php?cat=BKA&key={query}&apid=books&areaid=head_wel_search
```

### 博客來搜尋（全站）

* Keyword: `bkl`
* 說明：同上，就不另外說明了。

```
alfredapp://customsearch/Search%20%E5%8D%9A%E5%AE%A2%E4%BE%86%20for/bkl/ascii/url=http://search.books.com.tw/exep/prod_search.php?cat=all&key={query}&apid=books&areaid=head_wel_search
```

[lnk-label_alfred]: /blog/tags/alfred/
[lnk-wolfram]: http://www.wolframalpha.com/
[img-alfred_custom_search]: https://lh6.googleusercontent.com/-6Z65mn0aLAo/T0EV13h5vFI/AAAAAAAAJdU/ijKmwmls5p8/s800/alfred_custom_search.png