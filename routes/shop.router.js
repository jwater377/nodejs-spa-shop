import express from 'express';
import Shop from '../schemas/shop.schema';
import { createId } from '@paralleldrive/cuid2';



const router = express.Router();

router.post('/shop', async(req, res, next)=>{
    const {title, content, user, password} = req.body;

    const uuid = createId();

    const shopOrder = await Shop.find().sort('-order').exec();

    const shop = new Shop({uuid, title, content, user, password, state, date})
})

export default router;
