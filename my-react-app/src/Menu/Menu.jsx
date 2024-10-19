import React from 'react'
import './Menu.css'
import spark from '../constants/spark.mp4'
import wood from '../constants/wood.avif'
const Menu = () => {
  return (
    <div id='menu' className='menu_container'>
        <div className="menu_background">
            <img src={wood} alt="" />
            {/* <video className='menu_background_video'autoPlay muted loop >
                <source src={spark} type='video/mp4'/>
            </video> */}
         </div>
         <h1 className='menu_maintext'>MENU </h1>
         <hr className='customline_menu'/>
         <div className="menu_item">
            <div className="menu_item_1row">
                <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2>
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                  
                    <div className="menu_item_listitem">
                    <p>King Fisher </p>
                    <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                 </div>
                  <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2> 
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    
                </div>
                <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2> 
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    
                </div>
                <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2> 
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    
                </div>
            </div>
       

            <div className="menu_item_1row">
                <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2>
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                  
                    <div className="menu_item_listitem">
                    <p>King Fisher </p>
                    <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                 </div>
                  <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2> 
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    
                </div>
                <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2> 
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    
                </div>
                <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2> 
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    
                </div>
            </div>

        
            <div className="menu_item_1row">
                <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2>
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                   
                 </div>
                  <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2> 
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                  
                </div>
                <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2> 
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    
                </div>
                <div className="menu_item_1col">
                    <div className="menu_item_heading">
                        <h2>Bevarages</h2> 
                    </div>
                   <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    <div className="menu_item_listitem">
                    <p>King Fisher</p> <hr className='customline_listitem' style={{width:"10%"}}/>
                    <span>Rs 110/-</span>
                    </div>
                    
                </div>
            </div>
        
        
        </div>
    </div>
  )
}

export default Menu