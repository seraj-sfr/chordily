import React, { useEffect, useState } from 'react';
import ArtistList from '../components/ArtistList';

interface Artist {
    id: string;
    name: string;
}

const ArtistsPage = () => {
    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        fetch('/api/artists')
            .then((res) => res.json())
            .then((data) => setArtists(data));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl mb-4">Artists</h2>
            <ArtistList artists={artists} />
        </div>
    );
};

export default ArtistsPage;
