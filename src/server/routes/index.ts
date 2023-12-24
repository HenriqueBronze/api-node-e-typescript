import {Router} from 'express';
import{StatusCodes} from 'http-status-codes'


const router  = Router();

router.get('/', (_, res) => {
	return res.send('Ola Dev');
});

router.post('/teste/:id', (req, res) => {
	return res.status(StatusCodes.NOT_IMPLEMENTED).json(req.params);

});
export {router};
