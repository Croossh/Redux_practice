# <1일차>

- 목표

1. useState 를 써보고 redux를 이용해서 상태관리를 하면 어떤 편리함이 있는지 알아보기 위함
2. 원래 처음에는 css는 X, 기능구현만 진행
3. 전반적인 react, redux 사용을 익혀보자!

## 회고

- 첫날 했던것

1. useState를 이용해서 주문하기 버튼을 누르면 수량이 -1 되게 state를 설정

- 익숙한 useState를 쓰면서 사실 왜 redux를 써야하는지 몰랐다.
- 근데, 해당 state를 여러군데에서 써야하는 문제가? 있어서 아! state를 redux를 통해 전역적으로 관리해야할 필요성을 느꼈음!

2. redux를 설치함
   => npm create-react-app [폴더명] --template -redux
   (index.js에서 Provider,store 설정은 되어있었음!)
3. 각 컴포넌트별로 Slice를 만들었음
4. 기본적인 action을 만듬!
5. store에 등록함
6. 컴포넌트에서 useSelector를 통해 store에 있는 모든 state를 받아와서 써먹음
7. dispatch를 통해 action을 전달해서 state를 변경하는 부분까지 구현함

여기서 문제를 부딪힘<br>
=> 세트메뉴에서는? 모든 state를 불러와서 한번에 변경해줘야하는데, 하나의 액션으로 모든 state를 변경해줄순없는지?<br>
=> 해결.<br>
해당 모든 action을 불러와서 각각 dispatch로 전달해주는 방법을 택함

- 추후 extraReducer가 있다는 사실을 알게됨(한번 적용해볼 예정)
  <br>

# <2일차>

1. router 써보자~! 페이지를 나눠보자~! App.js에 router를 설정하고,<br>
   (react-router-dom v5 와 v6의 차이점을 알게됨!)<br>
   => Switch라는 기능이 있었는데, 매칭되는 라우트 하나를 랜더링 하게 한다! 근데? 통상 홈페이지인 "/" 경로가 첫번째에 매칭이되면, 그 이후의 라우터는 넘어갈수 없음...<br>
   그래서 exact 라는 키워드를 쓰거나, 홈 라우터를 맨밑으로 보내주는 방식을 썼었는데 v6로 넘어오면서 Switch의 단점을 보안하는 Routes라는 기능이 나옴!<br>
   <br>
   => 그래서.. path에 따라 보여줄 element를 설정하고, 그 중...

2. 페이지 별로 파일을 구분하고, 디렉토리 구조를 재구성함<br>
   app(store), feature(페이지를 구성하는 component+slice), pages(page_components) 그리고 최상위에 App.js

3. order 페이지에서는 useParams를 이용해서 param에 맞는 컴포넌트를 보여줌

## 회고

### 문제1.

4. 세트메뉴 설정
   단품메뉴중 하나라도 0이될때 세트메뉴를 주문할수 없게 하려 했음<br>
   <br>
   <strong>방법 1.</strong>

```javascript
<button
  className={findMinNumber() !== 0 ? `able` : `button disable`}
  onClick={() => {
    dispatch(orderAmericano());
    dispatch(orderCake());
    dispatch(orderWaffle());
  }}
>
  세트메뉴 주문하기
</button>
```

<strong>방법 2.</strong>

```javascript
{
  btnShow === true ? (
    <Button
      variant="contained"
      onClick={() => {
        dispatch(orderAmericano());
        dispatch(orderCake());
        dispatch(orderWaffle());
      }}
    >
      세트메뉴 주문하기
    </Button>
  ) : (
    <p>재고 소진으로 단품 주문만 가능합니다.</p>
  );
}
```

=> 2번째 방법이 jsx문법의 특징을 잘 이용한 것이라 판단해서 방법 2로 결정!

### ++ 깨달은점

현재는 각 slice 안에있는 initialState 들이 원시타입으로 저장되어있는데, 나중에 확장 및 더 많은 데이터들을 다루기 위해서는 initialState를 객체형태로 선언하는게 더 좋을것이라고 생각됨!

### ++ 객체형태에서 key/value 만 뽑아오고 싶을때

=> Object.keys(객체)<br>
=> Object.values(객체)<br>

5. 재고추가할때 input 값을 받아와서 state를 변경해주고 싶었음
   => useState를 통해 input의 값의 상태를 관리함
   => dispatch로 action넘길때 input에서 받아온 값(state)을 payload로 전달해서 state 값을 변경 시켜줄 수 있었음!

```javascript
cakeAddStock(state, action) {
      return (state += action.payload);
    },
```

# <3일차>

1. 프론트엔드의 숙명인 CSS를 지나칠수 없었다.<br>
   => 기본 CSS 말고, 이왕 적용하는거라면 styled-components 와 UI Framwork인 Mui를 써보기로 함!

선택한 이유?

1. Mui(Material UI)

- 가장 안정적이고 오래되었으며,<br>
- react에서 편히 쓸수 있도록 컴포넌트 형으로 제공하는 점이 너무 좋았다.<br>

2. styled-components

- 따로 css 파일을 만들지 않아도 jsx 파일 안에서 관리 가능!<br>
- className에 Hash된 string을 제공함<br>
- 그래서 선택자 이름이 겹칠일이 없음!<br>
- 컴포넌트 재사용성이 수월해짐! ex) Contanier<br>
