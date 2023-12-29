
export interface Result {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   object;
    location: object;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface Character {
    id: number
    name: string
    image: string
}