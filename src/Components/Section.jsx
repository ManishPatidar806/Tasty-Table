import {assets} from "../assets/assets";
import "./front.css"
function Section(){
    function Menupage(){
        <a href="Menupage"></a>
    }
    return(
        <>


<nav className="navbar">
<div className="logo">
    <img src={assets.logo} alt="" />
</div>
<ul>
    <li className="item"><a href="#home">Home</a></li>
    <li className="item"><a href="#service-container">Services</a></li>
    <li className="item"><a href="#clients-section">Our clients</a></li>
    <li className="item"><a href="#contact">Contact us</a></li>
</ul>
</nav>

<div className="home">
<h1 className="h-primary">Welcome to our shop</h1>
<p>"Your culinary adventure begins here – where food is not just sustenance, but a celebration of life."</p>
<br/>
<p>"Join us for a culinary journey that combines tradition and innovation, creating<br/> unforgettable moments one bite at a time."</p>
<button className="btn">Order now</button>
</div>



<div className="service-container">
<br/><br/><br/><br/><br/>
<h1 className="h-primary center">Our Services</h1>
<div className="services">
    <div className="box" onClick={Menupage}>
        <img src={assets.Order_boy}alt=""/>
        <h2 className="h-secondary center">Food Ordering</h2>
        <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde commodi placeat
            nisi vitae dolore aspernatur soluta ut, mollitia laudantium, delectus asperiores! Cupiditate culpa
            libero veniam error.
            Minima voluptate asperiores magni explicabo aspernatur nostrum.</p>
    </div>

    <div className="box">
        <img src={assets.bulk_order} alt=""/>
        <h2 className="h-secondary center">Bulk Ordering</h2>
        <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde commodi placeat
            nisi vitae dolore aspernatur soluta ut, mollitia laudantium, delectus asperiores! Cupiditate culpa
            libero veniam error.
            Minima voluptate asperiores magni explicabo aspernatur nostrum.</p>
    </div>

    <div className="box">
        <img src={assets.pizza} alt=""/>
        <h2 className="h-secondary center">Special Offers<br/>Buy 1 get 1 Free</h2>
        <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde commodi placeat
            nisi vitae dolore aspernatur soluta ut, mollitia laudantium, delectus asperiores! Cupiditate culpa
            libero veniam error.
            Minima voluptate asperiores magni explicabo aspernatur nostrum.</p>
    </div>
</div>
<div className="services">
    <div className="box">
        <img src={assets.sahipaneer} alt=""/>
        <h2 className="h-secondary center">Food Catering</h2>
        <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde commodi placeat
            nisi vitae dolore aspernatur soluta ut, mollitia laudantium, delectus asperiores! Cupiditate culpa
            libero veniam error.
            Minima voluptate asperiores magni explicabo aspernatur nostrum.</p>
    </div>

    <div className="box">
        <img src={assets.Delivery_boy} alt=""/>
        <h2 className="h-secondary center">Home Delivery</h2>
        <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde commodi placeat
            nisi vitae dolore aspernatur soluta ut, mollitia laudantium, delectus asperiores! Cupiditate culpa
            libero veniam error.
            Minima voluptate asperiores magni explicabo aspernatur nostrum.</p>
    </div>

    <div className="box">
        <img src={assets.mobile} alt=""/>
        <h2 className="h-secondary center">Online Order</h2>
        <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde commodi placeat
            nisi vitae dolore aspernatur soluta ut, mollitia laudantium, delectus asperiores! Cupiditate culpa
            libero veniam error.
            Minima voluptate asperiores magni explicabo aspernatur nostrum.</p>
    </div>
</div>
</div>

<div className="clients-section">
<h1 className="h-primary center">Our Client</h1>
<div className="clients">
    <div className="client-item">
        <img src={assets.Royal} alt="Our Client"/>
    </div>
    <div className="client-item">
        <img src={assets.Grand} alt="Our Client"/>
    </div>
    <div className="client-item">
        <img src={assets.AlbanaianLuxury} alt="Our Client"/>
    </div>
    <div className="client-item">
        <img src={assets.Marshal} alt="Our Client"/>
    </div>
    <div className="client-item">
        <img src={assets.MildWest}alt="Our Client"/>
    </div>
    <div className="client-item">
        <img src={assets.luxary_golden}alt="Our Client"/>
    </div>
    <br/>
</div>
</div>

<div className="contact">
<h1 className="h-primary center">Contact us</h1>
<div className="contact-box">
    <form action="">
        <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Enter your name"/>
        </div>
        <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" name="name" id="email" placeholder="Enter your Email"/>
        </div>
        <div className="form-group">
            <label for="phone">Phone Number:</label>
            <input type="phone" name="name" id="phone" placeholder="Enter your Phone Number"/>
        </div>
        <div className="form-group">
            <label for="Message">Message:</label>
            <textarea name="Message" id="Message" cols="30" rows="10"></textarea>
        </div>
        <div className="form-group center">
            <button class="btn ">Submit</button>
        </div>
    </form>

</div>
</div> 
 </>
    );
}

export default Section;