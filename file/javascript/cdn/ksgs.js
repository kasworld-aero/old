var link = document.getElementById("toplink").href;
window.open(link,'_parent');
if (top !== self) top.location.href = self.location.href;
