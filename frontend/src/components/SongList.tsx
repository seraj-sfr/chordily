import React from 'react';
import { Link } from 'react-router-dom';

interface Song {
    id: string;
    title: string;
    artistName: string;
}

interface SongListProps {
    songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Songs</h2>

            {songs.length === 0 ? (
                <p className="text-gray-500">No songs found.</p>
            ) : (
                <ul className="space-y-3">
                    {songs.map((song) => (
                        <li key={song.id} className="p-3 bg-white rounded shadow">
                            <Link
                                to={`/chords/${song.id}`}
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                {song.title}
                            </Link>
                            <p className="text-sm text-gray-500">by {song.artistName}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SongList;
