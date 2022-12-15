import Info from './components/Info';
import Interests from './components/Interests';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-gray-500 flex item-center justify-center">
      <section className="bg-gray-800 text-white max-w-md flex flex-col align-top items-center rounded-xl my-8 h-screen">
        <Info />
        <article className="p-8">
          <About />
          <Interests />
        </article>
        <Footer />
      </section>
    </main>
  );
}

export default App;
