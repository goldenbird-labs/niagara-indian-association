import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import MemberBenefits from './components/MemberBenefits';
import JoinUs from './components/JoinUs';
import Sponsorship from './components/Sponsorship';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <MemberBenefits />
        <JoinUs />
        <Sponsorship />
      </main>
      <Footer />
    </div>
  );
}
