package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\"\n");
      out.write("    \"http://www.w3.org/TR/html4/strict.dtd\"\n");
      out.write("    >\n");
      out.write("<html lang=\"en\">\n");
      out.write("<head>\n");
      out.write("    <title>Kids Corner - Home</title>\n");
      out.write("\t<!-- Start WOWSlider.com HEAD section -->\n");
      out.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"engine1/style.css\" />\n");
      out.write("<script type=\"text/javascript\" src=\"engine1/jquery.js\"></script>\n");
      out.write("<!-- End WOWSlider.com HEAD section -->\n");
      out.write("</head>\n");
      out.write("<style type=\"text/css\">\n");
      out.write("    #wrapper {\n");
      out.write("        width:450px;\n");
      out.write("        margin:0 auto;\n");
      out.write("        font-family:Verdana, sans-serif;\n");
      out.write("    }\n");
      out.write("    legend {\n");
      out.write("        color:#0481b1;\n");
      out.write("        font-size:16px;\n");
      out.write("        padding:0 10px;\n");
      out.write("        background:#fff;\n");
      out.write("        -moz-border-radius:4px;\n");
      out.write("        box-shadow: 0 1px 5px rgba(4, 129, 177, 0.5);\n");
      out.write("        padding:5px 10px;\n");
      out.write("        text-transform:uppercase;\n");
      out.write("        font-family:Helvetica, sans-serif;\n");
      out.write("        font-weight:bold;\n");
      out.write("    }\n");
      out.write("    fieldset {\n");
      out.write("        border-radius:4px;\n");
      out.write("        background: #fff; \n");
      out.write("        background: -moz-linear-gradient(#fff, #f9fdff);\n");
      out.write("        background: -o-linear-gradient(#fff, #f9fdff);\n");
      out.write("        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fff), to(#f9fdff)); /\n");
      out.write("        background: -webkit-linear-gradient(#fff, #f9fdff);\n");
      out.write("        padding:20px;\n");
      out.write("        border-color:rgba(4, 129, 177, 0.4);\n");
      out.write("    }\n");
      out.write("    input,\n");
      out.write("    textarea {\n");
      out.write("        color: #373737;\n");
      out.write("        background: #fff;\n");
      out.write("        border: 1px solid #CCCCCC;\n");
      out.write("        color: #aaa;\n");
      out.write("        font-size: 14px;\n");
      out.write("        line-height: 1.2em;\n");
      out.write("        margin-bottom:15px;\n");
      out.write("\n");
      out.write("        -moz-border-radius:4px;\n");
      out.write("        -webkit-border-radius:4px;\n");
      out.write("        border-radius:4px;\n");
      out.write("        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.2);\n");
      out.write("    }\n");
      out.write("    input[type=\"text\"],\n");
      out.write("    input[type=\"password\"]{\n");
      out.write("        padding: 8px 6px;\n");
      out.write("        height: 22px;\n");
      out.write("        width:280px;\n");
      out.write("    }\n");
      out.write("    input[type=\"text\"]:focus,\n");
      out.write("    input[type=\"password\"]:focus {\n");
      out.write("        background:#f5fcfe;\n");
      out.write("        text-indent: 0;\n");
      out.write("        z-index: 1;\n");
      out.write("        color: #373737;\n");
      out.write("        -webkit-transition-duration: 400ms;\n");
      out.write("        -webkit-transition-property: width, background;\n");
      out.write("        -webkit-transition-timing-function: ease;\n");
      out.write("        -moz-transition-duration: 400ms;\n");
      out.write("        -moz-transition-property: width, background;\n");
      out.write("        -moz-transition-timing-function: ease;\n");
      out.write("        -o-transition-duration: 400ms;\n");
      out.write("        -o-transition-property: width, background;\n");
      out.write("        -o-transition-timing-function: ease;\n");
      out.write("        width: 380px;\n");
      out.write("        \n");
      out.write("        border-color:#ccc;\n");
      out.write("        box-shadow:0 0 5px rgba(4, 129, 177, 0.5);\n");
      out.write("        opacity:0.6;\n");
      out.write("    }\n");
      out.write("    input[type=\"submit\"]{\n");
      out.write("        background: #222;\n");
      out.write("        border: none;\n");
      out.write("        text-shadow: 0 -1px 0 rgba(0,0,0,0.3);\n");
      out.write("        text-transform:uppercase;\n");
      out.write("        color: #eee;\n");
      out.write("        cursor: pointer;\n");
      out.write("        font-size: 15px;\n");
      out.write("        margin: 5px 0;\n");
      out.write("        padding: 5px 22px;\n");
      out.write("        -moz-border-radius: 4px;\n");
      out.write("        border-radius: 4px;\n");
      out.write("        -webkit-border-radius:4px;\n");
      out.write("        -webkit-box-shadow: 0px 1px 2px rgba(0,0,0,0.3);\n");
      out.write("        -moz-box-shadow: 0px 1px 2px rgba(0,0,0,0.3);\n");
      out.write("        box-shadow: 0px 1px 2px rgba(0,0,0,0.3);\n");
      out.write("    }\n");
      out.write("    textarea {\n");
      out.write("        padding:3px;\n");
      out.write("        width:96%;\n");
      out.write("        height:100px;\n");
      out.write("    }\n");
      out.write("    textarea:focus {\n");
      out.write("        background:#ebf8fd;\n");
      out.write("        text-indent: 0;\n");
      out.write("        z-index: 1;\n");
      out.write("        color: #373737;\n");
      out.write("        opacity:0.6;\n");
      out.write("        box-shadow:0 0 5px rgba(4, 129, 177, 0.5);\n");
      out.write("        border-color:#ccc;\n");
      out.write("    }\n");
      out.write("    .small {\n");
      out.write("        line-height:14px;\n");
      out.write("        font-size:12px;\n");
      out.write("        color:#999898;\n");
      out.write("        margin-bottom:3px;\n");
      out.write("        \n");
      out.write("        <img src=\"kids.jpg\" \n");
      out.write("   style=\"position:fixed; right:0px; bottom:0px; width:50px; height:50px; border:none;\"\n");
      out.write("   alt=\"fixed position Willmaster logo\"\n");
      out.write("   title=\"Willmaster logo in fixed position\" />\n");
      out.write("\n");
      out.write("\n");
      out.write("    }\n");
      out.write("</style>\n");
      out.write("\n");
      out.write("\n");
      out.write("<body>\n");
      out.write("    <!-- Start WOWSlider.com BODY section -->\n");
      out.write("<div id=\"wowslider-container1\">\n");
      out.write("<div class=\"ws_images\"><ul>\n");
      out.write("\t\t<li><img src=\"data1/images/daycare.jpg\" alt=\"Welcome\" title=\"Welcome\" id=\"wows1_0\"/></li>\n");
      out.write("\t\t<li><img src=\"data1/images/paint.jpg\" alt=\"to\" title=\"to\" id=\"wows1_1\"/></li>\n");
      out.write("\t\t<li><a href=\"http://wowslider.com/vi\"><img src=\"data1/images/child.jpg\" alt=\"css slider\" title=\"Kid's\" id=\"wows1_2\"/></a></li>\n");
      out.write("\t\t<li><img src=\"data1/images/kids.jpg\" alt=\"Corner\" title=\"Corner\" id=\"wows1_3\"/></li>\n");
      out.write("\t</ul></div>\n");
      out.write("\t<div class=\"ws_bullets\"><div>\n");
      out.write("\t\t<a href=\"#\" title=\"Welcome\"><span><img src=\"data1/tooltips/daycare.jpg\" alt=\"Welcome\"/>1</span></a>\n");
      out.write("\t\t<a href=\"#\" title=\"to\"><span><img src=\"data1/tooltips/paint.jpg\" alt=\"to\"/>2</span></a>\n");
      out.write("\t\t<a href=\"#\" title=\"Kid's\"><span><img src=\"data1/tooltips/child.jpg\" alt=\"Kid's\"/>3</span></a>\n");
      out.write("\t\t<a href=\"#\" title=\"Corner\"><span><img src=\"data1/tooltips/kids.jpg\" alt=\"Corner\"/>4</span></a>\n");
      out.write("\t</div></div><div class=\"ws_script\" style=\"position:absolute;left:-99%\"><a href=\"http://wowslider.com\">responsive slider</a> by WOWSlider.com v8.5m</div>\n");
      out.write("<div class=\"ws_shadow\"></div>\n");
      out.write("</div>\t\n");
      out.write("<script type=\"text/javascript\" src=\"engine1/wowslider.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"engine1/script.js\"></script>\n");
      out.write("<!-- End WOWSlider.com BODY section -->\n");
      out.write("     <div id=\"wrapper\">\n");
      out.write("    <font color=\"#0481b1\"><h1>Welcome to Kid's Circle</h1></font>\n");
      out.write("    <p>We appreciate your interest in Kid's Circle. Please Complete contact information to start pre-enrollment.</p>\n");
      out.write("    <font color='red' ><p><i>");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${message}", java.lang.String.class, (PageContext)_jspx_page_context, null));
      out.write("</i></p></font>\n");
      out.write("    <form action=\"registerMe\" method=\"post\">\n");
      out.write("        <input type=\"hidden\" style=\"text-align: right\" name=\"action\" value=\"add\">        \n");
      out.write("        <fieldset>\n");
      out.write("                <legend>Register Form</legend>\n");
      out.write("                <div>\n");
      out.write("<label class=\"pad_top\">Email:</label>\n");
      out.write("        <input type=\"email\" style=\"text-align: right\" name=\"email\" value=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${user.email}", java.lang.String.class, (PageContext)_jspx_page_context, null));
      out.write("\" \n");
      out.write("               required><br>\n");
      out.write("        </div>\n");
      out.write("               \n");
      out.write("               <div>\n");
      out.write("        <label class=\"pad_top\">First Name:</label>\n");
      out.write("        <input type=\"text\" name=\"firstname\" value=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${user.firstName}", java.lang.String.class, (PageContext)_jspx_page_context, null));
      out.write("\" \n");
      out.write("               required><br>\n");
      out.write("               </div>\n");
      out.write("               <div>\n");
      out.write("        <label class=\"pad_top\">Last Name:</label>\n");
      out.write("        <input type=\"text\" name=\"lastname\" value=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${user.lastName}", java.lang.String.class, (PageContext)_jspx_page_context, null));
      out.write("\"  \n");
      out.write("               required><br>\n");
      out.write("               </div>\n");
      out.write("               <div>\n");
      out.write("        <label class=\"pad_top\">Phone Number:</label>\n");
      out.write("        \n");
      out.write("                        <br>\n");
      out.write("        <input type=\"text\" name=\"phonenumber\" value=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${user.phoneNumber}", java.lang.String.class, (PageContext)_jspx_page_context, null));
      out.write("\"  \n");
      out.write("               required><br>    \n");
      out.write("        \n");
      out.write("               </div>\n");
      out.write("               <div>\n");
      out.write("                    <div class=\"small\">Leave a message for the Director or ask a question.</div>\n");
      out.write("                    <textarea name=\"message1\" placeholder=\"Message\"></textarea>\n");
      out.write("                </div> \n");
      out.write("        <label>&nbsp;</label>\n");
      out.write("        <input type=\"submit\" value=\"Submit\" class=\"margin_left\">\n");
      out.write("        </fieldset>\n");
      out.write("    </form>\n");
      out.write("</body>\n");
      out.write("</html>");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
