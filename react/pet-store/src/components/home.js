import React from "react";
import Blob1 from "../images/blob1.svg"
import Puppies1 from "../images/puppies1.png"
import logo from '../images/logo.png';
import Dogs from "./dogs";
import { BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <div className="">
     
                <header>
                <nav>
                    <div className='logo'>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className='navLinks'>
                        
                        <Link to ="/" className='active'>
                        Home
                        </Link>
                        <a href="#About">About</a>
                        <a href="">Contact</a>
                        <Link to ="/dogs">
                        Dogs
                        </Link>
                        <a href="">Cats</a>
                        
                    </div>
                </nav>
                </header>

     

   </div>
           <div className="hero-section">
                <div className="hero-text">
                    <h1>
                    Welcome to Paws & Whiskers, Where Tails Wag and Hearts Purr!
                    </h1>
                    <p>
                        From cozy beds to gourmet treats, stylish accessories to interactive toys, we've curated everything your beloved pets need to live their best lives.
                    </p>
                </div>
                <div className="hero-img">
                    <img src={Puppies1} />
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="60%" id="blobSvg">
                        <path id="blob" fill="#A74B08">

                        <animate attributeName="d" dur="8000ms" repeatCount="indefinite"
                
                values="
                M431,321Q363,392,285.5,412.5Q208,433,120,394Q32,355,61.5,264Q91,173,148,113.5Q205,54,303.5,56.5Q402,59,450.5,154.5Q499,250,431,321Z;

                M389,301Q332,352,270,392.5Q208,433,131.5,388.5Q55,344,62.5,253.5Q70,163,139,113.5Q208,64,306.5,60Q405,56,425.5,153Q446,250,389,301Z;
                
                M398,321Q363,392,287.5,403.5Q212,415,120.5,386Q29,357,51.5,261Q74,165,144.5,130Q215,95,309.5,76Q404,57,418.5,153.5Q433,250,398,321Z;
                
                M384.5,331Q379,412,295.5,415Q212,418,161.5,367.5Q111,317,103.5,246.5Q96,176,150.5,113.5Q205,51,287,76Q369,101,379.5,175.5Q390,250,384.5,331Z;
                
                M389,301Q332,352,270,392.5Q208,433,131.5,388.5Q55,344,62.5,253.5Q70,163,139,113.5Q208,64,306.5,60Q405,56,425.5,153Q446,250,389,301Z;
                
                M431,321Q363,392,285.5,412.5Q208,433,120,394Q32,355,61.5,264Q91,173,148,113.5Q205,54,303.5,56.5Q402,59,450.5,154.5Q499,250,431,321Z">

                </animate>
                </path>
                </svg>
                </div>

           </div>

           <div className="shop">
                <h1 className="headings">Shop by Category</h1>
                <div className="categories">
                    <div>
                        <img src={require("../images/puppies2.png")}/>
                        <p>Playful puppies</p>
                    </div>
                    <div>
                        <img src={require("../images/puppies2.png")}/>
                        <p>Playful puppies</p>
                    </div>
                </div>
                


           </div>

           <div id="About">
                <h1 className="headings">About Us</h1>
                <div className="AboutTxt">
                <p>
                Established in 2023, we are a store owned by a cute little girl dedicated to providing you and your pet quality materials from toys, to food.
                <br/><br/>

Love their products Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et praesentium voluptatem dolore, iste tempore odit sapiente eum, veritatis iusto necessitatibus est numquam facere ipsam molestias itaque esse officiis nam!
                </p>
                <div>
                <img src={require("../images/dogHouse.png")}/>
                </div>
                </div>
           </div>
        </div>
    )
}

export default Home;