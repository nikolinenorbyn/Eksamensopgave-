
export const createUser = (req,res) => {
    const user = req.body;
    const userId = uuidv4(); // installeret uuid, som skaber unit ID til alle brugere 
    const userWithId = { ...user, id: userId} //spread operator 

    users.push(userWithId);
    res.send(`User with the name ${user.firstName} to the database`);
}
