
var student = function(fname,lname, address){
    this.fname = fname 
    this.lname = lname
    this.address= address
    this.details = ()=>{
        console.log(`Firstname: ${this.fname}, Lastname: ${this.lname}, Address : ${this.address}`)
    }
}
var sobj = new student("varat","kohli","Delhi")
sobj.details()

module.exports ={
    student
}