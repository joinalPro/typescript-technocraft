//Function i - Normal function, ii - Arrow function

function add (num1 : number, num2 : number = 5):number{
    return num1 + num2;
}

add (1, 3)

const addArrow = (num1: number, num2: number): number => num1 + num2;


//object --> function -->method

const normalUser = {
    name: 'Joinal',
    balance: 0,
    addBalance(balance:number):string{
        return `My new balance is : ${this.balance + balance}`;
    }
}

const numArray : number[] = [1, 4, 10];

const newArray: number[] = numArray.map((ele : number): number => ele * ele);
