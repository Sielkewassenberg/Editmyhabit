"use strict";
var a4 = [595.28, 841.89]; // 2de site for a4 size paper width and height

/* HTML-pagina wordt opgeslagen - div met id divID */
function convertHTMLtoPDF() {
    const {
        jsPDF
    } = window.jspdf;
    var pdfjs = document.querySelector('#divID');

    var doc = new jsPDF({
        unit: 'px',
        format: 'a4'
    });

    var options = {
        callback: function (doc) {
            doc.save("planner.pdf");
        },
        x: 80, //positie van divID maar in units 1 units is 8 px
        y: 0
    };

    var contentHeight = pdfjs.offsetHeight;
    var pageHeight = a4[1];
    var scale = pageHeight / contentHeight;

    // Controleer of de inhoud groter is dan één pagina en schaal het indien nodig
    if (contentHeight > pageHeight) {
        pdfjs.style.transformOrigin = 'top left';
        pdfjs.style.marginRight = '15%';
        pdfjs.style.transform = 'scale(0.5)';
        options.scale = scale;
    }

    doc.html(pdfjs, options);
}