<%@ Page Language="VB" AutoEventWireup="false" CodeFile="default.aspx.vb" Inherits="_default" Theme="gis" StylesheetTheme="gis" %>
<!DOCTYPE html>
<html lang=en>
    <head id="headSection" runat="server">
        <meta charset=utf-8>

        <title>GIS Template</title>

        <link rel="SHORTCUT ICON" href="assets/icons/globe.ico">
        <!--The viewport meta tag is used to improve the presentation and behavior of the samples 
            on iOS devices-->
        <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no"/>

        <!-- Rico Stylesheets -->
        <link rel="Stylesheet" href="css/min.rico.css?v=1.0">

        <!-- Dojo Stylesheets -->
        <link rel="stylesheet" type="text/css" href="http://serverapi.arcgisonline.com/jsapi/arcgis/2.8/js/dojo/dojox/grid/resources/Grid.css">
        <link rel="stylesheet" type="text/css" href="http://serverapi.arcgisonline.com/jsapi/arcgis/2.8/js/dojo/dojox/grid/resources/soriaGrid.css">

        <!--[if lt IE 9]>
            <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js">

            </script>
        <![endif]-->
    </head>
<body class="soria">
    <form id="frmMap" runat="server">
        <!-- Script Manager Section Begin -->
        <asp:ScriptManager ID="gisScriptManager" runat="server">
            
        </asp:ScriptManager>
        <!-- Script Manager Section End -->
    
    </form>
    
    <!-- Script Post Load Begin -->

    <script type="text/javascript">
        dojoConfig = {
            isDebug: true,
            baseUrl: "./",
            parseOnLoad: true,
            modulePaths: { "dijits": "./dijits" }
        };
    </script>

    <!-- Active JavaScript API is 2.8 -->

    <!-- By adding the reference to the ESRI JSAPI, it gives us access to the Dojo Framework and ESRI's Dijits. -->
    <!-- WARNING: You will need to update this reference if you use a different version of the ESRI JSAPI. -->
    <!-- ESRI JavaScript API 2.8 - April 5, 2012 -->
    <script src="http://serverapi.arcgisonline.com/jsapi/arcgis/?v=2.8">
    
    </script>

        <!-- Importing json.js for JSON functionality. -->
    <script src="js/json.js">
       
    </script>

    <!-- Google Cdn's -->
    <!-- https://developers.google.com/speed/libraries/devguide -->

    <!-- YUI Compressor -->
    <!-- http://developer.yahoo.com/yui/compressor/ -->

    <!-- Prototype 1.7 -->
    <!-- Library Source: http://prototypejs.org/ -->
    <!-- Use Prototype to handle cross-browser events, manipulate data functions,
        handle AJAX and dynamic data. If you want concise straight forward
        solutions, use Prototype 
    -->
    <script src="js/prototype.js">
    
    </script>

    <!-- Scriptaculous 1.9.0 -->
    <!-- Library Source: http://script.aculo.us/ --> 
    <!-- Scriptaculous is your effects library. It also dependson on Prototype,
        so if you want scriptaculous effects, include the prototype.js file
        displayed above. 
    -->
    <script src="js/scriptaculous.js">
    
    </script>

    <!-- Rico 2.1 -->
    <!-- Library Source: http://sourceforge.net/projects/openrico/ -->
    <!-- Rico is library of pre-built styles and animation components.
        There is limited information on this, so if you plan on using 
        Ricos, prepare to troubleshoot it yourself. However, it's
        minimal coding to integrate into you application and there
        is a version 3 that should be out, but activity is low.
    -->
    <script src="js/rico.js">
    
    </script>

    <!-- Load Rico Corner Rounding -->
    <script type="text/javascript">
        Rico.loadModule('Corner');
    </script>

    <!-- Page Initialization -->
    <script src="js/reactor.js">
    
    </script>

    <!-- Script Post Load End -->
</body>
</html>
