'use client';

import { useEffect, useState } from 'react';

export default function FirebaseStatus() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [services, setServices] = useState<{
    analytics: boolean;
    firestore: boolean;
    auth: boolean;
    storage: boolean;
  }>({
    analytics: false,
    firestore: false,
    auth: false,
    storage: false
  });

  useEffect(() => {
    // Dynamically import Firebase to avoid SSR issues
    const initializeFirebase = async () => {
      try {
        const { app, analytics, db, auth, storage } = await import('@/lib/firebase');
        
        if (app) {
          setStatus('connected');
          setServices({
            analytics: !!analytics,
            firestore: !!db,
            auth: !!auth,
            storage: !!storage
          });
          
          // Test Firebase connection
          console.log('Firebase initialized successfully:', {
            app: !!app,
            analytics: !!analytics,
            firestore: !!db,
            auth: !!auth,
            storage: !!storage
          });
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Firebase connection error:', error);
        setStatus('error');
      }
    };

    initializeFirebase();
  }, []);

  return (
    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900">
      <h3 className="text-lg font-semibold mb-2">Firebase Connection Status</h3>
      <div className="flex items-center gap-2 mb-3">
        <div 
          className={`w-3 h-3 rounded-full ${
            status === 'connected' ? 'bg-green-500' : 
            status === 'error' ? 'bg-red-500' : 'bg-yellow-500'
          }`}
        />
        <span className="text-sm font-medium">
          {status === 'connected' && '✅ Firebase Connected'}
          {status === 'error' && '❌ Firebase Connection Error'}
          {status === 'loading' && '⏳ Connecting to Firebase...'}
        </span>
      </div>
      {status === 'connected' && (
        <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
          <p>• Analytics: {services.analytics ? '✅' : '⚠️'}</p>
          <p>• Firestore: {services.firestore ? '✅' : '❌'}</p>
          <p>• Authentication: {services.auth ? '✅' : '❌'}</p>
          <p>• Storage: {services.storage ? '✅' : '❌'}</p>
        </div>
      )}
      {status === 'error' && (
        <div className="text-xs text-red-600 dark:text-red-400">
          <p>Failed to connect to Firebase. Check console for details.</p>
        </div>
      )}
    </div>
  );
} 