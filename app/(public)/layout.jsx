import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const layout = ({ children }) => {
  return (
    <>
    <Header/>
      <main className="min-h-[80vh] mt-32 mx-auto max-w-6x px-8">
        {children}
      </main>
    <Footer/>
    </>
  )
};

export default layout;
