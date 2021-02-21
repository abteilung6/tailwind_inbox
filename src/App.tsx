import React from 'react';

interface Props {
}

const App: React.FC<Props> = () => {
  return (
    <div className="flex flex-row h-screen">
        <div className="flex flex-col justify-start items-center w-16 p-4 space-y-4 bg-gray-200">
          {[1,2,3].map((value, index) => 
            <div key={index} className="rounded-full bg-gray-400 w-8 h-8" />)}
        </div>
        <div className="w-64 bg-gray-100">Submenu</div>
        <div className="flex-auto bg-blue-200">Content</div>
    </div>
  );
};

export default App;