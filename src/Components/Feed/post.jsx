import { IconContext } from 'react-icons'
import './post.css'

import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { LiaBookmarkSolid } from 'react-icons/lia'
import {  BsEmojiSmile } from 'react-icons/bs'

export function Post() {
    return (

        <>
         <header className='headerPost'>
            <div className="infos-post">
                <img src="https://i.pinimg.com/564x/87/19/a5/8719a50beb349f25197801aad321463c.jpg" />

                <p>litle.jo</p>
                <div className='time-post'>
                    <time> &bull; 13 h</time>
                </div>

            </div>
            < FiMoreHorizontal /> 
         </header>

           <div className='img-post'>  
             <img src="https://i.pinimg.com/564x/53/56/d8/5356d8948742ec15a05b5c692631294b.jpg" width={468}  height={468}/>
           </div>

           <div className='footer-post'>
           <IconContext.Provider value={{size: "24px"}}> 
           

              <section className='engajamento'>
                <div className='icons1'>
                    <div className='icon'> < IoMdHeartEmpty /></div>
                    <div className='icon'> < IoChatbubbleOutline /></div>
                    <div className='icon'> < FiSend /></div>
                </div>

                <div className='icone'> < LiaBookmarkSolid /></div>
              </section>
            </IconContext.Provider>

            <section className='like'>
                <span>278 curtidas</span>
            </section> 

            <div className='legend'>
                 <p><strong>litle.jo </strong> Watch and pray, dear, never get tired of trying, and never think it is impossible to conquer your fault. </p></div>

            <div className='viem-comment'>
                <p>Ver todos os 87 comentários</p></div>
            
               <div className='comments'>
               <p><strong>jane_eyre</strong> you are perfect 💖</p>
                 </div>

                <div className='fake-comentario'>
                    <input placeholder="Adicione um comentário..." />
                    
                    <IconContext.Provider value={{size: '13px'}}>
                    
                    <div className='icon1'>
                        < BsEmojiSmile />
                    </div>
                    </IconContext.Provider>
                </div>
                
                <div className='comentario'></div>
           </div>




         <header className='headerPost'>
            
            <div className="infos-post">
                <img src="https://i.pinimg.com/564x/5f/47/2c/5f472c50c1f86ccd17a8c6a4f9990b1c.jpg" />

                <p>chani_fremen</p>
                <div className='time-post'>
                    <time> &bull; 1 h</time>
                </div>

            </div>
            < FiMoreHorizontal />
         </header>

           <div className='img-post'>  
             <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnZ0cGU1bG5uMm0yMTliY3VxeHozeWd1cjg5Nmk5NXhjczhpM3o0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TCkYprBuDAgKAWvfIn/giphy-downsized-large.gif" width={470}  height={473} />
           </div>

           <div className='footer-post'>
           <IconContext.Provider value={{size: "24px"}}> 
           

              <section className='engajamento'>
                <div className='icons1'>
                    <div className='icon'> < IoMdHeartEmpty /></div>
                    <div className='icon'> < IoChatbubbleOutline /></div>
                    <div className='icon'> < FiSend /></div>
                </div>

                <div className='icone'> < LiaBookmarkSolid /></div>
              </section>
            </IconContext.Provider>

            <section className='like'>
                <span>201 curtidas</span>
            </section> 

            <div className='legend'>
                 <p><strong>chani_fremen</strong> my planet arrakis is as beautiful when the sun sets... stretching over the sands. You can sense the spice in the air. </p>
            </div>

            <div className='viem-comment'>
                <p>Ver todos os 63 comentários</p></div>
            
               <div className='comments'>
               <p><strong>lady.jessicaa</strong> There is fascinating, I love my Dune &#x2764; </p>
               </div>

                <div className='fake-comentario'>
                    <input placeholder="Adicione um comentário..." />
                    
                    <IconContext.Provider value={{size: '13px'}}>
                    
                    <div className='icon1'>
                        < BsEmojiSmile />
                    </div>
                    </IconContext.Provider>
                </div>
                
                <div className='comentario'></div>
           </div>




           <header className='headerPost'>
            
            <div className="infos-post">
                <img src="https://i.pinimg.com/564x/90/c8/0e/90c80e020a57aaf24f4c1521b0ef8ecf.jpg" />

                <p>diana.of_avonlea</p>
                <div className='time-post'>
                    <time> &bull; 6 min</time>
                </div>

            </div>
            < FiMoreHorizontal />
         </header>

           <div className='img-post'>  
             <img src="https://i.pinimg.com/564x/40/49/e9/4049e97f0a257809d851a6d07ea63320.jpg" width={468}  height={468}/>
           </div>

           <div className='footer-post'>
           <IconContext.Provider value={{size: "24px"}}> 
           
              <section className='engajamento'>
                <div className='icons1'>
                    <div className='icon'> < IoMdHeartEmpty /></div>
                    <div className='icon'> < IoChatbubbleOutline /></div>
                    <div className='icon'> < FiSend /></div>
                </div>

                <div className='icone'> < LiaBookmarkSolid /></div>
              </section>
            </IconContext.Provider>

            

            <section className='like'>
                <span>436 curtidas</span>
            </section> 

            <div className='legend'>
                 <p><strong>diana.of_avonlea </strong> Juro solenemente ser fiel á minha amiga do peito Anne Shirley enquanto o sol e a lua existirem. </p>
            </div>

            <div className='viem-comment'>
                <p>Ver todos os 199 comentários</p></div>
            
               <div className='comments'>
               <p><strong>anne.com_e</strong> juro que você é a única melhor amiga que eu sempre terei.</p>
               </div>

                <div className='fake-comentario'>
                    <input placeholder="Adicione um comentário..." />
                    
                    <IconContext.Provider value={{size: '13px'}}>
                    
                    <div className='icon1'>
                        < BsEmojiSmile />
                    </div>
                    </IconContext.Provider>
                </div>
                
                <div className='comentario'></div>
           </div>




           <header className='headerPost'>
            
            <div className="infos-post">
                <img src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.18169-9/12994480_10154244645988777_4026320141080176973_n.png?_nc_cat=107&ccb=1-7&_nc_sid=c2f564&_nc_ohc=mq-ZpqQO5fgAX9wArvl&_nc_ht=scontent-gru2-1.xx&oh=00_AfCEmG7hdYRv_9ayoA3DAIp8TTefya7HcJb-Z1m0__760w&oe=655CE950" />

                <p>princess_ashley</p>
                <div className='time-post'>
                    <time> &bull; 3 h</time>
                </div>

            </div>
            < FiMoreHorizontal />
         </header>

           <div className='img-post'>  
             <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjhqOTV4YTJrYjVtcGluNnBhOHRsdWhxOGw1bTFtdmR4MWtoY3kyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GZEYtVH4v9FhC8KU23/giphy.gif" width={468}  height={468}/>
           </div>

           <div className='footer-post'>
           <IconContext.Provider value={{size: "24px"}}> 
           

              <section className='engajamento'>
                <div className='icons1'>
                    <div className='icon'> < IoMdHeartEmpty /></div>
                    <div className='icon'> < IoChatbubbleOutline /></div>
                    <div className='icon'> < FiSend /></div>
                </div>

                <div className='icone'> < LiaBookmarkSolid /></div>
              </section>
            </IconContext.Provider>

            <section className='like'>
                <span>15.673 curtidas</span>
            </section> 

            <div className='legend'>
                 <p><strong>princess_ashley</strong> Hoje foi dia de fazer umas comprinhas com ela ♡</p></div>

            <div className='viem-comment'>
                <p>Ver todos os 890 comentários</p></div>
            
               <div className='comments'>
                 <p><strong>hillary.banks</strong> amei o dia de hoje 💄💅🏾👠.</p>
               </div>
            
                <div className='fake-comentario'>
                    <input placeholder="Adicione um comentário..." />
                    
                    <IconContext.Provider value={{size: '13px'}}>
                    
                    <div className='icon1'>
                        < BsEmojiSmile />
                    </div>
                    </IconContext.Provider>
                </div>
                
                <div className='comentario'></div>
           </div>

        </>
    )
}