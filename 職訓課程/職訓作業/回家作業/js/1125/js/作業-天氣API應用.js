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

//取所有縣市
let nowRegion = regionAll[0];
console.log('所有縣市名稱: '+ nowRegion);

const all = document.querySelector('.all');
// 卡片區
const cardRegion = document.querySelector('.card-region');
// 所有按鈕
const btnAll = document.querySelectorAll('button');

const h2 = document.querySelector('h2');

const url =
  'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-0FAD15EC-3C0A-4AC6-B426-34FD9DD873FC';


let orginalData;
// console.log(orginalData);
// 整理所有資料存放區
// 創建一個物件 用{大括號}來創建一個物件
let orgData = {};
// console.log(orgData);


// 主程式
fetchData();
// 點擊按鈕會跑出對應區域縣市
btnListener();

function btnListener() {
  btnAll.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      nowRegion = regionAll[index];
      arrangeData();
    });
  });
}

// 取資料整理
function fetchData() {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {

      orginalData = result;
      console.log(result);

      // 整理資料
      const updateTime = orginalData.records.location[0].weatherElement[0].time[0].startTime;
      console.log('氣象更新時間', updateTime);
      console.log('所有資料', orginalData);
      // 這邊取到的資料添加至h2裡
      h2.textContent += `天氣預報更新時間: ${updateTime}`;
      // 資料安排處理(想要的資料)
      organizationData();
      arrangeData();
      btnListener();
    });
}

function organizationData() {
  // 所有資料中的地區資料
  let locations = orginalData.records.location;
  console.log('所有資料中的地區資料', locations);
  // 作用於locations所有
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
    console.log(maxT);
    let minT = location.weatherElement[2].time[0].parameter.parameterName;
    console.log(minT);
    let pop = location.weatherElement[1].time[0].parameter.parameterName;
    // console.log(pop);
    let tem = Math.round((maxT * 1 + minT * 1) / 2);
    // console.log(tem);

    // 存放物件(上面有整理所有資料存放區)
    // 物件宣告是{}，存取是[]和.這邊存放選取想要的資料
    orgData[locationName] = {
      'Wx': wxCondition,
      'WxValue': parameterValue,
      'startTime': startTime,
      'maxT': maxT,
      'minT': minT,
      'pop': pop,
      'tem': tem
    }
  });

  // console.log(6666,orgData);

}

function arrangeData() {
  // 先清空卡片區
  cardRegion.innerHTML = '';
  
  // nowRegion作用於全部程式
  nowRegion.forEach((city) => {

    // 利用city 名稱當key在orgData取得cityData => key value

    // 城市單一名稱
    // 使用 forEach 方法迭代每個城市：
    // 使用城市名稱 作為鍵（city），
    // 從 orgData 中取出對應的氣象資料，並賦值給 cityDat

    let cityData = orgData[city];
    // console.log('各城市氣象資訊', cityData);
    showAllcard(city, cityData);
    // console.log(city);

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
  <h3>${city}</h3>
  <img src = ${imgUrl}>
  <p>${cityData.tem}°</p>
   <p>${cityData.Wx}</p>
    <br/><br/>
   <p>💧 ${cityData.pop}%</p>
  <br/>
  <p>🌡 ${cityData.maxT}° / ${cityData.minT}°</p>
  </div>
  `;
}
/* <p>時間: ${cityData.startTime}</p> */