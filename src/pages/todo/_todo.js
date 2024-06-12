import { useParams, useSearchParams } from "react-router-dom"

export const Todo = () => {
    "/구분 query-string, <<url-parameter>>"
    const { todoId } = useParams()
    const [ searchParams ] = useSearchParams()

    // 필터링 -> 색상을 검정색으로 선택 -> 화면이 바뀌어야함
    // 리엑트에서 화면을 다시 그리려면 state라는 값이 수정
    // searchParams, useParams 등을 사용하면 자체가 state이기 때문에 편리
    
    console.log(todoId, searchParams.get("goods"))

    return <div>투두 페이지입니다.</div>
}