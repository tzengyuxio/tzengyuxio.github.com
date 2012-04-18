--- 
layout: post
title: ［心得］硬碟切割
date: 2005-11-22 04:24:00 +08:00
comments: true
categories: memo
tags: [freebsd, windows]
---

先前我的做法都依據 Clive Tong-I Lin 的 [8G 經驗法則](http://groups.google.com.tw/group/tw.bbs.comp.386bsd/msg/ccf7216150299ee4)：

> 我的 8G 經驗法則是, 前 8G 系統用, 其它給 /home。  
> 至於那前 8G 就在 sysinstall 直接給它 auto 不去煩惱了。
>
> 一般 server 用途, 8G 經驗法則還沒破功過 :)
>
> Windows server 我也是這樣規劃, 前 8G 畫成 C: 灌系統,  
> 其它的空間全劃成 D: 有的沒的任何資料都放 D:
>
> 儘供參考。

不過上述經驗法則主要是針對 server 用途而言。而且隨著軟體越來越龐大（尤其是安裝了 VS.NET 之後，我以前不裝這玩意兒的），以及經歷過幾次 `/var` 爆掉的慘痛教訓（FreeBSD auto 預設給的 `/var` 都不大），看來似乎得重新思索一下硬碟分割的策略。

1. 系統給 10G（目前用最多的大概用到 8.2G/Windows，5G/FreeBSD without X）

2. 剩下的給 `D:` 或 `/home`

3. FreeBSD 下系統的分配策略：

    1. `/` : 256M

    2. `/tmp` : 不大於 ram (或乾脆 = ram 就好)

    3. `swap` : 不小於 ram，ram 越小給越多，但不超過兩倍 (或乾脆 = ram 就好)

    4. `/var` 視剩餘空間與 X 的安裝與否，分配 1～2G

    5. 其餘通通給 `/usr` (至少須 6G 以上)

4. 將部份資料搬移出系統分割區

    1. `C:\Documents and Settings\username\My Documents` 搬到 `D:\HOME\username`

    2. `/usr/local/www` 搬到 `/home/www` 下

    3. 如果 `/usr` 空間吃緊，將 `/usr/ports/distfiles` 也搬到 `/home` 底下

5. 原則：所有「有意義」的變動性檔案、文件，或需要儲存備份的資料，都往 `D:` 或 `/home` 底下丟

    1. 像「網頁 cache」就是屬於**無意義的**變動性檔案；反之，「遊戲存檔」是**有意義的**

    2. 非常用的軟體的也丟到 `D:` 或個人資料夾下，如臨時安裝的程式，或是遊戲軟體

    3. 將所有系統分割區中需要備份的檔案（如設定檔）在 `D:` 或 `/home` 之下建立捷徑或 symbolic link

    4. 此為原則，有些情況不必完全照著原則來。如資料庫檔案通常還是放在 `/var/db`

6. **總之 10G 給系統，剩下的都拿來塞資料用** XD

其實重點只需記住最後一點，至於其他的細節，那些都是個人經驗的累積，參考看看即可，不必然全部照作。