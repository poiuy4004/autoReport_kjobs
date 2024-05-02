import { useState } from "react";
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
const Person2 = styled(Person)`
  color: black;
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
  const [participants, setParticipants] = useState(0)
  const [completion, setCompletion] = useState(0)
  const [consultant, setConsultant] = useState("장용민")
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
            <td colSpan="2">누계</td><td></td><td></td><td></td>
            <PersonBox2 colSpan="6">
              <Person2 readOnly />
              <Person2 readOnly />
              <Person2 readOnly />
              <Person2 readOnly />
              <Person2 readOnly />
              <Person2 readOnly />
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
          <CharacterBox><div>❍</div><div>관점 전환을 위해, 최근 가장 많이 사용하는 말이나 고민 혹은 최근 후회되는 사례를 이야기할 수 있도록 하여 긍정적인 사고를 할 수 있도록 긍정언어로 변경하는 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>회복탄력성이란 무엇인지 알아보고, 주관적인 확인 및 체크리스트를 통한 회복탄력성을 진단, 동기부여를 위한 개개인의 방법에 대해 공유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 감정에 대해 인지하고 심상법을 설명함, 사고의 흐름에 대해 이해시키고, 생각의 오류를 인지시키고 수정할 수 있도록 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="근로기준법"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>관점 전환을 위해, 최근 가장 많이 사용하는 말이나 고민 혹은 최근 후회되는 사례를 이야기할 수 있도록 하여 긍정적인 사고를 할 수 있도록 긍정언어로 변경하는 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>회복탄력성이란 무엇인지 알아보고, 주관적인 확인 및 체크리스트를 통한 회복탄력성을 진단, 동기부여를 위한 개개인의 방법에 대해 공유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 감정에 대해 인지하고 심상법을 설명함, 사고의 흐름에 대해 이해시키고, 생각의 오류를 인지시키고 수정할 수 있도록 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="취업을 위한, 나 이해하기"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>관점 전환을 위해, 최근 가장 많이 사용하는 말이나 고민 혹은 최근 후회되는 사례를 이야기할 수 있도록 하여 긍정적인 사고를 할 수 있도록 긍정언어로 변경하는 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>회복탄력성이란 무엇인지 알아보고, 주관적인 확인 및 체크리스트를 통한 회복탄력성을 진단, 동기부여를 위한 개개인의 방법에 대해 공유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 감정에 대해 인지하고 심상법을 설명함, 사고의 흐름에 대해 이해시키고, 생각의 오류를 인지시키고 수정할 수 있도록 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="이력서, 자기소개서 작성하기"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>관점 전환을 위해, 최근 가장 많이 사용하는 말이나 고민 혹은 최근 후회되는 사례를 이야기할 수 있도록 하여 긍정적인 사고를 할 수 있도록 긍정언어로 변경하는 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>회복탄력성이란 무엇인지 알아보고, 주관적인 확인 및 체크리스트를 통한 회복탄력성을 진단, 동기부여를 위한 개개인의 방법에 대해 공유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 감정에 대해 인지하고 심상법을 설명함, 사고의 흐름에 대해 이해시키고, 생각의 오류를 인지시키고 수정할 수 있도록 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="마음의 힘 기르기"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>관점 전환을 위해, 최근 가장 많이 사용하는 말이나 고민 혹은 최근 후회되는 사례를 이야기할 수 있도록 하여 긍정적인 사고를 할 수 있도록 긍정언어로 변경하는 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>회복탄력성이란 무엇인지 알아보고, 주관적인 확인 및 체크리스트를 통한 회복탄력성을 진단, 동기부여를 위한 개개인의 방법에 대해 공유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 감정에 대해 인지하고 심상법을 설명함, 사고의 흐름에 대해 이해시키고, 생각의 오류를 인지시키고 수정할 수 있도록 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="잘 살아온 내 인생, 앞으로는?"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>관점 전환을 위해, 최근 가장 많이 사용하는 말이나 고민 혹은 최근 후회되는 사례를 이야기할 수 있도록 하여 긍정적인 사고를 할 수 있도록 긍정언어로 변경하는 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>회복탄력성이란 무엇인지 알아보고, 주관적인 확인 및 체크리스트를 통한 회복탄력성을 진단, 동기부여를 위한 개개인의 방법에 대해 공유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 감정에 대해 인지하고 심상법을 설명함, 사고의 흐름에 대해 이해시키고, 생각의 오류를 인지시키고 수정할 수 있도록 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="직장인을 위한 대화의 기술"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>관점 전환을 위해, 최근 가장 많이 사용하는 말이나 고민 혹은 최근 후회되는 사례를 이야기할 수 있도록 하여 긍정적인 사고를 할 수 있도록 긍정언어로 변경하는 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>회복탄력성이란 무엇인지 알아보고, 주관적인 확인 및 체크리스트를 통한 회복탄력성을 진단, 동기부여를 위한 개개인의 방법에 대해 공유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 감정에 대해 인지하고 심상법을 설명함, 사고의 흐름에 대해 이해시키고, 생각의 오류를 인지시키고 수정할 수 있도록 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="합격을 부르는 면접전략"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>관점 전환을 위해, 최근 가장 많이 사용하는 말이나 고민 혹은 최근 후회되는 사례를 이야기할 수 있도록 하여 긍정적인 사고를 할 수 있도록 긍정언어로 변경하는 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>회복탄력성이란 무엇인지 알아보고, 주관적인 확인 및 체크리스트를 통한 회복탄력성을 진단, 동기부여를 위한 개개인의 방법에 대해 공유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 감정에 대해 인지하고 심상법을 설명함, 사고의 흐름에 대해 이해시키고, 생각의 오류를 인지시키고 수정할 수 있도록 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="DISC 행동유형진단으로 알아본 자기이해"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>관점 전환을 위해, 최근 가장 많이 사용하는 말이나 고민 혹은 최근 후회되는 사례를 이야기할 수 있도록 하여 긍정적인 사고를 할 수 있도록 긍정언어로 변경하는 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>회복탄력성이란 무엇인지 알아보고, 주관적인 확인 및 체크리스트를 통한 회복탄력성을 진단, 동기부여를 위한 개개인의 방법에 대해 공유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 감정에 대해 인지하고 심상법을 설명함, 사고의 흐름에 대해 이해시키고, 생각의 오류를 인지시키고 수정할 수 있도록 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : title==="MBTI를 통한 스마트한 직장 적응방법"
      ?(
        <ContentContainer>
          <CharacterBox><div>❍</div><div>관점 전환을 위해, 최근 가장 많이 사용하는 말이나 고민 혹은 최근 후회되는 사례를 이야기할 수 있도록 하여 긍정적인 사고를 할 수 있도록 긍정언어로 변경하는 실습함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>회복탄력성이란 무엇인지 알아보고, 주관적인 확인 및 체크리스트를 통한 회복탄력성을 진단, 동기부여를 위한 개개인의 방법에 대해 공유함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div>자신의 감정에 대해 인지하고 심상법을 설명함, 사고의 흐름에 대해 이해시키고, 생각의 오류를 인지시키고 수정할 수 있도록 설명함.</div></CharacterBox>
          <CharacterBox><div>❍</div><div><Character placeholder="한 줄 이내로 추가 입력하세요." /></div></CharacterBox>
        </ContentContainer>
      )
      : "강의 주제를 선택하셨나요?"
      }
    </Container>
  )
}
export default Intro;