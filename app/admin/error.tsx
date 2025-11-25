
"use client"

import React from 'react'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    console.log(error.message);

    return (
        <div className='flex items-center flex-col gap-2 justify-center text-center p-4 h-screen '>
            <h3 className="font-bold text-6xl">Something went wrong!</h3>

            <button
                onClick={reset}
                className="border-2 border-amber-600 hover:text-white hover:bg-amber-600 text-lg px-5 py-2 rounded-xl mt-5 font-medium">
                Try again
            </button>
        </div>
    )
}

export default Error