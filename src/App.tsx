import React from 'react';

interface Props {
}

const App: React.FC<Props> = () => {
  return (
    <div className="flex flex-row h-screen bg-gray-100">
        <div className="flex flex-col justify-start items-center flex-none w-16 p-4 space-y-4 bg-gray-200">
          {[1,2,3].map((value, index) => 
            <div key={index} className="rounded-full bg-gray-400 w-8 h-8" />)}
        </div>
        <div className="w-64 p-4 flex-none bg-gray-100 flex flex-col space-y-4 mb-6">
          <div className="flex flex-row justify-between items-center">
            <h1 className="flex-auto font-semibold text-2xl">Inbox</h1>
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="bg-red-200 h-64"></div>
          <div className="bg-red-200 h-64"></div>
        </div>
        <div className="flex flex-row flex-auto bg-white rounded-tl-xl border shadow-xl">
          <div className="flex flex-col w-1/5">
            <div className="flex-none h-24 bg-red-200">top</div>
            <div className="flex-auto overflow-y-auto">
              {Array(5).fill(0).map((value, index) => 
                <a key={index} className="block h-16 border-b p-2" href="/">{`Message ${index}`}</a>)}
            </div>
          </div>
          <div className="w-3/5 border-l border-r border-gray-400">center</div>
          <div className="w-1/5 bg-gray-200">right</div>
        </div>
    </div>
  );
};

export default App;