export interface HomeState {
    collapsed: boolean;
    openFeatureTitle: string;
    screenWidth: number;
}

export const initialState = {
    collapsed: false, 
    openFeatureTitle:'Dashboard',
    screenWidth: 0,
};