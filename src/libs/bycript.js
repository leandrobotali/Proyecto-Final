import bcrypt from "bcryptjs";

//======================================================
//encripa una contraseña
export const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

//======================================================
//compara contraseñas
export const matchPassword = async function (password, userPassword) {
    return await bcrypt.compare(password, userPassword);
};