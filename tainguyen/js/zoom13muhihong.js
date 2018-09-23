/*ham cho zoom*/
var evt = new Event();
    var m = new Magnifier(evt);
    m.attach({
        thumb: '#thumb',
        large: 'img1/chuafix/thuochomuhihong.jpg',
        largeWrapper: 'preview',
        zoom: 3,
        zoomable: true
    });