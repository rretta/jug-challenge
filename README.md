# Water Jug Challenge

This is a small program that solves the Water Jug Challenge using React. The challenge is to determine if it is possible to measure a certain exact amount of water using two jugs of different capacities.

## Algorithmic Approach

First, it is determined whether the target quantity is divisible by the greatest common divisor, then a search algorithm is implemented that simulates the actions of filling, emptying and transferring water between two jugs to find a solution.

Two while loops are used to decide what is to be executed depending on whether jug X has a greater or lesser capacity than jug Y. After this, the algorithm will be executed, which in the case of the jar that will execute actions based on the state of the jar with higher capacity

## Test Cases for Validation

Below are some test cases that can be used to validate the solution:

1. **Test Case 1:** 2.

   - Jug X Capacity: 3
   - Jug Y Capacity: 5
   - Target Quantity: 4

   ![Test Case 1](assets/ex1.png)

2. **Test Case 2:** \*\*Test Case 2
   - Jug X Capacity: 2
   - Jug Y Capacity: 6
   - Target Quantity: 5
   - Expected result: Impossible solution.
     ![Test Case 2](assets/ex2.png)

## Instruction

To run the program, follow these steps:

1. Clone this repository on your local machine: `git clone https://github.com/rretta/jug-challenge.git`.
2. Navigate to the project directory: `cd jug-challenge`.
3. Install the necessary dependencies: `npm install`.
4. Run the application: `npm run dev`.
5. Open your web browser and navigate to `http://localhost:5173` to see the application in action.
