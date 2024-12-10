import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

// register
export const registerUser = async (body) => {
    const hashedPassword = bcrypt.hashSync(body.password, 10);
    const newUser = new userModel({
        username: body.username,
        email: body.email,
        password: hashedPassword,
        profilePicture: "https://via.placeholder.com/150",
    });
    await newUser.save();
    return newUser;
};

export const loginUser = async (body) => {
    // Verifica se o usuário existe
    const user = await userModel.findOne({ email: body.email });
    if (!user) {
        throw new Error("User not found");
    }

    // Verifica a senha
    const passwordCheck = await bcrypt.compare(body.password, user.password);
    if (!passwordCheck) {
        throw new Error("Wrong Password!");
    }

    // Retorna o usuário
    return user;
};

