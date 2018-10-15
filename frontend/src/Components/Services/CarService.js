import  axios from 'axios';

class CarService
{
    sendData(data)
    {

        axios.post('http://localhost:4200/cars/add/post',
            {
                plate_number: data.plate,
                type: data.type
            })
            .catch(function (error) {
                alert(error);
            });
    }



    delete(data)
    {
        axios.post('http://localhost:4200/cars/delete/post',
            {
                plate_number: data.plate,
                email: data.email,
                password: data.password
            })
            .then(console.log('Deleted')).catch(error => alert("Hiba"+error));

    }
}
export default CarService;