## How to repro ?

```
pnpm i
pnpm run dev
```

Change `App.tsx` to

```tsx
import { foo } from "./components/index";
import { bar } from "./components/index";

console.log(foo);
console.log(bar)

const App = () => {
  return <div></div>;
};

export default App;
```
