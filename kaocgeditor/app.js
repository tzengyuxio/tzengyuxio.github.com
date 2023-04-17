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

      // canvas.width = width * num_col;
      // canvas.height = height * Math.ceil(faceCount / num_col);

      //   const ctx = canvas.getContext("2d");
      for (let i = 0; i < faceCount; i++) {
        var pos = i * faceDataSize;
        var posX = (i % num_col) * width;
        var posY = Math.floor(i / num_col) * height;
        var faceData = uint8Buffer.slice(pos, pos + faceDataSize);
        faceImage = dataToImage(
          faceData,
          width,
          height,
          faceParameters.halfHeight
        );
        // ctx.putImageData(faceImage, posX, posY);

        // var captionText = formatString(
        //   "{0} {1}",
        //   i + 1,
        //   faceNames[i] === "" ? "(無名)" : faceNames[i]
        // );
        var captionText = faceNames[i] === "" ? "(無名)" : faceNames[i];

        // add a new canvas in the container, and copy the image data to it
        var newFigure = document.createElement("figure");
        var newCanvas = document.createElement("canvas");
        var newFigcaption = document.createElement("figcaption");
        newCanvas.width = width;
        newCanvas.height = height;
        var newCtx = newCanvas.getContext("2d");
        newCtx.putImageData(faceImage, 0, 0);
        newFigcaption.appendChild(document.createTextNode(i + 1));
        newFigcaption.appendChild(document.createElement("br"));
        newFigcaption.appendChild(document.createTextNode(captionText));
        newFigure.appendChild(newCanvas);
        newFigure.appendChild(newFigcaption);
        canvasContainer.appendChild(newFigure);
      }
    };
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

// 处理拖放事件
function handleDrop(event) {
  event.preventDefault();

  // 获取拖放事件中的文件列表
  var files = event.dataTransfer.files;

  // 循环处理每个文件
  for (var i = 0; i < files.length; i++) {
    // 只处理图像类型的文件
    if (files[i].type.match(/^image\//)) {
      var reader = new FileReader();

      // 获取文件并在拖放区域内显示
      reader.onload = function (event) {
        var img = document.createElement("img");
        img.src = event.target.result;

        // 添加图像元素到拖放区域
        var dropzone = document.getElementById("dropzone");
        dropzone.innerHTML = "";
        dropzone.appendChild(img);
      };

      // 读取文件
      reader.readAsDataURL(files[i]);
    }
  }
}

// 在画布上绘制圆形
// drawCircle();
