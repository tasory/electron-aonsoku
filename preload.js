const { contextBridge } = require('electron');

// My custom css
function injectCustomCss() {
    const style = document.createElement('style');
    style.textContent = `
	.mr-12 {
		padding-top: 150px;
	}
    `;
    document.head.appendChild(style);
}

window.addEventListener('DOMContentLoaded', () => {
    injectCustomCss();
});
