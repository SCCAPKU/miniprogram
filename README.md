# miniprogram

此代码使用 MIT License ，大家可以随意使用，包括商业用途。如果想打算使用的话，最好能告诉我们一声 circlelq@pku.edu.cn 我们期待收到各位的好消息～

2019 年 9 月，北京大学学生流浪猫关爱协会日常部部长 circle 自主开发出“燕园猫速查手册“小程序。小程序以猫咪证件照及其档案为主要内容，涵盖名称、外貌、绝育、送养及亲人情况等信息，力图简要展现校内猫咪形象，增进爱猫群众对校内猫咪的认识，从而建立起更好的人猫互动关系。为了让其它的小动物保护组织也能使用这个小程序，circle在此公开所有源代码。如有疑问可以联系 circle circlelq@pku.edu.cn ，circle 最近比较忙，没能及时回复邮件请见谅。

这个版本是一个老版本，并尽量让大家可以方便使用，之后会更新。大家可以参考 circle 目前自己使用的代码 https://github.com/circlelq/miniprogram 。

## 如何使用

其实整体来说使用非常简单，主要是填写 Excel 表格并保存，然后运行一下 python 代码就行，不需要写任何小程序的代码。

1. 下载小程序开发者工具，把 miniprogram 文件里的所有东西复制到你新建的小程序里。
2. 填写 page 文件夹里的 Excel 表格并保存。
3. 运行 python 代码 `circle.py`。

circle 打算有空的时候做一个使用说明视频，如果光看这个 md 文件还是不知道怎么弄的话可以先等等。

## 修改

一些信息需要修改，才能符合不同的社团。例如北大猫协的简介，在 pages/about/about.wxml 文件里，会徽图片在 pages/images 里，pages/ 文案 给出了一个在图鉴后面添加其它文字的例子。

另外还有一个比较重要的事情就是改猫的图片，circle 之前是在 http://gitee.com 上传图片，目前 gitee 似乎速度也比较慢，大家可以寻找合适的图床，然后让小程序调用图片，因为小程序允许上传的文件大小很小。需要修改 pages/wxml.txt 文件中的调用地址（把 "https://gitee.com/circlelq/cat_photos /raw/master/{{item.name}}_circle.png" 改成你的地址），以及 pages/index/index.wxml 文件中的地址，注意一下图片格式和命名方法。

## 我们的小程序

![image](小程序.JPG)

## 我们的公众号

![640](640.jpeg)

## 打赏图片和链接

![donate](donate.jpeg)

https://weidian.com/item.html?itemID=2742068017&ifr=pbj_item_3490&wfr=pbj_item_3490

