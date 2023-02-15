# CSS 기초

```
CSS (Cascading Style Sheets)는 웹페이지를 꾸미려고 작성하는 코드이다.
```

## CSS의 ruleset 해부
![image](https://user-images.githubusercontent.com/100736077/217408175-1cb57fe4-5e7d-42aa-bc42-5a9e1e924246.png)

전체 구조는 rule set 라 불린다. (하지만 종종 줄여서 "rule"이라고 한다).

- 선택자
rule set의 맨 앞에 있는 HTML 요소 이름. 꾸밀 요소(들)을 선택한다 (이 예에서는 p 요소). 다른 요소를 꾸미기 위해서는 선택자만 바꿔주면 된다.

- 선언
color: red와 같은 단일 규칙. 꾸미기 원하는 요소의 속성을 명시한다.

- 속성(property)
주어진 HTML 요소를 꾸밀 수 있는 방법이다. (이 예에서, color는 p 요소의 속성이다.)

- 속성 값
속성의 오른쪽에, 콜론 뒤에, 주어진 속성을 위한 많은 가능한 결과중 하나를 선택하기 위해 속성 값을 갖는다.

## 선택자의  종류
선택자는 여러 종류가 있으며 선택자의 일반적인 종류를 알아보자.

|선택자 이름|선택하는 것|예시|
|------|---|---|
|요소 선택자(태그 또는 타입 선택자라고도 불림)|특정 타입의 모든 HTML 요소.|p \<p> 를 선택|
|아이디 선택자|특정 아이디를 가진 페이지의 요소 (주어진 HTML 페이지에서, 아이디당 딱 하나의 요소만 허용된다).|#my-id \<p id="my-id"> 또는 \<a id="my-id"> 를 선택|
|클래스 선택자|특정 클래스를 가진 페이지의 요소 (한 페이지에 클래스가 여러번 나타날 수 있습니다).|.my-class \<p class="my-class"> 와 \<a class="my-class"> 를 선택|
|속성 선택자|특정 속성을 갖는 페이지의 요소.|img[src] \<img src="myimage.png"> 를 선택하지만 \<img> 는 선택 안함|
|수도(Pseudo) 클래스 선택자|특정 요소이지만 특정 상태에 있을 때만, 예를 들면, hover over 상태일 때.|a:hover \<a> 를 선택하지만, 마우스 포인터가 링크위에 있을 때만 선택함|

## CSS 레이아웃

- padding, 컨텐츠 주위의 공간
- border, padding의 바깥쪽에 놓인 실선
- margin, 요소의 바깥쪽을 둘러싼 공간

![image](https://user-images.githubusercontent.com/100736077/217410988-b650f6f6-292c-4be7-90d3-d074717d9399.png)

- width(한 요소의 너비)
- background-color, 요소의 콘텐츠와 padding 의 배경 색
- color, 한 요소의 콘텐츠 색 (일반적으로 글자색)
- text-shadow: 한 요소 안의 글자에 그림자를 적용
- display: 요소의 표시 형식을 설정

## 문서에서의 위치에 따라 스타일 지정하기
이 문서에는 두 개의 \<em> 요소가 있습니다 — 하나는 단락 안에 있고 다른 하나는 목록 항목 안에 있다. \<li> 요소 안에 중첩된 \<em> 만 선택하려면 descendant combinator 라는 선택자를 사용 할 수 있다. 

```css
li em {
  color: rebeccapurple;
}
```

이 선택자는 \<li> 의 하위 요소인 \<em> 요소를 선택한다.

HTML 의 동일한 계층 구조 수준에서 제목 바로 다음에 오는 단락의 스타일을 지정해 볼 수 있다. h1태그와 p태그에 같은 속성을 주려면 선택자 사이에 + (adjacent sibling combinator) 를 배치 해야한다.
``` css
h1 + p {
  font-size: 200%;
}
```

## 상태에 따른 스타일링
- 링크의 스타일을 지정할 때 **\<a> (앵커) 요소**를 대상으로 해야한다. 방문되지 않았는지, 방문 중인지, 마우스 오버인지, 키보드를 통한 포커스 또는 클릭 (활성화) 여부에 따라 상태가 다르다. CSS 를 사용하여 이러한 다양한 상태를 대상으로 할 수 있다. 아래 CSS 는 방문하지 않은 링크는 분홍색이고 방문한 링크는 녹색입니다.
```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

사용자가 링크 위로 마우스 오버할 때 링크 모양을 변경할 수 있다. 예) 밑줄 제거
``` css
a:hover {
  text-decoration: none;
}
```

## 선택자와 결합자를 결합

여러 선택자와 결합자를 함께 결합할 수 있다. 
```css
/* <article> 내부의 <p> 안에 있는 모든 <span> 을 선택합니다  */
article p span { ... }

/* <h1> 바로 뒤에 오는 <ul> 바로 뒤의 모든 <p> 를 선택합니다  */
h1 + ul + p { ... }
```

여러 유형을 함께 결합할 수도 있다. 
``` css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```
> \<body> 안에 있는 \<h1> 바로 뒤에 오는 \<p> 안에 있는 special class 를 가진 요소를 스타일링 한다.

# 우선 순위 (Specificity)
두 선택자가 동일한 HTML 요소를 선택할 수 있는 경우가 종종 있다. 아래의 스타일 시트를 고려해본다면,

``` css
p {
  color: red;
}

p {
  color: blue;
}
```

``` html
<p class="special">나는 무슨 색입니까?</p>
```

HTML 문서에 special class가 있는 단락이 있다고 가정해보고, 두 규칙이 모두 적용된다면 p 파란색이 적용이 된다. 
CSS 언어에서는 충돌 시 제어하는 규칙이 있는데 이러한 규칙을 **계단식** 및 **우선 순위**라고 한다.

파란색으로 설정한 선언은 스타일 시트에서 나중에 나타나고 이후 스타일은 이전 스타일을 재정의 하기 때문이다. 이것을 계단식(cascade) 이라고 한다.

``` css
.special {
  color: red;
}

p {
  color: blue;
}
```

그러나, class 선택자 및 요소 선택자가 있는 이전 블록의 경우, class가 이기고 단락이 빨간색으로 표시된다.
class는 요소 선택자보다 더 구체적이거나 더 우선 순위가 높다.

## 속성 및 값
css는 두 가지 요소로 구성된다.

- **속성 (Properties):** 변경할 스타일 기능 (예: font-size, width, background-color) 을 나타내는 식별자이다.
- **값 (Values):** 지정된 각 속성에는 값이 지정되어 있으며, 이는 해당 스타일 기능을 변경하는 방법 (예: 글꼴, 너비 또는 배경색을 변경하려는 항목) 을 나타냅니다.

아래 이미지의 속성 이름은 color이고, 값은 blue이다.

![image](https://user-images.githubusercontent.com/100736077/217450858-1417a238-5bc1-4339-b2a3-73b38562d2ca.png)

값 과 쌍을 이루는 속성을 **CSS 선언 (declaration)** 라고 한다. 아래 이미지를 보면 CSS 선언은 CSS 선언 블록 안에 있다.

![image](https://user-images.githubusercontent.com/100736077/217451080-15b7eaf1-04f8-4ac7-896b-6250ebb7cf75.png)

CSS 선언 블록은 선택자 와 쌍을 이루어 **CSS Rulesets (또는 CSS 규칙)** 를 생성합니다.

![image](https://user-images.githubusercontent.com/100736077/217451255-ece7dadb-3d50-4914-9793-7950163c3c0f.png)

## 함수 (function)
대부분의 값은 비교적 간단한 키워드 또는 숫자 값이지만, 함수의 형태를 취하는 가능한 몇 가지의 값이 있다. 그 중에서 calc() 함수를 예로 들 수 있으며 이 함수를 사용하면 CSS 내에서 간단한 계산을 수행할 수 있다.

예)
``` html
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
```
``` css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```
![image](https://user-images.githubusercontent.com/100736077/217451686-89134958-b8c8-48db-aaaf-e591228586ce.png)

위의 calc() 예제의 경우, 이 박스의 너비는 블록 너비의 90% 에서 30 px 을 뺀 값을 요구한다.

transform에 대한 예)

``` html
<div class="box"></div>
```
```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn)
}
```
위 코드의 결과는 다음과 같다:

![image](https://user-images.githubusercontent.com/100736077/217452088-eb24fb80-a2a3-4a54-8f76-9dd2f76ed12f.png)

## @rules
CSS @rules(“at-rules”로 발음)는 CSS가 무엇을 수행해야하고 어떻게 행동해야 하는지에 대한 지시를 제공한다.

각각 어떨 때 어떤 @rules를 사용해야하는지 아래를 참고

- @charset— 스타일 시트에 의해 사용되는 문자 집합을 정의함.
- @import— CSS 엔진에게 외부 스타일 시트를 포함하도록 알림.
- @namespace— CSS 엔진에게 모든 문서가 XML 메모장으로 시작(prefix가 표시)되는 것이 고려되어야 함을 알림.
- @media— 장치가 미디어쿼리를 사용하여 정의된 조건의 기준을 만족하면(if문 같은 느낌이라고 보면 된다) 해당 콘텐츠를 적용하는 조건부 그룹 규칙.
- @supports— 브라우저가 주어진 조건의 기준을 충족하면 해당 콘텐츠를 적용하는 조건부 그룹 규칙.
- @document (en-US) 스타일 시트가 적용되는 문서가 주어진 조건의 기준을 만족하면 해당 단어를 적용하는 조건부 그룹 규칙. 
- @page— 문서를 출력할 때 적용되는 레이아웃의 변경을 설명한다.
- @font-face— 다운로드되는 외부 글꼴의 양상을 설명.
- @keyframes— CSS 애니메이션에서 구간을 정하고 각 구간별로 어떤 스타일을 적용시킬지 정하는 문법이다.
- @viewport 실험적— 작은 화면 장치를 위한 뷰포트의 패널을 설명한다.
- @counter-style (en-US) — 미리 정의된 스타일 집합의 일부가 아닌 특정 카운터 스타일을 정의.

## 조건부 그룹 규칙
@- 규칙은 각각 다른 구문이 있다. 그럼에도 불구하고, 그 중 몇몇은 조건부 그룹규칙으로 불리는 특별한 범주로 분류될 수 있다. 
공통 구문을 공유하고 각각 중첩 문(규칙 집합 또는 중첩@-규칙 중 하나)을 포함할 수 있으며 조건문과 같이 참으로 설정될 시에는 그룹 내에 모든 문이 적용된다.
- @media
- @supports
- @document

## CSS 작동 방식

1. 브라우저는 HTML (예: 네트워크에서 HTML 을 수신) 을 로드한
2. HTML 을 DOM (Document Object Model = 컴퓨터 메모리 문서) 로 변환한다.
3. 브라우저에 포함된 이미지 및 비디오와 같은 HTML 문서에 연결된 대부분의 리소스와 연결된 CSS를 가져온다.
4. 브라우저는 가져온 CSS를 구문 분석하고 선택자 유형별로 다른 규칙을 buckets" 으로 정렬한다.
5. render tree 는 규칙이 적용된 후에 표시되어야 하는 구조로 배치된다.
6. 페이지의 시각적 표시가 화면에 표시된다.(이 단계를 painting 이라고 함)

![image](https://user-images.githubusercontent.com/100736077/217457413-c6f5df3a-58df-42d7-b06f-eb0b6d47a7c8.png)

## DOM 정보
DOM은 트리와 같은 구조를 가지고 있다. 마크 업 언어의 각 요소, 속성 및 텍스트는 트리 구조에서 DOM node가 된다. 노트는 다른 DOM 노트와의 관계에 의해 정의되며 일부 요소는 자식 노드의 부모이고 자식 노드에는 형제가 있다.

# CSS 구성요소
## 계단식 및 상속
**계단식**
- 동일한 우선 순위를 갖는 두 규칙이 적용될 때, CSS에서 마지막에 나오는 규칙이 사용된다.

아래 예에서는, h1에 적용할 수 있는 두 규칙이있고, 동일한 선택자가 있고, 동일한 고유성을 가지므로 소스 순서의 마지막 규칙이 적용된다.

![image](https://user-images.githubusercontent.com/100736077/217458948-413aeb74-75e8-4b73-a3bd-2a5250ab47bc.png)

**우선 순위(Specificity)**
```
동일한 요소에 적용될 수 있는 경우, 브라우저가 어떤 규칙을 적용할 지 결정하는 방법이다. 
```

- 요소 선택자는 덜 구체적이다. / 페이지에 나타나는 해당 유형의 모든 요소를 선택하므로 class 선택자 보다는 하위이다. 
- class 선택자는 보다 구체적이다. / 특정 class 속성 값이 있는 페이지의 요소만 선택하므로 요소 선택자 보다는 상위이다.

**상속(Inheritance)**
```
상속이란 부모(상위)요소에 적용된 값을 자식(하위)요소가 물려받는 것을 의미한다.
```

상속의 예로 들자면,
``` html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <link href="style.css" rel="stylesheet">
    <title>상속</title>
  </head>
  <body>
      <div class="content">
        <h1>상속 실습</h1>
        <p>상속이 <b>됩니다!</b></p>
        <br>
      </div>
  </body>
</html>
```
```css
.content {
  color: olive;
}
```

부모인 \<div>태그에만 프로퍼티를 적용시켰는데, 자식요소들까지 모두 같은 올리브색으로 적용이 되었다. 
이것을 **상속**이라고 한다. 

태그와 속성에 따라 상속되지 않는 경우들이 있는데,

**상속되는 프로퍼티**

font-family, font-size, font-weight, line-height, visibility, opacity, color, line-height, text-align, white-space, list-style ...

**상속이 되지않는 프로퍼티**

margin, padding, border , box-sizing, display, background, vertical-align, text-ecoration, top/right/bottom/left, position, overflow, width/height...

하지만, 상속되지 않는 프로퍼티라고 해서 꼭 상속 받을 수 없는 것은 아니다.

**inherit**을 쓰면 상속 받을 수 있다. 'inherit'을 써주면 그 요소는 부모 요소로 부터 속성 값을 상속 받는다고 여겨지며 margin: inherit 또는 padding: inherit 을 쓰면, 부모 요소의 마진이나 패딩을 상속 받을 수 있다.

## 상속 제어하기
CSS는 상속을 제어하기 위해서 inherit를 포함하여 4가지 특수 속성 값을 제공한다.


- inherit
선택한 요소에 적용된 속성 값을 부모 요소의 속성 값과 동일하게 설정한다.
- initial
선택한 요소에 적용된 속성 값을 브라우저의 기본 스타일 시트에서 해당 요소의 해당 속성에 설정된 값과 동일하게 설정한다. 브라우저의 기본 스타일 시트에서 값을 설정하지 않고 속성이 자연스럽게 상속되면 속성 값이 대신 inherit 되도록 설정된다.
- unset
속성을 natural 값으로 재설정 합니다. 즉, 속성이 자연적으로 상속되면 inherit 된 것처럼 작동하고 그렇지 않으면 initial 처럼 작동된다.

``` css
body {
    color: green;
}
          
.my-class-1 a {
    color: inherit;
}
          
.my-class-2 a {
    color: initial;
}
          
.my-class-3 a {
    color: unset;
}
```
```html
<ul>
    <li>Default <a href="#">link</a> color</li>
    <li class="my-class-1">Inherit the <a href="#">link</a> color</li>
    <li class="my-class-2">Reset the <a href="#">link</a> color</li>
    <li class="my-class-3">Unset the <a href="#">link</a> color</li>
</ul>
```
![image](https://user-images.githubusercontent.com/100736077/217462125-802a2f1d-ac5f-41a6-b4e1-2a1685cfb26f.png)

## 선택자의 유형
선택자란 말그대로 선택을 해주는 요소이다.

**Pseudo-classes 및 pseudo-elements**
- pseudo-classes는 요소의 특정상태를 스타일링한다. 예를 들어 :hover pseudo-class는 마우스 포인터에 의해 요소를 가리킬 때만 요소를 선택한다.
``` css
a:hover { }
```

또한 요소 자체가 아닌 요소의 특정 부분을 선택하는 pseudo-elements 도 포함된다. 예를 들어, ::first-line 은 항상 \<span> 이 첫 번째 형식의 라인을 감싸는 것처럼 작동하여, 요소 내부의 첫 번째 텍스트 라인 (아래의 경우 \<p>) 을 선택한다.
``` css
p::first-line { }
```

## 디스플레이
CSS 박스는 외부디스플레이 유형을 가지며, 이는 박스가 블록인지 인라인인지를 나타낼 수 있다. 

## CSS Box Model이란 무엇인가?
전체 CSS box model은 블록 박스에 적용되며, 인라인 박스는 박스 모델에 정의된 일부 동작만 사용한다. 

Box의 구성
- **contents 박스:** 당신의 콘텐츠가 표시되는 영역으로 그 크키는 width / height와 같은 속성을 사용해서 정할 수 있다.
- **padding 박스:** padding은 콘텐츠 주변을 마치 공백처럼 자리잡는다. 패딩의 크기는 padding와 관련 속성을 사용해 제어할 수 있수 다.
- **border 박스:** 테두리 박스는 콘텐츠와 패딩까지 둘러쌉니다. 테두리의 크기와 스타일은 border와 관련 속성을 사용하여 제어할 수 있습니다.
- **margin 박스:** 여백은 가장 바깥 쪽 레이어로 콘텐츠와 패딩, 테두리를 둘러싸면서 박스와 다른 요소 사이 공백 역할을 한다. 여백 박스의 크기는 margin와 관련 속성을 사용하여 제어될 수 있습니다.

![image](https://user-images.githubusercontent.com/100736077/217535361-102ff3f7-e08e-4166-9c9c-9569833abf29.png)

**box-sizing**
```
box-sizing은 박스의 크기를 어떤 것을 기준으로 계산할지를 정하는 속성이다.
```
문법
box-sizing: content-box | border-box | initial | inherit
content-box : 콘텐트 영역을 기준으로 크기를 정한다.
border-box : 테두리를 기준으로 크기를 정한다.
initial : 기본값으로 설정한다.
inherit : 부모 요소의 속성값을 상속받는다.

## 배경 이미지
**배경이미지 반복 제어**
background-repeat 속성은 이미지의 타일링 동작을 제어하는 데 사용된다.
- no-repeat — 배경이 반복되지 않도록 합니다.
- repeat-x — 수평으로 반복합니다.
- repeat-y — 수직으로 반복합니다.
- repeat — 기본값; 양방향으로 반복합니다.

**배경 이미지 크기 조성**
- cover : 브라우저는 이미지를 박스 면적을 완전히 덮으면서 가로 세로 비율을 유지하며 이미지를 충분히 크게 만든다. 이 경우 일부 이미지가 박스 외부에 있을 수도 있다.
- contain : 브라우저는 이미지를 박스 안에 들어가기에 적합한 크기로 만든다. 이 경우 이미지의 종횡비가 박스의 종횡비와 다른 경우, 이미지의 한쪽 또는 위쪽과 아래쪽에 간격이 생길 수 있다.

**배경 이미지 배치**
```
background-position 속성을 사용하면 적용되는 박스에서 배경 이미지가 나타나는 위치를 선택할 수 있다.
```

가장 일반적인 background-position 값은 — 수평 값과 수직 값의 두 가지 개별 값을 갖는다.
- 키워드
``` css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```
- 길이 및 백분율
``` css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```
- 키워드 값을 길이 또는 백분율과 혼합할 수도 있다.
``` css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px;
}
```
## 콘텐츠 overflow

```
overflow: 요소내의 컨텐츠가 너무 커서 요소내에 모두 보여주기 힘들때 그것을 어떻게 보여줄지를 지정하는 것
```

overflow 에서 사용할 수 있는 값
- visible : 기본 값. 넘칠 경우 컨텐츠가 상자 밖으로 보여진다.
- hidden : 넘치는 부분은 잘려서 보이지 않게한다.
- scroll : 스크롤바가 추가되어 스크롤할 수 있다. 
- auto : 컨텐츠 량에 따라 스크롤바를 추가할 지 자동으로 결정된다.

또한, overflow는 가로, 세로를 제어할 수 있다. overflow-x와 overflow-y를 사용한다.

``` css
div.container1 {
    overflow-x: scroll;
    overflow-y: hidden;
    display: inline-block;
    border:solid 1px green;
    height: 200px;
    width: 200px;
}
div.container2 {
    overflow-x: auto;
    overflow-y: scroll;
    display: inline-block;
    border:solid 1px green;
    height: 200px;
    width: 200px;
}
```
``` html
<div class="container1">
    <p>CSS의  overflow 프로퍼티는...</p>
</div>
<div class="container2">
    <p>CSS의  overflow 프로퍼티는...</p>
</div>
```

위의 결과 값은 아래와 같다.

![image](https://user-images.githubusercontent.com/100736077/217675764-a4190176-a290-4af9-8d97-c38ac2932038.png)

## 상대 길이 단위

단위 | 관련 사항
|---|---|
|em|요소의 글꼴 크기|
|ex|요소 글꼴의 x-height|
|ch|요소 글꼴의 glyph"0"의 사전 길이(너비)|
|rem|루트 요소의 글꼴 크기|
|lh|요소 라인 높이|
|vw|viewport 너비의 1%.|
|vh|viewport 높이의 1%.|
|vmin|viewport 의 작은 치수의 1%.|
|vmax|viewport 의 큰 치수의 1%.|

## em과 rem의 차이
- em은 상위 요소 기준
- rem은 최상위 요소 기준

``` html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <title>CSS</title>
    <style>
      html { font-size: 16px; }
      body { font-size: 1.5em; }
      .a { font-size: 2.0em; }
    </style>
  </head>
  <body>
    <p class="a">Lorem Ipsum Dolor</p>
  </body>
</html>
```

이라고 했을 때, 글자 크기는 16 × 1.5 × 2 = 48, **48px**가 나온다.

이때, 위의 em 단위를 rem으로 바꾸면
최상위 html과 a 클래스의 2.0rem만 곱하여 **32px**가 나온다.

## 텍스트 그림자
text-shadow 속성을 사용하여 텍스트에 그림자를 적용할 수 있다. 

```
text-shadow: 4px 4px 5px red;
```
**x축 y축 blur color**
- offset-x : 그림자의 수평 거리를 정한다.
- offset-y : 그림자의 수직 거리를 정한다.
- color : 색을 정한다.

## 글머리 기호 스타일
list-style-type 속성을 사용하면 글머리 기호에 사용할 글머리 기호 유형을 설정할 수 있다. 
``` css
ol {
  list-style-type: upper-roman;
}
```

만약, 순서가 지정된 목록에서부터 시작하고 싶다면, start 속성을 사용하면 된다.
``` html
<ol start="4">
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

![image](https://user-images.githubusercontent.com/100736077/217691644-6bb000ff-d595-4ff8-bb74-64a2e2050555.png)

## 링크 상태
- link: href 속성이 명시된 상태
- visited: 링크를 클릭해본 상태
- focus: 링크 위에 키보드 포커스가 위치한 상태
- hover: 링크 위에 마우스 포인터가 위치한 상태
- active: 링크 위에 마우스 포인터를 두고 좌측 버튼을 계속 클릭하고 있는 상태

# CSS 레이아웃
페이지 레이아웃 기술
1. normal flow
2. display 속성
3. flexbox
4. grid
5. floats
6. 포지셔닝 기술
7. 테이블 레이아웃
8. 다단 레이아웃

## normal flow 
페이지 레이아웃을 전혀 제어하지 않을 경우 브라우저가 기본 값으로 HTML 페이지를 배치하는 방법을 말한다. 
``` html
<p>나는 고양이를 사랑한다.</p>

<ul>
  <li>고양이 먹이를 사세요</li>
  <li>운동</li>
  <li>기운내 친구야</li>
</ul>

<p>여기가 끝!</p>
```
기본적으로 브라우저는 이 코드를 다음과 같이 표시한다.

![image](https://user-images.githubusercontent.com/100736077/217701596-1a267873-1ee7-48d1-9f22-ae00491a29cc.png)

## 디스플레이 속성
기본값 디스플레이 동작을 변경할 수 있다. \<li> 요소는 기본값으로 display: block가 지정되어 대상 요소 바로 밑에 표시되지만 디스플레이 속성 값을 inline으로 변경하면 문장 속 단어의 동작과 마찬가지로 상대 바로 옆에 표시된다. (요소가 보여지는 방식을 변경할 수 있다)

# flexbox
```
flexbox는 뷰포트나 요소의 크기가 불명확하거나 동적으로 변할 때에도 효율적으로 요소를 배치, 정렬, 분산할 수 있는 방법을 제공하는 CSS 레이아웃 방식이다.
```

## flexbox의 구성
- flexbox는 복수의 자식 요소인 flex item과 그 상위 부모 요소인 flex container로 구성된다.
- 요소들을 flexbox로 레이아웃될 때 그 상자들은 두 개의 축을 따라 배치된다.

![image](https://user-images.githubusercontent.com/100736077/217720768-56ce4d62-d8ff-4638-8196-d979a26084e8.png)

- **기본 축** (main axis) 은 flex item이 배치되고 있는 방향으로 진행하는 축이다(예: 페이지를 가로지르는 행 또는 페이지 밑으로 쌓이는 열). 이 기본 축의 시작과 끝을 일컬어 main start과 main end라고 한다.
- **교차 축** (cross axis) 은 flex item이 내부에 배치되는 방향에 직각을 이루는 축이다. 이 축의 시작과 끝을 일컬어 cross start과 cross end라고 한다.
- display: flex가 설정된 부모 요소(우리 예제에서 \<section>이 해당)를 일컬어 **flex container** (flex container) 라고 한다.
- flex container 내부에 flexbox로 레이아웃되는 항목을 일컬어 **flex item** (flex items) 이라고 한다(우리 예제에서 \<article> 요소가 해당).

flexbox를 만드는 방법은 간단하다. 정렬하려는 요소의 부모 요소에 다음과 같이 display: flex 속성을 선언하면 된다. 그러면 inline 요소들 처럼 flex 아이템들이 가로 방향으로 배치되고, 자신이 width 값만 차지하게 된다.(height는 컨테이너의 높이만큼 늘어난다)

예)
``` css
.flex_container {
  display: flex;
}
```
## 배치 방향 설정(flex-direction)
flexbox는 기본 축이 진행되는 방향(자식 flexbox들이 컨테이너 내부에 배치되는 방향)을 지정하는 flex-direction 속성을 제공한다. 기본값으로 이것은 row로 설정되어 브라우저의 기본 언어가 작동하는 방향(영어 브라우저의 경우 왼쪽에서 오른쪽)을 따라 일렬로 배치된다.

```css
.container {
	flex-direction: row;
	/* flex-direction: column; */
	/* flex-direction: row-reverse; */
	/* flex-direction: column-reverse; */
}
```
![image](https://user-images.githubusercontent.com/100736077/217726376-a1297ae7-aa17-49fe-8abf-96cb45108942.png)

## 줄넘김 처리 설정(flex-wrap)
컨테이너가 더 이상 아이템들을 한 줄에 담을 여유 공간이 없을 때, 아이템 줄바꿈을 어떻게 할지 결정하는 속성이다. 
``` css
.container {
	flex-wrap: nowrap;
	/* flex-wrap: wrap; */
	/* flex-wrap: wrap-reverse; */
}
```

![image](https://user-images.githubusercontent.com/100736077/217726661-1cf060c5-9a82-4c0d-87c7-8a059d7ae419.png)

## flex-flow
flex-direction과 flex-wrap을 한번에 지정할 수 있는 단축 속성

flex-direction flex-wrap 순으로 작성,
``` css
.container {
	flex-flow: row wrap;
	/* 아래의 두 줄을 줄여 쓴 것 */
	/* flex-direction: row; */
	/* flex-wrap: wrap; */
}
```

## 메인축 방향 정렬(justify-content)
**justify**는 메인축(오뎅꼬치) 방향으로 정렬
**align**은 수직축(오뎅을 뜯어내는) 방향으로 정렬

``` css
.container {
	justify-content: flex-start;
	/* justify-content: flex-end; */
	/* justify-content: center; */
	/* justify-content: space-between; */
	/* justify-content: space-around; */
	/* justify-content: space-evenly; */
}
```
- flex-start (기본값): 아이템들을 시작점으로 정렬
- flex-end: 아이템들을 끝점으로 정렬
- center: 아이템을 가운데로 정렬
- space-between: 아이템들의 “사이(between)”에 균일한 간격을 만들어 준다.
- space-around: 아이템들의 “둘레(around)”에 균일한 간격을 만들어 준다.
- space-evenly: 아이템들의 사이와 양 끝에 균일한 간격을 만들어 준다.(IE와 엣지에는 지원되지않는다)

![image](https://user-images.githubusercontent.com/100736077/217729272-becab61b-3332-4849-a0be-37e2b1c708e7.png)

## 수직축 방향 정렬(align-items)
수직축 방향으로 아이템을들 정렬하는 속성이다
```css
.container {
	align-items: stretch;
	/* align-items: flex-start; */
	/* align-items: flex-end; */
	/* align-items: center; */
	/* align-items: baseline; */
}
```
- stretch (기본값): 아이템들이 수직축 방향으로 끝까지 늘어난다.
- flex-start: 아이템들을 시작점으로 정렬한다. (flex-direction이 row(가로 배치)일 때는 위, column(세로 배치)일 때는 왼쪽)
- flex-end: 아이템들을 끝으로 정렬한다. (flex-direction이 row(가로 배치)일 때는 아래, column(세로 배치)일 때는 오른쪽)
- center: 아이템들을 가운데로 정렬한다.
- baseline: 아이템들을 텍스트 베이스라인 기준으로 정렬한다.

## 유연한 박스의 기본 영역(flex-basis)
flex-basis는 Flex 아이템의 기본 크기를 설정한다(flex-direction이 row일 때는 너비, column일 때는 높이)
```css
.item {
	flex-basis: auto; /* 기본값 */
	/* flex-basis: 0; */
	/* flex-basis: 50%; */
	/* flex-basis: 300px; */
	/* flex-basis: 10rem; */
	/* flex-basis: content; */
}
```
```
.item {
	flex-basis: 100px;
}
```

원래의 width가 100px이 안되는 AAA와 CCC는 100px로 늘어났고, 원래 100px이 넘는 BBB는 그대로 유지된다.

![image](https://user-images.githubusercontent.com/100736077/217844424-84780786-c6c3-4f70-ac8e-7807e8c80b6f.png)

반면에 width를 설정하면, 원래 100px을 넘는 BBB도 100px로 맞춰진다.
``` css
.item {
	width: 100px;
}
```

![image](https://user-images.githubusercontent.com/100736077/217844750-4e88e666-cbf9-43c3-b6ad-0eaad7d60e9a.png)

## 유연하게 증가(flex-grow)
flex-grow는 아이템이 flex-basis의 값보다 커질 수 있는지를 결정하는 속성이다.
flex-grow에는 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible) 박스로 변하고 원래의 크기보다 커지며 빈 공간을 메우게 된다.
```css
.item {
	flex-grow: 1;
	/* flex-grow: 0; */ /* 기본값 */
}
```

flex-grow에 들어가는 숫자의 의미는, 아이템들의 flex-basis를 제외한 여백 부분을 flex-grow에 지정된 숫자의 비율로 나누어 가진다고 생각하시면 된다.
```css
/* 1:2:1의 비율로 세팅할 경우 */
.item:nth-child(1) { flex-grow: 1; }
.item:nth-child(2) { flex-grow: 2; }
.item:nth-child(3) { flex-grow: 1; }
```

![image](https://user-images.githubusercontent.com/100736077/218144106-ed9ee190-ad82-44aa-a527-043fb1760f35.png)

## 유연하게 줄이기(flex-shrink)
flex-shrink는 flex-grow와 쌍을 이루는 속성으로, 아이템이 flex-basis의 값보다 작아질 수 있는지를 결정한다.
flex-shrink에는 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible) 박스로 변하고 flex-basis보다 작아진다.

``` css
.item {
	flex-basis: 150px;
	flex-shrink: 1; /* 기본값 */
}
```

