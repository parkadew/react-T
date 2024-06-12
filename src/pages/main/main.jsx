

import styled from 'styled-components'
import SignInForm from './_components/sign-in-form'
import SignUpForm from './_components/SignUpForm'

/* 
컴포넌트를 나누는 기준
    1. 재사용
    2. 가독성
    3. 단일 기능
    4. 랜더링 최적화
    -> 리랜더링 (함수 재실행) 
    -> 내가 리랜더하고 싶은 함수(컴포넌트)가 아니라면 랜더링 해서는 안된다.

    => 코드를 치기 전에 컴포넌트 구조를 구상 (완벽하지는 않아도 괜찮습니다)
    => 코드를 치면서, 리뷰를 받으면서 컴포넌트 구조를 수정
*/


const Main = () => {
    // 컴포넌트 -> 레이아웃, 회원가입 폼, 로그인 폼, 인풋, 버튼
    // 만약에 컴포넌트 나누는게 익숙하지 않으면 -> 한번에 작성했다가 이후에 나눠도 ok
    
    let formState = "SIGN-IN"
    // let isFormSignIn = true

    const TAB_ARRAY = [
        {
            name: "SIGN-IN",       
        },
        {
            name: "SIGN-UP",
        }
    ]
    

    const handlePressSignTab = (tabName) => {
        // if(formState === "SIGN-IN"){
        //     formState = "SIGN-UP"
        // } else {
        //     formState = 'SIGN-IN'
        // }
        formState = tabName
        console.log(formState)
    }
    // const onClickSignTab = () => {}

    return <S.Wrapper>
        <S.Container className={formState === "SIGN-IN" ? "": ""}>
            {/**container*/}
            {/**header*/}
            <S.Header>
                {TAB_ARRAY.map((tab, index) => <S.Tab 
                    key={index}
                    $isSelected={formState === tab.name}
                    onClick={()=>handlePressSignTab(tab.name)}
                >
                    {tab.name}
                </S.Tab>)}
            </S.Header>
            {
              formState === 'SIGN-IN' ? 
              <SignInForm /> : 
              <SignUpForm formState={formState}/>
            }
        </S.Container>
    </S.Wrapper>
}
export default Main

// 컴포넌트 앞글자는 대문자로 만들어야한다
// 스타일 된 요소를 생성해서 컴포넌트화한다 === styled components

const Wrapper = styled.div`
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 360px;
    border: 1px solid #999;
`

const Header = styled.header`
    background-color: #00c7ae;
    display: flex;
`

const Tab = styled.div`
    width: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props)=> props.$isSelected && 'background-color: #e0e0e0;'}
    /* background-color: ${(props)=> props.isSelected && "#e0e0e0"}; */
    
    font-size: 32px;
    padding: 16px;
    font-weight: bold;
    /* 
        div > section > p 
        div > section > p > a

        div > section > p {
            &(div > section > p) > a {
            }
        }
    */

    &:hover{
        background-color: #e0e0e0;
    }
`

const S = {
    Wrapper,
    Container,
    Header,
    Tab
}

