<%-- 
    Document   : thanks
    Created on : July 1, 2015, 1:25:02 PM
    Author     : sheldonsimmons
--%>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
   <font color="RED"> <title>Thank You</title>
    <link rel="stylesheet" href="styles/main.css" type="text/css"/>    
</head>
<img src="daycare.jpg" alt="KIDS" width="720" height="355">
	
<body>
    <h1>Thank you <span>${user.firstName}!</span><br>
        <br>
        
        
   We will contact you shortly. </h1>

    <%--
    <label>Email:</label>
    <span>${user.email}</span><br>
    --%>
    
    
    
    <%--
    <label>Phone Number:</label>
    <span>${user.phoneNumber}</span><br>
--%>
    <br>
    <br>
        
    <font color="#0481b1"><h2><p> Refer a friend and receive free child care for a week!</p></h2></font>
        

    <form action="" method="post">
        <input type="hidden" name="action" value="join">
        <input type="submit" value="Return">
    </form>

</body>
</html>