"use strict"

const {getDayOfWeek} = require('../lib/zeller')


const monthDays = (month) => {
	let daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	let monthSelect = daysInMonth[month]
	return monthSelect
}

const weekStart = (q) => {
	let spaces = "   "
	let weekArray = []
	for (var i = 0; i < q; i++){
		weekArray.push(spaces)
	}
	return weekArray
}

const monthBuild = (year, month, q) => {
	let day = getDayOfWeek(year, month, q)
	let spaceArray = weekStart(day)
	let alltheDays = monthDays(month)
	for (var i = 0; i < alltheDays; i++){
		if (i < 9){
			spaceArray.push(` ${i+1} `)
		} else {
			spaceArray.push(`${i+1} `)
		}
	}
	let spaces = "   "
	for (var i = 0; i < day; i++){
		spaceArray.push(spaces)
	}
	return spaceArray
}

module.exports = {monthDays, weekStart, monthBuild}