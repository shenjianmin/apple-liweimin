import { useRootStore } from "../stores/RootStore"
import { observer } from "mobx-react-lite"

function AppleBasket() {
	const { appleBasketStore } = useRootStore()

	return (
		<div className="appleBusket">
			<div className="title">苹果篮子</div>
			<div className="stats">
				<div className="section">
					<div className="head">当前</div>
					<div className="content">{appleBasketStore.filterApples.length}个苹果，{appleBasketStore.unEatUpsWeight}克</div>
				</div>
				<div className="section">
					<div className="head">已吃掉</div>
					<div className="content">{appleBasketStore.eatUpCount.length}个苹果，{appleBasketStore.eatUpWeight}克</div>
				</div>
			</div>
			<div className="appleList">
				{appleBasketStore.filterApples.map((apple, i) => {
					return (
						<div
							className="appleItem"
							key={apple.index}
						>
							<div className="apple"><img src="./img/apple.png" alt="" /></div>
							<div className="info">
								<div className="name">红苹果 - {apple.index}号</div>
								<div className="weight">{apple.weight}克</div>
							</div>
							<div className="btn-div">
								<button
									onClick={() => appleBasketStore.appleSatusChange(apple.index, true)}
								> 吃掉 </button>
							</div>
						</div>
					);
				})}
			</div>
			<div className="btn-div">
				<button
					onClick={event => {
						appleBasketStore.appleAdd(Math.floor(Math.random() * 1000))
					}}
				>
					{appleBasketStore.isLoading ? '正在采摘...' : '摘苹果'}
				</button>
			</div>

		</div>
	);
}

export default observer(AppleBasket)