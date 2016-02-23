//Upload file via AJAX, native way.

var file = document.getElementById('input-upload-files').getAttribute('files')[0];
var formData = new FormData();
formData.append('file', file);
formData.append('params', {'action': 'upload'});

var xhrForm = new XMLHttpRequest();
xhrForm.onreadystatechange = function() {
if (xhrForm.readyState == 4 && xhrForm.status == 200) {
    var data = JSON.parse(xhrForm.responseText);
    console.log(data);
}
else if (xhrForm.readyState == 4) {
  console.log(xhrForm.responseText);
}
xhrForm.open('POST', '/upload');
xhrForm.send(formData);
