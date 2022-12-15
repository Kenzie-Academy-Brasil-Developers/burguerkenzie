import { createContext } from 'react';

interface IUserProps {
    children: React.ReactNode;
}

interface IUserContext {}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    );
};
