import { QueryProvider } from "./providers/QueryProvider";
import { AppRouter } from "./routes";

function App() {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
}

export default App;
