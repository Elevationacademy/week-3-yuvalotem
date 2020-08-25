//write your code here to make the tests pass
class Document{
    constructor(EmployeeName){
        this.EmployeeName = EmployeeName
    }
}

class Employee{
    constructor(name){
        this.name = name
    }
    work(office){
        Office.documents.push(Document.office)
    }
}

class Manager{
    constructor(name){
        this.employees = []
        this.name = name
    }
    hireEmployee(name){
        this.employees.push(name)
    }
    askEmployeesToWOrk(office){
        Employee.work(office)
    }
}

class Cleaner{
    constructor(name){
        this.name = name
    }
    clean(office){
        console.log("Clean");
    }
}

class Office{
    constructor(documents, managers, cleaners){
        this.documents = documents
        this.managers = managers
        this.cleaners = cleaners
    }
    hireCleaner(name){
        this.cleaners.push(name)
    }
    hireManager(name){
        this.managers.push(name)
    }
    startWorkDay(){
        Manager.askEmployeesToWOrk(this.managers)
        Cleaner.clean(this.cleaners)
    }
}


