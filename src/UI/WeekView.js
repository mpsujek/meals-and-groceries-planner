import React from "react";
import styled from "styled-components";

const WeekWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const WeekView = () => {
  return (
    <WeekWrapper>
      <div>
        <h3>Monday</h3>
      </div>
      <div>
        <h3>Tuesday</h3>
      </div>
      <div>
        <h3>Wednesday</h3>
      </div>
      <div>
        <h3>Thursday</h3>
      </div>
      <div>
        <h3>Friday</h3>
      </div>
      <div>
        <h3>Saturday</h3>
      </div>
      <div>
        <h3>Sunday</h3>
      </div>
    </WeekWrapper>
  );
};

export default WeekView;
