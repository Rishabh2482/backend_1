import MERNUser from '../models/UserModel.js';

export const getUsers = async (req, res) =>{
    try {
        const users = await MERNUser.find();
        res.json(users);        // return the list of users with status 200 it is by default 200 status code
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async(req, res)=>{
    try{
        const user = await MERNUser.findById(req.params.id);
        if(!user){
            return res.status(400).json({message: 'User not found'});
        }
        res.json(user);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const saveUser = async(req, res)=>{
    const user = new MERNUser(req.body);
    try{
        const savedUser = await user.save();
        res.status(201).json(savedUser); // 201 status code for created resource
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const updateUser = async(req, res) =>{
    try{
        const updateduser = await MERNUser.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const deleteUser = async(req, res)=>{
    try{
        const deletedUser = await MERNUser.deleteOne({_id:req.params.id});
        res.json(200).json(deletedUser);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}