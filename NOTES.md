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
