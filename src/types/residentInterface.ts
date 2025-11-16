export interface Resident {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknows';
    species: string;
    origin: {name: string};
    image: string;
    episode: string[];
}