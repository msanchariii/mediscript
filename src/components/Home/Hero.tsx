import React from "react";

export default function Hero() {
    return (
        <div className="bg-gradient-to-br from-rose-900 dark:from-rose-500/50 to-rose-200 dark:to-transparent">
            <div className="flex flex-col items-center justify-center h-[90vh] text-white gap-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-mono">
                    Welcome to Mediscript
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl uppercase font-extralight">
                    Your prescription generator app.
                </p>
            </div>
        </div>
    );
}
