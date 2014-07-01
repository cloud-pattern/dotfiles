//define vars
var monitor_Air = "1366x768";
var sizeX = 1366;
var sizeY = 768;

//misc config
S.cfga({
  "defaultToCurrentScreen" : true,
  "secondsBetweenRepeat" : 0.01,
  "checkDefaultsOnLoad" : true,
  "focusCheckWidthMax" : 3000,
  "orderScreensLeftToRight" : true
});

//bindings + operations
S.bnda({
  //RESIZE ANCHOR TOP LEFT - CTRL
  "l:ctrl" : S.op("resize", { "width" : "+3.5%", "height" : "+0" }),
  "h:ctrl" : S.op("resize", { "width" : "-3.5%", "height" : "+0" }),
  "k:ctrl" : S.op("resize", { "width" : "+0", "height" : "-3.5%" }),
  "j:ctrl" : S.op("resize", { "width" : "+0", "height" : "+3.5%" }),
  //RESIZE ANCHOR BOTTOM RIGHT - ALT
  "l:alt" : S.op("resize", { "width" : "-3.5%", "height" : "+0", "anchor" : "bottom-right" }),
  "h:alt" : S.op("resize", { "width" : "+3.5%", "height" : "+0", "anchor" : "bottom-right" }),
  "k:alt" : S.op("resize", { "width" : "+0", "height" : "+3.5%", "anchor" : "bottom-right" }),
  "j:alt" : S.op("resize", { "width" : "+0", "height" : "-3.5%", "anchor" : "bottom-right" }),
  //NUDGE - CTRL+ALT
  "l:ctrl;alt" : S.op("nudge", { "x" : "+2.3%", "y" : "+0" }),
  "h:ctrl;alt" : S.op("nudge", { "x" : "-2.3%", "y" : "+0" }),
  "k:ctrl;alt" : S.op("nudge", { "x" : "+0", "y" : "-1.9%" }),
  "j:ctrl;alt" : S.op("nudge", { "x" : "+0", "y" : "+1.9%" }),
  //RESIZE CENTERED - CTRL+ALT
  //{i},{o},{m}
  //EDGE TO EDGE - ALT+CMD
  //lhkj
  //PUSH - CTRL+ALT+CMD
  "l:ctrl;alt;cmd" : S.op("push", { "direction" : "right" }),
  "h:ctrl;alt;cmd" : S.op("push", { "direction" : "left" }),
  "k:ctrl;alt;cmd" : S.op("push", { "direction" : "up" }),
  "j:ctrl;alt;cmd" : S.op("push", { "direction" : "down" }),
  //MISC - CTRL+ALT+CMD
  ",:ctrl;alt;cmd" : S.op("hint"),
  ".:ctrl;alt;cmd" : S.op("undo"),
  "/:ctrl;alt;cmd" : S.op("grid"),
  "tab:cmd" : S.op("switch"),
});

/* */
//RIGHT EDGE TO RIGHT
slate.bind("l:alt;cmd", function(win) {
    var rect = win.rect();
    var corner = rect.x + rect.width;
    var dist = sizeX - corner;
    win.resize({
        "width" : rect.width+dist,
        "height" : rect.height+0,
        "anchor" : "top-left"
    });
});
/*//LEFT EDGE TO LEFT
//...anchor not working, should i push then resize?
slate.bind("h:alt;cmd", function(win) {
    var rect = win.rect();
    slate.log("rect.x: " + rect.x + " rect.width: " + rect.width);
    var newWidth = rect.width+rect.x;
    slate.log("new width" + newWidth);
    win.throw({
    });
});*/
slate.bind("i:ctrl;alt", function(win) {
    var rect = win.rect();
    var yChange = 45;
    if (rect.height < 730)
        yChange = 0;
    win.resize({
        "width" : rect.width-80,
        "height" : rect.height-yChange
    });
    win.move({
        "x" : rect.x+40,
        "y" : rect.y+(yChange*.5)
    });
});
slate.bind("o:ctrl;alt", function(win) { //TODO: dont shrink y size if below certain level
    var rect = win.rect();
    var yChange = 45;
    win.resize({
        "width" : rect.width+80,
        "height" : rect.height+yChange
    });
    win.move({
        "x" : rect.x-40,
        "y" : rect.y-(yChange*.5)
    });
});
slate.bind("m:ctrl;alt", function(win) {
    var rect = win.rect();
    var moveX = (sizeX - rect.width)*.5;
    var moveY = (sizeY - rect.height)*.5;
    win.move({
        "x" : moveX,
        "y" : moveY 
    });
});

  /*
  //CENTERED
  "=:ctrl;alt" : S.op("corner", { "screen" : monitor_Air, "direction" : "top-left", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "-:ctrl;alt" : S.op("move", { "x" : sizeX*.05, "y" : sizeY*.05, "width" : sizeX*.9, "height" : sizeY*.9, "screen" : monitor_Air }),
  "0:ctrl;alt" : S.op("move", { "x" : sizeX*.10, "y" : sizeY*.10, "width" : sizeX*.8, "height" : sizeY*.8, "screen" : monitor_Air }),
  //CENTERED FULL HEIGHT
  "9:ctrl;alt" : S.op("move", { "x" : sizeX*.04, "y" : 0, "width" : sizeX*.92, "height" : sizeY, "screen" : monitor_Air }),
  "8:ctrl;alt" : S.op("move", { "x" : sizeX*.08, "y" : 0, "width" : sizeX*.84, "height" : sizeY, "screen" : monitor_Air }),
  "7:ctrl;alt" : S.op("move", { "x" : sizeX*.12, "y" : 0, "width" : sizeX*.76, "height" : sizeY, "screen" : monitor_Air }),
  //POLITE
  "6:ctrl;alt" : S.op("corner", { "screen" : monitor_Air, "direction" : "top-left", "width" : "screenSizeX*.97", "height" : "screenSizeY*.97" }),
  "5:ctrl;alt" : S.op("corner", { "screen" : monitor_Air, "direction" : "top-right", "width" : "screenSizeX*.97", "height" : "screenSizeY*.97" }),
  "4:ctrl;alt" : S.op("corner", { "screen" : monitor_Air, "direction" : "bottom-left", "width" : "screenSizeX*.97", "height" : "screenSizeY*.97" }),
  "3:ctrl;alt" : S.op("corner", { "screen" : monitor_Air, "direction" : "bottom-right", "width" : "screenSizeX*.97", "height" : "screenSizeY*.97" }),
  */
