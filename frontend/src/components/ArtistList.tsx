import React from 'react';
import { Link } from 'react-router-dom';

interface Artist {
    id: string;
    name: string;
}

interface ArtistListProps {
    artists: Artist[];
}

const ArtistList: React.FC<ArtistListProps> = ({ artists }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl mb-4">Artists</h2>
            {artists.length === 0 ? (
                <p>No artists found.</p>
            ) : (
                <ul>
                    {artists.map((artist) => (
                        <li key={artist.id} className="mb-2">
                            <Link
                                to={`/songs/${artist.id}`}
                                className="text-blue-500 hover:text-blue-700"
                            >
                                {artist.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ArtistList;
