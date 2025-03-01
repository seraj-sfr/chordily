import { Request, Response, NextFunction } from 'express';

let chords = [
    { id: 'chord1', songId: 'song1', name: 'G Major', difficulty: 'easy' },
    { id: 'chord2', songId: 'song1', name: 'D Major', difficulty: 'easy' },
];

export const getChordsBySong = async (req: Request, res: Response) => {
    const { songId } = req.params;
    const songChords = chords.filter((chord) => chord.songId === songId);
    res.json(songChords);
};

export const addChord = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { songId, name, difficulty } = req.body;

        if (!songId || !name || !difficulty) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        const newChord = {
            id: Date.now().toString(),
            songId,
            name,
            difficulty,
        };

        chords.push(newChord);
        res.status(201).json(newChord);
    } catch (error) {
        next(error);
    }
};

export const updateChord = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { chordId } = req.params;
        const { name, difficulty } = req.body;

        const chord = chords.find((ch) => ch.id === chordId);
        if (!chord) {
            res.status(404).json({ message: 'Chord not found' });
            return;
        }

        chord.name = name ?? chord.name;
        chord.difficulty = difficulty ?? chord.difficulty;

        res.json(chord);
    } catch (error) {
        next(error);
    }
};

export const deleteChord = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { chordId } = req.params;

        const initialLength = chords.length;
        chords = chords.filter((ch) => ch.id !== chordId);

        if (chords.length === initialLength) {
            res.status(404).json({ message: 'Chord not found' });
            return;
        }

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
