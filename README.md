# miniprogram

2019年9月，北京大学学生流浪猫关爱协会日常部部长circle自主开发出“燕园猫速查手册“小程序。小程序以猫咪证件照及其档案为主要内容，涵盖名称、外貌、绝育、送养及亲人情况等信息，力图简要展现校内猫咪形象，增进爱猫群众对校内猫咪的认识，从而建立起更好的人猫互动关系。为了让其它的小动物保护组织也能使用这个小程序，circle在此公开所有源代码。如有疑问可以联系circle circlelq@pku.edu.cn

## 如何使用

整体来说使用非常简单，主要是填写Excel表格，然后运行一下python代码就行，不需要写任何小程序的代码。

1. 把miniprogram文件里的所有东西复制到你新建的小程序里。
2. 填写page文件夹里的Excel表格并保存。
3. 运行python代码`circle.py`。

## 修改

一些信息需要修改，才能符合不同的社团。例如北大猫协的简介，在 pages/about/about.wxml 文件里，会徽图片在 pages/images里，pages/文案 给出了一个在图鉴后面添加其它文字的例子。

另外还有一个比较重要的事情就是改猫的图片，circle是在 http://gitee.com 上传图片，然后让小程序调用图片，因为小程序允许上传的文件大小很小。需要修改pages/wxml.txt 文件中的调用地址（把 "https://gitee.com/circlelq/cat_photos /raw/master/{{item.name}}_circle.png" 改成你的地址），以及 pages/index/index.wxml 文件中的地址，注意一下图片格式和命名方法。

## 我们的小程序

![image](小程序.JPG)
