let faceParameters;

document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("fileInput");
  const canvas = document.getElementById("canvas");
  const canvasContainer = document.getElementById("canvasContainer");

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);

    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const uint8Buffer = new Uint8Array(arrayBuffer);
      let width = faceParameters.width;
      let height = faceParameters.height;
      let num_col = 16;

      var faceDataSize = faceParameters.halfHeight
        ? (width * height * 3) / 8 / 2
        : (width * height * 3) / 8;

      var faceCount =
        faceParameters.count === -1
          ? Math.floor(uint8Buffer.byteLength / faceDataSize)
          : faceParameters.count;

      var faceNames = faceParameters.names;

      for (let i = 0; i < faceCount; i++) {
        var pos = i * faceDataSize;
        var faceData = uint8Buffer.slice(pos, pos + faceDataSize);
        faceImage = dataToImage(
          faceData,
          width,
          height,
          faceParameters.halfHeight
        );

        var captionText = faceNames[i] === "" ? "(無名)" : faceNames[i];

        createImage(faceImage, canvasContainer, i, captionText);
        const figures = canvasContainer.querySelectorAll("figure");

        // 在每個 figure element 上綁定 click event
        figures.forEach((figure) => {
          figure.addEventListener("click", (event) => {
            event.stopPropagation(); // 阻止事件冒泡，避免多個 figure 同時被選中
            const isSelected = figure.classList.toggle("selected"); // 切換選中狀態
            if (isSelected) {
              figure.style.outline = "3px solid red"; // 設置紅色編框
            } else {
              figure.style.outline = "none"; // 取消邊框樣式
            }
          });
        });

        // 給指定按鈕綁定 click event
        const btn = document.getElementById("apply");
        btn.addEventListener("click", (event) => {
          const selectedFigure = canvasContainer.querySelector(".selected");
          if (selectedFigure) {
            // selectedFigure.remove();
            selectedFigure.classList.add("dirty");
            selectedFigure.style.backgroundColor = "green";
          }
        });
      }
    };
  });

  let dropzone = document.getElementById("dropzone");
  let mycanvas = document.getElementById("myCanvas");
  let resizedImg;

  dropzone.addEventListener("drop", function (event) {
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    if (file.type.match(/image.*/)) {
      let img = new Image();
      img.onload = function () {
        let w = img.width;
        let h = img.height;
        let scale = Math.max(64 / w, 80 / h);
        console.log("scale", scale, 64 / w, 80 / h);
        w *= scale;
        h *= scale;
        let tempCanvas = document.createElement("canvas");
        let ctx = tempCanvas.getContext("2d");
        tempCanvas.width = w;
        tempCanvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);

        resizedImg = new Image();
        resizedImg.src = tempCanvas.toDataURL("image/jpeg");

        // rgb quant
        var opts = {
          colors: 8,
          method: 1,
          dithKern: "Atkinson",
          palette: faceParameters.palette.map(hexToRgb),
        };
        var q = new RgbQuant(opts);

        mycanvas.width = 64;
        mycanvas.height = 80;
        ctx = mycanvas.getContext("2d");
        let x = (64 - w) / 2;
        let y = (80 - h) / 2;
        ctx.drawImage(resizedImg, x, y, w, h);

        out = q.reduce(mycanvas);
        console.log("resizedImg", resizedImg);
        console.log("mycanvas", mycanvas);
        console.log("out", out);
        finalImage = ctx.createImageData(64, 80);
        finalImage.data.set(out);
        ctx.putImageData(finalImage, 0, 0);
      };
      let reader = new FileReader();
      reader.onload = function (event) {
        img.src = event.target.result;

        var imgEl = document.createElement("img");
        imgEl.src = event.target.result;

        // 添加图像元素到拖放区域
        // var dropzone = document.getElementById("dropzone");
        dropzone.innerHTML = "";
        dropzone.appendChild(imgEl);
      };
      reader.readAsDataURL(file);
    }
  });
});

function dataToImage(data, width, height, halfHeight) {
  var selectBox = document.getElementById("selectOption");
  var hh = optionDict[selectBox.value].halfHeight;

  const imageData = new ImageData(width, height);
  var colorIndexes = toColorIndexes(data);
  var colors = optionDict[selectBox.value].palette.map(hexToRgb);

  for (i = 0; i < colorIndexes.length; i++) {
    let x = i % width;
    let y = Math.floor(i / width);
    var c = colors[colorIndexes[i]];
    if (hh) {
      let idx = (2 * y * width + x) * 4;
      imageData.data[idx] = c[0];
      imageData.data[idx + 1] = c[1];
      imageData.data[idx + 2] = c[2];
      imageData.data[idx + 3] = 255;
      idx = ((2 * y + 1) * width + x) * 4;
      imageData.data[idx] = c[0];
      imageData.data[idx + 1] = c[1];
      imageData.data[idx + 2] = c[2];
      imageData.data[idx + 3] = 255;
    } else {
      let idx = (y * width + x) * 4;
      imageData.data[idx] = c[0];
      imageData.data[idx + 1] = c[1];
      imageData.data[idx + 2] = c[2];
      imageData.data[idx + 3] = 255;
    }
  }
  return imageData;
}

function toColorIndexes(data) {
  var groups = grouper(data, 3);

  var indexes = [];
  groups.forEach(function (element) {
    for (i = 7; i >= 0; --i) {
      n =
        (((element[0] >> i) & 1) << 2) |
        (((element[1] >> i) & 1) << 1) |
        ((element[2] >> i) & 1);
      indexes.push(n);
    }
  });

  return indexes;
}

function grouper(arr, size, fillValue = null) {
  const groups = [];
  for (let i = 0; i < arr.length; i += size) {
    groups.push(arr.slice(i, i + size));
  }
  if (fillValue !== null && groups.length * size < arr.length) {
    const fillLength = size - (arr.length % size);
    const fillArr = new Array(fillLength).fill(fillValue);
    groups.push([...arr.slice(groups.length * size), ...fillArr]);
  }
  return groups;
}

function checkButtonStatusByOption() {
  deleteSubtree(canvasContainer);
  checkButtonStatus();
}

function checkButtonStatusByFileInput() {
  deleteSubtree(canvasContainer);
  checkButtonStatus();
}

/* 檢查按鈕狀態 */
function checkButtonStatus() {
  var selectBox = document.getElementById("selectOption");
  var fileInput = document.getElementById("fileInput");
  var downloadButton = document.getElementById("downloadButton");
  var selectedOption = document.getElementById("selectedOption");

  if (selectBox.value !== "" && fileInput.value !== "") {
    // 如果選項和檔案都已選，就啟用下載按鈕
    downloadButton.disabled = false;
  } else {
    // 否則就禁用下載按鈕
    downloadButton.disabled = true;
  }
  if (selectBox.value !== "") {
    // 如果選項已選，就啟用檔案上傳按鈕
    fileInput.disabled = false;
    faceParameters = optionDict[selectBox.value];
    selectedOption.innerText = faceParameters.filename;
  } else {
    // 否則就禁用檔案上傳按鈕
    fileInput.disabled = true;
    selectedOption.innerText = "";
  }
}

/* 下載檔案 */
function downloadFile() {
  alert("Downloading file...");
}

function deleteSubtree(element, isRoot = true) {
  // 遍歷每個子元素並遞迴刪除其子樹
  while (element.firstChild) {
    deleteSubtree(element.firstChild, false);
  }

  // 如果該元素非根元素，從父元素中刪除該子元素
  if (element.parentNode !== null && !isRoot) {
    element.parentNode.removeChild(element);
  }
}

function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return [r, g, b];
}

function formatString(str, ...args) {
  return str.replace(/{(\d+)}/g, (match, index) => args[index] || "");
}

function createImage(imageData, parentNode, i, captionText) {
  const figure = document.createElement("figure");
  const canvas = document.createElement("canvas");
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const context = canvas.getContext("2d");
  context.putImageData(imageData, 0, 0);
  const dataURL = canvas.toDataURL();

  /*/ 自定義檔案名稱並創建下載連結
  const filename = formatString("face_{0}_{1}.png", i + 1, captionText);
  const a = document.createElement("a");
  a.href = dataURL;
  a.download = filename;
  parentNode.appendChild(a);

  // 點擊下載連結時，下載圖片
  a.click();
  parentNode.removeChild(a);
  */

  const img = document.createElement("img");
  img.src = dataURL;
  const figcaption = document.createElement("figcaption");
  figcaption.appendChild(document.createTextNode(i + 1));
  figcaption.appendChild(document.createElement("br"));
  figcaption.appendChild(document.createTextNode(captionText));
  figure.appendChild(img);
  figure.appendChild(figcaption);
  parentNode.appendChild(figure);
}
