'use client';

import { useState } from 'react';

interface ChatGPTEmbedProps {
  pluginUrl?: string;
}

export default function ChatGPTEmbed({ pluginUrl = "https://chatgpt.com/g/g-6888eb78e6dc819198841eed4e39c258-cor-chat-gpt" }: ChatGPTEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const handleLoad = () => {
    setIsLoading(false);
    setError('');
  };

  const handleError = () => {
    setIsLoading(false);
    setError('Failed to load ChatGPT plugin');
  };

  return (
    <div className="w-full h-full min-h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          COR Chat GPT Plugin
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Powered by OpenAI&apos;s ChatGPT
        </p>
      </div>
      
      <div className="relative w-full h-[600px]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Loading ChatGPT plugin...</p>
            </div>
          </div>
        )}
        
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-sm text-red-600 dark:text-red-400 mb-2">{error}</p>
              <button
                onClick={() => {
                  setIsLoading(true);
                  setError('');
                  // Force reload the iframe
                  const iframe = document.getElementById('chatgpt-iframe') as HTMLIFrameElement;
                  if (iframe) {
                    iframe.src = iframe.src;
                  }
                }}
                className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Try again
              </button>
            </div>
          </div>
        )}
        
        <iframe
          id="chatgpt-iframe"
          src={pluginUrl}
          className="w-full h-full border-0"
          title="COR Chat GPT Plugin"
          onLoad={handleLoad}
          onError={handleError}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
} 