import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
