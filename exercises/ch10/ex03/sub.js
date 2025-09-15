function sumnum(x,y){
    return x+y;
}

class Student{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    getName(){
        return console.log("My name is,",this.name);
    }

    getId(){
        return console.log("My Id is,",this.id);
    }
}

module.exports = { sumnum,Student };