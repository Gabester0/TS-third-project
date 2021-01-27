Enums:

Follow near-identical syntax rules as normal objects in JS

Creates an object with the same keys and values when converted from TS to JS

Primary goal is to signal to other engineers that these are all closely related values

Use whenever we have a small fixed set of values that are all closely related and known at compile time

Generics:
--Like function args, but for types in class/function definitions

--Allows us define the type of a property/argument/return value at a future point

--Used heavily when writing reusable code

```
class HoldNumber {
data: number;
}

class HoldString {
data: string;
}

const holdNumber = new HoldNubmer();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = `stringsss`;
```

_OR_

```
class HoldAnything<TypeOfData> {
    data: TypeOfData;
}

const holdNumber = new HoldAnything<number>();
hodNumber.data = 1234;

cosnt holdString = new HoldAnything<string>();

holdString.data = `I'm a string`;
```

## Inheritance vs Composition

Inheritance = 'is a'
Composition = 'has a'

Inheritance, MatchReader is a CsvFile Reader
Composition, MatchReader has a ref to CsvFileReader

## If we wanted to model a window in a house:

#### Inheritance

| **class Window** |
| open: boolean |
|toggleOpen():void |
| height: number |
|width: number |
|area(): number |

| **class Wall** |
|color: string |
| height: number |
|width: number |
|area(): number |

To avoid duplication between these 2 classes we might create a common partent class for both of these

| **class Rectangle** |
| height: number |
|width: number |
|area(): number |
Then Wall and Window would extend Rectangle

But what if we had a circular window?
Then we might need to make class Window RectangleWindow
and class Circle with a child class CircleWindow
But then we would have duplicatio nwith the open and toggleOpen properties.

#### Composition

With Composition we could start with a Class Rectangle

And to create Class Wall we would make our class have a shape property which is either a rectangle or a circle Class object that handles height, width, and area (or radius and area for circle).

## General notes comparing Composition and Inheritance

In the classic design patterns book the authors recommend favoring composition over class inheritance

But it was written for C. Many people in the JavaScript community misunderstand composition.

With composition we are using delegation instead of classes that are instances of their parent classes. We want to create a class that delegates the re-usable properties to a different class. Our class will _have a_ instance of the other class. Our class delegates these re-usable properties to this other class.

In english composition is to build something from other things.

In programming, composition is on object has a reference to another object (or possibly multiple other objects).  
EX:

```
class Rectangle {
    width: number;
    height: number;
    area(): number {
        return this.height * this.number;
    }
}

class Wall {
    constructor(public shape: Rectangle){}
    color: string;
}
```

There are many blog posts out there talking about composition where you have multiple objects (a Window object and a Rectangle object) and you just combine them both into a SquareWindow object. But really, you just created a new object that was an instance of Rectangle and an instance of Window.

This is not composition (programming definition). It is Multiple Inheritance. If both original objects have a method with the same name, then your new object is going to have issues because there is a conflict between the methods. Which ever objects that got added/combined into your new object last will be the one whose property is referenced when that method is called. This is extremely brittle and hard to predict what will happen.
