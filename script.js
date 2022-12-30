class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
       return "beep"; 
    }

    toString(){
      return  `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numwheels = 4;
    }

   

}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numwheels = 2;
    }

    revEngine(){
        return "VROOM!";
    }
}

class Garage { 
    constructor(num){
        this.vehicles = [];
        this.num = num;
            
    }
    add(newCar){
        if(typeof newCar !== 'object'){
            return "Only vehicles are allowed in here!";
        }
        if(this.vehicles.length < this.num){
            this.vehicles.push(newCar);
            return "Vehicle Added!";
        } else{
            return "Sorry, we're full.";
        }
        
    }

}