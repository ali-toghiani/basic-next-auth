'use client';

import { useRouter } from 'next/navigation';

import classes from "./page.module.scss"
import Button from '@/components/Button/Button';

export default function NotFound() {

  const router = useRouter();

  function handleGoToDashboard() {
    router.push('/dashboard');
  }
  
  return (
    <main className={classes['not-found-layout']}>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button type="button" onClick={handleGoToDashboard}>Return to Dashboard</Button>
    </main>
  );
}