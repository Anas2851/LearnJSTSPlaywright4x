# Learn JSTS

A beginner-friendly collection of JavaScript fundamentals and prompt-engineering lessons, examples, and practice material. Work through the numbered folders in order, or jump to a topic using the links below.

## Learning path

### 1. Prompt engineering

The [prompt engineering lessons](./01_Prompt%20Engineering/00_Prompt%20engineering/) introduce the RICE-POT framework and ways to write clear, reliable prompts:

- [RICE-POT framework](./01_Prompt%20Engineering/00_Prompt%20engineering/00_RICE_POT_Fullform.md)
- [Writing a RICE-POT prompt](./01_Prompt%20Engineering/00_Prompt%20engineering/01_RICE_POT_Prompt.md)
- [Problem statements](./01_Prompt%20Engineering/00_Prompt%20engineering/02_Problem_Statement.md)
- [Avoiding hallucinations](./01_Prompt%20Engineering/00_Prompt%20engineering/03_Anti_Hallucination.md)

### 2. JavaScript basics

The [JavaScript basics examples](./02_%20JS_Basics/) demonstrate variables, console output, and arithmetic:

- [Hello World and variables](./02_%20JS_Basics/00_Hello_world.js)
- [Math operations](./02_%20JS_Basics/01_Maths.js)

### 3. Keywords and identifiers

The [keywords and identifiers examples](./03_JS_Keywords_identifiers/) cover the JavaScript engine, variable declarations, keywords, identifier naming rules, comments, and a practice quiz:

- [JavaScript engine](./03_JS_Keywords_identifiers/00_js_engine.js)
- [`let` and the engine](./03_JS_Keywords_identifiers/01_letengine.js)
- [Keywords and identifiers](./03_JS_Keywords_identifiers/02_KW_IND.js)
- [Keyword and identifier rules](./03_JS_Keywords_identifiers/03_KW_IND_Rules.js)
- [Identifier naming rules](./03_JS_Keywords_identifiers/04_IND_Rules.js)
- [Comments](./03_JS_Keywords_identifiers/05_comments.js)
- [Practice quiz](./03_JS_Keywords_identifiers/06_IQ.js)

### 4. Literals

The [JavaScript literals examples](./04_JS_Literals/) introduce literal values, `null`, and `undefined`:

- [Literals](./04_JS_Literals/00_Literals.js)
- [`null` and `undefined`](./04_JS_Literals/01_Null_undefined.js)
- [Numeric literal practice quiz](./04_JS_Literals/02_Literal_IQ.js)

### 5. Operators

The [JavaScript operators examples](./05_JS_Operators/) introduce assignment, arithmetic, comparison, and logical operators, with an example of surprising loose-equality coercion:

- [Operator and operand basics](./05_JS_Operators/00_operator.js)
- [Arithmetic operators](./05_JS_Operators/01_arithmatic.js)
- [Comparison operators](./05_JS_Operators/02_Comparison_Op.js)
- [Logical operators](./05_JS_Operators/03_Logical_Op.js)
- [Confusing loose equality](./05_JS_Operators/04_Confusing_Op.js)

### 6. JavaScript practice

The [JavaScript practice examples](./06_JS_practice/) reinforce data types, variables, objects, and operator evaluation:

- [Primitive data types](./06_JS_practice/00_JS_Practice.js)
- [Variables and object properties](./06_JS_practice/01_JS_practice_set.js)
- [Arithmetic, assignment, and increment/decrement operators](./06_JS_practice/02_Operators.js)

### 7. Ternary and type operators

The [ternary and type operator examples](./07_Ternary_operators/) introduce conditional expressions, nested ternary operators, and JavaScript's `typeof` operator:

- [Ternary operator](./07_Ternary_operators/00_Ternary_operator.js)
- [Nested ternary operator](./07_Ternary_operators/01_Nested_Ternary.js)
- [`typeof` operator](./07_Ternary_operators/02_Type_of_OP.js)

### 8. Increment, decrement, and nullish operators

The [increment, decrement, and nullish operator examples](./08_Incre_decr_OP/) demonstrate prefix and postfix updates and nullish coalescing:

- [Increment operators](./08_Incre_decr_OP/00_ID_OP.js)
- [Decrement operators](./08_Incre_decr_OP/01_DE_OP.js)
- [Nullish coalescing operator](./08_Incre_decr_OP/02_Nullish_OP.js)

### 9. Conditions

The [conditions examples](./09_Conditions/) demonstrate `if`/`else` statements, `switch` statements, grouped cases, and fall-through:

- [`if` statements](./09_Conditions/00_IF.js)
- [`switch` statements](./09_Conditions/01_Switch.js)
- [Grouped `switch` cases](./09_Conditions/02_Switch_group.js)

### 10. User input

The [user-input lesson](./10_User_input/00_User_input.js) is in progress.

### 11. For practice

The [daily practice example](./11_For%20_Practice/00_Daily_practice.js) contains exercises for `while`, `do...while`, and `for` loops, along with `switch` fall-through and conditional checks.

### 12. Loops

The [loop examples](./12_Loops/) include loop practice and a triangle-classification exercise:

- [Loop and triangle practice](./12_Loops/00_loops.js)

### 13. Arrays

The [array examples](./13_Arrays/) cover creating and accessing arrays, adding and removing elements, splicing, searching, and transforming values:

- [Array basics](./13_Arrays/00_Arrays.js)
- [Adding and removing elements](./13_Arrays/01_add_remove.js)
- [Splicing arrays](./13_Arrays/02_Splice.js)
- [Searching arrays](./13_Arrays/03_searching.js)
- [Transforming arrays with `map` and `filter`](./13_Arrays/04_Tranfer_array.js)

## Run the JavaScript examples

Install [Node.js](https://nodejs.org/). From the repository root, run `npm install` to install dependencies used by interactive examples, such as `prompt-sync`. Then run any lesson `.js` file with `node`:

```sh
npm install
node "02_ JS_Basics/00_Hello_world.js"
```

Replace the path with another JavaScript example to run that lesson. The examples print their results to the console.
