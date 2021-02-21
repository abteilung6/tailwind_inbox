import React from 'react';

interface Props {
}

const App: React.FC<Props> = () => {
return (
  <div className="flex flex-row h-screen">
      <div className="w-32 bg-red-200">MainMenu</div>
      <div className="w-64 bg-green-200">Submenu</div>
      <div className="flex-auto bg-blue-200">Content</div>
  </div>
);
};

export default App;