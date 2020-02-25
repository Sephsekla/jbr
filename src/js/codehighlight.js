import Prism from 'prismjs';


/**
 * Highlight all code with prismjs
 *
 */
function initHighlight() {
    Prism.highlightAll(); // Hightlight all code with prismjs

    setTimeout(() => { // Just in case something loads in after page load
        Prism.highlightAll();
    }, 0);
}

export default initHighlight;