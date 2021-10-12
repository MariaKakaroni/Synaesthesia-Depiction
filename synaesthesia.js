"use strict";

function createSVG(id, width, height){
    var target = document.getElementById(id); //querySelector?
    var svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgNode.setAttributeNS(null, 'width', width);
    svgNode.setAttributeNS(null, 'height', height);
    target.appendChild(svgNode);
    return svgNode
}

//Creates svg elements and puts every shape of the geometry.js library into a column of a table 
function createShapeTable(){
  synaesthesiaGeometry.node = createSVG('tableCircle', 100, 100);
  synaesthesiaGeometry.cx = 50;
  synaesthesiaGeometry.cy = 50;
  synaesthesiaGeometry.radius = 40;
  synaesthesiaGeometry.circle();

  synaesthesiaGeometry.node = createSVG('tableRecatngle', 100, 100);
  synaesthesiaGeometry.rx = 10;
  synaesthesiaGeometry.ry = 25;
  synaesthesiaGeometry.rWidth = 90;
  synaesthesiaGeometry.rHeight = 60;
  synaesthesiaGeometry.rectangle();

  synaesthesiaGeometry.node = createSVG('tableEllipse', 100, 100);
  synaesthesiaGeometry.ex = 50;
  synaesthesiaGeometry.ey = 50;
  synaesthesiaGeometry.rex = 40;
  synaesthesiaGeometry.rey = 25;
  synaesthesiaGeometry.ellipse();

  synaesthesiaGeometry.node = createSVG('tableSemiCircle', 100, 100);
  synaesthesiaGeometry.x = 50;
  synaesthesiaGeometry.y = 10;
  synaesthesiaGeometry.radius = 40;
  synaesthesiaGeometry.semiCircle();

  synaesthesiaGeometry.node = createSVG('tableArc', 100, 100);
  synaesthesiaGeometry.x = 50;
  synaesthesiaGeometry.y = 10;
  synaesthesiaGeometry.aendX = 10;
  synaesthesiaGeometry.aendY = 60;
  synaesthesiaGeometry.radius = 40;
  synaesthesiaGeometry.arc();

  synaesthesiaGeometry.node = createSVG('tableLine', 100, 100);
  synaesthesiaGeometry.lx1 = 0;
  synaesthesiaGeometry.lx2 = 80;
  synaesthesiaGeometry.ly1 = 80;
  synaesthesiaGeometry.ly2 = 0;
  synaesthesiaGeometry.line();

  synaesthesiaGeometry.node = createSVG('tableTrapezoid', 100, 100);
  synaesthesiaGeometry.tx1 = 30;
  synaesthesiaGeometry.ty1 = 20;
  synaesthesiaGeometry.tx2 = 15;
  synaesthesiaGeometry.ty2 = 80;
  synaesthesiaGeometry.tbase1 = 40;
  synaesthesiaGeometry.tbase2 = 70;
  synaesthesiaGeometry.trapezoid();

  synaesthesiaGeometry.node = createSVG('tableParallelogram', 100, 100);
  synaesthesiaGeometry.px1 = 40;
  synaesthesiaGeometry.py1 = 20;
  synaesthesiaGeometry.px2 = 20;
  synaesthesiaGeometry.py2 = 60;
  synaesthesiaGeometry.pside = 50;
  synaesthesiaGeometry.parallelogram();

  synaesthesiaGeometry.node = createSVG('tableSquare', 100, 100);
  synaesthesiaGeometry.sx = 20;
  synaesthesiaGeometry.sy = 20;
  synaesthesiaGeometry.sside = 70;
  synaesthesiaGeometry.square();

  synaesthesiaGeometry.node = createSVG('tableRhombus', 100, 100);
  synaesthesiaGeometry.rhx = 20;
  synaesthesiaGeometry.rhy = 50;
  synaesthesiaGeometry.rhdiagonal1 = 70;
  synaesthesiaGeometry.rhdiagonal2 = 45;
  synaesthesiaGeometry.rhombus();

  synaesthesiaGeometry.node = createSVG('tableTriangle', 100, 100);
  synaesthesiaGeometry.trx1 = 50;
  synaesthesiaGeometry.try1 = 10;
  synaesthesiaGeometry.trx2 = 10;
  synaesthesiaGeometry.try2 = 85;
  synaesthesiaGeometry.trx3 = 90;
  synaesthesiaGeometry.try3 = 70;
  synaesthesiaGeometry.triangle();

  synaesthesiaGeometry.node = createSVG('tableRightTriangle', 100, 100);
  synaesthesiaGeometry.rtx = 30;
  synaesthesiaGeometry.rty = 100;
  synaesthesiaGeometry.rtverticalSide1 = 60;
  synaesthesiaGeometry.rtverticalSide2 = 80;
  synaesthesiaGeometry.rightTriangle();

  synaesthesiaGeometry.node = createSVG('tableIsoscelesTriangle', 100, 100);
  synaesthesiaGeometry.itx = 30;
  synaesthesiaGeometry.ity = 100;
  synaesthesiaGeometry.itbase = 60;
  synaesthesiaGeometry.itside = 80;
  synaesthesiaGeometry.isoscelesTriangle();

  synaesthesiaGeometry.node = createSVG('tableEquilateralTriangle', 100, 100);
  synaesthesiaGeometry.etx = 25;
  synaesthesiaGeometry.ety = 100;
  synaesthesiaGeometry.etside = 70;
  synaesthesiaGeometry.equilateralTriangle();

  synaesthesiaGeometry.node = createSVG('tableSine', 100, 100);
  synaesthesiaGeometry.x = 10;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.radius = 20;
  synaesthesiaGeometry.sine();

  synaesthesiaGeometry.node = createSVG('tableCosine', 100, 100);
  synaesthesiaGeometry.x = 10;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.radius = 20;
  synaesthesiaGeometry.cosine();

  synaesthesiaGeometry.node = createSVG('tableTangent', 100, 100);
  synaesthesiaGeometry.x = 30;
  synaesthesiaGeometry.y = 90;
  synaesthesiaGeometry.radius = 40;
  synaesthesiaGeometry.tangent();

  synaesthesiaGeometry.node = createSVG('tableCotangent', 100, 100);
  synaesthesiaGeometry.x = 30;
  synaesthesiaGeometry.y = 10;
  synaesthesiaGeometry.radius = 40;
  synaesthesiaGeometry.cotangent();

  synaesthesiaGeometry.node = createSVG('tableParabola', 100, 100);
  synaesthesiaGeometry.x = 30;
  synaesthesiaGeometry.y = 30;
  synaesthesiaGeometry.radius = 40;
  synaesthesiaGeometry.parabola();

  synaesthesiaGeometry.node = createSVG('tableHyperbola', 100, 100);
  synaesthesiaGeometry.x = 15;
  synaesthesiaGeometry.y = 15;
  synaesthesiaGeometry.radius = 20;
  synaesthesiaGeometry.hyperbola();

  synaesthesiaGeometry.node = createSVG('tableFigureEightCurve', 100, 100);
  synaesthesiaGeometry.x = 10;
  synaesthesiaGeometry.y = 55;
  synaesthesiaGeometry.radius = 40;
  synaesthesiaGeometry.figureEightCurve();

  synaesthesiaGeometry.node = createSVG('tableLemniscateOfBernoulli', 100, 100);
  synaesthesiaGeometry.x = 10;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.radius = 40;
  synaesthesiaGeometry.lemniscateOfBernoulli();

  synaesthesiaGeometry.node = createSVG('tableAstroidCurve', 100, 100);
  synaesthesiaGeometry.x = 10;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.radius = 30;
  synaesthesiaGeometry.astroidCurve();

  synaesthesiaGeometry.node = createSVG('tableWitchOfAgnesiCurve', 100, 100);
  synaesthesiaGeometry.x = 0;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.radius = 20;
  synaesthesiaGeometry.witchOfAgnesiCurve();

  synaesthesiaGeometry.node = createSVG('tableArchimedeanSpiral', 100, 100);
  synaesthesiaGeometry.x = 50;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.radius = 2;
  synaesthesiaGeometry.loops = 5;
  synaesthesiaGeometry.archimedeanSpiral();

  synaesthesiaGeometry.node = createSVG('tableLimaconOfPascal', 100, 100);
  synaesthesiaGeometry.x = 10;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.radius = 60;
  synaesthesiaGeometry.limaconOfPascal();

  synaesthesiaGeometry.node = createSVG('tableDeltoidCurve', 100, 100);
  synaesthesiaGeometry.x = 20;
  synaesthesiaGeometry.y = 70;
  synaesthesiaGeometry.radius = 60;
  synaesthesiaGeometry.deltoidCurve();

  synaesthesiaGeometry.node = createSVG('tableStrophoidCurve', 100, 100);
  synaesthesiaGeometry.x = 10;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.radius = 20;
  synaesthesiaGeometry.strophoidCurve();

  synaesthesiaGeometry.node = createSVG('tableCycloidCurve', 100, 100);
  synaesthesiaGeometry.x = 10;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.radius = 20;
  synaesthesiaGeometry.loops = 4;
  synaesthesiaGeometry.cycloidCurve();

  synaesthesiaGeometry.node = createSVG('tableRhodoneaCurve', 100, 100);
  synaesthesiaGeometry.x = 50;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.xpedal = 5;
  synaesthesiaGeometry.ypedal = 30;
  synaesthesiaGeometry.pedals = 6;
  synaesthesiaGeometry.rhodoneaCurve();

  synaesthesiaGeometry.node = createSVG('tableFermatsSpiral', 100, 100);
  synaesthesiaGeometry.x = 50;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.radius = 4;
  synaesthesiaGeometry.loops = 2;
  synaesthesiaGeometry.fermatsSpiral();

  synaesthesiaGeometry.node = createSVG('tableLituus', 100, 100);
  synaesthesiaGeometry.x = 25;
  synaesthesiaGeometry.y = 50;
  synaesthesiaGeometry.radius = 5;
  synaesthesiaGeometry.loops = 8;
  synaesthesiaGeometry.lituus();
}
createShapeTable();

var drawnshapes = [];
var pointer = 0;
//Click events on table for every shape. The shapes will appear on canvas aftel selection.
function event() {
  const table = document.getElementById('shapeTable');
  for(var i = 1; i < table.rows.length; i++) {
    table.rows[i].addEventListener('click', function() {
      let canvasSVG = document.getElementById('workspace');
      let chosenShape = this.cells[1].children[0];
      for(i = 0; i < chosenShape.children.length; i++){
        let newClone = chosenShape.children[i].cloneNode(true);
        newClone.setAttributeNS(null,'class', 'clone');
        canvasSVG.appendChild(newClone);
        drawnshapes.push(newClone);
        pointer++;
      } 
    });
  }
}
event();

//creates patterns with the shape-curves that are already on the canvas 
var createPattern = () =>{
  var shapeSVG = document.querySelector('#workspace');
  var shapes = shapeSVG.children;
  var horizontalTiles = document.querySelector('#horizontalTiles').value;
  var verticalTiles = document.querySelector('#verticalTiles').value;
  var pat = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
  pat.setAttributeNS(null, 'id', 'Pattern');
  pat.setAttributeNS(null, "viewBox", `0 0  100 200`);
  pat.setAttributeNS(null, 'width', `${100/horizontalTiles}%`);
  pat.setAttributeNS(null, 'height', `${100/verticalTiles}%`);
  console.log(shapes)
  for (let i = 0; i < shapes.length; i++) {
    pat.appendChild(shapes[i]);
  }
  var d = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  shapeSVG.appendChild(d);
  d.appendChild(pat);
  synaesthesiaGeometry.node = shapeSVG;
  synaesthesiaGeometry.x = 0;
  synaesthesiaGeometry.y = 0;
  synaesthesiaGeometry.rWidth = 200;
  synaesthesiaGeometry.rHeight = 100;
  synaesthesiaGeometry.strokeColor = "none";
  synaesthesiaGeometry.fillColor = `url(#Pattern)`;
  synaesthesiaGeometry.rectangle();
}


//Use of slider for canvas shape elements (x for horizontal movement, y for vertical movement, z for rotation, w for scaling)
var moveSlider = (slider) => {
  var horizontalSlider = document.getElementById('horizontalSlider');
  var verticalSlider = document.getElementById('verticalSlider');
  var rotation = document.getElementById('rotation');
  var scale = document.getElementById('scale');
  var shapeSVG = document.querySelector('#workspace').lastChild;
    if (slider.id == 'horizontalSlider') {
      //shapeSVG[i].style.transform = `translate(${slider.value}px,${verticalSlider.value}px)`;
      shapeSVG.setAttributeNS(null, "transform", `translate(${slider.value},${verticalSlider.value}) 
      rotate(${rotation.value},${slider.value},${verticalSlider.value}) 
      scale(${scale.value})`);
    } else if (slider.id == 'verticalSlider') {
      //shapeSVG[i].style.transform = `translate(${horizontalSlider.value}px,${slider.value}px)`;
      shapeSVG.setAttributeNS(null, "transform", `translate(${horizontalSlider.value},${slider.value}) 
      rotate(${rotation.value},${horizontalSlider.value},${slider.value}) 
      scale(${scale.value})`);
    } else if (slider.id == 'rotation') {
      //shapeSVG[i].style.transform = `rotate(${slider.value}deg)`;
      shapeSVG.setAttributeNS(null,"transform", `translate(${horizontalSlider.value},${verticalSlider.value}) 
      rotate(${slider.value},${horizontalSlider.value},${verticalSlider.value})
      scale(${scale.value})`);
    } else {
      shapeSVG.setAttributeNS(null, "transform", `translate(${horizontalSlider.value},${verticalSlider.value}) 
      rotate(${rotation.value},${horizontalSlider.value},${verticalSlider.value}) 
      scale(${slider.value})`); 
    
  }
}


//Functionality for the shape options
var shapeOptions = (shapeOption) => {
  var svg = document.getElementById("workspace");
  if (shapeOption.id == 'shapeColor') {
    var colorize = shapeOption.value;
    svg.lastChild.setAttributeNS(null,'stroke', colorize);
  }else if (shapeOption.id == 'strokeThickness') {
    svg.lastChild.setAttributeNS(null, 'stroke-width', shapeOption.value);
  }else if (shapeOption.id == 'strokeOpacity') {
    svg.lastChild.setAttributeNS(null, 'stroke-opacity', shapeOption.value);
  }else if (shapeOption.id == 'fillColor') {
    var colorize = shapeOption.value;
    svg.lastChild.setAttributeNS(null,'fill', colorize);
  }else if (shapeOption.id == 'fillOpacity') {
    svg.lastChild.setAttributeNS(null, 'fill-opacity', shapeOption.value);
  }
}


//Functionality for the canvas options
var canvasOptions = (canvasOption) => {
  var horizontalSlider = document.getElementById('horizontalSlider');
  var verticalSlider = document.getElementById('verticalSlider');
  const canvas = document.querySelector('#workspace');
  if (canvasOption.id == "ver") {
    canvas.setAttributeNS(null, "viewBox", `0 0  100 200`);
    horizontalSlider.setAttribute("max", 100)
  verticalSlider.setAttribute("max", 200)
  } else if (canvasOption.id == "sq") {
    canvas.setAttributeNS(null, "viewBox", `0 0 100 100`);
    horizontalSlider.setAttribute("max", 100)
  verticalSlider.setAttribute("max", 100)
  } else if(canvasOption.id == "hor"){
    canvas.setAttributeNS(null, "viewBox", `0 0 200 100`);
    horizontalSlider.setAttribute("max", 200)
    verticalSlider.setAttribute("max", 100)
  }else{
    document.getElementById("workspace").style.backgroundColor = canvasOption.value;
  }
}

//Functionality for the buttons on the side bar
var buttons = (clicked) =>{
  var svg = document.getElementById("workspace");
  if (clicked.id == "save-button1" || clicked.id == "save-button2") {
  //get svg source.
  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);
  console.log(source);

  //add name spaces.
  if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }

  //add xml declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

  //convert svg source to URI data scheme.
  var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

  //set url value to an element's href attribute.
  var save1 = document.getElementById("save-button1");
  var save2 = document.getElementById("save-button2");
  save1.href = url;
  save2.href = url;
  }else if(clicked.id == "undo-button1" || clicked.id == "undo-button2"){
    if (svg.lastChild){
      svg.removeChild(svg.lastChild);
      pointer--;
    }
  }else if(clicked.id == "redo-button1" || clicked.id == "redo-button2"){
    if (drawnshapes[pointer]){
      svg.appendChild(drawnshapes[pointer]);
      pointer++;
    }
  }
}