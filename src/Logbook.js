
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
  & tr>:nth-child(1){
    font-size: 10px;
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
        {title==="구직스트레스 다루기"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td>- 진행자 소개 및 라포 형성</td>
              <td>- 진행자 소개<br />- 교육에 대한 이해를 도모하고 참여하기 위한 라포 형성<br />- 프로그램 개관</td>
            </tr>
            <tr>
              <td>2</td>
              <td>- 스트레스 이해하기</td>
              <td>- 스트레스란? 정의에 대해 알아보고 이해하기<br />- 나에게 스트레스란 무엇인지 정의내리기<br />- 내가 경험한 스트레스에 대해 이야기 나누기</td>
            </tr>
            <tr>
              <td>3</td>
              <td>- 스트레스 대응 방식 파악하기</td>
              <td>- 스트레스의 원인과 증상, 종류에 대해 파악<br />- 스트레스 진단하기(주관적/객관적 방법)<br />- 자신만의 스트레스 대응 방식 정리하기</td>
            </tr>
            <tr>
              <td>4</td>
              <td>- 실천계획세우기 및 다짐하기</td>
              <td>- 스트레스 대응 방식의 예시 제안 및 소개<br />- 심상법/ 자기 동기화 알아보기<br />- 나에게 적용할 실천 계획 작성하기</td>
            </tr>
            <tr>
              <td>5</td>
              <td>- 질의응답 및 마무리</td>
              <td>- 질의응답, 설문지/동의서 작성</td>
            </tr>
          </tbody>
        )
        : title==="근로기준법"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td>- 진행자소개 및 교육목표 설명</td>
              <td>- 진행자 소개<br />- 교육에 대한 이해를 도모하고 참여하기 위한 라포 형성<br />- 프로그램 개관</td>
            </tr>
            <tr>
              <td>2</td>
              <td>- 노동법 적용, 근로계약, 수습 근로자</td>
              <td>- 근로기준법 적용범위<br />- 상시 근로자수에 따른 적용 규정<br />- 프리랜서의 근로자성, 수습근로자 해고 등</td>
            </tr>
            <tr>
              <td>3</td>
              <td>- 근로시간, 휴일, 휴가</td>
              <td>- 연장, 야간, 휴일근로의 제한<br />- 휴게시간 부여 방법<br />- 휴일 종류 및 연차유급휴가 발생 등</td>
            </tr>
            <tr>
              <td>4</td>
              <td>- 임금, 직장 내 괴롭힘, 근로관계 종료</td>
              <td>- 임금, 휴업수당<br />- 직장 내 괴롭힘 조치<br />- 사직서 효력발생<br />- 실업급여의 부정수급 주의</td>
            </tr>
            <tr>
              <td>5</td>
              <td>- 강의 마무리</td>
              <td>- 프로그램 주제 관련 핵심 정리 및 질의 응답<br />- 설문지/동의서 작성</td>
            </tr>
          </tbody>
        )
        : title==="취업을 위한 나 이해하기"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        )
        : title==="이력서, 자기소개서 작성하기"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        )
        : title==="마음의 힘 기르기"
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
        : title==="잘 살아온 내 인생, 앞으로는?"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        )
        : title==="직장인을 위한 대화의 기술"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        )
        : title==="합격을 부르는 면접전략"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        )
        : title==="DISC 행동유형진단으로 알아본 자기이해"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        )
        : title==="MBTI를 통한 스마트한 직장 적응방법"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        )
        : "강의 주제를 선택하셨나요?"}
      </Box>
    </Container>
  )
}
export default Logbook;