const gaugeElement = document.querySelector(".gauge");

function setGaugeValue2(gauge, val) {
  const value = val / 100 / 10;
  if (value < 0 || value > 1) {
    return;
  }
  const rotate = `rotate(${value / 2}turn)`;
  const fill = gauge.querySelector(".gauge__fill").style;
  const cover = gauge.querySelector(".gauge__cover");
  fill.transform = rotate;
  cover.textContent = val;

  if (val >= 0 && val <= 399) {
    fill.backgroundColor = "#ff4c4c";
  } else if (val >= 400 && val <= 599) {
    fill.backgroundColor = "#ffa64d";
  } else if (val >= 600 && val <= 799) {
    fill.backgroundColor = "#f2ec30";
  } else if (val >= 800 && val <= 899) {
    fill.backgroundColor = "#a3dc28";
  } else if (val >= 900) {
    fill.backgroundColor = "#00812b";
  }
}

function fn(val) {
  setGaugeValue2(gaugeElement, val);
}
