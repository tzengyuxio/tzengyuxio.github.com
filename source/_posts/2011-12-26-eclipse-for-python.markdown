--- 
layout: post
title: "在 Eclipse 開發 Python"
date: 2011-12-26 11:25:00 +08:00
categories: [coding]
tags: [eclipse, pydev, python]
---

這篇文章是[〈Eclipse 安裝筆記〉](/blog/2011/12/26/eclipse-setup-note/)系列之一，算是個人的安裝過程紀錄。以下是安裝時的環境參考：

- 作業系統：Mac OS X 10.7.2
- 程式版本：Eclipse Indigo 3.7.1,IDE for Java Developers

<!-- more -->

步驟流程如下

### Step 1. 準備 Python 的編譯環境

同樣的，這步驟在 Mac 上可以略過。在 Windows 上要做的也很簡單，就上 Python 官網抓個 Python Binary 來安裝就好了。相對於 C++ 的準備工作來得簡單些。

### Step 2. 安裝 PyDev

在 Eclipse Indigo 之後，套件的安裝變得簡單許多，只要透過滑鼠就可以搞定。首先，先上 [Eclipse Marketplace](http://marketplace.eclipse.org), 一個類似 firefox Extensions 或 Android Market 的地方。搜尋「pydev」，找到後點進去套件頁面，在套件 Logo 下可以看到一個「Install」按鈕，只要將該按鈕拖曳到 Eclipse 視窗中，就可以開始安裝了。

{% caption_img http://3.bp.blogspot.com/-C_V3nxc2Z0I/TvfjPTDCbfI/AAAAAAAAJFU/ygD2IDbYz1k/s800/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-12-26+%25E4%25B8%258A%25E5%258D%258810.58.51.png 拖曳圖中紫色說明區塊所指向的按鈕就能直接安裝 %}

### Step 3. 開始寫 Python

安裝完後重開 Eclipse，如果在選單「File」→「New」→「Project」的對話視窗有看到如下圖的 PyDev 選項資料夾，就表示安裝成功了，可以開始寫 Python 的程式。

![](http://1.bp.blogspot.com/-kvvmlpzhScs/TvfoxGUi98I/AAAAAAAAJFs/xaKtFOwcTQk/s800/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-12-26+%25E4%25B8%258A%25E5%258D%258811.08.08.png)

不過，等等，要讓齒輪動起來，還少了點東西。CDT 可以自動找到 C++ Compiler 的所在，可是 PyDev 不行，我們得手動指定 Python 直譯器的路徑。

從選單列開啟 Eclipse 的「偏好設定」，切到 PyDev 如下的頁面，點選上半部視窗的「New...」按鈕，輸入路徑 `/usr/bin/python`，至於名字可以任意輸入，我習慣加上個版本號。完成之後，PyDev 會自動抓取 `PYTHONPATH`，也就是下圖中下半部份的視窗。好在這部份不用傷神輸入。

![](http://2.bp.blogspot.com/--dQy7oHi8XU/Tvfockstk5I/AAAAAAAAJFg/s59aFMnJvZ4/s800/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-12-26+%25E4%25B8%258A%25E5%258D%258811.18.55.png)
