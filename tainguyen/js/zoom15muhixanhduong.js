/*ham cho zoom*/
var evt = new Event();
    var m = new Magnifier(evt);
    m.attach({
        thumb: '#thumb',
        large: 'img1/chuafix/thuochomuhiblue.jpg',
        largeWrapper: 'preview',
        zoom: 3,
        zoomable: true
    });