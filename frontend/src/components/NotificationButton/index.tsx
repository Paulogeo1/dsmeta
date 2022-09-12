import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';

import './styles.css'

type Props = {
    salesId: number;
}


function handleClick(salesId :number) {
    axios(`${BASE_URL}/sales/${salesId}/notification`)
        .then(response =>{
            toast.info("SMS enviado com sucesso");
        })
}

function NotificationButton( {salesId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(salesId)}>
            <img src= {icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton