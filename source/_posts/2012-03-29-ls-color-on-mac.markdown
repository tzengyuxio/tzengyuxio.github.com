---
layout: post
title: "ls Color on Mac"
date: 2012-03-29 01:44
comments: true
categories: [mac, shell]
---

![ls color](/images/2012/2012-03-29-ls-color.png)

昨天突然心血來潮想到來替 ls 上個顏色。以前用 Linux 時都有很漂亮的 ls 輸出，除此之外也會認真打造個人的 shell 環境。怎知開始用 Mac 兩年多來，都忘記來把 shell 好好調教一番，幾乎一直維持著原汁原味。

是說原本預設的也夠我用了就是，不過有個多采多姿的 ls 輸出不僅能提昇工作效率，光看著心情也會好起來。

## 開啟顏色輸出

在 Linux 要開啟顏色輸出是透過 `ls --color` 指令。而在 Mac 或 BSD 上則是使用 `ls -G`。

當然，每次都加這參數也是麻煩。寫程式的都是懶人，所以我在 `~/.bashrc` 檔案中加入下面這行設定：

    alias ls='ls -GF'

要說明一下的是，上面的設定除了開啟顏色輸出外，還加了 `-F` 這個能夠在 ls 輸出中加入識別符號的參數。像是目錄的名字後面會加上 '/', 可執行檔會加上 '*',  符號連結 (symbolic link) 會加上 '@' 等等。

## 顏色的指定

關於顏色的指定，Linux 使用 `LS_COLORS` 環境變數，BSD 則是使用 `LSCOLORS`。兩者的設定方式也不同，這部份網路上資料很好找，就不贅述。

直接說結果，我所使用的顏色組合如下：

    export LSCOLORS=gxfxbEaEBxxEhEhBaDaCaD

將這行加入 `~/.bash_profile` 就可以享受美美的 ls 了。這個配色設定是從 [LSCOLORS=gxfxbEaEBxxEhEhBaDaCaD][1] 這網頁參考來的。

[1]: https://github.com/seebi/dircolors-solarized/issues/10

附帶一提，Mac 或 BSD 的 `LSCOLORS` 參數只能指定預設檔案類型的顏色，比較常見的類型只有檔案、可執行檔、符號連結三種。Linux 的 `LS_COLORS` 除了上述這些之外，還可以針對附檔名作指定，像是把 .zip .rar .tgz 等壓縮檔設成黃色；然後 .avi .m4v .mov 等影片檔設成洋紅色之類的。

## 補充資訊

1. BSD 下還有一個環境變數 `CLICOLOR`, 在 `~/.bash_profile` 中加入 `export CLICOLOR=1` 可以得到跟 `ls -G` 一樣的效果。
2. 如果想要自己配色的，[LSCOLORS Generator][2] 這個網頁提供了一個方便的配色小工具。
2. 喜歡 Solarized 的話，[seebi/dircolors-solarized][3] 是一個將 Solarized 延伸到 ls color 的專案。可惜只適用在 **GNU ls**, 也就是 Linux 系統上的 ls。
3. 如果你無論如何也想在 Mac 上看到壓縮檔、影片檔、音樂檔等不同類型檔案也有不同顏色，或是想要使用上面提到的 Solarized ls 配色，那麼可以考慮安裝 [Coreutils - GNU core utilities][4] 這套件。


[2]: http://geoff.greer.fm/lscolors/
[3]: https://github.com/seebi/dircolors-solarized
[4]: http://www.gnu.org/software/coreutils/