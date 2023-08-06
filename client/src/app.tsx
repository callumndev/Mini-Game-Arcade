import { useState } from 'preact/hooks'


export function App() {
    const [count, setCount] = useState(0)

    return (
        <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
            <h2 class="text-5xl mb-3 text-black">Counter</h2>
            <p class="text-black">count is {count}</p>

            <button
                type="button"
                className="rounded-md bg-indigo-600  mt-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setCount(count => count + 1)}
            >
                Add
            </button>
        </div>
    )
}
