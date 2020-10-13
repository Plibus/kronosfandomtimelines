export interface Post {
    id: number;
    fandomId: number;
    type: string;
    catagory: string;
    theme: string;
    name: string;
    description: string;
    created: Date;
    updated: Date;
    creator: number;
    updator: number;
    likes: number;
    views: number;
    data: JSON;
    active: boolean;
}
