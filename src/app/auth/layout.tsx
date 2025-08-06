import classes from './auth.module.scss';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={classes['auth-main']}>
      <section className='form-container'>
        {children}
      </section>
    </main>
  );
}