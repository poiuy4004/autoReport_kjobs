
import styled from "styled-components";

const Container = styled.article`
  align-items: flex-start;
`
const SubTitle = styled.h1`
  margin: 10px 0 0 10px;
  font-size: 17px;
  line-height: 34px;
`
const Box = styled.table`
  width: 601.3px;
  margin: 8px 0 24px 24px;
  text-align: center;
  & th{
    font-size: 10px;
    font-weight: 700;
  }
  & tr>:nth-child(2),& tr>:nth-child(3){
    padding: 8px 0 8px 8px;
    text-align: left;
    font-size: 10px;
  }
`
function Logbook({title}){
  return(
    <Container>
      <SubTitle>다. 운영일지</SubTitle>
      <Box border="1">
        <thead>
          <tr>
            <th>No.</th>
            <th style={{textAlign: "center"}}>프로그램 주요내용</th>
            <th style={{textAlign: "center"}}>운영상 특성</th>
          </tr>
        </thead>
        {title==="마음의 힘 기르기"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td>- 진행자소개 및 교육목표 설명</td>
              <td>- 진행자소개<br />- 교육목표 설명하고 참여하기 위한 라포형성</td>
            </tr>
            <tr>
              <td>2</td>
              <td>- 위기를 기회로</td>
              <td>- 관점 전환하기<br />- 위기를 견디어 내는 마음의 힘, 회복탄력성</td>
            </tr>
            <tr>
              <td>3</td>
              <td>- 긍정적인 사고</td>
              <td>- 자기 대화의 중요성<br />- 사고의 흐름 이해하기(사고와 행동의 전개 과정 이해)<br />- 사고 전환 연습하기</td>
            </tr>
            <tr>
              <td>4</td>
              <td>- 내 인생, 다시 바라보기</td>
              <td>- 나의 인생 곡선 그리기<br />- 가장 힘들었던 사건에 대한 나의 관점 전환하기</td>
            </tr>
            <tr>
              <td>5</td>
              <td>- 프로그램 마무리</td>
              <td>- 소감 나누기를 통해 프로그램을 마무리</td>
            </tr>
          </tbody>
        )
        : "강의 주제를 선택하셨나요?"}
      </Box>
    </Container>
  )
}
export default Logbook;