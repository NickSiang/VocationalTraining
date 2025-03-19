🔹 v-html 是什麼？
v-html 是 Vue 的一個 指令，用來 將 HTML 字串渲染為真正的 HTML，並插入到元素內部。

🔹 基本用法

<div v-html="htmlContent"></div>

const app = Vue.createApp({
data() {
return {
htmlContent: "<strong>這是粗體字</strong>，<em>這是斜體字</em>"
}
}
}).mount('#app')

結果（渲染後的 HTML）：

<div>
  <strong>這是粗體字</strong>，<em>這是斜體字</em>
</div>
v-html 會將 HTML 內容解析並插入，與 {{ }} 不同，{{ }} 只會顯示純文字，不會解析 HTML。

v-html vs {{ }}

<p>{{ htmlContent }}</p>   <!-- 顯示原始 HTML 文字 -->
<p v-html="htmlContent"></p>  <!-- 解析並渲染 HTML -->
🔹 {{ }}（插值表達式）➡ 輸出純文字，不解析 HTML
🔹 v-html ➡ 解析 HTML，並將它插入元素內部

安全警告

在網站上動態渲染任意 HTML 是非常危險的，因為這非常容易造成 XSS 漏洞。請僅在內容安全可信任時再使用 v-html，並且永遠不要使用用戶提供的 HTML 內容。

屬性綁定號
雙大括號不能在 HTML 屬性中使用。想要響應式地綁定一個屬性，應該使用 v-bind 指令：

template

<div v-bind:id="dynamicId"></div>
v-bind指令指示Vue 將元素的id屬性與組件的dynamicId屬性保持一致。如果綁定的值是null或者undefined，那麼該屬性將從渲染的元素上移除。

同名簡寫」是什麼？
👉 當 HTML 屬性的名稱 和 變數名稱 相同時，可以省略屬性值，讓代碼更簡潔！

🔹 重點整理
屬性 .............................簡寫（Vue 3.4+）..........完整寫法（Vue 3.3 及以下）
id 綁定 ..........................<div :id></div>......... <div :id="id"></div>
title 綁定 .......................<div :title></div> ......<div :title="title"></div>
class 綁定（變數不同名時） ........❌ 不行..................<div :class="className"></div>

🔹 其他布爾型屬性
這種行為適用於所有 布爾型屬性，例如：

屬性 作用
disabled 禁用按鈕或輸入框
readonly 讓輸入框變成只讀
checked 設定 checkbox 為選中狀態
selected 設定 <option> 預選
hidden 隱藏元素

📌 v-bind 綁定整個物件
在 Vue 中，v-bind 可以用來一次性綁定多個屬性，當你有一個物件包含多個屬性時，不需要為每個屬性單獨寫 v-bind，而是可以直接綁定整個物件。


使用JavaScript 表達式號
至此，我們僅在模板中綁定了一些簡單的屬性名稱。但是Vue 實際上在所有的資料綁定中都支援完整的JavaScript 表達式

下面的例子都是無效的：
每個綁定只支援單一表達式，也就是一段能夠被求值的JavaScript 代碼。一個簡單的判斷方法是是否可以合法地寫在return後面。
template
<!-- 這是一個語句，而非表達式 -->
{{ var a = 1 }}

<!-- 條件控制也不支持，請使用三元表達式 -->
{{ if (ok) { return message } }}



這些是 Vue 開發中常用 的功能，尤其是 v-bind、v-on、修飾符等，幾乎每個 Vue 專案都會用到。

v-bind (:) 綁定 HTML 屬性 → :href="url"
v-on (@) 綁定事件 → @click="handleClick"
修飾符：
.prevent（阻止預設行為，如表單提交）
.stop（阻止事件冒泡）
.self（只在自己身上觸發事件）
.lazy（v-model 只在輸入框失焦後更新）
🔹 動態參數 (:[xxx]) 不是天天用，但有時候需要動態變更屬性或事件時很好用。


 DOM 更新時機
Vue 更新畫面是有延遲的，它會在狀態更新後的一段時間才更新畫面。這樣可以避免畫面重複更新。

如果你希望等到畫面更新完再做其他操作，可以使用 nextTick。

例如：
import { nextTick } from 'vue'

this.count++
await nextTick()  // 等待畫面更新後再執行後續操作

1. 什麼是計算屬性 (Computed Properties)?
計算屬性是 Vue 的一個特性，它允許你根據其他數據動態計算出一個新的屬性。這個屬性會自動更新，當它所依賴的數據發生變化時。相比在模板中直接寫表達式，使用計算屬性能讓你的程式碼更簡潔和可維護。

2.方法 (Methods)
方法和計算屬性有些相似，但是它有一個很大的區別，就是 方法每次被調用時都會執行，而不管數據是否有變化。

mounted() 是 Vue 組件生命週期中的一個鉤子函數（生命周期钩子函数），它會在組件 被掛載到 DOM 上之後 立即執行。

作用：
初始化：mounted() 會在組件的 模板渲染 並插入 DOM 之後觸發，這意味著組件的 DOM 結構已經準備好，可以進行一些操作，比如與外部 API 交互、更新 DOM、或者初始化第三方庫等。

觸發時機：這個鉤子只會執行一次，當組件首次顯示時。這個時候所有的數據、事件處理、插槽等都已經準備好了，但如果你想要在數據或 DOM 更改時做處理，則應該使用其他鉤子函數，比如 updated()。

注意：v-if 和 v-for 不要放在同一個元素上
當你同時使用 v-if 和 v-for 時，v-if 的優先級較高，這可能會導致作用域錯誤。為了避免這種情況，應該將 v-if 和 v-for 放在不同的元素上：



1️⃣ @click="function()" ✅（帶括號）
會立即執行該函式
回傳值無效（因為 Vue 並不會去監聽這個函式的回傳值）
不能傳 event（DOM 事件對象）

2️⃣ @click="function" ✅（不帶括號）
綁定函式的引用，不會立即執行
Vue 會在點擊事件發生時執行這個函式
函式會自動收到 event 參數（如果函式有定義 event 參數的話）

3️⃣ @click="function($event)" ✅（手動傳 event）
有時候你需要手動傳遞 event


在 Vue 生命週期中，mounted、updated 和 unmounted 是三個常見的 生命週期鉤子（Lifecycle Hooks），用於監聽組件的不同階段：

mounted（掛載完成）

組件被掛載到 DOM 上後執行（只執行一次）。
可用來取得 DOM 元素、發送 API 請求、設置計時器等。

updated（更新完成）

當響應式數據變更，導致 DOM 重新渲染後執行。
可用於執行與數據更新相關的邏輯，如同步狀態、動畫等。

unmounted（卸載完成）

組件從 DOM 上移除後執行（通常在條件渲染或頁面切換時發生）。
用於清理資源，如移除計時器、取消 API 請求、移除事件監聽等。

watch 允許你監聽數據變化並執行相應的操作。當數據變化時，watch 會觸發回調函數。
當你需要根據某個變數的變化去觸發某些操作（例如發送 API 請求，或者更新 DOM）時，可以使用 watch。

1. 基本範例：
watch 用來監聽某個變數，當這個變數的值改變時，就會執行一段代碼。

例子：假設有一個變數叫 question，每當 question 改變時，我們會檢查它是不是問句（包含問號 ?），如果是，會去執行 getAnswer() 方法來取得答案。

data() {
  return {
    question: '',  // 問題
    answer: ''     // 回答
  }
},
watch: {
  question(newQuestion) {
    if (newQuestion.includes('?')) {
      this.getAnswer()  // 如果是問句，則取得答案
    }
  }
}

2. 深層偵聽器（deep: true）：
預設 watch 只會監聽對象（物件、數組）是否整體改變。如果對象裡的內部屬性改變，watch 不會觸發。這時候可以使用 deep: true，讓它監聽對象內部的變化。

例子：我們有一個 person 物件，當物件裡的 age 改變時，我們希望 watch 也能偵聽到。

data() {
  return {
    person: { name: 'John', age: 30 }
  }
},
watch: {
  person: {
    handler(newValue) {
      console.log('person has changed:', newValue)
    },
    deep: true  // 開啟深層監聽
  }
}
在這個例子中，如果 person.age 改變，watch 會偵聽到並觸發回調。

3. 即時回調（immediate: true）：
預設 watch 只會在數據變化後執行回調。如果想要在一開始就立即執行一次回調（即使數據還沒改變），可以設置 immediate: true。

例子：當監聽 question 的時候，我希望在一開始就執行回調，去檢查是否需要呼叫 getAnswer()。

watch: {
  question: {
    handler(newQuestion) {
      console.log('Checking question:', newQuestion)
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    },
    immediate: true  // 創建時就執行一次回調
  }
}
這樣 question 一開始設置時，回調就會被執行。

4. 只觸發一次（once: true）：
預設 watch 是持續監聽某個變數的變化。如果只想讓 watch 在變化一次後觸發一次回調，可以使用 once: true。

例子：監聽 foo，當它變化一次後就不再監聽。

watch: {
  foo: {
    handler(newValue) {
      console.log('foo changed:', newValue)
    },
    once: true  // 只監聽一次
  }
}
當 foo 改變後，回調只會執行一次。

5. 回調觸發時機（flush）：
預設 watch 回調會在 Vue 更新 DOM 之前執行。如果你想讓回調在 Vue 更新 DOM 之後執行，可以使用 flush: 'post'。

例子：在 key 改變後，等到 DOM 更新之後再執行回調。

watch: {
  key: {
    handler() {
      console.log('DOM updated, now do something!')
    },
    flush: 'post'  // 等到 DOM 更新後再執行
  }
}
6. 命令式偵聽器（this.$watch()）：
你也可以手動設置偵聽器。這樣，你可以更靈活地控制何時啟動偵聽。

例子：在 created 鉤子中使用 this.$watch() 設置偵聽器。

created() {
  this.$watch('question', (newQuestion) => {
    console.log('Question changed:', newQuestion)
  })
}
7. 停止偵聽器（unwatch）：
當你不再需要某個偵聽器時，你可以停止它，這樣它就不會再觸發回調。

例子：當不再需要監聽 foo 時，停止偵聽。

created() {
  const unwatch = this.$watch('foo', (newValue) => {
    console.log('foo changed:', newValue)
  })

  // 停止偵聽
  unwatch()
}
總結：
watch 讓你監聽某個數據的變化，並執行相應的回調。
deep: true 用來監聽對象內部屬性的變化。
immediate: true 會在監聽器創建時就執行回調。
once: true 讓回調只執行一次。
flush: 'post' 讓回調在 DOM 更新後執行。
this.$watch() 讓你手動設置偵聽器。
unwatch() 用來停止偵聽器。
希望這樣更容易理解！







