import ga from 'react-ga';

import Root from '../components/Root';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';

ga.initialize('UA-129681195-3');

export default () => {
  ga.pageview('/');

  return (
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
};
