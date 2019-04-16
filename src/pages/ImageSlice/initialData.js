import imageUrl from './rick-and-morty.png';

export const SLICE_CLASS = 'image-slice';
export const DRUNK_SLICE_CLASS='drunk-image-slice';
const SLICE_CSS = `@keyframes slice-glitch {
    0% {
        transform: translateX(0);
    }
    30% {
        transform: translateX(-5px);
    }
    60% {
        transform: translateX(5px);
    }
    100% {
        transform: translateX(0);
    }
    
}
        
        
.${SLICE_CLASS}:nth-child(odd) {
    filter: hue-rotate(45deg);
    animation: slice-glitch .2s linear .0s infinite alternate;
}
.${SLICE_CLASS}:nth-child(even) {
        filter: hue-rotate(-45deg);
        animation: slice-glitch .2s linear .1s infinite alternate;
}

@keyframes drunk-style {
    0% {
        transform: translateX(0);
    }
    50%{
       transform: translateX(-3px);
    }
    100% {
        transform: translateX(0px);
    }
    
}
        
        
.${DRUNK_SLICE_CLASS}:nth-child(5n+0) {
    animation: drunk-style .5s ease-in-out .0s infinite;
}
.${DRUNK_SLICE_CLASS}:nth-child(5n+1) {
    animation: drunk-style .5s ease-in-out .1s infinite;
}
.${DRUNK_SLICE_CLASS}:nth-child(5n+2) {
        animation: drunk-style .5s ease-in-out .2s infinite;
}
.${DRUNK_SLICE_CLASS}:nth-child(5n+3) {
    animation: drunk-style .5s ease-in-out .3s infinite;
}
.${DRUNK_SLICE_CLASS}:nth-child(5n+4) {
        animation: drunk-style .5s ease-in-out .4s infinite;
}`;

export default {
    imageSlice: {
        url: imageUrl,
        width: 510,
        height: 260,
        sliceCount: 2,
        sliceAngle: 76,
        sliceClass: SLICE_CLASS
    },
    css: SLICE_CSS
}