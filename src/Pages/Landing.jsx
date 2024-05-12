import img6 from '../Components/Assets/img-6.jpg';
import bline from '../Components/Assets/bline.png';
import gline from '../Components/Assets/gline.jpg';
import rline1 from '../Components/Assets/pngtree.jpg';

import { useState } from "react";
import "./Landing.css";
import card from '../Components/Assets/pyicon-4.svg';

const Landing = () => {
    const [ isOpen, setIsOpen ] = useState(true); // State variable for tracking menu visibility

  const toggleMenuo = () => {
    setIsOpen(true);
  };
  const toggleMenu = () => {
    setIsOpen(false);
  };
   // const [ page, setPage ] = useState('one');   
     // State variable for tracking menu visibility

 // const toggleMenuo = () => {
   // setPage('one');
 // };
  //const toggleMenut = () => {
    //setPage('two');
  //};
    return (
        <div className="containe">
            <div className="container">
	 	        <div className="bg">
    		        <nav>
      			        <div className="navbar">
        			        <div className="logo">
           				        <i className="fas fa-user"></i>
        			        </div>
                            <div className='shift'>
       				        <i className="fas  fa-home"></i></div>
       				        <i className="fas fa-pie-chart menu"></i>
       				        <i className="fas fa-message menu"></i>
       				        <i className="fas fa-video menu"></i>   
      			        </div>
    		        </nav>
    		        <section className="main mm">
     			        <div className="first">
     				        <div className="intro">	
     					        <div className="intro1">
     						        <form className="search_bar">
                                        <i className="fa fa-search">	</i>	
     						            <input type="text" placeholder ="Search" />
                                    </form>
     						        <p className="blueviolet">	Feedback</p>
     						        <p className="blueviolet">	Contacts</p>
     						        <p className="blueviolet">	Help</p>
     					        </div>
         					</div>
     					    <div className="intro2">
     						    <div className="gnum">
     							    <p className="but" >
                                        <img src={bline} className='bline' alt="" />	<p>visitors <br/>10,320</p></p>
                                        <p className="but" >
                                        <img src={bline} className='bline' alt="" />	<p>customers <br/>4,320</p></p>
                                        <p className="but3" >
                                        <img src={rline1} className='bline' alt="" />
                                       	<p>ORDERS <br/>2,980</p></p>
     							    
     						    </div>
     				        </div>
                          
     				        <div className="statistics">
    					        <div className="sta">	
    						        <h5>	Statistics</h5>	
    						        <div className="hover">Year ▾
            						    <ul className="dropdown">
                						    <li className="list"><a href="#">2020</a></li>
                						    <li className="list"><a href="#">2021</a></li>
                						    <li className="list"><a href="#">2022</a></li>
               							    <li className="list"><a href="#">2023</a></li>
            						    </ul>	
            				        </div>
    					        </div>
    					        <div id="chart_div" ></div>
    				        </div>	
    				        <div className="last">	
    					        <div className="time">	
    						        <div id="curve_chart" style={{ height: '200px'}}></div>
    					        </div>
    					        <div className="details">
    						        <div className="lily">	
    							        <img src={img6} style={{width: '10%'}} className="icon"/>		
    							        <p>	Lily Donovan<br/>			
    								        <span style={{color: 'grey'}}>Business trainer</span>
    							        </p>
    						        </div>	
    						        <p className="how">	How to properly manage your 	personal budget</p>
    						        <div className="icon">
    							        <i className="fa fa-play">	</i>
    							        <p>	Video</p>
    							        <i className="fa fa-clock">	</i>
    							        <p className="fc">	 15mins</p> 
    							        <i className="fa fa-star">	</i>
    							        <p>	12 Likes</p>	
    						        </div>
    					            <div className="days">		
    						            <p className="ago">	5 days ago</p>
    						            <p className="connect">	Connect 
    							        <i className="fa fa-arrow-left"> 	</i>
    						            </p>	
    					            </div>
    				            </div>	
    			            </div>  
 			            </div>
 			            <div className="sec">	
 				            <i className="men">	
 				                <i className="fas fa-chart-bar menu "></i>
       			                <img src={img6} style={{width: '9%'}} className="icon"/>	
                            </i>
      			            <div className="second">
           			            <div className="percent" >
        				            <div className="dot">
                                    </div>
        				            <svg>
          					            <circle cx="70" cy="70" r="70" className="gg"></circle>  
          					            <circle cx="70" cy="70" r="50" ></circle> 
          					            <circle cx="70" cy="70" r="70"></circle>    
        				            </svg>                
        				            <div className="number">
          					             <h2>38 <span>%</span></h2>
                  		            </div>
       				            </div>
      				            <div>
                                    <h6>	My card</h6>
      				                <img src={card}/>	
      				            </div>
      				            <div className="tr">	
      					            <div className="trans">	
      						            <h6>Transaction</h6>
      						            <p className="plus">	+</p>
      					            </div>
      					            <div className="trans">	
      						            <i className="fa fa-shopping-bag">	</i>
      						            <p>Bag</p>
      						            <p>	$500</p>
      					            </div>
      					            <div className="trans">	
      						            <i className="fa fa-shopping-bag">	</i>
      						            <p>Bag</p>
      						            <p>	$500</p>
      					            </div>
      					            <div className="trans">	
      						            <i className="fa fa-shopping-bag">	</i>
      						            <p>Bag</p>
      						            <p>	$500</p>
      					            </div>
      				            </div>
    			            </div>
                        </div>
    		    	</section>
  	            </div>	   
            </div>
                
            <section className="main mai" style={{width: '100%', borderRadius: '0px'}}>
                <i className="fas fa-chart-bar " style={{float: 'left'}}> </i>
                <i className="men" > 
                    <i className="fas fa-chart-bar menu "></i>
                    <img src={img6} style={{width: '9%'}} className="icon"/>  
                </i>
               
                <div >
                    <div className="hide" > 
                        <p >
                            <i className="fa fa-book one" onClick={toggleMenuo}></i>
                        </p>
                        <p >    
                            <i className="fa fa-stop two" onClick={toggleMenu}></i>
                        </p>
                    </div>
                </div>
                {
                
                isOpen==true?
                <>
                    <div className="first" style={{width: '100%'}}>
                    <div className="intro"> 
                        <div className="intro1">
                            <form className="search_bar"><i className="fa fa-search"> </i>  
                                <input type="text" placeholder ="Search" />
                            </form>
                            <p className="blueviolet">  Feedback</p>
                            <p className="blueviolet">  Contacts</p>
                            <p className="blueviolet">  Help</p>
                        </div>            
                    </div>
                    <div className="intro2">
                        <div className="gnum">
                            <p className="but" >  visitors <br/>10,320</p>
                            <p className="but ">customers <br/>4,320</p>
                            <p className="but3 "> ORDERS <br/> 2,980</p>
                        </div>
                    </div>
                   <div className="statistics">
                        <div className="sta"> 
                            <h5>  Statistics</h5> 
                            <div className="hover">Year ▾
                                <ul className="dropdown">
                                    <li className="list"><a href="#">2020</a></li>
                                    <li className="list"><a href="#">2021</a></li>
                                    <li className="list"><a href="#">2022</a></li>
                                    <li className="list"><a href="#">2023</a></li>
                                </ul> 
                            </div>
                        </div>
                        <div id="chart_div" >
                        </div>
                    </div>  
                    <div className="last">  
                        <div className="time">  
                            <div id="curve_chart" style={{height: '200px'}}>
                            </div>
                        </div>
                        <br/>  
                        <div className="details" >
                            <div className="lily">  
                                <img src={img6} style={{width: '10%'}} className="icon"/>    
                                <p> Lily Donovan<br/>      
                                    <span style={{color:'grey'}}>Business trainer</span>
                                </p>
                            </div>  
                            <p className="how"> How to properly manage your   personal budget
                            </p>
                            <div className="icon">
                                <i className="fa fa-play">  </i>
                                <p> Video</p>
                                <i className="fa fa-clock"> </i>
                                <p className="fc">   15mins</p> 
                                <i className="fa fa-star">  </i>
                                <p> 12 Likes</p>  
                            </div>
                            <div className="days">    
                                <p className="ago"> 5 days ago</p>
                                <p className="connect"> Connect 
                                    <i className="fa fa-arrow-left">  </i>
                                </p>  
                            </div>
                        </div>  
                    </div>  
                </div>
                <br/> 
                
                </>
                :
                <>
                <div className="sec" style={{width: '100%'}}>
                    <div className="second">
                        <div className="percent"style={{ width: '100%'}}>
                            <div className="dot"></div>
                            <svg style={{top:'-64px',position: 'absolulte'}}>
                                <circle cx="70" cy="70" r="70" className="gg"></circle>  
                                <circle cx="70" cy="70" r="50" ></circle> 
                                <circle cx="70" cy="70" r="70"></circle>    
                            </svg>                
                            <div className="number">
                                <h2>38 <span>%</span></h2>
                            </div>
                        </div>
                        <div>
                            <h6> My card</h6>
                            <img src={card}/>  
                        </div>
                        <div className="tr">  
                            <div className="trans"> 
                                <h6>Transaction</h6>
                                <p className="plus">  +</p>
                            </div>
                            <div className="trans"> 
                                <i className="fa fa-shopping-bag">  </i>
                                <p>Bag</p>
                                <p> $500</p>
                            </div>
                            <div className="trans"> 
                                <i className="fa fa-shopping-bag">  </i>
                                <p>Bag</p>
                                <p> $500</p>
                            </div>
                            <div className="trans"> 
                                <i className="fa fa-shopping-bag">  </i>
                                <p>Bag</p>
                                <p> $500</p>
                            </div>
                        </div>
                    </div>
                </div>
                </>}
                <div className='footer'>
                    <div className="home">
                        <i className="fas  fa-home foot1"></i>
                    </div>                                				        
                    <div className='pie'>
                        <i className="fas fa-pie-chart foot1"></i>
                    </div>                     
                    <div className='message'>
                        <i className="fas fa-message foot1"></i>
                    </div>
       				<div className='video'>
                        <i className="fas fa-video foot1"></i>
                    </div>      

                </div>
            </section>
        </div>
    );
}

export default Landing;
