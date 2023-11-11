import '../../scss/Account/_UserProfile.scss'
import { useNavigate } from 'react-router-dom'
import AccountJosser from '../../assets/img/AccountJosser.jpg'
import AccountLucas from '../../assets/img/AccountLucas.jpg'
import devAccount from '../../assets/img/devAccount.png'
import kidsAccount from '../../assets/img/kids.jpg'
import wolfAccount from '../../assets/img/wolfAccount.jpg'
import { useEffect } from 'react'

import {loadData} from '../hooks/Fetch'
const UserProfile = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Movies')
    }

    useEffect(()=>{
        loadData('http://127.0.0.1:8000/movies')
        .then(data => console.log(data))
    },[])

 
    const Data = [
        {
            'id': 1,
            'name': 'Josser',
            'picture': AccountJosser,
        },
        {
            'id': 2,
            'name': 'Lucas',
            'picture': AccountLucas,
        },
        {
            'id': 3,
            'name': 'Developers',
            'picture': devAccount,
        },
        {
            'id': 4,
            'name': 'Niños',
            'picture': kidsAccount,
        },
        {
            'id': 5,
            'name': 'Principal',
            'picture': wolfAccount,
        },
    ]

    return (
        <>
            <section>
            <div className="list-Profile">
                <h1>¿Quién esta viendo ahora?</h1>
                <div className="Accounts">
                    {Data.map(user => (
                        <div key={user.id} className="user" onClick={handleClick}>
                            <a href="#">
                                <img src={user.picture} alt="Foto de la cuenta" />
                            </a>
                            <span>{user.name}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-profile-lock ltr-4z3qvp e1svuwfo1" data-name="Lock" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z" fill="#666666"></path></svg>
                        </div>
                    ))}
                </div>
            </div>
            <div className="admin-profile-container">
                <a className='Admin-Perfile' href="#">Administrar perfiles</a>
            </div>
        </section>
        </>
    )
}

export default UserProfile