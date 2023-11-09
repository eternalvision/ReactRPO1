import { useMemo } from "react";

const calculateEvenSum = (numbers) => {
    console.log("Calculating even sum...");
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    return sum;
};

const EvenSumComponent = ({ numbers, someOtherProp }) => {
    const evenSum = useMemo(() => {
        return calculateEvenSum(numbers);
    }, [numbers]);

    return (
        <div>
            <p>Sum of even numbers: {evenSum}</p>
            <p>Some other prop: {someOtherProp}</p>
        </div>
    );
};

const ExpensiveComponent = ({ value1, value2 }) => {
    const expensiveValue = useMemo(() => {
        return value1 + value2;
    }, [value1, value2]);

    return <div>{expensiveValue}</div>;
};

export const App = () => {
    return (
        <>
            <EvenSumComponent
                numbers={[2, 5, 7, 7, 9, 12, 11, 35]}
                someOtherProp="This is Prop"
            />
            <ExpensiveComponent value1={5} value2={7} />
        </>
    );
};
