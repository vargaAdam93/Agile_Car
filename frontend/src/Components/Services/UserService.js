//UserService.js
import  axios from 'axios';

class UserService
{
    sendData(data)
    {
        axios.post('http://localhost:4200/users/register/post',
            {
                name: data.name,
                email: data.email,
                password: data.password,
                licence_number: data.licence_number,
                type:data.type
            })
            .then(function (response) {
                alert(response);
            })
            .catch(function (error) {
                alert(error);
            });
    }
    login(data)
    {
        axios.post('http://localhost:4200/users/login/post',
            {
                email: data.email,
                password: data.password
            })
            .then(function (response) {
                if(response==null){
                    return null
                }
                return response.data._id;

            }).catch((err,response)=>{console.log(err);console.log(response)})

    }
}
export default UserService;