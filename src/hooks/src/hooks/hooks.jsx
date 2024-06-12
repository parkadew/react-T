import { useState } from "react";

import React from "react";

const Usestate = () => {
    const [state, setState] = useState(true);

    const onePressTrue = () => {
        console.log("진실입니다");
    };

    const onePressFalse = () => {
        console.log("거짓입니다");
    };
    const onPressChangeState = () => {
        setState(!state) // false --> 비동기
        console.log(state) // false
        console.log(!state) // false
        // 상태변경후 같은 코드 블럭에서 변경되었을 것이다라고 판단 후 코드를 작성하면 안된다.
    };

    return (
        <div>
            {state ? "진실" : "거짓"}
            <button onClick={state ? onePressTrue : onePressFalse}>클릭</button>
            <button onClick={onPressChangeState}>변경</button>
            {/**질문 2!여기 onclick에 익명함수를 사용하면 fasle값이 바로 보이지않는다. */}
        </div>
    )

}
export default Usestate