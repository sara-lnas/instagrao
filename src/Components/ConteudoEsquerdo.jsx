import ItemMenu from "./ItemMenu";
import Logo from '../assets/logo-instagram.png'
import Eu from '../assets/img/mi.jpg'
import './ConteudoEsquerdo.css';

import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";


export default function LadoEsquerdo () {
    return(
    <div className="LadoEsquerdo">
       
       <div className="menuPrincipal"> 

       <div className='logo'>
            <img src={Logo} />
        </div>
       
       <ItemMenu icone= {< GoHomeFill style={{height: "25px", width:"25px"}} />} texto="Página Inicial"/>

       <ItemMenu icone={< FiSearch style={{height: "25px", width:"25px"}} />} texto="Pesquisa" />

       <ItemMenu icone={< FaRegCompass style={{height: "25px", width:"25px"}} />} texto="Explorar"/>

       <ItemMenu icone={< BiMoviePlay style={{height: "25px", width:"25px"}} />} texto="Reels"/>

       <ItemMenu icone={< RiMessengerLine style={{height: "25px", width:"25px"}} />} texto="Mensagens"/>

       <ItemMenu icone={< AiOutlineHeart style={{height: "25px", width:"25px"}} />} texto="Notificações"/>

       <ItemMenu icone={< BsPlusSquare style={{height: "22px", width:"22px"}} />} texto="Criar"/>

       <ItemMenu icone={<img src={Eu} className="user-photo" />} texto="Perfil"/>


       <div className="mais-rede">

       <ItemMenu icone={< HiOutlineBars3 style={{height: "25px", width:"25px"}} />} texto="Mais"/>
    
       </div>
        </div>

    </div>
    )
}