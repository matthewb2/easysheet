// src/hyperformula.js
// HyperFormula 통합 브리지: Luckysheet 셀 데이터를 HyperFormula 엔진으로
// 계산하고, 결과 값을 다시 Luckysheet 셀(v/m/ct)에 기록합니다.
// SUM, AVERAGE, IF 등 HyperFormula가 지원하는 함수를 사용할 수 있게 합니다.

(function () {
  "use strict";

  var HF = window.hyperformula; // bundled UMD global (주입된 번들)
  var hfInstance = null;

  function isFormulaCell(cell) {
    return !!cell && typeof cell.f === "string" && cell.f.length > 0;
  }

  // Luckysheet 셀 객체 -> HyperFormula 입력값
  function cellToHFValue(cell) {
    if (!cell) return null;
    if (isFormulaCell(cell)) return cell.f; // '=SUM(...)' 그대로
    var v = cell.v;
    if (v === null || v === undefined) return null;
    // 날짜/시간 문자열은 HyperFormula가 문자열로 취급 (숫자 변환은 시도하지 않음)
    return v;
  }

  // Luckysheet workbook(file) -> HyperFormula buildFromSheets 입력
  function fileToSheets(file) {
    var sheets = {};
    for (var i = 0; i < file.length; i++) {
      var sheet = file[i];
      var rows = sheet.data || [];
      var grid = [];
      for (var r = 0; r < rows.length; r++) {
        var row = rows[r] || [];
        var hfRow = [];
        for (var c = 0; c < row.length; c++) {
          hfRow.push(cellToHFValue(row[c]));
        }
        grid.push(hfRow);
      }
      sheets[sheet.name] = grid;
    }
    return sheets;
  }

  // HyperFormula 값 -> 표시 문자열
  function valueToDisplay(v) {
    if (v === null || v === undefined) return "";
    if (typeof v === "object" && v !== null) {
      // 에러 객체({ error: '...', message: '...' })
      if (v.error !== undefined) return "#" + (v.error || "ERROR");
      return "";
    }
    if (typeof v === "number") {
      // 정수는 그대로 표시, 소수는 일반 표기
      if (Number.isInteger(v)) return String(v);
      return String(v);
    }
    if (typeof v === "boolean") return v ? "TRUE" : "FALSE";
    return String(v);
  }

  // HyperFormula 계산 결과를 Luckysheet 셀에 기록 (수식 셀만, 일반 데이터는 유지)
  function writeBack(file) {
    if (!hfInstance) return;
    for (var i = 0; i < file.length; i++) {
      var sheet = file[i];
      var sheetId;
      try {
        sheetId = hfInstance.getSheetId(sheet.name);
      } catch (e) {
        continue;
      }
      var rows = sheet.data || [];
      for (var r = 0; r < rows.length; r++) {
        var row = rows[r];
        if (!row) continue;
        for (var c = 0; c < row.length; c++) {
          var cell = row[c];
          if (!isFormulaCell(cell)) continue;
          var val;
          try {
            val = hfInstance.getCellValue({ sheet: sheetId, row: r, col: c });
          } catch (e) {
            continue;
          }
          cell.v = val;
          cell.m = valueToDisplay(val);
          if (typeof val === "number") {
            cell.ct = { fa: "General", t: "n" };
          } else if (val !== null && typeof val === "object") {
            cell.ct = { fa: "General", t: "e" };
            cell.m = valueToDisplay(val);
          } else if (typeof val === "string") {
            cell.ct = cell.ct && cell.ct.t === "s" ? cell.ct : { fa: "General", t: "s" };
          } else {
            cell.ct = { fa: "General", t: "g" };
          }
        }
      }
      // 행이 없거나 비어 있으면 에러(에러 셀) 표시용으로 가장자리 셀 없음
    }
  }

  // 현재 워크북 기준으로 HyperFormula 인스턴스를 새로 만들고 결과를 기록한 뒤 다시 그립니다.
  function sync() {
    if (!HF) {
      return { ok: false, reason: "hyperformula-bundle-not-loaded" };
    }
    var file;
    try {
      file = luckysheet.getluckysheetfile();
    } catch (e) {
      return { ok: false, reason: "luckysheet-not-ready" };
    }
    var sheets = fileToSheets(file);
    try {
      if (hfInstance) {
        hfInstance.destroy();
        hfInstance = null;
      }
      hfInstance = HF.buildFromSheets(sheets, {
        licenseKey: "gpl-v3",
        smartRounding: true,
        precisionEpsilon: 1e-13,
      });
    } catch (e) {
      return { ok: false, reason: e && e.message ? e.message : String(e) };
    }
    writeBack(file);
    // 캔버스만 다시 그려 결과 표시 (네이티브 수식 엔진 강제 재계산은 사용하지 않음)
    if (luckysheet.luckysheetrefreshgrid) {
      try {
        luckysheet.luckysheetrefreshgrid();
      } catch (e) {}
    }
    return { ok: true };
  }

  function destroy() {
    if (hfInstance) {
      hfInstance.destroy();
      hfInstance = null;
    }
  }

  window.hyperformulaSync = {
    sync: sync,
    destroy: destroy,
    getInstance: function () {
      return hfInstance;
    },
  };
})();
