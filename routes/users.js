import exporess from 'express';
import {createUser, deleteUser, getUsers, getUser, updateUser} from '../controllers/userCon.js';


const router = exporess.Router();

//alle routes herinde starter med /users
router.get('/', getUsers);

router.post('/', createUser) //vi har en function i users.js controller filen som bluver brugt her
 
//get request
router.get('/:id', getUser);

// delete request
router.delete('/:id', deleteUser);

//patch request for at kunne ændre brugers information
router.patch('/:id', updateUser)

export default router;