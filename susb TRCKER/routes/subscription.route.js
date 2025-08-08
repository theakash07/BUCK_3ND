import { Router } from "express";

const subscritpionRouter = Router();

subscritpionRouter.get('/', (req, res ) => res.send ( { title : 'Get all subscription '}));

subscritpionRouter.get('/:id', (req, res ) => res.send ( { title : 'Get subscription details '}));


subscritpionRouter.post('/', (req, res ) => res.send ( { title : 'Create subscription '}));

subscritpionRouter.put('/:id', (req, res ) => res.send ( { title : 'Update subscription '}));


subscritpionRouter.delete('/user/:id', (req, res ) => res.send ( { title : 'Get all user subscription'}));


subscritpionRouter.put('/:id/cancel', (req, res ) => res.send ( { title : 'Cancel Subscription'}));


subscritpionRouter.get('/upcoming-renewals', (req, res ) => res.send ( { title : 'get  upcoming renewals'}));




export default subscritpionRouter;

