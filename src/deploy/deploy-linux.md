---
head:
  - - meta
    - name: keywords
      content: Linux
title: Linux部署教程
icon: fas fa-file-alt
author: ikun0014
date: 2024-06-15
index: false
---

## Linux部署教程，演示系统：Ubuntu 22.04

1.安装Python,Git
``` bash
sudo apt update
sudo apt install python3 python3-pip git -y
```
2.安装ffmpeg(可选项，如开启本地音乐播放必须安装)
``` bash
sudo apt install ffmpeg
```
3.克隆仓库
``` bash
git clone https://github.com/MeoProject/lx-music-api-server -b main

git clone https://github.moeyy.xyz/github.com/MeoProject/lx-music-api-server -b main
```
根据网络环境选择

4.安装依赖
::: details pip
``` bash
pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple(可选的操作)
pip3 install -r requirements.txt
```
:::  

::: details poetry
``` bash
pip3 install poetry
poetry install
```
:::

5.启动服务器
::: details 使用pip
``` bash
python3 main.py
```
:::  

::: details 使用poetry
``` bash
poetry shell
python3 main.py
```
:::

如果屏幕上输出了监听IP:Port，那么恭喜您，部署已完成!:yum: