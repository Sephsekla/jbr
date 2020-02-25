import Typed from 'typed.js';
import he from 'he';

const gitMessage = `git clone joebr.git
\`Cloning into 'joebr'...\`
\`remote: Enumerating objects: 148, done.\`
\`remote: Counting objects: 100% (148/148), done.\`
\`remote: Compressing objects: 100% (107/107), done.\`
\`remote: Total 1652 (delta 55), reused 113 (delta 36), pack-reused 1504\`
\`Receiving objects: 100% (1652/1652), 2.77 MiB | 4.39 MiB/s, done.\`
\`Resolving deltas: 100% (920/920), done.\`

\`Hover over the site to see what's going on!\``;

/**
 *Add realtime typing to home banners
 *
 */
function homeType() {

    let options = {
        strings: [gitMessage, gitMessage],
        typeSpeed: 30,
        smartBackspace: true,
        shuffle: true,
        loop: false,
        onComplete: function () {
            initialComplete = true;
        }
    };

    let initialComplete = false; // Ensure that our mouseenter effect only happens once the initial message is completed.

    let typed = new Typed('#home-screen', options);  // Onload we type out the git clone message

    $('section, div').mouseenter( // On mouseenter we use the html structure of the div.
        function () {
            if (initialComplete) {
                options.strings = [he.encode($(this).html())];
                options.typeSpeed = 5;

                typed.destroy();

                typed = new Typed('#home-screen', options);
            }

        }
    );

}

export default homeType;