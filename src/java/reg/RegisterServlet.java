/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reg;

import business.User;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;


import data.UserDB;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.mail.MessagingException;
import util.MailGmail;

public class RegisterServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
        String url = "/index.jsp";
        
        // get current action
        String action = request.getParameter("action");
        if (action == null) {
            action = "join";  // default action
        }

        // perform action and set URL to appropriate page
        if (action.equals("join")) {
            url = "/index.jsp";    // the "join" page
        } 
        else if (action.equals("add")) {
            // get parameters from the request
            String firstName = request.getParameter("firstname");
            String lastName = request.getParameter("lastname");
            String email = request.getParameter("email");
            String phoneNumber = request.getParameter("phonenumber");
            String message1 = request.getParameter("message1");

            // store data in User object
            User user = new User(firstName, lastName, email, phoneNumber, message1);

            // validate the parameters
            String message;
            if (UserDB.emailExists(user.getEmail())) {
                message = "This email address already exists.<br>" +
                          "Please enter another email address.";
                url = "/index.jsp";
            }
            else {
                message = "";
                url = "/thanks.jsp";
                UserDB.insert(user);
            }
            request.setAttribute("user", user);
            request.setAttribute("message", message);
            
            
        }
        
         String email = "kidscornerreg@gmail.com";
        String firstName = request.getParameter("firstname");
        String lastName = request.getParameter("lastname");
        //String email = request.getParameter("email");
        String phoneNumber = request.getParameter("phonenumber");
        String message1 = request.getParameter("message1");

        String to = email;
        String from = email;
        String subject = "New Preenrollment";
        String body = "New Pre-enrollment\n " + firstName + "\n"
                
                 + lastName
                + "\n"
                
                + phoneNumber
                + "\n"
                + message1;

        boolean isBodyHTML = false;
    
        try {
            MailGmail.sendMail(to, from, subject, body, isBodyHTML);
        } catch (MessagingException e) {
            String errorMessage
                    = "ERROR: Unable to send email. "
                     + e.getMessage();
            request.setAttribute("errorMessage", errorMessage);
            this.log(
                    "Unable to send email. \n"
                    + "Here is the email you tried to send: \n"
                    + "=====================================\n"
                    + "TO: " + email + "\n"
                    + "FROM: " + from + "\n"
                    + "SUBJECT: " + subject + "\n"
                    + "\n"
                    + body + "\n\n");
}
        getServletContext()
                .getRequestDispatcher(url)
                .forward(request, response);
    
           
    }
}