---
layout: post
title: "用 google-code-prettify 在網頁中嵌入代碼"
date: 2011-08-07 09:13
comments: true
categories: html
---

作為一個以程式技術為主的網誌，文章中免不了得出現一兩段程式碼。原本我使用 [github][] 的 [gist][] 服務來將程式代碼內嵌到網頁（[使用效果見此][sample]），另一方面 gist 也可以用來當作是自己的小小代碼備忘錄，許多程式碼片段直接丟上去就好了，非常便利，可說是一舉兩得。

[github]: https://github.com/
[gist]: http://www.gist.com/
[sample]: http://tzengyuxio.me/blog/2011/07/26/which-uigesturerecognizer-will-response/

不過有時候只是想要顯示幾行代碼，這些代碼也許不具有完整性，如果將代碼一股腦兒地全丟上 gist，總有一天代碼庫會變成亂葬崗。所以除了 gist 之外，我也找了其他網頁貼程式碼的方案。原本前幾天已經物色好了 [SyntaxHighlighter][sh]，打算趁週末有空時來實裝測試。結果因為在安裝前四處蒐集資訊，意外又發現到 [google-code-prettify][gcp]，看了一下立刻就變心決定改用 google-code-prettify。

[sh]: http://alexgorbatchev.com/SyntaxHighlighter/
[gcp]: http://code.google.com/p/google-code-prettify/

其實就功能上而言，SyntaxHighlighter 遠遠勝過 google-code-prettify，之所以選擇了 google-code-prettify，最主要的原因就在於「**簡單**」。兩者的比較如下（分別簡稱為 GCP 和 SH）：

- 遇到過長的程式碼，SH 可以顯示出 Scrollbar，維持原排版；而 GCP 則會強制換行。
- SH 預設有行號，GCP 也可加入行號，但不方便。
- 兩者都支援顏色主題。包含預設的在內，SH 現有 7 種顏色主題，GCP 則有 4 種。
- SH 支援 23 種程式語法，GCP 預設內建的也有 20 種左右。
- 就安裝上，GCP 只要加入兩個檔案，就可以處理大多數的語言；SH 則除了得加入核心的 CSS 與 JavaScript 檔共三個檔外，還必須加入對應使用程式語言的 JavaScript。
- 使用上兩者差異不大。SH 除了 `<pre>` 標籤外也提供了 `<script>` 的使用方式；GCP 則是可以省略語法指定，自動判斷。

由於我經常跨不同程式語言撰寫，因此 SH 在安裝上對我而言就顯得比較不便。雖然新版提供了 Autoloader 來動態決定要載入哪些程式語言語法的 JavaScript，不過我最後還是選擇單純一點的 GCP。GCP 對我而言最大的缺點就是沒有行號，我在 IDE 上寫 code 一定會打開行號顯示，不過反正網頁上顯示的代碼行數都不多，沒有行號這一點倒是還可以接受。

以下就是我的 google-code-prettify 安裝筆記：

## Step 1.

到 [google-code-prettify][gcp] 首頁下載好檔案後，解壓放到自己的網路空間上。我是放到 Dropbox 的 public 資料夾下。

## Step 2.

然後再修改自己網頁的範本。有兩個地方要修改，一個是在 `</head>` 標籤之前加上 css 與 javascript 的載入；另外一個是在 `<body>` 標籤內加上 onLoad 函式。

<pre class="prettyprint lang-html"><code>&lt;head&gt;
  &lt;-- 中略 --&gt;
  &lt;-- 1. 在 /head 標籤前加入下面兩行 --&gt;
  &lt;link href="http://my.url.to/prettify.css" rel="stylesheet" type="text/css"/&gt;
  &lt;script src="http://my.url.to/prettify.js" type="text/javascript"/&gt;
&lt;/head&gt;

&lt;-- 2. 在 body 標籤內加入 onload 設定 --&gt;
&lt;body onload='prettyPrint()'&gt;
&lt;/body&gt;
</code></pre>

## Step 3.
接下來只要在想要使用代碼的地方，用 `<pre>` 或 `<code>` 包起來，並且設定 class 為 prettiprint 即可。google-code-prettify 會自動判斷裡面的代碼是屬於何種語言。

<pre class="prettyprint lang-html"><code>&lt;pre class="prettyprint"&gt;
#include &lt;stdio.h&gt;
 
int main(void)
{
   printf("Hello, world!\n");
   return 0;
}
&lt;/pre&gt;
</code></pre>

上面這段代碼的結果如下：

<pre class="prettyprint"><code>#include &lt;stdio.h&gt;
 
int main(void)
{
   printf("Hello, world!\n");
   return 0;
}
</code></pre>

如果想要自己指定區塊內的程式語言，可以再加上 `lang-*`，其中 * 要替換成該程式語言的代碼。

<pre class="prettyprint"><code>&lt;pre class="prettyprint lang-html"&gt;
  &lt;-- HTML 的場合 --&gt;
&lt;/pre&gt;
&lt;pre class="prettyprint lang-c"&gt;
  /* C 的場合 */
&lt;/pre&gt;
&lt;pre class="prettyprint lang-py"&gt;
  " Python 的場合
&lt;/pre&gt;
</code></pre>

目前支援的代碼有

> "bsh", "c", "cc", "cpp", "cs", "csh", "cyc", "cv", "htm", "html", "java", "js", "m", "mxml", "perl", "pl", "pm", "py", "rb", "sh", "xhtml", "xml", "xsl"

看得出來是以程式碼的副檔名做區隔。基本上常見的幾乎都包含在裡面了。

* * *

參考資訊：

- [google-code-prettify][1]
- [SyntaxHighlighter][2]
- [在 Blogger 中使用 google-code-prettify 顯示程式碼 | Vixual][3]
- [在 Blogger 中使用 dp.SyntaxHighlighter 顯示程式碼 | Vixual][4]
- [幻影千瞳的部落格: 使用 google-code-prettify][5]
- [幻影千瞳的部落格: 使用 SyntaxHighlighter][6]

[1]: http://code.google.com/p/google-code-prettify/
[2]: http://alexgorbatchev.com/SyntaxHighlighter/
[3]: http://www.vixual.net/blog/archives/197
[4]: http://www.vixual.net/blog/archives/198
[5]: http://yuanfarn.blogspot.com/2009/10/google-code-prettify.html
[6]: http://yuanfarn.blogspot.com/2009/10/syntaxhighlighter.html