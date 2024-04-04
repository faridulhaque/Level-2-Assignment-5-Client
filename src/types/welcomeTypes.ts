export type TWelcome = {
    showLogin: boolean;
    setShowLogin: (value: boolean) => void;
} 

export type TWelcomeForm = {
    email: string;
    password: string;
}