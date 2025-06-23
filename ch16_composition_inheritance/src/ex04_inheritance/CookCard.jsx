import Card from "./Card";

const CookCard = (props)=>{
    return (
        <div>
            <Card title="Alex" backgroundColor="#a0434e">
                <p>알렉스의 요리</p>
                <img style={{width:"300px", height:"250px"}} src="https://static.wtable.co.kr/image/production/service/recipe/1067/46f0a939-b3e2-4c1e-a2a2-0512f46fab25.jpg" alt="로제 떡볶이" />
                <ul>
                    <li>두부김치 카나페</li>
                    <li>로제 떡볶이</li>
                    <li>김치 피자 탕수육</li>
                    <li>명란젓 파스타</li>
                    <li>카레빵</li>
                </ul>
            </Card>
        </div>
    )
}

export default CookCard;