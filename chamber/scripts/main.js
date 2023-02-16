const day = new Date()

let today = day.getDay()

if (today == 1 || today == 2) {
    document.getElementById('banner').styles.display = 'block';
} 
else {
    document.getElementById('banner').styles.display = 'none';
};


// let banner = document.getElementByID('banner'
// banner.styles.display = block