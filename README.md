```javascript
// Print all the services and the offsets
var services = [];
var items = document.querySelectorAll('.servicesContainer a.service');

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var href = item.getAttribute('href');
    var slug = href.match(/console\.aws\.amazon\.com\/(\w+)\//)[1];
    var x = parseInt(item.children[0].style.backgroundPositionX.replace('px', ''), 10);
    services.push([x, slug]);
}

services = services.sort(function (a, b) {
    return a[0] < b[0] ? 1 : -1;
});

var js = 'var paths = {\n';
for (var j = 0; j < services.length; j++) {
    var service = services[j];
    js += '\t"' + service[1] + '": ' + '"/favicons/' + j + '.png"';

    if (j < services.length - 1) {
        js += ',';
    }

    js += '\n';
}
js += '};';
console.log(js);
```
