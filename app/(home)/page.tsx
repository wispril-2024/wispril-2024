import Home from "./home";
import { Metadata } from "next";

// Nanti edit lagi
export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Home />
    </main>
  );
};

export default HomePage;
