import React from 'react';

interface Chord {
    id: string;
    name: string;
    difficulty: 'easy' | 'medium' | 'hard';
    imageUrl?: string;  // Optional if you want to show chord diagrams/images
}

interface ChordListProps {
    chords: Chord[];
}

const ChordList: React.FC<ChordListProps> = ({ chords }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Chords</h2>

            {chords.length === 0 ? (
                <p className="text-gray-500">No chords found.</p>
            ) : (
                <ul className="space-y-3">
                    {chords.map((chord) => (
                        <li
                            key={chord.id}
                            className="flex items-center justify-between p-4 bg-white shadow rounded"
                        >
                            <div className="flex items-center space-x-4">
                                {chord.imageUrl && (
                                    <img
                                        src={chord.imageUrl}
                                        alt={chord.name}
                                        className="w-12 h-12 object-contain"
                                    />
                                )}
                                <div>
                                    <p className="text-lg font-medium">{chord.name}</p>
                                    <span className={`text-sm font-semibold px-2 py-1 rounded
                                        ${chord.difficulty === 'easy' ? 'bg-green-200 text-green-800' :
                                            chord.difficulty === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                                            'bg-red-200 text-red-800'}
                                    `}>
                                        {chord.difficulty}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ChordList;
