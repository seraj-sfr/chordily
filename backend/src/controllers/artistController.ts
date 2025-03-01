import { Request, Response, RequestHandler } from 'express';

type Artist = {
    id: string;
    name: string;
    genre: string;
    bio?: string;
};

let artists: Artist[] = [
    { id: '1', name: 'Oasis', genre: 'Rock', bio: 'A British rock band formed in Manchester.' },
    { id: '2', name: 'Ed Sheeran', genre: 'Pop', bio: 'A singer-songwriter from the UK.' },
];

export const getAllArtists: RequestHandler = (req, res) => {
    res.json(artists);
};

export const getArtist: RequestHandler = (req, res) => {
    const { artistId } = req.params;

    const artist = artists.find((a) => a.id === artistId);
    if (!artist) {
        res.status(404).json({ message: 'Artist not found' });
        return;
    }

    res.json(artist);
};

export const createArtist: RequestHandler = (req, res) => {
    const { name, genre, bio } = req.body;

    if (!name || !genre) {
        res.status(400).json({ message: 'Name and genre are required' });
        return;
    }

    const newArtist: Artist = {
        id: Date.now().toString(),
        name,
        genre,
        bio,
    };

    artists.push(newArtist);
    res.status(201).json(newArtist);
};

export const updateArtist: RequestHandler = (req, res) => {
    const { artistId } = req.params;
    const { name, genre, bio } = req.body;

    const artist = artists.find((a) => a.id === artistId);
    if (!artist) {
        res.status(404).json({ message: 'Artist not found' });
        return;
    }

    artist.name = name ?? artist.name;
    artist.genre = genre ?? artist.genre;
    artist.bio = bio ?? artist.bio;

    res.json(artist);
};

export const deleteArtist: RequestHandler = (req, res) => {
    const { artistId } = req.params;

    const initialLength = artists.length;
    artists = artists.filter((a) => a.id !== artistId);

    if (artists.length === initialLength) {
        res.status(404).json({ message: 'Artist not found' });
        return;
    }

    res.status(204).send();
};
