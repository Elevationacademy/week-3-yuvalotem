// class Person {
//     constructor(name, startYear) {
//         this.name = name
//         this.startYear = startYear
//         this.courses = []
//     }

//     addCourse(course) {
//         this.courses.push(course)
//     }
// }
// class Student extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.grades = []
//     }

//     receiveGrade(courseName, finalGrade) {
//         this.grades.push({
//             course: courseName,
//             grade: finalGrade
//         })
//     }
// }

// class Teacher extends Person {
//     constructor(name, startYear, sallary) {
//         super(name, startYear)
//         this.sallary = sallary
//     }

//     giveGrade(student, courseName, finalGrade) {
//         student.receiveGrade(courseName, finalGrade)
//     }
//     addCourse(course) {
//         if (this.courses.some(c => c.courseName === course)) {
//             this.courses.forEach(c => {
//                 if (c.courseName === course) {
//                     c = { courseName: c.courseName, courseCount: c.courseCount += 1 }
//                 }
//             })
//         } else {
//             super.addCourse({ courseName: course, courseCount: 1 })
//         }
//     }
// }
// const s1 = new Student("Ronda", 2017)
// console.log(s1.name) //prints "Ronda"

// s1.addCourse("Algebra II")
// console.log(s1.courses) //prints ["Algebra II"]

// // const s1 = new Student("Ronda", 2017)
// // const t1 = new Teacher("Cassandra", 2002, 40000)

// // t1.giveGrade(s1, "Algebra II", 82)
// // const firstGrade = s1.grades[0]

// // console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
// //above should print "Ronda received an 82 in Algebra II"
// //c.courseCount++
// const t1 = new Teacher("Cassandra", 2002, 40000)
// t1.addCourse("Trigonometry")
// t1.addCourse("infi math")
// t1.addCourse("Trigonometry")
// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// t1.addCourse("infi math")
// t1.addCourse("infi math")
// t1.addCourse("infi math")
// t1.addCourse("infi math")
// console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}

//ex 
// class Principal extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.teachers = []
//         this.students = []
//     }
//     hireTeacher(teacher) {
//         this.teachers.push(teacher)
//         console.log(`${this.name} just hired ${teacher.name}`)
//     }
//     recruitStudent(student) {
//         this.students.push(student)

//     }
//     expelStudent(student) {
//         this.students = this.students.filter(s => s.name !== student.name)
//     }
//     transferStudent(student, principal){
//         this.students = this.students.filter(s => s !== student)
//         principal.students.push(student)
//     }
// }

// const p1 = new Principal("Martin", 1991)
// const p2 = new Principal("Martha", 1990)

// const t1 = new Teacher("Cassandra", 2002, 40000)
// const t2 = new Teacher("Kevin", 2006, 30000)

// const s1 = new Student("Ronda", 2017)
// const s2 = new Student("Byron", 2016)

// //1 & 2
// p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
// console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

// p1.hireTeacher(t2) //should print "Martin just hired Kevin"
// console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

// //3 & 4
// p1.recruitStudent(s1)
// p1.recruitStudent(s2)
// console.log(p1.students) //should print Array(2) [Student, Student]

// //5
// p1.expelStudent(s1)
// console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

// //6
// p1.transferStudent(s2, p2)
// console.log(p1.students) //should print Array(0) []
// console.log(p2.students) //should print Array(1) [Student] - the student should be Byron

// local storage

// Functions
// localStorage.setItem('firstName', 'Shoobert');
// console.log(localStorage.lastName);
// localStorage.removeItem('firstName')
// Object
// localStorage.name = 'Shoobert';

// Object
// localStorage['name'] = 'Shoobert';

// localStorage.personalData = JSON.stringify({
//     averageTimeOnSite: {unit: "hr", amt: 9},
//     probabilityOfFriends: 0.02,
//     commonKeywords: ["salsa for one", "1 vs. none Chess"]
//   })

//   let userStuff = JSON.parse(localStorage.personalData)
//   console.log(userStuff.probabilityOfFriends) //prints 0.02

// let userStorage = {
//     darkMode: true,
//     showSideNav: true,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// }
// localStorage.userData = JSON.stringify(userStorage)
// //localStorage.clear()
// const data = JSON.parse(localStorage.userData || "[]")
// // console.log(data);
// if(localStorage.userData){
// if(data.darkMode){
//     $('body').css("background-color", 'black')
//     $('body').css("color", 'white')
// }
// if(data.showSideNav){
//     $('#container').append("<div id='nav-bar'>Navigation Bar</div>")
// }

// $('#container').append(`<div>There are ${data.defaultResultCount} results</div>`)
// $('#container').append(`<div>Your cart has ${data.cart.length} items:</div> 
// <p>Prodct id: ${data.cart[0].id} X ${data.cart[0].count} times</p> 
// <p>Prodct id: ${data.cart[1].id} X ${data.cart[1].count} times</p>`)
// }

// ex
let wisdom = []
$("#btn").on('click', function () {
    const input = $(this).closest('body').find('input').val()
    $('#container').append(`<div><span class="delete">x</span><p>${input}</p></div>`)
    wisdom.push({ text: input })
    localStorage.wisdomArray = JSON.stringify(wisdom)
})
const localWisdom = JSON.parse(localStorage.wisdomArray || "[]")
localWisdom.forEach(t => $('#container').append(`<p>${t.text}</p>`))

$("#clear").on('click', function () {
    localStorage.clear()
})

$("#container").on('click', '.delete', function () {
     const temparray= JSON.parse(localStorage.wisdomArray)
     const item = $(this).closest('div').find('p').text();
     const newarr = temparray.filter(t => t.text != item)
     localStorage.wisdomArray = JSON.stringify(newarr)
     $(this).closest('div').remove()

})
