import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser ,faBellConcierge,faAddressCard} from '@fortawesome/free-solid-svg-icons'

export const SideBarData = [
    {
        title : 'Home',
        icon:<FontAwesomeIcon icon={faHouseUser} />,
        path:'#home'
    },
    {
        title : 'Service',
        
        icon:<FontAwesomeIcon icon={faBellConcierge} />,
        path:'#Service'
    },
    {
        title : 'About',
        icon:<FontAwesomeIcon icon={faAddressCard} />,
        path:'#About'
    },
]




