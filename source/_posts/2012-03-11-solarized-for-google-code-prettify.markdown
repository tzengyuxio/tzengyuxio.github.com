---
layout: post
title: "Solarized for google-code-prettify"
date: 2012-03-11 07:20
comments: true
categories: html
---

[我用 google-code-prettify 來做 blog 文章中的代碼上色][mygcp]，google-code-prettify 本身有[附上幾個 Color Scheme][gcpcolor], 然而除了預設的之外，都是以暗色背景為主。

[mygcp]: http://tzengyuxio.me/blog/2011/08/07/embeded-code-with-google-code-prettify/
[gcpcolor]: http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html

昨天心血來潮將 [Solarized][solarized] 這個 Color Scheme 移植到 google-code-prettify 下，同樣也是 dark/light 雙版本。關於 Solarized 的介紹可以參考[這篇文章][mysolarized]。

[solarized]: http://ethanschoonover.com/solarized
[mysolarized]: http://coder.aqualuna.me/2012/02/zenburn-solarized.html

## 下載 / Download
- Solarized Light
    - Download [Normal version][1]
    - Download [Minified version][2]
- Solarized Dark
    - Download [Normal version][3]
    - Download [Minified version][4]

[1]: http://dl.dropbox.com/u/1324456/google-code-prettify/solarized-light.css
[2]: http://dl.dropbox.com/u/1324456/google-code-prettify/solarized-light.min.css
[3]: http://dl.dropbox.com/u/1324456/google-code-prettify/solarized-dark.css
[4]: http://dl.dropbox.com/u/1324456/google-code-prettify/solarized-dark.min.css

## 代碼 / Code

### Solarized Light

正常排版版本 ([download][1])：
<pre class="prettyprint lang-html"><code>.pln{color:#657b83}
@media screen{
	.str{color:#2aa198}
	.kwd{color:#859900}
	.com{color:#93a1a1}
	.typ{color:#b58900}
	.lit{color:#2aa198}
	.pun,.opn,.clo{color:#657b83}
	.tag{color:#268bd2}
	.atn{color:#93a1a1}
	.atv{color:#2aa198}
	.dec,.var{color:#268bd2}
	.fun{color:red}
}
@media print,projection{
	.str{color:#060}
	.kwd{color:#006;font-weight:bold}
	.com{color:#600;font-style:italic}
	.typ{color:#404;font-weight:bold}
	.lit{color:#044}
	.pun{color:#440}
	.tag{color:#006;font-weight:bold}
	.atn{color:#404}
	.atv{color:#060}
}
pre.prettyprint{padding:5px;border:1px solid #888;background:#fdf6e3}
ol.linenums{margin-top:0;margin-bottom:0}
li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}
li.L1,li.L3,li.L5,li.L7,li.L9{background:#eee}
</code></pre>

最小化版本 ([download][2])：
<pre class="prettyprint lang-html"><code>.pln{color:#657b83}@media screen{.str{color:#2aa198}.kwd{color:#859900}.com{color:#93a1a1}.typ{color:#b58900}.lit{color:#2aa198}.pun,.opn,.clo{color:#657b83}.tag{color:#268bd2}.atn{color:#93a1a1}.atv{color:#2aa198}.dec,.var{color:#268bd2}.fun{color:red}}@media print,projection{.str{color:#060}.kwd{color:#006;font-weight:bold}.com{color:#600;font-style:italic}.typ{color:#404;font-weight:bold}.lit{color:#044}.pun{color:#440}.tag{color:#006;font-weight:bold}.atn{color:#404}.atv{color:#060}}pre.prettyprint{padding:5px;border:1px solid #888;background:#fdf6e3}ol.linenums{margin-top:0;margin-bottom:0}li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}li.L1,li.L3,li.L5,li.L7,li.L9{background:#eee}
</code></pre>

### Solarized Dark

正常排版版本 ([download][3])：
<pre class="prettyprint lang-html"><code>.pln{color:#839496}
@media screen{
	.str{color:#2aa198}
	.kwd{color:#859900}
	.com{color:#586175}
	.typ{color:#b58900}
	.lit{color:#2aa198}
	.pun,.opn,.clo{color:#839496}
	.tag{color:#268bd2}
	.atn{color:#586175}
	.atv{color:#2aa198}
	.dec,.var{color:#268bd2}
	.fun{color:red}
}
@media print,projection{
	.str{color:#060}
	.kwd{color:#006;font-weight:bold}
	.com{color:#600;font-style:italic}
	.typ{color:#404;font-weight:bold}
	.lit{color:#044}
	.pun{color:#440}
	.tag{color:#006;font-weight:bold}
	.atn{color:#404}
	.atv{color:#060}
}
pre.prettyprint{padding:5px;border:1px solid #888;background:#002b36}
ol.linenums{margin-top:0;margin-bottom:0}
li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}
li.L1,li.L3,li.L5,li.L7,li.L9{background:#111}
</code></pre>

最小化版本 ([download][4])：
<pre class="prettyprint lang-html"><code>.pln{color:#839496}@media screen{.str{color:#2aa198}.kwd{color:#859900}.com{color:#586175}.typ{color:#b58900}.lit{color:#2aa198}.pun,.opn,.clo{color:#839496}.tag{color:#268bd2}.atn{color:#586175}.atv{color:#2aa198}.dec,.var{color:#268bd2}.fun{color:red}}@media print,projection{.str{color:#060}.kwd{color:#006;font-weight:bold}.com{color:#600;font-style:italic}.typ{color:#404;font-weight:bold}.lit{color:#044}.pun{color:#440}.tag{color:#006;font-weight:bold}.atn{color:#404}.atv{color:#060}}pre.prettyprint{padding:5px;border:1px solid #888;background:#002b36}ol.linenums{margin-top:0;margin-bottom:0}li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}li.L1,li.L3,li.L5,li.L7,li.L9{background:#111}
</code></pre>

## 範例 / Example (in dark version)

<pre class="prettyprint lang-java"><code>import java.util.Map;
import java.util.TreeSet;

public class GetEnv {
  /**
   * let's test generics
   * @param args the command line arguments
   */
  public static void main(String[] args) {
    // get a map of environment variables
    Map&lt;String, String&gt; env = System.getenv();
    // build a sorted set out of the keys and iterate
    for(String k: new TreeSet&lt;String&gt;(env.keySet())) {
      System.out.printf("%s = %s\n", k, env.get(k));
    }
  }    
}
</code></pre>

* * *

網路上有找到[這篇也有 solarized color for google-pretty-code][yasgcp], 不過只有暗色背景的版本。

[yasgcp]: http://subtech.g.hatena.ne.jp/h2u/20110408/1302198319