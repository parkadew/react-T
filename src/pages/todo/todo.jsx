import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../libs/styles/common";
import TDButton from "../../components/Button";
import AddTodoModal from "./_components/addTodoModal";
import TodoList from "./_components/todoList";


const Todo = () => {

    // isOpenAddTodoModal 변수가 하는 역할은 무엇일까
    // isOpenAddTodoModal이 true일 때만 addModal을 보여주기 위함
    let isOpenAddTodoModal = false;

    // todos는 todoList 컴포넌트가 아니라 상위인 todo에 있어야하는 이유
    // todos는 todo data로 이루어진 배열

    // props를 전달은 상위에서 하위만 가능
    // todos는 todo 목록을 보여주는 todoList 컴포넌트에도 필요하지만
    // todo를 추가하는 addTodoModal에도 필요하기 떄문에 부모인 Todo 컴포넌트가 갖고 있어야함

    // 이것이 과연 옳을까?
    // 하위 컴포넌트에게 전달을 하기 위해서 상위 컴포넌트가 값을 알아야한다?
    // todo (상태) --> 전역으로 만드는 것이 불가능 ---> 전역 상태

    const todos = [
        {
          id: 1,
          title: "example-1",
          content: "example-1",
          state: true
        },
        {
          id: 2,
          title: "example-2",
          content: "example-2",
          state: false
        }
      ] 

    return <>
    {isOpenAddTodoModal && <AddTodoModal todos={todos}/>}
    <S.Wrapper>
        <S.Container>
            <S.Title>TODOLIST</S.Title>
            <TodoList todos={todos}/>
            <TDButton size={'full'} variant={'primary'}>
              추가
            </TDButton>
        </S.Container>
    </S.Wrapper>
  </>
}
export default Todo

const Wrapper = styled.div`
  height: 100vh;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: '#ffffff';
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${(props) => props.theme.colors.primary};
  // themeProvider로 전달된 theme 객체는
  // 콜백함수의 theme이라는 key로 전달 theme.colors.primary

  color: ${({ theme }) => theme.colors.text.white};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const S = {
  Wrapper,
  Container,
  Title
}