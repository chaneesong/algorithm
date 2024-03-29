#!/usr/bin/env python
# -*- coding: utf-8 -*-

def reorderLogFiles(logs):
	letter, digit = [], []
	
	for log in logs:
		if log.split()[1].isdigit():
			digit.append(log)
		else:
			letter.append(log)

	letter.sort(key=lambda x: (x.split()[1:], x.split()[0]))
	return letter + digit

logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
print(reorderLogFiles(logs))