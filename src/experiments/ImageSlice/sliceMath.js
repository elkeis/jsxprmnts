function toRad(deg) {
    return deg * Math.PI / 180;
}

/**
 * 
 * @param {*} w width of photo 
 * @param {*} h height of photo
 * @param {*} n number of slices
 * @param {*} alpha angle of cut
 */
export function calculateCssValues (w, h, n, alpha) {
    if (alpha < 0) {
        alpha = 360 + alpha % 360
    }
    const cosA = Math.abs(Math.cos(toRad(alpha)));
    const sinA = Math.abs(Math.sin(toRad(alpha)));
    const H = h * cosA + w * sinA;
    const W = w * cosA + h * sinA;
    const dX = - (W - w) / 2;
    const dY = - (H - h) / 2; 
    const dx = [];
    const dy = [];
    const sW = W;
    const sH = H/n;
    for (let i = 0; i < n; i++) {
        dy.push(-sH*i - dY);
        dx.push(-dX);
    }
    return {w, h, n, alpha, cosA, sinA, H, W, dX, dY, dx, dy, sH, sW };
}