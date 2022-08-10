import React from "react";
import { css } from "@emotion/css";
import { ToggleButtons, Avatar } from "../index";

// 왼쪽에 mui로 버튼 만들기 - PLAN / ACTUAL
// 오른쪽에 사용자 아이콘 버튼 만들기

const LNB = () => {
  return (
    <div
      className={css`
        height: 4rem;
      `}
    >
      <div
        className={css`
          height: inherit;
          width: 960px;
          margin-left: auto;
          margin-right: auto;

          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <ToggleButtons
          defaultAlignment={"Plan"}
          size={"medium"}
          buttons={[{ name: "Plan" }, { name: "Actual" }]}
        />
        <Avatar />
      </div>
    </div>
  );
};

export default LNB;
