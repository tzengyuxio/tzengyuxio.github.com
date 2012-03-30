---
layout: post
title: "JSON for Vim"
date: 2012-03-26 10:42
comments: true
categories: vim
---

剛剛在 Terminal 下開了個新檔要來寫 JSON, 發現 Vim 竟然沒有支援 JSON 的 FileType 與 syntax highlight。想說這問題應該很多人遇過，因此上網找了一下，找到這個 script: [JSON.vim][1]。

[1]: http://www.vim.org/scripts/script.php?script_id=1945

不過看了下安裝說明，感覺麻煩了點。於是又找到了[這篇文章][2]，只要到 `~/.vimrc` 加入下面這行，就可以讓 JSON 檔案套用 JavaScript 的 syntax highlight, 簡單明瞭。

<pre class="prettyprint"><code>autocmd BufNewFile,BufRead *.json set ft=javascript</code></pre>

[2]: http://www.codeography.com/2010/07/13/json-syntax-highlighting-in-vim.html