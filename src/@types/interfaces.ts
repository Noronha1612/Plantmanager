export interface Enviroment {
    key: string;
    title: string;
}

type frequecyKeys = 'day' | 'week';

export interface PlantsWaterFrequencies {
    key: frequecyKeys;
    title: string;
}

export interface Plant {
    id: number;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: string[];
    frequency: {
        times: number;
        repeat_every: frequecyKeys;
    };
}