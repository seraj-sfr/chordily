import React, { useEffect, useState } from 'react';
import SongList from '../components/SongList';

interface Song {
    id: string;
    title: string;
    artistName: string;
}

const SongsPage = () => {
    const [songs, setSongs] = useState<Song[]>([]);

    useEffect(() => {
        fetch('/api/songs')  // Adjust to your backend API
            .then((res) => res.json())
            .then((data) => setSongs(data))
            .catch(console.error);
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">All Songs</h2>
            <SongList songs={songs} />
        </div>
    );
};

export default SongsPage;
