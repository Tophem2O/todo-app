import Todo from "./Todo"

function App() {

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex justify-center py-12 px-4 relative overflow-x-hidden selection:bg-indigo-500/30 antialiased">
      {/* Background space gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-slate-800/30 blur-[100px]"></div>
        {/* Subtle star pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
      </div>
      
      <div className="z-10 w-full max-w-3xl">
        <Todo />
      </div>
    </div>
  )
}

export default App
