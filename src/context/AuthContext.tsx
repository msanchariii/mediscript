"use client";
import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
} from "react";
import axios from "axios";

interface AuthState {
    isLoggedIn: boolean;
    role: string | null;
    id: number | null;
}

interface AuthContextType {
    auth: AuthState;
    login: (email: string, password: string, role: string) => Promise<boolean>;
    logout: (id: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState<AuthState>({
        isLoggedIn: false,
        role: null,
        id: null,
    });

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const checkLoginStatus = async (): Promise<void> => {
        try {
            const response = await axios.get<{
                isLoggedIn: boolean;
                role?: string;
                id?: number;
            }>("/api/auth/check-login", {
                withCredentials: true,
            });
            if (response.data.isLoggedIn) {
                setAuth({
                    isLoggedIn: true,
                    role: response.data.role || null,
                    id: response.data.id || null,
                });
            }
        } catch (error) {
            console.error("Error checking login status:", error);
        }
    };

    const login = async (
        email: string,
        password: string,
        role: string
    ): Promise<boolean> => {
        try {
            const response = await axios.post<{ success: boolean }>(
                "/api/auth/login",
                { email, password, role },
                { withCredentials: true }
            );
            if (response.data.success) {
                await checkLoginStatus(); // Refresh auth state after successful login
                return true;
            }
        } catch (error) {
            console.error("Login error:", error);
        }
        return false;
    };

    const logout = async (id: number): Promise<void> => {
        try {
            await axios.post(
                "/api/auth/logout",
                { id },
                { withCredentials: true }
            );
            setAuth({ isLoggedIn: false, role: null, id: null });
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
