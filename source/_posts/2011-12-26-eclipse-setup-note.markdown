--- 
layout: post
title: "Eclipse 安裝筆記 - 前言與目錄"
date: 2011-12-26 04:17:00 +08:00
categories: [coding]
tags: [cpp, java, eclipse, svn, python, git]
---

用了 Eclipse 也好一陣子了，不過每次需要重新安裝 Eclipse 的時候，或多或少總還是會遇到一些問題。雖然說現在網路很方便，google 一下都可以找到這些問題的解決方式，但為了這些問題免不了又是花上一些時間在搜尋與嘗試上，許多甚至還是以前遇過又重新碰到的問題。因此，不如乾脆自己寫點筆記，既加深印象，就算下次忘了，至少也不用再到茫茫網海中搜尋解決方案。

<a href="http://3.bp.blogspot.com/-NjNp_x0dh8E/TveErHlc8nI/AAAAAAAAJD4/RGELy-s4xto/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-12-26+%25E4%25B8%258A%25E5%258D%25884.15.34.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="172" src="http://3.bp.blogspot.com/-NjNp_x0dh8E/TveErHlc8nI/AAAAAAAAJD4/RGELy-s4xto/s320/%25E8%259E%25A2%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7+2011-12-26+%25E4%25B8%258A%25E5%258D%25884.15.34.png" width="320" /></a>

<!-- more -->

先列出我的 Eclipse 開發環境需求：

- 程式語言：C++, Java, Python
- 版本管理：Subversion, Git

應該還算簡單。其實還有一些其他想裝的，比方說 php 或 Lua 或 JavaScript 或 Mercurial，這些都是將來哪天說不準會用到的東西。要是以前的我，可能就會想說一開始就全部裝到好，一次搞定；不過現在的我比較傾向**「還沒用到的東西就先不安裝」**，因為可能就真的一直都用不到，裝了也不過是裝個心安而已。專案開發也是一樣道理，我們經常在分析設計時加入過多的功能與設計，然而許多時候這些功能或設計都是壓根用不到或是不被需要的，這點有機會的話再討論，此處就不多做贅言。

在目前主流的三大 IDE 中，我一直覺得 Eclipse 是最不友善的一個，儘管它的功能很強大，擴充上也具有彈性。**Eclipse 的不友善，從下載時候就開始了**，官網上提供各種功能不同的 Package，看似方便，其實增加許多障礙。我在教學時，超過一半的學生在下載這邊就會卡住；即便是有經驗的程式設計師，要是他有開發 C++ 與 Java 的需求，第一次來到 Eclipse 的下載頁面，相信他也會面臨第一道選擇題：

> 到底我要下載 for Java 的版本還是 for C/C++ 的版本還是都下載？

當然，有經驗的 Eclipse 開發者知道各個語言的開發套件都可以事後安裝，進一步說，Eclipse 用來安裝擴充套件的「Install New Software」幾乎是每個 Eclipse 開發者都會使用到的功能，至少你得安裝個 CVS 以外的版本控制系統。既然如此，那麼何不一開始就只提供一個不含開發語言的 Eclipse 包，第一次執行時便強制讓使用者透過「Install New Software」的機制來選擇要使用的開發語言，順便也是強迫學習「Install New Software」的流程。

不過話說回來，這個「Install New Software」的功能設計的也不友善就是。或許我早被荼毒已久，自己使用上還沒感覺，可是在看學生操作時，才發現「Install New Software」的 UI 處處是陷阱，很難第一時間了解要以什麼樣的順序在什麼地方輸入什麼資料。

還有一點要抱怨的是，Eclipse 裡的術語眾多，頭字語滿天飛，CDT, RAP, ATF 什麼的一堆，我要裝個 Git 還得先搞懂 EGit 跟 JGit 到底有什麼差別。術語和頭字語的問題在程式語言開發的領域中在所難免，這我可以理解，可是 Eclipse 的世界中硬是比其他開發環境多出許多，一眼看去彷彿有字天書。<u>工具是用來解決問題的，不過這下反而製造了更多的問題讓使用者學習。</u>寫到這裡我突然想感謝 Microsoft 沒有在 Visual Studio 的安裝介面選項中將「Microsoft SQL Server」縮寫成 MSS。

啦哩拉雜提了一堆，該回到正題。我的 Eclipse 安裝了以下套件：

- [C/C++ Development Tooling (CDT)][eclipse]
- [PyDev - Python IDE for Eclipse][eclipse 2]
- [EGit - Git Team Provider][eclipse 3]
- [Subclipse][eclipse 4]
- [Eclipse Color Theme][eclipse 5] 主要是為了 [zenburn][imukuppi] 這個 color theme

為了方便起見，分成以下四篇文章說明：

- [在 Eclipse 開發 C/C++](/blog/2011/12/26/eclipse-for-cplusplus/)
- [在 Eclipse 開發 Python](/blog/2011/12/26/eclipse-for-python/)
- [在 Eclipse 使用 Git 與 SVN](/blog/2011/12/26/eclipse-with-git-and-svn/)
- [我的 Eclipse 初始設定調教](/blog/2011/12/27/my-eclipse-settings/)

最後補充一點說明，我的安裝環境是 Mac OS X, 所以 C++ 的 compiler 與 Python 的 interpreter 都已經系統內建。在 Windows 上對應的話，得要先安裝個 MinGW 與 Python for Windows 來提供編譯與直譯環境。

[eclipse]: http://www.eclipse.org/cdt/downloads.php
[eclipse 2]: http://marketplace.eclipse.org/content/pydev-python-ide-eclipse
[eclipse 3]: http://eclipse.org/egit/downloads
[eclipse 4]: http://marketplace.eclipse.org/content/subclipse
[eclipse 5]: http://marketplace.eclipse.org/content/eclipse-color-theme
[imukuppi]: http://slinky.imukuppi.org/zenburn/