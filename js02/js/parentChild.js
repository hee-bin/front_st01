"user strict"

/* class Man{
    constructor(name, age){
        console.log('constructor')
        this._name = name;
        this._age = age;
    }


    get name(){
        console.log('getter name');
        return this._name;
    };

    set name(name){
        console.log('setter name');
        this._name = name;
    };

    get age(){
        console.log('getter age');
        return this._age;
    };

    set age(age){
        console.log('setter age');
        this._age = age;
    };
};

let m1 = new Man('jung', 20);
console.log(m1.age); */

class P{
    constructor(age){
        this._age = age;
    }
    prt=function(){
        console.log('p prt method!!');
    }
}

class C extends P{
    constructor(name, age){
        super(age);
        this._name = name;
    }
    prt=function(){
        console.log('c prt method!!!'); //오버라이딩
    
    }
    show = function(){
        console.log('c show methos!!!');
    }
}


 