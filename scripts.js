function removeLineBreaks() {
  var input = document.getElementById("input").value;
  var output = input.replace(/\n/g, " ").replace(/\s+/g, " ");
  document.getElementById("input").value = output;
}

function copyToClipboard() {
  let textarea = document.getElementById("input");
  textarea.select();
  document.execCommand("copy");
  document.getElementById("copyButtonIcon").classList.remove('bi-clipboard');
  document.getElementById("copyButtonText").textContent = "Copied!";
  document.getElementById("copyButtonIcon").classList.add('bi-clipboard-check');
  setTimeout(() => {
    document.getElementById("copyButtonIcon").classList.add('bi-clipboard');
    document.getElementById("copyButtonText").textContent = "Copy";
  }, 1000);
}

function toSentenceCase() {
  var str = document.getElementById("input").value;
  str = str.toLowerCase();
  document.getElementById("input").value = str.replace(/(^|[.!?])(\s*)([a-z])/g, (match, p1, p2, p3) => p1 + p2 + p3.toUpperCase());
}

