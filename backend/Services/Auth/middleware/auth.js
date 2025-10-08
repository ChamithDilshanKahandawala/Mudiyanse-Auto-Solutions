import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'Change This Secret';

export default function (req,res , next){
    const authHeader = req.headers.authorization
    if(!authHeader ) return res.status(401).json({error:`Not Token Provided`});

    const parts = authHeader.split(' ');
    if(parts.lenght !==2) return res.status(401).json({error:'Token Error'});
    const token = parts[1];

    try{
        const payload = jwt.verify(token,JWT_SECRET);
        req.user = payload;
        next();

    }catch(err){
        return res.status(401).json({error:'Invalid token'});
    }
} 