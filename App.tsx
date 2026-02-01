import React from 'react';
import AmbientBackground from './components/AmbientBackground';
import Intro from './sections/Intro';
import NarrativeSection from './sections/NarrativeSection';
import Epilogue from './sections/Epilogue';

const App: React.FC = () => {
  return (
    <div className="bg-black text-neutral-200 min-h-screen selection:bg-white/20 selection:text-white">
      <AmbientBackground />
      
      <main className="relative">
        <Intro />

        <NarrativeSection 
          number="01"
          title="존재의 본질"
          content={`나의 작업은 어둠으로 던져져 버린 내가 빛으로, 나에게로 다가가는 여정이자 존재의 본질에 대한 탐구이다. 근원적인 존재의 의미 부재에서 오는 공허감의 채워짐이며, 무의식의 형상화이다.
          
          또한 내가 외부 세계, 그리고 타 존재와 언어를 초월하여 교감하고자 하는 매개체이다.
          
          '나의 존재의 본질을 탐구하는 것은 타 존재와 세상의 본질을 탐구함과 다름이 없다.'`}
        />

        <NarrativeSection 
          number="02"
          title="무너진 세계"
          content={`유년기 이후, 삶은 억압, 반항, 해체, 소외의 연속이었다. 주류의 규칙에 반항하며 비주류의 집단에 늘 속해 있었으나, 그 어디에서도 명확한 소속감을 느끼기 어려웠다.
          
          11세 때 부모님이 이혼하셨다. 행복하고 화목했던 유년 시절이었기에 더욱 극적이었던 그 사건은 절대적이었던 세상의 무너짐이자 해체였다. 내가 인식하는 세계가 부서져 버린 첫 번째 사건이자 시발점이었다.
          
          이후 믿음이라는 가치는 내게서 상실되어 버렸다.`}
        />

        <NarrativeSection 
          number="03"
          title="이방인의 시간"
          content={`한국 사회에서 이혼 가정이라는 조건 하나만으로도 이방인이 되어 버렸다. 사회의 그림자에 내던져져 버렸다. 반항하는 자아를 뒤집어쓴 채 외부의 억압에 반항하기 시작했다.
          
          초등학교 3곳, 중학교 3곳, 고등학교 3곳을 다녔다. 어딘가에서 안정감을 느끼기도 전에 관계의, 환경의 부서짐이 연속되었다.
          
          자연스레 사회에서 소외받은 소수의 집단으로 더 깊이 들어갔다. 경계에 서서 존재하는 것에 점차 익숙해져 갔다.`}
        />

        <NarrativeSection 
          number="04"
          title="전환점"
          content={`외부로 향했던 부정과 혐오의 에너지가 극에 달했을 때, 그 강렬한 에너지는 내면으로 향하기 시작했다. 2017년경 심한 우울증이 찾아왔다.
          
          도망치듯 떠난 영국에서 약 1년간 살았다. 그곳에서의 경험은 외부 세상과 타 존재를, 우울증은 나의 내면을 인식하는 방식이 변화하게 된 큰 전환점이 되었다.
          
          지금도 심리 상담을 받고 약을 먹고 있다. 하지만 나는 삶을 살아가고자 '선택'했다.`}
        />
        
        <NarrativeSection 
           number="05"
           title="도구: 사진"
           content={`나의 삶이었지만 삶의 경계에서 수동태의 형태로 관찰자로 머물렀다. 외부의 억압에는 이유 없이 반항하며 부정했지만, 모순적이게도 스스로의 내면을 억압해 나아갔다.
           
           그러나 관찰자의 역할인 사진을 통해 역설적이게도 마침내 나는 나의 삶에, 세상에 뛰어들었다.`}
        />

        <Epilogue />
      </main>
    </div>
  );
};

export default App;