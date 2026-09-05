// src/io.js
// 시트의 내용을 열기/저장/다른 이름으로 저장하는 기능 (메뉴 연동)
// 수식은 Luckysheet 기본 제공 함수 엔진을 사용합니다.

// ----- 현재 파일 상태 추적 -----
let currentFilePath = null; // 열어둔 파일의 절대 경로 (없으면 null)
let currentFileName = 'Sheet1'; // 표시용 파일명

// 열어둔 파일 정보를 갱신
function setCurrentFile(filePath, fileName) {
  currentFilePath = filePath || null;
  currentFileName = fileName || 'Sheet1';
}

function getCurrentFileName() {
  return currentFileName;
}

// ----- 셀/시트 직렬화 -----
// 셀 객체를 문자열 값으로 변환
function cellToString(cell) {
  if (!cell) return '';
  const val = cell.v;
  if (val === null || val === undefined) return '';
  // 수식 셀은 계산된 값(v) 대신 원본 수식(f)을 저장
  if (typeof cell.f === 'string' && cell.f.length > 0) return cell.f;
  if (typeof val === 'object') {
    const display = val.m !== undefined && val.m !== null ? val.m : val.v;
    return display === undefined || display === null ? '' : String(display);
  }
  return String(val);
}

// 셀 값 CSV 이스케이프 (콤마, 따옴표, 줄바꿈 처리)
function csvEscape(value) {
  const str = String(value);
  if (/[",\r\n]/.test(str)) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

// 시트 데이터 -> CSV 문자열
function sheetToCSV(sheet) {
  const rowsData = sheet.data || [];
  if (!rowsData.length) return '\ufeff';

  const lines = [];
  for (let r = 0; r < rowsData.length; r++) {
    const row = rowsData[r] || [];
    const cols = [];
    for (let c = 0; c < row.length; c++) {
      cols.push(csvEscape(cellToString(row[c])));
    }
    lines.push(cols.join(','));
  }

  // 한글 깨짐 방지용 BOM 추가
  return '\ufeff' + lines.join('\r\n');
}

// 현재 활성 시트를 CSV 문자열로 변환
function getActiveSheetCSV() {
  const sheet = luckysheet.getSheet();
  if (!sheet) return null;
  return sheetToCSV(sheet);
}

// 저장 완료 후 공통 처리 (알림 및 현재 파일명 갱신)
function handleSaveResult(result, savedFilePath) {
  if (result && result.success) {
    if (savedFilePath) {
      currentFilePath = savedFilePath;
      const base = String(savedFilePath).split(/[\\/]/).pop() || currentFileName;
      currentFileName = base;
    }
    console.log('CSV 파일 저장 완료:', savedFilePath || currentFilePath);
    return true;
  }
  return false;
}

// ----- 저장 (연 파일에 덮어쓰기, 없으면 저장 다이얼로그) -----
async function saveSheetToCSV() {
  const csvContent = getActiveSheetCSV();
  if (csvContent === null) {
    alert('저장할 시트가 없습니다.');
    return;
  }

  if (currentFilePath) {
    // 열어둔 파일이 있으면 그 경로에 덮어쓰기
    const result = await window.electronAPI.writeCsv(currentFilePath, csvContent);
    if (handleSaveResult(result, currentFilePath)) {
      alert('저장되었습니다.');
    } else if (result && result.error) {
      alert('저장 중 오류가 발생했습니다: ' + result.error);
    }
  } else {
    // 열어둔 파일이 없으면 저장 다이얼로그
    const result = await window.electronAPI.saveCSV(csvContent);
    if (handleSaveResult(result, result && result.filePath)) {
      alert('저장이 완료되었습니다.');
    } else if (result && result.error) {
      alert('저장 중 오류가 발생했습니다: ' + result.error);
    }
  }
}

// ----- 다른 이름으로 저장 (항상 저장 다이얼로그) -----
async function saveSheetToCSVAs() {
  const csvContent = getActiveSheetCSV();
  if (csvContent === null) {
    alert('저장할 시트가 없습니다.');
    return;
  }

  const result = await window.electronAPI.saveCSV(csvContent);
  if (handleSaveResult(result, result && result.filePath)) {
    alert('다른 이름으로 저장이 완료되었습니다.');
  } else if (result && result.error) {
    alert('저장 중 오류가 발생했습니다: ' + result.error);
  }
}

// ----- CSV 파싱 (열기 시 사용) -----
function parseCsv(text) {
  const rows = [];
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '') continue;
    const row = [];
    const fields = lines[i].split(',');
    for (let j = 0; j < fields.length; j++) {
      let val = fields[j].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith('\u201c') && val.endsWith('\u201d'))) {
        val = val.slice(1, -1);
      }
      if (val.startsWith('=')) {
        // 수식 셀: Luckysheet 기본 제공 함수 엔진이 처리하도록 f로 저장
        row.push({ v: null, f: val, ct: { fa: 'General', t: 'g' } });
      } else {
        row.push({ v: val, ct: { fa: 'General', t: 'g' } });
      }
    }
    rows.push(row);
  }
  return rows;
}

function csvToSheetData(text) {
  return parseCsv(text);
}

// ----- 열기 (파일 다이얼로그 -> 시트 로드) -----
async function openSheetFromCSV() {
  const result = await window.electronAPI.openCsv();
  if (!result) return; // 취소

  const fileName = result.fileName;
  const sheetData = csvToSheetData(result.content);

  luckysheet.destroy();

  luckysheet.create({
    container: 'luckysheet',
    lang: 'ko',
    data: [{ name: fileName, color: "", status: "1", order: "0", data: sheetData, config: {} }]
  });

  // 열어둔 파일 경로/이름 추적
  currentFilePath = result.filePath || null;
  currentFileName = fileName;

  // 툴바 파일명 표시 갱신
  const nameEl = document.getElementById('file-name');
  if (nameEl) nameEl.textContent = fileName;
}

// ----- 메뉴(파일 > 열기/저장/다른 이름으로 저장) 이벤트 연결 -----
if (typeof window.electronAPI !== 'undefined') {
  if (window.electronAPI.onOpenFile) window.electronAPI.onOpenFile(openSheetFromCSV);
  if (window.electronAPI.onSaveCSV) window.electronAPI.onSaveCSV(saveSheetToCSV);
  if (window.electronAPI.onSaveAsCSV) window.electronAPI.onSaveAsCSV(saveSheetToCSVAs);
}

// 외부(index.html)에서 사용할 수 있도록 노출
window.EasySheetIO = {
  save: saveSheetToCSV,
  saveAs: saveSheetToCSVAs,
  open: openSheetFromCSV,
  setCurrentFile,
  getCurrentFileName,
  parseCsv,
  csvToSheetData
};