document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.getElementById("paragraph");
  const text = paragraph.textContent;

  // Regular expression to find words over 8 characters
  const regex = /\b\w{9,}\b/g;

  // Replace matching words with highlighted version
  const highlightedText = text.replace(regex, function(match) {
    return `<span class="highlighted">${match}</span>`;
  });

  paragraph.innerHTML = highlightedText;

  const wordCount = document.getElementById("wordCount");
  wordCount.textContent += text.split(/\s+/).length;

  const sentences = paragraph.innerHTML.split(". ");
  paragraph.innerHTML = sentences.join(".<br>");

  paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, "\u{1F914}").replace(/!/g, "\u{1F632}");
});
