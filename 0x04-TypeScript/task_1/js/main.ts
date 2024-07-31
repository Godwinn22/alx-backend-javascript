export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    // Add the possibility to add any attribute to the Object
    // like contract(boolean) without specifying the name of the attribute
    [propName: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`;
}

export interface StudentInterface {
    workOnHomework(): string;
    displayFullName(): string;
}

export interface StudentInterfaceConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

export class StudentClass implements StudentInterface {
    private firstName: string;
    private lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return "Currently working";
    }

    displayFullName() {
        return `${this.firstName}`;
    }
}
