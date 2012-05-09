--- 
layout: post
title: "代碼配色，從 Zenburn 到 Solarized"
date: 2012-02-10 08:40:00 +08:00
categories: [coding]
tags: [vim, solarized, zenburn]
---

這些年來，我的代碼配色方案都是以 [zenburn](/blog/tags/zenburn/) 為首選。深色底，低對比，對眼睛舒服，代碼的段落也清晰。zenburn 也是網路上很受歡迎的配色，這有一個好處，就是越多人用就越有可能被 porting 到不同的 IDE 或 Editor 上，所以從 Visual Studio 到 Eclipse 再到 XCode 都可以[找到現成的 zenburn 設定](http://slinky.imukuppi.org/zenburnpage/)。

![zenburn @ vim][vim-zenburn]

<!-- more -->

上圖就是目前在用的 zenburn。由於用這麼久都已經習慣了，從沒有想過會有第二種配色讓我如此滿意，結果前天突然發現 [Solarized](http://ethanschoonover.com/solarized) 這一組配色，當場就被迷住了，我才認識這組配色不到 24 小時，就把 zenburn 從我的 vimrc 中換掉了。

- 官方網站：[Solarized - Ethan Schoonover](http://ethanschoonover.com/solarized)
- GitHub 檔案庫：[altercation / solarized - GitHub](https://github.com/altercation/solarized)

說起來，會注意到 Solarized 也是無心插柳。原本是在找 markdown + blogger 的 solution, 沒有找著，倒是見到了一個以 github 為基礎的 blog framework, 叫 Octopress。我對 [Octopress](http://octopress.org/) 沒有太多興趣，純粹好奇它的技術架構（畢竟以 SCM 作為 blog 後端，是很有趣的想法），所以研究了一下。然後意外地在[〈使用 Octopress + GitHub 免費架設部落格，以 Markdown 語法快速發表文章〉](http://blog.lyhdev.com/2011/10/octopress-github-markdown.html)這篇文章中意外地注意到 Solarized 這組配色。

Solarized 最令我覺得神奇的地方，就在於同一組基本色，可以任意搭配淺白色或淺黑色背景，都一樣清晰明瞭。它的色盤也控制在 16 色內，所以即使在終端機模式下使用也不會突兀。在官方網站上，也列出了 Visual Studio 與 Xcode 等 IDE 的配色支援；for eclipse 的配色網路上搜尋得到，不過官網上沒列出，不曉得是不是名字相衝的緣故（太陽 vs. 日蝕）=P</p><p>我在終端機純文字模式下的 Vim 與圖形介面的 MacVim 分別指定了 Light 與 Dark 兩種配色。這樣在 Vim 中編輯時，只要瞄一下我就可以知道現在是在終端機模式下還是獨立的 Mac App。

![solarized(yin) @ vim][vim-solarized-yin]

![solarized(yang) @ macvim][macvim-solarized-yang]

另外這配色除了用在程式碼外，也有提供給一般應用程式使用的版本，例如常見的 putty, OSX 自帶的 Terminal, 以及 iTerm 2 等。一樣都可以在 Solarized 放在 GitHub 上的 Repository 上找到。

[vim-zenburn]: https://lh4.googleusercontent.com/-m9F65JqmUDI/TzRk4vBNMkI/AAAAAAAAJVc/mShL8z4NQAc/s640/vim_zenburn.png
[vim-solarized-yin]: https://lh3.googleusercontent.com/-wTKa4GLQKZE/TzRk46EP8GI/AAAAAAAAJVY/uhEJUnmBN14/s640/vim_solarized_yin.png
[macvim-solarized-yang]: https://lh4.googleusercontent.com/-nIid_yCO9y4/TzRk4nK58FI/AAAAAAAAJVU/Sbt62oMbNAY/s640/macvim_solarized_yang.png