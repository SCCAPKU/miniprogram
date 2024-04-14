# !/usr/bin/python
#  -*- coding: UTF-8 -*-

import pandas as pd
import datetime
import json
import sys
import os
import time

today = time.strftime("%Y-%m-%d", time.localtime())

print(today)

new_list = []
with open("input.json", encoding='utf-8') as f:
    lines = f.readlines()
    lines = [x.strip() for x in lines if x.strip() != '']
    for line in lines:
        y = json.loads(line)
        new_list.append(y)

# 改变表格列的顺序
df = pd.DataFrame(new_list)
col = list(df.columns)
col.remove('name')
col.remove('_id')
col.insert(0, 'name')
col.insert(0, '_id')
df = df[col]
# df['_id'] = df['_id']['$oid']
for row in range(df.shape[0]):
    df['_id'][row] = df['_id'][row]['$oid']

df.sort_values('_id')

if not os.path.exists('表格备份'):
    os.mkdir('表格备份')

# 写入 csv 表格
df.to_csv("表格备份/" + today + ".csv", index_label="index_label")

# 写入 Excel 表格
df.to_excel("表格备份/" + today + ".xlsx")
