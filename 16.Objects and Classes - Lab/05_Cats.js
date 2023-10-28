function catsData(input) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let ell of input) {
        let [name, age] = ell.split(' ');
        let cat = new Cat(name, age);
        cats.push(cat);
    }
    for (let cat of cats) {
        cat.meow();
    }

}
catsData(['Mellow 2', 'Tom 5'])
catsData(['Candy 1', 'Poppy 3', 'Nyx 2'])