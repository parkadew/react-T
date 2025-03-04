import styled from "styled-components"
import OneTodo from "./oneTodo"


const TodoList = ({ todos }) => {
    return (
        <S.Wrapper>
            {todos.map((todo, index) => (
                <OneTodo todo={todo} key={index} />
            ))}
        </S.Wrapper>
    )
}
export default TodoList

const Wrapper = styled.div`
    padding: 32px 0;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`
const S = {
    Wrapper
}