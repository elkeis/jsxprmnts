import imageUrl from './rick-and-morty.png';

const SLICE_CLASS = 'image-slice';
export default {
    imageSlice: {
        url: imageUrl,
        width: 510,
        height: 260,
        sliceCount: 2,
        sliceAngle: 76,
        sliceClass: SLICE_CLASS
    },
    css: `@keyframes slice-glitch {
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
            filter: hue-rotate(85deg);
            animation: slice-glitch .2s linear .0s infinite alternate;
        }
        .${SLICE_CLASS}:nth-child(even) {
                filter: hue-rotate(-85deg);
                animation: slice-glitch .2s linear .1s infinite alternate;
        }`
}