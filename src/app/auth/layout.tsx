import classes from './auth.module.scss';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={classes['auth-main']}>
      <section className={classes['form-container']}>
        {children}
      </section>
    </main>
  );
}