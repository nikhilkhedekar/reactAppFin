import axios from "axios"

const Temp = () => {

    const finProducts = [
        {
            id: Math.random(),
            productName: 'IPhone 12',
            description: '6.1-inch (15.5 cm diagonal) Super Retina XDR display, A14 Bionic chip',
            price: 80000,
        },{
            id: Math.random(),
            productName: 'LG OLED TV',
            description: '4K Ultra HD Smart OLED TV',
            price: 60000,
        },{
            id: Math.random(),
            productName: 'Sony HT-RT3 Real 5.1 Dolby Digital',
            description: 'Soundbar Home Theater System',
            price: 35000,
        },{
            id: Math.random(),
            productName: 'Lenovo ThinkPad E470',
            description: 'Lenovo ThinkPad E470',
            price: 88000,
        },{
            id: Math.random(),
            productName: 'Logitech Headphones 390',
            description: 'Headphones',
            price: 4500,
        },{
            id: Math.random(),
            productName: 'Amazon Echo Show 10',
            description: 'HD smart display with motion, premium sound and alexa (Black)',
            price: 7000,
        },{
            id: Math.random(),
            productName: 'Samsung Galaxy Watch Active 2',
            description: 'With Super AMOLED Display',
            price: 15000,
        },
    ] 

    const onSubmit = (e) => {
        e.preventDefault()
        const response = axios.post('https://react-fetch-req-default-rtdb.firebaseio.com/fin.json', finProducts)
        console.log(response)
    }
    return(
        <div>
            <div>temp</div>
        <button onClick={onSubmit} >submit</button>
        </div>
    )
}

export default Temp