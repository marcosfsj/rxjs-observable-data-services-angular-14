import { User } from './user.model';

export interface UserState {
    user: User | undefined;
}

export const initialState = {
    user: undefined
};