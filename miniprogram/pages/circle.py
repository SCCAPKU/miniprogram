#!/usr/bin/python
# -*- coding: UTF-8 -*-
import json
import xlrd
import xlwt
import argparse
import sys
import os
import time

today = time.strftime("%Y-%m-%d", time.localtime())


workbook = xlrd.open_workbook('猫咪档案.xlsx')

data = workbook.sheets()[0]

rowNum = data.nrows  # sheet行数
colNum = data.ncols  # sheet列数

# 获取所有单元格的内容
data_list = []
for i in range(12, rowNum):
	rowlist = []
	for j in range(colNum):
		ctype = data.cell(i, j).ctype
		cell = data.cell_value(i, j)
		if data.cell(i, j).ctype == 3:
			dt = xlrd.xldate.xldate_as_tuple(data.cell_value(i, j), 0)
			rowlist.append('%04d-%02d-%02d' % dt[0:3])
			continue
		if ctype == 2 and cell % 1 == 0.0:  # ctype为2且为浮点
			cell = int(cell)
			rowlist.append(cell)
			continue
		rowlist.append(data.cell_value(i, j))
	data_list.append(rowlist)


# 输出所有单元格的内容

rowNum -= 12

"""

for i in range(rowNum):
	for j in range(colNum):
		print(data_list[i][j], ' ',end="")
	print('\n')

"""



labels = [
	[2, '名字', lambda x:'【还没有名字】' if len(x) < 1 else x],
	[3, '是否写入图鉴', lambda x:x],
	[4, '昵称', lambda x:x],
	[5, '毛色', lambda x:x],
	[7, '性别', lambda x:'公' if x == 1 else '母' if x == 0 else '未知'],
	[8, '状况', lambda x:'不明' if len(x) < 1 else x],
	[9, '绝育情况', lambda x:'已绝育' if x == 1 else '未绝育' if x == 0 else '未知/可能不适宜绝育'],
	[10, '绝育时间', lambda x:str(x)],
	[11, '出生时间', lambda x:x],
	[12, '外貌', lambda x:x],
	[13, '性格', lambda x: '亲人可抱' if x == 6 else '亲人不可抱 可摸' if x == 5 else '薛定谔亲人' if x == 4 else '吃东西时可以一直摸' if x == 3 else '吃东西时可以摸一下' if x == 2 else '怕人 安全距离1m以内' if x == 1 else '怕人 安全距离1m以外' if x == 0 else '未知 数据缺失' ],
	[14, '第一次被目击时间', lambda x: str(x)],
]

data_json = []

for i in range(rowNum):
	json_line = {}

	if len(data_list[i][5]) < 1: # 毛色都不知道那就是没有【x
		continue

	for j in labels:
		json_line[j[1]] = j[2](data_list[i][j[0]])

	data_json.append(json_line)
	#print(json_line)

#创建猫文件夹
if not os.path.exists('cats'):
	os.makedirs('cats') 

for line in data_json:
	if line['是否写入图鉴'] != '':
		if not os.path.exists('cats/'+ line['名字']):
			os.makedirs('cats/'+ line['名字'])#创建每只猫的文件夹
		#创建js文件
		with open('cats/' + line['名字'] + '/' + line['名字'] + '.js', 'w') as f:
			f.write( 'Page({ \n data: {\n' 'catname:"' +line['名字'] + '",\n catitems:[ \n')
			for j in labels:
				#打印名字，需要复制到index.js文件中
				if j[1] == '名字':
					#print('{ name:"'+str(line[j[1]])+'"},')
					continue
				if str(line[j[1]]) == '' or j[1] == '是否写入图鉴':
					continue
				#print(j[1] + " " + str(line[j[1]]))
				f.write('{category:"' + j[1] + '",\n content:" ' + str(line[j[1]]) + '",},\n')
			#编写日期
			f.write('{category:"编写日期",\n content:" ' + today + '",},\n')
			f.write( '], \n')
			f.write( 'nums:[\n')
			for i in range(int(line['是否写入图鉴'])):
				f.write( '{ ' + 'num: {} '.format(i+1) + '},\n')
			f.write( ']},\n')
			with open('js.txt','r') as f2:
				f.write(f2.read())
		#补充另外两个文件
		with open('cats/' + line['名字'] + '/' + line['名字'] + '.json', 'w') as f:
			with open('json.txt','r') as f2:
				f.write(f2.read())
		with open('cats/' + line['名字'] + '/' + line['名字'] + '.wxml', 'w') as f:
			if line['名字'] == '小黄鸭':
				with open('文案/小黄鸭.txt','r') as f2:
					f.write(f2.read())
				continue
			with open('wxml.txt','r') as f2:
				f.write(f2.read())
				
#编写index文件
with open('index/' + 'index.js', 'w') as f:
	f.write( '//index.js \n Page({ \n data: { \n catlist: [\n ')
	for line in data_json:
		if line['是否写入图鉴'] != '':
			for j in labels:
				if j[1] == '名字':
					f.write( ' { name:"'+str(line[j[1]])+'"},\n' )
					print(str(line[j[1]]))
	with open('index.txt','r') as f2:
		f.write(f2.read())
