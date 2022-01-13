//#region 1. Type definitions

let greeting: string = 'hello world';

const getFullName = (name: string, surname: string): string => {
    return `${name} ${surname}`;
}

console.log(getFullName('John', 'Doe'));

//#endregion

//#region 2. Classes / Interfaces

interface ITestUser {
    name: string;
    age?: number;
    getMessage(): string
};

class TestUser implements ITestUser {
    name: string;
    age?: number;
    getMessage(): string {
        return `Hello, ${this.name}`;
    }
}

const user1: TestUser = {
    name: 'Test 1',
    age: 30,
    getMessage(): string {
        return `Hello, ${this.name}`;
    }
};

const user2: TestUser = {
    name: 'Test 2',
    getMessage(): string {
        return `Hello, ${this.name}`;
    }
}

console.log(user1.getMessage());

//#endregion

//#region 3. Union & Type alias

type ID = string | number;
type PopularTag = string;

interface IAccount {
    id: ID;
    name: string;
    surname: string;
    emailConfirmed: boolean;
}

const popularTags: PopularTag[] = ['dragon', 'coffee'];

let pageNumber: string | number = "1";

let errorMessage: string | null = null;

let user: ITestUser | null = null;

//#endregion

//#region 4. any / void / never / unknown

// void is `null` or `undefined`
const doSomething1 = (): void => {
    console.log('did something');
}

const doSomething2 = (): void => {
    console.log('did something');
    return null; // works
}

const doSomething3 = (): void => {
    console.log('did something');
    return undefined; // works
}

// Never
const willNeverHappen = (): never => {
    throw 'test';
}

// Unknown
let vAny: any = 10;
let vUnknown: unknown = 20;

let s1: string = vAny;
// let s2: string = vUnknown; 
// Will not work. Once you assign a value to it, it takes the type of that value

// Casting
let testNumber: any = 20;
let testString: string = testNumber as string;

//#endregion

//#region 5. Working with DOM

const element: HTMLInputElement = document.querySelector(".foo");
console.log(element.value);

element.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
});

//#endregion

//#region 6. Classes

interface IUser {
    getFullName(): string;
}

class User implements IUser {
    private firstName: string;
    private lastName: string;
    readonly unChangableName: string;
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unChangableName = firstName;
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

let myUser1 = new User('John', 'Doe');
let myUser2 = new User('Jack', 'Smith');
console.log(User.maxAge);

//#endregion

//#region 7. Enums

enum Status {
    NotStarted,
    InProgress,
    Done
}

let test: Status = Status.NotStarted;
test = Status.InProgress;

//#endregion

//#region 8. Generic

const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        id,
        ...obj
    };
};

interface _IUser {
    name: string;
};

const _user: _IUser = {
    name: 'Jack'
};
const _extendedUser = addId<_IUser>(_user);
console.log(_extendedUser);


//#endregion