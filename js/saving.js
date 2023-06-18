"use strict";
var a4 = [841.89, 595.28]; // 2de site for a4 size paper width and height

/* HTML-pagina wordt opgeslagen - div met id divID */
function convertHTMLtoPDF() {
    const {
        jsPDF
    } = window.jspdf;
    var pdfjs = document.querySelector('#divID');

  var doc = new jsPDF('l', 'mm', 'a4');
    
    var options = {
        callback: function (doc) {
            doc.save("planner.pdf");
        },
        x: 20, //positie van divID maar in units 1 units is 8 px
        y: 0
    };

     var contentWidth = pdfjs.offsetWidth;
    var pageWidth = a4[1];
    var scale = pageWidth / contentWidth;

    // Controleer of de inhoud groter is dan één pagina en schaal het indien nodig
    if (contentHeight > pageHeight) {
        pdfjs.style.transformOrigin = 'top left';
        pdfjs.style.transform = 'scale(0.35)';
        options.scale = scale;
    }

    doc.html(pdfjs, options);
}
