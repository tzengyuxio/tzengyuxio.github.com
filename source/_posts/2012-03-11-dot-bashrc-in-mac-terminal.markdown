---
layout: post
title: "設定 Mac Terminal 下的 .bashrc"
date: 2012-03-27 16:07
comments: true
categories: shell
---

今天想要替 Terminal 下一些常用的指令建立 alias, 我按照以前在 FreeBSD/Linux 的習慣，直接進 Terminal，在家目錄 (`~/`) 下寫了個 `.bashrc`, 重開 Terminal, 剛剛寫的 alias 卻沒有任何反應。

後來在家目錄下先建了個檔案 `.bash_profile`, 檔案內容如下：

<pre class="prettyprint"><code>if [ -f ~/.bashrc ]; then
	source ~/.bashrc
fi
</code></pre>

這樣原本寫在 `.bashrc` 裡的指令稿就會被讀取並且發揮作用了。補充說明，我的作業系統版本為 **Mac OS X Lion (10.7)**。

關於 `.bash_profile` 與 `.bashrc` 的差別，簡述如下：

### .bash_profile

輸入帳號密碼登入時，不論遠端或本地，都會執行此設定檔。

### .bashrc

在已經登入的情況下，開啟終端機視窗（如 Gnome 的 xterm），在命令提示符號出現前，就會先執行 .bashrc 內的指令。

不過 Mac OS X 的行為是上述流程的例外，詳細可參考本文最後面的連結。

* * *
參考資訊：

[Customizing Terminal in Mac OS X 10.5 | macfidelity](http://macfidelity.de/2008/07/02/mac-customizing-terminal-in-mac-os-x-105/)

上面這篇文章中的步驟比較多，甚至還要進 Terminal 的「偏好設定」畫面去修改打開 Shell 的指令。不過我自己的操作結果是就算沒有設定那些指令也沒關係，只要有包含文章中那段代碼的 `.bash_profile`, 就可以讀取 `.bashrc` 了。

關於 `.bash_profile` 與 `.bashrc` 的差別，請見下面這篇文章。

[.bash_profile vs .bashrc](http://www.joshstaiger.org/archives/2005/07/bash_profile_vs.html)