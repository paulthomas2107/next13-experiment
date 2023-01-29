import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h1>Hello Paul from NextJS 13</h1>
    </main>
  );
}
