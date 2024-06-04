export class Issue {
    id?: number;
    ref?: number;
    project?: number;
    project_extra_info?: { [key: string]: string };
    subject?: string;
    description?: string;
    status?: number;
    status_extra_info?: { [key: string]: string };
    assignedTo?: number;
    assignedToExtraInfo?: { [key: string]: string };
    severity?: number;
    priority?: number;
    type?: number;

    constructor(init?: Partial<Issue>) {
        Object.assign(this, init);
    }

}
