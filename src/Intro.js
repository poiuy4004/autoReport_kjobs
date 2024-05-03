import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.article`
  align-items: flex-start;
`
const Title = styled.h1`
  font-size: 18px;
  line-height: 36px;
`
const SubTitle = styled.h1`
  margin: 10px 0 0 10px;
  font-size: 17px;
  line-height: 34px;
`
const ContentContainer = styled.div`
  margin: 0 0 0 18px;
  font-size: 14px;
  line-height: 28px;
`
const Participants = styled.input`
  width: ${props=>props.value.length<2? "10px" : props.value.length<3? "20px" : "30px"};
  padding: 0 1px 0;
  font-size: 14px;
  text-align: right;
  line-height: 28px;
  border: none;
  color: ${props=>props.value===0? "red" : "black"};
`
const Completion = styled.input`
  width: ${props=>props.value.length<2? "10px" : props.value.length<3? "20px" : "30px"};
  padding: 0 1px 0;
  font-size: 14px;
  text-align: right;
  line-height: 28px;
  border: none;
  color: ${props=>props.value===0? "red" : "black"};
`
const Consultant = styled.input`
  width: ${props=>props.value.length<2? "15px" : props.value.length<3? "30px" : "45px"};
  font-size: 14px;
  text-align: center;
  line-height: 28px;
  border: none;
  color: ${props=>props.value==="장용민"? "red" : "black"};
`
const ParticipantsContainer = styled.table`
  margin: 8px 0 24px 24px;
  font-size: 11px;
  text-align: center;
  & th,& td{
    padding: 3px 7px;
  }
`
const PersonBox = styled.td`
  &>:nth-child(1),&>:nth-child(2),&>:nth-child(3),&>:nth-child(4),&>:nth-child(5){
    margin: 0 2px 0 0;
  }
  ${props=>{
    if(Number(props.children[0].props.id)===Number(props.children[0].props.className)){
      return "&>*{background-color: white;}"
    }
    else{return "&>*{background-color: red;}"};
  }}
`
const TotalPersonBox = styled(PersonBox)`
  &>*{background-color: white;}
`
const PersonBox2 = styled(PersonBox)`
  &>*{background-color: white;}
`
const Person = styled.input`
  height: 29.02px;
  width: 60px;
  font-size: 11px;
  text-align: center;
  border: solid 1px black;
  color: ${props=>props.value===99? "red" : "black"};
`
const TotalPerson = styled(Person)`
  color: black;
`
const Person2 = styled(Person)`
  color: black;
`
const TotalCompletion = styled.input`
  width: 22.02px;
  font-size: 11px;
  text-align: center;
  border: none;
  ${props=>Number(props.value)===0&&"color: red; font-weight: 700;"}
`
const CharacterBox = styled.div`
  display: flex;
  column-gap: 3px;
  line-height: 18px;
`
const Character = styled.input`
  width: 333%;
  font-size: 14px;
  line-height: 18px;
  border: none;
  &::placeholder{
    color: red;
  }
`
const NumValue = styled.input`
  width: ${props=>props.value<10? "8px" : "16px"};
  padding: 0 1px 0 0;
  text-align: right;
  font-size: 14px;
  line-height: 18px;
  border: none;
  color: ${props=>props.value===99? "red" : "black"};
`

function Intro({title, date, day, count}){
  const [totalParticipants, setTotalParticipants] = useState(0)
  const [participants, setParticipants] = useState(0)
  const [totalCompletion, setTotalCompletion] = useState(0)
  const [completion, setCompletion] = useState(0)
  const [consultant, setConsultant] = useState("장용민")
  const [totalPerson, setTotalPerson] = useState({
    "20th": 99,
    "29th": 99,
    "39th": 99,
    "49th": 99,
    "59th": 99,
    "60th": 99,
    "male": 99,
    "female": 99,
    "ordinary": 99,
    "fail": 99,
    "origin": 99,
    "jump": 99,
  })
  const [person, setPerson] = useState({
    "20th": 99,
    "29th": 99,
    "39th": 99,
    "49th": 99,
    "59th": 99,
    "60th": 99,
    "male": 99,
    "female": 99,
    "ordinary": 99,
    "fail": 99,
    "origin": 99,
    "jump": 99,
  })
  useEffect(()=>{
    setTotalParticipants(Number(totalPerson["20th"])+Number(totalPerson["29th"])+Number(totalPerson["39th"])+Number(totalPerson["49th"])+Number(totalPerson["59th"])+Number(totalPerson["60th"]))
  },[totalPerson])
  return(
    <Container>
      <Title>1. 운영 개요</Title>
      <SubTitle>가. 기간 및 장소</SubTitle>
      <ContentContainer>
        <div>❍ 강의주제 : {title}</div>
        <div>❍ 운영기간 : {date.slice(0,4)}. {date.slice(5,7)}. {date.slice(8,10)}. ({day}) 14:00~17:00 / 총 3시간</div>
        <div>❍ 장소 : 별관 4층 내일룸</div>
        <div>❍ 참가자 : 총 <Participants value={participants} onChange={e=>setParticipants(e.target.value)} />명(수료자 <Completion value={completion} onChange={e=>setCompletion(e.target.value)} />명)</div>
        <div>❍ 운영기관 : 케이잡스 <Consultant value={consultant} onChange={e=>setConsultant(e.target.value)} /> 컨설턴트</div>
      </ContentContainer>
      <SubTitle>나. 참여자 유형별 현황</SubTitle>
      <ParticipantsContainer border="1">
        <thead style={{backgroundColor: "rgb(229,229,229)"}}>
          <tr>
            <th id="회차">회차</th>
            <th id="진행자">진행자</th>
            <th id="참가인원"><div>참가</div><div>인원</div></th>
            <th id="수료인원"><div>수료</div><div>인원</div></th>
            <th id="중도탈락"><div>중도</div><div>탈락</div></th>
            <th colSpan="6">
              <tr><th colSpan="6">연령별</th></tr>
              <tr><th id="20th">20세미만</th><th id="29th">20~29세</th><th id="39th">30~39세</th><th id="49th">40~49세</th><th id="59th">50~59세</th><th id="60th">60세이상</th></tr>
            </th>
          </tr>
        </thead>
        <tbody>
          {count>1&&
          <tr>
            <td headers="회차">{Number(count)===2? "1" : "1~"+(count-1)}회차</td><td headers="진행자">-</td><td headers="참가인원">{totalParticipants}</td><td headers="수료인원"><TotalCompletion value={totalCompletion} onChange={e=>setTotalCompletion(e.target.value)} /></td><td headers="중도탈락">{totalParticipants-totalCompletion}</td>
            <TotalPersonBox colSpan="6">
              <TotalPerson value={totalPerson["20th"]} onChange={e=>setTotalPerson({...totalPerson, "20th": e.target.value})} />
              <TotalPerson value={totalPerson["29th"]} onChange={e=>setTotalPerson({...totalPerson, "29th": e.target.value})} />
              <TotalPerson value={totalPerson["39th"]} onChange={e=>setTotalPerson({...totalPerson, "39th": e.target.value})} />
              <TotalPerson value={totalPerson["49th"]} onChange={e=>setTotalPerson({...totalPerson, "49th": e.target.value})} />
              <TotalPerson value={totalPerson["59th"]} onChange={e=>setTotalPerson({...totalPerson, "59th": e.target.value})} />
              <TotalPerson value={totalPerson["60th"]} onChange={e=>setTotalPerson({...totalPerson, "60th": e.target.value})} />
            </TotalPersonBox>
          </tr>
          }
          <tr>
            <td headers="회차">{count}회차</td><td headers="진행자">{consultant}</td><td headers="참가인원">{participants}</td><td headers="수료인원">{completion}</td><td headers="중도탈락">{participants-completion}</td>
            <PersonBox colSpan="6">
              <Person id={Number(person["20th"])+Number(person["29th"])+Number(person["39th"])+Number(person["49th"])+Number(person["59th"])+Number(person["60th"])} className={completion} value={person["20th"]} onChange={e=>setPerson({...person, "20th": e.target.value})} />
              <Person value={person["29th"]} onChange={e=>setPerson({...person, "29th": e.target.value})} />
              <Person value={person["39th"]} onChange={e=>setPerson({...person, "39th": e.target.value})} />
              <Person value={person["49th"]} onChange={e=>setPerson({...person, "49th": e.target.value})} />
              <Person value={person["59th"]} onChange={e=>setPerson({...person, "59th": e.target.value})} />
              <Person value={person["60th"]} onChange={e=>setPerson({...person, "60th": e.target.value})} />
            </PersonBox>
          </tr>
          <tr>
            <td colSpan="2">누계</td><td>{Number(totalParticipants)+Number(participants)}</td><td>{Number(totalCompletion)+Number(completion)}</td><td>{(Number(totalParticipants)+Number(participants))-(Number(totalCompletion)+Number(completion))}</td>
            <PersonBox2 colSpan="6">
              <Person2 value={Number(totalPerson["20th"])+Number(person["20th"])} readOnly />
              <Person2 value={Number(totalPerson["29th"])+Number(person["29th"])} readOnly />
              <Person2 value={Number(totalPerson["39th"])+Number(person["39th"])} readOnly />
              <Person2 value={Number(totalPerson["49th"])+Number(person["49th"])} readOnly />
              <Person2 value={Number(totalPerson["59th"])+Number(person["59th"])} readOnly />
              <Person2 value={Number(totalPerson["60th"])+Number(person["60th"])} readOnly />
            </PersonBox2>
          </tr>
        </tbody>
      </ParticipantsContainer>
      <Title>2. 운영 내용</Title>
      <SubTitle>가. 참여자 구성 및 집단 특성</SubTitle>
      <ContentContainer>
        <CharacterBox><div>❍</div><div>참여자는 총 {completion}명으로, 성별로는 남성 <NumValue value={person.male} onChange={e=>setPerson({...person, "male": e.target.value})} />명, 여성 <NumValue value={person.female} onChange={e=>setPerson({...person, "female": e.target.value})} />명이 참여했으며, 연령별로는 20세 미만 {person["20th"]}명, 20대 {person["29th"]}명, 30대 {person["39th"]}명,40대 {person["49th"]}명, 50대 {person["59th"]}명, 60대 이상 {person["60th"]}명 참여함.</div></CharacterBox>
        <CharacterBox><div>❍</div><div>일반구직자 <NumValue value={person.ordinary} onChange={e=>setPerson({...person, "ordinary": e.target.value})} />명, 실업급여 수급자 <NumValue value={person.fail} onChange={e=>setPerson({...person, "fail": e.target.value})} />명, 국민취업지원제도 참여자 <NumValue value={person.origin} onChange={e=>setPerson({...person, "origin": e.target.value})} />명, 구직자 도약패키지 참여자 <NumValue value={person.jump} onChange={e=>setPerson({...person, "jump": e.target.value})} />명 참여함.</div></CharacterBox>
        <CharacterBox><div>❍</div><div>다양한 참여자가 함께하였으며, 구직 활동으로 인한 스트레스 해소에 대해 고민하고 있었음. 이들은 현명하게 구직 활동을 위한 시간을 보내기 위해 이 프로그램을 신청함. 다른 참여자들도 공감하며 적극적으로 프로그램에 참여함.</div></CharacterBox>
        <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
      </ContentContainer>
      <SubTitle>나. 프로그램 운영</SubTitle>
      {title==="구직스트레스 다루기"
      ?( 
        <ContentContainer>
          <CharacterBox><div>❍</div><div>최근 나의 감정에 대해 생각, 공유, 확인하고 내가 원하는 감정이 무엇인지 찾아볼 수 있도록 함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>현재 나의 스트레스에 대해 이야기하며 나타나는 반응과 현상에 대해 공유, 인터뷰를 통해 자신의 스트레스에 대해 구체화할 수 있도록 진행함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>진단지를 통해 스트레스 진단, 스트레스 대응 방식 객관적으로 확인함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>소그룹 활동으로 자신의 스트레스 대응 방식과 스트레스 해소법에 관한 이야기 나눔.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>스트레스 완화에 도움이 되는 추천하는 해소법에 대해 알아보고 함께 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="근로기준법"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>당일 교육 프로그램의 진행방식에 대한 개괄적 설명 후, 참여자들과의 아이스브레이킹을 통해 라포를 형성하였음.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>강사는 참여자들의 동기유발을 위해 교안을 질문, 문답 형식으로 제작하여 강의를 진행하였고 의사소통을 위해 채팅방을 활용하였음.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>근로기준법 적용 범위를, 상시 근로자 수에 따른 적용 규정 등을 설명하였고, 근로계약의 중요성과 올바른 근로계약서 작성 방법에 대해 안내함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>법정 임금과 근로시간 및 휴게시간, 휴일, 휴가 등의 근로조건을 상세하게 설명하는 시간을 가짐.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>직장 내 괴롭힘 사례 예시, 근로계약 종료 사유에 대해 알아봄.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="취업을 위한 나 이해하기"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>자기 이해의 중요성에 대한 설명 후, 포괄적으로 나의 능력 및 강점을 생각해 메모하고 본 과정을 시작함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>“나는 무엇을 할 수 있을까?”라는 주제로 내가 잘하는 일, 내가 좋아하는 일 등 내가 즐기는 활동들과 내가 보유하고 있는 능력에 대해 구체적인 이야기를 서로 나누는 시간을 가짐.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>나를 표현하는 단어를 선정해 보고, 선정한 이유에 대해 구체적인 나의 이야기를 공유하고 나의 강점에 대해 작성함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="이력서, 자기소개서 작성하기"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>좋은 이력서가 갖추어야 할 내용들을 정리하여 간략하게 설명을 진행함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>좋은 이력서를 이루는 3가지 요건은 첫째. 검토자, 곧 인사담당자의 마음을 이해하는 이력서, 두 번째는 자신의 경력 사항에 충실한 이력서, 세 번째는 양식이 보기 좋은 이력서라는 것을 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 역량과 이미지를 잘 표현해 낼 수 있는 이력서 양식은 면접으로 가는 결정에 중요한 영향을 미침을 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자기소개서 항목별 작성법을 살펴보게 한 후 직무 키워드 중심으로 자기소개서를 작성하는 방법과 주의 사항을 안내 그리고 참여자들의 질문과 답변 시간 후 소감을 나누며 마무리함</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="마음의 힘 기르기"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>관점 전환을 위해, 최근 가장 많이 사용하는 말이나 고민 혹은 최근 후회되는 사례를 이야기할 수 있도록 하여 긍정적인 사고를 할 수 있도록 긍정언어로 변경하는 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>회복탄력성이란 무엇인지 알아보고, 주관적인 확인 및 체크리스트를 통한 회복탄력성을 진단, 동기부여를 위한 개개인의 방법에 대해 공유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 감정에 대해 인지하고 심상법을 설명함, 사고의 흐름에 대해 이해시키고, 생각의 오류를 인지시키고 수정할 수 있도록 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>나의 인생의 10대 뉴스를 선정해 보고 각 사건에 대해 긍정적인 관점으로 전환해 봄.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="잘 살아온 내 인생, 앞으로는?"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>신중년 세대가 공감할 수 있는 그림을 제시하여 맞추며 과거의 나를 회상하며 나의 삶 전반에 대해 떠올릴 수 있도록 퀴즈를 진행함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>지금까지 나의 삶에서 크고 작은 일들을 생각하며 내 인생의 10대 뉴스를 정리해 인생곡선 그래프를 그릴 수 있도록 활동함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>퇴직 후에 할 수 있는 일들과 시니어클럽을 통해 지역별 경력 경로에 대해 알아봄.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>앞으로 삶의 방향성을 생각하며 목표를 설정하고 오늘부터 해야 할 실천 계획을 만들어 봄.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="직장인을 위한 대화의 기술"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>비합리적인 사고를 이해하고 보다 합리적인 사고를 위한 과정에서 20대, 30대, 40대, 50대 이상 연령층마다 사고의 차이를 서로 이해할 수 있는 시간을 가짐.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>시대적, 문화적, 개인적인 배경이 다른 사람들의 생각들을 이해할 수 있는 시간을 갖도록 함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>똑같은 상황에서 사고의 차이가 감정과 결과를 다르게 낼 수 있다는 것을 이해시킴.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>긍정적이고 합리적인 사고를 갖는 것이 얼마나 중요한지 인지시키고 구체적으로 방법에 대해 알아보도록 함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="합격을 부르는 면접전략"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>면접 관련한 동영상 제공과 실제 사례를 통해 이해와 집중도를 높임.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>상황면접 사례질문의 경우, 특정 직군에 대해 준비한 참여자에게 피드백을 제공함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>면접에 관한 다양한 정보와 강의가 있는 사이트를 소개하고 적극적으로 활용해보도록 안내 및 권유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>경기도의 "잡아바"와 같이, 각 지자체 별 구직지원 사이트를 안내함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="DISC 행동유형진단으로 알아본 자기이해"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div></div></CharacterBox>
          <CharacterBox><div>❍</div><div></div></CharacterBox>
          <CharacterBox><div>❍</div><div></div></CharacterBox>
          <CharacterBox><div>❍</div><div></div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="MBTI를 통한 스마트한 직장 적응방법"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div></div></CharacterBox>
          <CharacterBox><div>❍</div><div></div></CharacterBox>
          <CharacterBox><div>❍</div><div></div></CharacterBox>
          <CharacterBox><div>❍</div><div></div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : "강의 주제를 선택하셨나요?"
      }
    </Container>
  )
}
export default Intro;