import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex flex-row justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <MyIconsVite />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <MyIconsReact />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <button
          className="inline-flex flex-row items-center"
          onClick={() => setCount((count) => count + 1)}
        >
          <MyIconsHomeOutline className="mr-2 w-5 h-5" />
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Home
