import { createSignal, createContext, useContext, Accessor } from "solid-js";

// We declare a type which will be the signature of our store
type CounterStore = [Accessor<number>, { increment: () => void; decrement: () => void }]


const CounterContext = createContext<CounterStore>(); // we pass the CounterStore type to specify to typescript what the context will look like

export function CounterProvider(props) {
  const [count, setCount] = createSignal(props.count || 0)
  // we specify our store as CounterStore to avoid warning when affecting the value to our context
  const store: CounterStore = [
      count,
      {
        increment() {
          setCount((c) => c + 1);
        },
        decrement() {
          setCount((c) => c - 1);
        },
      },
    ];

  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  // note the !bang at the end that asserts it is not undefined
  return useContext(CounterContext)!;
}
