function loaiXe() {
  var loaiXe;
  var uberX = document.getElementById("uberX").checked;
  var uberSUV = document.getElementById("uberSUV").checked;
  var uberBlack = document.getElementById("uberBlack").checked;
  if (uberX) {
    loaiXe = "uberX";
  } else if (uberSUV) {
    loaiXe = "uberSUV";
  } else if (uberBlack) {
    loaiXe = "uberBlack";
  }
  return loaiXe;
}

function ThanhTien(soKM, thoiGianCho) {
  var thanhTien; //tổng tiền
  var lx = loaiXe(); //loại xe
  switch (lx) {
    case "uberX":
      if (soKM <= 1) {
        thanhTien = soKM * 8000 + thoiGianCho * 2000;
      }
      if (soKM > 1 && soKM <= 20) {
        thanhTien = 8000 + (soKM - 1) * 12000 + thoiGianCho * 2000;
      }
      if (soKM > 20) {
        thanhTien =
          8000 + 19 * 12000 + (soKM - 20) * 10000 + thoiGianCho * 2000;
      }
      break;
    case "uberSUV":
      if (soKM <= 1) {
        thanhTien = soKM * 9000 + thoiGianCho * 3000;
      }
      if (soKM > 1 && soKM <= 20) {
        thanhTien = 9000 + (soKM - 1) * 14000 + thoiGianCho * 3000;
      }
      if (soKM > 20) {
        thanhTien =
          9000 + 19 * 14000 + (soKM - 20) * 12000 + thoiGianCho * 3000;
      }
      break;
    case "uberBlack":
      if (soKM <= 1) {
        thanhTien = soKM * 10000 + thoiGianCho * 4000;
      }
      if (soKM > 1 && soKM <= 20) {
        thanhTien = 10000 + (soKM - 1) * 16000 + thoiGianCho * 4000;
      }
      if (soKM > 20) {
        thanhTien =
          10000 + 19 * 16000 + (soKM - 20) * 14000 + thoiGianCho * 4000;
      }
      break;
  }
  return thanhTien;
}

document.getElementById("btnTinhTien").onclick = function () {
  var soKM = document.getElementById("soKM").value;
  soKM = Number(soKM);
  var thoiGianCho = document.getElementById("thoiGianCho").value;
  thoiGianCho = Number(thoiGianCho);
  var xuatTien = document.getElementById("xuatTien");

  document.getElementById("divThanhTien").style.display = "block"; //Hiển thị div Thành tiền

  var thanhTien = ThanhTien(soKM, thoiGianCho);

  xuatTien.innerHTML = Number(thanhTien);
};

document.getElementById("hoaDon").onclick = function () {
  var tblHoaDon = document.getElementById("tblHoaDon");

  var soKM = document.getElementById("soKM").value;
  soKM = Number(soKM);

  var thoiGianCho = document.getElementById("thoiGianCho").value;
  thoiGianCho = Number(thoiGianCho);

  var trHoaDon = document.createElement("tr");

  var tdLoaiXe = document.createElement("td");
  var lx = loaiXe();
  switch (lx) {
    case "uberX":
      tdLoaiXe.innerHTML = "Uber X";
      break;
    case "uberSUV":
      tdLoaiXe.innerHTML = "Uber SUV";
      break;
    case "uberBlack":
      tdLoaiXe.innerHTML = "Uber Black";
      break;
  }

  var thanhTien = ThanhTien(soKM, thoiGianCho);

  var tdSoKM = document.createElement("td");
  tdSoKM.innerHTML = soKM;
  var tdThoiGianCho = document.createElement("td");
  tdThoiGianCho.innerHTML = thoiGianCho;
  var tdTongTien = document.createElement("td");
  tdTongTien.innerHTML = thanhTien;

  trHoaDon.appendChild(tdLoaiXe);
  trHoaDon.appendChild(tdSoKM);
  trHoaDon.appendChild(tdThoiGianCho);
  trHoaDon.appendChild(tdTongTien);

  tblHoaDon.appendChild(trHoaDon);
};
