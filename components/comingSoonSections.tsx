"use client";

import React from 'react';
import { CollapsibleSection } from './ui/CollapsibleSection';

export const ComingSoonSections = () => {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-6 mb-8 text-center shadow-sm">
                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    🚀 Coming Soon
                </span>
                <p className="text-lg text-gray-700 font-medium">
                    All projects launching end of <span className="text-red-600 font-bold">{currentMonth}</span>

                    <br />
                    <h1>We are commited not just to this project but a whole ECOSYSTEM</h1>
                    <span className="text-sm italic text-gray-600 block mt-1">
                        Built on our proprietary core. A Waves blockchain technology, creating an interconnected
                        ecosystem where all our apps share secure data through our tokenized framework.
                        Play-to-earn opportunities, decentralized ownership, and cross-platform asset
                        portability will revolutionize how you experience our projects!
                    </span>
                </p>
            </div>

            <div className="space-y-4">
                <CollapsibleSection title="Streets of Home 2">
                    <div className="space-y-4">
                        <p className="text-lg font-semibold text-gray-800">
                            The long awaited buggy racer but better!!!
                        </p>

                        <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold mb-3 text-gray-700">Features</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span className="text-gray-600">Support for ALL devices (iOS, Android, PC, PS5, PS4, Xbox, PS6, Xbox2)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span className="text-gray-600">Fully dynamic and realistic weather system. Interacts with our unique physics and tyre models, watch out for those puddles!</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span className="text-gray-600">Custom paint jobs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span className="text-gray-600">Circuit builder so you can race on YOUR home!</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span className="text-gray-600">Support for UHD EXTREME graphics</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span className="text-gray-600">Support for 32K TV</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded">
                            <p className="text-gray-700 font-medium">
                                Don't believe us? Check out these in-game screenshots! 👇
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="group">
                                <img
                                    src="/images/downHill.png"
                                    alt="Streets of Home 2 Screenshot 1"
                                    className="w-full rounded-lg shadow-lg transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="/images/rainRace.png"
                                    alt="Streets of Home 2 Screenshot 2"
                                    className="w-full rounded-lg shadow-lg transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="/images/buggyBuilder.png"
                                    alt="Streets of Home 2 Screenshot 3"
                                    className="w-full rounded-lg shadow-lg transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="/images/buggyBuilder2.png"
                                    alt="Streets of Home 2 Screenshot 4"
                                    className="w-full rounded-lg shadow-lg transition-transform group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="mt-6 bg-gray-50 rounded-lg p-6">
                            <h4 className="text-center text-lg font-semibold text-gray-800 mb-4">
                                Exclusive Gameplay Preview
                            </h4>
                            <div className="relative rounded-lg overflow-hidden shadow-xl max-w-2xl mx-auto">
                                <video
                                    className="w-full"
                                    controls
                                    loop
                                    muted
                                >
                                    <source src="/videos/gamePlay.mp4" type="video/mp4" />
                                    <source src="/videos/gamePlay.webm" type="video/webm" /> // Optional: for better browser support
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <p className="text-center text-sm text-gray-600 mt-2">
                                * Actual in-game footage
                            </p>
                        </div>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Geordie Nation2 / Geordie World (Name TBD)">
                    <div className="bg-blue-50 rounded-lg p-6 text-center">
                        <p className="text-xl font-semibold text-gray-800 mb-2">
                            Why have a nation when you can have the whole world?
                        </p>
                        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                            Global Expansion
                        </span>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Merch Store (Live Now!)">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                            Available Now!
                        </span>
                        <a href="https://seeking-you2-shop.fourthwall.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-green-800 hover:underline">Click here to visit the Merch Store </a>
                    </div>
                </CollapsibleSection>
            </div>
        </div>
    );
};
