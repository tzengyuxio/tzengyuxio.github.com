--- 
layout: post
title: "Python 遞迴處理路徑下檔案與資料夾"
date: 2012-01-30 16:13:00 +08:00
categories: python
tags: 
---

取得某個路徑下的所有檔案與資料夾是經常會使用到的功能，尤其是在寫一些小工具來處理硬碟上的檔案時。早先我都是用傳統寫 C++ 的方式來思考，所以在 Python 的文件中找到了 listdir() 這個函式，然後寫了類似以下的代碼：<br /><br /><pre class="prettyprint lang-py">import os<br /><br />def doInDir(somedir):<br />    print somedir<br />    fileList = os.listdir(somedir)<br />    for f in fileList:<br />        fullpath = os.path.join(somedir, f)<br />        if os.path.isdir(fullpath):<br />            doInDir(fullpath)<br />        elif os.path.isfile(fullpath):<br />            print fullpath<br /><br />doInDir("/tmp/")<br /></pre><br />不過最近發現在 Python 下做事其實可以更簡單，內建的 os.walk() 就提供了非常強大的功能，使用的方式如下：<br /><br /><pre class="prettyprint lang-py">import os<br /><br />for root, dirs, files in os.walk("/tmp/"):<br />    print root<br />    for f in files:<br />        print os.path.join(root, f)<br /></pre><br />相比之下，同樣的功能用 os.walk() 就精簡了許多。上面兩段程式碼做的事情基本上是一樣的，都是列出指定資料夾下的所有檔案與子資料夾；不過有個小小地方需要注意一下，就是用兩種方法索處理的內部順序並不相同。listdir() 會按照深度優先搜索的順序，一層一層往下深入，其中檔案與資料夾的先後順序是交替穿插的；而 os.walk() 因為把檔案與文件夾都歸類好放在各自的 list 中，因此兩者的處理是分開的。以下是上面兩段程式針對同一個範例資料夾的輸出，可以看出處理順序的不同。<br /><br />os.walk()<br /><pre>/testtree/<br />/testtree/1file<br />/testtree/3file<br />/testtree/2dir<br />/testtree/2dir/21file<br />/testtree/2dir/24file<br />/testtree/2dir/22dir<br />/testtree/2dir/22dir/221file<br />/testtree/2dir/23dir<br />/testtree/4dir<br /></pre><br />os.listdir()<br /><pre>/testtree/<br />/testtree/1file<br />/testtree/2dir<br />/testtree/2dir/21file<br />/testtree/2dir/22dir<br />/testtree/2dir/22dir/221file<br />/testtree/2dir/23dir<br />/testtree/2dir/24file<br />/testtree/3file<br />/testtree/4dir<br /></pre>
