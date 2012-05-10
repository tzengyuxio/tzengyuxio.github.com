---
layout: post
title: "關於 Mac 快速檢視 (Quick Look) 的幾個小秘訣"
date: 2012-03-11 18:17
comments: true
categories: [productivity]
tags: [mac, shell, quicklook, csv]
---

我用了 Mac 好一段時間了才知道，原來對檔案直接按空白鍵可以開啟快速檢視 (Quick Look)；又隔了好一段時間，才又知道原來快速檢視除了內建的之外，還可以加上些外掛以增加支援檔案類型。下面是一些我所用到的 QuickLook 相關技巧整理。

![BetterZip Plugin](/images/2012/2012-03-11-quicklook-of-zip.png)

<!-- more -->

## 在 Terminal 下開啟快速檢視

除了在 Finder 中按空白鍵外，有時候在 Terminal 底下工作時，也可以利用指令來開啟快速檢視，這樣可以減少鍵盤滑鼠的切換以提升效率。開啟的指令如下：

    $ qlmanage -p [FILE]

把 [FILE] 替換成要開啟的檔名即可。不過這指令也不算短，要更方便的話，可以在 `~/.bashrc` 中加入以下指令別名 (alias)，這樣只要輸入 `ql [FILE]` 就可以立刻檢視了：

``` sh
alias ql='qlmanage -p'
```

對了，設定檔 .bashrc 預設在 Mac OS X 中是不起作用的，可以參考[這篇文章][bashrc]來讓 .bashrc work。

[bashrc]: /blog/2012/03/11/dot-bashrc-in-mac-terminal/

## 增加支援檔案類型的 Plugin

快速檢視本身支援文字、圖片、音樂、影片等基本檔案格式，至於其他不支援的格式則只會顯示一個大大的檔案 icon。透過以下 Plugin 可以增加快速檢視支援的檔案格式，安裝很簡單，只要將下載下來的 `*.qlgenerator` 檔案放到下面路徑之一：

- `(Macintosh HD)/Library/QuickLook/` 安裝給本機的所有使用者
- `~/Library/QuickLook/` 只安裝給自己使用

### 壓縮檔 (Archives)

[BetterZip 2 - The Next Generation of Archiving](http://macitbetter.com/BetterZip-Quick-Look-Generator/)

上面這個外掛預設是暗色背景的，如果喜歡白色背景的（如同文章開頭那張圖），可以考慮下面這個修改版本：

[farfanoide/BetterZ-QuickLook-plugin-theme-for-Lion](https://github.com/farfanoide/BetterZ-QuickLook-plugin-theme-for-Lion)

### 程式碼 (Code)

[qlcolorcode - A Quick Look plugin for source code with syntax highlighting - Google Project Hosting](http://code.google.com/p/qlcolorcode/)

### CSV 檔案

[quicklook-csv - A QuickLook plugin to quick look CSV files for Mac OS X 10.5+ - Google Project Hosting](http://code.google.com/p/quicklook-csv/)

## 快速檢視文字檔案時，可以複製文字

按空白鍵檢視文字檔案內容很方便，可是有時候如果想要複製文字，就得另外再開啟文字編輯，相當麻煩。在 Terminal 下輸入以下指令，可以讓你在快速檢視文字檔時，也能選取想要的片段，然後按 Cmd+C 複製出來。

    $ defaults write com.apple.finder QLEnableTextSelection -bool TRUE; killall Finder

## 用不同的應用程式開啟

在快速檢視時，右上方會有個按鈕讓你以預設關連的應用程式開啟。如果你想要用其他的應用程式開啟，例如用 Photoshop 開啟圖檔，那麼只要按著右上方按鈕不放，就會出現選單供你選擇想要開啟的應用程式。

## 以全螢幕開啟快速檢視

選取檔案，然後按下 `Cmd+Opt+Y`，就可以直接以全螢幕方式進入快速檢視，這對影像或是影片格式相當有用。

其實也可以在按著 Opt 的狀態下按空白鍵進入全螢幕的快速檢視，不過像我有安裝 Alfred, `Opt+空白鍵` 預設會啟動 Alfred 的輸入視窗，因此就沒辦法用來開啟快速檢視了。
