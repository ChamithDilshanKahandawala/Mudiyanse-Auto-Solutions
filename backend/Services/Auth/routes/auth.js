import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/User'
import authMiddleware from '../middleware/auth'

dotenv.config();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'Change this secret';

//Register (for testing purpose / initial admin creation)
router.post('/register',async(req,res)=>{
    try{
        const {name,email,passwor,} = req.body;
        if(!name || !email|| !password){
            return res.status(400).json({error:'Missing Fields'});
        }

        const existing = await User.findOne({email});
        if(existing){
            return res.status(400).json({erro:'Email already Registers'});

        }

        const passwordHash = await bcrypt.hash(password,10);
        const newUser = new User({name,email,passwordHash});
        await newUser.save();

        const token = jwt.sign({id:user._id, role:user.role},JWT_SECRET,{expiresIn:'7d'});
        res.status(201).json({token,user:{id:user._id,name:user.name,email:user.email,role:user.role}});


    }catch(err){
        console.error('Logging Error:'.replace,err);
        res.status(500).json({error:'Server Error'});
    }
});


//Login

router.post('/login', async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:'Missing Fields'});
        }
        
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:'Invalid Credentials'});
        }

        const match = await bcrypt.compare(password, user.passwordHash);
        if(!match){
            return res.status(400).json({error:'Invalid Credentials'});
        }

        const token = jwt.sign({id:user._id, role:user.role},JWT_SECRET,{expiresIn:'7d'});
        res.json({token, user:{id:user._id,name:user.name,email:user.email,role:user.role}});


    }catch(err){
        console.error('Login Error:',err);
        res.status(500).json({error:'Server Error'});
    }
});


//Protected: get current User
router.get('/profile',authMiddleware, async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select('-passwordHash');
        if(!user){
            return res.status(404).json({error:'User not Found'});
        }
            res.json(user);
    }catch(err){
            console.error('Profile Error:',err);
            res.status(500).json({error:'server Error'});
        }
});

export default router;
