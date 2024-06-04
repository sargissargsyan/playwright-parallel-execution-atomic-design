export class User {
    id?: number;
    username?: string;
    full_name?: string;
    full_name_display?: string;
    color?: string;
    bio?: string;
    lang?: string;
    theme?: string;
    timezone?: string;
    is_active?: boolean;
    photo?: null;
    big_photo?: null;
    gravatar_id?: string;
    roles?: any[];
    total_private_projects?: number;
    total_public_projects?: number;
    email?: string;
    uuid?: string;
    date_joined?: string;
    read_new_terms?: boolean;
    accepted_terms?: boolean;
    max_private_projects?: null;
    max_public_projects?: null;
    max_memberships_private_projects?: null;
    max_memberships_public_projects?: null;
    verified_email?: boolean;
    refresh?: string;
    auth_token?: string;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}


