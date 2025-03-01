import React, { useEffect, useState } from 'react';
import ChordList from '../components/ChordList';

interface Chord {
    id: string;
    name: string;
    difficulty: 'easy' | 'medium' | 'hard';
    imageUrl?: string;
}

const ChordsPage: React.FC = () => {
    const [chords, setChords] = useState<Chord[]>([]);

    useEffect(() => {
        fetch('/api/chords')
            .then((res) => res.json())
            .then(setChords)
            .catch(console.error);
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">All Chords</h2>
            <ChordList chords={chords} />
        </div>
    );
};

export default ChordsPage;
