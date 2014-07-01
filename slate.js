S.log("loading...");

var monitor_Air = "1366x768";
var sizeX = 1366;
var sizeY = 768;

S.cfga({
  "defaultToCurrentScreen" : true,
  "secondsBetweenRepeat" : 0.01,
  "checkDefaultsOnLoad" : true,
  "focusCheckWidthMax" : 3000,
  "orderScreensLeftToRight" : true
});

S.bnda({
  //SET         8
  "8:ctrl;alt;cmd" : S.op("move", { "x" : 0, "y" : 0, "width" : sizeX*.5, "height" : sizeY, "screen" : monitor_Air }),
  "9:ctrl;alt;cmd" : S.op("move", { "x" : sizeX*.1, "y" : sizeY*.5, "width" : sizeX*.8, "height" : sizeY*.5, "screen" : monitor_Air }),
  "0:ctrl;alt;cmd" : S.op("move", { "x" : sizeX*.1, "y" : 0, "width" : sizeX*.8, "height" : sizeY*.5, "screen" : monitor_Air }),
  "-:ctrl;alt;cmd" : S.op("move", { "x" : sizeX*.5, "y" : 0, "width" : sizeX*.5, "height" : sizeY, "screen" : monitor_Air }),
  //NUDGE       U 
  "u:ctrl;alt;cmd" : S.op("nudge", { "x" : "-2.3%", "y" : "+0" }),
  "i:ctrl;alt;cmd" : S.op("nudge", { "x" : "+0", "y" : "+1.9%" }),
  "o:ctrl;alt;cmd" : S.op("nudge", { "x" : "+0", "y" : "-1.9%" }),
  "p:ctrl;alt;cmd" : S.op("nudge", { "x" : "+2.3%", "y" : "+0" }),
  //RESIZE      H
  
  //THROW       B
  "b:ctrl;alt;cmd" : S.op("push", { "direction" : "left" }),
  "n:ctrl;alt;cmd" : S.op("push", { "direction" : "down" }),
  "m:ctrl;alt;cmd" : S.op("push", { "direction" : "up" }),
  ",:ctrl;alt;cmd" : S.op("push", { "direction" : "right" })
});

//RESIZES
slate.bind("h:ctrl;alt;cmd", function(win) { // - horizontally smaller
    var rect = win.rect();
    win.resize({ "width" : rect.width-80, "height" : rect.height });
    win.move({ "x" : rect.x+40, "y" : rect.y });
});
slate.bind("j:ctrl;alt;cmd", function(win) { // - vertically smaller
    var rect = win.rect();
    win.resize({ "width" : rect.width, "height" : rect.height-40 });
    win.move({ "x" : rect.x, "y" : rect.y+20 });
});
slate.bind("k:ctrl;alt;cmd", function(win) { // - vertically bigger
    var rect = win.rect();
    win.resize({ "width" : rect.width, "height" : rect.height+40 });
    win.move({ "x" : rect.x, "y" : rect.y-20 });
});
slate.bind("l:ctrl;alt;cmd", function(win) { // - horizontally bigger 
    var rect = win.rect();
    win.resize({ "width" : rect.width+80, "height" : rect.height });
    win.move({ "x" : rect.x-40, "y" : rect.y });
});

S.log("finished loading");

