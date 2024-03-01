"use client"

import { Navbar } from '~/components/Navbar';
import styles from './page.module.css';
import { Hero } from '~/components/Hero';
import { Features } from '~/components/Features';
import { Reviews } from '~/components/Reviews';
import { QASection } from '~/components/QASection';
import { BannerDownload } from '~/components/BannerDownload';
import { Footer } from '~/components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <QASection />
      <Footer />
    </main>
  );
}
