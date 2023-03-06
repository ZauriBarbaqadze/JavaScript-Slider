var sliderData = [
    {
        url: "https://facebook.com",
        img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
        title: "This Is Image"
    },
    {
        url: "https://youtube.com",
        img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        title: "This Is Image 2"
    },
    {
        url: "https://friv.com",
        img: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
        title: "This Is Image 3"
    }
]

var slider = document.querySelector('#slider');
var right = document.querySelector('#right');
var left = document.querySelector('#left');
var item = document.querySelector('item');

var curentIndex = 0;

function createAtag(url) {
    let aElement = document.createElement('a');
    aElement.href = url
    return aElement
}

function createImige(url) {
    let imgElement = document.createElement('img');
    imgElement.src = url
    return imgElement
}
setInterval(() => {
    if(curentIndex == sliderData.length - 1) {
        curentIndex = -1;
    }
    if(curentIndex < sliderData.length -1) {
        curentIndex++;
        setSlider(curentIndex)
    }
}, 5000);
function setSlider(index) {
    let curentSlide = sliderData[index];
    let element = createAtag(curentSlide.url);
    element.appendChild(createImige(curentSlide.img));
    slider.innerHTML = ''
    slider.appendChild(element);
}
right.addEventListener('click', () => {
    if(curentIndex == sliderData.length - 1) {
        curentIndex = -1;
    }
    if(curentIndex < sliderData.length - 1) {
        curentIndex++;
        setSlider(curentIndex);
    }
})
left.addEventListener('click', () => {
    if(curentIndex == sliderData.length - 1) {
        curentIndex = -1;
    }
    if(curentIndex < sliderData.length - 1) {
        curentIndex--;
        setSlider(curentIndex);
    }
})

left.addEventListener('click', () => {
    if(curentIndex == 0) {
        curentIndex = sliderData.length;
    }
    if(curentIndex !== 0) {
        curentIndex--;
        setSlider(curentIndex);
    }
})

setSlider(curentIndex);


