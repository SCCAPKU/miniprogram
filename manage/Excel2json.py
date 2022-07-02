# !/usr/bin/python
#  -*- coding: UTF-8 -*-
import datetime
import json
import argparse
import sys
import os
import time
import urllib.parse
import urllib
import openpyxl

today = time.strftime("%Y-%m-%d", time.localtime())


workbook = openpyxl.load_workbook('../../猫咪档案.xlsx')

data = workbook.active

rowNum = data.max_row  # sheet行数
colNum = data.max_column   # sheet列数


#  获取所有单元格的内容
data_list = []
for i in range(12, rowNum):
    rowlist = []
    for j in range(colNum):
        cell = data.cell(i+1, j+1).value
        if isinstance(cell, datetime.datetime):
            cell = cell.strftime("%Y-%m-%d")
            # print("a")
        if cell == None:
            cell = ''
        rowlist.append(cell)
    data_list.append(rowlist)


#  输出所有单元格的内容

rowNum -= 12

"""

for i in range(rowNum):
    for j in range(colNum):
        print(data_list[i][j], ' ',end="")
    print('\n')

"""


labels = [
    [2, '名字', lambda x:'【还没有名字】' if len(x) < 1 else x],
    [3, '加照片数', lambda x:x],
    [4, '昵称', lambda x:x],
    [5, '毛色', lambda x:x],

    [8, '性别', lambda x:'公' if x == 1 else '母' if x == 0 else '未知'],
    [9, '状况', lambda x:x],
    [10, '绝育情况', lambda x:'已绝育' if x ==
     1 else '未绝育' if x == 0 else '未知/可能不适宜绝育'],
    [11, '绝育时间', lambda x:str(x)],
    [12, '出生时间', lambda x:x],
    [14, '性格', lambda x: '亲人可抱' if x == 6 else '亲人不可抱 可摸' if x == 5 else '薛定谔亲人' if x == 4 else '吃东西时可以一直摸' if x ==
     3 else '吃东西时可以摸一下' if x == 2 else '怕人 安全距离 1m 以内' if x == 1 else '怕人 安全距离 1m 以外' if x == 0 else '未知 数据缺失'],
    [15, '第一次目击', lambda x: str(x)],
    [25, '失踪时间', lambda x:str(x)],
    [20, '送养时间', lambda x:str(x)],
    [21, '离世时间', lambda x:x],
    [13, '外貌', lambda x:x],
    [24, '更多', lambda x:x],
    [17, '关系', lambda x: str(x)],
    [23, '加音频数', lambda x: 0 if x == '' else str(x)]
]

data_json = []

for i in range(rowNum):
    json_line = {}

    if len(data_list[i][5]) < 1:  # 毛色都不知道那就是没有【x
        continue

    for j in labels:
        json_line[j[1]] = j[2](data_list[i][j[0]])

    data_json.append(json_line)


with open('all.json', 'w', encoding='utf-8') as f:
    for line in data_json:
        if line['加照片数'] == '':
            continue
        num = 0
        f.write('{\n')
        newLine = line.copy()
        for item in line:
            if line[item] == '':
                del newLine[item]
        for item in newLine:
            num = num + 1
            if item == '加照片数':
                if line['加照片数'] == '0':
                    continue
            a = '  "' + str(item) + '": "' + str(line[item]) + '"'
            f.write(a)
            if num < len(newLine):
                f.write(',\n')
        f.write("\n}\n")
