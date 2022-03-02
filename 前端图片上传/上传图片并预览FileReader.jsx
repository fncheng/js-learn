/** @format */
console.log(React);

function FileUpload() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>count++</button>
      </div>

      <input type="file" onChange={handleFiles} />
      <div className="preview"></div>
    </div>
  );
}

function handleFiles(e) {
  const preview = document.querySelector(".preview");
  const selectFile = e.target.files[0];
  // 创建img标签
  let img = document.createElement("img");
  img.classList.add("obj");
  preview.appendChild(img);
  const reader = new FileReader();
  /**
   * readAsDataURL 方法会读取指定的 Blob 或 File 对象。读取操作完成的时候，readyState 会变成已完成DONE，并触发 loadend (en-US) 事件，同时 result 属性将包含一个data:URL格式的字符串（base64编码）以表示所读取文件的内容。
   */
  reader.readAsDataURL(selectFile);
  reader.onload = (e) => {
    // console.log("e: ", e);
    img.src = e.target.result;
    img.width = 640;
    img.height = 320;
  };
}
