import exporess from 'express';
import {deleteMatch } from '../controllers/matchCon.js';


const router = exporess.Router();

//alle routes herinde starter med /users
router.get('/', getUsers);

router.post('/', createUser) //vi har en function i users.js controller filen som bluver brugt her
 
//get request
router.get('/:id', getUser);

// delete request
router.delete('/:id', deleteMatch);

//patch request for at kunne ændre brugers information
router.patch('/:id', updateUser)

export default router;