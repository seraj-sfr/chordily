import { Request, Response, NextFunction, RequestHandler } from 'express';

type User = {
    id: string;
    username: string;
    followedArtists: string[];
};

let users: User[] = [
    { id: '1', username: 'guitarFan', followedArtists: ['Oasis', 'Ed Sheeran'] },
];

export const createUser: RequestHandler = (req, res) => {
    const { username } = req.body;

    if (!username) {
        res.status(400).json({ message: 'Username is required' });
        return;
    }

    const newUser: User = {
        id: Date.now().toString(),
        username,
        followedArtists: [],
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

export const getAllUsers: RequestHandler = (req, res) => {
    res.json(users);
};

export const getUser: RequestHandler = (req, res) => {
    const { userId } = req.params;
    const user = users.find((u) => u.id === userId);

    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    res.json(user);
};

export const followArtist: RequestHandler = (req, res) => {
    const { userId } = req.params;
    const { artist } = req.body;

    const user = users.find((u) => u.id === userId);

    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    if (!artist) {
        res.status(400).json({ message: 'Artist name is required' });
        return;
    }

    if (!user.followedArtists.includes(artist)) {
        user.followedArtists.push(artist);
    }

    res.json(user);
};

export const unfollowArtist: RequestHandler = (req, res) => {
    const { userId } = req.params;
    const { artist } = req.body;

    const user = users.find((u) => u.id === userId);

    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    user.followedArtists = user.followedArtists.filter((a) => a !== artist);
    res.json(user);
};
