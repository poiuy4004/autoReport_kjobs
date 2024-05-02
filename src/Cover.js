import LogoPng from "./assets/logo.png";
import styled from "styled-components";

const Container = styled.article`
  align-items: center;
  justify-content: space-between;
  & input{
    border: none;
  }
`
const TitleAndDate = styled.section`
  flex: 1;
  width: 100%;
  margin: 27mm 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const TitleContainer = styled.div`
  heiht: min-content;
  width: 94%;
  padding: 27px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 5px rgb(45,175,239);
`
const Title1 = styled.h1`
  font-size: 17px;
  line-height: 34px;
  text-shadow: 1.4px 1.4px rgb(204,204,204);
`
const Title2 = styled.h1`
  font-size: 24px;
  line-height: 48px;
  text-shadow: 1.4px 1.4px rgb(204,204,204);
`
const Title2Input = styled.input`
  width: ${props=>props.value.length<2? "15px" : props.value.length<3? "30px" : "45px"};
  padding: 0 2px 0 0;
  text-align: right;
  font-size: 24px;
  font-weight: 700;
  line-height: 48px;
  text-shadow: 1.4px 1.4px rgb(204,204,204);
  overflow: visible;
  color: ${props=>props.value===0? "red" : "black"};
`
const Title3 = styled.select`
  min-width: 333px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 32px;
  border: none;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  text-shadow: 1.4px 1.4px rgb(204,204,204);
  color: ${props=>props.value==="주제 선택"? "red" : "black"};
`
const DateConteiner = styled.h1`
  flex: 1;
  display: flex;
  align-items: center;
`
const Date = styled.input`
  font-size: 22px;
  font-weight: 500;
  &::-webkit-calendar-picker-indicator{
    display: none;
  }
  color: ${props=>props.value==="2024-00-00"? "red" : "black"};
`
const Day = styled.input`
  width: 21px;
  padding: 0 0 3px 0;
  font-size: 20px;
  font-weight: 500;
  border: none;
  color: ${props=>props.value==="토"? "red" : "black"};
`
const LogoAndName = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Logo = styled.img`
  width: 30mm;
  padding: 10px
`
const Name = styled.h1`
  font-size: 26px;
`

function Cover({count, setCount, title, setTitle, date, setDate, day, setDay}){
  return(
    <Container>
      <TitleAndDate>
        <TitleContainer>
          <Title1>2024년 성남고용복지플러스센터 단기집단 프로그램</Title1>
          <Title2><Title2Input value={count} onChange={e=>setCount(e.target.value)} />회차 운영결과 보고서</Title2>
          <Title3 value={title} onChange={e=>setTitle(e.target.value)}>
            <option>주제 선택</option>
            <option>구직스트레스 다루기</option>
            <option>근로기준법</option>
            <option>취업을 위한 나 이해하기</option>
            <option>이력서, 자기소개서 작성하기</option>
            <option>마음의 힘 기르기</option>
            <option>잘 살아온 내 인생, 앞으로는?</option>
            <option>직장인을 위한 대화의 기술</option>
            <option>합격을 부르는 면접전략</option>
            <option>DISC 행동유형진단으로 알아본 자기이해</option>
            <option>MBTI를 통한 스마트한 직장 적응방법</option>
          </Title3>
        </TitleContainer>
        <DateConteiner>
          <Date type="date" value={date} onChange={e=>setDate(e.target.value)}/>
          <Day value={day} onChange={e=>setDay(e.target.value)} />
        </DateConteiner>
      </TitleAndDate>
      <LogoAndName>
        <Logo src={LogoPng} />
        <Name>케이잡스</Name>
      </LogoAndName>
    </Container>
  )
}
export default Cover;