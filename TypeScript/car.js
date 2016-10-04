/*class Engine{
public cylinders: Number;
}
class Tires{
public make = '';
}
class Car {
public engine: Engine;
public tires: Tires;
public description = 'No DI';
constructor() {
this.engine = new Engine();
this.engine.cylinders = 2;
this.tires = new Tires();
this.tires.make = "Bridge";
}
// Method using the engine and tires
drive() {
return '${this.description} car with ' +
'${this.engine.cylinders} cylinders and ${this.tires.make} tires.';
}
}
var car = new Car();
console.log(car.drive());
*/
var Contact = (function () {
    function Contact(id, name) {
        this.id = id;
        this.name = name;
    }
    return Contact;
})();
