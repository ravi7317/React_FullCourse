# && Operator Ternary Operator {Consitional Rendering}:-

1. ## Ternary operator :- ()? ():()

### Person.jsx:-

```jsx
import React from 'react';
const Person =()=>{
    const age=20;
    return (
        <>
        <div><h1>{age>=18 ? (<><h2>You can drive</h2></>) : (<><h2>You Can not drive</h2></>)}
        </div>
        </>
    )
}
export default Person;

```
# ()?():() 
1. First write Condition
2. Print if first condition true
3. Print if first condition false and 2nd is true

# Output
You can drive


# && Operator

## Person.jsx:-
```jsx
import React from "react";
const Person = ()=>{
    const adhar = true;
    const gmail = false;
    return (
        <>
        {adhar && <h1>You can open bank account</h1>}
        {gmail && <h1>You can open youtube account</h1>}
        </>
    )
}

export default Person;
```
## Output 
You can open bank acount

# Explation:-
 1. && only eun when statement true
 2. incase of adharcard its true that why it showing true
 3. in case of gmail its false thats why its not showing
