import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// for registration purpose
export const register = async (req, res) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })
        await newUser.save();
        res.status(200).json({
            success: true,
            message:'sucessfully registred'
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'failed to register'
        })
    }
}


// for login purspose
export const login = async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'user not found'
            })
        }
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);
        // if password is incorrect
        if (!checkCorrectPassword) {
            return res.status(402).json({
                success: false,
                message: 'Invalid Credentials'
            })
        }

        const { password, role, ...rest } = user._doc

        // create jwt token
        const token = jwt.sign({ id: user._id, role: user.rok }, process.env.JWT_SECRET_KEY);

        res.cookie('accessToken', token, {
            https: true,
        }).status(200).json({
            token,
            data: { ...rest },
            role
        });

    }
    catch (error) {
        console.log(error)
        res.status(500)
            .json({
                success: false,
                message: "Failed to Login"
            });
    }
}
