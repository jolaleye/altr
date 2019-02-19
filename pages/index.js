import Root from '../components/Root';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default () => (
  <Root>
    <div className="root">
      <Header />
      <main>
        <Features />
      </main>
      <Footer />
    </div>

    <style jsx>{`
      .root {
        overflow-x: hidden;
      }
    `}</style>
  </Root>
);
