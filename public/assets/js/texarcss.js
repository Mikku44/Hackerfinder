/*
    Copyright (c) 2024 MR.ANDA LA-NGU

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.


*/
// animations.js

let fade = [
    { opacity: 1, offset: 0 },
    { offset: 0.75 }
];

let shiny = [
    { opacity: 0.3, offset: 0.25 },
    { opacity: 1, offset: 0.75 }
];

let random = [
    { opacity: 0.0, offset: 0.0 },
    { opacity: 0.35, offset: 0.25 },
    { opacity: 0.1, offset: 0.5 },
    { opacity: 1, offset: 0.75 }
];



let type = (textLength) => [
    {
       
        width: "0",
        overflow: 'hidden',
        textWrap: "nowrap",
        offset: 0
    },
    // {
    //     width: 0.2
    // },
    {
        width: `${textLength + 1.25}ch`,
        offset: (textLength/100)%1
    }
];

let types = [
    {
       
        width: "0",
        overflow: 'hidden',
        offset: 0
    },
    // {
    //     width: 0.2
    // },
    {
        width: 1,
        offset: 0.75
    }
];

let scale = [
    { transform: 'scale(0)' },
    { transform: ' scale(1.2,1.2)' },
    { transform: ' scale(0.9,0.9)' },
    { transform: 'scale(1,1)' },
    { transform: 'scale(0)' },
];
let blura = [
    { opacity: 0.0, filter: 'blur(0px)', offset: 0.0 },
    { opacity: 0.35, filter: 'blur(2px)', offset: 0.25 },
    { opacity: 0.1, filter: 'blur(5px)', offset: 0.5 },
    { opacity: 1, filter: 'blur(0px)', offset: 0.75 },
    { opacity: 0.0, filter: 'blur(0px)', offset: 1.0 },
];

let wave = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-10px)' },
    { transform: 'translateY(2px)' },
    { transform: 'translateY(0)' }
];

let animationsDict = {
    "fade": fade,
    "shiny": shiny,
    "random": random,
    "type": type,
    "types": types,
    "wave": wave,
    "scale": scale,
    "blur": blura,
};

let durationDict = {
    "fade": true,
    "shiny": true,
    "random": false,
    "type": true,
    "wave": true,
    "scale": true,
    "blur": true,
};

function slideDuration({ index, duration, len }) {
    return 10 * index + duration;
}

function randomDuration({ duration }) {
    return duration - getRandomInt(9) * 100;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function applyAnimations() {
    document.addEventListener("DOMContentLoaded", () => {
        const regex = /animate-\[([^\]]+)\]/;
        const regexType = /separate/;
        const regexDuration = /duration-\[([^\]]+)\]/;
        const regexInfinite = /infinite-\[([^\]]+)\]/;
        const regexColor = /color-\[([^\]]+)\]/;

        document.querySelectorAll('*').forEach(target => {
            let text = target.textContent;
            const className = target.className;

            const matches = className.match(regex);
            const matchesType = className.match(regexType);
            const matchesDuration = className.match(regexDuration);
            const matchesInfinite = className.match(regexInfinite);
            const matchesColor = className.match(regexColor);

            if (matches) {
                let animation = animationsDict[matches[1]];
                let duration = matchesDuration ? parseInt(matchesDuration[1]) : 1000;
                let iterations = matchesInfinite ? parseInt(matchesInfinite[1]) : Infinity;
                let color = matchesColor ? matchesColor[1] : "inherit";

                target.style.display = "flex";
                target.style.flexWrap = "wrap";

                if (!matchesType) {
                    if(matches[1] !== "type")animation[0]["color"] = color;
                    var textLength = target.innerText.length; 
                    console.log((textLength/100)%1)
                    matches[1] !== "type" ?
                    target.animate(animation, { duration, iterations }):
                    target.animate(animationsDict["type"](textLength), { duration, iterations })
                } else {
                    let fragment = document.createDocumentFragment();
                    for (let i = 0; i < text.length; i++) {
                        if (text[i] === " " && text[i - 1] === " ") continue;
                        let span = document.createElement("span");
                        span.textContent = text[i] === " " ? "\u00A0" : text[i];
                        fragment.appendChild(span);
                    }
                    target.innerHTML = "";
                    target.appendChild(fragment);

                    Array.from(target.children).forEach((child, index) => {
                        if(matches[1] !== "type")animation[0]["color"] = color  ;
                        let animDuration = durationDict[matches[1]]
                            ? slideDuration({ index, duration, len: target.children.length })
                            : randomDuration({ duration });
                            matches[1] !== "type" ? 
                            child.animate(animation, { duration: animDuration, iterations }):
                            child.animate(animationsDict["types"], { duration: animDuration })
                        
                    });
                }
            }
        });
    });
}

// Export functions and objects
exports =

    (applyAnimations)
    ;
