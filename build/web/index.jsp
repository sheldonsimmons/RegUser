<%-- 
    Document   : Registration
    Created on : July 1, 2015, 12:14:54 PM
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
    <title>KID CIRCLE SIGN UP</title>
    <link rel="stylesheet" href="styles/main.css" type="text/css"/>
</head>
<body>
    <font color="green"><h1>Welcome to Kid's Circle</h1></font>
    <p>We appreciate your interest in Kid's Circle. Please Complete contact information to start pre-enrollment.</p>
    <font color='red' ><p><i>${message}</i></p></font>
    <form action="registerMe" method="post">
        <input type="hidden" style="text-align: right" name="action" value="add">        
        <label class="pad_top">Email:</label>
        <input type="email" style="text-align: right" name="email" value="${user.email}" 
               required><br>
        <label class="pad_top">First Name:</label>
        <input type="text" name="firstname" value="${user.firstName}" 
               required><br>
        <label class="pad_top">Last Name:</label>
        <input type="text" name="lastname" value="${user.lastName}"  
               required><br>     
        <label class="pad_top">Phone Number:</label>
                        <br>
        <input type="text" name="phonenumber" value="${user.phoneNumber}"  
               required><br>    
        
        
        <label>&nbsp;</label>
        <input type="submit" value="Join Now" class="margin_left">
    </form>
</body>
</html>