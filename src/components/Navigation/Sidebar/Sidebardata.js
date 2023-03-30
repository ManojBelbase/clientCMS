import { AiFillHome } from 'react-icons/ai'
import { RiPagesLine } from 'react-icons/ri'
import { BsFillPostcardHeartFill } from 'react-icons/bs'
import { IoIosContacts } from "react-icons/io"
const siderarData = [
    {
        icons: <AiFillHome />,
        Name: "Dashboard",
        path: '/'
    },
    {
        icons: <RiPagesLine />,
        Name: "Pages",
        path: "/pages"
    },
    {
        icons: <BsFillPostcardHeartFill />,
        Name: "Posts",
        path: "/posts"
    },
    {
        icons: <IoIosContacts />,
        Name: "Contact",
        path: "/contact"
    },
    {
        icons: <IoIosContacts />,
        Name: "Login",
        path: "/login"
    }
]
export default siderarData;