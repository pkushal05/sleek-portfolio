const App = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-10">
      <h1 className="text-9xl">Kushal Patel</h1>
      <div className="h-3 w-3 bg-green-400 rounded-full relative">
        <span className="h-3 w-3 bg-green-400 rounded-full absolute left-0 top-0 animate-ping"></span>
      </div>
      <div className="container bg-amber-400 h-10 w-10 rounded-full"></div>
    </div>
  );
};

export default App;
