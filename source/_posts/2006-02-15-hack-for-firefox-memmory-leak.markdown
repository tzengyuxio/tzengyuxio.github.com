--- 
layout: post
title: "［HACK］Firefox Memmory Leak 調整方法"
date: 2006-02-15 06:14:00 +08:00
comments: true
categories: [雜筆, software]
tags: [firefox]
---

<span style="color:gray;">引用自：[[分享]Firefox v1.5.0.1 with extension pack (02/10) 第十版 新增選用套件](http://www.cyndi.idv.tw/forum/viewtopic.php?t=109643&start=0&postdays=0&postorder=asc&highlight=&sid=5d5c625eb48de617ee62cac1242b03ee) （也許需登入）</span>

使用 Firefox 最大的困擾就是記憶體越吃越大，跑久一點，幾百 Mega 的 Memory 就被火狐吃掉了。下面的方法可以限制 Firefox 的記憶體運用，避免 Memory 狂掉的問題：

<!-- more -->

> Firefox v1.5 Memory Leaks調整方法  
> 
> 1. 開啟一個新分頁，鍵入about:config
> 2. 在這個顯示頁面上，隨意空白處點取「新增(New)」，選擇「整數(Integer)」
> 3. 跳出對話框中輸入：browser.cache.memory.capacity
> 4. 輸入想限制的記憶體大小：如16MB就打「16384」，32MB就打「32768」，64MB就打「65536」，以此類推。
> 5. 再加入一個真假值，取名：config.trim_on_minimize，數值：true
> 6. 按OK後關掉此分頁，並關掉整個Firefox後新新啟動
> 7. 使用Windows工作管理員監看記憶體使用情形有無下降

從字面意義來看，新增的兩個設定值的涵義分別為：

- `browser.cache.memory.capacity`：瀏覽器的記憶體使用上限
- `config.trim_on_minimize`：視窗最小化時清除不必要的記憶體使用

實際實驗的結果，因為我分頁一開就是開一堆，所以偶爾還是會有超過 `browser.cache.memory.capacity` 設定值的情況；不過當視窗最小化時，記憶體的佔用就會大幅釋放。加入這兩個設定後，除了記憶體的使用變得更有效率之外，Firefox 也變得比較穩定，不會有過去狂吃記憶體到最後整個當掉的情況了。