import { Link, useNavigate } from "react-router-dom"

const mockProducts = [
    {
        id: 3,
        category: "rank",
        name: "상품-1",
        price: 3000
    },
    {
        id: 12,
        category: "random",
        name: "상품-2",
        price: 2000
    }
]


// 컴포넌트 함수명의 시작은 무조건 대문자
function Main() {

    const handler = () => {}
    const navigation = useNavigate()
    // html, javascript에서 사용하는 a태그와 location 객체를 사용해서
    // 페이지를 이동 => bundle.js를 다시 요청

    // useNavigate()는 페이지의 새로고침 없이 (history객체와 state를 이용하여)
    // 페이지의 갱신 없이 주소를 이동하는 함수 -> bundle.js 다시 요청x
    // 자바스크립트 자체 기능X react-router-dom을 개발한 개발진들이 정의한 함수


    return <div onClick={handler}>
        {/*
            html 문법을 반환할 수 있음 => jsx 문법
            원래는 반드시 jsx를 붙였어야하지만 지금은 js로도 가능
        */}
        {
            mockProducts.map((product) => {
                console.log("hello")
                // {}는 추가 연산 가능
                // return 생략인 ()는 코드블럭이 없기 때문에 연산 x
                // react에서 map이후에는 각 요소에 key라는 속성을 부여해야 한다
                // // "랜더트리가 구분할 수 있는 특정한 고유 값을 부여"

                // return <Link to={`/todo/${product.id}?goods=${product.category}`} key={product.id}>
                //     {product.name}
                // </Link>
                return <div onClick={()=> {
                    // window.location.href = `/todo/${product.id}?goods=${product.category}`
                    navigation(`/todo/${product.id}?goods=${product.category}`)
                }}>
                    {product.name}
                </div>
            })
        }
    </div>
}
export default Main