import { loginUser, registerUser } from "../services/authServices.js";

// register
export const register = async (req, res) => {
    try {
        const newUser = await registerUser(req.body);

        // Retira a senha do lado do cliente
        const { password, ...userData } = newUser._doc;

        res.status(200).json({
            userData,
            message: "User has been registered successfully",
        });
    } catch (error) {
        console.error("Erro ao registrar usuário:", error.message); // Log para debug
        res.status(500).json({
            message: error.message || "An error occurred while registering the user.",
        });
    }
};

// login
export const login = async (req, res) => {
    try {
        const loggedInUser = await loginUser(req.body);

        // Retira a senha do lado do cliente
        const { password, ...userData } = loggedInUser._doc;

        res.status(200).json({
            userData,
            message: "User logged in successfully",
        });
    } catch (error) {
        console.error("Erro ao fazer login:", error.message); // Log para debug
        res.status(400).json({
            message: error.message || "An error occurred during login.",
        });
    }
};

