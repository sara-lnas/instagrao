import './styles.css'

import { Story } from './Story/Storye'
import { Sugestao } from './Sugestao/sugestion'
import { Post } from './Feed/post'


export default function ConteudoCentral() {
    return (

        <>

        <div className='MainGrid'>
            <div className='first-column' style={{gridArea: 'firstColumn'}}>
            <div>
                <div className='box'></div>
                < Story />
                </div>
            
            
            <div className='two-column' style={{gridArea: 'thirdColumn'}}>
                <div className='box1'></div>
                 < Post />
            </div>
            </div>


            <div>
                <div className='suggestionBox' style={{gridArea: 'secondColumn'}}></div>
                    < Sugestao/>
            </div>
        </div>
       
        </>
        
    ) 
}