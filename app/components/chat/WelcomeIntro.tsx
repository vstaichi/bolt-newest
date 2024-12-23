import React from 'react';

const GitHubBadge = () => {
  return (
    <a
      href="https://github.com/coleam00/bolt.new-any-llm"
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:opacity-90 transition-opacity h-full"
    >
      <div className="bg-bolt-elements-background-depth-2 rounded-lg p-4 border border-bolt-elements-borderColor h-full">
        <h3 className="text-lg font-semibold mb-3 text-bolt-elements-textPrimary">
          2. Contribute to Bolt.diy/Bolt.New
        </h3>
        <div className="flex justify-center items-center space-x-4">
          <img
            src="https://img.shields.io/github/stars/coleam00/bolt.new-any-llm?style=social"
            alt="GitHub stars"
            className="hover:scale-105 transition-transform"
          />
          <img
            src="https://img.shields.io/github/forks/coleam00/bolt.new-any-llm?style=social"
            alt="GitHub forks"
            className="hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </a>
  );
};

export const WelcomeIntro: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 py-6 space-y-6">
      <div className="text-center w-full mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold text-bolt-elements-textPrimary animate-fade-in bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          Build AI Apps with Bolt.diy
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
        <div className="bg-bolt-elements-background-depth-2 rounded-lg p-4 border border-bolt-elements-borderColor">
          <p className="text-lg text-bolt-elements-textSecondary animate-fade-in">
            1. A community-driven effort to build the best full-stack JavaScript AI development tool. Hosted by{' '}
            <a
              href="https://www.youtube.com/channel/UCLIo-9WnXvQcXfXomQvYSOg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors font-medium"
            >
              Eduards Ruzga 🔗
            </a>
          </p>
        </div>

        <GitHubBadge />

        <div className="bg-bolt-elements-background-depth-2 rounded-lg p-4 border border-bolt-elements-borderColor">
          <p className="text-lg font-medium text-bolt-elements-textSecondary mb-3 animate-fade-in">
            3. Check latest updates and tutorials
          </p>
          <div className="flex justify-center">
            <a
              target="_blank"
              href="https://www.youtube.com/playlist?list=PL66Y6GLTMgUOZM9G7GwWqcUgCAKrx5TmI"
              className="hover:opacity-90 transition-opacity"
            >
              <img
                src="https://i3.ytimg.com/vi/J5iuC7Te2l4/hqdefault.jpg"
                alt="Tutorial Playlist"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full max-w-[200px]"
              />
            </a>
          </div>
        </div>

        <div className="bg-bolt-elements-background-depth-2 rounded-lg p-4 border border-bolt-elements-borderColor">
          <p className="text-lg text-bolt-elements-textSecondary animate-fade-in">
            4. Not all APIs and LLMs are free. Check{' '}
            <a
              href="https://github.com/cheahjs/free-llm-api-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors font-medium"
            >
              this List of free LLM APIs
            </a>
          </p>
        </div>

        <div className="bg-bolt-elements-background-depth-2 rounded-lg p-4 border border-bolt-elements-borderColor">
          <p className="text-lg text-bolt-elements-textSecondary animate-fade-in">
            5. Pick provider and model. Click on Get API Key. Add API key. Give it a try. Some models may fail. Work in
            progress!
          </p>
        </div>

        <div className="bg-bolt-elements-background-depth-2 rounded-lg p-4 border border-bolt-elements-borderColor">
          <p className="text-lg text-bolt-elements-textSecondary animate-fade-in">
            6. Like work I am doing?{' '}
            <a
              href="https://buymeacoffee.com/wonderwhyer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors font-medium"
            >
              Buy me a coffee
            </a>{' '}
            or{' '}
            <a
              href="https://www.youtube.com/channel/@EduardsRuzga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors font-medium"
            >
              subscribe to my channel
            </a>{' '}
            and give me a super thanks! Will be greatly appreciated!
          </p>
        </div>
      </div>

      <div className="text-center w-full mx-auto pt-4">
        <h2 className="text-2xl font-bold text-bolt-elements-textPrimary animate-fade-in bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Ready to Build? Get Started below!
        </h2>
      </div>
    </div>
  );
};

export default WelcomeIntro;
