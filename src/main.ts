import initSqlJs from 'sql.js'
import { version } from "../package.json"
import sqlWasm from "sql.js/dist/sql-wasm.wasm?url"
const upload : HTMLDivElement = document.getElementById("upload") as HTMLDivElement;
const db : HTMLInputElement = document.getElementById("db") as HTMLInputElement;
const verDOM : HTMLSpanElement = document.getElementById("version") as HTMLSpanElement;
verDOM.innerHTML = `v${version}`;
const a = document.createElement('a');
const SQL = await initSqlJs({
  locateFile: () => sqlWasm
});
upload.onclick = () => {
  db.click();
}
db.onchange = e => {
  const files = (e.target as HTMLInputElement).files;
  if (files !== null && files.length !== 0) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const Uints = new Uint8Array(reader.result as ArrayBuffer);
      try {
        const database = new SQL.Database(Uints);
        database.run("PRAGMA user_version = 4");
        const result = new Blob([database.export()]);
        const URL = window.URL.createObjectURL(result);
        a.href = URL;
        a.download = `${file.name.replace('.db', '')}-processed.db`;
        a.click();
      }
      catch (e) {
        if ((e as Error).message === "file is not a database") {
          alert("你的文件并非数据库文件。请上传正确的文件！");
        }
      }
    }
    reader.readAsArrayBuffer(file);
  }
}
export {}