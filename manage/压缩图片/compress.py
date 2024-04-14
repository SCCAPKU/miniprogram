#!/usr/bin/env python
# -*- coding:utf-8 -*-
# 压缩图片脚本
from PIL import Image, ExifTags
from pathlib import Path
import os
from pathlib import Path
import sys


def get_file_size(fileName):
    size = os.path.getsize(fileName)
    return size / 1024


def compress_file_jpg(fileName):
    sizeMax = 700  # 大图长边的像素数
    inputPath = Path('input/')
    outPath = Path('out_put_files/')
    im = Image.open(inputPath / fileName)

    try:
        for orientation in ExifTags.TAGS.keys():
            if ExifTags.TAGS[orientation] == 'Orientation':
                break
        exif = dict(im._getexif().items())
        if exif[orientation] == 3:
            im = im.rotate(180, expand=True)
        elif exif[orientation] == 6:
            im = im.rotate(270, expand=True)
        elif exif[orientation] == 8:
            im = im.rotate(90, expand=True)
    except:
        pass

    im = im.convert('RGB')
    im.save(outPath / fileName)

    x, y = im.size
    if x < sizeMax and y < sizeMax:
        # 原图尺寸足够小
        im.save(outPath / fileName)
    else:
        if x > y:
            x_resize = sizeMax
            y_resize = int(y/x*sizeMax)
            out = im.resize((x_resize, y_resize))
        else:
            y_resize = sizeMax
            x_resize = int(x/y*sizeMax)
            out = im.resize((x_resize, y_resize))
        out.save(outPath / fileName)
    iterateNum = 3
    while(get_file_size(outPath / fileName) > 100):
        # print(get_file_size(outPath / fileName))
        if(iterateNum == 0):
            break
        im = Image.open(outPath / fileName)
        im.save(outPath / fileName, quality=70)
        iterateNum = iterateNum - 1


def compress_file_png(fileName):
    sizeMax = 150  # 头像长边的像素数
    inputPath = Path('input/')
    outPath = Path('out_put_files/')
    im = Image.open(inputPath / fileName)
    x, y = im.size
    if x < sizeMax and y < sizeMax:
        # 原图尺寸足够小
        im.save(outPath / fileName)
    else:
        if x > y:
            x_resize = sizeMax
            y_resize = int(y/x*sizeMax)
            out = im.resize((x_resize, y_resize))
        else:
            y_resize = sizeMax
            x_resize = int(x/y*sizeMax)
            out = im.resize((x_resize, y_resize))
        out.save(outPath / fileName)
    iterateNum = 3
    while(get_file_size(outPath / fileName) > 40):
        # print(get_file_size(outPath / fileName))
        if(iterateNum == 0):
            break
        im = Image.open(outPath / fileName)
        im.save(outPath / fileName, quality=60)
        iterateNum = iterateNum - 1


if __name__ == '__main__':
    if not os.path.exists('out_put_files'):
        os.makedirs('out_put_files')
    inputPath = Path('input/')
    for fileName in os.listdir(inputPath):
        # 排除隐藏文件
        if fileName[0] == '.':
            continue
        fileType = fileName.split('.')
        if fileType[1] == 'jpg':
            compress_file_jpg(fileName)
        if fileType[1] == 'png':
            compress_file_png(fileName)
