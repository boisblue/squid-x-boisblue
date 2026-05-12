'use client';
import dynamic from 'next/dynamic';

const SwapWidget = dynamic(() => import('../components/SwapWidget'), {
  ssr: false,
  loading: () => <p style={{ color: 'white' }}>Loading...</p>
});

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <main
        suppressHydrationWarning
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#17191C'
        }}
      >
        <SwapWidget />
      </main>
    </div>
  );
}