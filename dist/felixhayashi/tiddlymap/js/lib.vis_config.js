/*\

title: $:/plugins/felixhayashi/tiddlymap/js/config/vis
type: application/javascript
module-type: library

@preserve

\*/
"use strict";module.exports={locale:"en_EN",clickToUse:false,autoResize:false,height:"100%",width:"100%",configure:{enabled:false},interaction:{dragNodes:true,dragView:true,hideEdgesOnDrag:false,hideNodesOnDrag:false,hover:true,navigationButtons:true,multiselect:true,selectable:true,selectConnectedEdges:true,tooltipDelay:600,zoomView:false,keyboard:{enabled:false,speed:{x:10,y:10,zoom:.02},bindToWindow:false}},manipulation:{initiallyActive:true},nodes:{shape:"box",shadow:{enabled:false},color:{border:"#2B7CE9",background:"#97C2FC"}},edges:{smooth:{enabled:true},color:{color:"#848484",inherit:false},arrows:{to:{enabled:true}}},physics:{forceAtlas2Based:{gravitationalConstant:-300,springLength:0,springConstant:.2,centralGravity:.015,damping:.4},solver:"forceAtlas2Based",stabilization:{enabled:true,iterations:1e3,updateInterval:10,onlyDynamicEdges:false,fit:false}}};