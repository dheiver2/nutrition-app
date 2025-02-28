import { useState } from 'react';
import Navbar from '../components/Navbar';
import TabPanel from '../components/TabPanel';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>Análise Nutricional por IA</h1>
        <TabPanel activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
      <Footer />
    </div>
  );
}
