import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main id="content" className="relative overflow-x-hidden">
        {children}
      </main>

      <Footer />
    </>
  );
}
