import React, { useState } from 'react';
import MapOverlay from './components/MapOverlay';
import DataChart from './components/DataChart';

const years = Array.from({ length: 10 }, (_, i) => 2016 + i);
const regions = ['Region 1', 'Region 2', 'Region 3', 'Region 4', 'Region 5'];

export default function App() {
  const [yearIndex, setYearIndex] = useState(0);
  const [data, setData] = useState(
    years.map(() => regions.map(() => '')) // empty chart
  );

  const currentYear = years[yearIndex];

  const handleInputChange = (yIndex, rIndex, value) => {
    const upperVal = value.toUpperCase();
    if (upperVal === 'Y' || upperVal === 'N' || upperVal === '') {
      const updated = [...data];
      updated[yIndex][rIndex] = upperVal;
      setData(updated);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4">
        <div className="flex justify-between items-center mb-2">
          <button
            onClick={() => setYearIndex(Math.max(yearIndex - 1, 0))}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Prev
          </button>
          <h2 className="text-xl font-bold">Year: {currentYear}</h2>
          <button
            onClick={() => setYearIndex(Math.min(yearIndex + 1, years.length - 1))}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Next
          </button>
        </div>
        <div className="relative">
          <img src="/basemap.png" alt="Illinois River Basin" className="w-full" />
          <MapOverlay presence={data[yearIndex]} />
        </div>
      </div>
      <div className="w-1/2 overflow-auto p-4">
        <DataChart
          years={years}
          regions={regions}
          data={data}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
