
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
              <td>진행자 소개 및 라포 형성</td>
              <td>- 진행자 소개<br />- 교육에 대한 이해를 도모하고 참여하기 위한 라포 형성<br />- 프로그램 개관</td>
            </tr>
            <tr>
              <td>2</td>
              <td>스트레스 이해하기</td>
              <td>- 스트레스란? 정의에 대해 알아보고 이해하기<br />- 나에게 스트레스란 무엇인지 정의내리기<br />- 내가 경험한 스트레스에 대해 이야기 나누기</td>
            </tr>
            <tr>
              <td>3</td>
              <td>스트레스 대응 방식 파악하기</td>
              <td>- 스트레스의 원인과 증상, 종류에 대해 파악<br />- 스트레스 진단하기(주관적/객관적 방법)<br />- 자신만의 스트레스 대응 방식 정리하기</td>
            </tr>
            <tr>
              <td>4</td>
              <td>실천계획세우기 및 다짐하기</td>
              <td>- 스트레스 대응 방식의 예시 제안 및 소개<br />- 심상법/ 자기 동기화 알아보기<br />- 나에게 적용할 실천 계획 작성하기</td>
            </tr>
            <tr>
              <td>5</td>
              <td>질의응답 및 마무리</td>
              <td>- 질의응답, 설문지/동의서 작성</td>
            </tr>
          </tbody>
        )
        : title==="근로기준법"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td>진행자소개 및 교육목표 설명</td>
              <td>- 진행자 소개<br />- 교육에 대한 이해를 도모하고 참여하기 위한 라포 형성<br />- 프로그램 개관</td>
            </tr>
            <tr>
              <td>2</td>
              <td>노동법 적용, 근로계약, 수습 근로자</td>
              <td>- 근로기준법 적용범위<br />- 상시 근로자수에 따른 적용 규정<br />- 프리랜서의 근로자성, 수습근로자 해고 등</td>
            </tr>
            <tr>
              <td>3</td>
              <td>근로시간, 휴일, 휴가</td>
              <td>- 연장, 야간, 휴일근로의 제한<br />- 휴게시간 부여 방법<br />- 휴일 종류 및 연차유급휴가 발생 등</td>
            </tr>
            <tr>
              <td>4</td>
              <td>임금, 직장 내 괴롭힘, 근로관계 종료</td>
              <td>- 임금, 휴업수당<br />- 직장 내 괴롭힘 조치<br />- 사직서 효력발생<br />- 실업급여의 부정수급 주의</td>
            </tr>
            <tr>
              <td>5</td>
              <td>강의 마무리</td>
              <td>- 프로그램 주제 관련 핵심 정리 및 질의 응답<br />- 설문지/동의서 작성</td>
            </tr>
          </tbody>
        )
        : title==="취업을 위한 나 이해하기"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td>진행자 소개 및 교육목표 설명</td>
              <td>- 진행자 소개<br />- 교육목표를 설명하고 참여하기 위한 라포형성<br />- 프로그램 개관 및 자기 이해의 중요성</td>
            </tr>
            <tr>
              <td>2</td>
              <td>나의 보유 능력 탐색하기</td>
              <td>- 항목별 보유 능력 탐색<br />- 나의 보유 능력의 사례 도출하기<br />- 나의 능력 강점 이야기하기</td>
            </tr>
            <tr>
              <td>3</td>
              <td>나의 성격 강점 탐색하기</td>
              <td>- 업무수행 시 도움이 되는 성격 강점 탐색<br />- 성격 강점의 근거 도출<br />- 성격 강점 구체적으로 이야기하기</td>
            </tr>
            <tr>
              <td>4</td>
              <td>나의 직업 가치관 생각하기</td>
              <td>- 사례를 통해 5개의 기업 중 채용 결정하기<br />- 나에게 중요한 직업 가치관 정리하기 <br />- 탐색 나에 대해 정리하기</td>
            </tr>
            <tr>
              <td>5</td>
              <td>프로그램 마무리</td>
              <td>- 소감 나누기를 통해 프로그램을 마무리</td>
            </tr>
          </tbody>
        )
        : title==="이력서, 자기소개서 작성하기"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td>진행자 소개 및 교육 목표 설명</td>
              <td>- 진행자 소개<br />- 교육 목표 설명하고 참여하기 위한 라포 형성<br />- 전체 프로그램 내용 및 일정 안내</td>
            </tr>
            <tr>
              <td>2</td>
              <td>이력서, 자기소개서 핵심 리뷰</td>
              <td>-좋은 이력서의 의미<br />- 성취업적분석과 작성법</td>
            </tr>
            <tr>
              <td>3</td>
              <td>이력서 작성 가이드와 종류 이해</td>
              <td>- 이력서의 작성 가이드를 살펴보고, 선택할 수 있는 이력서의 종류를 이해한다.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>자기소개서 항목별 작성방법</td>
              <td>- 자기소개서를 살펴보고 항목별 작성방법과 주의사항을 안내 함.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>프로그램 마무리</td>
              <td>- 소감 나누기를 통해 프로그램을 마무리</td>
            </tr>
          </tbody>
        )
        : title==="마음의 힘 기르기"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td>진행자소개 및 교육목표 설명</td>
              <td>- 진행자소개<br />- 교육목표 설명하고 참여하기 위한 라포형성</td>
            </tr>
            <tr>
              <td>2</td>
              <td>위기를 기회로</td>
              <td>- 관점 전환하기<br />- 위기를 견디어 내는 마음의 힘, 회복탄력성</td>
            </tr>
            <tr>
              <td>3</td>
              <td>긍정적인 사고</td>
              <td>- 자기 대화의 중요성<br />- 사고의 흐름 이해하기(사고와 행동의 전개 과정 이해)<br />- 사고 전환 연습하기</td>
            </tr>
            <tr>
              <td>4</td>
              <td>내 인생, 다시 바라보기</td>
              <td>- 나의 인생 곡선 그리기<br />- 가장 힘들었던 사건에 대한 나의 관점 전환하기</td>
            </tr>
            <tr>
              <td>5</td>
              <td>프로그램 마무리</td>
              <td>- 소감 나누기를 통해 프로그램을 마무리</td>
            </tr>
          </tbody>
        )
        : title==="잘 살아온 내 인생, 앞으로는?"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td>진행자소개 및 교육목표 설명</td>
              <td>- 진행자 소개<br />- 교육 목표 설명하고 참여하기 위한 라포 형성<br />- 전체 프로그램 내용 및 일정 안내</td>
            </tr>
            <tr>
              <td>2</td>
              <td>인생곡선 그리기</td>
              <td>- 과거에 대해 회상하기<br />- 현재까지의 인생에 대해 곡선 그리기<br />- 인생에서 가장 좋았던 기억과 가장 힘들었던 기억 정리</td>
            </tr>
            <tr>
              <td>3</td>
              <td>퇴직 후 다양한 경력경로 이해하기</td>
              <td>- 퇴직 후 경력경로 탐색하기<br />- 다양한 경력경로 성공사례 성공요인 도출하기</td>
            </tr>
            <tr>
              <td>4</td>
              <td>앞으로 어떻게 살고 싶은가</td>
              <td>- 현재 삶의 영역별 만족도 진단하기<br />- 앞으로의 삶 탐색하기<br />- 살고 싶은 삶을 위해 무엇을 할지 생각하기</td>
            </tr>
            <tr>
              <td>5</td>
              <td>프로그램 마무리</td>
              <td>- 소감 나누기를 통해 프로그램을 마무리</td>
            </tr>
          </tbody>
        )
        : title==="직장인을 위한 대화의 기술"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td>진행자소개 및 교육 목표 설명</td>
              <td>- 진행자 소개<br />- 교육 목표 설명하고 참여하기 위한 라포 형성<br />- 전체 프로그램 내용 및 일정 안내</td>
            </tr>
            <tr>
              <td>2</td>
              <td>비합리적인 사고 이해하기</td>
              <td>- 생각의 다양한 이해<br />- 비합리적 사고 이해하기</td>
            </tr>
            <tr>
              <td>3</td>
              <td>행복한 대화를 위한 의사소통 방법</td>
              <td>- 내 마음 헤아리고 전달하기<br />- 나 전달법 예시에서 사실/감정/바람 찾기<br />- 상황을 통한 나 전달법 연습하기 </td>
            </tr>
            <tr>
              <td>4</td>
              <td>행복한 대화를 위한 의사소통 방법</td>
              <td>- 상대방 마음 헤아리고 전달하기<br />- 제시된 사례에서 상대방의 속마음/사실/감정 찾기<br />- 상황을 통한 상대방 마음 헤아리고 전달하기 연습 </td>
            </tr>
            <tr>
              <td>5</td>
              <td>프로그램 마무리</td>
              <td>- 소감 나누기를 통해 프로그램을 마무리</td>
            </tr>
          </tbody>
        )
        : title==="합격을 부르는 면접전략"
        ?(
          <tbody>
            <tr>
              <td>1</td>
              <td>진행자 및 프로그램 소개</td>
              <td>- 프로그램 안내와 진행자 소개<br />- 출석체크 및 아이스브레이킹</td>
            </tr>
            <tr>
              <td>2</td>
              <td>면접이란?</td>
              <td>- 면접의 정의<br />- 다양한 면접종류 소개<br />- 최근 이슈가 되는 예상질문 알아보기</td>
            </tr>
            <tr>
              <td>3</td>
              <td>대면 면접과 비대면 면접</td>
              <td>- 대면 면접의 특깅<br />- 비대면 면접의 특징<br />- AI면접준비에 도움이 되는 사이트 알아보기</td>
            </tr>
            <tr>
              <td>4</td>
              <td>성공하는 면접 준비</td>
              <td>- 성공적인 면접을 위한 준비<br />- 입사지원서 3회이상 정독, 셀프면접영상 5회이상 촬영<br />- 참여자들의 질문사항 답변 및 피드백 제공</td>
            </tr>
            <tr>
              <td>5</td>
              <td>- 프로그램 마무리</td>
              <td>- 수료증 발급방법 안내<br />- 참여 소감 및 만족도 설문조사</td>
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