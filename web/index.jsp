<%-- 
    Document   : Registration
    Created on : July 1, 2015, 12:14:54 PM
    Author     : sheldonsimmons
--%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
    "http://www.w3.org/TR/html4/strict.dtd"
    >
<html lang="en">
<head>
    <title>Kids Corner - Home</title>
	<!-- Start WOWSlider.com HEAD section -->
<link rel="stylesheet" type="text/css" href="engine1/style.css" />
<script type="text/javascript" src="engine1/jquery.js"></script>
<!-- End WOWSlider.com HEAD section -->
</head>
<style type="text/css">
    #wrapper {
        width:450px;
        margin:0 auto;
        font-family:Verdana, sans-serif;
    }
    legend {
        color:#0481b1;
        font-size:16px;
        padding:0 10px;
        background:#fff;
        -moz-border-radius:4px;
        box-shadow: 0 1px 5px rgba(4, 129, 177, 0.5);
        padding:5px 10px;
        text-transform:uppercase;
        font-family:Helvetica, sans-serif;
        font-weight:bold;
    }
    fieldset {
        border-radius:4px;
        background: #fff; 
        background: -moz-linear-gradient(#fff, #f9fdff);
        background: -o-linear-gradient(#fff, #f9fdff);
        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fff), to(#f9fdff)); /
        background: -webkit-linear-gradient(#fff, #f9fdff);
        padding:20px;
        border-color:rgba(4, 129, 177, 0.4);
    }
    input,
    textarea {
        color: #373737;
        background: #fff;
        border: 1px solid #CCCCCC;
        color: #aaa;
        font-size: 14px;
        line-height: 1.2em;
        margin-bottom:15px;

        -moz-border-radius:4px;
        -webkit-border-radius:4px;
        border-radius:4px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    input[type="text"],
    input[type="password"]{
        padding: 8px 6px;
        height: 22px;
        width:280px;
    }
    input[type="text"]:focus,
    input[type="password"]:focus {
        background:#f5fcfe;
        text-indent: 0;
        z-index: 1;
        color: #373737;
        -webkit-transition-duration: 400ms;
        -webkit-transition-property: width, background;
        -webkit-transition-timing-function: ease;
        -moz-transition-duration: 400ms;
        -moz-transition-property: width, background;
        -moz-transition-timing-function: ease;
        -o-transition-duration: 400ms;
        -o-transition-property: width, background;
        -o-transition-timing-function: ease;
        width: 380px;
        
        border-color:#ccc;
        box-shadow:0 0 5px rgba(4, 129, 177, 0.5);
        opacity:0.6;
    }
    input[type="submit"]{
        background: #222;
        border: none;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.3);
        text-transform:uppercase;
        color: #eee;
        cursor: pointer;
        font-size: 15px;
        margin: 5px 0;
        padding: 5px 22px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        -webkit-border-radius:4px;
        -webkit-box-shadow: 0px 1px 2px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 1px 2px rgba(0,0,0,0.3);
        box-shadow: 0px 1px 2px rgba(0,0,0,0.3);
    }
    textarea {
        padding:3px;
        width:96%;
        height:100px;
    }
    textarea:focus {
        background:#ebf8fd;
        text-indent: 0;
        z-index: 1;
        color: #373737;
        opacity:0.6;
        box-shadow:0 0 5px rgba(4, 129, 177, 0.5);
        border-color:#ccc;
    }
    .small {
        line-height:14px;
        font-size:12px;
        color:#999898;
        margin-bottom:3px;
        
        <img src="kids.jpg" 
   style="position:fixed; right:0px; bottom:0px; width:50px; height:50px; border:none;"
   alt="fixed position Willmaster logo"
   title="Willmaster logo in fixed position" />


    }
</style>


<body>
    <!-- Start WOWSlider.com BODY section -->
<div id="wowslider-container1">
<div class="ws_images"><ul>
		<li><img src="data1/images/daycare.jpg" alt="Welcome" title="Welcome" id="wows1_0"/></li>
		<li><img src="data1/images/paint.jpg" alt="to" title="to" id="wows1_1"/></li>
		<li><a href="http://wowslider.com/vi"><img src="data1/images/child.jpg" alt="css slider" title="Kid's" id="wows1_2"/></a></li>
		<li><img src="data1/images/kids.jpg" alt="Corner" title="Corner" id="wows1_3"/></li>
	</ul></div>
	<div class="ws_bullets"><div>
		<a href="#" title="Welcome"><span><img src="data1/tooltips/daycare.jpg" alt="Welcome"/>1</span></a>
		<a href="#" title="to"><span><img src="data1/tooltips/paint.jpg" alt="to"/>2</span></a>
		<a href="#" title="Kid's"><span><img src="data1/tooltips/child.jpg" alt="Kid's"/>3</span></a>
		<a href="#" title="Corner"><span><img src="data1/tooltips/kids.jpg" alt="Corner"/>4</span></a>
	</div></div><div class="ws_script" style="position:absolute;left:-99%"><a href="http://wowslider.com">responsive slider</a> by WOWSlider.com v8.5m</div>
<div class="ws_shadow"></div>
</div>	
<script type="text/javascript" src="engine1/wowslider.js"></script>
<script type="text/javascript" src="engine1/script.js"></script>
<!-- End WOWSlider.com BODY section -->
     <div id="wrapper">
    <font color="#0481b1"><h1>Welcome to Kid's Corner</h1></font>
    <p>We appreciate your interest in Kid's Corner. Please Complete contact information to start pre-enrollment.</p>
    <font color='red' ><p><i>${message}</i></p></font>
    <form action="registerMe" method="post">
        <input type="hidden" style="text-align: right" name="action" value="add">        
        <fieldset>
                <legend>Registration Form</legend>
                <div>
<label class="pad_top">Email:</label>
        <input type="email" style="text-align: right" name="email" value="${user.email}" 
               required><br>
        </div>
               
               <div>
        <label class="pad_top">First Name:</label>
        <input type="text" name="firstname" value="${user.firstName}" 
               required><br>
               </div>
               <div>
        <label class="pad_top">Last Name:</label>
        <input type="text" name="lastname" value="${user.lastName}"  
               required><br>
               </div>
               <div>
        <label class="pad_top">Phone Number:</label>
        
                        <br>
        <input type="text" name="phonenumber" value="${user.phoneNumber}"  
               required><br>    
        
               </div>
               <div>
                    <div class="small">Leave a message for the Director or ask a question.</div>
                    <textarea name="message1" placeholder="Message"></textarea>
                </div> 
        <label>&nbsp;</label>
        <input type="submit" value="Submit" class="margin_left">
        </fieldset>
    </form>
</body>
</html>