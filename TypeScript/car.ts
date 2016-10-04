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
class Contact {
  constructor(public id: number, public name: string) { }
}

const CONTACTS: Contact[] = [
  new Contact(21, 'Sam Spade'),
  new Contact(22, 'Nick Danger'),
  new Contact(23, 'Nancy Drew')
];

const FETCH_LATENCY = 500;


class ContactService {

  getContacts() {
    return new Promise<Contact[]>(resolve => {
      setTimeout(() => { resolve(CONTACTS); }, FETCH_LATENCY);
    });
  }

  getContact(id: number | string) {
    return this.getContacts()
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
}




