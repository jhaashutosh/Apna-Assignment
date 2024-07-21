import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/featuredComponent.css';

const FeaturedComponent = () => {
    const [incomeProof, setIncomeProof] = useState(null);
    const [rings, setRings] = useState([]);

    const maxPlanetsPerRing = 4;

    useEffect(() => {
        axios.get('https://apna-assignment.onrender.com/globe-data')
            .then(response => {
                if (response.data && response.data.length > 0) {
                    const arry = Object.entries(response.data[0]);
                    const data = arry.slice(1).map(([title, description]) => ({ title, description }));

                    const proof = data.find(doc => doc.title.toLowerCase().includes('income proof'));
                    const others = data.filter(doc => doc !== proof);

                    const numRings = Math.ceil(others.length / maxPlanetsPerRing);
                    const rings = Array.from({ length: numRings }, (_, index) => {
                        const start = index * maxPlanetsPerRing;
                        const end = start + maxPlanetsPerRing;
                        return others.slice(start, end);
                    });

                    setIncomeProof(proof);
                    setRings(rings);
                } else {
                    setIncomeProof(null);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const formatDescription = (description) => {
        const lines = description.split('\n');
        return (
            <div style={{ lineHeight: '0.75rem'}} className="text-[#02347D] font-normal text-xs text-center px-4">
                <p>{lines[0]}</p>
                <ul className="list-disc list-inside ml-4">
                    {lines.slice(1).map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="relative w-full h-full flex justify-center items-center">
            {incomeProof && (
                <div className="absolute w-52 h-52 gap-2 text-white flex flex-col justify-center items-center rounded-full z-20 border border-sky-500">
                    <h4 className="text-[#02347D] font-semibold text-lg">{incomeProof.title}</h4>
                    {formatDescription(incomeProof.description)}
                </div>
            )}
            {rings.map((ring, ringIndex) => (
                <div
                    key={ringIndex}
                    className={`absolute h-full w-full flex justify-center items-center ${
                        ringIndex % 2 === 0 ? 'rotate-clockwise' : 'rotate-counterclockwise'
                    }`}
                    style={{ animationDuration: `${20 + ringIndex * 5}s` }}
                >
                    <div className="orbit-ring" style={{ width: `${(ringIndex + 1) * 500}px`, height: `${(ringIndex + 1) * 500}px` }}></div>
                    {ring.map((planet, planetIndex) => {
                        const angle = (360 / ring.length) * planetIndex;
                        const radius = (ringIndex + 1) * 250;
                        return (
                            <div
                                key={planetIndex}
                                className="h-52 w-52 absolute flex justify-center items-center"
                                style={{
                                    transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                                    transformOrigin: 'center',
                                    background: '#fff',
                                }}
                            >
                                <div className="planet-container h-52 w-52 flex justify-center items-center">
                                    <div
                                        className="h-52 w-52 text-white flex flex-col justify-center items-center rounded-full border border-sky-500"
                                    >
                                        <h4 className="text-[#02347D] font-semibold text-lg">{planet.title}</h4>
                                        {formatDescription(planet.description)}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default FeaturedComponent;