class Shape
{
    static count = 0;
    static countIncr(){
        Shape.count +=1;
    }
    x_pt = 0; y_pt = 0;
    isAt(){console.log(`Shape : The object is at ${this.x_pt}`)};
    area(areaS){console.log(`Shape : Object area is ${areaS}`)};

};

class Circle extends Shape
{
    #radius = 0.0;//private property
    getInput(){
       this.#radius = 10.0;
       // this.radius = 10;
       // const areaC = 3.14 * this.#radius * this.#radius;
        const areaC = 3.14 * this.#radius * this.#radius;
        this.#areaC(areaC);
    }
    #areaC(x){this.area(x)};
}

const cr1 = new Circle;
cr1.getInput();
//cr1.#areaC(r(5)); //illegal - private property not accessible
cr1.area(10); // allowed