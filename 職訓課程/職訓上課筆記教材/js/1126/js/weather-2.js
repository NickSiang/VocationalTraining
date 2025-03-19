// let a = [
//   [1,2,3],
//   [4,5,6]
// ];
// console.log(a[0]);

const regionAll = [
  ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣',
    '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'
  ],
  ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣'],
  ['臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣'],
  ['臺南市', '高雄市', '屏東縣'],
  ['宜蘭縣', '花蓮縣', '臺東縣'],
  ['澎湖縣', '金門縣', '連江縣'],
]

const all = document.querySelector('.all')
const cardRegion = document.querySelector('.card-region');
const allBtn = document.querySelector('.all-btn');
const btnAll = document.querySelectorAll('button');

let nowRegion = regionAll[0];
console.log(nowRegion);


const url =
  'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-0FAD15EC-3C0A-4AC6-B426-34FD9DD873FC';
let orginalData;
let orgData = {}; // 整理資料存放區

// 主程式
console.log(7777, allBtn);
fetchData();
btnListener();


function btnListener() {
  btnAll.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      nowRegion = regionAll[index];
      arrangeData();
    });

  });
}

// 取資料
function fetchData() {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      orginalData = result;
      // 整理資料
      console.log(orginalData);

      organizationData();
      // 資料安排處理
      arrangeData();
      btnListener();
    });
}

function organizationData() {
  let locations = orginalData.records.location;
  // console.log(111, locations);
  locations.forEach((location) => {
    // console.log(222, location);
    let locationName = location.locationName;
    // console.log(locationName);
    locWE0T0 = location.weatherElement[0].time[0];
    // console.log(locWE0T0);
    let wxCondition = locWE0T0.parameter.parameterName;
    // console.log(wxCondition);
    let parameterValue = locWE0T0.parameter.parameterValue;
    // console.log(parameterValue);
    let startTime = locWE0T0.startTime;
    // console.log(startTime);
    let maxT = location.weatherElement[4].time[0].parameter.parameterName;
    // console.log(maxT);
    let minT = location.weatherElement[2].time[0].parameter.parameterName;
    console.log(minT);
    let pop = location.weatherElement[1].time[0].parameter.parameterName;
    // console.log(pop);


    orgData[locationName] = {
      'Wx': wxCondition,
      'WxValue': parameterValue,
      'startTime': startTime,
      'maxT': maxT,
      'minT': minT,
      'pop': pop
    }
  });
  // console.log(6666,orgData);

}

function arrangeData() {
  cardRegion.innerHTML = '';
  nowRegion.forEach((city) => {
    // console.log(city);
    //  利用city 名稱當key在orgData取得cityData => key value
    let cityData = orgData[city];
    showAllcard(city, cityData)
  })
}

function showAllcard(city, cityData) {
  // console.log(333, city);
  let WxValue = cityData.WxValue;

  if (WxValue * 1 < 10) {
    WxValue = '0' + WxValue;
  };

  let imgUrl = `https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${WxValue}.svg`;

  

  cardRegion.innerHTML +=
    `
  <div class="card">
  <img src = ${imgUrl}>
    <h2>${city}</h2>
    <p>${cityData.Wx}</p>
    <p>降雨機率:${cityData.pop} %</p>
    <p>最高溫: ${cityData.maxT} ℃</p>
    <p>最低溫: ${cityData.minT} ℃</p>
  </div>
  `;
}
{/* <p>時間: ${cityData.startTime}</p> */}