import FancyBorder from "./FancyBorder";

/**
 * <FancyBorder></FancyBorder>사이에 들어가는 내용이
 * props.children이 된다.
 *
 * children에 어떤 것을 포함(Containment)하느냐에 따라
 * 같은 <FancyBorder>라도 다르게 구성된다.
 */

const WelcomeDesc = (props) => {
  return (
    <FancyBorder npx={10} color="red">
      {/* 이 부분이 FancyBorder에 props.children으로 전달된다. */}
      <h1 className="Desc-title">어서오세요</h1>
      <p>
        <img src="https://health.chosun.com/site/data/img_dir/2021/05/07/2021050701763_0.jpg" alt="블루베리" />
      </p>
      <p className="Desc-summing">
        블루베리는 작은 크기에도 불구하고 건강에 유익한 성분이 가득한
        슈퍼푸드입니다. 안토시아닌을 비롯한 강력한 항산화 물질이 풍부해 면역력
        향상, 노화 방지, 심혈관 건강 유지에 도움을 줍니다. 또한 눈 건강에도
        긍정적인 영향을 주며, 달콤하고 상큼한 맛으로 다양한 요리와 간식에
        활용됩니다.
      </p>
      <p className="Desc-description">
        블루베리는 북미가 원산지인 베리류 과일로, 풍부한 안토시아닌과 비타민 C,
        식이섬유를 함유하고 있어 대표적인 항산화 식품으로 꼽힙니다. 노화 예방,
        면역력 강화, 심혈관 질환 예방, 시력 보호 등에 효과가 있는 것으로 알려져
        있으며, 뇌 건강에도 긍정적인 영향을 줍니다. 특히 저열량이면서도 포만감을
        주기 때문에 다이어트 식단에 자주 포함되며, 생과일, 주스, 잼, 베이킹 등
        다양한 방식으로 활용됩니다. 최근에는 기능성 식품이나 건강보조제로도
        각광받고 있습니다.
      </p>
    </FancyBorder>
  );
};

export default WelcomeDesc;
