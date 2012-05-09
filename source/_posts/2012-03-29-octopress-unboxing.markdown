---
layout: post
title: "Octopress 開箱首發文"
date: 2012-03-29 16:55
comments: true
categories: [雜筆]
tags: [blogger, octopress]
---

前天與昨天兩天我都在修改 blogger 的 template－－起因是這樣：我在 Chrome 裝了個 [HTML5 Outliner][google] 的擴充，透過這個擴充，可以查看某個網頁的大綱排列是否如預想的一樣。很顯然，blogger 預設提供的幾個範本並沒有良好的 HTML5 大綱結構，於是我決定動手修改它。

<!-- more -->

原本以為這是個小工程，沒想到卻花了我整整一夜一天的時間在和 **blogger template** 的語法纏鬥。blogger template 用到了許多神乎奇技的技巧，可以在一個 template 檔案中同時提供桌面與行動等不同平台的版面；同時提供首頁、封存、標籤與單篇等不同文章組合的版面；可以提供各式各樣的參數讓你在後台中只要簡單選選顏色調整大小就可以做出各式各樣的變化。而這些全部都是在一個 XML 檔案裡就可以搞定。

但也正因如此，許多設定與參數都是牽一髮動全身，想改也不曉得從哪邊改才安全。偏偏 blogger template 的設定與參數目前還缺乏文件，網路上能找到的多半是舊版的 template 語法。很多時候看到一個 css class 你只能先用猜的猜他的用途，然後慢慢試誤。最後雖然整出了滿意的結果，也獲得了不少寶貴的經驗－－但心中卻冒出了一個更大的疑問：

**「我真的想要再和這個怪物繼續相處下去嗎？」**

念頭一起，手也沒停著。立刻就進了不久前才開的 [Tumblr][tumblr] 帳號琢磨了許久。「要轉到 Tumblr 嗎？」我這麼問著自己，然而心裡總覺得還有什麼缺憾沒有被滿足。這時腦袋閃過先前看過的 [Octopress][octopress], 數週前第一眼看到時沒什麼興趣，這次決定給它個機會，動手裝個起來玩玩看。

裝的過程還算順利，但也不是完全一帆風順。我遇到了一個 `rb-fsevent` 編譯錯誤的問題，幸好在 [這篇文章][newbsd] 中找到了解決方式，重點在於一行 `xcode-select` 指令。

架設好了環境，索性又申請了一個新的域名，這下真的是徹頭徹尾搬了新家。鷹架都搭好了，剩下的就是充實內容了。希望新的環境能夠帶來更愉快的書寫體驗，也期許自己今年能夠有更充實文章記錄。

[google]: https://chrome.google.com/webstore/detail/afoibpobokebhgfnknfndkgemglggomo
[newbsd]: http://newbsd.com/blog/2012/03/19/my-first-try-install-octopress-on-my-mac-os-x-lion-10-dot-7-3-and-some-thing-stuff/
[octopress]: http://octopress.org/
[tumblr]: http://tzengyuxio.tumblr.com/