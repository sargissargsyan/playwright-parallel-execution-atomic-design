import { User } from './User';

export class Project {
    id?: number;
    name?: string;
    slug?: string;
    description?: string;
    owner?: User;
    members?: User[];
    creationTemplate?: number;
    isPrivate?: boolean;

    constructor(init?: Partial<Project>) {
        Object.assign(this, init);
    }
}