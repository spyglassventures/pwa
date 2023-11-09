import React, { useEffect, useState } from 'react';
import Head from 'next/head';

// Extend the Window interface to include onbeforeinstallprompt
declare global {
  interface WindowEventMap {
    'beforeinstallprompt': BeforeInstallPromptEvent;
  }

  interface BeforeInstallPromptEvent extends Event {
    readonly platforms: Array<string>;
    readonly userChoice: Promise<{
      outcome: 'accepted' | 'dismissed';
      platform: string;
    }>;
    prompt(): Promise<void>;
  }
}

const Install  = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const beforeInstallPromptHandler = (e: BeforeInstallPromptEvent) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Save the event so it can be triggered later.
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler as EventListener);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler as EventListener);
    };
  }, []);

  const handleInstallClick = () => {
    if (installPrompt) {
      // Show the prompt
      installPrompt.prompt();
      // Wait for the user to respond to the prompt
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setInstallPrompt(null);
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Install PWA</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <main>
        <h1>Install Our PWA</h1>
        {installPrompt && (
          <button onClick={handleInstallClick}>
            Install
          </button>
        )}
      </main>
    </div>
  );
};

export default Install ;
