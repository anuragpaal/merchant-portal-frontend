import ReactDOM from "react-dom/client";

import { ReduxProvider } from "./app/providers/ReduxProvider";
import { QueryProvider } from "./app/providers/QueryProvider";
import { AppRouter } from "./app/router/AppRouter";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <ReduxProvider>
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  </ReduxProvider>
);