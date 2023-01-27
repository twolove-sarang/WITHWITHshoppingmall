import "./App.css";
import HeaderSection from "./components/HeaderSection";
import { AuthContextProvider } from "./context/AuthContext";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <AuthContextProvider value>
        <QueryClientProvider client={queryClient}>
          <HeaderSection />
          <Outlet />
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
