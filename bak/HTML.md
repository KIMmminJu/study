# HTML(Hypertext Markup Language)

    웹페이지가 어떻게 구조화되어 있는지 브라우저로 알 수 있도록 하는 마크업 언어.
- HTML은 elements로 구성되어 있으며, 이들은 적절한 방법으로 나타내고 실행하기 위해 각 컨텐츠의 여러 부분들을 감싸고 마크업한다.

# HTML 요소(Element)의구조

1. **여는 태그(Opening tag):** 요소의 이름과(이 경우 p), 열고 닫는 꺽쇠, 괄호로 구성된다. 요소가 시작(이 경우 단락의 시작 부분)부터 효과가 적용되기 시작한다.
2. **닫는 태그(Closing tag):** 요소의 이름 앞에 슬래시(/)가 있는것을 제외하면 여는 태그(opening tag)와 같으며 요소의 끝(이 경우 단락의 끝 부분)에 위치한다.
3. **내용(Content):** 요소의 내용이며 텍스트로 이루어져있다.
4. **요소(Element):** 여는 태그, 닫는 태그, 내용 이것들을 통틀어 요소(element)라고한다.

# 내포된 요소(Nesting elements)

요소 안에 다른 요소를 포함하는 것, 아래의 예제에서는 'very'를 강조하는 \<string> 요소를 중첩해서 사용하였다. 
 
```html
<p>My cat is <strong>very</strong> grumpy.</p>
```
    
- \<p> 요소가 먼저 열린후에 \<string> 요소가 열렸기에, \<string> 요소가 먼저 닫힌 후에 \<p> 요소가 먼저 닫혀야한다.

# 블럭 레벨 요소와 인라인 요소(Block versus inline elements)

- **블록 레벨 요소(Block-level elements):** 웹페이지 상에 블록(Block)을 만드는 요소이다. 블록 레벨 요소는 앞뒤 요소 사이에 새로운 줄(Line)을 만들고 나타내며 (즉 블록 레벨 요소 이전과 이후 요소사이의 줄을 바꾼다.) 일반적으로 페이지의 구조적 요소를 나타낼 때 사용된다. 예를 들어 개발자는 블록 레벨 요소를 사용하여 단락(Paragraphs), 목록(lists), 네비게이션 메뉴(Navigation Menus), 꼬리말(Footers) 등을 표현할 수 있다. 블록 레벨 요소는 인라인 요소(Inline elements)에 중첩될(Nested inside)수 없지만 블록 레벨 요소는 다른 블록 레벨 요소에는 중첩될 수 있다.

- **인라인 요소(Inline elements):** 항상 블록 레벨 요소내에 포함되어 있다. 인라인 요소는 문서의 한 단락같은 큰 범위에는 적용될 수 없고 문장, 단어 같은 작은 부분에 대해서만 적용될 수 있으며 새로운 줄(Line)을 만들지 않는다. 즉 인라인 요소를 작성하면 그것을 작성한 단락내에 나타나게 된다. 예를 들어, 인라인 요소에는 하이퍼링크를 정의하는 요소인 a, 텍스트(Text)를 강조하는 요소인 em,strong 등이 있습니다.

# 속성(Attributes)
요소는 아래 이미지와 같이 속성을 가질 수 있다.
![image](https://user-images.githubusercontent.com/100736077/217166366-04bd312e-4b31-47df-a05f-f38081fe89b7.png)

> 요소에 실재론 나타내고 싶지 않지만 추가적인 내용을 담고 싶을 때 사용한다.

속성을 사용할 때 주의할 점

  1. 요소 이름 다음에 바로 오는 속성은 요소 이름과 속성 사이에 공백이 있어야 되고, 하나 이상의 속성들이 있는 경우엔 속성 사이에 공백이 있어야 한다.
  2. 속성 이름 다음엔 등호(=)가 붙는다.
  3. 속성 값은 열고 닫는 따옴표로 감싸야 한다. 

# HTML 문서의 구조

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

1. **\<!DOCTYPE html>:** 문서 형식을 나타내는 짧은 문장이다.
2. **\<html>\</html>:** html 요소이다. 전체 페이지의 콘텐츠를 포함하며, 기본 요소로도 알려져있다. 
3. **\<head>\</head>:** head 요소이다. 홈페이지 사용자에게는 보이지 않지만 검색 결과에 노출될 키워드, 홈페이지 설명, CSS 스타일, character setdeclaration 등 HTML 페이지의 모든 내용을 담고 있다.
4. **\<meta charset="utf-8">:** HTML 문서의 문자 인코딩 설정을 UTF-8로 지정하는 것이며 예시에서 지정한 UTF-8에는 전세계에서 사용되는 언어에 대한 대부분의 문자가 포함된다.
5. **\<title>\</title>:** title 요소이다. 페이지 제목이 설정되며 페이지가 로드되는 브라우저 탭에 표시되는 제목으로 사용된다.
6. **\<body>\</body>:** body 요소 여기에는 텍스트, 이미지, 비디오, 게임, 재생 가능한 오디오 트랙 등을 비롯하여 페이지에 표시되는 모든 컨텐츠가 포함된다.

# HTML 주석
    주석의 목적은 코드에 메모를 포함시켜 논리 또는 코딩을 설명 할 수 있도록 하는 것이며 브라우저에서는 주석을 무시하여 사용자가 주석이 보이지 않는다.
    
<!- -!>으로 주석을 묶는다.

# HTML head
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  ```
  
  HTML \<head> 요소의 내용이다. 
  > metadata를 포함하며, 제목을 달 수 있다.

# 메타데이터: meta 요소

- 메타데이터는 데이터를 설명하는 데이터이며, 자세히 말하자면 데이터에 관한 구조화된 데이터로, 대량의 정보 가운데에서 확인하고자 하는 정보를 효율적으로 검색하기 위해 원시데이터(Raw data)를 일정한 규칙에 따라 구조화 혹은 표준화한 정보를 의미한다.

# HTML에 CSS와 JavaScript 적용하기
- \<link>는 항상 문서의 head 부분에 위치한다. 이것은 두 가지 속성을 취하는데, rel="stylesheet", 즉 문서의 스타일 시트임을 나타냄과 동시에 스타일 시트 파일의 경로를 포함하는 href를 내포한다.
``` html
<link rel="stylesheet" href="my-css-file.css">
```
- \<script> 는 head에 들어갈 필요가 없다. \</body> 태그 바로 앞, 문서 본문의 맨 끝에 넣는 것이 좋으며, JavaScript를 적용하기 전에 모든 HTML 내용을 브라우저에서 읽었는지 확인하는 것이 좋다.
``` html
<script src="my-js-file.js"></script>
```

# html 텍스트

## 제목과 단락

> HTML에서 각 단락은 \<p>요소 안에 둘러싸여 있어야 한다. 
> 각 제목도 heading 요소 안에 둘러싸여 있어야 한다.(heading요소 : h1 h2 h3 ... h6)

## 구조화된 계층을 구현하기
예를 들어, 한 이야기에서 \<h1>은 이야기의 제목을 나타내고 \<h2>는 각 장의 제목을 나타내고 \<h3>는 각 장의 하위 절을 나타내고 이런 식으로 나타낸다.
 
```html
<h1>The Crushing Bore</h1>

<p>By Chris Mills</p>

<h2>Chapter 1: The dark night</h2>

<p>It was a dark night. Somewhere, an owl hooted. The rain lashed down on the ...</p>

<h2>Chapter 2: The eternal silence</h2>

<p>Our protagonist could not so much as a whisper out of the shadowy figure ...</p>

<h3>The specter speaks</h3>

<p>Several more hours had passed, when all of a sudden the specter sat bolt upright and exclaimed, "Please have mercy on my soul!"</p>
```

- 페이지 당 하나의 \<h1>을 사용하는 것이 대부분이다.(\<h1>을 한 개 이상 사용해도 괜찮다.)
- 각 표제들을 계층적으로 올바른 순서로 사용해야 한다
- 6개의 Heading을 사용할 수 있지만 꼭 필요한 것이 아니라면 한 페이지에 3개 이상을 사용하지 않도록 해야한다. 많은 목차 레벨을 가진 문서는 다루기 힘들며, 탐색하기 어렵다.

# 하이퍼 링크 만들기

``` 
하이퍼 링크는 문서들을 다른 문서들과 연결시켜 주기도 하며 우리가 원하는 다른 resource 들과 연결해주기도 한다.
```

## 링크의 구조
``` html
<p>I'm creating a link to
<a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

위 코드의 결과는 다음과 같다.

나는 링크를 만들었다. <http://the Mozilla homepage>

# 문서와 웹사이트 구조

## 문서의 기본 섹션

**header**
- 일반적으로 큰 제목과 로고 등이 있는 큰 띠. 한 웹페이지에서 주요 정보가 있는 곳이다.

**navigation bar**
- 홈 페이지의 메인 섹션으로 연결하며 대부분 메뉴 버튼이나 링크, 탭으로 표현된다.

**main content**
- 웹 페이지에서 가장 중요한 부분으로, 주요한 이야기가 있는 부분이다. 

**sidebar**
- 주변의 정보, 링크, 인용 부호, 광고 등이 있는 부분이다.

**footer**
- 페이지 바닥의 줄로 일반적으로 작은 정보, 저작권 정보, 또는 연락처 등을 포함하고 있다.

## 컨텐츠 구조화를 위한 HTML
HTML은 이러한 섹션을 나타내는 데 사용할 수 있는 전용 태그를 제공한다.

- **header:** \<header>
- **navigation bar:** \<nav>
- **main content:** \<main>, \<article>, \<section>,\<div> 의 다양한 하위 섹션이 있습니다. 
- **sidebar:** \<aside>; 종종 \<main>안에 위치합니다.
- **footer:** \<footer>

# HTML 디버깅
## HTML과 디버깅

```
디버깅: 모든 소프트웨어 소스 코드의 오류 또는 버그를 찾아서 수정하는 과정
```

일반적으로 코드에서 뭔가 잘못했을 때, 두 가지 주요 유형의 오류가 발생한다.
- **문법 오류(Syntax errors):** 실제로 프로그램이 실행되지 않는 맞춤법 오류이다.
- **논리 에러(Logic errors):** 언어 문법이 올바르게 작성된 오류이며, 동작은 하지만 코드가 의도한 것과 다르게 동작하므로 프로그램이 잘못 실행된다.

# 멀티미디어와 임베딩
## HTML의 이미지

- 웹페이지에 이미지를 넣기 위해서는 \<img> 요소를 사용한다. 

## 반응형 이미지

-  srcset과 sizes라는 두 가지 새로운 속성(attribute)을 사용해 반응형 이미지를 만들 수 있다.
원본소스 파일
``` html
<img src="elva-fairy-800w.jpg" alt="요정 옷을 입은 엘바">
```

``` html
<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="요정 옷을 입은 엘바">
```

## HTML 테이블

```
테이블: 행과 열로 구성된 데이터 집합이다.
```
## 테이블을 만드는 방법

``` html
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>Eating Habits</td>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
``` 
![image](https://user-images.githubusercontent.com/100736077/217191142-6302a047-c7ad-41d2-b76c-ef0ca497c8f4.png)

이런 결과가 나온다.

- th - 표의 제목
- tr - 가로줄
- td - 셀

## \<col>로 스타일 지정

``` html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>
```

- 하나의 col에 yellow라는 색상 값이 들어간다.

## \<caption>을 사용하여 테이블에 캡션 추가
```
caption 태그는 테이블, 혹은 사진 등에 붙는 설명을 말한다.
```
\<table>여는 태그 바로 아래에 넣어야한다. 

``` html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```
## \<thead>, \<tfoot> 및 \<tbody>로 구조 추가

- \<thead>: 표의 제목을 나타내는 태그로 \<table>하위, \<tr>상위에 위치한다.(표의 머리부분)
- \<tfoot>: 표의 바닥글 요소이다.(표의 꼬리부분)
- \<tbody>: 표의 본문 영역을 나타내는 태그로 \<thead>와 같은 위치에 존재한다.(표의 본문부분)

``` html
<table>
    <thead>
        <tr>
            <th>Items</th>
            <th scope="col">Expenditure</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Donuts</th>
            <td>3,000</td>
        </tr>
        <tr>
            <th scope="row">Stationery</th>
            <td>18,000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">Totals</th>
            <td>21,000</td>
        </tr>
    </tfoot>
</table>
```

위의 코드의 결과는 아래와 같다.

![image](https://user-images.githubusercontent.com/100736077/217195390-50692dee-1a99-4105-808c-6599daa1b072.png)


# HTML 폼
```
HTML 폼: 사용자와 웹사이트 또는 어플리케이션이 서로 상호 작용하는 것 중 중요한 기술 중에 하나이다.
```

# HTML 폼 동작 방법
1. 폼이 있는 웹페이지 방문
2. 폼 내용을 입력한다.
3. 폼 안에 있는 모든 데이터를 웹 서버로 보낸다. 
4. 웹 서버는 받은 폼 데이터를 처리하기 위해 웹 프로그램으로 넘긴다. 
5. 웹 프로그램은 폼 데이터를 처리한다
6. 처리결과에 따른 새로운 html 페이지를 웹 서버에 보낸다.
7. 웹 서버는 받은 html 페이지를 브라우저에 보낸다.
8. 브라우저는 받은 html 페이지를 보여준다.

![image](https://user-images.githubusercontent.com/100736077/217202559-94c4c142-abe4-4190-a6bd-2512cbd54d06.png)

## 폼 태그 속성
폼 태그 속성에는 name, action, method, target 등이 있으며 폭 태그 속성은 다음과 같다.

- action: 폼을 전송할 서버 쪽 스크립트 파일을 지정한다.
- name: 폼을 식별하기 위한 이름을 지정한다. 
- accept-charset: 폼 전송에 사용할 문자 인코딩을 지정한다. 
- target: action에서 지정한 스크립트 파일을 현재 창이 아닌 다른 위치에 열도록 지정합니다. 
- method: 폼을 서버에 전송할 http 메소드를 정합니다. (GET 또는 POST)

아래 소스와 같이 폼 태그 속성을 지정할 수 있다.

``` html
<html>
    <head>
    </head>
    <body>
        <form action = "http://localhost:8080/form.jsp" accept-charset="utf-8" 
              name = "person_info" method = "get"> 
        </form>
    </body>
<html>
```

![image](https://user-images.githubusercontent.com/100736077/217203737-57f3c931-038a-4d42-9e88-65d05c8e99d8.png)


위쪽이 GET 방식이고, 아래쪽은 POST 방식이다. 

# 폼을 구성하는 다양한 엘리먼트
**\<field>,\<legend>태그**
\<fieldset>태그는 폼 태그 안에 관련 있는 폼 엘리먼트들을 그룹화할 때 사용한다. 그리고 \<fieldset>태그 하위에 \<legend>태그를 사용하여 그룹화한 폼 엘리먼트들을 목적에 맞게 이름을 지정한다. 

**다양한 모양을 가진 \<input>태그**
태그는 사용자가 다양하게 폼 태그에 입력할 수 있는 공간을 만들어 줍니다. 속성에는 type, readonly, maxlength 등이 있습니다. 자주 사용 되거나 알아두면 좋은 속성은 다음과 같다.

- type : 태그 모양을 다양하게 변경할 수 있다. type에는 text, radio, checkbox, password, button, hidden, fileupload, submit, reset 등을 지정할 수 있다.
- name : 태그 이름을 지정한다.
- readonly : 태그를 읽기전용으로 한다.
- maxlength : 해당 태그 최대 글자 수를 지정한다. 
- required : 해당 태그가 필수태그로 지정됩니다. 필수 태그를 입력하지 않고, submit 버튼을 누르면 에러메시지가 웹 브라우저에 출력됩니다.
- autofocus : 웹 페이지가 로딩되자마자 이 속성을 지정한 태그로 포커스가 이동됩니다.
- placeholder : 태그에 입력할 값에 대한 힌트를 준다.
- pattern : 정규표현식을 사용하여 특정범위 내의 유효한 값을 입력받을 때 사용한다.

**목록태그 \<select>,\<optionup>,\<option>**

\<select>는 항목을 선택할 수 있는 태그이다. 속성 중에 size와 multiple 속성이 있으며 size는 한 번에 표시할 항목 수를 의미하고, multiple는 다중선택을 허용할 것인지를 지정하는 속성이다. \<select>태그 하위에 \<optionup>태그와 \<option>태그가 있다. \<select>태그 안에서 목록들을 그룹화할 경우 사용된다. label 속성을 사용하여 그룹 이름을 지정한다. \<optgroup>태그 하위에 \<option>태그를 포함한다. \<option> 태그는 목록을 나타내는 태그이다.

**\<textarea>**

여러 줄을 입력받는 태그이다. 속성 중에 rows와 cols가 있다. rows는 줄을, cols는 한 줄에 입력될 크기를 지정한다. 

# 웹 접근성
```
웹 접근성: 웹 접근성이란 장애인이나 고령자분들, 모바일 장치를 사용하는 사람, 느린 네트워크를 이용하는 사람 등 가능한 많은 사람들이 웹사이트를 사용할 수 있도록 하는 방법이다.
```

**접근성의 장점**
- 시맨틱한 HTML (접근성이 향상된)은 SEO 향상시켜, 사이트를 찾기 쉽고 시장성이 있도록 해준다.
- 접근성을 고려하는것은 좋은 윤리적인 도덕 관념을 보여 주는데, 이것은 서비스의 대중적인 이미지를 개선시킨다.
- 모바일 사용자, 느린 네트워크 속도의 사용자등 여러 사용자들이 이용하기 쉽게 만든다. 

**장애 유형에 따른 특징과 보완대책**
![image](https://user-images.githubusercontent.com/100736077/217335042-6e79a4fc-9f64-499e-a406-f6776f428537.png)

> 접근성은 준수하면, 장애가 있는 사용자뿐만 아니라 모든 사용자에게 도움이 된다 (예 - 스크린 리더기 --  유용할 뿐만 아니라 로드 속도가 빠르고 성능이 뛰어나 모든 사람, 특히 모바일 장치 및/또는 연결 속도가 느린 사용자에게 더 좋다.)

## HTML과 접근성
- HTML에 대해 더 많은 자료와 예제를 보관하고, 더 많이 배우면 배움이 늘어나는 의미론적 HTML(시멘틱 HTML, POSH 또는 Plain Old Semantic HTML이라고 부르기도 합니다)을 사용하는 것이 중요하다.
- 시맨틱 HTML은 프로젝트 시작부터 일관되게 수행하는 경우 비시맨틱 마크업보다 작성하는 데 더 오래 걸리지 않으며 접근성 외에 다른 이점도 있다.

1. 더 쉽게 개발할 수 있다. 위에서 언급했듯이 일부 기능을 무료로 사용할 수 있으며 이해하기 더 쉽다.
2. 모바일 에서 더 좋다. 시맨틱 HTML은 논시맨틱 코드보다 파일 크기가 가볍고 반응형으로 만들기가 더 쉽다.
3. SEO에 좋음 — 검색 엔진은 비의미적 키워드 등에 포함된 키워드보다 제목, 링크 등의 키워드에 더 많은 중요성을 부여 <div>하므로 문서를 더 쉽게 찾을 수 있다.

# CSS 및 JavaScript의 접근성
##CSS
고려해야할 HTML 기능
**1. "표준" 텍스트 콘텐츠 구조**
제목, 단락, 목록 — 페이지의 핵심 텍스트 콘텐츠:
``` html
<h1>Heading</h1>

<p>Paragraph</p>

<ul>
  <li>My list</li>
  <li>has two items.</li>
</ul>
```
CSS는 다음과 같다
``` css
h1 {
  font-size: 5rem;
}

p,
li {
  line-height: 1.5;
  font-size: 1.6rem;
}
```

접근성은 아래와 같은 내용을 적용해야한다.

- 합리적인 글꼴 크기, 줄 높이, 문자 간격 등을 설정하여 텍스트를 읽기 쉽고 편안하게 만들어야한다.
- 기본 스타일처럼 일반적으로 크고 굵게 제목이 본문 텍스트에서 눈에 띄는지 확인해야하며 목록은 목록처럼 보여야 한다.
- 텍스트 색상은 배경색과 잘 대비되어야 한다.

2. 강조된 텍스트
강조된 텍스트에 간단한 색상을 추가할 수 있고, 굳이 강조 요소의 스타일을 지정할 필요는 거의 없다.

3. 약어
약어, 두문자어 또는 초기화를 확장과 연관시킬 수 있는 요소:
``` html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```
``` css
abbr {
  color: #a60000;
}
```
약어에 대해 인정되는 스타일 지정 규칙은 점선 밑줄이며 이것에서 크게 벗어나지 않아야한다.

4. 연결
하이퍼링크 — 웹에서 새로운 위치로 이동하는 방법:
``` html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```
```css
a {
  color: #ff0000;
}

a:hover,
a:visited,
a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: #000000;
  background-color: #a60000;
}
```
표준 링크 규칙은 밑줄이 그어져 있으며 표준 상태에서는 다른 색상(기본값: 파란색), 사용자가 링크를 이전에 방문했을 때 다른 색상 변형(기본값: 보라색), 링크가 활성화되면 또 다른 색상(기본값: 빨간색)으로 표시된다. 

5. 양식 요소
사용자가 웹사이트에 데이터를 입력할 수 있도록 하는 요소:
``` html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```
양식에 대해 작성할 대부분의 CSS는 요소의 크기를 조정하고, 레이블과 입력을 정렬하고, 깔끔하게 보이도록 만드는 것이다.

6. 테이블
```
테이블 형식 데이터를 표시하기 위한 테이블이다.
```
    
테이블 CSS는 일반적으로 테이블이 디자인에 더 잘 맞고 보기 흉하지 않게 만드는 역할을 합니다. 테이블 머리글이 눈에 잘 띄도록 하고(일반적으로 굵게 표시) 얼룩말 줄무늬를 사용하여 다른 행을 더 쉽게 구문 분석할 수 있도록 하는 것이 좋다.

## 색상 및 색상 대비
웹 사이트의 색 구성표를 선택할 때 텍스트(전경) 색이 배경 색과 잘 대비되는지 확인해야한다. 디자인이 멋져 보일 수 있지만 색맹과 같은 시각 장애가 있는 사람들이 콘텐츠를 읽을 수 없다면 좋지않다.

- 색상 대비를 확인하는 쉬운 방법 중의 하나로, WebAIM의 색상 대비 검사기 는 사용이 간편하며 색상 대비에 대한 WCAG 기준을 준수하기 위해 필요한 사항에 대한 설명을 제공한다.

- 또 다른 팁은 색상을 볼 수 없는 사람들에게는 좋지 않으므로 표지판/정보를 위해 색상에만 의존하지 않아야한다. 예를 들어 필수 양식 필드를 빨간색으로 표시하는 대신 별표로 표시한다.

> 명암비가 높으면 광택 화면이 있는 스마트폰이나 태블릿을 사용하는 사람도 햇빛과 같은 밝은 환경에서 페이지를 더 잘 읽을 수 있다.

    
## JavaScript
JavaScript는 사용 방법에 따라 접근성을 깨뜨릴 수도 있다.

1. JavaScript가 너무 많은 문제
- 사람들이 JavaScript에 너무 많이 의존할 때 문제가 자주 발생한다. 가능하면 JavaScript를 사용하여 모든 HTML 콘텐츠를 생성하지 말아야한다. 

2. 눈에 띄지 않게 유지
- 콘텐츠를 만들 때 방해가 되지 않는 JavaScript를 염두에 두어야 한다. 자바스크립트를 핵심 기능의 일부로 사용하면 접근성, 사용성이 떨어지는 것 뿐만 아니라 보안도 떨어지고 데이터의 무결성도 보장되지 않는다.
    
3. 기타 Javascript 접근성 문제
마우스 관련 이벤트
- 대부분의 사용자 상호 작용은 이벤트 핸들러를 사용하여 JavaScript에서 구현된다. 어떤 동작을 원할때마다 마우스업과 마우스다운 대신 키업 또는 키다운을 사용해야하며, 만약 다른사용자가 그 동작에 접근하기 원하는경우 키업 또는 키다운 이벤트 핸들러를 추가해야한다.
    
# WAI-ARIA
WAI는 W3C에서 웹 접근성을 담당하는 기관으로, ARIA는 RIA 환경의 웹 접근성에 대한 표준 기술 규격을 의미
    
- **역할:** 요소가 무엇인지 정의한다. role="navigation"이들 중 다수는 (<nav>) 또는role="complementary"(와 같은 구조적 요소의 의미론적 가치를 크게 복제하는 소위 랜드마크 역할\<aside>이다.
- **속성:** 요소의 속성을 정의하며 추가 의미 또는 의미 체계를 부여하는 데 사용할 수 있다.
- **상태:** 양식 입력이 현재 비활성화되었음을 화면 판독기에 지정하는 와 같은 요소의 현재 조건을 정의하는 특수 속성이다.
    
    
WAI-ARIA 속성에 대한 중요한 점은 브라우저의 접근성 API(스크린 리더가 정보를 가져오는 위치)에 의해 노출되는 정보를 제외하고 웹 페이지에 대한 어떤 것도 영향을 미치지 않는다는 것이다. WAI-ARIA는 속성이 CSS로 요소를 선택하는 데 유용할 수 있지만 웹 페이지 구조, DOM 등에 영향을 미치지 않는다.
    
## 언제 WAI-ARIA를 사용해야 하는가?
WAI-ARIA가 유용한 네 가지 주요 영역이 있다.

1. **표지판/랜드마크 :** ARIA의 role속성 값은 HTML 요소(예: <nav>)의 의미를 복제하거나 HTML 의미를 넘어 다른 기능 영역(예: , , , 등)에 표지판을 제공하는 랜드 search마크 역할을 할 수 있다.tablist tab listbox
2. **동적 콘텐츠 업데이트 :** 화면 판독기는 지속적으로 변경되는 콘텐츠를 보고하는 데 어려움을 겪는 경향이 있다. ARIA를 사용 하면 예를 들어 XMLHttpRequest 또는 DOM APIaria-live 를 통해 콘텐츠 영역이 업데이트될 때 스크린 리더 사용자에게 알릴 수 있다.
3. **키보드 접근성 향상 :** 기본 키보드 접근성이 있는 내장 HTML 요소가 있다. JavaScript와 함께 다른 요소를 사용하여 유사한 상호 작용을 시뮬레이트하면 결과적으로 키보드 접근성 및 화면 판독기 보고가 어려워진다. 이것이 불가피한 경우 WAI-ARIA는 다른 요소가 포커스를 받을 수 있는 수단을 제공한다(사용 tabindex).
4. **비의미적 컨트롤의 접근성 :** CSS/JavaScript와 함께 일련의 중첩된 \<div>를 사용하여 복잡한 UI 기능을 만들거나 기본 컨트롤이 JavaScript를 통해 크게 향상/변경되면 접근성이 저하될 수 있다. 의미론이나 다른 단서가 없으면 기능이 무엇을 하는지 알아내기 어렵다. 이러한 상황에서 ARIA는 button, listbox, 또는 와 같은 역할과 또는 tablist같은 속성 의 조합으로 누락된 것을 제공하여 기능에 대한 추가 단서를 제공할 수 있다.aria-required aria-posinset
    
-**하지만 한 가지 기억 해야 할 점 은 필요할 때만 WAI-ARIA를 사용해야 한다는 것이다.**
    
## WAI-ARIA를 사용해야하는 이유
- RIA의 동적 웹 애플리케이션 접근성 보장 지침이 부족
- Ajax, 통한 실시간 변경 콘텐츠, SPA 방식의 콘텐츠 변경
- 화면 확대사용자의 경우, 가시 범위 밖 콘텐츠의 변경 내용 인지 불가능
