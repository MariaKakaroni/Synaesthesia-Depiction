"use strict";
// synaesthesiaGeometry is a javascipt library that was created to simplify the
// creation and modification of 32 well-known shapes and curves with HTML5.
// The shapes-curves are designed to be depicted on images in SVG format.
// The synaesthesiaGeometry.js file contains the synaesthesiaGeometry object which represents the whole library.

//Calculating one of the vertical sides of a right triangle threw pythagorean theorem
//sideC is the hypotenese 
function pythagoreanA(sideC, sideB){
    return Math.sqrt(Math.pow(sideC, 2) - Math.pow(sideB, 2));
}

const synaesthesiaGeometry = {
    strokeColor: "White", //the color of the drawing line
    fillColor: "none", //the color that the shape-curve will be filled with
    strokeWidth: 1, // the width of the stroke that the drawing line will have
    translateX: 0, //the horizontal movement
    translateY: 0, //the vertical movement
    degrees: 0, //the rotation
    size: 1, //the size
    node: document.createElementNS('http://www.w3.org/2000/svg', 'svg'), //the parent node of the created one
    radius: 0, //the radius (needs to be modified for the methods that create the circle, semicircle, arc, 
                //sine, cosine, tangent, cotangent, parabola, hyperbola, figure eight curve, leniscate of Bernulli, 
                //astroid curve, witch of Agnesi, Archimedean spiral, limacon of Pascal, 
                //deltoid curve, strophoid curve, cycloid curve, rhdonea curve, Fermat's spiral, lituus)
    x: 0, //the horizontal position of the starting point of <path> elements
    y: 0, //the vertical position of the starting point of <path> elements
    cx: 0, //the horizontal position of the center of the circle
    cy: 0, //the vertical position of the center of the circle
    lx1: 0, //the horizontal position of the starting point of the line
    lx2: 0, //the vertical position of the starting point of the line
    ly1: 0, //the horizontal position of the ending point of the line
    ly2: 0, //the vertical position of the starting point of the line
    trx1: 0, //the horizontal position of the first of the triangle vertices
    trx2: 0, //the vertical position of the first of the triangle vertices
    try1: 0, //the horizontal position of the second of the triangle vertices
    try2: 0, //the vertical position of the second of the triangle vertices
    trx3: 0, //the horizontal position of the third of the triangle vertices
    try3: 0, //the vertical position of the third of the triangle vertices
    ex: 0, //the horizontal position of the center of the ellipse
    ey: 0, //the vertical position of the center of the ellipse
    rex: 0, //the length of the horizontal radius of the ellipse
    rey: 0, //the length of the horizontal radius of the ellipse
    tx1: 0, //the horizontal position of the starting point of the trapezoid
    ty1: 0, //the vertical position of the starting point of the trapezoid
    tx2: 0, //the horizontal position of the starting point of the left side of the trapezoid
    ty2: 0, //the vertical position of the starting point of the left side of the trapezoid
    tbase1: 0, //the length of the top base of the trapezoid
    tbase2: 0, //the length of the bottom base of the trapezoid
    px1: 0, //the horizontal position of the starting point of the parallelogram
    py1: 0, //the vertical position of the starting point of the parallelogram
    px2: 0, //the horizontal position of the ending point of the left side of the parallelogram
    py2: 0, //the vertical position of the ending point of the left side of the parallelogram
    pside: 0, //the length of the horizontal sides of the parallelogram
    aendX: 0, //the horizontal position of the ending point of the arc
    aendY: 0, //the vertical position of the ending point of the arc
    sx: 0, // the horizontal position of the starting point of the square
    sy: 0, // the vertical position of the starting point of the square
    sside: 0, //the length of the sides of the square
    rhx: 0, //the horizontal position of the starting point of the rhombus
    rhy: 0, //the horizontal position of the starting point of the rhombus
    rhdiagonal1: 0, //the length of the first diagonal of the rhombus
    rhdiagonal2: 0, //the length of the second diagonal of the rhombus
    rx: 0, //the horizontal position of the starting point of the rectangle
    ry: 0, //the vertical position of the starting point of the rectangle
    rWidth: 0, //the width length of two of the parallel sides of the rectangle
    rHeight: 0, //the height length of two of the parallel sides of the rectangle
    rtx: 0, //the horizontal position of the first of the right triangle vertices
    rty: 0, //the vertical position of the first of the right triangle vertices
    rtrtverticalSide1: 0, //the length of the horizontal-vertical side of the right triangle
    rtrtverticalSide2: 0, //the length of the vertical-vertical side of the right triangle
    itx: 0, //the horizontal position of the first of the isosceles triangle vertices
    ity: 0, //the vertical position of the first of the isosceles triangle vertices
    itbase: 0, //the length of the base side of the isosceles triangle
    itside: 0, //the length of one of the other sides of the isosceles triangle
    etx: 0, //the horizontal position of the first of the equiteral triangle vertices
    ety: 0, //the vertical position of the first of the equiteral triangle vertices
    etside: 0, //the length of one of the sides of the equiteral triangle
    loops: 0, //the number of times that the curve rotates 360 degrees around its center (needs to be modified 
            //for the methods that create the Archimedean spiral, cycloid curve, Fermat's spiral, lituus)
    xpedal: 0, //the width of one of the rhodoneas curve pedal
    ypedal: 0, //the height of one of the rhodoneas curve pedal
    pedals: 0, //the number of the pedals to be drawn

    //creates a circle of given radius that will be drawn on x,y coordinates (center of circle)
    circle:  function(){
        var circleNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circleNode.setAttributeNS(null, 'cx', this.cx);
        circleNode.setAttributeNS(null, 'cy', this.cy);
        circleNode.setAttributeNS(null, 'r', this.radius);
        circleNode.setAttributeNS(null, 'fill', this.fillColor);
        circleNode.setAttributeNS(null, 'stroke', this.strokeColor);
        circleNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        circleNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) scale(${this.size})`);
        this.node.appendChild(circleNode);
    },
    //creates a line of given starting (x1,y1) and ending (x2,y2) point coordinates
    line:  function(){
        var lineNode = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        lineNode.setAttributeNS(null, 'x1', this.lx1);
        lineNode.setAttributeNS(null, 'x2', this.lx2);
        lineNode.setAttributeNS(null, 'y1', this.ly1);
        lineNode.setAttributeNS(null, 'y2', this.ly2);
        lineNode.setAttributeNS(null, 'stroke', this.strokeColor);
        lineNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        lineNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${this.lx1 + (this.lx2-this.lx1)/2},${this.ly1 +(this.ly2-this.ly1)/2}) scale(${this.size})`);
        this.node.appendChild(lineNode); 
    },
    //creates an ellipse of given radius (horizontal, vertical) that will be drawn on x,y coordinates (center of ellipse)
    ellipse: function(){
        var ellipseNode = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        ellipseNode.setAttributeNS(null, 'cx', this.ex);
        ellipseNode.setAttributeNS(null, 'cy', this.ey);
        ellipseNode.setAttributeNS(null, 'rx', this.rex);
        ellipseNode.setAttributeNS(null, 'ry', this.rey);
        ellipseNode.setAttributeNS(null, 'fill', this.fillColor);
        ellipseNode.setAttributeNS(null, 'stroke', this.strokeColor);
        ellipseNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        ellipseNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${this.ex},${this.ey}) scale(${this.size})`);
        this.node.appendChild(ellipseNode);
        return ellipseNode
    },
    //creates a vertical semi circle of given radius that will be drawn on x,y coordinates (top middle) anticlockwise direction
    semiCircle: function(){
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${this.x} ${this.y}  A${this.radius} ${this.radius} ${0} ${0} ${0} ${this.x} ${this.y + 2 * this.radius} `);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${this.x},${this.y + this.radius}) scale(${this.size})`);
        this.node.appendChild(pathNode);
        return pathNode
    },
    //creates an horizontal arc of given radius that will be drawn on starting x,y coordinates (top middle) to the finish ones (anticlockwise direction)
    arc: function(){
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${this.x} ${this.y}  A${this.radius} ${this.radius} ${0} ${0} ${0} ${this.aendX} ${this.aendY} `);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${this.x},${this.y}) scale(${this.size})`);
        this.node.appendChild(pathNode);
    },
    //creates a trapezoid of given points threw coordinates x1, y1(top left) x2, y2(bottom left)
    trapezoid: function(){
        var polygonNode = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygonNode.setAttributeNS(null, 'points', `${this.tx1},${this.ty1} ${this.tx2},${this.ty2} ${this.tx2 + this.tbase2},${this.ty2} ${this.tx1 + this.tbase1},${this.ty1}` );
        polygonNode.setAttributeNS(null, 'fill', this.fillColor);
        polygonNode.setAttributeNS(null, 'stroke', this.strokeColor);
        polygonNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        polygonNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${this.tx1 + this.tbase1/2},${this.ty2 - this.ty1}) scale(${this.size})`);
        this.node.appendChild(polygonNode);
    },
    //creates a parallelogram of given points threw coordinates, x1, y1 (top left), x2,y2 (bottom left)
    parallelogram: function(){
        var polygonNode = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygonNode.setAttributeNS(null, 'points', `${this.px1},${this.py1} ${this.px2},${this.py2} ${this.px2 + this.pside},${this.py2} ${this.px1 + this.pside},${this.py1}` );
        polygonNode.setAttributeNS(null, 'fill', this.fillColor);
        polygonNode.setAttributeNS(null, 'stroke', this.strokeColor);
        polygonNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        polygonNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${this.px1 + this.pside/2},${this.py2 - this.py1}) scale(${this.size})`);
        this.node.appendChild(polygonNode);
    },
    //creates a triangle of given points threw coordinates, (x1,y1) is the starting point
    triangle: function(){
        var polygonNode = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygonNode.setAttributeNS(null, 'points', `${this.trx1},${this.try1} ${this.trx2},${this.try2} ${this.trx3},${this.try3}`);
        polygonNode.setAttributeNS(null, 'fill', this.fillColor);
        polygonNode.setAttributeNS(null, 'stroke', this.strokeColor);
        polygonNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        polygonNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${this.trx1},${this.try1}) scale(${this.size})`);
        this.node.appendChild(polygonNode);
        return polygonNode
    },
    //creates a square of given starting point and side (top left)
    square: function(){
        var rectangleNode = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rectangleNode.setAttributeNS(null, 'x', this.sx);
        rectangleNode.setAttributeNS(null, 'y', this.sy);
        rectangleNode.setAttributeNS(null, 'width', this.sside);
        rectangleNode.setAttributeNS(null, 'height', this.sside);
        rectangleNode.setAttributeNS(null, 'fill', this.fillColor);
        rectangleNode.setAttributeNS(null, 'stroke', this.strokeColor);
        rectangleNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        rectangleNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${this.sx + this.sside/2},${this.sy + this.sside/2}) scale(${this.size})`);
        this.node.appendChild(rectangleNode);
        return rectangleNode
    },
    //creates a rhombus of given starting point and the two diagonals (top left)
    rhombus: function(){
        var halfDiagonal1 = this.rhdiagonal1 / 2;
        var halfDiagonal2 = this.rhdiagonal2 / 2;
        var rhx2 = this.rhx + halfDiagonal1;
        var rhy2 = this.rhy - halfDiagonal2;
        var rhx3 = this.rhx + this.rhdiagonal1;
        var rhy4 = this.rhy + halfDiagonal2;
        var polygonNode = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygonNode.setAttributeNS(null, 'points', `${this.rhx},${this.rhy} ${rhx2},${rhy2} ${rhx3},${this.rhy} ${rhx2},${rhy4}` );
        polygonNode.setAttributeNS(null, 'fill', this.fillColor);
        polygonNode.setAttributeNS(null, 'stroke', this.strokeColor);
        polygonNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        polygonNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${rhx2},${this.rhy}) scale(${this.size})`);
        this.node.appendChild(polygonNode);  
    },
    //creates a rectngle of given width and height that will be drawn on x,y coordinates (top left)
    rectangle: function(){
        var rectangleNode = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rectangleNode.setAttributeNS(null, 'x', this.rx);
        rectangleNode.setAttributeNS(null, 'y', this.ry);
        rectangleNode.setAttributeNS(null, 'width', this.rWidth);
        rectangleNode.setAttributeNS(null, 'height', this.rHeight);
        rectangleNode.setAttributeNS(null, 'fill', this.fillColor);
        rectangleNode.setAttributeNS(null, 'stroke', this.strokeColor);
        rectangleNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        rectangleNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${this.rx + this.rWidth/2},${this.ry + this.rHeight/2}) scale(${this.size})`);
        this.node.appendChild(rectangleNode);
        return rectangleNode
    },
    /*
  creates a right triangle of given points threw coordinates
  (x,y) starting point (bottom left)
  */
    rightTriangle: function(){
        var x2 = this.rtverticalSide1 + this.rtx;
        var y3 = this.rty - this.rtverticalSide2;
        var polygonNode = synaesthesiaGeometry.triangle();
        polygonNode.setAttributeNS(null, 'points', `${this.rtx},${this.rty} ${x2},${this.rty} ${this.rtx},${y3}`);
        this.node.appendChild(polygonNode);
    },
    /*
  creates an isosceles triangle of starting point (x,y), (bottom left)
  and the width of one of the equal sides and the width of the basis 
  */
    isoscelesTriangle: function(){
        var x2 = (this.itx + this.itbase);
        var x3 = this.itx + (x2 - this.itx)/2;
        var vertical = (pythagoreanA(this.itside, (this.itbase - this.itx)/2));
        var y3 = this.ity - vertical;
        var polygonNode = synaesthesiaGeometry.triangle();
        polygonNode.setAttributeNS(null, 'points', `${this.itx},${this.ity} ${x2},${this.ity} ${x3},${y3}`);
        this.node.appendChild(polygonNode);
        return polygonNode;
    },
    /*
  creates an isosceles triangle of given coordinates (x,y) bottom left
  and the width of one of the equal sides 
  */
    equilateralTriangle: function(){
        var x2 = (this.etx + this.etside);
        var x3 = this.etx + (x2 - this.etx)/2;
        var vertical = (pythagoreanA(this.etside, (this.etside - this.etx)/2));
        var y3 = this.ety - vertical;
        var polygonNode = synaesthesiaGeometry.triangle();
        polygonNode.setAttributeNS(null, 'points', `${this.etx},${this.ety} ${x2},${this.ety} ${x3},${y3}`);
        this.node.appendChild(polygonNode);
    },
    //creates a sine wave (1 phase) of given radius that will be drawn on x,y coordinates (middle left)
    sine: function(){
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${this.x} ${this.y}  
        C${this.x} ${this.y + 2 * this.radius} ${this.x + this.radius *2} ${this.y + 2* this.radius} ${this.x + this.radius *2} ${this.y}  
        S${4*this.radius +this.x} ${this.y - 2 * this.radius} ${4*this.radius +this.x} ${this.y}`);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null, 'stroke-linecap', "round");
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${this.x + 2* this.radius},${this.y}) scale(${this.size})`);
        this.node.appendChild(pathNode);
    },
    //creates a cossine wave (1 phase) of given radius that will be drawn on x,y coordinates (middle left)
    cosine: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  
        C${x} ${y - 2* radius} ${x + radius *2} ${y - 2* radius} ${x + radius *2} ${y}  S${4*radius +x} ${y + 2* radius} ${4*radius +x} ${y}`);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null, 'stroke-linecap', "round");
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x + 2* radius},${this.y}) scale(${this.size})`);
        this.node.appendChild(pathNode);
    },
    //creates a tangent curve of given radius that will be drawn on x,y coordinates (bottom left)
    tangent: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  C${x} ${y - radius *2} ${x + radius} ${y} ${x + radius } ${y -2*radius}`);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null, 'stroke-linecap', "round");
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x + radius},${y - radius}) scale(${this.size})`);
        this.node.appendChild(pathNode);
    },
    //creates a contangent curve of given radius that will be drawn on x,y coordinates (top left)
    cotangent: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  C${x} ${y + radius *2} ${x + radius} ${y} ${x + radius } ${y + 2*radius}`);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null, 'stroke-linecap', "round");
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x + radius},${y + radius}) scale(${this.size})`);
        this.node.appendChild(pathNode);
    },
    //creates a parabola curve of given radius that will be drawn on x,y coordinates (top left)
    parabola: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  C${x} ${y + radius *2} ${x + radius} ${y+ radius *2} ${x + radius } ${y}`);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null, 'stroke-linecap', "round");
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x + radius/2},${y + radius}) scale(${this.size})`);
        this.node.appendChild(pathNode);
        return pathNode
    },
    //creates a hyperbola curve of given radius that will be drawn on x,y coordinates (top left)(left branch)
    hyperbola: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  
        Q${x + radius *2} ${y + radius} ${x} ${y + 2 *radius}
        M${x + radius *4} ${y} Q${x + radius *2} ${y + radius}  ${x + radius *4} ${y + 2 * radius}`);
        g.setAttributeNS(null, 'fill', this.fillColor);
        g.setAttributeNS(null, 'stroke', this.strokeColor);
        g.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        g.setAttributeNS(null, 'stroke-linecap', "round");
        g.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x + radius/2},${y + radius}) scale(${this.size})`);
        this.node.appendChild(g);
        g.appendChild(pathNode);
    },
    //creates a figure eight curve of given radius that will be drawn on x,y coordinates (middle left)
    figureEightCurve: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  
        C${x} ${y + radius } ${x + radius/2} ${y+ radius} ${x + radius } ${y}
        S${x + 2* radius} ${y - radius} ${x + 2* radius } ${y}
        M${x} ${y} C${x} ${y - radius } ${x + radius/2} ${y - radius} ${x + radius } ${y}
        S${x + 2* radius} ${y + radius} ${x + 2* radius } ${y}`);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x + radius},${y}) scale(${this.size})`);
        this.node.appendChild(pathNode);
        return pathNode
    },
    //creates a lemniscate of Bernoulli curve of given radius that will be drawn on x,y coordinates (middle left)
    lemniscateOfBernoulli: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  C${x + radius/10} ${y + radius/2 } ${x + radius/2} ${y+ radius/2} ${x + radius } ${y}
        S${x+ 19* radius/10} ${y - radius/2} ${x + 2* radius } ${y}
        M${x} ${y} C${x+ radius/10} ${y - radius/2 } ${x + radius/2} ${y - radius/2} ${x + radius } ${y}
        S${x+ 19* radius/10} ${y + radius/2} ${x + 2* radius } ${y}`);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null, 'stroke-linecap', "round");
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x + radius},${y}) scale(${this.size})`);
        this.node.appendChild(pathNode);
        return pathNode
    },
    //creates an astroid curve of given radius (arcs) that will be drawn on x,y coordinates (middle left)
    astroidCurve: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  Q${x + radius} ${y} ${x + radius } ${y+ radius}
        Q${x + radius} ${y} ${x + 2 * radius } ${y}
        Q${x + radius} ${y} ${x + radius } ${y- radius}
        Q${x + radius} ${y} ${x} ${y}`);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x + radius},${y}) scale(${this.size})`);
        this.node.appendChild(pathNode);
        return pathNode
    },
    //creates a witch of Agnesi curve of given radius that will be drawn on x,y coordinates (bottom left)
    witchOfAgnesiCurve: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y} 
        C${x + 2 * radius} ${y - radius /4 } ${x + radius} ${y - 3* radius/4} ${x + 2 * radius} ${y - radius}
        C${x + 3 * radius} ${y - 3* radius/4 } ${x + 2* radius} ${y - radius/4} ${x + 4 * radius} ${y}`); 
        pathNode.setAttributeNS(null, 'fill', this.fillColor);   
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null, 'stroke-linecap', "round");
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x + 2 * radius},${y}) scale(${this.size})`);
        this.node.appendChild(pathNode);
        return pathNode
    },
    /*
  creates an Archimidean spiral of given radius (starting arc) that will be drawn on x,y coordinates (middle right)
  the first curve draws an arc of 360 degrees (anticlockwise) and then it loops around a given number
  */
    archimedeanSpiral: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var loops = this.loops;
        var z = x;
        var w = x;
        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  A${radius} ${radius} ${0} ${0} ${0} ${z - 2 * radius} ${y} A${radius} ${radius} ${0} ${0} ${0} ${x + 4*  radius} ${y}  
        `);
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) rotate(${this.degrees},${w},${y}) scale(${this.size})`);
        g.appendChild(pathNode);
        x += 4* radius;
        z -= 2* radius;
        radius +=  radius;
        for (var i = 1; i < loops; i++) {
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y} A${radius} ${radius} ${0} ${0} ${0} ${z - 2 *  radius} ${y} A${radius} ${radius} ${0} ${0} ${0} ${x +2* radius} ${y}  
        `);
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) rotate(${this.degrees},${w},${y}) scale(${this.size})`);
        g.appendChild(pathNode);
        x += 2* radius;
        z -= 2* radius;
        }
        g.setAttributeNS(null, 'fill', this.fillColor);
        g.setAttributeNS(null, 'stroke', this.strokeColor);
        g.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        g.setAttributeNS(null, 'stroke-linecap', "round");
        this.node.appendChild(g);
        return g
    },
    //creates a limacon of Pascal curve of given radius that will be drawn on x,y coordinates (middle left)
    limaconOfPascal: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var radius1 = radius / 4;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  C${x + radius1/2} ${y - radius1/2 } ${x + radius1*3/4} ${y- radius1/2} ${x + radius1 } ${y}
        M${x} ${y}  C${x + radius1/2} ${y + radius1/2 } ${x + radius1*3/4} ${y+ radius1/2} ${x + radius1 } ${y}
        M${x} ${y}  C${x - radius/4} ${y- radius/2} ${x + radius*8/9} ${y- radius*8/9} ${x + radius } ${y}
        M${x} ${y}  C${x - radius/4} ${y+ radius/2} ${x + radius*8/9} ${y+ radius*8/9} ${x + radius } ${y}
        `);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null, 'stroke-linecap', "round");
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x+ radius/2},${y}) scale(${this.size})`);
        this.node.appendChild(pathNode);
        return pathNode
    },
    //creates an deltoid curve of given radius (arcs) that will be drawn on x,y coordinates (bottom left)
    deltoidCurve: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var distance = pythagoreanA(radius, radius/2);
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  
        Q${x + distance/2} ${y - radius/2 } ${x } ${y- radius}
        Q${x + distance/2} ${y - radius/2 } ${x + distance } ${y- radius/2}
        Q${x + distance/2} ${y - radius/2 } ${x } ${y}
        `);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x+distance/2},${y- radius/2}) scale(${this.size})`);
        this.node.appendChild(pathNode);
        return pathNode
    },
    //creates an strophoid curve of given radius (arcs) that will be drawn on x,y coordinates (middle left)
    strophoidCurve: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  
        C${x + radius/4} ${y - radius*3/4 } ${x + radius} ${y- radius*3/4} ${x + 2* radius} ${y}
        M${x} ${y} C${x+ radius/4} ${y + radius*3/4 } ${x + radius} ${y+ radius*3/4} ${x + 2* radius} ${y}
        C${x + radius*2} ${y} ${x + radius*3} ${y} ${x +radius*3} ${y- 2* radius}
        M${x+ radius*2} ${y} C${x +  radius*2} ${y} ${x + radius*3} ${y} ${x +radius*3} ${y+ 2* radius}
        `);
        pathNode.setAttributeNS(null, 'fill', this.fillColor);
        pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
        pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        pathNode.setAttributeNS(null, 'stroke-linecap', "round");
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x + 2* radius},${y}) scale(${this.size})`);
        this.node.appendChild(pathNode);
        return pathNode
    },
    //creates an cycloid curve of given radius that will be drawn on x,y coordinates (top left)
    cycloidCurve: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var loops = this.loops;
        var z = x;
        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        for (var i = 0; i < loops; i++) {
            var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathNode.setAttributeNS(null, 'd', `M${x} ${y}  C${x} ${y + radius *2} ${x + radius} ${y+ radius *2} ${x + radius } ${y}`);
            pathNode.setAttributeNS(null, 'fill', this.fillColor);
            pathNode.setAttributeNS(null, 'stroke', this.strokeColor);
            pathNode.setAttributeNS(null, 'stroke-width', this.strokeWidth);
            pathNode.setAttributeNS(null, 'stroke-linecap', "round");
            pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
            rotate(${this.degrees},${z + loops/2* radius},${y+radius/2}) scale(${this.size})`);
            x += radius
            g.appendChild(pathNode)
        }
        this.node.appendChild(g);
    },
    /*
  creates an rhodonea curve of given radius that will be drawn around x,y coordinates
  creates the first pedal with horizontal and vertical radiuses (xpedal, ypedal)
  and then it creates identical pedals and rotates them to a given number of pedals (middle middle)
  */
    rhodoneaCurve: function(){
        var x = this.x;
        var y = this.y;
        var xpedal = this.xpedal;
        var ypedal = this.ypedal;
        var pedals = this.pedals;
        var angle = 360 / pedals;
        var anglePlus = 0;
        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        for (var i = 0; i < pedals; i++) {
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y} C${x + ypedal/2} ${y + xpedal } ${x + 9* ypedal/10} ${y+ xpedal} ${x + ypedal } ${y}
        C${x + 9* ypedal/10} ${y- xpedal} ${x + ypedal/2} ${y - xpedal} ${x} ${y}`);
        pathNode.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees + anglePlus},${x},${y}) scale(${this.size})`);
        g.appendChild(pathNode);
        anglePlus += angle;

        }
        g.setAttributeNS(null, 'fill', this.fillColor);
        g.setAttributeNS(null, 'stroke', this.strokeColor);
        g.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        g.setAttributeNS(null, 'stroke-linejoin', "arcs");
        this.node.appendChild(g);
    },
    /*
  creates a Fermat's spiral of given radius (starting arc) that will be drawn on x,y coordinates (middle middle)
  works like the archimedean spiral with two separate curves one that has a anticlockwise direction and one with clockwise direction
  */
    fermatsSpiral: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var loops = this.loops;
        var g = synaesthesiaGeometry.archimedeanSpiral();
        var z = x;
        var w = x;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y} A${radius} ${radius} ${0} ${0} ${0} ${z + 2 * radius} ${y} A${radius} ${radius} ${0} ${0} ${0} ${x - 4*  radius} ${y}  
        `);
        g.appendChild(pathNode);
        x -= 4* radius;
        z += 2* radius;
        radius +=  radius;
        for (var i = 1; i < loops; i++) {
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y} A${radius} ${radius} ${0} ${0} ${0} ${z + 2 *  radius} ${y} A${radius} ${radius} ${0} ${0} ${0} ${x -2* radius} ${y}  
        `);
        g.appendChild(pathNode);
        x -= 2* radius;
        z += 2* radius;
        }
        g.setAttributeNS(null, 'fill', this.fillColor);
        g.setAttributeNS(null, 'stroke', this.strokeColor);
        g.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        g.setAttributeNS(null, 'stroke-linejoin', "arcs");
        g.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${w},${y}) scale(${this.size})`);
        this.node.appendChild(g);
    },
    /*
  creates a lituus curve of given radius (for the circles) that will be drawn on x,y coordinates (bottom left)
  the first curve draws an arc of 360 degrees (clockwise) and then it loops around a given number (from left to right shape)
  */
    lituus: function(){
        var x = this.x;
        var y = this.y;
        var radius = this.radius;
        var loops = this.loops;
        var w= y;
        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        for (var i = 0; i < loops; i++) {
        if(i<=loops-3){
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  
        A${radius} ${radius} ${0} ${0} ${1} ${x} ${y - 2 *  radius} 
        A${radius} ${radius} ${0} ${0} ${1} ${x} ${y + radius/10}
        `);
        g.appendChild(pathNode);
        y += radius/10;
        radius += radius/10;
        }else{
            var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathNode.setAttributeNS(null, 'd', `M${x} ${y}  
            A${radius} ${radius} ${0} ${0} ${1} ${x} ${y - 2 *  radius}
            A${radius} ${radius} ${0} ${0} ${1} ${x} ${y + radius/3} 
            `);
            g.appendChild(pathNode);
            y += radius/3;
            radius += radius/3;
        }
        }
        radius += radius/3;
        var pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathNode.setAttributeNS(null, 'd', `M${x} ${y}  
        A${radius} ${radius} ${0} ${0} ${1} ${x} ${y - 2 *  radius} 
        C${x+ radius} ${y - 2* radius } ${x +3 * radius} ${y- 3*radius/2} ${x + 4 * radius } ${y - 3*radius/2 }
        `);
        g.setAttributeNS(null, 'fill', this.fillColor);
        g.setAttributeNS(null, 'stroke', this.strokeColor);
        g.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        g.setAttributeNS(null, 'stroke-linejoin', "arcs");
        g.setAttributeNS(null,"transform", `translate(${this.translateX},${this.translateY}) 
        rotate(${this.degrees},${x},${w}) scale(${this.size})`);
        g.appendChild(pathNode);
        this.node.appendChild(g);
    }
};
