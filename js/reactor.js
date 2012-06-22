/// <reference path="scriptaculous.js" />
/// <reference path="dragdrop.js" />
/// <reference path="effects.js" />

// Using Intellisense For The Above
// http: //msdn.microsoft.com/en-us/library/bb385682.aspx

////////// AUTHOR & APPLICATION INFORMATION ////////////////////////////////////////
//
//   Author: Chris Sergent
//   Date:   June 22, 2012
//   Application: template
//
////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////
//
//              DECLARE AND SET VARIABLES BEGIN
//
////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////
//
//              SET UP DOJO BEGIN
//
////////////////////////////////////////////////////////////////////////////////////
/*
Dojo Framework Require Begin
*/

dojo.require("dojo.parser");
dojo.require("dojo.number");

/*

Parsing dojo.number include four functions
- dojo.number.format() - formats numeric values
- dojo.number.parse() - converts a string to a number
- dojo.number.regexp() - returns a regular expression
- dojo.number.round() - rounds numbers
    
*/

dojo.require("dojo.data.ItemFileReadStore");
dojo.require("dojo.fx");

dojo.require("dijit.dijit");
dojo.require("dijit.form.Button");
dojo.require("dijit.Toolbar");
dojo.require("dijit.TitlePane");
dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.layout.ContentPane");
dojo.require("dijit.Editor");
dojo.require("dijit.layout.TabContainer");

dojo.require("dojox.grid.DataGrid");

/*
Dojo Framework Require End
*/

//-----------------------------------------------------------
// REST API - Making Tools Available
//-----------------------------------------------------------

// ESRI dojo objects
// allows you to work with the dynamic map service resource exposed by the ArcGIS REST API.
// Reference: http://help.arcgis.com/en/webapi/javascript/arcgis/help/jsapi/arcgisdynamicmapservicelayer.htm#
dojo.require("esri.layers.agsdynamic"); // dynamic map services generate images on the fly.
dojo.require("esri.layers.agstiled"); // cached map service.


// esri.Map class created a container and required DOM structure for adding
// -layers, graphics, info_window, and other navigation controls
dojo.require("esri.map");
dojo.require("esri.toolbars.navigation");
dojo.require("esri.toolbars.draw");


// ESRI dojo tasks
//  esri.tasks.geometry class represents a geometry service exposed by the ArcGIS REST API.
// Operations include - project, simplify, buffer, and relationships
// Reference: http://help.arcgis.com/en/webapi/javascript/arcgis/help/jsapi/geometry.htm#
dojo.require("esri.tasks.geometry");

// Represents a geocode service resource exposed by the ArcGIS REST API.
// It is used to generate candidates for an address.
// It is also used to find an address for a given location.
// Reference: http://help.arcgis.com/en/webapi/javascript/arcgis/help/jsapi/locator.htm#
dojo.require("esri.tasks.locator");

// ESRI dojo task for querying against the ArcGIS REST API.
// Reference: http://help.arcgis.com/en/webapi/javascript/arcgis/help/jsapi/querytask.htm#
dojo.require("esri.tasks.query");


// ESRI dojo task for identifying against the ArcGIS REST API.
dojo.require("esri.tasks.identify");


// ESRI dojo graphics utility for displaying features in a single layer using the ArcGIS REST API.
// Reference:http://help.arcgis.com/en/webapi/javascript/arcgis/help/jsapi/featurelayer.htm#
dojo.require("esri.layers.FeatureLayer");



/*
ESRI Dojo Objects End
*/


////////////////////////////////////////////////////////////////////////////////////
//
//              SET UP DOJO END
//
////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////
//
//              DECLARE AND SET VARIABLES END
//
////////////////////////////////////////////////////////////////////////////////////

