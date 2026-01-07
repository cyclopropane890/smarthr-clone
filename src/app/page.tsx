import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      {/* Main content area */}
      <div className="flex-1"></div>
      <Footer />
    </main>
  );
}
