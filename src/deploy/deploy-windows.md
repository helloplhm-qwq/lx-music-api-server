---
head:
  - - meta
    - name: keywords
      content: Windows部署教程
title: Windows部署教程
icon: fas fa-file-alt
author: ikun0014
date: 2024-06-15
index: false
---

## 部署教程

1.下载并且安装Python3.10-3.11  
前往[Python官网](https://www.python.org/downloads/release/python-3119)下拉即可找到Python3.11.9的下载链接  
![图1](https://img2.imgtp.com/2024/04/11/q3NfsbUp.png)  
然后安装Python  
![图2]()

2.下载并且安装Git  
[点击我加速下载](https://github.moeyy.xyz/github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/Git-2.44.0-64-bit.exe)  
![图1](https://img2.imgtp.com/2024/04/11/Oa6RHDrb.png)  
一路点击Next和Install即可

3.使用Git克隆仓库
``` bash
git clone https://github.com/MeoProject/lx-music-api-server -b main
```

4.使用pip或poetry进行依赖项安装
::: details pip
``` bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple(可选的操作)
pip install -r requirements.txt
```
:::  

::: details poetry
``` bash
pip install poetry
poetry install
```
:::

5.启动服务器
::: details 使用pip
``` bash
python main.py
```
:::  

::: details 使用poetry
``` bash
poetry shell
python main.py
```
:::

如果终端上出现监听IP:端口，那么恭喜您，您已经完成部署:yum: