const viewButton = document.getElementById('viewCV');

viewButton.addEventListener('click', () => {
    // URL of the PDF in static folder
    const pdfUrl = '/documents/MIE_Candidate_Kgobe_SJN_JAVA08.pdf';

    // Open PDF in a new browser tab
    window.open(pdfUrl, '_blank');
});