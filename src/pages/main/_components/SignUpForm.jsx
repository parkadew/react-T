import TDButton from "../../../components/Button"
import FormInput from "../../../components/FormInput"
import { Form } from './style'

const SIGNFORM_ARRAY = [
    {
        label: "이메일",
        size: 3,
        name: "email",
        option: {
            placeholder: "이메일을 입력해주세요"
        }
    },
    {
        label: "비밀번호",
        size: 3,
        name: "password"
    },
    {
        label: "비밀번호 확인",
        size: 3,
        name: "password-confirm"
    }
]

const SignUpForm = ({formState}) => {

    const onSubmitSignUp = (event) => {
        // 회원가입 때 입력했던 이메일명을 통해 "oooo@naver.com님 환영합니다" alert
        // 로그인으로 변경
        // input - value를 가지고 오는 방법
        event.preventDefault()
        const email = event.target.email.value
        alert(`${email}님 환영합니다`)
        formState = "SIGN-IN"
    }

    return <S.Form onSubmit={onSubmitSignUp}>
        {SIGNFORM_ARRAY.map((form) => 
            <FormInput 
                key={form.name} 
                size={form.size} 
                label={form.label}
                name={form.name}
                /*
                form.option?.placeholder // option이 있다면 placeholder를 반환해다
                form.option && form.option.placeholder

                form.option ? form.option.placeholder : form.name
                form.option?.placeholder ?? form.name
                */
                placeholder={form.option?.placeholder}
            />
        )}
        <TDButton size={'full'} variant={"primary"}>회원가입</TDButton>
    </S.Form>
}

const S = {
    Form
}

export default SignUpForm


// styled-components
// scss + post.css // app.module.scss -> 러닝커브 + 퍼블리셔분들이랑 쉽게 소통
// emotion // styled-components랑 사용법이 완전히 같습니다 - css-in-js - 편해요

// tailwind-css // nextjs 스타트업
// vanilla extract, styleX
//                  ------ meta