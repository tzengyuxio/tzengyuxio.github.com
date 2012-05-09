--- 
layout: post
title: "［FreeBSD］MySQL 的啟動"
date: 2006-01-21 10:05:00 +08:00
comments: true
categories: [雜筆, coding]
tags: [freebsd, mysql]
---

重裝了 MySQL 後發現，當 server 整個 reboot 的時候，MySQL 並沒有被啟動。找了一下發現[原因](http://www.lab.mlc.edu.tw/modules/newbb/viewtopic.php?topic_id=238&forum=5)。現在得像 apache 或 sendmail 等服務一樣，在 `rc.conf` 中加入

    mysql_enable="YES"

另外，若要知道有哪些 server 必須透過 `rc.conf` 來啟動的，可以透過下列方式：

    cd /usr/local/etc/rc.d/
    grep _enable *

或是在安裝完套件後，view 一下 `/usr/local/etc/rc.d/xxx.sh`，看看要在 `rc.conf` 中加入什麼選項才能於開機時自動啟動。

----

<span style="color:gray;">參考自：[The FreeBSD Network Laboratory Studio](http://www.lab.mlc.edu.tw/modules/newbb/viewtopic.php?topic_id=238&forum=5).</span>