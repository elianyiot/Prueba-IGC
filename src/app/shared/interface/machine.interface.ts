export interface Machine {
    id: string;
    name: string;
    status: 'active' | 'maintenance' | 'error' | 'offline';
    doorOpen: boolean;
    counters: {
        played: number;
        won: number;
    };
    lastSync: Date;
    imgUrl: string;
}