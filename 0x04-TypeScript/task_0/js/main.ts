interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string,
}

const student1: Student = {
	firstName: "Francis",
	lastName: "Ohazulike",
	age: 25,
	location: "Lagos",
}

const student2: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 30,
	location: "Abuja",
}

const studentsList: Student[] = [student1, student2];

// Create and append the table using vanilla JavaScript

const table = document.createElement('table')
const tbody = document.createElement('tbody')

studentsList.map((val) => {
	const trow = document.createElement('tr')
	const tdataName = document.createElement('td')
	const tdataLocation = document.createElement('td')

	tdataName.textContent = val.firstName
	tdataLocation.textContent = val.location

	trow.appendChild(tdataName)
	trow.appendChild(tdataLocation)
	tbody.appendChild(trow)
})
table.appendChild(tbody)
document.body.appendChild(table)
