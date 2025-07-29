'use client';

import { useState } from 'react';

interface ChatGPTEmbedProps {
  pluginUrl?: string;
}

export default function ChatGPTEmbed({ pluginUrl = "https://chatgpt.com" }: ChatGPTEmbedProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenChatGPT = () => {
    setIsLoading(true);
    // Open main ChatGPT in new tab
    window.open(pluginUrl, '_blank', 'noopener,noreferrer');
    // Reset loading state after a short delay
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleOpenChatGPTPlus = () => {
    setIsLoading(true);
    // Open ChatGPT Plus (if user has access)
    window.open('https://chatgpt.com/gpt-4', '_blank', 'noopener,noreferrer');
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="w-full h-full min-h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          COR AI Chat Assistant
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Powered by OpenAI&apos;s ChatGPT
        </p>
      </div>

      <div className="flex flex-col items-center justify-center h-[500px] p-8">
        <div className="text-center max-w-md">
          {/* AI Chat Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Chat with AI?
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Access ChatGPT directly from your COR AI dashboard. Choose your preferred option below.
          </p>

          <div className="space-y-4">
            <button
              onClick={handleOpenChatGPT}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Opening...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open ChatGPT (Free)
                </>
              )}
            </button>

            <button
              onClick={handleOpenChatGPTPlus}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Open ChatGPT Plus (GPT-4)
            </button>
          </div>

          <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 space-y-1">
            <p>• Opens in a new tab</p>
            <p>• Requires ChatGPT account</p>
            <p>• Free version available</p>
            <p>• Plus version requires subscription</p>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-xs text-blue-700 dark:text-blue-300">
              <strong>Note:</strong> The original plugin URL was not found. We&apos;ve updated to use the main ChatGPT interface. 
              You can still access all ChatGPT features and create custom conversations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
