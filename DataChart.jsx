import React from 'react';

export default function DataChart({ years, regions, data, onChange }) {
  return (
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead>
        <tr>
          <th className="border border-gray-400 px-2 py-1">Year</th>
          {regions.map((region, i) => (
            <th key={i} className="border border-gray-400 px-2 py-1">{region}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {years.map((year, yIndex) => (
          <tr key={year}>
            <td className="border border-gray-400 px-2 py-1">{year}</td>
            {regions.map((_, rIndex) => (
              <td key={rIndex} className="border border-gray-400 px-2 py-1">
                <input
                  type="text"
                  maxLength="1"
                  value={data[yIndex][rIndex]}
                  onChange={(e) => onChange(yIndex, rIndex, e.target.value)}
                  className="w-8 text-center border border-gray-300 rounded"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
