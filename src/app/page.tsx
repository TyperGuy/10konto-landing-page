'use client';

import { Navbar } from '~/components/Navbar';
import styles from './page.module.css';
import { Hero } from '~/components/Hero';
import { Reviews } from '~/components/Reviews';
import { QASection } from '~/components/QASection';
import { Footer } from '~/components/Footer';
import { Features } from '~/components/Features';
import { Partners } from '~/components/Partners';


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Reviews />
      <QASection />
      <Footer />
    </main>
  );
}
