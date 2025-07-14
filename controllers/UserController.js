import MERNUser from '../models/UserModel.js';

export const getUsers = async (req, res) =>{
    try {
        const users = await MERNUser.find();
        res.json(users);        // return the list of users with status 200 it is by default 200 status code
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
