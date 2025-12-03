import { QueryProvider } from "./providers/QueryProvider";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index"; // your pages/router
import AppLayout from "../shared/components/AppLayout";

function App() {
  return (
    <QueryProvider>
      <BrowserRouter>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </BrowserRouter>
    </QueryProvider>
  );
}

export default App;
