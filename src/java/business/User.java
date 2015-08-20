/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package business;

import java.io.Serializable;

public class User implements Serializable {

    private String email;
    private String firstname;
    private String lastname;
    private String phonenumber;
    private String message1;

    public String getMessage1() {
        return message1;
    }

    public void setMessage1(String message1) {
        this.message1 = message1;
    }

    public String getPhoneNumber() {
        return phonenumber;
    }

    public void setPhoneNumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public User() {
        email = "";
        firstname = "";
        lastname = "";
        phonenumber="";
        message1="";
    }

    public User(String firstname, String lastname, String email, String phonenumber, String message1) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phonenumber = phonenumber;
        this.message1 = message1;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getFirstName() {
        return firstname;
    }

    public void setFirstName(String firstname) {
        this.firstname = firstname;
    }

    public String getLastName() {
        return lastname;
    }

    public void setLastName(String lastname) {
        this.lastname = lastname;
    }
}