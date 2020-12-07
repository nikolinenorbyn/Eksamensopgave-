import { v4 as uuidv4 } from 'uuid';

let users = []; //let i stedet for const da vi ændrer i users id

export const getUsers = (req,res) => {
    res.send('Hello');
}

export const createUser = (req,res) => {
    const user = req.body;
    const userId = uuidv4(); // installeret uuid, som skaber unit ID til alle brugere 
    const userWithId = { ...user, id: userId} //spread operator 

    users.push(userWithId);
    res.send(`User with the name ${user.firstName} to the database`);
}

export const getUser = (req,res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    
    users = users.filter((user) => user.id != id)
    res.send(`user with the id ${id} deleted from the database`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age, gender, interest, email, password } = req.body;
    const user = users.find((user) => user.id == id );

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lasyName;
    if(age) user.age = age;   
    if(gender) user.gender = gender;
    if(interest) user.interest = interest;
    if(password) user.password = password;
    if(email) user.email = email

    res.send(`Bruger med id'et ${id} er blevet opdateret`);

}