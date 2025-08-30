import { useState, useEffect } from "react";

function Calculator() {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operations = ["+", "-", "*", "/"];
  const [currentNumber, setCurrentNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number: number) => {
    setCurrentNumber((prev) => {
      const next = prev === "0" ? String(number) : prev + String(number);
      return next.length <= 10 ? next : prev;
    });
  };

  const handleOperationClick = (operation: string) => {
    setPreviousNumber(currentNumber);
    setOperation(operation);
    setCurrentNumber("0");
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setPreviousNumber("");
    setOperation("");
    setResult("");
  };

  const handleEquals = () => {
    if (previousNumber && operation && currentNumber) {
      const expression = `${previousNumber} ${operation} ${currentNumber}`;
      const evalResult = eval(expression);
      setResult(evalResult);
      setPreviousNumber(`${previousNumber} ${operation} ${currentNumber}`);
      setCurrentNumber(String(evalResult));
      setOperation("");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      if (!isNaN(Number(key))) {
        handleNumberClick(Number(key));
      } else if (operations.includes(key)) {
        handleOperationClick(key);
      } else if (key === "Enter") {
        event.preventDefault();
        handleEquals();
      } else if (key === "Escape" || key.toLowerCase() === "c") {
        handleClear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentNumber, previousNumber, operation]);

  return (
    <div className="flex h-96 w-72 flex-col items-center rounded-lg border-2 border-black bg-gray-200 p-2.5">
      <div className="mb-2.5 flex w-full flex-col items-end text-[20px]">
        <div>{`${previousNumber} ${operation}`}</div>

        <div>{result !== "" ? result : currentNumber}</div>
      </div>

      <div className="mx-2.5 grid h-full w-full grid-cols-4 gap-1.5">
        <div className="col-span-3 grid grid-cols-3 gap-1.5">
          {numbers.map((number) => (
            <button
              className="cursor-pointer rounded-lg border-1 bg-gray-400 text-black"
              key={number}
              onClick={() => handleNumberClick(number)}
            >
              {number}
            </button>
          ))}

          <button
            className="cursor-pointer border-1 bg-gray-500 text-black hover:bg-gray-600"
            onClick={handleClear}
          >
            C
          </button>

          <button
            className="cursor-pointer border-1 bg-gray-600 text-black hover:bg-gray-700"
            onClick={handleEquals}
          >
            =
          </button>
        </div>

        <div className="col-span-1 col-start-4 grid grid-rows-4 gap-1.5">
          {operations.map((operation) => (
            <button
              className="cursor-pointer border-1 bg-gray-800 text-white"
              key={operation}
              onClick={() => handleOperationClick(operation)}
            >
              {operation}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
