---
layout: post
title: "BOM (Byte Order Mark) 與 UTF-8"
date: 2012-03-09 20:28
comments: true
categories: [productivity]
tags: [vim, unicode, endian, bom, utf8]
---

記一些關於 BOM 與 UTF-8 的個人筆記，省得以後每次遇到還得重新上網搜尋做功課。

<!-- more -->

* * *

Byte Order Mark 在 UTF-16 Big Endian 是 "FE FF"，Little Endian 是 "FF FE"。其中 Mac 系統主要是 Big Endian, PC 系統則是使用 Little Endian。

UTF-8 由於本身特性，不管 Big Endian 或 Little Endian，其 BOM 一律為 "EF BB BF"。

不過個人建議，文字文件要儲存的話，**盡量以 UTF-8 格式存**。而以 UTF-8 儲存的文件，**盡量不要放 BOM 進去**。為什麼呢？因為 UTF-8 的一個特色就是能與 ASCII 系統相容，如果文件中沒有包含非拉丁字元的話；要是放了 BOM 進去，就破壞了這相容性。

## 在 VIM 中的 BOM 相關操作

### 加入 BOM

    :set bomb

### 移除 BOM

    :set nobomb

### 查詢 BOM 狀態

    :set bomb?

## 在 Terminal / Console 下的 BOM 相關操作

### 查詢包含 UTF-8 BOM 的檔案

    $ grep -rIl $'^\xEF\xBB\xBF' [FILE]

### 找出並移除 UTF-8 的 BOM

    $ grep -rIl $'^\xEF\xBB\xBF' [FILE] | xargs sed -i 's/^\xEF\xBB\xBF//;g'

### 編碼的轉換

    $ iconv -f [FROM_ENCODING] -t [TO_ENCODING] [FILE]

其中 ENCODING 的部份可以是以下數值：

- UTF-8 UTF8
- UTF-16BE
- UTF-16LE
- UCS-2BE UNICODEBIG
- UCS-2LE UNICODELITTLE

更多 ENCODING 代碼可以透過 `iconv --list` 查詢。